import React, { useEffect, useState } from 'react'
import { Grid, Card, Divider, Chip } from '@mui/material'
import { collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'
import { database } from '../Firebase/setup'
import { stripHtml } from 'string-strip-html'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { TextField, Button } from '@mui/material'

function AllDocs() {
    const navigate = useNavigate()
    const [updateView, setUpdateView] = useState(false)

    // Fetch documents
    const [documents, setDocuments] = useState([])
    const getData = async() => {
        const documentRef = collection(database, "documents")
        const data = await getDocs(documentRef)
        const filteredData = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id
        }))
        setDocuments(filteredData);
    }

    // Update handler
    const handleUpdate = (document) => {
        navigate('/editor', {state: {document}})
    }

    // Delete document
    const deleteDocument = async(id) => {
        const documentRef = doc(database, "documents", id)
        await deleteDoc(documentRef)
        setUpdateView(!updateView)
        toast.success("Document deleted")
    }

    // Add note
    const [noteId, setNoteId] = useState("")
    const [note, setNote] = useState("")
    const addNote = (id) => {
        setNoteId(id);
    }
    const updateNote = async(id) => {
        const documentRef = doc(database, "documents", id)
        const data = {
            note: note
        }
        await updateDoc(documentRef, data)
        setNoteId("")
        setUpdateView(!updateView)
    }

    // Handle favorite
    const updateFav = async(id, value) => {
        const documentRef = doc(database, "documents", id)
        const data = {
            favorite: value
        }
        await updateDoc(documentRef, data)
        setUpdateView(!updateView)
    }

    useEffect(() => {
        getData()
    }, [updateView])

    return (
        <div>
            <ToastContainer
                position='bottom-right'
                theme='colored' />
            <Grid container spacing={2}>
                {
                    documents.length > 0 ?
                        documents.map((document) => (
                            <Grid item xs={12} md={6} lg={4} xl={3} sm={12}>
                                <Card variant="outlined" className='p-2' style={{minHeight:'230px'}}>
                                    <div className='row'>
                                        <div className='col-8'><p className='m-0 fw-bold fs-4'>{document.title}</p></div>
                                        <div className='icons col text-center'>
                                            {
                                                document.favorite ?
                                                <i className="fa-solid fa-star me-2" style={{color: '#ffd500'}} onClick={() => updateFav(document.id, false)}></i>
                                                :
                                                <i className="fa-regular fa-star me-2 text-secondary" onClick={() => updateFav(document.id, true)}></i>
                                            }
                                            <i className="fa-solid fa-file-pen me-2 text-secondary" onClick={() => handleUpdate(document)}></i>
                                            <i className="fa-solid fa-circle-minus text-secondary" onClick={() => deleteDocument(document.id)}></i>
                                        </div>
                                    </div>
                                    <p>{stripHtml(document.body).result.slice(0, 75)}...</p>
                                    <Divider textAlign="left" className='text-secondary' style={{fontSize:'small'}}><Chip label="Notes"></Chip></Divider>
                                    {
                                        document.id === noteId ?
                                        <>
                                            <TextField
                                                id="standard-multiline-static"
                                                multiline
                                                rows={3}
                                                variant="standard"
                                                className='w-100 mt-2'
                                                onChange={(e) => setNote(e.target.value)}
                                            />
                                            <Button sx={{borderRadius: "0", fontWeight:"700", boxShadow:'none'}} variant='contained' className='mt-2 mb-2' onClick={() => updateNote(document.id)}>Add Note</Button>
                                        </>

                                        :
                                        <p className='mt-2 text-secondary' style={{fontSize:'small'}} onClick={() => addNote(document.id)}>{document.note || "Notes here"}</p>
                                    }
                                </Card>
                            </Grid>
                        )) : <div className='text-center w-100 d-flex justify-content-center align-items-center'><h3>Space awaits content</h3></div>
                }
            </Grid>
        </div>
    )
}

export default AllDocs
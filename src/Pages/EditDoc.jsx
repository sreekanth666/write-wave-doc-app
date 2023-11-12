import React, { useEffect } from 'react'
import ReactQuill from 'react-quill'
import { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { database } from '../Firebase/setup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EditDoc() {
    const location = useLocation()
    const navigate = useNavigate()
    const [value, setValue] = useState('');
    const [title, setTitle] = useState("")
    const editDocument = [location.state?.document]
    useEffect(() => {
        if (location.state !== null) {
            setValue(editDocument[0].body)
            setTitle(editDocument[0].title)
        }
    },[])

    // Quill configurations
    const toolbarOptions = [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        ['link'],
        [{ 'align': [] }],
        ['clean'],
    ];

    // Firebase connection
    const addDocument = async(e) => {
        e.preventDefault()
        const documentRef = collection(database, "documents")
        if (title === "" || value === '') {
            toast.info("Oops! Please fill in all fields before moving on")
        } else {
            await addDoc(documentRef, {
                title: title,
                body: value,
                note: "",
                favorite: false
            })

            navigate('/')
            
        }
    }

    // Update documents
    const updateDocument = async(e, Id) => {
        e.preventDefault()
        const editedDocument = {
            title: title,
            body: value
        }
        const documentDoc = doc(database, "documents", Id)
        await updateDoc(documentDoc, editedDocument)
        navigate('/')
    }
    

    return (
        <div className='container mt-4 mb-4' style={{minHeight:'100dvh'}}>
            <ToastContainer
                theme='colored'
                position='bottom-right'
            />
            {
                location.state !== null ?
                <>
                    <TextField id="filled-basic" label="Title" variant="filled" className='mb-3 w-100' sx={{fontWeight:'700'}} onChange={(e) => setTitle(e.target.value)} value={title}/>
                    <ReactQuill theme="snow" value={value} onChange={setValue} modules={{ toolbar: {container: toolbarOptions}}} />
                    <Button sx={{borderRadius: "0", fontWeight:"700", boxShadow:'none'}} variant='contained' className='mt-2 mb-2' onClick={(e) => updateDocument(e, editDocument[0].id)}>Update & Return to home</Button>
                </>
                :
                <>
                    <TextField id="filled-basic" label="Title" variant="filled" className='mb-3 w-100' sx={{fontWeight:'700'}} onChange={(e) => setTitle(e.target.value)}/>
                    <ReactQuill theme="snow" value={value} onChange={setValue} modules={{ toolbar: {container: toolbarOptions}}} />
                    <Button sx={{borderRadius: "0", fontWeight:"700", boxShadow:'none'}} variant='contained' className='mt-2 mb-2' onClick={(e) => addDocument(e)}>Save & Return to home</Button>
                </>
            }
        </div>
    )
}

export default EditDoc



import React from 'react'
import ReactQuill from 'react-quill'
import { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import { Link } from 'react-router-dom';
import { Button, TextField } from '@mui/material';

function EditDoc() {
    const [value, setValue] = useState('');
    const toolbarOptions = [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        ['link'],
        [{ 'align': [] }],
        ['clean'],
    ];
    console.log(value);
    return (
        <div className='container mt-4 mb-4' style={{minHeight:'100dvh'}}>
            <TextField id="filled-basic" label="Title" variant="filled" className='mb-3 w-100' sx={{fontWeight:'700'}}/>
            <ReactQuill theme="snow" value={value} onChange={setValue} modules={{ toolbar: {container: toolbarOptions}}} />
            <Link to={"/"}><Button sx={{borderRadius: "0", fontWeight:"700", boxShadow:'none'}} variant='contained' className='mt-2 mb-2' style={{zIndex:'-1'}}>Return to home</Button></Link>
        </div>
    )
}

export default EditDoc



import React, { useState } from 'react';
import { Button, ButtonGroup } from '@mui/material';
import { Link } from 'react-router-dom';
import AllDocs from './AllDocs';
import Fav from './Fav'

function Home() {
    const [docView, setDocView] = useState("all")
    return (
        <div className='container mt-4 mb-4' style={{minHeight: '100dvh'}}>
            <div className='container-fluid d-flex justify-content-between align-items-center'>
                <ButtonGroup variant="outlined" aria-label="outlined button group">
                    <Button sx={docView === "all" ? {borderRadius: "0", fontWeight:"700", backgroundColor:"#ddeef8"} : {borderRadius: "0", fontWeight:"700"}} onClick={() => setDocView("all")}>All</Button>
                    <Button sx={docView === "fav" ? {borderRadius: "0", fontWeight:"700", backgroundColor:"#ddeef8"} : {borderRadius: "0", fontWeight:"700"}} onClick={() => setDocView("fav")}>Favorite</Button>
                </ButtonGroup>
                <Link to={"/editor"}><Button sx={{borderRadius: "0", fontWeight:"700", boxShadow:'none'}} variant='contained'><i className="fa-solid fa-circle-plus me-2"></i> Add Document</Button></Link>
            </div>
            
            <div className="container-fluid mt-4 mb-2">
                {
                    docView === "all" ?
                    <AllDocs /> :
                    <Fav />
                }
            </div>
        </div>
    )
}

export default Home
import React from 'react'
import { Grid, Card, Divider, Chip } from '@mui/material'

function AllDocs() {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} md={3} lg={4} xl={3} sm={6}>
                    <Card variant="outlined" className='p-2'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <p className='m-0 fw-bold fs-4'>Title</p>
                            <div className='icons'>
                                <i className="fa-solid fa-file-pen ms-2 me-2 text-secondary"></i>
                                <i className="fa-solid fa-circle-minus ms-2 me-2 text-secondary"></i>
                            </div>
                        </div>
                        <p>Content</p>

                        <Divider textAlign="left" className='text-secondary' style={{fontSize:'small'}}><Chip label="Notes"></Chip></Divider>

                        <p className='mt-2 text-secondary' style={{fontSize:'small'}}>Note here</p>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3} lg={4} xl={3} sm={6}>
                <Card variant="outlined" className='p-2'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <p className='m-0 fw-bold fs-4'>Title</p>
                            <div className='icons'>
                                <i className="fa-solid fa-file-pen ms-2 me-2 text-secondary"></i>
                                <i className="fa-solid fa-circle-minus ms-2 me-2 text-secondary"></i>
                            </div>
                        </div>
                        <p>Content</p>

                        <Divider textAlign="left" className='text-secondary' style={{fontSize:'small'}}><Chip label="Notes"></Chip></Divider>

                        <p className='mt-2 text-secondary' style={{fontSize:'small'}}>Note here</p>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3} lg={4} xl={3} sm={6}>
                <Card variant="outlined" className='p-2'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <p className='m-0 fw-bold fs-4'>Title</p>
                            <div className='icons'>
                                <i className="fa-solid fa-file-pen ms-2 me-2 text-secondary"></i>
                                <i className="fa-solid fa-circle-minus ms-2 me-2 text-secondary"></i>
                            </div>
                        </div>
                        <p>Content</p>

                        <Divider textAlign="left" className='text-secondary' style={{fontSize:'small'}}><Chip label="Notes"></Chip></Divider>

                        <p className='mt-2 text-secondary' style={{fontSize:'small'}}>Note here</p>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3} lg={4} xl={3} sm={6}>
                <Card variant="outlined" className='p-2'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <p className='m-0 fw-bold fs-4'>Title</p>
                            <div className='icons'>
                                <i className="fa-solid fa-file-pen ms-2 me-2 text-secondary"></i>
                                <i className="fa-solid fa-circle-minus ms-2 me-2 text-secondary"></i>
                            </div>
                        </div>
                        <p>Content</p>

                        <Divider textAlign="left" className='text-secondary' style={{fontSize:'small'}}><Chip label="Notes"></Chip></Divider>

                        <p className='mt-2 text-secondary' style={{fontSize:'small'}}>Note here</p>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default AllDocs
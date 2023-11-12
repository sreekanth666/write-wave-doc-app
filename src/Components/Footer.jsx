import React from 'react'

function Footer() {
    return (
        <div className='container-fluid pt-3 pb-3 ps-5 pe-5 text-light' style={{backgroundColor:"#1775ce"}}>
            <div className='d-flex justify-content-between align-items-center'>
                <div>
                    <h3 style={{fontWeight: "700"}} className='m-0'>Write Wave</h3>
                    <p className='m-0 fw-bold'>Write with Precision, Create with Ease!</p>
                </div>

                <div>
                    <p>Explore it on</p>
                    <i className="fa-brands fa-github fs-3"></i>
                </div>
            </div>

            <p className='text-center mt-5'>Made with <i className="fa-solid fa-heart ms-1 me-1"></i> by Sreekanth</p>
        </div>
    )
}

export default Footer
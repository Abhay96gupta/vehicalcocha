import React from 'react'
import { Link } from 'react-router-dom'

function Banner() {
  return (
    <>
        <div className='container-fluid bg-img' >
            <div className='row height d-flex justify-content-center align-items-center'> 
                <div className='col-md-8'>
                    <div className='search'>
                        <i className='fa fa-search'></i>
                        <input type='text' className='form-control' placeholder='find your dream Car'/>
                        <button className='btn btn-primary'>Search</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Banner
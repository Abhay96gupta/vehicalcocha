import React from 'react'
import Naviagte from '../../routes/Naviagte'
import Headers from '../home/Headers'
import Footer from '../home/Footer'
function Layouts() {
  return (
    <>
        <Headers/>
        <div>
          <Naviagte/>
        </div>
        <Footer/>
    </>
  )
}

export default Layouts
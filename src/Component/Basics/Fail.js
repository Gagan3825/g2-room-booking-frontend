import React from 'react'
import './SucFail.css'

import { useNavigate } from "react-router-dom";
import Navbar from '../Navbar'
import Footer from './Footer';


function Fail() {
  return (
    <div className='sucFail'>
      <div className='sucfailnav'><Navbar /></div>
      
     <h1 className='sucfailh1'>Booking Failed</h1>
     <Footer />
    </div>
  )
}

export default Fail
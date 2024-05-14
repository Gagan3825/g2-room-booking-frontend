import React from 'react'
import './SucFail.css'
import { useNavigate } from "react-router-dom";
import Navbar from '../Navbar'
import Footer from './Footer'


function Success() {
  const navigate = useNavigate();
  return (
    <div className='sucFail'>
      <div className='sucfailnav'><Navbar /></div>
      
     <h1 className='sucfailh1'>Booking Successful</h1>
      <button onClick={()=>navigate('/profile')} className="button">Profile</button>
     <Footer />
    </div>
  )
}

export default Success
import React,{useEffect} from 'react'
 import Data from "../Data";
import Navbar from './Navbar';
import axios from 'axios';


function Home() {
 
  
  return (
    <>
        <Navbar />
        <Data/>
    </>
  )
}

export default Home
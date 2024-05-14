import React,{useEffect} from 'react'
import { useNavigate } from "react-router-dom";
function Protectroute(props) {
    const {Component} = props
    const navigate = useNavigate();
    useEffect(() => {
        
        const isLoggedIn = localStorage.getItem('login') === 'true';
        const isregister = localStorage.getItem('register') === 'true';
        
        
        if (!isLoggedIn || !isregister) {
            navigate('/');
        }
    }, [navigate]);
  return (
    <div>
    <Component/>
    </div>
  )
}

export default Protectroute
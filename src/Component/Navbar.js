import React, { useState, useEffect } from "react";
import userLogo from "../Component/Basics/0766d183119ff92920403eb7ae566a85-removebg-preview.png";
import myImage from "../Component/Basics/logo.png";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Login from "./Basics/Login";

function Navbar() {
  // const [name, setName] = useState("");
  const [imagecart, setImage] = useState({});
  const navigate = useNavigate();
  const imaged=localStorage.getItem("avatarURL");
  const name=localStorage.getItem("username");


 
  const handleprofile = () => {
    navigate("/profile");
  };

  
  
  
 
  return (
    <>
      <div className="head">
        <div className="innerHead">
          <img src={myImage} alt="" height="70px" width="70px" />
          <h2 className="hr">G2 Hotel Booking Website</h2>
        </div>
        <div className="innerHead">
          {/* <h2 className="hr" >{name}</h2> */}

          {/* {!flag ? (
            <img src={imagecart.image} height="50px" width="50px" />
          ) : (
            <img src={userLogo} height="50px" width="50px" />
          )} */}
      {/* <img src={imaged} height="100px" width="100px" style={{ borderRadius: '100%' }} /> */}
            

          
        </div>
      </div>

      <div className="rat">
        <NavLink to="/home" className="act">
          Home
        </NavLink>
        <NavLink to="/contact" className="act">
          Contact
        </NavLink>
        
        <NavLink to="/profile" className="act" onClick={handleprofile}>
          Profile
        </NavLink>
      </div>
    </>
  );
}

export default Navbar;

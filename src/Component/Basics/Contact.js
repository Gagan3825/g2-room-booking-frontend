import React, { useState } from "react";

import "./ContactForm.css";
import Footer from "./Footer";
import axios from "axios";
import Navbar from "../Navbar";

const backend=process.env.REACT_APP_BACKEND_ID


const Contact = () => {
  const [name, setname] = useState('');
  const [message, setmessage] = useState('');
  const [email, setemail] = useState('');
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
       const check= await axios.post(`${backend}/contact`,{name,email,message});
        if(check.data==="success"){
            alert("email sent")
            setname('')
            setemail('')
            setmessage('')
        }
    }catch(error){
        console.error("Error:", error);
        alert("An error occurred while sending the email.");
    }
  };

  return (
    <>
    
    <div className="Contact">
      <div>
    <Navbar /></div>
      <div className="contact-form-container">
        <h1 className="contactHead">Contact Us</h1>
        <form onSubmit={handleSubmit}  className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              name={name}
              required
            onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name={email}
              value={email}
              placeholder="Enter your email"
              required
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="5"
              name={message}
              value={message}
            placeholder="Message..."
            required
            onChange={(e) => setmessage(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="glowing-btn">
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
    </>
  );
};

export default Contact;

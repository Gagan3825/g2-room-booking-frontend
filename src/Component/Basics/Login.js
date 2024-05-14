import React, { useState, useEffect } from "react";
import "./ContactForm.css";
import Footer from "./Footer";
import axios from "axios";
import myImage from './logo.png';

import { useNavigate } from "react-router-dom";
const backend=process.env.REACT_APP_BACKEND_ID

const Login = () => {
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 

    try {
      const result = await axios.post(`${backend}/login`, { email, password });

      if (result.data.success) {
        localStorage.setItem('login', true);
        localStorage.setItem('username', result.data.userName);
        localStorage.setItem('useremail', result.data.userEmail);
        navigate('/home');
      } else {
        alert("Please fill correct info");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); // Set loading state to false after request completes
    }
  };

  useEffect(() => {
    let login = localStorage.getItem('login');
    if (login) {
      navigate('/home');
    }
  }, []);

  return (
    <>
      <div className="Contact">
        <div className="head">
          <div className='innerHead'>
            <img src={myImage} alt="" height="60px" width="60px" />
            <h2 className='hr'>G2 Hotel Booking Website</h2>
          </div>
        </div>
        <div className="contact-form-container">
          <h1 className="contactHead">Login</h1>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group"></div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name={email}
                onChange={(e) => setemail(e.target.value)}
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Password</label>
              <input
                type="password"
                id="password"
                name={password}
                placeholder="Enter your password"
                onChange={(e) => setpassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="glowing-btn" disabled={loading}>
              {loading ? "Loading..." : "Login"}
            </button>
          </form>
          <div className="have_account">
            <span id="after_text">
              New to MyApp?{" "}
              <span id="linker">
                <a href="/">Sign Up</a>
              </span>
            </span>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Login;

import React, { useState, useEffect } from "react";
import "./ContactForm.css";
import axios from "axios";
import Footer from "./Footer";
import myImage from './logo.png';
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../Firebase";
const backend=process.env.REACT_APP_BACKEND_ID



const Signup = () => {
    const [name, setname] = useState("");  
    const [password, setpassword] = useState("");
    const [email, setemail] = useState("");
    const [loading, setLoading] = useState(false); // State variable for loading state
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const namePattern = /^[a-zA-Z\s]+$/;

        // Validate name
        if (!name || !namePattern.test(name)) {
            alert("Please enter a valid name.");
            return;
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!passwordPattern.test(password)) {
            alert("Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character.");
            return;
        }

        setLoading(true); // Set loading state to true before making the request

        try {
            await axios.post(`${backend}/register`, { name, email, password });
            alert("Register success")
            navigate("/login");
        } catch (error) {
            if (error.response.status === 409) {
                alert("Email already exists. Please use a different email.");
            } else {
                console.log(error);
            }
        } finally {
            setLoading(false); // Set loading state to false after request completes
        }
    };

    const loginwithgoogle = () => {
        setLoading(true); // Set loading state to true before making the request

        signInWithPopup(auth, provider)
            .then(async (data) => {
                console.log(data);
                const response = await axios.post(`${backend}/firebase/login`, { data });
                console.log(response);
                if (response.status === 200) {
                    navigate("/home")
                    localStorage.setItem('register', true);
                    localStorage.setItem('useremail', data.user.email);
                    localStorage.setItem('username', data.user.displayName)
                    localStorage.setItem('avatarURL', data.user.photoURL)
                }
            }).catch((e) => {
                console.log(e);
            }).finally(() => {
                setLoading(false); // Set loading state to false after request completes
            });
    };

    return (
        <div className="Contact">
            <div className="head">
                <div className='innerHead'>
                    <img src={myImage} alt="" height="60px" width="60px" />
                    <h2 className='hr'>G2 Hotel Booking Website</h2>
                </div>
            </div>
            <div className="contact-form-container">
                <h1 className="contactHead">Sign Up</h1>
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter your name"
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
                            placeholder="Enter your email"
                            required
                            onChange={(e) => setemail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Password</label>
                        <input
                            type="password"
                            id="password"
                            name={password}
                            placeholder="Enter your password"
                            required
                            onChange={(e) => setpassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="glowing-btn" disabled={loading}>
                        {loading ? "Loading..." : "Submit"}
                    </button>
                    <h3 style={{ textAlign: "center" }}>OR</h3>
                </form>
                <button onClick={loginwithgoogle} className="google-button" disabled={loading}>
                    {loading ? "Loading..." : "Sign In With Google"}
                </button>
                <div className="have_account">
                    <span id="after_text">
                        Already have an account?{" "}
                        <span id="linker">
                            <a href="/Login">Login</a>
                        </span>
                    </span>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Signup;

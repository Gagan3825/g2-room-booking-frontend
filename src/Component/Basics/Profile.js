import React, { useState, useRef, useEffect } from 'react';
import DefaultImage from "./0766d183119ff92920403eb7ae566a85-removebg-preview.png";
import editimg from "./edit.svg";
import { useNavigate } from "react-router-dom";
import Navbar from '../Navbar';
import History from './History';
import Footer from './Footer';
import { auth } from '../Firebase';

const backend=process.env.REACT_APP_BACKEND_ID


function Profile() {
  const username = localStorage.getItem("username");
  const [avatarURL, setAvatarURL] = useState(() => localStorage.getItem("avatarURL") || DefaultImage);
  const fileUpload = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    // Save the avatarURL to local storage whenever it changes
    localStorage.setItem("avatarURL", avatarURL);
  }, [avatarURL]);

  const handleImageUpload = (e) => {
    e.preventDefault();
    fileUpload.current.click();
  };

  const uploadImageDisplay = async () => {
    const uploadedFile = fileUpload.current.files[0];
    const cachedURL = URL.createObjectURL(uploadedFile);
    setAvatarURL(cachedURL);
  };

  const handleLogout = () => {
    localStorage.clear();
    auth.signOut();
    navigate("/");
  };

  return (
    // <div className='headProfile'>
    <>
          <div><Navbar /></div>

    <div className='profile'>
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="profileCard">
            <div className="md:flex-shrink-0 relative">
              <img
                src={avatarURL}
                alt="Avatar"
                className="h-48 w-48 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto cursor-pointer"
                onClick={handleImageUpload}
              />
              {/* <button
                type="submit"
                onClick={handleImageUpload}
                className="absolute bottom-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md focus:outline-none"
              >
                <img
                  src={editimg}
                  alt="Edit"
                  className="w-6 h-6"
                />
              </button> */}
              <input
                type="file"
                id="file"
                ref={fileUpload}
                onChange={uploadImageDisplay}
                hidden
              />
            </div>
            {/* <div className="p-8 flex justify-center items-center"> */}
              {/* <div className="text-center"> */}
                {/* <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold"> */}
                  <h1 className='proH1'>{username}</h1>
                  {/* </div> */}
                <button onClick={handleLogout} className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Logout</button>
              {/* </div> */}
            {/* </div> */}
          </div>
        </div>

      </div>
      <div><h1 className='historyHead'>Booking History</h1></div>
      

      <div className='hist'>

        <History/>
      </div>
    </div>
    <Footer />

    </>
    
    // </div>
  );
}

export default Profile;

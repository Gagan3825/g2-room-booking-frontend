import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Contact from './Component/Basics/Contact';
import Detailedcard from './Component/Basics/Detailedcard';
import Login from './Component/Basics/Login';
import Signup from './Component/Basics/Signup';
import Home from './Component/Home';
import "./App.css"
import Success from './Component/Basics/Success';
import Fail from './Component/Basics/Fail';
import Protectroute from './Component/Basics/Protectroute';
import Notfound from './Notfound';
import Profile from './Component/Basics/Profile';





const App = () => {
 
 
  return (
    <>
     <Router>
      
      <Routes>
        <Route path='/' element={<Signup />}/>
        <Route path='/Login' element={<Login />} />
        <Route path='/home' element={ <Home/> } />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/detailed/:id' element={<Detailedcard/>} />
        <Route path='/success' element={<Success/>} />
        <Route path='/cancel' element={<Fail/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='*' element={<Notfound/>} />
      </Routes> 
     </Router>

    </>
  );
};


export default App;
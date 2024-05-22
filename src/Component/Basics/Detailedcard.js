import React from 'react'
import './Detailedcard.css';
import { useParams } from 'react-router-dom';
import Menu from "./menuApi.js";
import SimpleImageSlider from "react-simple-image-slider";
import Footer from './Footer.js';
import Navbar from '../Navbar.js';
import {loadStripe} from '@stripe/stripe-js';

const backend=process.env.REACT_APP_BACKEND_ID


const Detailedcard = () => {
  const { id } = useParams();
  const [menuData, setMenuData] = React.useState(Menu);
  const [curData, setCurData] = React.useState(null);

  React.useEffect(() => {
    const getFilteredData = menuData.find((curElem) => curElem.id == id);

    setCurData(getFilteredData);
  }, [id, menuData])

  if (!curData) {
    return <div>Loading...</div>;
  }

  const images = [
    { url: process.env.PUBLIC_URL + `/${curData.image}` },
    { url: process.env.PUBLIC_URL + `/${curData.image2}`},
    
  ];

  const makepayment= async ()=>{
    const stripe=await loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
    const username=localStorage.getItem('username')
    const useremail=localStorage.getItem('useremail')
    const body ={curData,username,useremail};
    const headers={
      "Content-Type": "application/json", 
    };

    const res=await fetch(`${backend}/create-checkout-session`,
  {
    method: "POST",
    headers:headers,
    body:JSON.stringify(body)
  })

  
  const session=await res.json();
  
  const result=stripe.redirectToCheckout({
    sessionId:session.id,
  })
  if (result.error){
    alert(result.error.message);
  }
}
  return (
    <>
    <Navbar />

    <div className='detailCont'>

      
      <SimpleImageSlider
       style={{objectFit:"cover"}}
        width="90%"
        height={650}
        images={images}
        // showBullets={true}
        // showNavs={true}
        autoPlay={true}
      
      />
      
      <div className='innerDetails'>
      <h1>{curData.name}</h1>
      <h1>Price: {curData.price}</h1>
      
      <p>Description: <span class="description-text">{curData.description}</span></p>

      <button className='glowing-btn' onClick={()=>makepayment()}>Book Now</button>

      </div>

      <Footer />


      </div>
      </>
      // </div>
  )
}

export default Detailedcard;




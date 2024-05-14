import React from 'react';
import './MenuCard.css';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const MenuCard = ({ menuData }) => {

  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/detailed/${id}`);
  }

  return (
    <>
      <div className='main-card--cointainer'>
        {menuData.map((curElem) => {
          return (

            <div className="wrap animate pop">
              <div className="overlay">
                <div className="overlay-content animate slide-left delay-2">
                  <h2 className="animate slide-left pop delay-4">{curElem.name}</h2>

                  <p>{curElem.Location}</p>
                </div>
                <div className="image-content animate slide delay-5">
                <img className="inset0" src={curElem.image} alt="" />

                </div>
                <div className="dots animate">
                  <div className="dot animate slide-up delay-6"></div>
                  <div className="dot animate slide-up delay-7"></div>
                  <div className="dot animate slide-up delay-8"></div>
                </div>
              </div>
              <div className="text">

                <img className="inset" src={curElem.image} alt="" />
                <br />

                <h2 className='price'>Price: {curElem.price}Rs.</h2>
                <br />
                
                <button className='glowing-btn' onClick={() => handleClick(curElem.id)}>
                  Book Now
                </button>
              </div>
            </div>

          )
        })}




      </div>
      <Footer />
    </>
  )
}



export default MenuCard;
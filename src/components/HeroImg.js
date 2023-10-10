import "./HeroImgStyles.css";

import React from 'react';
import IntroImg from "../assets/Homepage.jpg"

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="home-img" 
                src= {IntroImg} alt="IntroImg"/>
        </div>
    </div>
  );
}

export default HeroImg;

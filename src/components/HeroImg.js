import "./HeroImgStyles.css";

import React from 'react';
import IntroImg from "../assets/Homepage.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="home-img" 
                src= {IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
          <p>WELCOME</p>
          <h1>Study Nudge</h1>
          <div className="link">
            <Link to="/login" className="btn">Get Started</Link>
            <Link to="/posts" className="btn btn-light">Posts</Link>
          </div>
        </div>
    </div>
  );
}

export default HeroImg;

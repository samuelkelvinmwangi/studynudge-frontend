import { Link } from "react-router-dom";
import "./AboutContentStyles.css";

import React from 'react';
import About from "../assets/About.jpg"
import Contact from '../routes/Contact'

const AboutContent = () => {
  return (
    <div className="about">
    <div className="left">
        <h1>About Us</h1>
        <p>At Study Nudge, we are passionate about helping you achieve your goals and unlock your full potential. 
        We understand that motivation is the driving force behind every success story. 
        That's why we've created a platform dedicated to inspiring and empowering you on your journey towards greatness. 
        Our team is committed to providing you with daily doses of inspiration, goal-setting tools, 
        and a supportive community that will keep you motivated and on track.</p>
        <Link to="/contact">
            <button className="btn">Contact</button>
        </Link>
    </div>
    <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src={About} className="img" alt="true"/>
            </div>
        </div>
    </div>
      
    </div>
  );
}

export default AboutContent;

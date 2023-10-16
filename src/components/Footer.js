import "./FooterStyles.css"

import React from 'react';
import { FaHome, FaMailBulk, FaPhone } from "react-icons/fa"
import About from '../routes/About'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">

            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:'#000', marginRight:'2rem'}} />
                </div>
                <div>
                    <p>Moringa School Ngong road.</p>
                    <p>Kenya.</p>
                </div>
            </div>

            <div className="phone">
            <FaPhone size={20} style={{color:'#000', marginRight:'2rem'}} />+254-712-456-789
            </div>

            <div className="email">
            <FaMailBulk size={20} style={{color:'#000', marginRight:'2rem'}} />snudge@gmail.com
            </div>

            <div className="right">
                <h4>About Us</h4>
                <p>At Study Nudge, we are passionate about helping you achieve your goals and unlock your full potential. 
        We understand that motivation is the driving force behind every success story. 
        That's why we've created a platform dedicated to inspiring and empowering you on your journey towards greatness.</p>
            </div>

        </div>
    </div>
  );
}

export default Footer;

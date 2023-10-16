import "./FooterStyles.css"

import React from 'react';
import { FaHome, FaPhone } from "react-icons/fa"

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
            <FaPhone size={20} style={{color:'#000', marginRight:'2rem'}} />
            </div>

            <div className="right"></div>

        </div>
    </div>
  );
}

export default Footer;

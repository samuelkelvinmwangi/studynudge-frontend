import "./ContactFormStyles.css";



import React from 'react';
import { FaLocationArrow, FaMailBulk, FaPhone } from "react-icons/fa"

const Contact = () => {
  return (
    <div className="body">
      <h1>Contact Us</h1>
      <p>For any questions and login errors</p>

      <div id="contact-container">
        <div className="contact-info">
        <h4>
            Contact Information
          </h4>
          <p>Our services are available and we have a dedicated team ready to assist you.</p>

          <div className="icon-text">
            <i className="icon"><FaPhone size={20} style={{color:"#fff", marginRight: "2rem"}}/></i>
            <span>text</span>
          </div>

          <div className="icon-text">
            <i className="icon"><FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}}/></i>
            <span>text</span>
          </div>

          <div className="icon-text">
            <i className="icon"><FaLocationArrow size={20} style={{color:"#fff", marginRight: "2rem"}}/></i>
            <span>text</span>
          </div>

          <div className="social-media">
            <a href="#" className="icon-circle">
              <i className="icon"></i>
            </a>
          </div>
        </div>


        <form>
         
        </form>


      </div>
    </div>
  );
}

export default Contact;

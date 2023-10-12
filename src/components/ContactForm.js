import "./ContactFormStyles.css";



import React from 'react';
import { FaFacebook, FaInstagram, FaLocationArrow, FaMailBulk, FaPhone, FaTwitter, FaWhatsapp } from "react-icons/fa"

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
            <i className="icon"><FaPhone  style={{color:"#fff"}}/></i>
            <span>+254-712-456-789</span>
          </div>

          <div className="icon-text">
            <i className="icon"><FaMailBulk  style={{color:"#fff"}}/></i>
            <span>snudge@gmail.com</span>
          </div>

          <div className="icon-text">
            <i className="icon"><FaLocationArrow  style={{color:"#fff"}}/></i>
            <span>Moringa School Ngong road
</span>
          </div>

          <div className="social-media">

            <a href="#" className="icon-circle">
              <i className="icon"><FaFacebook  style={{color:"#fff"}}/></i>
            </a>

            <a href="#" className="icon-circle">
              <i className="icon"><FaInstagram  style={{color:"#fff"}}/></i>
            </a>

            <a href="#" className="icon-circle">
              <i className="icon"><FaTwitter  style={{color:"#fff"}}/></i>
            </a>

            <a href="#" className="icon-circle">
              <i className="icon"><FaWhatsapp  style={{color:"#fff"}}/></i>
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

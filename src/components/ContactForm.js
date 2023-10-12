import "./ContactFormStyles.css";



import React from 'react';
import { FaFacebook, FaInstagram, FaLocationArrow, FaMailBulk, FaPhone, FaTwitter, FaWhatsapp } from "react-icons/fa"

const Contact = () => {
  return (
    <div className="body">
      <h1 className="h">Contact Us</h1>
      <p className="p">For any questions and login errors</p>

      <div id="contact-container">
        <div className="contact-info">
        <h4>
            Contact Information
          </h4>
          <p className="sub-title">Our services are available and we have a dedicated team ready to assist you.</p>

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

            <a href="https://web.facebook.com/?_rdc=1&_rdr" className="icon-circle">
              <i className="icon"><FaFacebook  style={{color:"#fff"}}/></i>
            </a>

            <a href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fonetap%2F%3Fnext%3D%252F%26__coig_login%3D1" className="icon-circle">
              <i className="icon"><FaInstagram  style={{color:"#fff"}}/></i>
            </a>

            <a href="https://twitter.com/i/flow/login" className="icon-circle">
              <i className="icon"><FaTwitter  style={{color:"#fff"}}/></i>
            </a>

            <a href="https://www.whatsapp.com/" className="icon-circle">
              <i className="icon"><FaWhatsapp  style={{color:"#fff"}}/></i>
            </a>

          </div>
        </div>


        <form>

         <div className="col-2">

          <div className="form-group">
            <label>First Name</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>First Name</label>
            <input type="text" />
          </div>
          
         </div>

        </form>


      </div>
    </div>
  );
}

export default Contact;

import './HeroImg2Styles.css';
import HeroImg22 from "../assets/Hero picture 2.jpg";


import React, { Component } from 'react';

class HeroImg2 extends Component { 
    render (){
        return (
            <div className="hero">
                <div className="home-img2">
                    <img className="home-img" 
                        src= {HeroImg22} alt="HeroImg22"/>
                </div>
                <div className="content">
                <h1>{this.props.heading}</h1>
                <p>{this.props.text}</p>
                </div>
            </div>
          );
  
    }
}

export default HeroImg2;
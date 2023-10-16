import './HeroImg2Styles.css';


import React, { Component } from 'react';

class HeroImg2 extends Component { 
    render (){
        return (
    <div className='hero-img'>
        <div className='heading'>
            <hi>{this.props.heading}</hi>
            <p>{this.props.text}</p>
        </div>
      
    </div>
  );
    }
  
}

export default HeroImg2;

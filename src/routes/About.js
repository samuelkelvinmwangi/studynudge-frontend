import React from 'react';
import Navbar from '../components/Navbar';
import AboutContent from '../components/AboutContent';
import Footer from '../components/Footer';
import HeroImg2 from './../components/HeroImg2';

const About = () => {
  return (
    <div>
    <Navbar/>
    <HeroImg2 heading="ABOUT US" text="Who We Are"/>
    <AboutContent/>
    <Footer />
      
    </div>
  );
}

export default About;

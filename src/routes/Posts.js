import React from 'react';
import Navbar from '../components/Navbar';
import PostsCards from '../components/PostsCards'
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';

const Posts = () => {
  return (
    <div>
    <Navbar />
    <HeroImg2 />
    <PostsCards />
    <Footer />
    </div>
  );
}

export default Posts;

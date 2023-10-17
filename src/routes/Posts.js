import React from 'react';
import Navbar from '../components/Navbar';
import PostsCards from '../components/PostsCards'
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import LoginCard from '../components/LoginCard';

const Posts = () => {
  return (
    <div>
    <Navbar />
    <HeroImg2 heading="POSTS" text="Posts Section"/>
    <LoginCard />
    <PostsCards />
    <Footer />
    </div>
  );
}

export default Posts;

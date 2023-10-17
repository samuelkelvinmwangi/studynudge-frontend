import React from 'react';
import './PostsCards.css';
import post1 from '../assets/Video card 1.jpg';

const PostsCards = () => {
  return (
    <div className='post-container'>
      <h1 className='post-heading'>post</h1>
      <div className='container-post'>
        <div className='post-card'>
          <img src={post1} alt='img1'/>
          <h2 className='post-title'>post title</h2>
          <div className='post-details'>
            <p>details go here</p>
          </div>
        </div>
      </div>     
    </div>
  );
}

export default PostsCards;

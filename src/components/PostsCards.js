import React from 'react';
import './PostsCards.css';
import post1 from '../assets/Video card 1.jpg';
import post2 from '../assets/Audio card 1.jpg';
import post3 from '../assets/Bloging card 3.jpg';

const PostsCards = () => {
  return (
    <div className='post-container'>
      <h1 className='post-heading'>POST</h1>
      <div className='container-post'>

        <div className='post-card'>
          <img src={post1} alt='img1'/>
          <h2 className='post-title'>VIDEO</h2>
          <div className='post-details'>
            <p>Search, View and post video content within the app</p>
          </div>
        </div>

        <div className='post-card'>
          <img src={post2} alt='img1'/>
          <h2 className='post-title'>AUDIO</h2>
          <div className='post-details'>
            <p>Listen to music or podcast and share within the app</p>
          </div>
        </div>

        <div className='post-card'>
          <img src={post3} alt='img1'/>
          <h2 className='post-title'>BLOG</h2>
          <div className='post-details'>
            <p>Write and post blogs and share your experience</p>
          </div>
        </div>

      </div>     
    </div>
  );
}

export default PostsCards;
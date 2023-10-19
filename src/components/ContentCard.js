import { useState } from 'react';

function ContentCard() {
    return (
        <div className='card-container'>
            <div className='profile-pic-container'>
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Profile" />
            </div>
            <h3 className='username'>dexterbrian</h3>
            <h3>4 Days Ago</h3>
            <h3 className='content-title'>My Experience at the Safaricom Decode Event</h3>
            <video className='content-video' src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" controls autoplay>
                Your browser does not support the video tag.
            </video>
            <div>
                <i class="fa-regular fa-comment"></i>
                <i class="fa-regular fa-share-from-square"></i>
                <i class="fa-regular fa-bookmark"></i>
            </div>
        </div>
    )
}

export default ContentCard;
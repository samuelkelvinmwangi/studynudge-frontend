import { useState } from 'react';
import './ContentCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faShareNodes, faBookmark } from '@fortawesome/free-solid-svg-icons'

function ContentCard() {
    return (
        <div className='card-container'>
            <div className='profile-pic-container'>
                <img className='profile-pic' src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Profile Picture"/>
            </div>
            <div className='card-data-container'>
                <div className='username-container'>
                    <h5 className='username'>dexterbrian</h5>
                    <h5 className='date'>4 Days Ago</h5>
                </div>
                <div className='content-data-container'>
                    <h5 className='content-title'>My Experience at the Safaricom Decode Event</h5>
                    <div className='video-container'>
                        <i id="play-button" class="fa-solid fa-play" style={{color: 'white', position: 'absolute', top: '120px', left: '233px'}}></i>
                        <video className='content-video' src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4">
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className='content-icons'>
                        <FontAwesomeIcon icon={faMessage} />
                        <FontAwesomeIcon icon={faShareNodes} />
                        <FontAwesomeIcon icon={faBookmark} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentCard;
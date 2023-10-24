import { useState, useRef, useEffect } from 'react';
import './ContentCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faShareNodes, faBookmark, faPlay, faPause } from '@fortawesome/free-solid-svg-icons'

function ContentCard({ title, url, username, created_at }) {

    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showPauseButton, setShowPauseButton] = useState(false);

    const handleMouseEnter = () => {
        setShowPauseButton(true);
    };

    const handleMouseLeave = () => {
        setShowPauseButton(false);
    };

    function handleVideo() {
        if (isPlaying) {
            videoRef.current.pause();
            setIsPlaying(false);
        } else {
            videoRef.current.play();
            setIsPlaying(true);
        }
    }

    return (
        <div className='card-container'>
            <div className='profile-pic-container'>
                <img className='profile-pic' src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Profile"/>
            </div>
            <div className='card-data-container'>
                <div className='username-container'>
                    <h5 className='username'>{ username }</h5>
                    <h5 className='date'> { created_at }</h5>
                </div>
                <div className='content-data-container'>
                    <h5 className='content-title'>{ title }</h5>
                    <div 
                        className='video-container' 
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                        {
                            isPlaying ? 
                                showPauseButton ? (
                                    <i id="pause-button">
                                        <FontAwesomeIcon icon={faPause} onClick={handleVideo}/>
                                    </i>
                                ) : null
                            : (
                                <i id="play-button">
                                    <FontAwesomeIcon icon={faPlay} onClick={handleVideo}/>
                                </i>
                            )
                        }
                        <video
                            ref={videoRef}
                            className='content-video'
                            src={ url }>
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
import { useState, useRef, useEffect } from 'react';
import './ContentCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faShareNodes, faBookmark, faPlay, faPause, faPenToSquare, faCheck, faFlag, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
import { apiUrl } from '../../apiUrl';

function ContentCard({ id, title, mediaUrl, thumbnailUrl, username, created_at = '2 days ago', content = '', content_type, userRole, setIsModalOpen, setClickedContentId }) {

    const mediaRef = useRef(null);
    const navigate = useNavigate();
    const [isPlaying, setIsPlaying] = useState(false);
    const [showPauseButton, setShowPauseButton] = useState(false);
    const appUrl = process.env.PUBLIC_URL;

    const handleMouseEnter = () => {
        setShowPauseButton(true);
    };

    const handleMouseLeave = () => {
        setShowPauseButton(false);
    };

    function handleVideo() {
        if (isPlaying) {
            mediaRef.current.pause();
            setIsPlaying(false);
        } else {
            mediaRef.current.play();
            setIsPlaying(true);
        }
    }

    function openContentView() {
        navigate(`/content/${id}`, { state: { id, title, mediaUrl, thumbnailUrl, username, created_at, content, content_type, userRole } });
    }

    function openUserProfile() {
        
    }

    function openContentEditor() {
        setClickedContentId(id);
        setIsModalOpen(true);
    }

    function approveContent() {
        const confirmation = window.confirm("Are you sure you want to proceed?");

        if (confirmation) {
            // User clicked "OK"
            const formData = {
                status: 'approved'
            };
        
            fetch(`${apiUrl}/contents/change_status/${id}`, {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })
        } else {
            // User clicked "Cancel"
            console.log("User cancelled");
        }
    }

    function flagContent() {
        const confirmation = window.confirm("Are you sure you want to proceed?");

        if (confirmation) {
            // User clicked "OK"
            const formData = {
                status: 'flagged'
            };
        
            fetch(`${apiUrl}/contents/change_status/${id}`, {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })
        } else {
            // User clicked "Cancel"
            console.log("User cancelled");
        }
    }

    return (
        <div className='card-container'>
            <div className='profile-pic-container' onClick={openUserProfile}>
                <img className='profile-pic' src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Profile"/>
            </div>
            <div className='card-data-container'>
                <div className='username-container'>
                    <h5 className='username' onClick={openUserProfile}>{ username }</h5>
                    <h5 className='date'> { created_at }</h5>
                </div>
                <div className='content-data-container'>
                    <h5
                        className='content-title'
                        onClick={openContentView}>{ title }</h5>
                    {
                        content_type === 'article' ? (
                            <div className='image-container' onClick={openContentView}>
                                <img className='content-image' src={ thumbnailUrl } alt="Content" />
                            </div>
                        )
                        : (
                            <div 
                                className='media-container' 
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}>
                                {
                                    isPlaying ? 
                                        showPauseButton ? (
                                            <i id="pause-button">
                                                <FontAwesomeIcon className='pause-icon' icon={faPause} onClick={handleVideo}/>
                                            </i>
                                        ) : null
                                    : (
                                        <i id="play-button">
                                            <FontAwesomeIcon className='play-icon' icon={faPlay} onClick={handleVideo}/>
                                        </i>
                                    )
                                }
                                <video
                                    ref={mediaRef}
                                    className='content-media'
                                    src={ mediaUrl }
                                    poster={ thumbnailUrl }>
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        )
                    }
                    
                    <div className='content-icons'>
                        {
                            userRole === 'student' ?
                            (
                                <>
                                    <FontAwesomeIcon className="font-awesome-icon" icon={faMessage} />
                                    <FontAwesomeIcon className="font-awesome-icon" icon={faShareNodes} />
                                    <FontAwesomeIcon className="font-awesome-icon" icon={faBookmark} />
                                    {/* TODO display this icon if the user create this post <FontAwesomeIcon className="font-awesome-icon" icon={faTrash} /> */}
                                </>
                            ) : (
                                <>
                                    <FontAwesomeIcon className="font-awesome-icon" icon={faPenToSquare} onClick={openContentEditor}/>
                                    <FontAwesomeIcon className="font-awesome-icon" icon={faCheck} onClick={approveContent}/>
                                    <FontAwesomeIcon className="font-awesome-icon" icon={faFlag} onClick={flagContent}/>
                                    {
                                        userRole === 'admin' && <FontAwesomeIcon className="font-awesome-icon" icon={faTrash} />
                                    }
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentCard;
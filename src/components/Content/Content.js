import { useEffect, useState } from 'react';
import './Content.css';
import ContentCard from '../ContentCard/ContentCard';
//import { content } from '../../sampledata';

function Content({ userId, userRole, setIsModalOpen, content, setContent, setClickedContentId }) {
    const [activeTab, setActiveTab] = useState('video');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className='content-tabs'>
            <div className="tab-container">
                <div className={`tab${activeTab === 'video' ? '-active' : ''}`} onClick={() => handleTabClick('video')}>
                    Videos
                </div>
                <div className={`tab${activeTab === 'audio' ? '-active' : ''}`} onClick={() => handleTabClick('audio')}>
                    Audios
                </div>
                <div className={`tab${activeTab === 'article' ? '-active' : ''}`} onClick={() => handleTabClick('article')}>
                    Articles
                </div>
            </div>

            <div className="content-div">
                <div className="content-container">
                    {/* Render content based on activeTab 
                        TODO <p>Sorry! No videos at the moment. Come back later. 😊</p>
                    */}
                    {
                        activeTab === 'video' &&
                            content.filter((item) => item.content_type === 'video').map((item) => 
                                <ContentCard
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    mediaUrl={item.content_media[0].link}
                                    thumbnailUrl={item.content_media[1].link}
                                    username={item.user.username}
                                    created_at={item.created_at}
                                    content={item.body}
                                    content_type={activeTab}
                                    userId={userId}
                                    userRole={userRole}
                                    setIsModalOpen={setIsModalOpen}
                                    setClickedContentId={setClickedContentId}
                                    setContent={setContent}
                                />
                            )
                    }
                    {
                        activeTab === 'audio' &&
                            content.filter((item) => item.content_type === 'audio').map((item) => 
                                <ContentCard
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    mediaUrl={item.content_media[0].link}
                                    thumbnailUrl={item.content_media[1].link}
                                    username={item.user.username}
                                    created_at={item.created_at}
                                    content={item.body}
                                    content_type={activeTab}
                                    userId={userId}
                                    userRole={userRole}
                                    setIsModalOpen={setIsModalOpen}
                                    setClickedContentId={setClickedContentId}
                                    setContent={setContent}
                                />
                            )
                    }
                    {
                        activeTab === 'article' &&
                            content.filter((item) => item.content_type === 'article').map((item) => 
                                <ContentCard
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    mediaUrl={item.content_media[0].link}
                                    thumbnailUrl={item.content_media[1].link}
                                    username={item.user.username}
                                    created_at={item.created_at}
                                    content={item.body}
                                    content_type={activeTab}
                                    userId={userId}
                                    userRole={userRole}
                                    setIsModalOpen={setIsModalOpen}
                                    setClickedContentId={setClickedContentId}
                                    setContent={setContent}
                                />
                            )
                    }
                </div>
            </div>
        </div>
    );
}

export default Content;
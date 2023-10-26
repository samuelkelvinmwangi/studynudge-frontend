import { useState } from 'react';
import './Content.css';
import ContentCard from '../ContentCard/ContentCard';
import { content } from '../../sampledata';

function Content() {
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
                            content.content.filter((item) => item.content_type === 'video').map((item) => 
                                <ContentCard key={item.id} id={item.id} title={item.title} url={item.url} username={item.username} created_at={item.created_at} content_type={activeTab}/>
                            )
                    }
                    {
                        activeTab === 'audio' &&
                            content.content.filter((item) => item.content_type === 'audio').map((item) => 
                                <ContentCard key={item.id} id={item.id} title={item.title} url={item.url} username={item.username} created_at={item.created_at} content_type={activeTab}/>
                            )
                    }
                    {
                        activeTab === 'article' &&
                            content.content.filter((item) => item.content_type === 'article').map((item) => 
                                <ContentCard key={item.id} id={item.id} title={item.title} url={item.url} username={item.username} created_at={item.created_at} content={item.content} content_type={activeTab}/>
                            )
                    }
                </div>
            </div>
        </div>
    );
}

export default Content;
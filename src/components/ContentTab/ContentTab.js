import { useState } from 'react';
import './ContentTab.css';
import ContentCard from '../ContentCard/ContentCard';
import { content } from '../../sampledata';

function ContentTab() {
    const [activeTab, setActiveTab] = useState('videos');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className='content-tabs'>
            <div className="tab-container">
                <div className={`tab${activeTab === 'videos' ? '-active' : ''}`} onClick={() => handleTabClick('videos')}>
                    Videos
                </div>
                <div className={`tab${activeTab === 'audios' ? '-active' : ''}`} onClick={() => handleTabClick('audios')}>
                    Audios
                </div>
                <div className={`tab${activeTab === 'articles' ? '-active' : ''}`} onClick={() => handleTabClick('articles')}>
                    Articles
                </div>
            </div>

            <div className="content-div">
                <div className="content-container">
                    {/* Render content based on activeTab 
                        TODO <p>Sorry! No videos at the moment. Come back later. 😊</p>
                    */}
                    {
                        activeTab === 'videos' &&
                            content.videos.map((item) => (
                                <ContentCard key={item.id} id={item.id} title={item.title} url={item.url} username={item.username} created_at={item.created_at} content_type={activeTab}/>
                            ))
                    }
                    {
                        activeTab === 'audios' &&
                            content.audios.map((item) => (
                                <ContentCard key={item.id} id={item.id} title={item.title} url={item.url} username={item.username} created_at={item.created_at} content_type={activeTab}/>
                            ))
                    }
                    {
                        activeTab === 'articles' &&
                            content.articles.map((item) => (
                                <ContentCard key={item.id} id={item.id} title={item.title} url={item.url} username={item.username} created_at={item.created_at} content={item.content} content_type={activeTab}/>
                            ))
                    }
                </div>
            </div>
        </div>
    );
}

export default ContentTab;
import { useState } from 'react';
import './ContentTab.css';
import ContentCard from '../ContentCard/ContentCard';

function ContentTab() {
    const [activeTab, setActiveTab] = useState('videos');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className='content-tabs'>
            <div className="tab-container">
                <div className={`tab${activeTab === 'videos' ? '-active' : ''}`} onClick={() => handleTabClick('videos')}>
                    videos
                </div>
                <div className={`tab${activeTab === 'audios' ? '-active' : ''}`} onClick={() => handleTabClick('audios')}>
                    audios
                </div>
                <div className={`tab${activeTab === 'articles' ? '-active' : ''}`} onClick={() => handleTabClick('articles')}>
                    articles
                </div>
            </div>

            <div className="content-div">
                <div className="content-container">
                    {/* Render content based on activeTab */}
                    {
                        activeTab === 'videos' && <div>
                            <ContentCard />
                        </div>
                    }
                    {
                        activeTab === 'audios' && <div>
                            <ContentCard />
                        </div>
                    }
                    {
                        activeTab === 'articles' && <div>
                            <ContentCard />
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default ContentTab;
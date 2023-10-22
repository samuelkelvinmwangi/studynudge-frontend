import { useState } from 'react';
import './ContentTab.css';
import ContentCard from '../ContentCard/ContentCard';

function ContentTab() {
    const [activeTab, setActiveTab] = useState('Videos');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className='tabs'>
            <div className="tab-container">
                <div className={`tab${activeTab === 'Videos' ? '-active' : ''}`} onClick={() => handleTabClick('Videos')}>
                    Videos
                </div>
                <div className={`tab${activeTab === 'Audios' ? '-active' : ''}`} onClick={() => handleTabClick('Audios')}>
                    Audios
                </div>
                <div className={`tab${activeTab === 'Articles' ? '-active' : ''}`} onClick={() => handleTabClick('Articles')}>
                    Articles
                </div>
            </div>

            <div className="content-div">
                <div className="content-container">
                    {/* Render content based on activeTab */}
                    {
                        activeTab === 'Videos' && <div>
                            <ContentCard />
                        </div>
                    }
                    {
                        activeTab === 'Audios' && <div>
                            <ContentCard />
                        </div>
                    }
                    {
                        activeTab === 'Articles' && <div>
                            <ContentCard />
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default ContentTab;
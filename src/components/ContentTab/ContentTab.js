import { useState } from 'react';

function ContentTab() {
    const [activeTab, setActiveTab] = useState('Videos');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div>
            <div className="tab-container">
                <div className={`tab ${activeTab === 'Videos' ? 'active' : ''}`} onClick={() => handleTabClick('Videos')}>
                    Videos
                </div>
                <div className={`tab ${activeTab === 'Audios' ? 'active' : ''}`} onClick={() => handleTabClick('Audios')}>
                    Audios
                </div>
                <div className={`tab ${activeTab === 'Articles' ? 'active' : ''}`} onClick={() => handleTabClick('Articles')}>
                    Articles
                </div>
            </div>

            <div className="content-container">
                {/* Render content based on activeTab */}
                {activeTab === 'Videos' && <div>Video content goes here</div>}
                {activeTab === 'Audios' && <div>Audio content goes here</div>}
                {activeTab === 'Articles' && <div>Article content goes here</div>}
            </div>
        </div>
    );
}

export default ContentTab;
import Content from "../../components/Content/Content";
import TopBar from "../../components/TopBar/TopBar";
import Modal from "../../components/Modal/Modal";
import './ContentPage.css';
import { useState, useEffect } from 'react';
import { apiUrl } from '../../apiUrl';

function ContentPage( { userId = 1, userRole = 'admin' } ) {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [clickedContentId, setClickedContentId] = useState('');
    const [clickedContent, setClickedContent] = useState({});
    const [content, setContent] = useState([]);

    useEffect(() => {
        fetch(`${apiUrl}/contents`)
            .then(r => r.json())
            .then(data => setContent(data));
        }, []
    );

    /**
     * Returns the content item with the given id from the content array.
     *
     * @param {number} id - The id of the content item to retrieve.
     * @return {object} The content item with the given id.
     */
    function getClickedContent(id) {
        return id !== '' ? content.filter((item) => item.id === id)[0] : {};
    }

    return (
        <div className="content-page-container">
            <TopBar isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
            <div className="content-tab-container">
                {
                    isModalOpen ? <Modal clickedContent={clickedContentId === '' ? clickedContent : getClickedContent(clickedContentId)} setClickedContent={setClickedContent} setClickedContentId={setClickedContentId} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} userId={userId} />
                    : null
                }
                <Content content={content} userRole={userRole} setIsModalOpen={setIsModalOpen} setClickedContentId={setClickedContentId} />
            </div>
        </div>
    )
}

export default ContentPage;
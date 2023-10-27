import Content from "../../components/Content/Content";
import TopBar from "../../components/TopBar/TopBar";
import Modal from "../../components/Modal/Modal";
import './ContentPage.css';
import { useState } from 'react';

function ContentPage( { userId = 1} ) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="content-page-container">
            <TopBar isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
            <div className="content-tab-container">
                {
                    isModalOpen ? <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} userId={userId} />
                    : null
                }
                <Content />
            </div>
        </div>
    )
}

export default ContentPage;
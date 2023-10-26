import Content from "../../components/Content/Content";
import TopBar from "../../components/TopBar/TopBar";
import Modal from "../../components/Modal/Modal";
import NavigationBar from '../../components/NavigationBar';
import './ContentPage.css';
import { useState } from 'react';

function ContentPage() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="content-page-container">
            <NavigationBar />
            <TopBar isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
            <div className="content-tab-container">
                {
                    isModalOpen ? <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
                    : null
                }
                <Content />
            </div>
        </div>
    )
}

export default ContentPage;
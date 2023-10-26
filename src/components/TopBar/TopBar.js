import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMagnifyingGlass, faBell } from '@fortawesome/free-solid-svg-icons'
import './TopBar.css';

function TopBar({ isModalOpen, setIsModalOpen }) {

    function handleTopBarIconClick() {
        console.log('clicked');
    }

    function openModal() {
        setIsModalOpen(true);
    }

    return (
        <div className="topbar">
            <h2 className="page-title">Content</h2>
            <div className="topbar-icon-container">
                <div className="topbar-icons">
                    <i id="search-button">
                        <FontAwesomeIcon icon={faMagnifyingGlass} onClick={handleTopBarIconClick}/>
                    </i>
                    <i id="add-button">
                        <FontAwesomeIcon icon={faPlus} onClick={openModal}/>
                    </i>
                    <i id="notifications-button">
                        <FontAwesomeIcon icon={faBell} onClick={handleTopBarIconClick}/>
                    </i>
                </div>
            </div>
        </div>
    )
}

export default TopBar;
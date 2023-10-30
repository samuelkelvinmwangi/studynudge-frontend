import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMagnifyingGlass, faBell } from '@fortawesome/free-solid-svg-icons'
import './TopBar.css';
import { useState } from 'react';

function TopBar({ setIsModalOpen }) {

    const [isSearchVisible, setIsSearchVisible] = useState(false);

    function handleTopBarIconClick() {
        console.log('clicked');
    }

    function openModal() {
        setIsModalOpen(true);
    }

    function showSearchInput() {
        setIsSearchVisible(!isSearchVisible);
    }

    return (
        <div className="topbar">
            <h2 className="page-title">Content</h2>
            <div className="topbar-icon-container">
                <div className="topbar-icons">
                    {/* {
                        isSearchVisible ? (
                            <input type="text" className="search-input" placeholder='Search'></input>
                        ) : (
                            <i id="search-button">
                                <FontAwesomeIcon icon={faMagnifyingGlass} onClick={showSearchInput}/>
                            </i>
                        )
                    } */}
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
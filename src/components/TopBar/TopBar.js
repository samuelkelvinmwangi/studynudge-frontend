import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMagnifyingGlass, faBell } from '@fortawesome/free-solid-svg-icons'

function TopBar() {

    function handleTopBarIconClick() {
        console.log('clicked');
    }

    return (
        <div className="topbar">
            <div className="topbar-icons">
                <i id="add-button">
                    <FontAwesomeIcon icon={faPlus} onClick={handleTopBarIconClick}/>
                </i>
                <i id="search-button">
                    <FontAwesomeIcon icon={faMagnifyingGlass} onClick={handleTopBarIconClick}/>
                </i>
                <i id="notifications-button">
                <FontAwesomeIcon icon={faBell} onClick={handleTopBarIconClick}/>
                </i>
            </div>
        </div>
    )
}

export default TopBar;
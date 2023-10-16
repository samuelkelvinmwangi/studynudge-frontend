import React from 'react';
import '.Header.css';
import { BsPerson } from "react-icons/bs";


const Header = () => {
    return(
        <div className='header'>
            <i class="ai-search"></i>
            <div className='header-right'>
               <i class="ai-heart"></i>
                <BsPerson id="person-icon" />
            </div>
        </div>
    )
}

export default Header;
import "./NavbarStyles.css";


import React from 'react';
import { Link } from "react-router-dom";

import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="header">
      <Link to="/">
        <h1>Snudge.</h1>
      </Link>

      <ul className="nav-menu">
        <li>
            <Link to="/">Home</Link>
        </li>

        <li>
            <Link to="/about">About</Link>
        </li>

        <li>
            <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger">
        <FaBars size={20} style={{color: "#7E57C2"}}/>
      </div>

    </div>
  );
}

export default Navbar;

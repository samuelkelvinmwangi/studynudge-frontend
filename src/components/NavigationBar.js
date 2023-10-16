import React from 'react';
import './NavigationBar.css';

const Navbar = () => {
 return (
    <div className="navbar">
      <h1>Snudge</h1>
      <div className="navbar-right">
        <button>Dashboard</button>
        <button>Categories</button>
        <button>Content</button>
        <button>Profile</button>
        <button>Logout</button>
      </div>
    </div>
 );
};

export default Navbar;
import React from 'react';
import './NavigationBar.css';
import { useNavigate } from "react-router-dom";


const Navbar = () => {

  const navigate = useNavigate();

  const handleCategory = () => {
    navigate("/admin/category");
  };

  const handleDashboard = () => {
    navigate("/admin");
  };

 return (
    <div className="navbar">
      <h1>Snudge</h1>
      <div className="navbar-right">
        <button onClick={handleDashboard}>Dashboard</button>
        <button onClick={handleCategory}>Categories</button>
        <button>Content</button>
        <button>Profile</button>
        <button>Logout</button>
      </div>
      </div>
 );
};

export default Navbar;

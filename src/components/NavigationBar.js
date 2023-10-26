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

  const handleUsers = () => {
    navigate("/admin/users");
  };

  const handleLogout = () => {
    navigate("/");
  };

 return (
    <div className="navbar">
      <h1>Snudge</h1>
      
      <div className="navbar-right">
        <button onClick={handleDashboard}>Dashboard</button>
        <button onClick={handleCategory}>Categories</button>
        <button onClick={handleUsers}>Users</button>
        <button>Content</button>
        <button>Profile</button>
        <div className='navbar-bottom'>
        <button onclick={handleLogout}>Logout</button>
        </div>
      </div>
      </div>
    
 );
};

export default Navbar;
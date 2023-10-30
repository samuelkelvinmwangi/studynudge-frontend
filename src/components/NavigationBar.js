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

  function openContentPage() {
    navigate("/content");
  }

  const handleProfile = () => {
    navigate("/profile");
  };

 return (
    <div className="navbar">
      <h1>Snudge</h1>
      
      <div className="navbar-right">
        <button onClick={handleDashboard}>Dashboard</button>
        <button onClick={handleCategory}>Categories</button>
        <button onClick={handleUsers}>Users</button>
        <button onClick={openContentPage}>Content</button>
        <button onClick={handleProfile}>Profile</button>
        <div className='navbar-bottom'>
        <button onclick={handleLogout}>Logout</button>
        </div>
      </div>
      </div>
    
 );
};

export default Navbar;
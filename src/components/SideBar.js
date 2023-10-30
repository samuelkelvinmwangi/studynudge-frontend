import React from 'react';
import './SideBar.css';
import { useNavigate } from "react-router-dom";


const Sidebar = () => {

  const navigate = useNavigate();

  const handleCategory = () => {
    navigate("/staff/category");
  };

  const handleDashboard = () => {
    navigate("/staff");
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
 
    <div className="sidebar">
      <h1>Snudge</h1>
      <div className='sidebar-all'>
      <div className="sidebar-right">
      <button onClick={handleDashboard}>Dashboard</button>
        <button onClick={handleCategory}>Categories</button>
        <button onClick={openContentPage}>Content</button>
        <button onClick={handleProfile}>Profile</button>
        <div className='sidebar-bottom'>
        <button onclick={handleLogout}>Logout</button>
        </div>
      </div>
      </div>
    </div>

    
 );
};

export default Sidebar;
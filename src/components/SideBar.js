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

  const handleLogout= () => {
    navigate("/");
  };

 return (
 
    <div className="sidebar">
      <h1>Snudge</h1>
      <div className='sidebar-all'>
      <div className="sidebar-right">
      <button onClick={handleDashboard}>Dashboard</button>
        <button onClick={handleCategory}>Categories</button>
        <button>Content</button>
        <button>Profile</button>
        <div className='sidebar-bottom'>
        <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
      </div>
    </div>

    
 );
};

export default Sidebar;
import React from 'react';
import Sidebar from '../components/SideBar';
import StaffDashboard from '../components/StaffDashboard';
import './Staff.css';




const Staff = () => {
  return (
    <div className='components'>
      <Sidebar />
    <StaffDashboard />
   
    </div>
  );
}

export default Staff;
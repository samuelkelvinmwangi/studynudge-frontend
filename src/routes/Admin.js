import React from 'react';
import NavBar from '../components/NavigationBar';
import AdminDashboard from '../components/AdminDashboard';
import './Admin.css';




const Admin = () => {
  return (
    <div className='components'>
      <NavBar />
    <AdminDashboard />
    
    </div>
  );
}

export default Admin;
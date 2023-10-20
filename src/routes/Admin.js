import React from 'react';
import NavBar from '../components/NavigationBar';
import AdminDashboard from '../components/AdminDashboard';
import './Admin.css';
// import AdminCategory from '../components/AdminCategory';



const Admin = () => {
  return (
    <div className='components'>
      <NavBar />
    <AdminDashboard />
    {/* <AdminCategory/> */}
    </div>
  );
}

export default Admin;
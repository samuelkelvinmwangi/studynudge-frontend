import React from 'react';
import NavBar from '../components/NavigationBar';
import AdminCategory from '../components/AdminCategory';
import './Admin.css';

const AdminCategoryRoute = () => {
  return (
    <div className='components'>
        <NavBar />
        <AdminCategory />
    </div>
  );
}

export default AdminCategoryRoute;
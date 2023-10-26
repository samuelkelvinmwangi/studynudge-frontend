import React from 'react';
import NavBar from '../components/NavigationBar';
import AdminUsers from '../components/AdminUsers';
import './Admin.css';

const AdminUsersRoute = () => {
  return (
    <div className='components'>
        <NavBar />
        <AdminUsers />
    </div>
  );
}

export default AdminUsersRoute;
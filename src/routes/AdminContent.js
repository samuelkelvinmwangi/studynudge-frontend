import React from 'react';
import NavBar from '../components/NavigationBar';
import ContentPage from '../pages/ContentPage/ContentPage';
import './Admin.css';

const AdminContent = () => {
  return (
    <div className='components'>
        <NavBar />
        <ContentPage />
    </div>
  );
}

export default AdminContent;
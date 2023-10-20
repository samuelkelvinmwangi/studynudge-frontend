import React from 'react';
import NavBar from '../components/NavigationBar';
import StaffCategory from '../components/StaffCategory';
import './Admin.css';

const StaffCategoryRoute = () => {
  return (
    <div className='components'>
        <NavBar />
        <StaffCategory />
    </div>
  );
}

export default StaffCategoryRoute;
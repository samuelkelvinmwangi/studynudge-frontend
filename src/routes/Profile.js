import React from 'react';
import './Admin.css';
import Profile from '../components/Profile';
import NavBar from '../components/NavigationBar';


const ProfileRoute = () => {
  return (
    <div className='components'>
    <NavBar />
    <Profile />
    </div>
  );
}

export default ProfileRoute;
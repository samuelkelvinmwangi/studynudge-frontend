import React, {useState} from 'react';
// import { useNavigate } from "react-router-dom";
import './Profile.css';
import ProfileForm from './ProfileForm';
import { useLocation } from 'react-router-dom';


const Profile = () => {

  const [showForm, setShowForm] = useState(false);
  const location = useLocation();
  const email = location.state ? location.state.email : null;
  const full_name = location.state ? location.state.full_name : null;
  const username = location.state ? location.state.username : null;
  const role = location.state ? location.state.role : null;




  const toggleForm = () => {
    setShowForm(!showForm);
 };  

 return (
    <div className="profile">
      <div>
        <h1>Profile</h1>
        <p>Name: {full_name}</p>
        <p>Username: {username}</p>
        <p>Email: {email}</p>
        <p>Role: {role}</p>

        <button onClick={toggleForm}>Edit profile</button>
      </div>
      
      {showForm && (
      <div>
        <ProfileForm email={ email }/>
      </div>
    )}
    </div>
 );
};

export default Profile;
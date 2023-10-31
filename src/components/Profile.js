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
        <ProfileForm email={ email }/>
    </div>
 );
};

export default Profile;
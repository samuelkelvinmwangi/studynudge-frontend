import React, { useState } from 'react';
import "./ProfileFormStyles.css";
import { useParams, useNavigate } from "react-router";
import { apiUrl } from '../apiUrl';

const ProfileForm = ({ user }) => {

  const [full_name, setFull_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleEdit(e) {
    e.preventDefault();
    fetch(`${apiUrl}/users/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // description,
      }),
    }).then((r) => {
      if (r.ok) {
        navigate(`https://snudgeapi.onrender.com/users/${user.id}`);
      }
    });
  }

  return (
    <div className='profile'>
    <div className='form'>
    <form onSubmit={handleEdit}>
        <label htmlFor='firstName'>First Name</label>
        <input type='text' id='name' name='firstName' />

        <label htmlFor='lastName'>Last Name</label>
        <input type='text' id='name' name='lastName' />

        <label htmlFor='email'>Email</label>
        <input type='email' id='email' name='email' />

        <label htmlFor='password'>Password</label>
        <input type='text' id='password' name='password' />

        <label htmlFor='newPassword'>New Password</label>
        <input type='password' id='password' name='newPassword' />

        <button>Change</button>

    </form>
      
    </div>
    </div>
  );
}

export default ProfileForm;

import React from 'react';

const Profile = () => {
  return (
    <div>
    <form>
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
  );
}

export default Profile;

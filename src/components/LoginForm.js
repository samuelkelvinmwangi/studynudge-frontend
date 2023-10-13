import React from 'react';
import './Loginform.css';

const LoginForm = () => {
  return (
    <div className='cover'>
        <h1>Welcome Back</h1>
        <input type='text' placeholder='username' />
        <input type='password' placeholder='password' />
      
    </div>
  );
}

export default LoginForm;

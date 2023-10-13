import React from 'react';
import './Loginform.css';
import Login from './../routes/Login';

const LoginForm = () => {
  return (
    <div className='cover'>
        <h1>Welcome Back</h1>
        <input type='text' placeholder='username' />
        <input type='password' placeholder='password' />

        <div className='login-btn'>Login</div>
        <p className='text'>By continuing you agree to our 
                            terms of service and privacy policy</p>
      
    </div>
  );
}

export default LoginForm;

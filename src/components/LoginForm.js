import React from 'react';
import './LoginForm.css';
import { useState} from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
}

const LoginForm = () => {
  return (
  <div className='body-2' >
    <div className='cover'>
        <h1>Welcome Back</h1>
        <input className='input' type='text' placeholder='username' />
        <input className='input' type='password' placeholder='password' />

        <div className='login-btn'>Login</div>
        <p className='paragraph'>By continuing you agree to our 
                            terms of service and privacy policy</p>
      
    </div>
  </div>
  );
}

export default LoginForm;

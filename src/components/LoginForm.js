import React from 'react';
import './LoginForm.css';
import { useState} from 'react';


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    
    await fetch('https://snudgeapi.onrender.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password
            })
        })
        .then(response => response.json())
        .then(data => {
            // if (data.error) {
            //     setErrorMessage(data.error);
            // }
            console.log('My response: ', data);
            window.location.href = '/dashboard';
        })
        .catch(error => {
            setError(error);
            console.error('Error:', error);
        });
    
  };
  return (
  <div className='body-2' >
    <div className='cover'>
        <h1>Welcome Back</h1>
        <input className='input' type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input className='input' type='password' placeholder='password'  value={password} onChange={(e) => setPassword(e.target.value)}/>

        <div className='login-btn' onClick={handleLogin}>Login</div>
        <p className='paragraph'>By continuing you agree to our 
                            terms of service and privacy policy</p>
      
    </div>
  </div>
  );
};

export default LoginForm;

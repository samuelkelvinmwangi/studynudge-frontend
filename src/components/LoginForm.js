import React from 'react';
import './LoginForm.css';
import { useState} from 'react';


const LoginForm = () => {
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [ setError] = useState(null);

  const handleLogin = async () => {
    const response = await fetch('https://snudgeapi.onrender.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ emailAddress, password }),
    });

    if (response.status === 200) {
      const data = await response.json();
      localStorage.setItem('token', data.token);
      window.location.href = '/dashboard';
    } else {
      setError('Invalid emailAddress or password');
    }
    
  };
  return (
  <div className='body-2' >
    <div className='cover'>
        <h1>Welcome Back</h1>
        <input className='input' type='text' placeholder='Emailaddress' value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)}/>
        <input className='input' type='password' placeholder='password'  value={password} onChange={(e) => setPassword(e.target.value)}/>

        <div className='login-btn' onClick={handleLogin}>Login</div>
        <p className='paragraph'>By continuing you agree to our 
                            terms of service and privacy policy</p>
      
    </div>
  </div>
  );
};

export default LoginForm;

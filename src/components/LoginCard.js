import './LoginCardStyles.css';

import React from 'react';
import { Link } from 'react-router-dom';

const LoginCard = () => {
  return (
    <div className='login'>
        <div className='card-container'>

            <div className='card'>
                <h3>Admin Login</h3>
                <span className='bar'></span>
                <p className='btc'>ADMIN</p>
                <p>Add user</p>
                <p>Remove post</p>
                <p>Approve content</p>
                <p>Create categories</p>
                <Link to='/login' id='bt' className='btn'>Login Now</Link>
            </div>

            <div className='card'>
                <h3>Staff Login</h3>
                <span className='bar'></span>
                <p className='btc'>STAFF</p>
                <p>Create profile</p>
                <p>Edit content</p>
                <p>Review content</p>
                <p>Flag content</p>
                <Link to='/login' id='bt' className='btn'>Login Now</Link>
            </div>

            <div className='card'>
                <h3>Student Login</h3>
                <span className='bar'></span>
                <p className='btc'>STUDENT</p>
                <p>subscribe</p>
                <p>Post content</p>
                <p>Comment</p>
                <p>Add to wishlist</p>
                <Link to='/login' id='bt' className='btn'>Login Now</Link>
            </div>

        </div>
      
    </div>
  );
}

export default LoginCard;

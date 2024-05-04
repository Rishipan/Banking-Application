import React from 'react';
import './LoginForm.css'; 
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import NavBar from '../navbar/NavBar'

export default function RegisterForm() {
  return (
    <div>
        <NavBar></NavBar>
        <div className='wrapper'>
            <form action=''>
                <h1>Register</h1>
                <div className='input-box'>
                    <input type='text' placeholder='Username' required />
                    <FaUser className='icon' />
                </div>
                <div className='input-box'>
                    <input type='email' placeholder='Email' required />
                    <FaEnvelope className='icon' />
                </div>
                <div className='input-box'>
                    <input type='password' placeholder='Password' required />
                    <FaLock className='icon' />
                </div>

                <div className='forgot-password'>
                    <p>Already have an account? <a href='/'>Login</a></p>
                </div>

                <div>
                    <button type='submit'>Register</button>
                </div>
            </form>
        </div>
    </div>
  );
}

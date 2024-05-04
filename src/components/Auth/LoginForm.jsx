import React from 'react'
import './LoginForm.css'
import { FaUser, FaLock} from "react-icons/fa";
import NavBar from '../navbar/NavBar'

export default function LoginForm() {
  return (
    <div>
        <NavBar></NavBar>
        <div className='wrapper'>
        <form action="">
            <h1>Login</h1>
            <div className='input-box'>
                <input type="text" placeholder='Username' required/>
                <FaUser className='icon'/>

            </div>
            <div className='input-box'>
                <input type='password' placeholder='Password' required/>
                <FaLock className='icon'/>

            </div>

            <div className='forgot-password'>
                <a href='/forgot-password'>Forgot password?</a>
            </div>

            <div>
            <button type='submit'>Login</button>
            </div>

            <div className='register-link'>
                <p>Don't have an account?   <a href='/register'> Register</a></p>
            </div>
        </form>
    </div>
    </div>
  )
}

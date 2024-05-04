import React from 'react';
import './NavBar.css';

import bankLogo from '../assets/bankLogo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={bankLogo} alt="Logo" />
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="#home">Home</a>
          </li>
          <li className="navbar-item">
            <a href="#about">About Us</a>
          </li>
          <li className="navbar-item">
            <a href="#services">Services</a>
          </li>
          <li className="navbar-item">
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
        <div className="navbar-button">
          {/* <button className="btn-login">Login</button>
          <button className="btn-signup">Sign Up</button> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import "./NavBar.css";

import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

import bankLogo from "../assets/bankLogo.png";

import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notifySuccess = (message) => toast.success(message);
const notifyError = (message) => toast.error(message);

const Navbar = () => {
  const navigate = useNavigate();

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        notifySuccess("Signed Out Succesfully!!!");
        navigate("/login");
      })
      .catch((error) => {
        notifyError(error.message);
      });
  };

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
          <button className="btn-login" onClick={userSignOut}>
            LogOut
          </button>
          {/* <button className="btn-signup">Sign Up</button> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

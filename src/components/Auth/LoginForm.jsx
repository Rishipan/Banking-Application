import React, { useState } from "react";
import "./LoginForm.css";
import { FaUser, FaLock } from "react-icons/fa";
import NavBar from "../navbar/NavBar";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        toast.success("Sign In Succesfull!!!");
        navigate("/home");
      })
      .catch((error) => {
        if (error.code === "auth/user-not-found") {
          toast.error("User not found. Please check your email and try again.");
          console.log(error);
        } else {
          toast.error(error.message);
          console.log(error);
        }
      });
  };

  return (
    <div>
      <NavBar></NavBar>
      <div className="wrapper">
        <form onSubmit={signIn}>
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FaLock className="icon" />
          </div>

          <div className="forgot-password">
            <a href="/forgot-password">Forgot password?</a>
          </div>

          <div>
            <button type="submit">Login</button>
          </div>

          <div className="register-link">
            <p>
              Don't have an account? <a href="/register"> Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import "./LoginForm.css";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import NavBar from "../navbar/NavBar";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { setDoc, doc } from "firebase/firestore";

import { useNavigate } from "react-router-dom";

const notify = (message) => toast.error(message);

export default function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Store user data in Firestore
      await setDoc(doc(db, "users", user.uid), {
        username: username,
        email: user.email,
      });

      navigate("/home");
    } catch (error) {
      if (!email && !password) {
        notify("Please fill in all fields.");
      } else if (error.code === "auth/email-already-in-use") {
        notify("The email address is already in use.");
      } else {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <NavBar></NavBar>
      <div className="wrapper">
        <form onSubmit={signUp}>
          <h1>Register</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <FaEnvelope className="icon" />
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
            <p>
              Already have an account? <a href="/">Login</a>
            </p>
          </div>

          <div>
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}

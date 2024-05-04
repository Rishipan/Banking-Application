import React from "react";
import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      await auth.sendPasswordResetEmail(email);
      toast.success("Password reset email sent. Please check your inbox.");
    } catch (error) {
      toast.error("Error sending password reset email. Please try again.");
      console.error(error);
    }
  };

  return (
    <div>
      <div className="wrapper">
        <form onSubmit={handleForgotPassword}>
          <h1>Forgot Password</h1>

          <div className="input-box">
            <input
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <FaEnvelope className="icon" />
          </div>

          <div>
            <button type="submit">Send Password Reset Email</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;

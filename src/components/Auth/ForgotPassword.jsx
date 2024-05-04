import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle the form submission, such as sending a reset password link to the provided email
    console.log(`Reset password link sent to ${email}`);
    // Reset the email input field after submission
    setEmail('');
  };

  return (
    <div>
      <h1>Forgot Password</h1>
      <p>Enter your email to reset your password.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ForgotPassword;

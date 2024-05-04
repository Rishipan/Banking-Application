import React from 'react';
import './Basic.css'; // Assuming you have a separate CSS file for styling
import LoginForm from "../Auth/LoginForm";


export default function NoteLoginForm() {
  return (
    <div className="container">
      <div className="note">
        <p>This is a note about the login form.</p>
      </div>
      <LoginForm />
    </div>
  );
}

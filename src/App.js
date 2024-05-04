import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import RegisterForm from "./components/Auth/RegisterForm";
import LoginForm from "./components/Auth/LoginForm";
import ForgotPassword from "./components/Auth/ForgotPassword";
import HomePage from "./components/pages/HomePage";
import AuthDetails from "./components/Auth/auth";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthDetails />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;

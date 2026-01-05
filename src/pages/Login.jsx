// HeavenlyOven-react/src/pages/Login.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { account } from "../appwrite";
import "./auth.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      await account.createEmailPasswordSession(email, password);
      window.location.href = "/";
    } catch (error) {
      setMessage("Invalid email or password");
    }
  };

  return (
    <div className="auth-page">
<div className="auth-container">
      <h2>Welcome Back 👋</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>

        {message && <p className="auth-message error">{message}</p>}
      </form>

      {/* 🔹 EXTRA LINKS */}
      <div className="auth-links">
        <Link to="/reset-password" className="forgot-link">
          Forgot password?
        </Link>

        <p>
          Don’t have an account?{" "}
          <Link to="/signup" className="signup-link">
            Sign up
          </Link>
        </p>
      </div>
    </div>
    </div>
    
  );
};

export default Login;

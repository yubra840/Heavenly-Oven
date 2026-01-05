import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { account } from "../appwrite";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import "./auth.css";

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setMessage("");

    if (password !== repeatPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      await account.create("unique()", email, password, name);

      // ✅ Redirect to login after successful signup
      navigate("/login");
    } catch (error) {
      // 🔐 Email already exists
      if (error.code === 409) {
        setMessage("An account with this email already exists");
      } else {
        setMessage(error.message);
      }
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Create Account 🍰</h2>

        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
            </span>
          </div>

          <div className="password-field">
            <input
              type={showRepeatPassword ? "text" : "password"}
              placeholder="Repeat Password"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              required
            />
            <span onClick={() => setShowRepeatPassword(!showRepeatPassword)}>
              {showRepeatPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
            </span>
          </div>

          <button type="submit">Sign Up</button>

          {message && <p className="auth-message error">{message}</p>}
        </form>

        <div className="auth-links">
          <p>
            Already have an account?{" "}
            <Link to="/login" className="signup-link">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

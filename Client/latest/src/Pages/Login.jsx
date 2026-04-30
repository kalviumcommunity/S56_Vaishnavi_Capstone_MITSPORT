import React, { useState } from "react";
import bgImage from "../images/geound.jpg";
import mitImage from "../images/Mit.jpeg";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Form Data:", formData);
    // Normally you'd authenticate here. We simulate success and redirect.
    navigate("/home");
  };

  return (
    <div className="auth-page">
      <img className="auth-bg" src={bgImage} alt="Background" />
      <div className="auth-overlay"></div>
      
      <div className="auth-container glass-panel">
        <div className="auth-header">
          <img src={mitImage} alt="MIT Logo" style={{ borderRadius: '50%', objectFit: 'cover', width: '80px', height: '80px' }} />
          <h1 className="text-gradient">Welcome Back</h1>
          <p className="auth-subtitle">Step onto the field of champions</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input 
              type="text" 
              placeholder="Username" 
              name="username" 
              value={formData.username} 
              onChange={handleInputChange} 
              required 
            />
          </div>
          <div className="input-group">
            <input 
              type="password" 
              placeholder="Password" 
              name="password" 
              value={formData.password} 
              onChange={handleInputChange} 
              required 
            />
          </div>
          <button type="submit" className="btn-primary auth-btn">Login</button>
        </form>

        <div className="auth-footer">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
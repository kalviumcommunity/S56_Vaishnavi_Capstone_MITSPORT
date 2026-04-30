import React, { useState, useEffect } from "react";
import bgImage from "../images/geound.jpg";
import mitImage from "../images/Mit.jpeg";
import "./Login.css"; // Reuse auth styles
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [passwordMatch, setPasswordMatch] = useState(true);

  useEffect(() => {
    if (formData.password && formData.confirmPassword) {
      setPasswordMatch(formData.password === formData.confirmPassword);
    } else {
      setPasswordMatch(true);
    }
  }, [formData.password, formData.confirmPassword]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setPasswordMatch(false);
      return;
    }
    console.log("Submitted Form Data:", formData);
    navigate("/login");
  };

  return (
    <div className="auth-page">
      <img className="auth-bg" src={bgImage} alt="Background" />
      <div className="auth-overlay"></div>
      
      <div className="auth-container glass-panel">
        <div className="auth-header">
          <img src={mitImage} alt="MIT Logo" style={{ borderRadius: '50%', objectFit: 'cover', width: '80px', height: '80px' }} />
          <h1 className="text-gradient">Create Account</h1>
          <p className="auth-subtitle">Join the winning team today</p>
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
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
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
          <div className="input-group">
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
              style={!passwordMatch ? { borderColor: '#ef4444' } : {}}
            />
            {!passwordMatch && (
              <span style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: '-4px' }}>
                Passwords do not match
              </span>
            )}
          </div>
          <button type="submit" className="btn-primary auth-btn">Sign Up</button>
        </form>

        <div className="auth-footer">
          Already have an account? <Link to="/login">Log in</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;

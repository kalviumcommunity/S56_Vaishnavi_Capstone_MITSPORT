import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.css"
import welcomelogo from "../images/MITlogo.png"
import fitness from "../images/fitness.jpeg"

function Welcome() {
  return (
    <div className="welcome-page">
      <img className="welcome-bg" src={fitness} alt="Fitness Background" />
      <div className="welcome-overlay"></div>
      
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={welcomelogo} alt="Logo" />
        </div>
        <ul className="navbar-links">
          <li className="navbar-item">
            <Link to="/login" className="navbar-link">Login</Link>
          </li>
          <li className="navbar-item">
            <Link to="/signup" className="btn-primary">Signup</Link>
          </li>
        </ul>
      </nav>
      
      <div className="welcome-content glass-panel">
        <h1 className="welcome-text text-gradient">ALLMITSPORT: Uniting Fans Through Insightful Content</h1>
        <h3 className="welcome-update">Explore ALLMITSPORT's dedication to sports journalism, community, and engaging analysis on various athletics topics.</h3>
        <Link to="/home"><button className="btn-primary">Explore Now</button></Link>
      </div>
    </div>
  );
}

export default Welcome;

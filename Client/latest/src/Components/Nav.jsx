import React from "react";
import logo from "../images/MITlogo.png"; 
import { Link, useLocation } from "react-router-dom";
import "./Nav.css"

function Nav() {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname.toLowerCase() === path.toLowerCase() ? "active" : "";
  };

  return (
    <div className="nav-container">
      <nav className="main-nav">
        <div className="nav-logo">
          <Link to="/Home">
            <img src={logo} alt="MITlogo" />
          </Link>
        </div>
        
        <ul className="nav-links">
          <li><Link className={isActive("/Home")} to="/Home">Home</Link></li>
          <li><Link className={isActive("/About")} to="/About">About us</Link></li>
          <li><Link className={isActive("/Detail")} to="/Detail">Details</Link> </li>
          <li><Link className={isActive("/Contact")} to="/Contact">Contact</Link></li>
          <li><Link className={isActive("/my-registration")} to="/my-registration" style={{color: 'var(--accent-tertiary)'}}>My Pass</Link></li>
        </ul>

        <div className="nav-actions">
          <Link to="/signup">
            <button className="btn-primary btn-nav">Join Now</button>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Nav;

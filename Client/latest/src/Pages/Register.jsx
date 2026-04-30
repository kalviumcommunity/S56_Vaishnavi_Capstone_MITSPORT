import React, { useState } from "react";
import photo from "../images/game.jpg";
import logo from "../images/Mit.jpeg";
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';
import "./Login.css"; // Reuse auth styles

function Register() {
  const [Name, setName] = useState("");
  const [Phone, setPhone] = useState("");
  const [Batch, setBatch] = useState("");
  const [Sport, setSport] = useState("");
  const [Email, setEmail] = useState("");
  const [Timing, setTime] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      Name.trim() === "" ||
      Phone.trim() === "" ||
      Batch.trim() === "" ||
      Sport.trim() === "" ||
      Email.trim() === "" ||
      Timing.trim() === ""
    ) {
      alert("All fields are required");
    } else {
      const newRegistration = { Name, Phone, Batch, Sport, Email, Timing };
      try {
        const response = await axios.post("http://localhost:3000/register", newRegistration);
        console.log("Registration successful:", response.data);
        
        // Save to my pass section
        const passDetails = {
            name: Name,
            batch: Batch,
            sport: Sport,
            timing: Timing,
            date: new Date().toLocaleDateString()
        };
        localStorage.setItem("myRegistration", JSON.stringify(passDetails));
        
        navigate('/my-registration');
      } catch (error) {
        console.log("Backend error, but continuing to save locally:", error);
        alert("Warning: Backend database connection failed (check your MongoDB URI). Saving to your My Pass locally!");
        
        // Save to my pass section even if DB fails
        const passDetails = {
            name: Name,
            batch: Batch,
            sport: Sport,
            timing: Timing,
            date: new Date().toLocaleDateString()
        };
        localStorage.setItem("myRegistration", JSON.stringify(passDetails));
        
        navigate('/my-registration');
      }
    }
  };

  return (
    <div className="auth-page">
      <img className="auth-bg" src={photo} alt="Background" />
      <div className="auth-overlay"></div>
      
      <div className="auth-container glass-panel" style={{ maxWidth: '500px' }}>
        <div className="auth-header">
          <img src={logo} alt="MIT Logo" style={{ borderRadius: '50%', objectFit: 'cover', width: '80px', height: '80px' }} />
          <h1 className="text-gradient">Register Batch</h1>
          <p className="auth-subtitle">Add a new sports batch</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="text" placeholder="Instructor Name" value={Name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="input-group">
            <input type="text" placeholder="Phone Number" value={Phone} onChange={(e) => setPhone(e.target.value)} required />
          </div>
          <div className="input-group">
            <input type="email" placeholder="Email Address" value={Email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="input-group">
            <input type="text" placeholder="Batch Name" value={Batch} onChange={(e) => setBatch(e.target.value)} required />
          </div>
          <div className="input-group">
            <input type="text" placeholder="Sport" value={Sport} onChange={(e) => setSport(e.target.value)} required />
          </div>
          <div className="input-group">
            <input type="time" placeholder="Timing" value={Timing} onChange={(e) => setTime(e.target.value)} required />
          </div>
          <button type="submit" className="btn-primary auth-btn">Register</button>
        </form>

        <div className="auth-footer">
          <Link to="/batch">Cancel & Go Back</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;

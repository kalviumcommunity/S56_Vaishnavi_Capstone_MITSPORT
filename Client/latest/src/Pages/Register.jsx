import React, { useState } from "react";
import "./Register.css";
import logo from "../images/Mit.jpeg";
import picture from "../images/game.jpg";
import photo from "../images/vector.jpg";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Register() {
  const [Name, setName] = useState("");
  const [Phone, setPhone] = useState("");
  const [Batch, setBatch] = useState("");
  const [Sport, setSport] = useState("");
  const [Email, setEmail] = useState("");
  const [Timing, setTime] = useState("");
  const [newData, setNewData] = useState([]);
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleBatchChange = (e) => {
    setBatch(e.target.value);
  };

  const handleSportChange = (e) => {
    setSport(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

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
        setNewData(response.data);
        navigate('/batch');
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <div className="background-container">
        <img height={670} className="background-image" src={photo} alt="Background photo" />
      </div>
      <div className="logo-container">
        <img width={150} className="logo-image" src={logo} alt="logo photo" />
      </div>
      <div className="side-image-container">
        <img width={400} height={490} className="side-image" src={picture} alt="side img" />
      </div>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label htmlFor="Name" className="label-name">
          </label>
          <input
            type="text"
            id="Name"
            value={Name}
            onChange={handleNameChange}
            required
            className="input-name"
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Phone" className="label-phone">
          </label>
          <input
            type="text"
            id="Phone"
            value={Phone}
            onChange={handlePhoneChange}
            required
            className="input-phone"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Batch" className="label-batch">
          </label>
          <input
            type="text"
            id="Batch"
            value={Batch}
            onChange={handleBatchChange}
            required
            className="input-batch"
            placeholder="Enter your batch"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Sport" className="label-sport">
          </label>
          <input
            type="text"
            id="Sport"
            value={Sport}
            onChange={handleSportChange}
            required
            className="input-sport"
            placeholder="Enter your sport"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Email" className="label-email">
          </label>
          <input
            type="email"
            id="Email"
            value={Email}
            onChange={handleEmailChange}
            required
            className="input-email"
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Time" className="label-time">
          </label>
          <input
            type="time"
            id="Time"
            value={Timing}
            onChange={handleTimeChange}
            required
            className="input-time"
            placeholder="Enter your time"
          />
        </div>
        <button type="submit" className="submit-button">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;

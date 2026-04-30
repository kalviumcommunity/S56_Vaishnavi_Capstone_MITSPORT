import React, { useState, useEffect } from 'react';
import Nav from '../Components/Nav';
import { Link } from 'react-router-dom';
import './MyRegistration.css';

function MyRegistration() {
  const [registration, setRegistration] = useState(null);

  useEffect(() => {
    const savedData = localStorage.getItem('myRegistration');
    if (savedData) {
      setRegistration(JSON.parse(savedData));
    }
  }, []);

  return (
    <div className="my-reg-page">
      <Nav />
      
      <div className="my-reg-content">
        {registration ? (
          <div className="ticket-card">
            <div className="ticket-header">
              <h2>My Sports Pass</h2>
              <p>ALLMITSPORT Official Registration</p>
            </div>
            
            <div className="ticket-body">
              <div className="ticket-row">
                <span className="ticket-label">Student Name</span>
                <span className="ticket-value">{registration.name}</span>
              </div>
              
              <div className="ticket-row">
                <span className="ticket-label">Sport</span>
                <span className="ticket-value" style={{ color: 'var(--accent-primary)', fontSize: '1.2rem' }}>{registration.sport}</span>
              </div>
              
              <div className="ticket-row">
                <span className="ticket-label">Batch</span>
                <span className="ticket-value">{registration.batch}</span>
              </div>
              
              <div className="ticket-row">
                <span className="ticket-label">Timing</span>
                <span className="ticket-value">{registration.timing}</span>
              </div>

              <div className="ticket-row">
                <span className="ticket-label">Registered On</span>
                <span className="ticket-value">{registration.date}</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="no-ticket glass-panel">
            <h2>You haven't registered for any sports yet!</h2>
            <Link to="/Batch">
              <button className="btn-explore">Explore Batches</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default MyRegistration;

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import logo from "../images/Mit.jpeg";
import photo from "../images/game.jpg";
import "./Login.css"; // Reuse auth styles

function UpdateForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        Batch: '',
        Sport: '',
        Timing: ''
    });

    useEffect(() => {
        axios.get(`/sport/${id}`)
            .then(response => {
                const data = response.data;
                setFormData({
                    Batch: data.Batch || '',
                    Sport: data.Sport || '',
                    Timing: data.Timing || ''
                });
            })
            .catch(error => console.error(error));
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3000/updateuser/${id}`, formData)
            .then(response => {
                console.log(response.data);
                navigate('/batch');
            })
            .catch(error => console.error(error));
    };

    return (
        <div className="auth-page">
            <img className="auth-bg" src={photo} alt="Background" />
            <div className="auth-overlay"></div>
            
            <div className="auth-container glass-panel">
                <div className="auth-header">
                    <img src={logo} alt="MIT Logo" style={{ borderRadius: '50%', objectFit: 'cover', width: '80px', height: '80px' }} />
                    <h1 className="text-gradient">Update Batch</h1>
                    <p className="auth-subtitle">Modify batch details</p>
                </div>

                <form className="auth-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input
                            type="text"
                            name="Batch"
                            value={formData.Batch}
                            onChange={handleChange}
                            placeholder="Batch Name"
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="text"
                            name="Sport"
                            value={formData.Sport}
                            onChange={handleChange}
                            placeholder="Sport"
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="time"
                            name="Timing"
                            value={formData.Timing}
                            onChange={handleChange}
                            placeholder="Timing"
                        />
                    </div>
                    <button type="submit" className="btn-primary auth-btn">Update</button>
                </form>

                <div className="auth-footer">
                    <Link to="/batch">Cancel & Go Back</Link>
                </div>
            </div>
        </div>
    );
}

export default UpdateForm;

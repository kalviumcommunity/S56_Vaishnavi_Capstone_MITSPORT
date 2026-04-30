import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import './Card.css';

const Card = (props) => {
    const navigate = useNavigate();

    const handleDel = () => {
        axios.delete(`http://localhost:3000/deleteuser/${props._id}`)
            .then((res) => {
                console.log(res);
                props.fetchData(); 
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleJoin = () => {
        const studentName = window.prompt("Enter your Name to join this batch:");
        if (studentName && studentName.trim() !== "") {
            const registrationDetails = {
                name: studentName,
                batch: props.Batch,
                sport: props.Sport,
                timing: props.Timing,
                date: new Date().toLocaleDateString()
            };
            localStorage.setItem("myRegistration", JSON.stringify(registrationDetails));
            alert("Successfully registered!");
            navigate('/my-registration');
        }
    };

    return (
        <div className="card-wrapper">
            {props.img && <img src={props.img} alt={props.Batch} />}
            <h2 className="batch-title">{props.Batch}</h2>
            <h3 className="batch-sport">Sport: {props.Sport}</h3>
            <h3 className="batch-time">Time: {props.Timing}</h3>
            
            <div className="card-actions-primary">
                <button className="btn-join" onClick={handleJoin}>Join Batch</button>
            </div>

            <div className="card-actions">
                <Link to={`/updateform/${props._id}`} style={{flex: 1, display: 'flex'}}>
                    <button className="btn-update" style={{width: '100%'}}>Update</button>
                </Link>
                <button className="btn-delete" onClick={handleDel}>Delete</button> 
            </div>
        </div>
    );
};

export default Card;

import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; 
import './Card.css';

const Card = (props) => {
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

    return (
        <div className="batch-boxes">
            <div className="boxes">
                <img className="contact-img" src={props.img} alt={props.Batch} />
                <h2 className="batch-title">{props.Batch}</h2>
                <h3 className="batch-sport">{props.Sport}</h3>
                <h3 className="batch-time">{props.Timing}</h3>
                <Link to={`/updateform/${props._id}`}>
                    <button className="update-data">Update</button>
                </Link>
                <button className="delete" onClick={handleDel}>Delete</button> 
            </div>
        </div>
    );
};

export default Card;

import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

function Card(props) {
    return (
        <div className="batch-boxes">
            <div className="boxes">
                <img className="contact-img" src={props.img} alt={props.Batch} />
                <h2 className="batch-title">{props.Batch}</h2>
                <h3 className="batch-batch">{props.Sport}</h3>
                <h3 className="batch-time">{props.Timing}</h3>
                <Link to={`/updateform/${props._id}`}>
                    <button className="update-data">Update</button>
                </Link>
                <button className="delete">Delete</button>
            </div>
        </div>
    );
}

export default Card;

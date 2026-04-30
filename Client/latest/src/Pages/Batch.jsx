import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "../Components/Nav";
import "./Batch.css";
import { Link } from "react-router-dom";
import Card from "../Pages/Card";

function Batch() {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/sport');
            console.log(response.data.sports)
            setData(response.data.sports);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    
    return (
        <div className="batch-page">
            <Nav />
            <div className="batch-header">
                <h1 className="text-gradient">Discover your next sporting adventure<br/>at ALLMITSPORT's dynamic batches! 🏋️‍♂️💪</h1>
                <div className="batch-actions">
                    <Link to="/Register"><button className="btn-primary">Register New Batch</button></Link>
                </div>
            </div>

            <div className="batch-content">
                <div className="display-grid">
                    {data.map((ele, i) => (
                        <Card key={i} {...ele} fetchData={fetchData} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Batch;

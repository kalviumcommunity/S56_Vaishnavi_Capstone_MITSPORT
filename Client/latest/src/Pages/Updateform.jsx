import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./UpdateForm.css"

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
        <form className='updateform' onSubmit={handleSubmit}>
            <input
                type="text"
                name="Batch"
                value={formData.Batch}
                onChange={handleChange}
                placeholder="Batch"
            />
            <input
                type="text"
                name="Sport"
                value={formData.Sport}
                onChange={handleChange}
                placeholder="Sport"
            />
            <input
                type="text"
                name="Timing"
                value={formData.Timing}
                onChange={handleChange}
                placeholder="Timing"
            />
            <button type="submit">Update</button>
        </form>
    );
}

export default UpdateForm;

import React from "react";
import Nav from "../Components/Nav";
import "./contact.css"
import badminton from "../images/badminton.jpg";
import basketball from "../images/basketball.jpeg";
import football from "../images/football.jpeg";
import cricket from "../images/cricket.jpeg";
import chess from "../images/chess.jpeg";
import swim from "../images/swim.jpeg";
import gym from "../images/gym.jpeg";
import volly from "../images/volly.jpeg";
import tennis from "../images/tennis.jpg";
import rowing from "../images/rowing.jpeg";
import kho from "../images/kho.jpeg";
import kabaddi from "../images/kabaddi.jpeg";
import arc from "../images/arc.jpeg";
import boxing from "../images/boxing.jpg";

function Contact(){
    const coordinators = [
        { sport: "Badminton", name: "Sunil More", phone: "9763398136", img: badminton },
        { sport: "Football", name: "Akshay Vichare", phone: "9373865655", img: football },
        { sport: "BasketBall", name: "Baburao Desai", phone: "8767758336", img: basketball },
        { sport: "Cricket", name: "Mahesh Sawant", phone: "9325132041", img: cricket },
        { sport: "Swimming", name: "Prakash C", phone: "7378970129", img: swim },
        { sport: "Gym", name: "Head Trainer", phone: "N/A", img: gym },
        { sport: "Kho-kho", name: "Prankaj Gaikwad", phone: "9923225251", img: kho },
        { sport: "Kabaddi", name: "Kshipra Paithankar", phone: "9623980934", img: kabaddi },
        { sport: "Tennis", name: "Siddharth Garg", phone: "8421901110", img: tennis },
        { sport: "VolleyBall", name: "Priyanka Jadhav", phone: "7045828177", img: volly },
        { sport: "Chess", name: "Ashok Karad", phone: "7517512227", img: chess },
        { sport: "Rowing", name: "Sandeep Bhapkar", phone: "9822232577", img: rowing },
        { sport: "Boxing", name: "Manoj Pingale", phone: "9960300738", img: boxing },
        { sport: "Archery", name: "Priyadarshani", phone: "7769810518", img: arc },
    ];

    return(
        <div className="contact-page">
            <Nav/>
            
            <div className="contact-header">
                <h1 className="text-gradient">Coordinators Directory</h1>
                <p style={{color: 'var(--text-secondary)', fontSize: '1.2rem'}}>Meet the legends behind ALLMITSPORT</p>
            </div>
            
            <div className="contact-content">
                <div className="contact-grid">
                    {coordinators.map((coord, index) => (
                        <div className="contact-card-container" key={index}>
                            <div className="card-img-container">
                                <img className="card-img" src={coord.img} alt={coord.sport} />
                            </div>
                            <div className="card-content">
                                <h2 className="card-title">{coord.sport}</h2>
                                <h3 className="card-subtitle">{coord.name}</h3>
                                <p className="card-description">
                                    Contact: +91 {coord.phone}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Contact;

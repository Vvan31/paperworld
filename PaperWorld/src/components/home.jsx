import React from "react";
import fachada from "../assets/Fachada.png";
import eventLogo from "../assets/logoAPWMobile.svg";

import "../styles/home.css";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
const Home = () => {
    return (
        <div className="main">
            <div className="heroContainer">
                <div className="imageContainer">
                    <img className="hero" src={fachada} alt="fachada" />
                    <img className="hero" src={eventLogo} alt="America's paper world"/>
                </div>
            </div>
            <Paper elevation={4} className="about"/>
            <Paper elevation={4} className="attend"/>
        </div>
    );
};

export default Home;
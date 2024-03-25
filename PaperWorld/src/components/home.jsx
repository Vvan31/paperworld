import React, { useEffect } from "react";
import fachada from "../assets/Fachada.png";
import eventLogoESP from "../assets/8.svg";
import eventLogoENG from "../assets/9.svg";
import aboutIcon from "../assets/5635791.png"
import whatIcon from "../assets/memphis.png";
import whyIcon from "../assets/memphis (1).png";
import ShiftingCountdown from "./countdown.jsx"
import "../styles/home.css";
/* import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper"; */
import data from "../data.json";

// eslint-disable-next-line react/prop-types
const Home = ({ language }) => {
    const { home } = data[language]; // Access the corresponding language data
    const [eventLogo, setEventLogo] = React.useState(eventLogoESP);

    useEffect(() => {
        if (language === "eng") {
            setEventLogo(eventLogoENG);
        } else {
            setEventLogo(eventLogoESP);
        }
    }, [language]);


    return (
    <div className="main">
      <div className="heroContainer">
        <div className="imageContainer">
          <img className="hero fachada" src={fachada} alt="fachada" />
          <img className="hero logo" src={eventLogo} alt="America's paper world" />
        </div>
      </div>
      <div className="homeContent">
      <ShiftingCountdown language={language} />
        <div className="aboutContent">
          <div className="header">
            <h1>{home.about}</h1>
            <p>{home["about-content"]}</p>
          </div>
          <div className="aboutImage">
            <img className="aboutIcon" src={whatIcon} alt="about"/>
          </div>
        </div>

        <div className="whyContent">
          <div className="whyImage">
              <img className="whyIcon" src={aboutIcon} alt="about"/>
          </div>
          <div className="header">
            <h1>{home.why}</h1>
            <p>{home["why-content"]}</p>
          </div>
        </div>

        <div className="aboutContent">
          <div className="header">
            <h1>{home.what}</h1>
            <p>{home["what-content"]}</p>
          </div>
          <div className="aboutImage">
            <img className="aboutIcon" src={whyIcon} alt="about"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

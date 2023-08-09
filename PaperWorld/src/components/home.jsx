import React, { useEffect } from "react";
import fachada from "../assets/Fachada.png";
import eventLogoESP from "../assets/heroEsp.svg";
import eventLogoENG from "../assets/heroENG.svg";
import aboutIcon from "../assets/5635791.png"
import whatIcon from "../assets/memphis.png";
import whyIcon from "../assets/memphis (1).png";
import "../styles/home.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import data from "../data.json";

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
          <img className="hero" src={eventLogo} alt="America's paper world" />
        </div>
      </div>
      <div className="homeContent">

        <div className="aboutContent">
          <div className="header">
            <h2>{home.about}</h2>
            <p>{home["about-content"]}</p>
          </div>
          <div className="aboutImage">
            <img className="aboutIcon" src={aboutIcon} alt="about"/>
          </div>
        </div>

        <div className="whyContent">
          <div className="whyImage">
              <img className="whyIcon" src={whatIcon} alt="about"/>
          </div>
          <div className="header">
            <h2>{home.why}</h2>
            <p>{home["why-content"]}</p>
          </div>
        </div>

        <div className="aboutContent">
          <div className="header">
            <h2>{home.what}</h2>
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

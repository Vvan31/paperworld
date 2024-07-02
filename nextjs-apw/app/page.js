'use client';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React, { useEffect } from "react";
import Head from 'next/head';
import fachada from "../public/assets/Fachada.png";
import eventLogoESP from "../public/assets/8.svg";
import eventLogoENG from "../public/assets/9.svg";
import aboutIcon from "../public/assets/5635791.png";
import whatIcon from "../public/assets/memphis.png";
import whyIcon from "../public/assets/memphis (1).png";
import ShiftingCountdown from './components/countdown';
import "../styles/home.css";
import data from '../app/data.json';
import { useLanguage } from '../contexts/languageContext';
import Image from "next/image";

const HomePage = () => {
  const { language } = useLanguage();
  const { home } = data[language];
  const [eventLogo, setEventLogo] = React.useState(eventLogoESP);

  useEffect(() => {
    if (language === "eng") {
      setEventLogo(eventLogoENG);
    } else {
      setEventLogo(eventLogoESP);
    }
  }, [language]);

  return (
    <>
      <Head>
        <title>{home.title}</title>
        <meta name="description" content={home["meta-description"]} />
        <meta name="keywords" content="America's Paper World, event, why choose us, what we offer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="main">
        <header className="heroContainer">
          <div className="imageContainer">
            <Image className="hero fachada" src={fachada} alt="Event facade" />
            <Image className="hero logo" src={eventLogo} alt="America's Paper World Logo" />
          </div>
        </header>
        <div className="homeContent">
          <ShiftingCountdown language={language} />
          <section className="aboutContent">
            <div className="header">
              <h1>{home.about}</h1>
              <p>{home["about-content"]}</p>
            </div>
            <div className="aboutImage">
              <Image className="aboutIcon" src={whatIcon} alt="About Us" />
            </div>
          </section>

          <section className="whyContent">
            <div className="whyImage">
              <Image className="whyIcon" src={aboutIcon} alt="Why Choose Us" />
            </div>
            <div className="header">
              <h1>{home.why}</h1>
              <p>{home["why-content"]}</p>
            </div>
          </section>

          <section className="aboutContent">
            <div className="header">
              <h1>{home.what}</h1>
              <p>{home["what-content"]}</p>
            </div>
            <div className="aboutImage">
              <Image className="aboutIcon" src={whyIcon} alt="What We Offer" />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default HomePage;

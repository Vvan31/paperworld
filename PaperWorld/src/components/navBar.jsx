/* import React, { useEffect, useState } from "react";
import "./navBar.css";
import logo from "../assets/apwLogo.svg";
import menu from "../assets/menu.svg";
import data from "../data.json"

const Navbar = (language = "") => {
  const [isResponsive, setIsResponsive] = useState(false);
  const [content, setContent] = useState(data["esp"])
  useEffect(() => {
    if (language === "ENG") {
      setContent(data.eng.navBar)
    } else {
      setContent(data.esp.navBar)
    }
  }, [language])


  const toggleResponsive = () => {
    setIsResponsive(!isResponsive);
  };

  return (
    <div className={`topnav ${isResponsive ? "responsive" : ""}`} id="myTopnav">
      <a href="#home" className="menuItemLogo">
        <img src={logo} alt="APW Logo" width={'70px'} />
      </a>
      <a className="menuItem" href="#news">Registration</a>
      <a className="menuItem" href="#contact">Schedule</a>
      <a className="menuItem" href="#about">Event Map</a>
      <a className="menuItem" href="#about">Contact us</a>
      <a className="icon" onClick={toggleResponsive}>
        <img className="menuIcon" src={menu}></img>
      </a>
    </div>
  );
};

export default Navbar;
 */
import React, { useEffect, useState } from 'react';
import './navBar.css';
import logo from '../assets/apwLogo.svg';
import menu from '../assets/menu.svg';
import data from '../data.json';

const Navbar = ({ language, onLanguageChange }) => {
  const [isResponsive, setIsResponsive] = useState(false);
  const [content, setContent] = useState(data.esp.navBar);

  useEffect(() => {
    if (language === 'eng') {
      setContent(data.eng.navBar);
    } else {
      setContent(data.esp.navBar);
    }
  }, [language]);

  const toggleResponsive = () => {
    setIsResponsive(!isResponsive);
  };

  return (
    <div className={`topnav ${isResponsive ? 'responsive' : ''}`} id="myTopnav">
      <a href="#home" className="menuItemLogo">
        <img src={logo} alt="APW Logo" width={'70px'} />
      </a>
      <a className="menuItem" href="#news">
        {content.register}
      </a>
      <a className="menuItem" href="#contact">
        {content.shcedule}
      </a>
      <a className="menuItem" href="#about">
        {content.map}
      </a>
      <a className="menuItem" href="#about">
        {content.contact}
      </a>
      <a className="icon" onClick={toggleResponsive}>
        <img className="menuIcon" src={menu} alt="menu icon" />
      </a>
    </div>
  );
};

export default Navbar;

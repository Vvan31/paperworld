import React, { useState } from "react";
import "./navBar.css";
import logo from "../assets/apwLogo.svg";
import menu from "../assets/menu.svg";

const Navbar = () => {
  const [isResponsive, setIsResponsive] = useState(false);

  const toggleResponsive = () => {
    setIsResponsive(!isResponsive);
  };
``
  return (
    <div className={`topnav ${isResponsive ? "responsive" : ""}`} id="myTopnav">
      <a href="#home" className="menuItemLogo">
        <img src={logo} alt="APW Logo" width={'70px'} />
      </a>
      <a className="menuItem" href="#news">News</a>
      <a className="menuItem" href="#contact">Contact</a>
      <a className="menuItem" href="#about">About</a>
      <a className="icon" onClick={toggleResponsive}>
        <img className="menuIcon" src={menu}></img>
      </a>
    </div>
  );
};

export default Navbar;

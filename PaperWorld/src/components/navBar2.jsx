import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import data from '../data.json';
import Tooltip from '@mui/material/Tooltip';
import logo from '../assets/apwLogo.svg';
import './navBar2.css';

// eslint-disable-next-line react/prop-types
const NavBar2 = ({ language }) => {
  const navigate = useNavigate();
  const { navBar } = data[language];
  const [content, setContent] = useState(getInitialContent());
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      setContent(data[storedLanguage].navBar);
    } else {
      setContent(data.esp.navBar);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', content === data.esp.navBar ? 'esp' : 'eng');
  }, [content]);

  function getInitialContent() {
    const storedLanguage = localStorage.getItem('language');
    return data[storedLanguage || 'esp'].navBar;
  }

  const handlePageChange = (selectedPage) => {
    navigate(`/${selectedPage}`);
    setIsMenuOpen(false); // Close the menu after navigating
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav>
      <div className="navWrapper">
        <div className="logoNavBar">
          <a href="" onClick={() => handlePageChange('')}>
            <img src={logo} alt="APW Logo" width={'70px'} />
          </a>
        </div>
        <input type="checkbox" name="slider" id="menu-btn" checked={isMenuOpen} onChange={toggleMenu} />
        <input type="checkbox" name="slider" id="close-btn" onChange={toggleMenu} />
        {/* <div className="hamburger-menu">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div> */}
        <ul className="nav-links">
          <label htmlFor="close-btn" className="btn close-btn"><i className="fas fa-times"></i></label>
          <li>
            <a className="desktop-item">{navBar.visitor.title} </a>
            <input type="checkbox" id="showDrop" />
            <label htmlFor="showDrop" className="mobile-item">{navBar.visitor.title} </label>
            <ul className="drop-menu">
              <li><a href="" onClick={() => handlePageChange('register')}>{navBar.visitor.register}</a></li>
              <li><a href="" onClick={() => handlePageChange('hotel')}>{navBar.visitor.hotels}</a></li>
              <li><a href="" onClick={() => handlePageChange('schedule')}>{navBar.visitor.program}</a></li>
              <li><a href="" onClick={() => handlePageChange('mexico')}>{navBar.visitor.mexico}</a></li>
            </ul>
          </li>
          <li>
            <a className="desktop-item">{navBar.exhibitor.title} </a>
            <input type="checkbox" id="showDrop2" />
            <label htmlFor="showDrop2" className="mobile-item">{navBar.exhibitor.title} </label>
            <ul className="drop-menu bigger">
              <li><a href="" onClick={() => handlePageChange('expositor')}>{navBar.exhibitor.whyExhibitor}</a></li>
              <li><a href="" onClick={() => handlePageChange('scheduleExhibitor')}>{navBar.visitor.program}</a></li>
              <li><a href="" onClick={() => handlePageChange('pricesExhibitor')}>{navBar.exhibitor.prices}</a></li>
              <li><a href="" onClick={() => handlePageChange('manualExhibitor')}>{navBar.exhibitor.manual}</a></li>
              <li disabled={true}>
                <Tooltip title={navBar.exhibitor.listMessage} arrow>
                  <a className='list'>{navBar.exhibitor.list}</a>
                </Tooltip>
              </li>
            </ul>
          </li>
          <li><a href="" onClick={() => handlePageChange('map')}>{navBar.map}</a></li>
          <li><a href="" onClick={() => handlePageChange('contact')}>{navBar.contact}</a></li>
        </ul>
        <label htmlFor="menu-btn" className="btn menu-btn"><i className="fas fa-bars"></i></label>
      </div>
    </nav>
  );
}

export default NavBar2;

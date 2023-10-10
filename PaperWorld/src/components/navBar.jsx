import  { useEffect, useState } from 'react';
import './navBar.css';
import logo from '../assets/apwLogo.svg';
import menu from '../assets/menu.svg';
import data from '../data.json';

// eslint-disable-next-line react/prop-types
const Navbar = ({ language, onPageChange }) => {
  const [isResponsive, setIsResponsive] = useState(false);
  const [content, setContent] = useState(data.esp.navBar);

  useEffect(() => {
    if (language === 'eng') {
      setContent(data.eng.navBar);
    } else {
      setContent(data.esp.navBar);
    }
  }, [language]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isResponsive && event.target.closest('.topnav') === null) {
        setIsResponsive(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isResponsive]);

  const toggleResponsive = () => {
    setIsResponsive(!isResponsive);
  };

  const handlePageChange = (selectedPage) => {
    onPageChange(selectedPage);
    setIsResponsive(false);
  };

  return (
    <div className={`topnav ${isResponsive ? 'responsive' : ''}`} id="myTopnav">
      <a href="#home" className="menuItemLogo" onClick={() => handlePageChange('home')}>
        <img src={logo} alt="APW Logo" width={'70px'} />
      </a>
      <a className="menuItem" href="#" onClick={() => handlePageChange('register')}>
        {content.register}
      </a>
      <a className="menuItem" href="#" onClick={() => handlePageChange('schedule')}>
        {content.shcedule}
      </a>
      <a className="menuItem" href="#" onClick={() => handlePageChange('map')}>
        {content.map}
      </a>
      <a className="menuItem" href="#" onClick={() => handlePageChange('contact')}>
        {content.contact}
      </a>
      <a className="burgericon" onClick={toggleResponsive}>
        <img className="menuIcon" src={menu} alt="menu icon" />
      </a>
    </div>
  );
};

export default Navbar;
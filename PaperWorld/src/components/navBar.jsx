import  { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './navBar.css';
import logo from '../assets/apwLogo.svg';
import menu from '../assets/menu.svg';
import data from '../data.json';

// eslint-disable-next-line react/prop-types
const Navbar = ({ language }) => {
  const navigate = useNavigate();
  const [isResponsive, setIsResponsive] = useState(false);
  const [content, setContent] = useState(getInitialContent());

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      setContent(data[storedLanguage].navBar);
    } else {
      // Default to Spanish if no language is stored
      setContent(data.esp.navBar);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', content === data.esp.navBar ? 'esp' : 'eng');
  }, [content]);

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


  function getInitialContent() {
    const storedLanguage = localStorage.getItem('language');
    return data[storedLanguage || 'esp'].navBar;
  }
  
  const toggleResponsive = () => {
    setIsResponsive(!isResponsive);
  };

  const handlePageChange = (selectedPage) => {
    navigate(`/${selectedPage}`); // Use the navigate function to change routes
    setIsResponsive(false);
  };

  return (
    <div className={`topnav ${isResponsive ? 'responsive' : ''}`} id="myTopnav">
      <a href="" className="menuItemLogo" onClick={() => handlePageChange('')}>
        <img src={logo} alt="APW Logo" width={'70px'} />
      </a>
      <a className="menuItem" href="" onClick={() => handlePageChange('register')}>
        {content.register}
      </a>
      <a className="menuItem" href="" onClick={() => handlePageChange('schedule')}>
        {content.shcedule}
      </a>
      <a className="menuItem" href="" onClick={() => handlePageChange('map')}>
        {content.map}
      </a>
      <a className="menuItem" href="" onClick={() => handlePageChange('contact')}>
        {content.contact}
      </a>
      <a className="burgericon" onClick={toggleResponsive}>
        <img className="menuIcon" src={menu} alt="menu icon" />
      </a>
    </div>
  );
};

export default Navbar;
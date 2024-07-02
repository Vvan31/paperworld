'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Tooltip from '@mui/material/Tooltip';
import Image from 'next/image';
import data from '../data.json';
import logo from '../../public/assets/apwLogo.svg';
import './navBar2.css';
import { useLanguage } from '../../contexts/languageContext';

const NavBar = () => {
  const { language, handleLangsuageChange } = useLanguage();
  // const language = 'esp';
  const router = useRouter();
  const { navBar } = data[language];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handlePageChange = (selectedPage) => {
    router.push(`/${selectedPage}`);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav>
      <div className="navWrapper">
        <div className="logoNavBar">
          <Link href="/">
            <Image src={logo} alt="APW Logo" width={70} height={70} />
          </Link>
        </div>
        <input type="checkbox" name="slider" id="menu-btn" checked={isMenuOpen} onChange={toggleMenu} />
        <input type="checkbox" name="slider" id="close-btn" onChange={toggleMenu} />
        <ul className="nav-links">
          <label htmlFor="close-btn" className="btn close-btn"><i className="fas fa-times"></i></label>
          <li>
            <a className="desktop-item">{navBar.visitor.title}</a>
            <input type="checkbox" id="showDrop" />
            <label htmlFor="showDrop" className="mobile-item">{navBar.visitor.title}</label>
            <ul className="drop-menu">
              <li><a href="#" onClick={() => handlePageChange('register')}>{navBar.visitor.register}</a></li>
              <li><a href="#" onClick={() => handlePageChange('hotels')}>{navBar.visitor.hotels}</a></li>
              <li><a href="#" onClick={() => handlePageChange('schedule')}>{navBar.visitor.program}</a></li>
              <li><a href="#" onClick={() => handlePageChange('mexico')}>{navBar.visitor.mexico}</a></li>
            </ul>
          </li>
          <li>
            <a className="desktop-item">{navBar.exhibitor.title}</a>
            <input type="checkbox" id="showDrop2" />
            <label htmlFor="showDrop2" className="mobile-item">{navBar.exhibitor.title}</label>
            <ul className="drop-menu bigger">
              <li><a href="#" onClick={() => handlePageChange('expositor')}>{navBar.exhibitor.whyExhibitor}</a></li>
              <li><a href="#" onClick={() => handlePageChange('scheduleExhibitor')}>{navBar.visitor.program}</a></li>
              <li><a href="#" onClick={() => handlePageChange('pricesExhibitor')}>{navBar.exhibitor.prices}</a></li>
              <li disabled={true}>
                <Tooltip title={navBar.exhibitor.listMessage} arrow>
                  <a className='list'>{navBar.exhibitor.list}</a>
                </Tooltip>
              </li>
            </ul>
          </li>
          <li><a href="#" onClick={() => handlePageChange('map')}>{navBar.map}</a></li>
          <li><a href="#" onClick={() => handlePageChange('contact')}>{navBar.contact}</a></li>
        </ul>
        <label htmlFor="menu-btn" className="btn menu-btn"><i className="fas fa-bars"></i></label>
      </div>
    </nav>
  );
}

export default NavBar;

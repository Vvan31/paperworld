
import { useState } from 'react';
import './App.css';
import {Helmet} from "react-helmet";
// components
import Navbar from './components/navBar';
import Home from './components/home';
import Register from './components/register';
import Schedule from './components/schedule';
import Map from './components/map';
import Contact from './components/contact';
import Footer from './components/footer';

import mx from './assets/mx.png';
import usa from './assets/usa.png';
import Fab from '@mui/material/Fab';

function App() {
  const [page, setPage] = useState('home');
  const [language, setLanguage] = useState('esp');

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  const handlePageChange = (selectedPage) => {
    setPage(selectedPage);
  };

  let pageComponent;
  if (page === 'home') {
    pageComponent = <Home language={language} />;
  } else if (page === 'register') {
    pageComponent = <Register language={language} />;
  }else if (page === 'map') {
    pageComponent = <Map  language={language} />;
  }else if (page === 'schedule') {
    pageComponent = <Schedule language={language} />;
  }else {
    pageComponent = <Contact language={language}/>
  }

  return (
    <div className="main">
       <Helmet>
        <meta charSet="utf-8" />
        <title>America's Paper World</title>
        <meta name="description" content="A first level and world class exhibition which brings together the whole world in one place with the aim of showing technological advances and innovation on the industry and machinery for the manufacture of pulp and paper" />
        <meta name="keywords" content="APW, America's Paper World, Paper, America's, World" />
      
      </Helmet>
      <Navbar language={language} onLanguageChange={handleLanguageChange} onPageChange={handlePageChange} />

      {pageComponent}

      <div className="language">
        <Fab
          onClick={() => handleLanguageChange('esp')}
          color="primary"
          aria-label="add"
          className="icon"
        >
          <img src={mx} alt="mxn" />
        </Fab>
        <Fab
          onClick={() => handleLanguageChange('eng')}
          color="primary"
          aria-label="add"
          className="icon"
        >
          <img src={usa} alt="usa" />
        </Fab>
      </div>
      <Footer />
    </div>
  );
}

export default App;
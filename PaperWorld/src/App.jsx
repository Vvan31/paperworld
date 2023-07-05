import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
//components
import Navbar from './components/navBar';
import Home from './components/home';

import mx from './assets/mx.png';
import usa from './assets/usa.png';
import Fab from '@mui/material/Fab';

function App() {
  const [page, setPage] = useState('home');
  const [language, setLanguage] = useState('esp');

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  return (
    <div className="main">
      <Navbar language={language} onLanguageChange={handleLanguageChange} />
      <Home language={language} />
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
    </div>
  );
}

export default App;

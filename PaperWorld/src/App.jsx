import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import React Router components
import Navbar from './components/navBar';
import Home from './components/home';
import Register from './components/register';
import Map from './components/map';
import Footer from './components/footer';
import Schedule from './components/schedule';
import mx from './assets/mx.png';
import usa from './assets/usa.png';
import Fab from '@mui/material/Fab';

function App() {
  const [language, setLanguage] = useState('esp');

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  return (
    <div className="main">
      <Router>
        <Navbar language={language} onLanguageChange={handleLanguageChange} />
        <Routes>
          <Route path="/register" element={<Register language={language} />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/map" element={<Map language={language} />} />
          <Route path="/" element={<Home language={language} />} />
        </Routes>
      </Router>

      <div className="language">
        <Fab onClick={() => handleLanguageChange('esp')} color="primary" aria-label="add" className="icon">
          <img src={mx} alt="mxn" />
        </Fab>
        <Fab onClick={() => handleLanguageChange('eng')} color="primary" aria-label="add" className="icon">
          <img src={usa} alt="usa" />
        </Fab>
      </div>
      <Footer />
    </div>
  );
}

export default App;

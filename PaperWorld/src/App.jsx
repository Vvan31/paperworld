
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// import Navbar from './components/navBar';
import Navbar2 from './components/navBar2';
import Home from './components/home';
import Register from './components/register';
import Schedule from './components/schedule';
import Map from './components/map';
import Contact from './components/contact';
import Footer from './components/footer';
import Mexico from './components/mexico';
import PorqueExponer from './components/porqueExponer';
import Hotels from './components/hotels';
import ScheduleExhibitor from './components/scheduleExhibitor.jsx';
import Prices from './components/prices.jsx';
import Manual from './components/manual.jsx';
import MapImage from './components/MapImage.jsx';
import mx from './assets/mx.png';
import usa from './assets/usa.png';
import Fab from '@mui/material/Fab';
import './App.css';
const App = () => {
  const [language, setLanguage] = useState(getInitialLanguage());

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  function getInitialLanguage() {
    return localStorage.getItem('language') || 'esp';
  }

return (
    <Router>
      <div className="main">
      <Helmet>
        <meta charSet="utf-8" />
        <title>America&apos;s Paper World</title>
        <meta name="description" content="A first level and world class exhibition which brings together the whole world in one place with the aim of showing technological advances and innovation on the industry and machinery for the manufacture of pulp and paper" />
        <meta name="keywords" content="APW, America&apos;s Paper World, Paper, America&apos;s, World" />
      </Helmet>
        {/* <Navbar language={language} onLanguageChange={handleLanguageChange} /> */}
        <Navbar2 language={language} onLanguageChange={handleLanguageChange} />
        <div className="mainContent">
          <Routes>
            <Route path="/" element={<Home language={language} />} />
            <Route path="/register" element={<Register language={language} />} />
            <Route path="/map" element={<MapImage language={language} />} />
            {/* <Route path="/map" element={<Map language={language} />} />  */}
            <Route path="/schedule" element={<Schedule language={language} />} />
            <Route path="/contact" element={<Contact language={language} />} />
            <Route path="/mexico" element={<Mexico language={language} />} />
            <Route path="/expositor" element={<PorqueExponer language={language} />} />
            <Route path="/hotel" element={<Hotels language={language} />} />
            <Route path="/scheduleExhibitor" element={<ScheduleExhibitor language={language} />} />
            <Route path="/pricesExhibitor" element={<Prices language={language} />} />
            {/* <Route path="/manualExhibitor" element={<Manual language={language} />} /> */}
         </Routes>
        </div>
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
        <Footer language={language} />
      </div>
    </Router>
  );
}

export default App;
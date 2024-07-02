'use client';

import React, { useState, useEffect } from 'react';
import "../../styles/industryAreas.css";

import ScienceIcon from '@mui/icons-material/Science';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import EngineeringIcon from '@mui/icons-material/Engineering';
import OpacityIcon from '@mui/icons-material/Opacity';
import SecurityIcon from '@mui/icons-material/Security';
import BiotechIcon from '@mui/icons-material/Biotech';

import data from "../data.json"
import { useLanguage } from '../../contexts/languageContext';
import { Icon } from '@mui/material';

const sections = ['Químicos', 'Maquinaria', 'Ingeniería', 'Tratamientos de aguas y Biogás', "Equipo de Carga", "Equipo de Seguridad", "Equipo de Laboratorio, medición y control"];

const colors = {
  Químicos: '#C5138A',
  Maquinaria: '#484848',
  Ingeniería: '#BD310B',
  tratamientos: '#223B82',
  equipoCarga: '#F27935',
  equipoSeguridad: '#5EADE8',
  equipoLaboratorio: '#3B7A35'
};

const pictograms = {
  Químicos: ScienceIcon,
  Maquinaria: PrecisionManufacturingIcon,
  Ingenieria: EngineeringIcon,
  tratamientos: OpacityIcon,
  equipoCarga: PrecisionManufacturingIcon,
  equipoSeguridad: SecurityIcon,
  equipoLaboratorio: BiotechIcon
};

function IndustryAreas() {
  const { language, handleLangsuageChange } = useLanguage();

  let { whyExhibitor } = data[language];
  const getColor = (colorName) => {
    if (colors.hasOwnProperty(colorName)) {
      return colors[colorName];
    } else {
      console.warn("This color key doesn't exist.");
      return '';
    }
  };

  const getPictoUrl = (pictoName) => {
    if (pictograms.hasOwnProperty(pictoName)) {
      return pictograms[pictoName];
    } else {
      console.warn("This pictogram key doesn't exist." + pictoName);
      return pictograms['Químicos'];
    }
  };

  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSectionIndex((prevIndex) => (prevIndex + 1) % sections.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSectionClick = (index) => {
    setCurrentSectionIndex(index);
  };
  return (
    <div id="scene" className='scene'>
      <div id="left-zone">
        <ul className="list">
          {sections.map((section, index) => (
            <li className={`item ${index === currentSectionIndex ? 'active' : ''}`} key={index}>
              <input
                type="radio"
                id={`radio_${section}`}
                name="basic_carousel"
                value={section}
                checked={index === currentSectionIndex}
                onChange={() => handleSectionClick(index)}
              />
              <label htmlFor={`radio_${section}`} className="label" style={index === currentSectionIndex ? { color: getColor(whyExhibitor.IndustryAreas[section].picto), borderRight: `solid 4px ${getColor(whyExhibitor.IndustryAreas[section].picto)}`, fontWeight: 'bold' } : null}>
                {whyExhibitor.IndustryAreas[section].title}
              </label>
              <div className={`indAContent content_${section}`} style={{ 
                  display: index === currentSectionIndex ? 'block' : 'none' }}>
                <Icon className="picto">
                  {React.createElement(getPictoUrl(whyExhibitor.IndustryAreas[section].picto), { sx: { color: getColor(whyExhibitor.IndustryAreas[section].picto) } })}
                </Icon>
                <h1>{whyExhibitor.IndustryAreas[section].title}</h1>
                <p>{whyExhibitor.IndustryAreas[section].content}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div id="middle-border" ></div>
      <div id="right-zone"></div>
    </div>
  );
}

export default IndustryAreas;
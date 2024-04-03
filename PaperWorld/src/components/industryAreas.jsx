import React, { useState, useEffect } from 'react';
import "./industryAreas.css";
import styled from '@emotion/styled';

import ScienceIcon from '@mui/icons-material/Science';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import EngineeringIcon from '@mui/icons-material/Engineering';
import OpacityIcon from '@mui/icons-material/Opacity';
import SecurityIcon from '@mui/icons-material/Security';
import BiotechIcon from '@mui/icons-material/Biotech';

import data from "../data.json"

import papel from "../assets/PNG/Paper_06.png"
import { Icon } from '@mui/material';

const datas = {
  'Químicos': {
    title: 'Químicos',
    content: 'The garden strawberry (or simply strawberry /ˈstrɔːbᵊri/; Fragaria × ananassa) is a widely grown hybrid species of the genus Fragaria (collectively known as the strawberries)',
    picto: 'Químicos'
  },
  'Maquinaria': {
    title: 'Maquinaria',
    content: 'A banana is an edible fruit, botanically a berry, produced by several kinds of large herbaceous flowering plants in the genus Musa.',
    picto: 'Maquinaria'
  },
  'Ingeniería': {
    title: 'Ingeniería',
    content: 'The apple tree (Malus domestica) is a deciduous tree in the rose family best known for its sweet, pomaceous fruit, the apple. It is cultivated worldwide as a fruit tree, and is the most widely grown species in the genus Malus.',
    picto: 'Ingenieria'
  },
  'Tratamientos de aguas y Biogás': {
    title: 'Tratamientos de aguas y Biogás',
    content: 'The orange (specifically, the sweet orange) is the fruit of the citrus species Citrus × sinensis in the family Rutaceae.',
    picto: 'tratamientos'
  },
  'Equipo de Carga': {
    title: 'Equipo de Carga',
    content: 'The orange (specifically, the sweet orange) is the fruit of the citrus species Citrus × sinensis in the family Rutaceae.',
    picto: 'equipoCarga'
  },
  'Equipo de Seguridad': {
    title: 'Equipo de Seguridad',
    content: 'The orange (specifically, the sweet orange) is the fruit of the citrus species Citrus × sinensis in the family Rutaceae.',
    picto: 'equipoSeguridad'
  },
  'Equipo de Laboratorio, medición y control': {
    title: 'Equipo de Laboratorio, medición y control',
    content: 'The orange (specifically, the sweet orange) is the fruit of the citrus species Citrus × sinensis in the family Rutaceae.',
    picto: 'equipoLaboratorio'
  }
};

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

function IndustryAreas({ language }) {
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
    }, 3500);
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
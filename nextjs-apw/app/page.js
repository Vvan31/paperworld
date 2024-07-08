'use client';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React, { useEffect } from "react";
import Head from 'next/head';
import fachada from "../public/assets/Fachada.png";
import eventLogoESP from "../public/assets/8.svg";
import eventLogoENG from "../public/assets/9.svg";
import aboutIcon from "../public/assets/5635791.png";
import whatIcon from "../public/assets/memphis.png";
import whyIcon from "../public/assets/memphis (1).png";
import ShiftingCountdown from './components/countdown';
import "../styles/home.css";
import data from '../app/data.json';
import { useLanguage } from '../contexts/languageContext';
import Image from "next/image";



const HomePage = () => {
  const { language } = useLanguage();
  const { home } = data[language];
  const [eventLogo, setEventLogo] = React.useState(eventLogoESP);

  useEffect(() => {
    if (language === "eng") {
      setEventLogo(eventLogoENG);
    } else {
      setEventLogo(eventLogoESP);
    }
  }, [language]);

  return (
    <>
     <Head>
        <title>America&apos;s Paper World</title>
        <meta name="description" content="Exposición papelera de primer nivel y clase mundial que reúne profesionales de la industria del papel y maquinaria con el objetivo de mostrar avances tecnológicos para la fabricación de celulosa y papel. Incluye: Expo papelera, América's Paper World México, Industria del papel, Innovación en papel, Tecnología papelera, Conferencias técnicas, Stands de exposición, Networking empresarial, Profesionales del papel, Evento empresarial México, Maquinaria papelera, Equipos de fabricación de papel, Materia prima para papel, Sostenibilidad en la industria del papel, Impresión y embalaje, Digitalización en el sector papelero, Eficiencia energética en la producción de papel, Reciclaje de papel, Mercado papelero, Tendencias en papel y cartón, Papel recubierto, Papel kraft, Papel bond, Papel higiénico, Cartulina y cartón, Fabricantes de papel, Distribuidores de papel, Exportadores de papel, Importadores de papel, Comercio de papel, Proveedores de papel, Tecnologías de impresión, Innovaciones en empaques de papel, Sistemas de gestión de residuos, Normativas ambientales papeleras, Procesos de producción de papel, Mantenimiento industrial papelero, Servicios para la industria del papel, Asociaciones papeleras, Eventos B2B México, Oportunidades de negocio en papel, Economía circular y papel, Diseño de productos papeleros, Ingeniería papelera, Consultoría para la industria del papel, Exportación de productos papeleros, Impresoras de gran formato, Embalajes sostenibles, Tecnología de laminación, Innovación en fibras de papel, Conferencias de negocios México, Tendencias de mercado papelero, Reducción de huella de carbono, Tecnología de reciclaje de papel, Gestión de residuos industriales, Soluciones de embalaje de papel, Automatización en la producción de papel, Tintas para impresión papelera, Digitalización de procesos papeleros, Calidad del papel, Diseño gráfico y papel, Logística en la industria del papel, Innovación en maquinaria de papel, Papel térmico, Mercado de celulosa, Mercado de pulpa de papel, Equipos de conversión de papel, Empaque y embalaje de papel, Servicios de ingeniería papelera, Sistemas de control de calidad papelera, Mercado de papel y cartón, Impresión digital en papel, Economía circular en papel, Sostenibilidad en la producción de papel, Análisis de mercado papelero, Papel de envoltura, Papel absorbente, Tendencias de consumo de papel, Maquinaria de corte de papel, Innovación en reciclaje de papel, Tecnología de fabricación de papel, Seguridad industrial en la industria papelera, Mercado de papel y embalaje." />
        <meta name="keywords" content="America's Paper World, Expo papelera, América's Paper World México, Industria del papel, Innovación en papel, Tecnología papelera, Conferencias técnicas, Stands de exposición, Networking empresarial, Profesionales del papel, Evento empresarial México, Maquinaria papelera, Equipos de fabricación de papel, Materia prima para papel, Sostenibilidad en la industria del papel, Impresión y embalaje, Digitalización en el sector papelero, Eficiencia energética en la producción de papel, Reciclaje de papel, Mercado papelero, Tendencias en papel y cartón, Papel recubierto, Papel kraft, Papel bond, Papel higiénico, Cartulina y cartón, Fabricantes de papel, Distribuidores de papel, Exportadores de papel, Importadores de papel, Comercio de papel, Proveedores de papel, Tecnologías de impresión, Innovaciones en empaques de papel, Sistemas de gestión de residuos, Normativas ambientales papeleras, Procesos de producción de papel, Mantenimiento industrial papelero, Servicios para la industria del papel, Asociaciones papeleras, Eventos B2B México, Oportunidades de negocio en papel, Economía circular y papel, Diseño de productos papeleros, Ingeniería papelera, Consultoría para la industria del papel, Exportación de productos papeleros, Impresoras de gran formato, Embalajes sostenibles, Tecnología de laminación, Innovación en fibras de papel, Conferencias de negocios México, Tendencias de mercado papelero, Reducción de huella de carbono, Tecnología de reciclaje de papel, Gestión de residuos industriales, Soluciones de embalaje de papel, Automatización en la producción de papel, Tintas para impresión papelera, Digitalización de procesos papeleros, Calidad del papel, Diseño gráfico y papel, Logística en la industria del papel, Innovación en maquinaria de papel, Papel térmico, Mercado de celulosa, Mercado de pulpa de papel, Equipos de conversión de papel, Empaque y embalaje de papel, Servicios de ingeniería papelera, Sistemas de control de calidad papelera, Mercado de papel y cartón, Impresión digital en papel, Economía circular en papel, Sostenibilidad en la producción de papel, Análisis de mercado papelero, Papel de envoltura, Papel absorbente, Tendencias de consumo de papel, Maquinaria de corte de papel, Innovación en reciclaje de papel, Tecnología de fabricación de papel, Seguridad industrial en la industria papelera, Mercado de papel y embalaje." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="main">
        <header className="heroContainer">
          <div className="imageContainer">
            <Image className="hero fachada" src={fachada} alt="Event facade" />
            <Image className="hero logo" src={eventLogo} alt="America's Paper World Logo" />
          </div>
        </header>
        <div className="homeContent">
          <ShiftingCountdown language={language} />
          <section className="aboutContent">
            <div className="header">
              <h1>{home.about}</h1>
              <p>{home["about-content"]}</p>
            </div>
            <div className="aboutImage">
              <Image className="aboutIcon" src={whatIcon} alt="About Us" />
            </div>
          </section>

          <section className="whyContent">
            <div className="whyImage">
              <Image className="whyIcon" src={aboutIcon} alt="Why Choose Us" />
            </div>
            <div className="header">
              <h1>{home.why}</h1>
              <p>{home["why-content"]}</p>
            </div>
          </section>

          <section className="aboutContent">
            <div className="header">
              <h1>{home.what}</h1>
              <p>{home["what-content"]}</p>
            </div>
            <div className="aboutImage">
              <Image className="aboutIcon" src={whyIcon} alt="What We Offer" />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default HomePage;

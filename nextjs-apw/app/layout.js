'use client';

import '../styles/globals.css';
import NavBar from './components/NavBar';
import Footer from './components/footer';
import LanguageSwitcher from './components/LanguageSwitcher';
import { LanguageProvider } from '../contexts/languageContext'; // Import the LanguageProvider


 const metadata = {
  title: {
    default: 'Americas Paper World - Expo papelera en Mexico ',
    template: '%s | Americas Paper World',
  },
  description: 'Exposicion papelera de primer nivel y clase mundial que reúne profesionales de la industria del papel y maquinaria con el objetivo de mostrar avances tecnológicos para la fabricación de celulosa y papel',
  by: 'Americas Paper World',
  robots: 'follow, index',
};

export default function Layout({ children }) {

  return (
    <html lang="en">
      <head>
        <title>{metadata.title.default}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="America&apos;s Paper World, Expo papelera, América&apos;s Paper World México, Industria del papel, Innovación en papel, Tecnologia papelera,  Conferencias tecnicas, Stands de exposición, Networking empresarial, Profesionales del papel, Evento empresarial México, Maquinaria papelera, Equipos de fabricación de papel, Materia prima para papel, Sostenibilidad en la industria del papel, Impresión y embalaje, Digitalización en el sector papelero, Eficiencia energética en la producción de papel, Reciclaje de papel, Mercado papelero, Tendencias en papel y cartón, Papel recubierto, Papel kraft, Papel bond, Papel higiénico, Cartulina y cartón, Fabricantes de papel, Distribuidores de papel, Exportadores de papel, Importadores de papel, Comercio de papel, Proveedores de papel, Tecnologías de impresión, Innovaciones en empaques de papel, Sistemas de gestión de residuos, Normativas ambientales papeleras, Procesos de producción de papel, Mantenimiento industrial papelero, Servicios para la industria del papel, Asociaciones papeleras, Eventos B2B México, Oportunidades de negocio en papel, Economía circular y papel, Diseño de productos papeleros, Ingeniería papelera, Consultoría para la industria del papel, Exportación de productos papeleros, Impresoras de gran formato, Embalajes sostenibles, Tecnología de laminación, Innovación en fibras de papel, Conferencias de negocios México, Tendencias de mercado papelero, Reducción de huella de carbono, Tecnología de reciclaje de papel, Gestión de residuos industriales, Soluciones de embalaje de papel, Automatización en la producción de papel, Tintas para impresión papelera, Digitalización de procesos papeleros, Calidad del papel, Diseño gráfico y papel, Logística en la industria del papel, Innovación en maquinaria de papel, Papel térmico, Mercado de celulosa, Mercado de pulpa de papel, Equipos de conversión de papel, Empaque y embalaje de papel, Servicios de ingeniería papelera, Sistemas de control de calidad papelera, Mercado de papel y cartón, Impresión digital en papel, Economía circular en papel, Sostenibilidad en la producción de papel, Análisis de mercado papelero, Papel de envoltura, Papel absorbente, Tendencias de consumo de papel, Maquinaria de corte de papel, Innovación en reciclaje de papel, Tecnología de fabricación de papel, Seguridad industrial en la industria papelera, Mercado de papel y embalaje" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <LanguageProvider> 
          <NavBar />
          <LanguageSwitcher />
          <main>
            <div className="mainContent">
            {children}
              </div>
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}

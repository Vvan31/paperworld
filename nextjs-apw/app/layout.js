'use client';

import '../styles/globals.css';
import NavBar from './components/NavBar';
import Footer from './components/footer';
import LanguageSwitcher from './components/LanguageSwitcher';
import { LanguageProvider } from '../contexts/languageContext'; // Import the LanguageProvider


 const metadata = {
  title: {
    default: 'Americas Paper World',
    template: '%s | Americas Paper World',
  },
  description: 'Exposicion de primer nivel y clase mundial que reune profesionales de la industria y maquinaria con el objetivo de mostrar avances tecnologicos para la fabricacion de celulosa y papel.',
  by: 'Americas Paper World',
  robots: 'follow, index',
};

export default function Layout({ children }) {

  return (
    <html lang="en">
      <head>
        <title>{metadata.title.default}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="Americas Paper World, event, why choose us, what we offer" />
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

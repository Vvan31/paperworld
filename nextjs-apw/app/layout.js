'use client';

import '../styles/globals.css';
import NavBar from './components/NavBar';
import Footer from './components/footer';
import LanguageSwitcher from './components/LanguageSwitcher';
import { LanguageProvider } from '../contexts/languageContext'; // Import the LanguageProvider

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider> {/* Wrap your components with LanguageProvider */}
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

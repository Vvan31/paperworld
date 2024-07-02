// app/components/LanguageSwitcher.js
'use client';
import React from 'react';
import { useLanguage } from '@/contexts/languageContext';
import mx from '../../public/assets/mx.png'; // Adjust the path to your actual image location
import usa from '../../public/assets/usa.png'; // Adjust the path to your actual image location
import Image from 'next/image';
import './languageSwitcher.css';
const LanguageSwitcher = () => {
  const { handleLanguageChange } = useLanguage();

    // const handleLanguageChange = "esp";
  return (
    <div className="language">
      <button onClick={() => handleLanguageChange('esp')}>
        <Image src={mx} alt="Spanish" width={50} height={50} className="img" />
        {/* <img src={mx} alt="Spanish" /> */}
      </button>
      <button onClick={() => handleLanguageChange('eng')}>
        {/* <img src={usa} alt="English" /> */}
        <Image src={usa} alt="English" width={50} height={50} className="img" />
      </button>
    </div>
  );
};

export default LanguageSwitcher;

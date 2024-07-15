'use client';
import React from 'react';
import { useLanguage } from '@/contexts/languageContext';
import mx from '../../public/assets/mx.png'; 
import usa from '../../public/assets/usa.png'; 
import Image from 'next/image';
import './languageSwitcher.css';
const LanguageSwitcher = () => {
  const { handleLanguageChange } = useLanguage();

  return (
    <div className="language">
      <button onClick={() => handleLanguageChange('esp')}>
        <Image src={mx} alt="Spanish" width={50} height={50} className="img" />
      </button>
      <button onClick={() => handleLanguageChange('eng')}>
        <Image src={usa} alt="English" width={50} height={50} className="img" />
      </button>
    </div>
  );
};

export default LanguageSwitcher;

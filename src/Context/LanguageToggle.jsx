import React from 'react';
import { useLanguage } from '../Context/LanguageContext'; // Adjust the import path as necessary

function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
    >
      {language === 'en' ? 'Switch to বাংলা' : 'Switch to English'}
    </button>
  );
}

export default LanguageToggle;

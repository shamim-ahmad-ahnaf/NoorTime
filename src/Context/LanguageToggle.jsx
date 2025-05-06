import React from 'react';
import { useLanguage } from '../Context/LanguageContext';

function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
    >
      {language === 'bn' ? 'Switch to English' : 'বাংলায় দেখুন'}
    </button>
  );
}

export default LanguageToggle;

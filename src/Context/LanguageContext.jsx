import React, { createContext, useState, useContext } from 'react';

// Language context creation
const LanguageContext = createContext();

// Language provider to manage the state
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('bn'); // ✅ Default language is Bangla

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'bn' ? 'en' : 'bn'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook to use language context
export const useLanguage = () => useContext(LanguageContext);

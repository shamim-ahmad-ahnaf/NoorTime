import React, { createContext, useState, useContext } from 'react';

// Language context creation
const LanguageContext = createContext();

// Language provider to manage the state
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en'); // Default language is English

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'bn' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook to use language context
export const useLanguage = () => useContext(LanguageContext);

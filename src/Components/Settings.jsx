import React, { useState, useEffect } from 'react';
import { useLanguage } from '../Context/LanguageContext';

const Settings = () => {
  const { language, changeLanguage } = useLanguage();
  
  // States for the selected options
  const [selectedLanguage, setSelectedLanguage] = useState(language);
  const [selectedDateFormat, setSelectedDateFormat] = useState(localStorage.getItem('dateFormat') || 'dd-mm-yyyy');
  const [selectedTheme, setSelectedTheme] = useState(localStorage.getItem('theme') || 'light');
  
  const handleLanguageChange = (e) => {
    const selected = e.target.value;
    setSelectedLanguage(selected);
    changeLanguage(selected); // Change language context
    localStorage.setItem('language', selected); // Store language in localStorage
  };

  const handleDateFormatChange = (e) => {
    const format = e.target.value;
    setSelectedDateFormat(format);
    localStorage.setItem('dateFormat', format); // Store date format in localStorage
  };

  const handleThemeChange = (e) => {
    const theme = e.target.value;
    setSelectedTheme(theme);
    localStorage.setItem('theme', theme); // Store theme in localStorage
    document.body.className = theme;  // Apply the theme to the body (optional)
  };

  useEffect(() => {
    // Apply stored settings on initial load (theme and language)
    const storedLanguage = localStorage.getItem('language') || language;
    const storedTheme = localStorage.getItem('theme') || 'light';
    
    setSelectedLanguage(storedLanguage);
    setSelectedTheme(storedTheme);
    document.body.className = storedTheme; // Apply theme on page load
  }, [language]);

  return (
    <div className="bg-gradient-to-br from-green-100 to-green-50 min-h-screen pt-24 px-4">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold text-green-600 mb-8 text-center">
          {language === 'bn' ? 'সেটিংস' : 'Settings'}
        </h2>

        {/* Language Selector */}
        <div className="mb-8">
          <label htmlFor="language" className="block text-lg font-semibold text-gray-700 mb-2">
            {language === 'bn' ? 'ভাষা নির্বাচন করুন:' : 'Select Language:'}
          </label>
          <select
            id="language"
            value={selectedLanguage}
            onChange={handleLanguageChange}
            className="w-full border border-gray-300 rounded-lg p-3 text-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="bn">বাংলা</option>
            <option value="en">English</option>
          </select>
        </div>

        {/* Date Format Selector */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-700 mb-3">
            {language === 'bn' ? 'তারিখ ফরম্যাট নির্বাচন করুন:' : 'Select Date Format:'}
          </h3>
          <select
            value={selectedDateFormat}
            onChange={handleDateFormatChange}
            className="w-full border border-gray-300 rounded-lg p-3 text-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-500"
            aria-label="Date Format"
          >
            <option value="dd-mm-yyyy">{language === 'bn' ? 'দিন-মাস-বর্ষ' : 'DD-MM-YYYY'}</option>
            <option value="mm-dd-yyyy">{language === 'bn' ? 'মাস-দিন-বর্ষ' : 'MM-DD-YYYY'}</option>
            <option value="yyyy-mm-dd">{language === 'bn' ? 'বর্ষ-মাস-দিন' : 'YYYY-MM-DD'}</option>
          </select>
        </div>

        {/* Theme Settings */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-700 mb-3">
            {language === 'bn' ? 'থিম নির্বাচন করুন:' : 'Select Theme:'}
          </h3>
          <select
            value={selectedTheme}
            onChange={handleThemeChange}
            className="w-full border border-gray-300 rounded-lg p-3 text-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-500"
            aria-label="Theme"
          >
            <option value="light">{language === 'bn' ? 'হালকা' : 'Light'}</option>
            <option value="dark">{language === 'bn' ? 'গা dark ়' : 'Dark'}</option>
          </select>
        </div>

        {/* Additional Settings */}
        <div className="text-center mt-8">
          <p className="text-gray-500">
            {language === 'bn'
              ? 'আরো সেটিংস শীঘ্রই আসবে...'
              : 'More settings coming soon...'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Settings;

import React, { useState } from 'react';
import { useLanguage } from '../Context/LanguageContext';
import { Link } from 'react-router-dom'; // ✅ এটাও যুক্ত করো

function Header() {
  const { language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-green-600 text-white py-4 shadow-md fixed">
      <div className="w-11/12 mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">DeenZone</h1>

        {/* Language Toggle Button (Visible on both desktop and mobile) */}
        <div className="lg:hidden flex items-center space-x-4">
          <button
            onClick={toggleLanguage}
            className="bg-white text-green-600 px-3 py-1 rounded font-semibold"
          >
            {language === 'bn' ? 'EN' : 'BN'}
          </button>

          {/* Mobile Menu Button (Hamburger) */}
          <button onClick={toggleMenu} className="text-white text-2xl">
            {isMenuOpen ? '×' : '☰'} {/* Hamburger or Close icon */}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6">
          <Link to="/" className="text-lg hover:text-gray-300">
            {language === 'bn' ? 'হোম' : 'Home'}
          </Link>
          <Link to="/about" className="text-lg hover:text-gray-300">
            {language === 'bn' ? 'আমাদের সম্পর্কে' : 'About App'}
          </Link>
          <Link to="/prayer" className="text-lg hover:text-gray-300">
            {language === 'bn' ? 'নামাজের সময়' : 'Prayer Times'}
          </Link>
          <Link to="/dua" className="text-lg hover:text-gray-300">
            {language === 'bn' ? 'দোয়া' : 'Dua'}
          </Link>
        </nav>

        {/* Language Toggle Button for Desktop */}
        <div className="hidden lg:block">
          <button
            onClick={toggleLanguage}
            className="bg-white text-green-600 px-3 py-1 rounded font-semibold"
          >
            {language === 'bn' ? 'EN' : 'BN'}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 space-y-4 w-11/12 mx-auto bg-white text-green-600 p-4 rounded shadow-md">
          <Link to="/" className="block text-lg hover:text-gray-300" onClick={toggleMenu}>
            {language === 'bn' ? 'হোম' : 'Home'}
          </Link>
          <Link to="/about" className="block text-lg hover:text-gray-300" onClick={toggleMenu}>
            {language === 'bn' ? 'আমাদের সম্পর্কে' : 'About Us'}
          </Link>
          <Link to="/prayer" className="block text-lg hover:text-gray-300" onClick={toggleMenu}>
            {language === 'bn' ? 'নামাজের সময়' : 'Prayer Times'}
          </Link>
          <Link to="/dua" className="block text-lg hover:text-gray-300" onClick={toggleMenu}>
            {language === 'bn' ? 'দোয়া' : 'Dua'}
          </Link>
          <div className="mt-4">
            <button
              onClick={toggleLanguage}
              className="bg-white text-green-600 px-3 py-1 rounded font-semibold"
            >
              {language === 'bn' ? 'EN' : 'BN'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;

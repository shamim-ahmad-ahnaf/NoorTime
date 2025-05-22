import React, { useState } from 'react';
import { useLanguage } from '../Context/LanguageContext';
import { Link, useNavigate, useLocation } from 'react-router-dom'; // ✅ Navigation ও Location

function Header() {
  const { language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleTitleClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    }
  };

  return (
    <header className="w-full bg-green-800 text-white py-4 shadow-md fixed z-50">
      <div className="w-11/12 mx-auto flex justify-between items-center">
        <h1
          onClick={handleTitleClick}
          className="text-3xl font-bold cursor-pointer"
        >
          DeenZone
        </h1>

        {/* Language Toggle & Mobile Menu Icon */}
        <div className="lg:hidden flex items-center space-x-4">
          <button
            onClick={toggleLanguage}
            className="bg-white text-green-600 px-3 py-1 rounded font-semibold"
          >
            {language === 'bn' ? 'Switch to English' : 'বাংলায় দেখুন'}
          </button>
          <button onClick={toggleMenu} className="text-white text-2xl">
            {isMenuOpen ? '×' : '☰'}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6">
          <Link to="/" className="text-lg hover:text-gray-300">
            {language === 'bn' ? 'হোম' : 'Home'}
          </Link>
          
          <Link to="/prayer" className="text-lg hover:text-gray-300">
            {language === 'bn' ? 'নামাজের সময়' : 'Prayer Times'}
          </Link>
          <Link to="/dua" className="text-lg hover:text-gray-300">
            {language === 'bn' ? 'দোয়া' : 'Dua'}
          </Link>
          {/* Add the new links */}
          <Link to="/surah" className="text-lg hover:text-gray-300">
            {language === 'bn' ? 'সূরা' : 'Surahs'}
          </Link>
          <Link to="/tracker" className="text-lg hover:text-gray-300">
            {language === 'bn' ? 'নামাজ ট্র্যাকার' : 'Prayer Tracker'}
          </Link>
          <Link to="/settings" className="text-lg hover:text-gray-300">
            {language === 'bn' ? 'যোগাযোগ' : 'Contact '}
          </Link>
          <Link to="/about" className="text-lg hover:text-gray-300">
            {language === 'bn' ? 'দ্বীনযুন ' : 'About DeenZone'}
          </Link>
        </nav>

        {/* Desktop Language Toggle */}
        <div className="hidden lg:block">
          <button
            onClick={toggleLanguage}
            className="bg-white text-green-600 px-3 py-1 rounded font-semibold"
          >
            {language === 'bn' ? 'Switch to English' : 'বাংলায় দেখুন'}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
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
          {/* Add the new links */}
          <Link to="/surah" className="block text-lg hover:text-gray-300" onClick={toggleMenu}>
            {language === 'bn' ? 'সূরা' : 'Surahs'}
          </Link>
          <Link to="/tracker" className="block text-lg hover:text-gray-300" onClick={toggleMenu}>
            {language === 'bn' ? 'নামাজ ট্র্যাকার' : 'Prayer Tracker'}
          </Link>
          <Link to="/settings" className="block text-lg hover:text-gray-300" onClick={toggleMenu}>
            {language === 'bn' ? 'সেটিংস' : 'Settings'}
          </Link>
          <Link to="/about" className="block text-lg hover:text-gray-300" onClick={toggleMenu}>
            {language === 'bn' ? 'দ্বীনযুন সম্পর্কে' : 'About DeenZone'}
          </Link>

          <div className="mt-4">
            <button
              onClick={toggleLanguage}
              className="bg-white text-green-600 px-3 py-1 rounded font-semibold"
            >
              {language === 'bn' ? 'Switch to English' : 'বাংলায় দেখুন'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;

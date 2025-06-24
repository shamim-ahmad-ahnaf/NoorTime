import React, { useState } from 'react';
import { useLanguage } from '../Context/LanguageContext';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBars, FaTimes, FaGlobe, FaHome, FaClock, FaPray, FaBookOpen, FaCalendarAlt,
  FaQuestionCircle, FaPhoneAlt, FaInfoCircle, FaLock, FaSearch,
  FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaNewspaper, FaWhatsapp
} from 'react-icons/fa';

function Header() {
  const { language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleTitleClick = () => {
    if (location.pathname !== '/') navigate('/');
  };

  const menuVariants = {
    hidden: { x: '100%' },
    visible: { x: 0 },
    exit: { x: '100%' },
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-green-950 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <h1
            onClick={handleTitleClick}
            className="text-white text-3xl font-extrabold cursor-pointer select-none hover:text-green-300 transition"
            title="Go to Home"
          >
            DeenZone
          </h1>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 text-white font-medium text-sm">
            <Link to="/" className="hover:text-green-300">{language === 'bn' ? 'হোম' : 'Home'}</Link>
            <Link to="/prayer" className="hover:text-green-300">{language === 'bn' ? 'নামাজের সময়' : 'Prayer Times'}</Link>
            <Link to="/dua" className="hover:text-green-300">{language === 'bn' ? 'দোয়া' : 'Dua'}</Link>
            <Link to="/surah" className="hover:text-green-300">{language === 'bn' ? 'সূরা' : 'Surahs'}</Link>
            <Link to="/articles" className="hover:text-green-300">{language === 'bn' ? 'প্রবন্ধ ও কবিতা' : 'Articles'}</Link>
            <Link to="/settings" className="hover:text-green-300">{language === 'bn' ? 'যোগাযোগ' : 'Contact'}</Link>
          </nav>


          {/* Desktop Language Switch */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={toggleLanguage}
              className="flex items-center bg-white text-green-900 font-semibold px-4 py-1 rounded-md hover:bg-green-100 text-sm"
            >
              <FaGlobe className="mr-2" />
              {language === 'bn' ? 'Switch to English' : 'বাংলায় দেখুন'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleLanguage}
              className="mr-3 bg-white text-green-900 font-semibold px-3 py-1 rounded-md hover:bg-green-100 text-sm"
            >
              {language === 'bn' ? 'EN' : 'বাংলা'}
            </button>
            <button
              onClick={toggleMenu}
              className="text-white text-3xl"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-in Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black z-40"
            />

            <motion.nav
              key="menu"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-green-900 text-white z-50 p-6 flex flex-col overflow-y-auto"
            >
              <button
                onClick={toggleMenu}
                aria-label="Close menu"
                className="self-end text-white text-3xl mb-4 hover:text-green-300"
              >
                <FaTimes />
              </button>

              {/* Links with Icons */}
              <div className="flex flex-col space-y-4 text-sm font-medium">
                <Link onClick={toggleMenu} to="/" className="flex items-center gap-2 hover:text-green-300"><FaHome /> {language === 'bn' ? 'হোম' : 'Home'}</Link>
                <Link onClick={toggleMenu} to="/prayer" className="flex items-center gap-2 hover:text-green-300"><FaClock /> {language === 'bn' ? 'নামাজের সময়' : 'Prayer Times'}</Link>
                <Link onClick={toggleMenu} to="/dua" className="flex items-center gap-2 hover:text-green-300"><FaPray /> {language === 'bn' ? 'দোয়া' : 'Dua'}</Link>
                <Link onClick={toggleMenu} to="/articles" className="flex items-center gap-2 hover:text-green-300"><FaNewspaper /> {language === 'bn' ? 'প্রবন্ধ ও কবিতা' : 'Articles'}</Link>
                <Link onClick={toggleMenu} to="/surah" className="flex items-center gap-2 hover:text-green-300"><FaBookOpen /> {language === 'bn' ? 'সূরা' : 'Surahs'}</Link>
                <Link onClick={toggleMenu} to="/tracker" className="flex items-center gap-2 hover:text-green-300"><FaCalendarAlt /> {language === 'bn' ? 'নামাজ ট্র্যাকার' : 'Prayer Tracker'}</Link>
                <Link onClick={toggleMenu} to="/calendar" className="flex items-center gap-2 hover:text-green-300"><FaCalendarAlt /> {language === 'bn' ? 'ইসলামিক ক্যালেন্ডার' : 'Islamic Calendar'}</Link>
                <Link onClick={toggleMenu} to="/islamic-qa" className="flex items-center gap-2 hover:text-green-300"><FaQuestionCircle /> {language === 'bn' ? 'প্রশ্নোত্তর' : 'Islamic Q&A'}</Link>
                <Link onClick={toggleMenu} to="/settings" className="flex items-center gap-2 hover:text-green-300"><FaPhoneAlt /> {language === 'bn' ? 'যোগাযোগ' : 'Contact'}</Link>
                <Link onClick={toggleMenu} to="/about" className="flex items-center gap-2 hover:text-green-300"><FaInfoCircle /> {language === 'bn' ? 'দ্বীনযুন সম্পর্কে' : 'About DeenZone'}</Link>
                <Link onClick={toggleMenu} to="/privacy" className="flex items-center gap-2 hover:text-green-300"><FaLock /> {language === 'bn' ? 'প্রাইভেসি পলিসি' : 'Privacy Policy'}</Link>
              </div>

              {/* Search Bar */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  toggleMenu();
                }}
                className="mt-6"
              >
                <div className="relative">
                  <input
                    type="search"
                    placeholder={language === 'bn' ? 'অনুসন্ধান করুন...' : 'Search...'}
                    className="w-full px-3 py-2 text-sm rounded-md text-green-900"
                  />
                  <button type="submit" className="absolute right-3 top-2 text-green-700">
                    <FaSearch />
                  </button>
                </div>
              </form>

              {/* Social Icons */}
              <div className="mt-6 flex justify-center gap-4 text-xl text-green-300">
                <a
                  href="https://wa.me/8801748186766"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="hover:text-gray-300 transition-transform transform hover:scale-110"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100092273649975&mibextid=ZbWKwL"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="hover:text-gray-300 transition-transform transform hover:scale-110"
                >
                  <FaFacebook />
                </a>
                <a
                  href="mailto:shamimahmadahnaf@gmail.com"
                  aria-label="Email"
                  className="hover:text-gray-300 transition-transform transform hover:scale-110"
                >
                  <FaEnvelope />
                </a>

                <a
                  href="https://github.com/shamim-ahmad-ahnaf/NoorTime"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="hover:text-gray-300 transition-transform transform hover:scale-110"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/shamim-ahmad-772484331"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-gray-300 transition-transform transform hover:scale-110"
                >
                  <FaLinkedin />
                </a>
              </div>

              {/* Language Button */}
              <button
                onClick={() => {
                  toggleLanguage();
                  toggleMenu();
                }}
                className="mt-6 bg-white text-green-900 font-semibold px-4 py-2 rounded-md hover:bg-green-100 transition text-sm"
              >
                {language === 'bn' ? 'Switch to English' : 'বাংলায় দেখুন'}
              </button>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;

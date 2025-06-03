import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from 'react-icons/fa';

function Footer() {
  const year = new Date().getFullYear();

  return (
     <motion.footer
      className="bg-green-950 text-white pt-14 pb-10 shadow-inner"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div>
            <h2 className="text-3xl font-bold mb-3">Islamic App</h2>
            <p className="text-gray-400 text-sm">
              Your trusted companion for Islamic learning, prayer times, and spiritual reminders.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-gray-300">Home</a></li>
              <li><a href="/about" className="hover:text-gray-300">About Us</a></li>
              <li><a href="/settings" className="hover:text-gray-300">Contact</a></li>
              <li><a href="/prayer" className="hover:text-gray-300">Prayer Times</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-300">Hadith Collection</a></li>
              <li><a href="#" className="hover:text-gray-300">Prayer Times</a></li>
              <li><a href="#" className="hover:text-gray-300">Qibla Finder</a></li>
              <li><a href="#" className="hover:text-gray-300">Islamic Articles</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <FaEnvelope />
                <a href="mailto:shamimahmadahnaf@gmail.com" className="hover:underline">
                  shamimahmadahnaf@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt />
                <a href="tel:+8801748186766" className="hover:underline">
                  +880 1748186766
                </a>
              </li>
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt />
                <span>Kapasia, Gazipur, Bangladesh</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-green-800 my-8"></div>

        {/* Social and Bottom Note */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-sm text-gray-400 text-center md:text-right">
            &copy; {year} Islamic App. Developed by{' '}
            <span className="font-semibold text-white">Shamim Ahmad Ahanaf</span>.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-5 text-xl">
            <a href="https://github.com/shamim-ahmad-ahnaf/NoorTime" target="_blank" rel="noreferrer" aria-label="GitHub"
              className="hover:text-gray-300 transition-transform transform hover:scale-110"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/shamim-ahmad-772484331" target="_blank" rel="noreferrer" aria-label="LinkedIn"
              className="hover:text-gray-300 transition-transform transform hover:scale-110"><FaLinkedin /></a>
            <a href="https://www.facebook.com/profile.php?id=100092273649975&mibextid=ZbWKwL" target="_blank" rel="noreferrer" aria-label="Facebook"
              className="hover:text-gray-300 transition-transform transform hover:scale-110"><FaFacebook /></a>
            <a href="shamimahmadahnaf@gmail.com" aria-label="Email"
              className="hover:text-gray-300 transition-transform transform hover:scale-110"><FaEnvelope /></a>
            <a href="https://twitter.com/shamimahanf" target="_blank" rel="noreferrer" aria-label="Twitter"
              className="hover:text-gray-300 transition-transform transform hover:scale-110"><FaTwitter /></a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;

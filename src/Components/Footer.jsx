import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-green-800 text-white py-10 mt-12 shadow-inner">
      <div className="container mx-auto max-w-6xl px-6">
        {/* Logo or Brand Name */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold tracking-wide">Islamic App</h2>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-green-700 pt-6">
          <div className="flex space-x-8 mb-4 md:mb-0">
            <a href="#" className="hover:text-gray-300 transition-colors font-medium">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors font-medium">Terms of Service</a>
            <a href="#" className="hover:text-gray-300 transition-colors font-medium">Support</a>
            <a href="#" className="hover:text-gray-300 transition-colors font-medium">Contact Us</a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6 text-2xl">
            <a
              href="https://github.com/ShamimAhmadAhanaf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-transform transform hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/shamim-ahmad-ahanf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-transform transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://facebook.com/shamim.ahanf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-transform transform hover:scale-110"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="mailto:shamim@example.com"
              className="hover:text-gray-300 transition-transform transform hover:scale-110"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://twitter.com/shamimahanf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-transform transform hover:scale-110"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <p className="mt-8 text-center text-gray-400 text-sm">
          &copy; 2025 Islamic App. Developed by <span className="font-semibold">Shamim Ahmad Ahanaf</span>.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

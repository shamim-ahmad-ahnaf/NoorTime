import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from 'react-icons/fa';
import { useLanguage } from '../Context/LanguageContext';

function Footer() {
  const year = new Date().getFullYear();
  const { language } = useLanguage();

  const text = {
    en: {
      appName: "Islamic App",
      description: "Your trusted companion for Islamic learning, prayer times, and spiritual reminders.",
      quickLinks: "Quick Links",
      home: "Home",
      about: "About Us",
      contact: "Contact",
      prayer: "Prayer Times",
      resources: "Resources",
      hadith: "Hadith Collection",
      qibla: "Qibla Finder",
      articles: "Islamic Articles",
      contactTitle: "Contact",
      email: "shamimahmadahnaf@gmail.com",
      phone: "+880 1748186766",
      address: "Kapasia, Gazipur, Bangladesh",
      copyright: `© ${year} Islamic App. Developed by Shamim Ahmad Ahanaf.`
    },
    bn: {
      appName: "ইসলামিক অ্যাপ",
      description: "ইসলামি শিক্ষা, নামাজের সময়সূচী ও আত্মিক স্মারকসমূহে আপনার বিশ্বস্ত সঙ্গী।",
      quickLinks: "দ্রুত লিংক",
      home: "হোম",
      about: "আমাদের সম্পর্কে",
      contact: "যোগাযোগ",
      prayer: "নামাজের সময়",
      resources: "রিসোর্সসমূহ",
      hadith: "হাদিস সংগ্রহ",
      qibla: "কিবলা নির্দেশক",
      articles: "ইসলামিক প্রবন্ধ",
      contactTitle: "যোগাযোগ",
      email: "shamimahmadahnaf@gmail.com",
      phone: "+880 1748186766",
      address: "কাপাসিয়া, গাজীপুর, বাংলাদেশ",
      copyright: `© ${year} ইসলামিক অ্যাপ। ডেভেলপ করেছেন Shamim Ahmad Ahanaf।`
    }
  };

  const t = text[language];

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
            <h2 className="text-3xl font-bold mb-3">{t.appName}</h2>
            <p className="text-gray-400 text-sm">{t.description}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">{t.quickLinks}</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-gray-300">{t.home}</a></li>
              <li><a href="/about" className="hover:text-gray-300">{t.about}</a></li>
              <li><a href="/settings" className="hover:text-gray-300">{t.contact}</a></li>
              <li><a href="/prayer" className="hover:text-gray-300">{t.prayer}</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-3">{t.resources}</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-300">{t.hadith}</a></li>
              <li><a href="#" className="hover:text-gray-300">{t.prayer}</a></li>
              <li><a href="#" className="hover:text-gray-300">{t.qibla}</a></li>
              <li><a href="#" className="hover:text-gray-300">{t.articles}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-3">{t.contactTitle}</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <FaEnvelope />
                <a href={`mailto:${t.email}`} className="hover:underline">
                  {t.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt />
                <a href={`tel:${t.phone}`} className="hover:underline">
                  {t.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt />
                <span>{t.address}</span>
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
            {t.copyright}
          </p>

          {/* Social Icons */}
          <div className="flex space-x-5 text-xl">
            <a
              href="https://wa.me/8801748186766"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="hover:text-gray-300 transition-transform transform hover:scale-110"
            >
              <FaWhatsapp />
            </a>
            <a href="https://github.com/shamim-ahmad-ahnaf/NoorTime" target="_blank" rel="noreferrer" aria-label="GitHub"
              className="hover:text-gray-300 transition-transform transform hover:scale-110"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/shamim-ahmad-772484331" target="_blank" rel="noreferrer" aria-label="LinkedIn"
              className="hover:text-gray-300 transition-transform transform hover:scale-110"><FaLinkedin /></a>
            <a href="https://www.facebook.com/profile.php?id=100092273649975&mibextid=ZbWKwL" target="_blank" rel="noreferrer" aria-label="Facebook"
              className="hover:text-gray-300 transition-transform transform hover:scale-110"><FaFacebook /></a>
            <a href="mailto:shamimahmadahnaf@gmail.com" aria-label="Email"
              className="hover:text-gray-300 transition-transform transform hover:scale-110"><FaEnvelope /></a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;

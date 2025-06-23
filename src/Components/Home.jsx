import React, { useState, useEffect } from 'react';
import { useLanguage } from '../Context/LanguageContext';
import {
  FaClock,
  FaPray,
  FaBookOpen,
  FaCalendarAlt,
  FaRegCalendarAlt,
  FaQuestionCircle,
  FaPhoneAlt,
  FaInfoCircle,
  FaLock
} from 'react-icons/fa';

import { Link } from 'react-router-dom';
import { toHijri } from 'hijri-date-converter';
import { motion } from 'framer-motion';

const features = [
 
  { icon: <FaClock className="text-4xl text-green-600" />, title: { bn: 'নামাজের সময়সূচী', en: 'Prayer Times' }, desc: { bn: 'প্রতিদিনের সঠিক নামাজের সময় জানতে এখনই দেখুন।', en: 'View accurate prayer times for each day.' }, path: '/prayer' },
  { icon: <FaPray className="text-4xl text-green-600" />, title: { bn: 'দোয়া', en: 'Duas' }, desc: { bn: 'প্রয়োজনীয় দোয়া পড়ুন ও মুখস্থ করুন এবং সঠিকভাবে আমল করুন।', en: 'Explore and memorize essential duas.' }, path: '/dua' },
  { icon: <FaBookOpen className="text-4xl text-green-600" />, title: { bn: 'সূরা', en: 'Surahs' }, desc: { bn: 'কুরআনের বিভিন্ন সূরা পড়তে ও শিখতে পারো।', en: "Read and learn Surahs from the Qur'an." }, path: '/surah' },
  { icon: <FaCalendarAlt className="text-4xl text-green-600" />, title: { bn: 'নামাজ ট্র্যাকার', en: 'Prayer Tracker' }, desc: { bn: 'নিয়মিত নামাজ পড়ার ট্র্যাক রাখতে সাহায্য করে।', en: 'Keep track of your daily prayers easily.' }, path: '/tracker' },
  { icon: <FaRegCalendarAlt className="text-4xl text-green-600" />, title: { bn: 'ইসলামিক ক্যালেন্ডার', en: 'Islamic Calendar' }, desc: { bn: 'হিজরি তারিখসহ ইসলামিক বিশেষ দিনগুলো জানুন।', en: 'Check Hijri dates and Islamic events.' }, path: '/calendar' },
  { icon: <FaQuestionCircle className="text-4xl text-green-600" />, title: { bn: 'প্রশ্নোত্তর', en: 'Islamic Q&A' }, desc: { bn: 'ইসলামিক প্রশ্নোত্তর পড়ুন ও শিখুন।', en: 'Explore and learn from Islamic Q&A.' }, path: '/islamic-qa' },
  { icon: <FaPhoneAlt className="text-4xl text-green-600" />, title: { bn: 'যোগাযোগ', en: 'Contact' }, desc: { bn: 'আমাদের সাথে যোগাযোগ করতে ক্লিক করুন।', en: 'Use the contact form to get in touch with us.' }, path: '/settings' },
  { icon: <FaInfoCircle className="text-4xl text-green-600" />, title: { bn: 'দ্বীনযুন সম্পর্কে', en: 'About DeenZone' }, desc: { bn: 'দ্বীনযুন সম্পর্কে জানুন এবং আমাদের লক্ষ্য দেখুন।', en: 'Learn about DeenZone and our mission.' }, path: '/about' },
  { icon: <FaLock className="text-4xl text-green-600" />, title: { bn: 'প্রাইভেসি পলিসি', en: 'Privacy Policy' }, desc: { bn: 'আমাদের প্রাইভেসি পলিসি সম্পর্কে জানুন।', en: 'Learn about our privacy policy.' }, path: '/privacy' },
];

const translations = {
  bn: { banglaDateLabel: 'বাংলা', hijriDateLabel: 'হিজরি', categoryTitle: 'ক্যাটাগরি সমূহ', learnMore: 'আরও জানুন', welcome: 'দ্বীনযুনে আপনাকে স্বাগতম' },
  en: { banglaDateLabel: 'Bangla', hijriDateLabel: 'Hijri', categoryTitle: 'Categories', learnMore: 'Learn More', welcome: 'Welcome to DeenZone' },
};

function Home() {
  const { language } = useLanguage();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeString = currentTime.toLocaleTimeString();
  const dateString = currentTime.toLocaleDateString('bn-BD', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  const getBanglaDate = (date = new Date(), language = 'bn') => {
    const banglaMonths = ['বৈশাখ', 'জ্যৈষ্ঠ', 'আষাঢ়', 'শ্রাবণ', 'ভাদ্র', 'আশ্বিন', 'কার্তিক', 'অগ্রহায়ণ', 'পৌষ', 'মাঘ', 'ফাল্গুন', 'চৈত্র'];
    const englishMonths = ['Boishakh', 'Joishtho', 'Ashar', 'Shrabon', 'Bhadro', 'Ashwin', 'Kartik', 'Ogrohayon', 'Poush', 'Magh', 'Falgun', 'Chaitro'];
    const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    const formatNumber = (number) => language === 'en' ? number.toString() : number.toString().split('').map(d => banglaDigits[parseInt(d)]).join('');

    const engDay = date.getDate();
    const engMonth = date.getMonth();
    const engYear = date.getFullYear();
    const transitionDays = [14, 14, 14, 14, 14, 14, 15, 15, 15, 14, 14, 14]; // Updated

    let banglaDay = engDay - transitionDays[engMonth];
    let banglaMonthIndex = (engMonth + 9) % 12;
    let banglaYear = engYear - 593; // Corrected year conversion

    // Handle month change if day is negative
    if (banglaDay <= 0) {
      banglaMonthIndex = (banglaMonthIndex + 11) % 12;
      const prevMonthDays = [31, (engYear % 4 === 0 && engYear % 100 !== 0) || (engYear % 400 === 0) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      banglaDay += prevMonthDays[(engMonth + 11) % 12];
    }

    const monthName = language === 'en' ? englishMonths[banglaMonthIndex] : banglaMonths[banglaMonthIndex];
    return `${formatNumber(banglaDay)} ${monthName}, ${formatNumber(banglaYear)}`;
  };


  const getHijriDate = (date, language = 'bn') => {
    const hijri = toHijri(date);
    const hijriMonthsBN = ['মুহাররম', 'সফর', 'রবিউল আউয়াল', 'রবিউস সানি', 'জুমাদাল উলা', 'জুমাদাল সানি', 'রজব', 'শা’বান', 'রমজান', 'শাওয়াল', 'জিলক্বদ', 'জিলহজ্জ'];
    const hijriMonthsEN = ['Muharram', 'Safar', 'Rabi Ul-Awwal', 'Rabi Us-Sani', 'Jumada Ul-Awwal', 'Jumada Us-Sani', 'Rajab', 'Sha’ban', 'Ramadan', 'Shawwal', 'Dhu Ul-Qi’dah', 'Dhu Ul-Hijjah'];
    const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    const formatNumber = (number) => language === 'en' ? number.toString() : number.toString().split('').map(d => banglaDigits[parseInt(d)]).join('');
    return `${formatNumber(hijri.day)} ${language === 'en' ? hijriMonthsEN[hijri.month - 1] : hijriMonthsBN[hijri.month - 1]}, ${formatNumber(hijri.year)}`;
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <div className="relative mt-16">
        {/* Hero Section */}
        <div
          className="relative w-full h-screen bg-center bg-cover"
          style={{
            backgroundImage: "url('https://cdn.britannica.com/09/189809-050-FAC505B0/Jama-Masjid-Delhi.jpg')"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6 text-center space-y-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-green-400 drop-shadow-md">
              {translations[language].welcome}
            </h2>

            <div className="bg-white/8 backdrop-blur-sm p-4 rounded-xl shadow-md w-fit space-y-2">
              <div className="text-2xl sm:text-3xl font-semibold">🕒 {timeString}</div>
              <div className="text-lg mt-5">
                🌍 {language === 'bn' ? 'বাংলাদেশ' : 'Bangladesh'}<br />
                📅 {language === 'bn' ? dateString : currentTime.toDateString()}
              </div>
              <div>
                {translations[language].banglaDateLabel}: {getBanglaDate(currentTime, language)}<br />
                {translations[language].hijriDateLabel}: {getHijriDate(currentTime, language)}
              </div>
            </div>

            <p className="text-green-400 text-2xl italic mt-6 max-w-xl leading-relaxed">
              “إِنَّ مَعَ الْعُسْرِ يُسْرًا”<br />
              <span className="font-bold">
                {language === 'bn' ? '-নিশ্চয়ই কষ্টের সাথে রয়েছে স্বস্তি-' : '— Surely, with hardship comes ease.'}
              </span>
            </p>
          </div>
        </div>

        {/* Category Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl text-green-600 font-bold text-center mb-10 underline"
          >
            {translations[language].categoryTitle}
          </motion.h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={feature.path} className="block">
                  <div className="bg-gradient-to-br from-green-100 to-white border border-green-200 p-6 rounded-xl shadow-md hover:shadow-xl transition">
                    <div className="flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-green-700 text-center mb-2">
                      {feature.title[language]}
                    </h3>
                    <p className="text-gray-700 text-center mb-4">
                      {feature.desc[language]}
                    </p>
                    <div className="text-sm text-green-600 text-center font-medium hover:underline">
                      {translations[language].learnMore}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </motion.div>
  );
}

export default Home;
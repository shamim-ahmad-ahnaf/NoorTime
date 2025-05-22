import React, { useState, useEffect } from 'react';
import { useLanguage } from '../Context/LanguageContext';
import { FaQuestionCircle } from 'react-icons/fa'; 

import {
  FaPrayingHands,
  FaBookOpen,
  FaRegClock,
  FaQuran,
  FaCog,
  FaInfoCircle,
  FaRegCalendarAlt,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { FaEnvelope } from 'react-icons/fa';

const features = [
  {
    icon: <FaPrayingHands className="text-4xl text-green-600" />,
    title: { bn: 'নামাজের সময়সূচী', en: 'Prayer Times' },
    desc: {
      bn: 'প্রতিদিনের সঠিক নামাজের সময় জানতে এখনই দেখুন।',
      en: 'View accurate prayer times for each day.',
    },
    path: '/prayer',
  },
  {
    icon: <FaBookOpen className="text-4xl text-green-600" />,
    title: { bn: 'দোয়া', en: 'Duas' },
    desc: {
      bn: 'প্রয়োজনীয় দোয়া পড়ুন ও মুখস্থ করুন এবং সঠিকভাবে আমল করুন।',
      en: 'Explore and memorize essential duas.',
    },
    path: '/dua',
  },
  {
    icon: <FaQuran className="text-4xl text-green-600" />,
    title: { bn: 'সূরা', en: 'Surahs' },
    desc: {
      bn: 'কুরআনের বিভিন্ন সূরা পড়তে ও শিখতে পারো।',
      en: "Read and learn Surahs from the Qur'an.",
    },
    path: '/surah',
  },
  {
    icon: <FaRegClock className="text-4xl text-green-600" />,
    title: { bn: 'নামাজ ট্র্যাকার', en: 'Prayer Tracker' },
    desc: {
      bn: 'নিয়মিত নামাজ পড়ার ট্র্যাক রাখতে সাহায্য করে।',
      en: 'Keep track of your daily prayers easily.',
    },
    path: '/tracker',
  },
  {
    icon: <FaRegCalendarAlt className="text-4xl text-green-600" />,
    title: { bn: 'ইসলামিক ক্যালেন্ডার', en: 'Islamic Calendar' },
    desc: {
      bn: 'হিজরি তারিখসহ ইসলামিক বিশেষ দিনগুলো জানুন।',
      en: 'Check Hijri dates and Islamic events.',
    },
    path: '/calendar',
  },
  {
    icon: <FaQuestionCircle className="text-4xl text-green-600" />, // New icon
    title: { bn: 'প্রশ্নোত্তর', en: 'Islamic Q&A' },
    desc: {
      bn: 'ইসলামিক প্রশ্নোত্তর পড়ুন ও শিখুন।',
      en: 'Explore and learn from Islamic Q&A.',
    },
    path: '/islamic-qa',
  },
 {
  icon: <FaEnvelope className="text-4xl text-green-600" />,
  title: { bn: 'যোগাযোগ', en: 'Contact' },
  desc: {
    bn: ' আমাদের সাথে যোগাযোগ করতে ক্লিক করুন।',
    en: 'Use the contact form to get in touch with us.',
  },
   path: '/settings',
},

  {
    icon: <FaInfoCircle className="text-4xl text-green-600" />,
    title: { bn: 'দ্বীনযুন সম্পর্কে', en: 'About DeenZone' },
    desc: {
      bn: 'দ্বীনযুন সম্পর্কে জানুন এবং আমাদের লক্ষ্য দেখুন।',
      en: 'Learn about DeenZone and our mission.',
    },
    path: '/about',
  },
];
function Home() {
  const { language } = useLanguage();

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeString = currentTime.toLocaleTimeString();
  const dateString = currentTime.toLocaleDateString('bn-BD', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-7xl mx-auto text-center space-y-8">
        <h2 className="text-4xl font-extrabold text-green-600">
          {language === 'bn' ? 'দ্বীনযুনে আপনাকে স্বাগতম  ' : 'Welcome to DeenZone'}
        </h2>
        
        <div className="flex flex-col items-center space-y-2">
          <div className="text-xl font-bold text-gray-700">🕒    {timeString}</div>
          <div className="text-lg text-gray-600">
            📅 {language === 'bn' ? dateString : currentTime.toDateString()}
          </div>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, idx) => (
            <Link to={feature.path} key={idx} className="block">
              <div className="bg-gradient-to-b from-green-100 to-white border-2 border-green-200 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-green-600 mb-4">
                  {language === 'bn' ? feature.title.bn : feature.title.en}
                </h3>
                <p className="text-lg text-gray-700 mb-4">
                  {language === 'bn' ? feature.desc.bn : feature.desc.en}
                </p>
                <div className="text-sm font-medium text-green-600 hover:underline">
                  {language === 'bn' ? 'আরও জানুন' : 'Learn More'}
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12">
          <Link
            to="/prayer"
            className="bg-green-600 text-white py-3 px-8 text-xl font-semibold rounded-lg hover:bg-green-500 transition duration-300"
          >
            {language === 'bn' ? 'নামাজের সময় দেখুন' : 'View Prayer Times'}
          </Link>
          
        </div>
      </div>
    </div>
  );
}

export default Home;

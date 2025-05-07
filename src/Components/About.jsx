import React from 'react';
import { useLanguage } from '../Context/LanguageContext';
import { FaPrayingHands, FaClock, FaQuran, FaHeart } from 'react-icons/fa';

function About() {
  const { language } = useLanguage();

  return (
    <div className="bg-gradient-to-b from-green-50 to-white py-10 px-4 min-h-screen mt-10">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-4xl font-bold text-green-700 mb-6 text-center">
          {language === 'bn' ? 'দ্বীনযুন সম্পর্কে' : 'About DeenZone'}
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify">
          {language === 'bn'
            ? 'দ্বীনযুন একটি আধুনিক ও ব্যবহারবান্ধব ইসলামী অ্যাপ্লিকেশন, যা মুসলিমদের জন্য নামাজের সময়সূচী, কুরআনের সূরা, দোয়া ও নামাজ ট্র্যাকার সরবরাহ করে। আমরা বিশ্বাস করি প্রযুক্তিকে কাজে লাগিয়ে ইবাদতকে আরও সহজ ও সচেতনভাবে পালন করা সম্ভব।'
            : 'NoorTime is a modern, user-friendly Islamic application that offers prayer schedules, Qur’anic surahs, duas, and a prayer tracker. We believe that technology can be a powerful tool in making worship easier and more mindful.'}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeatureBox
            icon={<FaClock className="text-green-600 text-4xl" />}
            title={language === 'bn' ? 'নামাজের সময়' : 'Prayer Times'}
            desc={
              language === 'bn'
                ? 'নির্ভুলভাবে নামাজের সময় জানতে পারবেন আপনার লোকেশন অনুযায়ী।'
                : 'Accurate prayer times based on your location.'
            }
          />
          <FeatureBox
            icon={<FaQuran className="text-green-600 text-4xl" />}
            title={language === 'bn' ? 'কুরআনের সূরা' : 'Surahs from the Qur’an'}
            desc={
              language === 'bn'
                ? 'প্রয়োজনীয় সূরা পড়া ও মুখস্থ করার জন্য সহজ ইন্টারফেস।'
                : 'Easy interface to read and memorize important surahs.'
            }
          />
          <FeatureBox
            icon={<FaPrayingHands className="text-green-600 text-4xl" />}
            title={language === 'bn' ? 'দোয়া ও যিকির' : 'Duas & Dhikr'}
            desc={
              language === 'bn'
                ? 'দৈনন্দিন প্রয়োজনীয় দোয়া ও যিকির সংগ্রহ।'
                : 'A collection of essential daily duas and dhikr.'
            }
          />
          <FeatureBox
            icon={<FaHeart className="text-green-600 text-4xl" />}
            title={language === 'bn' ? 'নিয়মিত ইবাদত' : 'Consistent Worship'}
            desc={
              language === 'bn'
                ? 'নামাজ ট্র্যাকার দিয়ে আপনার ধারাবাহিকতা বজায় রাখুন।'
                : 'Stay consistent with your prayers using the tracker.'
            }
          />
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-600 italic">
            {language === 'bn'
              ? 'আল্লাহর সন্তুষ্টির উদ্দেশ্যে প্রযুক্তিকে ব্যবহার করে সহজ ও সুন্দর ইবাদতের পথে আপনাদের সাথে আছি।'
              : 'Using technology for the pleasure of Allah — we walk this path of peaceful worship together.'}
          </p>
        </div>
      </div>
    </div>
  );
}

function FeatureBox({ icon, title, desc }) {
  return (
    <div className="flex items-start space-x-4 bg-green-50 p-4 rounded-lg shadow-sm hover:shadow-md transition duration-200">
      <div>{icon}</div>
      <div>
        <h4 className="text-xl font-semibold text-green-700">{title}</h4>
        <p className="text-gray-600">{desc}</p>
      </div>
    </div>
  );
}

export default About;

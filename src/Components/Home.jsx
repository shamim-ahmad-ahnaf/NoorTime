import React from 'react';
import { useLanguage } from '../Context/LanguageContext';
import { FaPrayingHands, FaBookOpen, FaRegClock } from 'react-icons/fa'; // React Icons from Font Awesome

function Home() {
  const { language } = useLanguage();

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-7xl mx-auto text-center space-y-8">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-green-600">
          {language === 'bn' ? 'স্বাগতম নূরটাইমে' : 'Welcome to NoorTime'}
        </h2>
        <p className="text-xl text-gray-600">
          {language === 'bn'
            ? 'নূরটাইম একটি আধুনিক ইসলামিক অ্যাপ্লিকেশন যা আপনাকে নামাজের সময়সূচী, দোয়া, সূরা, নামাজ ট্র্যাকার এবং আরও অনেক কিছু সরবরাহ করে।'
            : 'NoorTime is a modern Islamic application that provides prayer schedules, duas, surahs, a prayer tracker, and more.'}
        </p>

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center justify-center mb-4">
              <FaPrayingHands className="text-4xl text-green-600" />
            </div>
            <h3 className="text-2xl font-semibold text-green-600 mb-4">
              {language === 'bn' ? 'নামাজের সময়সূচী' : 'Prayer Times'}
            </h3>
            <p className="text-lg text-gray-700">
              {language === 'bn'
                ? 'নূরটাইম আপনাকে সঠিক নামাজের সময়সূচী প্রদান করে, যাতে আপনি আপনার প্রতিদিনের ইবাদত সঠিকভাবে করতে পারেন।'
                : 'NoorTime provides accurate prayer schedules to help you perform your daily prayers on time.'}
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center justify-center mb-4">
              <FaBookOpen className="text-4xl text-green-600" />
            </div>
            <h3 className="text-2xl font-semibold text-green-600 mb-4">
              {language === 'bn' ? 'দোয়া' : 'Duas'}
            </h3>
            <p className="text-lg text-gray-700">
              {language === 'bn'
                ? 'আমরা বিভিন্ন গুরুত্বপূর্ণ দোয়া আপনাকে প্রদান করি, যাতে আপনি প্রতিদিনের ইবাদত সঠিকভাবে করতে পারেন।'
                : 'We provide a collection of essential duas to enhance your worship and spiritual growth.'}
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center justify-center mb-4">
              <FaRegClock className="text-4xl text-green-600" />
            </div>
            <h3 className="text-2xl font-semibold text-green-600 mb-4">
              {language === 'bn' ? 'নামাজ ট্র্যাকার' : 'Prayer Tracker'}
            </h3>
            <p className="text-lg text-gray-700">
              {language === 'bn'
                ? 'নূরটাইম নামাজ ট্র্যাকিং সিস্টেম দিয়ে আপনার নামাজের সঠিক সময় এবং নিয়মিত ইবাদত নিশ্চিত করতে সাহায্য করবে।'
                : 'NoorTime helps you track your prayers and ensures you stay consistent with your worship.'}
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <a
            href="/prayer"
            className="bg-green-600 text-white py-3 px-8 text-xl font-semibold rounded-lg hover:bg-green-500 transition duration-300"
          >
            {language === 'bn' ? 'নামাজের সময় দেখুন' : 'View Prayer Times'}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;

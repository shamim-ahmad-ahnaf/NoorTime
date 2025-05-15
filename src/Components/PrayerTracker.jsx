import React, { useState, useEffect } from 'react';
import { useLanguage } from '../Context/LanguageContext';

function PrayerTracker() {
  const initialState = {
    fajr: { done: false, note: '' },
    dhuhr: { done: false, note: '' },
    asr: { done: false, note: '' },
    maghrib: { done: false, note: '' },
    isha: { done: false, note: '' },
  };

  const { language } = useLanguage();

  // Get the saved date and tracker data from localStorage
  const savedDate = localStorage.getItem('date');
  const today = new Date().toISOString().slice(0, 10); // Get today's date in YYYY-MM-DD format

  const savedTracker =
    savedDate === today
      ? JSON.parse(localStorage.getItem('tracker')) || initialState
      : initialState;

  const [tracker, setTracker] = useState(savedTracker);

  // Update localStorage whenever tracker data or date changes
  useEffect(() => {
    if (savedDate !== today) {
      // If the date has changed, reset the tracker
      localStorage.setItem('tracker', JSON.stringify(initialState));
      localStorage.setItem('date', today); // Save today's date
    } else {
      localStorage.setItem('tracker', JSON.stringify(tracker));
    }
  }, [tracker, today, savedDate]);

  const togglePrayer = (prayer) => {
    setTracker((prev) => ({
      ...prev,
      [prayer]: { ...prev[prayer], done: !prev[prayer].done },
    }));
  };

  const handleNoteChange = (prayer, value) => {
    setTracker((prev) => ({
      ...prev,
      [prayer]: { ...prev[prayer], note: value },
    }));
  };

  const prayerNames = {
    bn: {
      fajr: 'ফজর',
      dhuhr: 'যোহর',
      asr: 'আসর',
      maghrib: 'মাগরিব',
      isha: 'ইশা',
    },
    en: {
      fajr: 'Fajr',
      dhuhr: 'Dhuhr',
      asr: 'Asr',
      maghrib: 'Maghrib',
      isha: 'Isha',
    },
  };

  const prayerTimes = {
    fajr: '4:30 AM',
    dhuhr: '12:30 PM',
    asr: '5:00 PM',
    maghrib: '6:40 PM',
    isha: '8:15 PM',
  };

  const headingText =
    language === 'bn' ? ' আজকের নামাজ ট্র্যাকার' : '🧾 Today\'s Prayer Tracker';

  // Format today's date in a readable way (e.g., 'May 7, 2025')
  const formattedDate = new Date().toLocaleDateString(language === 'bn' ? 'bn-BD' : 'en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="bg-gradient-to-br from-green-100 to-green-50 p-6 rounded-3xl shadow-xl mt-16 max-w-7xl mx-auto border border-green-200">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-8">{headingText}</h2>

      {/* Display today's date below the heading */}
      <div className="text-center mb-6">
        <span className="text-xl font-semibold text-gray-700">
          {language === 'bn' ? 'আজ: ' : 'Today\'s Date: '}
          {formattedDate}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.keys(tracker).map((prayer) => (
          <div
            key={prayer}
            className={`transition-all duration-300 p-5 rounded-2xl border-l-4 ${
              tracker[prayer].done ? 'bg-teal-50 border-t-1 border-green-400' : 'bg-white border-green-300  border-r-3'
            } shadow-md`}
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {prayerNames[language][prayer]}
                </h3>
                <p className="text-sm text-gray-700">{prayerTimes[prayer]}</p>
              </div>
              <input
                type="checkbox"
                checked={tracker[prayer].done}
                onChange={() => togglePrayer(prayer)}
                className="w-5 h-5 text-green-600 accent-green-600 rounded mt-1"
              />
            </div>
            <textarea
              rows="2"
              placeholder={language === 'bn' ? 'নোট লিখুন (ঐচ্ছিক)' : 'Write a note (optional)'}
              value={tracker[prayer].note}
              onChange={(e) => handleNoteChange(prayer, e.target.value)}
              className="w-full mt-3 px-3 py-2 font-bold text-sm text-gray-600 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 resize-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PrayerTracker;

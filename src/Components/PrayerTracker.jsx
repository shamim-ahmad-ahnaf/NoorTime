import React, { useState } from 'react';
import { useLanguage } from '../Context/LanguageContext';

function PrayerTracker() {
  const initialState = {
    fajr: false,
    dhuhr: false,
    asr: false,
    maghrib: false,
    isha: false,
  };

  const [tracker, setTracker] = useState(initialState);
  const { language } = useLanguage();

  const togglePrayer = (prayer) => {
    setTracker({ ...tracker, [prayer]: !tracker[prayer] });
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

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6 w-full max-w-md">
      <h2 className="text-2xl font-bold text-green-600 mb-4 text-center">
        {language === 'bn' ? '🧾 আজকের নামাজ ট্র্যাকার' : '🧾 Today\'s Prayer Tracker'}
      </h2>
      <ul className="space-y-3">
        {Object.keys(tracker).map((prayer) => (
          <li key={prayer} className="flex items-center justify-between text-lg">
            <span className="capitalize">{prayerNames[language][prayer]}</span>
            <input
              type="checkbox"
              checked={tracker[prayer]}
              onChange={() => togglePrayer(prayer)}
              className="w-5 h-5 accent-green-600"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PrayerTracker;

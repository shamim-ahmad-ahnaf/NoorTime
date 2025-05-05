import React, { useState, useEffect } from 'react';
import { useLanguage } from '../Context/LanguageContext';

function PrayerTime() {
  const { language } = useLanguage();
  const prayrTimes = {
    fajr: '05:00 AM',
    dhuhr: '12:15 PM',
    asr: '03:45 PM',
    maghrib: '06:30 PM',
    isha: '08:00 PM',
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

  const [currentPrayer, setCurrentPrayer] = useState(null);
  const [timeLeft, setTimeLeft] = useState('');
  const [previousPrayer, setPreviousPrayer] = useState(null);

  const updateTimeLeft = () => {
    const now = new Date();
    const times = Object.values(prayrTimes).map((time) => {
      const [hours, minutes] = time.split(':');
      const [hour, ampm] = hours.split(' ');
      let adjustedHour = parseInt(hour);
      if (ampm === 'PM' && adjustedHour !== 12) adjustedHour += 12;
      const timeInMs = new Date(now.getFullYear(), now.getMonth(), now.getDate(), adjustedHour, parseInt(minutes));
      return timeInMs;
    });

    const nextPrayer = times.find((time) => time > now);
    if (nextPrayer) {
      const diff = nextPrayer - now; // Time difference in milliseconds
      const diffHours = Math.floor(diff / (1000 * 60 * 60)); // Calculate hours
      const diffMinutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)); // Calculate minutes

      setCurrentPrayer(Object.keys(prayrTimes)[times.indexOf(nextPrayer)]);
      setTimeLeft(`${diffHours} hour(s) ${diffMinutes} minute(s)`);

      // Get previous prayer
      const prevPrayer = times[times.indexOf(nextPrayer) - 1];
      if (prevPrayer) {
        setPreviousPrayer(Object.keys(prayrTimes)[times.indexOf(prevPrayer)]);
      }
    }
  };

  useEffect(() => {
    updateTimeLeft();
    const interval = setInterval(() => {
      updateTimeLeft();
    }, 60000); // Update every minute

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6 w-full max-w-md">
      <h2 className="text-2xl font-bold text-green-600 mb-4 text-center">
        {language === 'bn' ? 'আজকের নামাজের সময়' : "Today's Prayer Times"}
      </h2>
      <ul className="space-y-4">
        {Object.entries(prayrTimes).map(([key, time]) => (
          <li key={key} className="flex justify-between text-xl">
            <span>{prayerNames[language][key]}</span>
            <span>{time}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 text-xl font-semibold text-green-600">
        {currentPrayer && (
          <div>
            <span>{language === 'bn' ? 'পরবর্তী নামাজ' : 'Next Prayer'}: {prayerNames[language][currentPrayer]}</span>
            <br />
            <span>{language === 'bn' ? 'সময় বাকি' : 'Time Left'}: {timeLeft}</span>
          </div>
        )}
        {previousPrayer && (
          <div className="mt-2 text-lg text-gray-600">
            <span>{language === 'bn' ? 'শেষ নামাজ' : 'Previous Prayer'}: {prayerNames[language][previousPrayer]}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default PrayerTime;

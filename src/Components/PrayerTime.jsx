import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../Context/LanguageContext';
import { FaClock, FaArrowRight, FaCheckCircle } from 'react-icons/fa';

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
  const [previousPrayer, setPreviousPrayer] = useState(null);
  const [timeLeft, setTimeLeft] = useState('');
  const [azanPlayed, setAzanPlayed] = useState(false);
  const audioRef = useRef(null);

  const requestNotificationPermission = () => {
    if ('Notification' in window && Notification.permission !== 'granted') {
      Notification.requestPermission();
    }
  };

  const playAzan = (prayerName) => {
    if (Notification.permission === 'granted') {
      new Notification(`${prayerName} time`, {
        body: language === 'bn' ? 'নামাজের সময় হয়েছে।' : 'It is time for prayer.',
        icon: '/azan-icon.png',
      });
    }

    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const updatePrayerTimes = () => {
    const now = new Date();

    const prayerTimesArray = Object.entries(prayrTimes).map(([key, time]) => {
      const [timePart, ampm] = time.split(' ');
      const [hourStr, minuteStr] = timePart.split(':');
      let hour = parseInt(hourStr, 10);
      const minute = parseInt(minuteStr, 10);

      if (ampm === 'PM' && hour !== 12) hour += 12;
      if (ampm === 'AM' && hour === 12) hour = 0;

      const dateTime = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        hour,
        minute,
        0
      );

      return { key, dateTime };
    });

    const upcoming = prayerTimesArray.find(p => p.dateTime > now);

    if (upcoming) {
      const diff = upcoming.dateTime - now;
      const diffMinutes = Math.floor(diff / 60000);
      const diffHours = Math.floor(diffMinutes / 60);
      const remainingMinutes = diffMinutes % 60;

      setCurrentPrayer(upcoming.key);
      setTimeLeft(
        `${diffHours} ${language === 'bn' ? 'ঘণ্টা' : 'hour(s)'} ${remainingMinutes} ${language === 'bn' ? 'মিনিট' : 'minute(s)'}`
      );

      const index = prayerTimesArray.findIndex(p => p.key === upcoming.key);
      if (index > 0) {
        setPreviousPrayer(prayerTimesArray[index - 1].key);
      } else {
        setPreviousPrayer(null);
      }
    } else {
      setCurrentPrayer(null);
      setPreviousPrayer('isha');
      setTimeLeft('');
    }

    // 🔔 আজানের সময় কিনা চেক করো
    prayerTimesArray.forEach(({ key, dateTime }) => {
      const diff = Math.abs(dateTime - now);
      if (diff < 60000 && !azanPlayed) {
        playAzan(prayerNames[language][key]);
        setAzanPlayed(true);
      }
    });

    // রিসেট আজান ফ্ল্যাগ ২ মিনিট পর
    setTimeout(() => {
      setAzanPlayed(false);
    }, 120000);
  };

  useEffect(() => {
    requestNotificationPermission();
    updatePrayerTimes();
    const interval = setInterval(updatePrayerTimes, 30000); // Check every 30s

    return () => clearInterval(interval);
  }, [language]);

  return (
    <div className="bg-gradient-to-b from-green-50 to-white rounded-2xl  shadow-lg p-6 mt-20 w-full max-w-md mx-auto">
      <h2 className="text-3xl font-extrabold text-green-600 mb-6 text-center flex items-center justify-center gap-2">
        <FaClock className="text-green-500" />
        {language === 'bn' ? 'আজকের নামাজের সময়' : "Today's Prayer Times"}
      </h2>

      <ul className="space-y-4">
        {Object.entries(prayrTimes).map(([key, time]) => (
          <li
            key={key}
            className="flex justify-between items-center text-lg font-medium border-b border-gray-100 pb-2"
          >
            <span className="text-gray-700">{prayerNames[language][key]}</span>
            <span className="text-green-700 font-semibold">{time}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 bg-green-50 rounded-lg p-4">
        {currentPrayer && (
          <div className="mb-3 flex items-start gap-2 text-green-700 font-semibold text-lg">
            <FaArrowRight />
            <div>
              <div>
                {language === 'bn' ? 'পরবর্তী নামাজ' : 'Next Prayer'}: {prayerNames[language][currentPrayer]}
              </div>
              <div className="text-sm text-green-600">
                {language === 'bn' ? 'সময় বাকি' : 'Time Left'}: {timeLeft}
              </div>
            </div>
          </div>
        )}

        {previousPrayer && (
          <div className="flex items-center gap-2 text-gray-600 text-base">
            <FaCheckCircle />
            <span>
              {language === 'bn' ? 'শেষ নামাজ' : 'Previous Prayer'}: {prayerNames[language][previousPrayer]}
            </span>
          </div>
        )}
      </div>

      {/* 🔊 আজান অডিও */}
      <audio ref={audioRef} src="/azan.mp3" preload="auto" />
    </div>
  );
}

export default PrayerTime;

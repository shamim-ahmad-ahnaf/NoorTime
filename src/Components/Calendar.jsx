import React, { useState } from 'react';
import moment from 'moment-hijri';
import 'moment/locale/bn';
import RevealOnScroll from '../Context/RevealOnScroll';
import { useLanguage } from '../Context/LanguageContext';

const islamicEvents = {
  '1-1': { bn: 'হিজরি নববর্ষ', en: 'Hijri New Year' },
  '10-1': { bn: 'আশুরা', en: 'Ashura' },
  '27-7': { bn: 'মেরাজের রাত', en: 'Isra and Miraj' },
  '15-8': { bn: 'শবে বরাত', en: 'Shab-e-Barat' },
  '1-9': { bn: 'রমজান শুরু', en: 'Start of Ramadan' },
  '27-9': { bn: 'লাইলাতুল কদর', en: 'Laylat al-Qadr' },
  '1-10': { bn: 'ঈদুল ফিতর', en: 'Eid-ul-Fitr' },
  '9-12': { bn: 'আরাফাহ দিবস', en: 'Day of Arafah' },
  '10-12': { bn: 'ঈদুল আজহা', en: 'Eid-ul-Adha' },
};

const hijriMonths = {
  bn: [
    'মুহাররম',
    'সফর',
    'রবিউল আউয়াল',
    'রবিউস সানি',
    'জমাদিউল আউয়াল',
    'জমাদিউস সানি',
    'রজব',
    'শা’বান',
    'রমজান',
    'শাওয়াল',
    'জ্বিলকদ',
    'জ্বিলহজ',
  ],
  en: [
    'Muharram',
    'Safar',
    'Rabi al-Awwal',
    'Rabi al-Thani',
    'Jumada al-Awwal',
    'Jumada al-Thani',
    'Rajab',
    'Sha’ban',
    'Ramadan',
    'Shawwal',
    'Dhul-Qi’dah',
    'Dhul-Hijjah',
  ],
};

function HijriCalendar() {
  const { language } = useLanguage();
  const [currentDate, setCurrentDate] = useState(moment());

  const startOfMonth = currentDate.clone().startOf('iMonth');
  const endOfMonth = currentDate.clone().endOf('iMonth');
  const daysInMonth = endOfMonth.diff(startOfMonth, 'days') + 1;
  const startDay = startOfMonth.day();
  const weeks = [];
  let days = [];

  for (let i = 0; i < startDay; i++) {
    days.push(<td key={`empty-start-${i}`} className="p-2 sm:p-3 bg-white"></td>);
  }

  for (let d = 0; d < daysInMonth; d++) {
    const date = startOfMonth.clone().add(d, 'days');
    const day = date.iDate();
    const month = date.iMonth() + 1;
    const eventKey = `${day}-${month}`;
    const event = islamicEvents[eventKey]?.[language];

    days.push(
      <td
        key={date.format('iYYYY-iMM-iDD')}
        className={`border p-2 sm:p-3 text-center transition duration-200 ${event ? 'bg-green-100 font-semibold text-green-800 shadow-sm' : 'bg-white'} hover:bg-green-50`}
      >
        <div className="text-base sm:text-lg">{day}</div>
        {event && <div className="text-[10px] sm:text-xs text-red-600 mt-1">{event}</div>}
      </td>
    );

    if ((days.length) % 7 === 0) {
      weeks.push(<tr key={`week-${d}`}>{days}</tr>);
      days = [];
    }
  }

  if (days.length > 0) {
    while (days.length < 7) {
      days.push(<td key={`empty-end-${days.length}`} className="p-2 sm:p-3 bg-white"></td>);
    }
    weeks.push(<tr key="last-week">{days}</tr>);
  }

  const handlePrevMonth = () => {
    setCurrentDate(currentDate.clone().subtract(1, 'iMonth'));
  };

  const handleNextMonth = () => {
    setCurrentDate(currentDate.clone().add(1, 'iMonth'));
  };

  const hijriMonthName = hijriMonths[language][currentDate.iMonth()];
  const hijriYear = currentDate.iYear();
  const weekdays = {
    bn: ['রবি', 'সোম', 'মঙ্গল', 'বুধ', 'বৃহস্পতি', 'শুক্র', 'শনি'],
    en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  };

  return (
    <RevealOnScroll>
      <div className="p-4 sm:p-6 md:p-10 mt-12 max-w-6xl mx-auto bg-white rounded-xl shadow-xl border border-green-100">
        <h2 className="text-3xl mt-6 sm:text-3xl font-bold text-green-700 mb-4 text-center">
          📅 {language === 'bn' ? 'ইসলামিক ক্যালেন্ডার' : 'Islamic Calendar'}
        </h2>

        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4 sm:gap-0">
          <button
            onClick={handlePrevMonth}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full sm:w-auto"
          >
            ← {language === 'bn' ? 'পূর্বের মাস' : 'Previous Month'}
          </button>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 text-center">
            {hijriMonthName} {hijriYear} {language === 'bn' ? 'হিজরি' : 'Hijri'}
          </h3>
          <button
            onClick={handleNextMonth}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full sm:w-auto"
          >
            {language === 'bn' ? 'পরবর্তী মাস' : 'Next Month'} →
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border border-green-200 rounded text-sm sm:text-base min-w-[640px]">
            <thead>
              <tr className="bg-green-100 text-green-800">
                {weekdays[language].map((day, idx) => (
                  <th key={idx} className="border p-2 font-semibold">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>{weeks}</tbody>
          </table>
        </div>
      </div>
    </RevealOnScroll>
  );
}

export default HijriCalendar;
import React from 'react';

function SurahSection() {
  const surahs = [
    {
      title: 'সূরা ফাতিহা',
      arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\nالْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ...',
      banglaPronunciation: 'বিসমিল্লাহির রাহমানির রাহিম\nআলহামদু লিল্লাহি রাব্বিল আলামীন...',
      meaning: 'শুরু করছি আল্লাহর নামে যিনি পরম করুণাময়, অতি দয়ালু। সকল প্রশংসা আল্লাহর...'
    },
    {
      title: 'সূরা ইখলাস',
      arabic: 'قُلْ هُوَ اللَّهُ أَحَدٌ\nاللَّهُ الصَّمَدُ...',
      banglaPronunciation: 'কুল হুয়াল্লাহু আহাদ\nআল্লাহুস সামাদ...',
      meaning: 'বল, তিনি আল্লাহ, এক; আল্লাহ অমুখাপেক্ষী...'
    }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-bold text-green-600 mb-4 text-center">📖 ছোট সূরা সমূহ</h2>
      <div className="space-y-6">
        {surahs.map((surah, index) => (
          <div key={index} className="border border-green-200 rounded p-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{surah.title}</h3>
            <p className="text-2xl font-arabic text-gray-900 whitespace-pre-line mb-2">{surah.arabic}</p>
            <p className="text-lg text-gray-700 whitespace-pre-line mb-2">{surah.banglaPronunciation}</p>
            <p className="text-sm text-gray-500 italic">অর্থ: {surah.meaning}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SurahSection;

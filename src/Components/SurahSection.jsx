import React from 'react';

function SurahSection() {
  const surahs = [
    {
      title: 'সূরা ফাতিহা',
      arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\nالْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ...',
      banglaPronunciation: 'বিসমিল্লাহির রাহমানির রাহিম\nআলহামদু লিল্লাহি রাব্বিল আলামীন...',
      meaning: 'শুরু করছি আল্লাহর নামে যিনি পরম করুণাময়, অতি দয়ালু। সকল প্রশংসা আল্লাহর...',
    },
    {
      title: 'সূরা ইখলাস',
      arabic: 'قُلْ هُوَ اللَّهُ أَحَدٌ\nاللَّهُ الصَّمَدُ...',
      banglaPronunciation: 'কুল হুয়াল্লাহু আহাদ\nআল্লাহুস সামাদ...',
      meaning: 'বল, তিনি আল্লাহ, এক; আল্লাহ অমুখাপেক্ষী...',
    },
    {
      title: 'সূরা নাস',
      arabic: 'قُلْ أَعُوذُ بِرَبِّ النَّاسِ\nمَلِكِ النَّاسِ...',
      banglaPronunciation: 'কুল আউযু বি রাব্বিন নাস\nমালিকিন নাস...',
      meaning: 'বল, আমি মানুষের রবের কাছে আশ্রয় প্রার্থনা করি...',
    },
    {
      title: 'সূরা ফিল',
      arabic: 'لَمْ يَجْعَلْ فِي رَجُلٍ فِي رُجُلٍ...',
      banglaPronunciation: 'লাম ইয়াজআল ফি রাজুলিন ফির রাজুলিন...',
      meaning: 'এটি আল্লাহর সাহায্যে ভরা একটি সূরা...',
    },
    {
      title: 'সূরা কাওসার',
      arabic: 'إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ...',
      banglaPronunciation: 'ইন্না আতাঈনাকা কাওসার...',
      meaning: 'আমরা তোমাকে কাওসার দিয়েছি...',
    },
    {
      title: 'সূরা আছর',
      arabic: 'وَالْعَصْرِ إِنَّ الْإِنسَانَ لَفِي خُسْرٍ...',
      banglaPronunciation: 'ওয়ালআসর ইননাল ইনসানা লাফি খুসর...',
      meaning: 'সময়ের কসম, নিশ্চয়ই মানুষ ক্ষতির মধ্যে রয়েছে...',
    },
    {
      title: 'সূরা কুরাইশ',
      arabic: 'لِإِيلَافِ قُرَيْشٍ...',
      banglaPronunciation: 'লি ইলাফি কুরাইশ...',
      meaning: 'কুরাইশদের জন্য আয়ত্তকরণ...',
    },
    {
      title: 'সূরা মালেক',
      arabic: 'مَالِكِ يَوْمِ الدِّينِ...',
      banglaPronunciation: 'মালিকি ইয়াওমিদ দিন...',
      meaning: 'যার মালিক দিন ফয়সালা...',
    },
    {
      title: 'সূরা হামযা',
      arabic: 'وَيْلٌ لِّكُلِّ هُمَزَةٍ لُّمَزَةٍ...',
      banglaPronunciation: 'ওয়াইলুন লিকুল্লি হুমাযাতিল্লুমাযাতিল...',
      meaning: 'হায়, প্রতিটি ব্যঙ্গকারীর জন্য...',
    },
    {
      title: 'সূরা দুঃখ',
      arabic: 'وَالْدُّحَىٰ...',
      banglaPronunciation: 'ওয়াল দুহা...',
      meaning: 'কসম দিনটির, যখন তা উজ্জ্বল...',
    },
  ];

  return (
    <div className="bg-green-50 p-8 rounded-xl shadow-xl mt-20 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-green-800 text-center mb-8">📖 ছোট সূরা সমূহ</h2>
      <div className="space-y-8">
        {surahs.map((surah, index) => (
          <div key={index} className="border-l-4 border-green-500 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-2xl font-semibold text-green-700 mb-4 text-right">{surah.title}</h3>
            <div className="text-right">
              <p className="text-3xl font-arabic text-gray-800 whitespace-pre-line mb-3">{surah.arabic}</p>
              <p className="text-lg text-gray-700 whitespace-pre-line mb-5">{surah.banglaPronunciation}</p>
              <p className="text-sm text-gray-500 italic">অর্থ: {surah.meaning}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SurahSection;

import React from 'react';

function DuaSection() {
  const todayDua = {
    title: 'সকাল-সন্ধ্যার দোয়া',
    arabic: 'اللَّهُمَّ أَجِرْنِي مِنَ النَّارِ',
    bangla: 'আল্লাহুম্মা আজিরনী মিনান্নার',
    meaning: 'হে আল্লাহ! আমাকে জাহান্নাম থেকে রক্ষা করুন।',
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-bold text-green-600 mb-4 text-center">📖 আজকের দোয়া</h2>
      <div className="text-center space-y-2">
        <h3 className="text-xl font-semibold text-gray-800">{todayDua.title}</h3>
        <p className="text-2xl text-gray-900 font-arabic">{todayDua.arabic}</p>
        <p className="text-lg text-gray-700">{todayDua.bangla}</p>
        <p className="text-sm text-gray-500 italic">অর্থ: {todayDua.meaning}</p>
      </div>
    </div>
  );
}

export default DuaSection;

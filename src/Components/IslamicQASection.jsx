import React, { useState } from 'react';
import { FaQuestionCircle } from 'react-icons/fa';
import { useLanguage } from '../Context/LanguageContext';

const questions = [

    {
    question: {
      bn: 'وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ — এর অর্থ কী?',
      en: 'What is the meaning of وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ?',
    },
    answer: {
      bn: "আমি জ্বিন ও মানব জাতিকে সৃষ্টি করেছি শুধুমাত্র আমার ইবাদতের জন্য।",
      en: "I have created jinn and humans only to worship me.",
    },
    explanation: {
      bn: "এই আয়াতের মাধ্যমে আল্লাহ আমাদের সৃষ্টি করার উদ্দেশ্য জানিয়ে দিয়েছেন। ইবাদত মানে শুধু নামাজ নয়, বরং জীবনের প্রতিটি কাজকর্ম আল্লাহর বিধান অনুযায়ী করলে সেটাও ইবাদত।",
      en: "This verse explains the purpose of Allah creating us. Worship is not just prayer, but any action done according to Allah's guidance is also worship.",
    }
  },

  {
    question: {
      bn: 'ইসলামের ৫টি স্তম্ভ কী?',
      en: 'What are the 5 pillars of Islam?',
    },
    answer: {
      bn: '১. ইমান (বিশ্বাস)\n২. নামাজ\n৩. রোযা\n৪. যাকাত\n৫. হজ্জ',
      en: '1. Faith (Iman)\n2. Prayer (Salah)\n3. Fasting (Sawm)\n4. Charity (Zakat)\n5. Pilgrimage (Hajj)',
    },
    hadith: {
      ar: 'بُنِيَ الإِسْلَامُ عَلَى خَمْسٍ: شَهَادَةِ أَنْ لاَ إِلٰهَ إِلَّا اللَّهُ، وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ، وَإِقَامِ الصَّلاَةِ، وَإِيتَاءِ الزَّكَاةِ، وَالْحَجِّ، وَصَوْمِ رَمَضَانَ',
      bn: 'রাসূলুল্লাহ ﷺ বলেছেন, “ইসলাম পাঁচটি বিষয়ের উপর প্রতিষ্ঠিত: ১) এই সাক্ষ্য দেওয়া যে আল্লাহ ছাড়া কোনো উপাস্য নেই এবং মুহাম্মদ ﷺ আল্লাহর রাসূল, ২) নামাজ কায়েম করা, ৩) যাকাত প্রদান করা, ৪) হজ্জ পালন করা, ৫) রমজান মাসে রোযা রাখা।” (সহিহ বুখারী: ৮, সহিহ মুসলিম: ১৬)',
      en: 'The Messenger of Allah ﷺ said: “Islam is built upon five: 1) Testifying that there is no god but Allah and Muhammad is the Messenger of Allah, 2) Establishing prayer, 3) Giving Zakat, 4) Performing Hajj, 5) Fasting in Ramadan.” (Sahih Bukhari: 8, Sahih Muslim: 16)',
    },
    explanation: {
      bn: 'ইসলামের এই পাঁচটি স্তম্ভ মুসলিমদের জীবনের ভিত্তি। এগুলো পালন করাই ঈমানদারের পরিচয়।',
      en: 'These five pillars are the foundation of a Muslim’s life. Following them reflects true faith.',
    },
  },


  {
  question: {
    bn: 'হজ্জ সম্পর্কে জানুন।',
    en: 'What is Hajj?',
  },
  answer: {
    bn: '১. ইহরাম বাঁধা\n২. তাওয়াফ (কাবা ঘুরা)\n৩. সাই (সাফা-মারওয়া দৌড়ানো)\n৪. আরাফাত ময়দানে অবস্থান\n৫. জামরাতে পাথর ছোঁড়া',
    en: '1. Wearing Ihram\n2. Tawaf (Circumambulating the Kaaba)\n3. Sa’i (Walking between Safa and Marwah)\n4. Standing in Arafat\n5. Throwing stones at the Jamrah',
  },
  hadith: {
    ar: 'بُنِيَ الإِسْلَامُ عَلَى خَمْسٍ: شَهَادَةِ أَنْ لاَ إِلٰهَ إِلَّا اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ وَإِقَامِ الصَّلاَةِ وَإِيتَاءِ الزَّكَاةِ وَالْحَجِّ وَصَوْمِ رَمَضَانَ',
    bn: 'রাসূলুল্লাহ ﷺ বলেছেন, “ইসলাম পাঁচটি বিষয়ের উপর প্রতিষ্ঠিত: ১) এই সাক্ষ্য দেওয়া যে আল্লাহ ছাড়া কোনো উপাস্য নেই এবং মুহাম্মদ ﷺ আল্লাহর রাসূল, ২) নামাজ কায়েম করা, ৩) যাকাত প্রদান করা, ৪) হজ্জ পালন করা, ৫) রমজান মাসে রোযা রাখা।” (সহিহ বুখারি: ৮, সহিহ মুসলিম: ১৬)',
    en: 'The Messenger of Allah ﷺ said: “Islam is built upon five: 1) Testifying that there is no god but Allah and Muhammad is the Messenger of Allah, 2) Establishing prayer, 3) Giving Zakat, 4) Performing Hajj, 5) Fasting in Ramadan.” (Sahih Bukhari: 8, Sahih Muslim: 16)',
  },
  explanation: {
    bn: 'হজ্জ ইসলামের পঞ্চম স্তম্ভ এবং এটি তাদের জন্য ফরজ যাদের শারীরিক এবং আর্থিক সক্ষমতা রয়েছে। হজ্জ মুসলিম জীবনের একটি গুরুত্বপূর্ণ আচরণ এবং আল্লাহর প্রতি এক ধরনের পূর্ণ আত্মসমর্পণ।',
    en: 'Hajj is the fifth pillar of Islam and it is obligatory for those who are physically and financially able. It is an important act of worship and a complete surrender to Allah.',
  },
}

  // Add more questions here if needed...
];

function IslamicQASection() {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const translations = {
    title: {
      bn: "ইসলামিক প্রশ্নোত্তর (Q&A)",
      en: "Islamic Q&A Section",
    },
    answer: {
      bn: "🔹 উত্তর:",
      en: "🔹 Answer:",
    },
    hadith: {
      bn: "🔹 হাদিস:",
      en: "🔹 Hadith:",
    },
    explanation: {
      bn: "🔹 ব্যাখ্যা:",
      en: "🔹 Explanation:",
    },
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-16">
      <h1 className="text-3xl font-bold text-green-700 flex items-center gap-2 mb-8">
        <FaQuestionCircle className="text-4xl" />
        {translations.title[language]}
      </h1>

      <div className="space-y-6">
        {questions.map((qa, index) => (
          <div
            key={index}
            className="border border-green-200 rounded-xl shadow-md bg-white p-5 hover:shadow-lg transition"
          >
            <div
              className="cursor-pointer text-lg font-semibold text-green-800 mb-2"
              onClick={() => toggleAccordion(index)}
            >
              ❓ {qa.question[language]}
            </div>

            {openIndex === index && (
              <div className="space-y-3">
                {qa.hadith && (
                  <>
                    <p className="text-green-700">
                      <strong>{translations.hadith[language]}</strong>
                    </p>
                    <p className="text-xl text-right font-arabic leading-loose text-gray-800">
                      {qa.hadith.ar}
                    </p>
                    <p className="text-gray-700 whitespace-pre-line">
                      {qa.hadith[language]}
                    </p>
                  </>
                )}

                <p className="text-gray-700 whitespace-pre-line">
                  <strong>{translations.answer[language]}</strong> {qa.answer[language]}
                </p>

                <p className="text-gray-700">
                  <strong>{translations.explanation[language]}</strong> {qa.explanation[language]}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default IslamicQASection;

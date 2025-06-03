import React, { useState } from 'react';
import { FaQuestionCircle } from 'react-icons/fa';
import { useLanguage } from '../Context/LanguageContext';
import RevealOnScroll from '../Context/RevealOnScroll';
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
  },

  {
    question: {
      bn: 'আল্লাহ কত্ত বড়?',
      en: 'How great is Allah?',
    },
    answer: {
      bn: 'আল্লাহ অগণিত, সীমাহীন এবং সৃষ্টিকর্তা। তাঁর মতো কেউ নেই।',
      en: 'Allah is infinite, boundless, and the Creator. There is none like Him.',
    },
    explanation: {
      bn: 'আল্লাহর মাহাত্ম্য আমাদের কল্পনাতীত। তিনি সবকিছু সৃষ্টি করেছেন এবং সব কিছুর উপর ক্ষমতা রাখেন।',
      en: 'Allah’s greatness is beyond imagination. He created everything and has power over all things.',
    }
  },

  {
    question: {
      bn: 'কোরআন কী?',
      en: 'What is the Qur’an?',
    },
    answer: {
      bn: 'কোরআন হলো আল্লাহর বাণী যা রাসূলুল্লাহ ﷺ এর উপর অবতীর্ণ হয়েছে।',
      en: 'The Qur’an is the word of Allah revealed to the Prophet Muhammad ﷺ.',
    },
    explanation: {
      bn: 'এটি মুসলিমদের জন্য জীবনযাপনের পথনির্দেশক। এতে রয়েছে আল্লাহর বিধান, শিক্ষা ও আদেশ।',
      en: 'It is a guide for Muslims on how to live. It contains Allah’s laws, teachings, and instructions.',
    }
  },

  {
    question: {
      bn: 'আখিরাত কী?',
      en: 'What is the Hereafter (Akhirah)?',
    },
    answer: {
      bn: 'আখিরাত হচ্ছে মৃত্যুর পরের জীবন, যেখানে বিচার দিবসে প্রতিটি কাজের হিসাব নেয়া হবে।',
      en: 'The Hereafter is the life after death where every deed will be judged on the Day of Judgment.',
    },
    explanation: {
      bn: 'মুসলিমদের বিশ্বাস, দুনিয়ার জীবন ক্ষণস্থায়ী এবং আখিরাত চিরস্থায়ী।',
      en: 'Muslims believe that worldly life is temporary and the Hereafter is eternal.',
    }
  },

  {
    question: {
      bn: 'নামাজ কেন গুরুত্বপূর্ণ?',
      en: 'Why is Salah (prayer) important?',
    },
    answer: {
      bn: 'নামাজ মুসলিমদের জন্য ফরজ। এটি আল্লাহর সাথে যোগাযোগের উপায়।',
      en: 'Salah is obligatory for Muslims. It is a means to connect with Allah.',
    },
    explanation: {
      bn: 'নামাজ আত্মশুদ্ধি ও ধৈর্য অর্জনের একটি মাধ্যম এবং এটি ঈমানের প্রকাশ।',
      en: 'Prayer is a way to purify the soul, gain patience, and express faith.',
    }
  },

  {
    question: {
      bn: 'যাকাত কী ও কেন দিতে হয়?',
      en: 'What is Zakat and why is it given?',
    },
    answer: {
      bn: 'যাকাত হলো ধনী মুসলিমদের ওপর ফরজ একটি দান, যা গরিবদের সাহায্যের জন্য নির্ধারিত।',
      en: 'Zakat is an obligatory charity for wealthy Muslims to support the poor.',
    },
    explanation: {
      bn: 'যাকাত সমাজে অর্থনৈতিক ভারসাম্য আনে এবং ধনীদের হৃদয়ে নম্রতা সৃষ্টি করে।',
      en: 'Zakat brings economic balance in society and humbles the wealthy.',
    }
  },

  {
    question: {
      bn: 'রমজান মাসে কী করতে হয়?',
      en: 'What should be done during the month of Ramadan?',
    },
    answer: {
      bn: 'রোযা রাখা, কুরআন তিলাওয়াত, বেশি ইবাদত করা এবং খারাপ কাজ থেকে বিরত থাকা।',
      en: 'Fasting, reciting the Qur’an, doing more worship, and avoiding evil deeds.',
    },
    explanation: {
      bn: 'রমজান আত্মসংযম ও তাকওয়া অর্জনের মাস, যেখানে মুসলিমরা আত্মার শুদ্ধি অর্জন করে।',
      en: 'Ramadan is a month of self-restraint and piety, where Muslims purify their souls.',
    }
  },

  {
    question: {
      bn: 'রাসূলুল্লাহ ﷺ কে?',
      en: 'Who is Prophet Muhammad ﷺ?',
    },
    answer: {
      bn: 'তিনি ইসলামের শেষ নবী যাঁর মাধ্যমে আল্লাহ কুরআন নাজিল করেছেন।',
      en: 'He is the final Prophet of Islam through whom Allah revealed the Qur’an.',
    },
    explanation: {
      bn: 'তিনি আমাদের আদর্শ এবং তাঁর জীবনের প্রতিটি দিক থেকে শিক্ষা গ্রহণ করা উচিত।',
      en: 'He is our role model and we should learn from every aspect of his life.',
    }
  },

  {
    question: {
      bn: 'কালেমা শাহাদাত কী?',
      en: 'What is the Kalima Shahada?',
    },
    answer: {
      bn: 'لَا إِلٰهَ إِلَّا اللَّهُ، مُحَمَّدٌ رَسُولُ اللَّهِ — অর্থাৎ, আল্লাহ ছাড়া কোনো ইলাহ নেই এবং মুহাম্মদ ﷺ আল্লাহর রাসূল।',
      en: 'La ilaha illallah, Muhammadur Rasulullah — There is no god but Allah, and Muhammad ﷺ is His Messenger.',
    },
    explanation: {
      bn: 'এটি ইসলামের মূল বিশ্বাস। মুসলিম হওয়ার প্রথম শর্ত এই কালেমা পাঠ করা।',
      en: 'This is the core belief of Islam. Reciting this is the first step to becoming a Muslim.',
    }
  },

  {
    question: {
      bn: 'কিয়ামতের দিন কী ঘটবে?',
      en: 'What will happen on the Day of Judgment?',
    },
    answer: {
      bn: 'মানুষের সব আমল উপস্থাপন করা হবে এবং প্রত্যেককে তার কর্ম অনুযায়ী প্রতিদান দেওয়া হবে।',
      en: 'All deeds will be presented and everyone will be rewarded or punished accordingly.',
    },
    explanation: {
      bn: 'সেই দিন কেউ কারো উপকার করতে পারবে না। কেবল আল্লাহর রহমতই রক্ষা করতে পারে।',
      en: 'On that day, no one can help another. Only Allah’s mercy can save us.',
    }
  },

  {
    question: {
      bn: 'তাওবা কীভাবে করতে হয়?',
      en: 'How to repent (make Tawbah)?',
    },
    answer: {
      bn: '১) গুনাহের জন্য অনুতপ্ত হওয়া\n২) গুনাহ ত্যাগ করা\n৩) ভবিষ্যতে আর না করার সংকল্প করা\n৪) আল্লাহর কাছে ক্ষমা চাওয়া',
      en: '1) Feel remorse for the sin\n2) Stop the sin\n3) Resolve not to return to it\n4) Ask Allah for forgiveness',
    },
    explanation: {
      bn: 'তাওবা করলে আল্লাহ গুনাহ মাফ করেন, যত বড় গুনাহই হোক না কেন।',
      en: 'When one repents, Allah forgives — no matter how big the sin is.',
    }
  }



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
    <RevealOnScroll>
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
    </RevealOnScroll>
  );
}

export default IslamicQASection;

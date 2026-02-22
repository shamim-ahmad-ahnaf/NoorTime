import React, { useState, useMemo } from 'react';
import { useLanguage } from '../Context/LanguageContext';
import { ClipboardDocumentIcon, ShareIcon } from '@heroicons/react/24/outline';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
import Fuse from 'fuse.js';

function DuaSection() {
  const { language } = useLanguage();

  const labels = {
    bn: {
      categoryTitle: '📖 দোয়ার ক্যাটেগরি',
      copy: 'কপি',
      share: 'শেয়ার',
      copied: 'কপি করা হয়েছে!',
      copyMeaningPrefix: 'অর্থ: ',
      notSupported: 'এই ব্রাউজারে শেয়ার সাপোর্টেড নয়।',
      searchPlaceholder: 'অনুসন্ধান করুন...',
      noResults: 'কিছু পাওয়া যায়নি',
    },
    en: {
      categoryTitle: '📖 Dua Categories',
      copy: 'Copy',
      share: 'Share',
      copied: 'Copied!',
      copyMeaningPrefix: 'Meaning: ',
      notSupported: 'Sharing not supported on this browser.',
      searchPlaceholder: 'Search...',
      noResults: 'No results found',
    },
  };



  const categoryTitles = {
    bn: {
      morning_evening: 'সকাল-সন্ধ্যার দোয়া',
      family: 'পরিবারের দোয়া',
      food: 'খাবারের দোয়া',
      sleep: 'ঘুমের দোয়া',
      wake_up: 'ঘুম থেকে ওঠার দোয়া',
      bathroom: 'বাথরুমে প্রবেশের দোয়া',
      going_out: 'বাইরে যাওয়ার দোয়া',
      mosque: 'মসজিদে প্রবেশের দোয়া',
      mirror: 'আয়নার সামনে দোয়া',
      anger: 'রাগ প্রশমনের দোয়া',
    },
    en: {
      morning_evening: 'Morning & Evening',
      family: 'Family',
      food: 'Food',
      sleep: 'Before Sleep',
      wake_up: 'After Waking Up',
      bathroom: 'Before Entering Bathroom',
      going_out: 'Going Outside',
      mosque: 'Entering Mosque',
      mirror: 'In Front of Mirror',
      anger: 'Anger Management',

    },
  };

  const duasByCategory = {
    morning_evening: [
      {
        title: {
          bn: 'সকাল-সন্ধ্যার দোয়া ১',
          en: 'Morning & Evening Dua 1',
        },
        arabic: 'اللَّهُمَّ أَجِرْنِي مِنَ النَّارِ',
        bangla: 'আল্লাহুম্মা আজিরনী মিনান্নার',
        meaning: {
          bn: 'হে আল্লাহ! আমাকে জাহান্নাম থেকে রক্ষা করুন।',
          en: 'O Allah! Save me from the Hellfire.',
        },
      },
      {
        title: {
          bn: 'সকাল-সন্ধ্যার দোয়া ২',
          en: 'Morning & Evening Dua 2',
        },
        arabic: 'اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا',
        bangla: 'আল্লাহুম্মা বিকা আসবাহনা ওয়া বিকা আমসাইনা',
        meaning: {
          bn: 'হে আল্লাহ! তোমারই সাহায্যে আমরা সকাল করি এবং তোমারই সাহায্যে সন্ধ্যা করি।',
          en: 'O Allah! By You we enter the morning and by You we enter the evening.',
        },
      },
      {
        title: {
          bn: 'সকাল-সন্ধ্যার দোয়া ৩',
          en: 'Morning & Evening Dua 3',
        },
        arabic: 'رَضِيتُ بِاللَّهِ رَبًّا',
        bangla: 'রাদিতু বিল্লাহি রাব্বা',
        meaning: {
          bn: 'আমি আল্লাহকে আমার পালনকর্তা হিসেবে সন্তুষ্ট।',
          en: 'I am pleased with Allah as my Lord.',
        },
      },
      {
        title: {
          bn: 'সকাল-সন্ধ্যার দোয়া ৪',
          en: 'Morning & Evening Dua 4',
        },
        arabic: 'اللَّهُمَّ أَنْتَ رَبِّي لا إِلَهَ إِلا أَنْتَ',
        bangla: 'আল্লাহুম্মা আনতা রাব্বি লা ইলাহা ইল্লা আনতা',
        meaning: {
          bn: 'হে আল্লাহ! তুমি আমার প্রভু, তুমি ছাড়া কোনো ইলাহ নেই।',
          en: 'O Allah! You are my Lord, there is no deity except You.',
        },
      },
      {
        title: {
          bn: 'সকাল-সন্ধ্যার দোয়া ৫',
          en: 'Morning & Evening Dua 5',
        },
        arabic: 'اللَّهُمَّ عَافِنِي فِي بَدَنِي',
        bangla: 'আল্লাহুম্মা আ-ফিনি ফি বাদানি',
        meaning: {
          bn: 'হে আল্লাহ! আমার দেহে সুস্থতা দান করো।',
          en: 'O Allah! Grant me health in my body.',
        },
      },
      {
        title: {
          bn: 'সকাল-সন্ধ্যার দোয়া ৬',
          en: 'Morning & Evening Dua 6',
        },
        arabic: 'اللَّهُمَّ اسْتُرْ عَوْرَاتِي وَآمِنْ رَوْعَاتِي',
        bangla: 'আল্লাহুম্মা স্তুর আউরাতি ওয়া আমিন রাউরাতি',
        meaning: {
          bn: 'হে আল্লাহ! আমার গোপনীয়তা রক্ষা করুন এবং আমার ভয় দূর করুন।',
          en: 'O Allah! Conceal my faults and calm my fears.',
        },
      },
      {
        title: {
          bn: 'সকাল-সন্ধ্যার দোয়া ৭',
          en: 'Morning & Evening Dua 7',
        },
        arabic: 'اللَّهُمَّ اهْدِنِي وَسَدِّدْنِي',
        bangla: 'আল্লাহুম্মা ইহদিনি ওয়া সদ্দিদিনি',
        meaning: {
          bn: 'হে আল্লাহ! আমাকে সঠিক পথে চালাও এবং আমাকে সঠিক বানাও।',
          en: 'O Allah! Guide me and make me steadfast.',
        },
      },
      {
        title: {
          bn: 'সকাল-সন্ধ্যার দোয়া ৮',
          en: 'Morning & Evening Dua 8',
        },
        arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا',
        bangla: 'আল্লাহুম্মা ইন্নি আসআলুকা ইলমান নাফিআ',
        meaning: {
          bn: 'হে আল্লাহ! আমি তোমার নিকট উপকারী জ্ঞানের জন্য প্রার্থনা করি।',
          en: 'O Allah! I ask You for beneficial knowledge.',
        },
      },
      {
        title: {
          bn: 'সকাল-সন্ধ্যার দোয়া ৯',
          en: 'Morning & Evening Dua 9',
        },
        arabic: 'اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ',
        bangla: 'আল্লাহুম্মাজ আলনী মিনাত তাওয়াবীন',
        meaning: {
          bn: 'হে আল্লাহ! আমাকে তাওবা কারীদের অন্তর্ভুক্ত করো।',
          en: 'O Allah! Make me among those who repent.',
        },
      },
      {
        title: {
          bn: 'সকাল-সন্ধ্যার দোয়া ১০',
          en: 'Morning & Evening Dua 10',
        },
        arabic: 'اللَّهُمَّ اكْفِنِي بِحَلاَلِكَ عَنْ حَرَامِكَ',
        bangla: 'আল্লাহুম্মাকফিনী বিহালালিকা আন হারামিকা',
        meaning: {
          bn: 'হে আল্লাহ! তোমার হালাল মাধ্যমে আমাকে হারাম থেকে বাঁচাও।',
          en: 'O Allah! Suffice me with what You have made lawful instead of what You made unlawful.',
        },
      },
    ],


    family: [
      {
        title: {
          bn: 'পরিবারের দোয়া ১',
          en: 'Family Dua 1',
        },
        arabic: 'رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ',
        bangla: 'রব্বিগফিরলী ওয়া লি-ওয়ালিদাইয়া',
        meaning: {
          bn: 'হে আমার পালনকর্তা! আমাকে এবং আমার পিতা-মাতাকে ক্ষমা করুন।',
          en: 'My Lord, forgive me and my parents.',
        },
      },
    ],

    food: [
      {
        title: {
          bn: 'খাবারের আগে দোয়া',
          en: 'Before Eating',
        },
        arabic: 'بِسْمِ اللَّهِ',
        bangla: 'বিসমিল্লাহ',
        meaning: {
          bn: 'আল্লাহর নামে (আমি খাচ্ছি)।',
          en: 'In the name of Allah.',
        },
      },
      {
        title: {
          bn: 'খাবার শেষে দোয়া',
          en: 'After Eating',
        },
        arabic: 'الْـحَمْـدُ للهِ الَّذِي أَطْعَمَنِي هَذَا وَرَزَقَنِيهِ',
        bangla: 'আলহামদু লিল্লাহিল্লাযী আতআমানী হাযা ওয়া রাযাক্বানীহী',
        meaning: {
          bn: 'সব প্রশংসা আল্লাহর যিনি আমাকে এ খাবার খাইয়েছেন ও রিজিক দিয়েছেন।',
          en: 'All praise is for Allah who fed me this and provided it for me.',
        },
      },
      {
        title: {
          bn: 'খাবার খেতে ভুলে গেলে',
          en: 'If You Forget to Say Bismillah',
        },
        arabic: 'بِسْمِ اللَّهِ أَوَّلَهُ وَآخِرَهُ',
        bangla: 'বিসমিল্লাহি আওয়ালাহু ওয়া আখিরাহু',
        meaning: {
          bn: 'আল্লাহর নামে, শুরুতেও ও শেষে।',
          en: 'In the name of Allah, at its beginning and at its end.',
        },
      },
      {
        title: {
          bn: 'অন্যের বাসায় খাওয়ার দোয়া',
          en: 'Dua for Host After Eating at Their Home',
        },
        arabic: 'اللَّهُمَّ أَطْعِمْ مَنْ أَطْعَمَنَا وَاسْقِ مَنْ سَقَانَا',
        bangla: 'আল্লাহুম্মা আতঈম মান আতআমানা ওয়াসক্বি মান সাক্বানা',
        meaning: {
          bn: 'হে আল্লাহ! যিনি আমাদের খাওয়ালেন, তাকে আপনি খাওয়ান; এবং যিনি আমাদের পান করালেন, তাকেও আপনি পান করান।',
          en: 'O Allah! Feed the one who fed us and give drink to the one who gave us drink.',
        },
      },
      {
        title: {
          bn: 'খাবারে দোষ খুঁজলে না পড়ার দোয়া',
          en: 'Not Criticizing Food',
        },
        arabic: 'مَا عَابَ النَّبِيُّ طَعَامًا قَطُّ',
        bangla: 'মা আ’বা আন-নাবিয়্যু তো’আমান ক্বত্ব',
        meaning: {
          bn: 'নবী (সা.) কখনো কোনো খাবারে দোষ ধরেননি।',
          en: 'The Prophet (peace be upon him) never criticized any food.',
        },
      },
      {
        title: {
          bn: 'রিজিক বৃদ্ধির দোয়া',
          en: 'Dua for Increased Sustenance',
        },
        arabic: 'اللَّهُمَّ بَارِكْ لَنَا فِيهِ وَأَطْعِمْنَا خَيْرًا مِنْهُ',
        bangla: 'আল্লাহুম্মা বারিক লানা ফিহি ওয়া আতঈমনা খাইরাম মিনহু',
        meaning: {
          bn: 'হে আল্লাহ! এতে আমাদের জন্য বরকত দান করো এবং আমাদের আরও উত্তম রিযিক দাও।',
          en: 'O Allah! Bless it for us and provide us with better than it.',
        },
      },
      {
        title: {
          bn: 'খাবারে বরকতের দোয়া',
          en: 'Dua for Barakah in Food',
        },
        arabic: 'اللَّهُمَّ بَارِكْ لَنَا فِيهِ',
        bangla: 'আল্লাহুম্মা বারিক লানা ফিহি',
        meaning: {
          bn: 'হে আল্লাহ! এতে আমাদের জন্য বরকত দান করুন।',
          en: 'O Allah! Bless it for us.',
        },
      },
      {
        title: {
          bn: 'রোজা ভাঙার পর দোয়া',
          en: 'Dua After Breaking the Fast',
        },
        arabic: 'ذَهَبَ الظَّمَأُ وَابْتَلَّتِ الْعُرُوقُ',
        bangla: 'যাহাবাজ জামা’উওয়াবতাল্লাতিল উরূক',
        meaning: {
          bn: 'পিপাসা দূর হলো এবং শিরাগুলো সিক্ত হলো।',
          en: 'The thirst is gone and the veins are moistened.',
        },
      },
      {
        title: {
          bn: 'খাবারের জন্য কৃতজ্ঞতা',
          en: 'Gratitude for Food',
        },
        arabic: 'الْـحَمْـدُ للهِ عَلَى كُلِّ حَالٍ',
        bangla: 'আলহামদু লিল্লাহি আলা কুল্লি হাল',
        meaning: {
          bn: 'সব অবস্থার জন্য আল্লাহর প্রশংসা।',
          en: 'All praise is due to Allah in every circumstance.',
        },
      },
      {
        title: {
          bn: 'খাবার শেষ করার পরের দোয়া',
          en: 'Complete Dua After Eating',
        },
        arabic: 'الْـحَمْـدُ للهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مِنَ الْمُسْلِمِينَ',
        bangla: 'আলহামদুলিল্লাহিল্লাযী আতআমানা ওয়াসাক্বানা ওয়াজা’আলানা মিনাল মুসলিমীন',
        meaning: {
          bn: 'সব প্রশংসা আল্লাহর যিনি আমাদের খাইয়েছেন, পান করিয়েছেন এবং মুসলিম করেছেন।',
          en: 'All praise is for Allah who fed us, gave us drink, and made us Muslims.',
        },
      },
    ],


    sleep: [
      {
        title: {
          bn: 'ঘুমের দোয়া',
          en: 'Sleep Dua',
        },
        arabic: 'بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا',
        bangla: 'বিসমিকাল্লাহুম্মা আমুতু ওয়া আহইয়া',
        meaning: {
          bn: 'হে আল্লাহ! তোমার নামে আমি মারা যাই ও জীবিত হই।',
          en: 'In Your name, O Allah, I die and I live.',
        },
      },
      {
        title: {
          bn: 'ঘুম থেকে জেগে ওঠার দোয়া',
          en: 'Dua Upon Waking Up',
        },
        arabic: 'الْـحَمْـدُ للهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ',
        bangla: 'আলহামদুলিল্লাহিল্লাযী আহইয়ানা বা’দা মা আমাতানা ওয়া ইলাইহিন নুশূর',
        meaning: {
          bn: 'সব প্রশংসা আল্লাহর, যিনি আমাদের মৃত্যুর পর জীবিত করলেন এবং তাঁর দিকেই প্রত্যাবর্তন।',
          en: 'All praise is for Allah who gave us life after having taken it from us and unto Him is the resurrection.',
        },
      },
      {
        title: {
          bn: 'ঘুমানোর আগে আয়াতুল কুরসি',
          en: 'Ayatul Kursi Before Sleeping',
        },
        arabic: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ... (আয়াতুল কুরসি সম্পূর্ণ)',
        bangla: 'আল্লাহু লা ইলাহা ইল্লা হুয়াল হাইয়ুল ক্বাইয়ূম... (পূর্ণ আয়াতুল কুরসি পড়তে হবে)',
        meaning: {
          bn: 'আয়াতুল কুরসি পড়লে রাত্রিকালীন হেফাজতের জন্য একজন ফেরেশতা নিযুক্ত থাকেন।',
          en: 'Reciting Ayatul Kursi before sleep grants protection from Allah through an angel all night.',
        },
      },
      {
        title: {
          bn: 'ডান পাশে শোয়ার দোয়া',
          en: 'Dua for Lying on Right Side',
        },
        arabic: 'اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ',
        bangla: 'আল্লাহুম্মা কিনী আযাবাকা ইয়াওমা তাব’আসু ইবাদাকা',
        meaning: {
          bn: 'হে আল্লাহ! তুমি তোমার বান্দাদেরকে যেদিন উঠাবে, সেই দিনের আযাব থেকে আমাকে রক্ষা করো।',
          en: 'O Allah! Protect me from Your punishment on the Day You resurrect Your slaves.',
        },
      },
      {
        title: {
          bn: 'ঘুমানোর আগে শেষ কথা',
          en: 'Last Words Before Sleep',
        },
        arabic: 'اللَّهُمَّ إِنِّي أَسْلَمْتُ نَفْسِي إِلَيْكَ ...',
        bangla: 'আল্লাহুম্মা ইন্নী আসলামতু নাফসী ইলাইকা ... (পূর্ণ হাদিসের দোয়া)',
        meaning: {
          bn: 'হে আল্লাহ! আমি আমার আত্মা তোমার কাছে সোপর্দ করলাম ... (দোয়া দীর্ঘ, হাদিসে বর্ণিত)',
          en: 'O Allah! I have submitted myself to You... (complete dua from hadith).',
        },
      },
      {
        title: {
          bn: 'রাতে ভয় পেলে দোয়া',
          en: 'Dua When Afraid at Night',
        },
        arabic: 'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ غَضَبِهِ وَعِقَابِهِ ...',
        bangla: 'আউযু বিকালিমাতিল্লাহিত তাম্মাতি মিন গাদ্বাবিহি ওয়া ইকাবিহি...',
        meaning: {
          bn: 'আমি আল্লাহর পরিপূর্ণ বাণীসমূহের মাধ্যমে তাঁর রাগ, শাস্তি ও মন্দ জিনিস থেকে আশ্রয় চাই।',
          en: 'I seek refuge in the perfect words of Allah from His anger and His punishment...',
        },
      },
      {
        title: {
          bn: 'ঘুমাতে যাওয়ার আগে তাসবীহ',
          en: 'Tasbeeh Before Sleeping',
        },
        arabic: 'سُبْحَانَ اللَّهِ، الْحَمْدُ لِلَّهِ، اللَّهُ أَكْبَرُ (৩৩ বার করে)',
        bangla: 'সুবহানাল্লাহ, আলহামদুলিল্লাহ, আল্লাহু আকবার (প্রত্যেকটি ৩৩ বার করে)',
        meaning: {
          bn: 'এগুলো ঘুমাতে যাওয়ার আগে পড়া নবীজি (সা.)-এর শিক্ষা।',
          en: 'These are to be recited before sleep as taught by the Prophet (peace be upon him).',
        },
      },
    ],


    wake_up: [
      {
        title: {
          bn: 'ঘুম থেকে ওঠার দোয়া',
          en: 'Wake Up Dua',
        },
        arabic: 'الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا',
        bangla: 'আলহামদু লিল্লাহিল্লাযী আহইয়ানা',
        meaning: {
          bn: 'সকল প্রশংসা আল্লাহর, যিনি আমাদের জীবিত করেছেন।',
          en: 'All praise is for Allah who gave us life.',
        },
      },
    ],

    bathroom: [
      {
        title: {
          bn: 'বাথরুমে প্রবেশের দোয়া',
          en: 'Bathroom Dua',
        },
        arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ',
        bangla: 'আল্লাহুম্মা ইন্নি আউযুবিকা মিনাল খুবুসি',
        meaning: {
          bn: 'হে আল্লাহ! আমি তোমার নিকট আশ্রয় চাই অপবিত্র জিন ও শয়তান থেকে।',
          en: 'O Allah! I seek refuge with You from evil and filthy beings.',
        },
      },
    ],

    bathroom: [
      {
        title: {
          bn: 'বাথরুমে প্রবেশের দোয়া',
          en: 'Dua Before Entering Bathroom',
        },
        arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ',
        bangla: 'আল্লাহুম্মা ইন্নি আউযুবিকা মিনাল খুবসি ওয়াল খাবায়িছ',
        meaning: {
          bn: 'হে আল্লাহ! আমি তোমার কাছে আশ্রয় চাই অপবিত্র জিন ও শয়তান থেকে।',
          en: 'O Allah! I seek refuge in You from male and female devils.',
        },
      },
      {
        title: {
          bn: 'বাথরুম থেকে বের হওয়ার দোয়া',
          en: 'Dua After Leaving Bathroom',
        },
        arabic: 'غُفْرَانَكَ',
        bangla: 'গুফরানাক',
        meaning: {
          bn: 'আমি তোমার ক্ষমা চাই।',
          en: 'I ask You (O Allah) for forgiveness.',
        },
      },
      {
        title: {
          bn: 'অসুবিধায় পড়লে পড়ার দোয়া (যেখানে টয়লেট পেতে সমস্যা হয়)',
          en: 'Dua When Facing Hardship (e.g. no toilet)',
        },
        arabic: 'اللَّهُمَّ يَسِّرْ وَلَا تُعَسِّرْ',
        bangla: 'আল্লাহুম্মা ইয়াস্‌সির ওয়ালা তুআস্‌সির',
        meaning: {
          bn: 'হে আল্লাহ! সহজ করে দাও, কঠিন করো না।',
          en: 'O Allah! Make it easy, and do not make it difficult.',
        },
      }
    ]
    ,

    mosque: [
      {
        title: {
          bn: 'মসজিদে প্রবেশের দোয়া',
          en: 'Entering Mosque Dua',
        },
        arabic: 'اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ',
        bangla: 'আল্লাহুম্মা ইফতাহলী আবওয়াবা রহমাতিক',
        meaning: {
          bn: 'হে আল্লাহ! আমার জন্য আপনার রহমতের দরজা খুলে দিন।',
          en: 'O Allah, open the doors of Your mercy for me.',
        },
      },
    ],

    mirror: [
      {
        title: {
          bn: 'আয়নার সামনে দোয়া',
          en: 'Mirror Dua',
        },
        arabic: 'اللَّهُمَّ كَمَا أَحْسَنْتَ خَلْقِي',
        bangla: 'আল্লাহুম্মা কামা আহসান্তা খালকি',
        meaning: {
          bn: 'হে আল্লাহ! যেমনিভাবে তুমি আমার গঠন সুন্দর করেছো, আমার চরিত্রও সুন্দর করো।',
          en: 'O Allah, just as You have made my external features beautiful, make my character beautiful as well.',
        },
      },
    ],

    anger: [
      {
        title: {
          bn: 'রাগ প্রশমনের দোয়া',
          en: 'Anger Control Dua',
        },
        arabic: 'أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ',
        bangla: 'আউযুবিল্লাহি মিনাশ শাইত্বানির রাজিম',
        meaning: {
          bn: 'আমি অভিশপ্ত শয়তান থেকে আল্লাহর কাছে আশ্রয় চাই।',
          en: 'I seek refuge in Allah from the accursed devil.',
        },
      },
      {
        title: {
          bn: 'রাগ প্রশমনের আমল (অজু করা)',
          en: 'Action: Make Wudu',
        },
        arabic: '',
        bangla: 'রাগ উঠলে অজু করে ফেলো',
        meaning: {
          bn: 'রাসূল (সা.) বলেছেন, রাগ আগুনের একটি অংশ, আর পানি তা নিভিয়ে দেয়।',
          en: 'The Prophet (PBUH) said, anger is from fire, and water extinguishes fire.',
        },
      },
      {
        title: {
          bn: 'রাগ উঠলে বসে পড়া বা শুয়ে পড়া',
          en: 'Action: Sit or Lie Down',
        },
        arabic: '',
        bangla: 'দাঁড়িয়ে থাকলে বসে পড়ো, বসে থাকলে শুয়ে পড়ো।',
        meaning: {
          bn: 'রাসূল (সা.) এর উপদেশ: রাগ উঠলে ভঙ্গি পরিবর্তন করো।',
          en: 'Prophet’s advice: Change posture when angry.',
        },
      }
    ]

  };


  // Fuse.js এর জন্য ডেটা তৈরি
  const fuseData = useMemo(() => {
    let list = [];
    Object.entries(duasByCategory).forEach(([categoryKey, duas]) => {
      duas.forEach((dua) => {
        list.push({
          categoryKey,
          title: dua.title[language === 'bn' ? 'bn' : 'en'],
          dua,
        });
      });
    });
    return list;
  }, [duasByCategory, language]);

  const fuse = useMemo(() => {
    return new Fuse(fuseData, {
      keys: ['title'],
      threshold: 0.3,
    });
  }, [fuseData]);

  const [selectedCategory, setSelectedCategory] = useState('morning_evening');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(null);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success(labels[language].copied, {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'light',
      });
    });
  };

  const shareDua = (text) => {
    if (navigator.share) {
      navigator.share({
        title: 'Dua',
        text: text,
      });
    } else {
      alert(labels[language].notSupported);
    }
  };

  // সার্চ ইনপুট হ্যান্ডলার
  const handleSearch = (e) => {
    const val = e.target.value;
    setSearchTerm(val);

    if (val.trim() === '') {
      setSearchResults(null);
    } else {
      const results = fuse.search(val);
      if (results.length === 0) {
        setSearchResults([]);
      } else {
        setSearchResults(results.map(r => r.item));
      }
    }
  };

  // সার্চ রেজাল্ট ক্লিক করলে
  const handleResultClick = (categoryKey, dua) => {
    setSelectedCategory(categoryKey);
    setSearchTerm('');
    setSearchResults(null);
  };

  return (
    <motion.div
      className="px-4 py-8 mx-auto mt-12 bg-white md:py-12 max-w-7xl"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <ToastContainer />

      <motion.h2
        className="mb-8 text-5xl font-bold text-center text-green-600"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {labels[language].categoryTitle}
      </motion.h2>

      {/* Search Box */}
      <div className="relative max-w-md mx-auto mb-8">
        <input
          type="text"
          placeholder={labels[language].searchPlaceholder}
          value={searchTerm}
          onChange={handleSearch}
          className="px-4 py-2 ml-12 border border-green-300 rounded-md w-sm focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        {searchResults !== null && (
          <div className="absolute z-10 w-full mt-1 overflow-auto bg-white border border-green-300 rounded-lg shadow-lg max-h-60">
            {searchResults.length === 0 ? (
              <p className="p-3 text-center text-gray-500">
                {labels[language].noResults}
              </p>
            ) : (
              searchResults.map(({ categoryKey, title, dua }, index) => (
                <button
                  key={index}
                  onClick={() => handleResultClick(categoryKey, dua)}
                  className="w-full px-4 py-2 text-left hover:bg-green-100 focus:bg-green-100"
                >
                  {title}
                </button>
              ))
            )}
          </div>
        )}
      </div>

      {/* Category Buttons */}
      <motion.div
        className="flex flex-wrap justify-center gap-3 mb-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.07,
            },
          },
        }}
      >
        {Object.keys(duasByCategory).map((key) => (
          <motion.button
            key={key}
            className={`py-2 px-4 rounded-full text-sm md:text-base font-medium border transition ${selectedCategory === key
              ? 'bg-green-600 text-white shadow'
              : 'bg-green-100 text-green-800 hover:bg-green-200'
              }`}
            onClick={() => setSelectedCategory(key)}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {categoryTitles[language][key]}
          </motion.button>
        ))}
      </motion.div>

      {/* Dua Cards */}
      <motion.div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {duasByCategory[selectedCategory]?.map((dua, index) => (
          <motion.div
            key={index}
            className="p-6 transition border border-green-200 shadow bg-green-50 rounded-xl hover:shadow-lg"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h3 className="mb-4 text-xl font-semibold text-center text-green-700">
              {dua.title[language]}
            </h3>
            <div className="space-y-2 text-center">
              <p className="text-2xl leading-relaxed text-gray-800 md:text-3xl font-arabic">
                {dua.arabic}
              </p>
              <p className="text-base text-gray-700">{dua.bangla}</p>
              <p className="text-sm italic text-gray-500">
                {labels[language].copyMeaningPrefix} {dua.meaning[language]}
              </p>
              <div className="flex justify-center gap-4 mt-4">
                <button
                  onClick={() => copyToClipboard(dua.arabic)}
                  className="flex items-center gap-2 px-2 py-1 text-white bg-green-600 rounded shadow hover:bg-green-700"
                >
                  <ClipboardDocumentIcon className="w-5 h-5" />
                  {labels[language].copy}
                </button>
                <button
                  onClick={() => shareDua(dua.arabic)}
                  className="flex items-center gap-2 px-2 py-1 text-white bg-purple-600 rounded shadow hover:bg-purple-700"
                >
                  <ShareIcon className="w-5 h-5" />
                  {labels[language].share}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default DuaSection;

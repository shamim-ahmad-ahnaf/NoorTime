import React from 'react';
import { useLanguage } from '../Context/LanguageContext';
import { motion } from 'framer-motion'
function SurahSection() {
  const { language } = useLanguage();


  const surahs = [
    {
      title: {
        bn: 'সূরা ফাতিহা',
        en: 'Surah Al-Fatiha',
      },
      arabic: `بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
    الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ. الرَّحْمَٰنِ الرَّحِيمِ.  مَالِكِ يَوْمِ الدِّينِ.  إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ.  اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ.  صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ`,
      banglaPronunciation: `বিসমিল্লাহির রাহমানির রাহিম
    আলহামদু লিল্লাহি রাব্বিল আলামীন,আর-রাহমানির রাহিম,মালিকি ইয়াওমিদ্দিন,ইয়্যাকা নাআবুদু ওয়া ইয়্যাকা নাস্তাঈন,ইহদিনাস সিরাতাল মুস্তাকিম,সিরাতাল লাযিনা আন'আমতা আলাইহিম,গাইরিল মাগদুবি আলাইহিম ওয়ালা দ্দাল্লিন`,
      englishPronunciation: `Bismillahir Rahmanir Rahim,
    Alhamdu lillahi Rabbil 'Alamin, Ar-Rahmanir Rahim, Maliki Yawmid-Din, Iyyaka na'budu wa iyyaka nasta'in, Ihdinas-siratal-mustaqim, Siratal-ladhina an'amta 'alayhim, Ghayril-magdubi 'alayhim wa la-d-dallin.`,
      meaning: {
        bn: 'শুরু করছি আল্লাহর নামে যিনি পরম করুণাময়, অতিশয় দয়ালু। সমস্ত প্রশংসা আল্লাহর, যিনি সকল সৃষ্টি জগতের পালনকর্তা। যিনি পরম করুণাময়, অতিশয় দয়ালু। বিচার দিনের মালিক। আমরা একমাত্র তোমারই ইবাদত করি এবং একমাত্র তোমারই সাহায্য চাই। আমাদেরকে সরল পথ দেখাও, সে সকল লোকের পথ, যাদেরকে তুমি অনুগ্রহ করেছো; তাদের পথ নয়, যাদের উপর তোমার গজব নাযিল হয়েছে এবং যারা পথভ্রষ্ট হয়েছে।',
        en: 'In the name of Allah, the Most Gracious, the Most Merciful. All praise is due to Allah, Lord of the worlds. The Most Gracious, the Most Merciful. Master of the Day of Judgment. You alone we worship, and You alone we ask for help. Guide us on the Straight Path, the path of those who have received Your grace; not the path of those who have brought down wrath upon themselves, nor of those who have gone astray.',
      },

    },
    {
      title: {
        bn: 'সূরা নাস',
        en: 'Surah An-Nas',
      },
      arabic: `.قُلْ أَعُوذُ بِرَبِّ النَّاسِ.  مَلِكِ النَّاسِ. إِلَٰهِ النَّاسِ.  مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ. 
         الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ مِنَ الْجِنَّةِ وَالنَّاسِ`,
      banglaPronunciation: `কুল আউজু বিরাব্বিন নাস,মালিকিন নাস, ইলাহিন নাস, মিন শাররিল ওয়াসওয়াসিল খান্নাস, আল্লাযি ইউওয়াসউইসু ফি সুদূরিন নাস, মিনাল জিন্নাতি ওয়ান নাস।`,

      englishPronunciation: `Qul a'udhu bi rabbil-nas,Malikin-nas,Ilahin-nas,Min sharri al-waswasil khannas,Alladhi yuwaswisu fi sudurin-nas,Minal-jinnati wan-nas`,

      meaning: {
        bn: 'বলুন, আমি আশ্রয় চাই মানুষের পালনকর্তার, মানুষের অধিপতির, মানুষের ইলাহর, কুমন্ত্রণা দানকারী আত্মগোপনকারী শয়তানের অনিষ্ট থেকে, যে কুমন্ত্রণা দেয় মানুষের অন্তরে, জিন ও মানুষের মধ্য থেকে।',
        en: 'Say, "I seek refuge in the Lord of mankind, the Sovereign of mankind, the God of mankind, from the evil of the whisperer who withdraws, who whispers in the hearts of mankind, among jinn and among mankind."',
      },

    },
    {
      title: {
        bn: 'সূরা ফালাক',
        en: 'Surah Al-Falaq',
      },
      arabic: `قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ  .مِنْ شَرِّ مَا خَلَقَ  .وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ  .وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ
      وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ`,
      banglaPronunciation: `কুল আউজু বিরাব্বিল ফালাক। মিন শাররি মা খালাক। ওয়া মিন শাররি গাসিকিন ইজা ওয়াকাব। ওয়া মিন শাররিন নাফফাসাতি ফিল উকাদ। ওয়া মিন শাররি হাসিদিন ইজা হাসাদ।`,
      englishPronunciation: `Qul a'udhu bi rabbil-falaq. Min sharri ma khalaq. Wa min sharri ghasiqin idha waqab. Wa min sharri an-naffathati fil-'uqad. Wa min sharri hasidin idha hasad.`,
      meaning: {
        bn: 'বলুন, আমি আশ্রয় চাই ভোরের পালনকর্তার নিকট, তিনি যা কিছু সৃষ্টি করেছেন তার অনিষ্ট থেকে, অন্ধকার রাত্রির অনিষ্ট থেকে যখন তা ছেয়ে যায়, গাঁটে ফুঁ দানকারী জাদুকারিণীদের অনিষ্ট থেকে এবং হিংসুকের অনিষ্ট থেকে যখন সে হিংসা করে।',
        en: 'Say, "I seek refuge in the Lord of daybreak, from the evil of what He created, from the evil of darkness when it settles, from the evil of blowers in knots, and from the evil of an envier when he envies."',
      },
    },

    {
      title: {
        bn: 'সূরা ইখলাস',
        en: 'Surah Al-Ikhlas',
      },
      arabic: `قُلْ هُوَ اللَّهُ أَحَدٌ  .اللَّهُ الصَّمَدُ.   لَمْ يَلِدْ وَلَمْ يُولَدْ
      وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ`,
      banglaPronunciation: `কুল হুয়াল্লাহু আহাদ। আল্লাহুস্‌ সমাদ। লাম ইয়ালিদ ওয়ালাম ইউলাদ। ওয়ালাম ইয়াকুন লাহু কুফুয়াঁ আহাদ।`,
      englishPronunciation: `Qul huwa Allahu ahad. Allahus-samad. Lam yalid wa lam yulad. Wa lam yakun lahu kufuwan ahad.`,
      meaning: {
        bn: 'বলুন, তিনি আল্লাহ, এক। আল্লাহ অমুখাপেক্ষী। তিনি জন্ম দেননি এবং তাঁকে জন্ম দেওয়া হয়নি। এবং তাঁর সমকক্ষ কেউ নেই।',
        en: 'Say, "He is Allah, [who is] One. Allah, the Eternal Refuge. He neither begets nor is born, nor is there to Him any equivalent."',
      },
    },

    {
      title: {
        bn: 'সূরা লাহাব',
        en: 'Surah Al-Lahab',
      },
      arabic: `.تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ.  مَا أَغْنَىٰ عَنْهُ مَالُهُ وَمَا كَسَبَ.  سَيَصْلَىٰ نَارًا ذَاتَ لَهَبٍ وَٱمْرَأَتُهُۥ. حَمَّالَةَ ٱلْحَطَبِ
      فِى جِيدِهَا حَبْلٌۭ مِّن مَّسَدٍۢ`,
      banglaPronunciation: `তাব্বাত ইয়াদা আবি লাহাবি ওয়া তাব্ব। মা আগনা আনহু মালুহু ওয়ামা কাসাব। সায়াসলা নাৰাঁ যাতা লাহাব। ওয়ামরাআতুহু হাম্মালাতাল হাতাব। ফি জিদিহা হাবলুম মিম মাসাদ।`,
      englishPronunciation: `Tabbat yada abi lahabin wa tabb. Ma aghna 'anhu maluhu wa ma kasab. Sayasla naran dhata lahab. Wamra'atuhu hammalatal-hatab. Fi jeediha hablun mim masad.`,
      meaning: {
        bn: 'ধ্বংস হোক আবু লাহাবের দুই হাত, এবং সে নিজেও ধ্বংস হয়ে যাক। তার ধন-সম্পদ ও উপার্জন তার কোনো কাজে আসবে না। সে অগ্নিশিখাযুক্ত আগুনে প্রবেশ করবে। আর তার স্ত্রী – সে হবে জ্বালানী বহনকারিণী। তার গলায় থাকবে পাকানো রশি।',
        en: 'May the hands of Abu Lahab be ruined, and ruined is he. His wealth will not avail him or that which he gained. He will [enter to] burn in a Fire of [blazing] flame. And his wife [as well] – the carrier of firewood. Around her neck is a rope of twisted fiber.',
      },
    },

    {
      title: {
        bn: 'সূরা নাসর',
        en: 'Surah An-Nasr',
      },
      arabic: `.إِذَا جَاءَ نَصْرُ ٱللَّهِ وَٱلْفَتْحُ.  وَرَأَيْتَ ٱلنَّاسَ يَدْخُلُونَ فِى دِينِ ٱللَّهِ أَفْوَاجًۭا
      فَسَبِّحْ بِحَمْدِ رَبِّكَ وَٱسْتَغْفِرْهُ ۚ إِنَّهُۥ كَانَ تَوَّابًۭا`,
      banglaPronunciation: `ইজা জা’আ নাসরুল্লাহি ওয়াল-ফাতহ। ওয়া রাআইতান্নাসা ইয়াদখুলূনা ফী দ্বীনিল্লাহি আফওয়াজা। ফাসাব্বিহ্ বিহামদি রাব্বিকা ওয়াস্‌তাগফিরহ্। ইন্নাহু কানা তওয়াবা।`,
      englishPronunciation: `Iza ja'a nasrullahi wal-fath. Wa ra'aytan-nasa yadkhuluna fi dinillahi afwaja. Fasabbih bihamdi rabbika wastaghfirh. Innahu kana tawwaba.`,
      meaning: {
        bn: 'যখন আল্লাহর সাহায্য ও বিজয় আসবে, এবং তুমি দেখবে মানুষ দলে দলে আল্লাহর দ্বীনে প্রবেশ করছে, তখন তোমার পালনকর্তার সপ্রশংস পবিত্রতা ঘোষণা কর এবং তাঁর নিকট ক্ষমা প্রার্থনা কর। নিশ্চয়ই তিনি তওবা কবুলকারী।',
        en: 'When the victory of Allah has come and the conquest, and you see the people entering into the religion of Allah in multitudes, then exalt [Him] with praise of your Lord and ask forgiveness of Him. Indeed, He is ever Accepting of repentance.',
      },
    },

    {
      title: {
        bn: 'সূরা কাফিরুন',
        en: 'Surah Al-Kafirun',
      },
      arabic: `.قُلْ يَـٰٓأَيُّهَا ٱلْكَـٰفِرُونَ.  لَا أَعْبُدُ مَا تَعْبُدُونَ. وَلَآ أَنتُمْ عَـٰبِدُونَ مَآ أَعْبُدُ
      وَلَآ أَنَا۠ عَابِدٌۭ مَّا عَبَدتُّمْ.  وَلَآ أَنتُمْ عَـٰبِدُونَ مَآ أَعْبُدُ.  لَكُمْ دِينُكُمْ وَلِىَ دِينِ`,
      banglaPronunciation: `কুল্ বা-আইয়্যুহাল কাফিরুন, লা আ'বুদু মা তা'বুদুন, ওয়ালা আনতুম 'আবিদিন মা আ'বুদ, ওয়ালা আনা 'আবিদুম মা 'আবাদতুম, ওয়ালা আনতুম 'আবিদিন মা আ'বুদ, লাকুম দীনুকুম ওয়ালিয়া দ্বীন।`,
      englishPronunciation: `Qul ya ayyuhal kafirun. La a'budu ma ta'budun. Wala antum 'abiduna ma a'bud. Wala ana 'abidum ma 'abadtum. Wala antum 'abiduna ma a'bud. Lakum deenukum waliya deen.`,
      meaning: {
        bn: 'বলুন, হে কাফিররা! আমি এবাদত করি না সেই বিষয়ের, যার এবাদত তোমরা করো। এবং তোমরাও এবাদতকারী নও তাঁর, যাঁর এবাদত আমি করি। আর আমি এবাদতকারী নই তাঁর, যাঁর এবাদত তোমরা করেছ। এবং তোমরাও এবাদতকারী নও তাঁর, যাঁর এবাদত আমি করি। তোমাদের জন্য তোমাদের ধর্ম, আর আমার জন্য আমার ধর্ম।',
        en: 'Say, "O disbelievers! I do not worship what you worship. Nor are you worshippers of what I worship. Nor will I be a worshipper of what you worship. Nor will you be worshippers of what I worship. For you is your religion, and for me is my religion."',
      },
    },

    {
      title: {
        bn: 'সূরা কাওসার',
        en: 'Surah Al-Kawthar',
      },
      arabic: `إِنَّآ أَعْطَيْنَـٰكَ ٱلْكَوْثَرَ.  فَصَلِّ لِرَبِّكَ وَٱنْحَرْ.  إِنَّ شَانِئَكَ هُوَ ٱلْأَبْتَرُ`,
      banglaPronunciation: `ইন্না আ'তইনাকাাল কাওসার, ফাসালি লি-রব্বিকা ওয়ানহার, ইন্না শানিইয়াকা হুয়াল আাবতার।`,
      englishPronunciation: `Inna a'tainaka al-kawthar. Fasalli li rabbika wanhar. Inna shani'aka huwal abtar.`,
      meaning: {
        bn: 'নিশ্চয়ই আমি আপনাকে কাওসার দান করেছি। অতএব আপনি আপনার পালনকর্তার উদ্দেশ্যে সালাত আদায় করুন ও কোরবানি করুন। নিশ্চয়ই আপনার শত্রুই নির্বংশ।',
        en: 'Indeed, We have granted you, [O Muhammad], al-Kawthar. So pray to your Lord and sacrifice [to Him alone]. Indeed, your enemy is the one cut off.',
      },
    },

    {
      title: {
        bn: 'সূরা মাউন',
        en: 'Surah Al-Ma\'un',
      },
      arabic: `أَرَأَيْتَ ٱلَّذِى يُكَذِّبُ بِٱلدِّينِ.  فَذَٰلِكَ ٱلَّذِى يَدُعُّ ٱلْيَتِيمَ.  وَلَا يَحُضُّ عَلَىٰ طَعَامِ ٱلْمِسْكِينِ.  فَوَيْلٌ لِّلْمُصَلِّينَ
      ٱلَّذِينَ هُمْ عَن صَلَاتِهِمْ سَاهُونَ.  ٱلَّذِينَ هُمْ يُرَآءُونَ  وَيَمْنَعُونَ ٱلْمَاعُونَ`,
      banglaPronunciation: `আরা'আইতাল্লাযি ইউকায্জিবু বিদ্দীন, ফাযালিকাল্লাযি ইয়াদু'উল-ইয়াতীম, ওয়ালা ইয়াহুদ্দু 'আলা তা'আমিল-মিসকীন, ফাওয়াইলুল্লিল-মুসল্লীন, আল্লাযীনাহুম 'আন সালাতিহিম সাহূন, আল্লাযীনাহুম ইউরাআউন, ওয়াইয়ামনাউনাল-মাউন।`,
      englishPronunciation: `Have you seen the one who denies the Recompense? That is the one who repulses the orphan and does not encourage the feeding of the poor. So woe to those who pray but are heedless of their prayer—those who make a show [of their deeds] and withhold [simple] assistance.`,
      meaning: {
        bn: 'আপনি কি তাকে দেখেছেন, যে ধর্মকে মিথ্যা বলে? সে তো সেই ব্যক্তি, যে এতিমকে ধাক্কা দেয় এবং মিসকীনকে খাদ্য দানে উৎসাহিত করে না। অতএব ধ্বংস তাদের জন্য, যারা নামাজ পড়ে, কিন্তু তারা নামাজে অমনোযোগী, যারা লোক দেখানোর জন্য তা করে এবং ছোটখাট সাহায্য দানে কৃপণতা করে।',
        en: 'Have you seen the one who denies the Recompense? For that is the one who drives away the orphan and does not encourage the feeding of the poor. So woe to those who pray but are heedless of their prayer—those who make a show [of their deeds] and withhold [simple] assistance.',
      },
    },

    {
      title: {
        bn: 'সূরা কুরাইশ',
        en: 'Surah Quraysh',
      },
      arabic: `.لِإِيلَافِ قُرَيْش  إِيلَافِهِمْ رِحْلَةَ الشِّتَاءِ وَالصَّيْفِ  فَلْيَعْبُدُوا رَبَّ هَٰذَا الْبَيْتِ
      ٱلَّذِى أَطْعَمَهُم مِّن جُوعٍۢ وَءَامَنَهُم مِّنْ خَوْفٍۢ`,
      banglaPronunciation: `লি-ইলাফি কুরাইশ, ইলাফিহিম রিহলাতাশ্-শিতায়ি ওয়াস্-সাইফ। ফালই'আবুদু রাব্বা হাযাল বাইত, আল্লাযী আত'আমাহুম মিন জু'ঈঁ ওয়া আমানাহুম মিন খাওফ।`,
      englishPronunciation: `For the accustomed security of the Quraysh — Their accustomed security [in] the caravan of winter and summer — Let them worship the Lord of this House, Who has fed them, [saving them] from hunger and made them safe from fear.`,
      meaning: {
        bn: 'কুরাইশের অভ্যস্ততা ও নিরাপত্তার জন্য — তাদের শীত ও গ্রীষ্মকালের সফরের নিরাপত্তার কারণে — তারা যেন এই ঘরের পালনকর্তার ইবাদত করে। যিনি তাদের ক্ষুধা থেকে আহার দিয়েছেন এবং ভয় থেকে নিরাপদ করেছেন।',
        en: 'For the accustomed security of the Quraysh — Their accustomed security in the caravan of winter and summer — Let them worship the Lord of this House, Who has fed them against hunger and secured them from fear.',
      },
    },

    {
      title: {
        bn: 'সূরা ফীল',
        en: 'Surah Al-Fil',
      },
      arabic: `.أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَٰبِ ٱلْفِيلِ.  أَلَمْ يَجْعَلْ كَيْدَهُمْ فِى تَضْلِيلٍ.  وَأَرْسَلَ عَلَيْهِمْ طَيْرًا أَبَابِيلَ
      تَرْمِيهِم بِحِجَارَةٍۢ مِّن سِجِّيلٍ.  فَجَعَلَهُمْ كَعَصْفٍۢ مَّأْكُولٍۢ`,
      banglaPronunciation: `আলাম তারা কাইফা ফা'আলা রাব্বুকা বিঅসহাবিল ফীল। আলাম ইয়াজ'আল কাইদাহুম ফী তাদলীল। ওয়া আরসালা আলাইহিম তইরান আবাবীল। তারমীহিম বিহিজারাতিম মিন সিজ্জীল। ফাজা'আলাহুম কা'আসফিম মা'কূল।`,
      englishPronunciation: `Have you not seen how your Lord dealt with the companions of the elephant? Did He not make their plan go astray? And He sent against them birds in flocks, Striking them with stones of hard clay, And made them like eaten straw.`,
      meaning: {
        bn: 'তুমি কি দেখোনি, তোমার পালনকর্তা হাতিওয়ালাদের সাথে কেমন আচরণ করেছিলেন? তিনি কি তাদের কৌশল ব্যর্থ করেননি? এবং তাদের ওপর ঝাঁকে ঝাঁকে পাখি প্রেরণ করেছিলেন, যারা তাদের ওপর নিক্ষেপ করেছিল পোড়ামাটির পাথর, অতঃপর তিনি তাদের করে দিয়েছিলেন ভক্ষিত তৃণসদৃশ।',
        en: 'Have you not seen how your Lord dealt with the companions of the elephant? Did He not make their plan go astray? And He sent against them birds in flocks, Striking them with stones of hard clay, And made them like eaten straw.',
      },
    },
  ];


  return (
    <motion.div
      className="bg-white py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-14"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-emerald-700 border-b-4 border-emerald-200 inline-block pb-2">
          {language === 'bn' ? '📖 ছোট সূরা সমূহ' : '📖 Short Surahs'}
        </h2>
      </motion.div>

      <div className="space-y-10">
        {surahs.map((surah, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-emerald-50 to-white border-l-4 border-emerald-500 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-emerald-700 mb-4 border-b border-emerald-300 pb-2">
              {surah.title[language]}
            </h3>

            <div className="mb-4">
              <p className="text-right text-3xl text-gray-800 font-arabic whitespace-pre-line leading-loose">
                {surah.arabic}
              </p>
            </div>

            <div className="mb-3">
              <p className="text-gray-700 whitespace-pre-line text-[16px] leading-relaxed">
                <span className="font-bold text-emerald-800">
                  {language === 'bn' ? 'উচ্চারণ:' : 'Pronunciation:'}
                </span>{' '}
                {language === 'bn' ? surah.banglaPronunciation : surah.englishPronunciation}
              </p>
            </div>

            <div>
              <p className="text-gray-600 text-sm italic">
                <span className="font-bold text-emerald-600">
                  {language === 'bn' ? 'অর্থ:' : 'Meaning:'}
                </span>{' '}
                {surah.meaning[language]}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default SurahSection;

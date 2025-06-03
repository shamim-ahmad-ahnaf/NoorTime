import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Info } from 'lucide-react';
import { useLanguage } from '../Context/LanguageContext';

const Privacy = () => {
  const { language } = useLanguage();

  const policies = {
    bn: [
      {
        id: 1,
        title: "তথ্য সংগ্রহ",
        description: "আমরা ব্যবহারকারীর ব্যক্তিগত তথ্য সংগ্রহ করি না, যতক্ষণ না আপনি নিজে থেকে তা প্রদান করেন।",
      },
      {
        id: 2,
        title: "তথ্যের ব্যবহার",
        description: "আপনার তথ্য শুধুমাত্র আমাদের অ্যাপ্লিকেশনের উন্নয়ন ও ফিচার উন্নত করতে ব্যবহৃত হয়। আমরা তথ্য বিক্রি করি না।",
      },
      {
        id: 3,
        title: "তৃতীয় পক্ষ",
        description: "আমরা কোনো তৃতীয় পক্ষের সঙ্গে আপনার তথ্য ভাগ করি না।",
      },
      {
        id: 4,
        title: "নিরাপত্তা",
        description: "আপনার তথ্য নিরাপদে সংরক্ষণ করা হয় এবং তা রক্ষা করার জন্য আধুনিক নিরাপত্তা প্রযুক্তি ব্যবহৃত হয়।",
      },
      {
        id: 5,
        title: "কুকিজ এবং ট্র্যাকিং",
        description: "আমরা শুধুমাত্র কুকিজ ব্যবহার করি সাইটের কার্যকারিতা উন্নত করার জন্য, ব্যক্তিগত তথ্য সংগ্রহের জন্য নয়।",
      },
      {
        id: 6,
        title: "ব্যবহারকারীর অধিকার",
        description: "আপনি যেকোনো সময়ে আপনার তথ্য দেখতে, সংশোধন করতে অথবা মুছে ফেলতে আমাদের সাথে যোগাযোগ করতে পারেন।",
      },
      {
        id: 7,
        title: "সেবা বন্ধ বা পরিবর্তন",
        description: "আমরা যেকোনো সময় আমাদের সেবার নীতিমালা পরিবর্তন বা সেবা বন্ধ করার অধিকার সংরক্ষণ করি।",
      },
      {
        id: 8,
        title: "নীতিমালার পরিবর্তন",
        description: "আমরা প্রয়োজনে এই নীতিমালা আপডেট করতে পারি এবং তা এই পেইজে প্রকাশ করা হবে।",
      },
    ],
    en: [
      {
        id: 1,
        title: "Data Collection",
        description: "We do not collect personal information unless you voluntarily provide it.",
      },
      {
        id: 2,
        title: "Use of Information",
        description: "Your information is only used to improve our app and its features. We do not sell data.",
      },
      {
        id: 3,
        title: "Third Parties",
        description: "We do not share your information with any third parties.",
      },
      {
        id: 4,
        title: "Security",
        description: "Your data is stored securely using modern security technologies.",
      },
      {
        id: 5,
        title: "Cookies and Tracking",
        description: "We only use cookies to improve site functionality, not to collect personal information.",
      },
      {
        id: 6,
        title: "User Rights",
        description: "You can contact us anytime to view, correct, or delete your personal data.",
      },
      {
        id: 7,
        title: "Service Changes",
        description: "We reserve the right to change or discontinue our services at any time.",
      },
      {
        id: 8,
        title: "Policy Updates",
        description: "We may update this policy and display changes on this page.",
      },
    ]
  };

  const currentPolicies = language === 'bn' ? policies.bn : policies.en;
  const pageTitle = language === 'bn' ? 'প্রাইভেসি নীতিমালা' : 'Privacy Policy';
  const subTitle = language === 'bn' ? 'আমরা আপনার গোপনীয়তা রক্ষা করতে প্রতিশ্রুতিবদ্ধ।' : 'We are committed to protecting your privacy.';
  const lastUpdated = language === 'bn' ? 'সর্বশেষ হালনাগাদ: ৩ জুন, ২০২৫' : 'Last Updated: June 3, 2025';

  return (
    
    <div className="min-h-screen px-6 py-12 flex justify-center items-start">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="max-w-4xl w-full  rounded-3xl  p-10"
      >
        <div className="text-center mb-10">
          <ShieldCheck className="mx-auto mb-4 w-16 h-16 text-green-600" />
          <h1 className="text-4xl font-extrabold text-green-700">{pageTitle}</h1>
          <p className="mt-3 text-lg text-gray-600">{subTitle}</p>
        </div>

        <div className="space-y-8 text-gray-800 text-lg leading-relaxed">
          {currentPolicies.map(({ id, title, description }) => (
            <section key={id} className="border-l-4 border-green-500 pl-5">
              <h2 className="flex items-center text-2xl font-semibold text-green-800 mb-3">
                <Info className="mr-3 w-6 h-6 text-green-600" />
                {title}
              </h2>
              <p>{description}</p>
            </section>
          ))}
        </div>

        <p className="mt-12 text-center text-gray-400 text-sm">{lastUpdated}</p>
      </motion.div>
    </div>
  );
};

export default Privacy;

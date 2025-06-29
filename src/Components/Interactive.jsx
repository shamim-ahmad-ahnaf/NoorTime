import React, { useState, useEffect, useRef } from "react";
import RevealOnScroll from "../Context/RevealOnScroll";

const quizTopics = {
  "🧠 স্রষ্টা ও সৃষ্টি": [
    { question: "আল্লাহর সৃষ্ট প্রথম জিনিস কোনটি?", options: ["নূর", "কলম", "আরশ"], answer: 1 },
    { question: "সৃষ্টির সেরা কে?", options: ["ফেরেশতা", "মানবজাতি", "জিন"], answer: 1 },
    { question: "আল্লাহ কেমন?", options: ["মানবের মতো", "অদৃশ্য ও অনুপম", "জিনের মতো"], answer: 1 },
    { question: "কলমের মাধ্যমে কি সৃষ্ট হয়েছিল?", options: ["জীব", "নূর", "জ্ঞান"], answer: 2 },
    { question: "আল্লাহর সৃষ্টির কোনটি প্রথম?", options: ["আলাক", "কলম", "আকাশ"], answer: 1 },
    { question: "সৃষ্টির মধ্যে মানবের স্থান কী?", options: ["সেরা", "দ্বিতীয়", "তৃতীয়"], answer: 0 },
    { question: "আল্লাহর অদৃশ্য ও অনুপম গুণ কোনটি?", options: ["মানবসদৃশ", "অনন্ত ও অসীম", "অস্থির ও পরিবর্তনশীল"], answer: 1 },
  ],

  "📜 নবি ও রাসূল": [
    { question: "কতজন নবী পাঠানো হয়েছে?", options: ["১ লক্ষ ২৪ হাজার", "২৫ জন", "৩১৩ জন"], answer: 0 },
    { question: "শেষ রাসূল কে ছিলেন?", options: ["ইসা আ: ", "মূসা আ:", "মুহাম্মদ ﷺ"], answer: 2 },
    { question: "মূসা আঃ কোন কিতাব পেয়েছিলেন?", options: ["যবুর", "তাওরাত", "ইঞ্জিল"], answer: 1 },
    { question: "নবীদের কতজনের নাম কোরআনে এসেছে?", options: ["২৫", "৩০", "৫০"], answer: 0 },
    { question: "মুহাম্মদ ﷺ কত বছর নবুয়ত লাভ করেন?", options: ["২৩ বছর", "৪০ বছর", "৩০ বছর"], answer: 0 },
    { question: "ইসা আঃ কিসের মাধ্যমে জন্মগ্রহণ করেন?", options: ["মানব পিতার মাধ্যমে", "মাতার মাধ্যমে", "বিনা পিতা ও মাতার মাধ্যমে"], answer: 2 },
    { question: "নবী হযরত ইউনুস আঃ কোন প্রাণীর পেটে ছিলেন?", options: ["সিংহ", "মাছ", "বাঘ"], answer: 1 },
  ],

  "👼 ফেরেশতা ও জিন": [
    { question: "জিবরাইল আঃ এর দায়িত্ব কী ছিল?", options: ["রিযিক পৌঁছানো", "ওহি নিয়ে আসা", "মৃত্যু গ্রহণ"], answer: 1 },
    { question: "ইবলিস কী ছিলেন?", options: ["মানুষ", "ফেরেশতা", "জিন"], answer: 2 },
    { question: "মালাকুল মাওত কাকে বলা হয়?", options: ["জিবরাইল", "আজরাঈল", "মিকাঈল"], answer: 1 },
    { question: "ফেরেশতাদের সৃষ্টি কি উপাদান থেকে?", options: ["আলোর", "মাটির", "আগুনের"], answer: 0 },
    { question: "জিনের সৃষ্টি কী থেকে?", options: ["আগুনের", "পানির", "মাটির"], answer: 0 },
    { question: "ইবলিস কেন সিজদা করেনি?", options: ["অহংকারে", "ভয়ের কারণে", "আদেশ ভুলে গিয়েছিল"], answer: 0 },
    { question: "মালাকুল মাওতের কাজ কী?", options: ["জীবনের স্রোত বজায় রাখা", "মৃত্যু গ্রহণ", "মানুষকে রক্ষা করা"], answer: 1 },
  ],

  "🕌 সাহাবা ও মনিষী": [
    { question: "প্রথম খলিফা কে ছিলেন?", options: ["উমর রা:", "আবু বকর রা:", "ওসমান রা:"], answer: 1 },
    { question: "কে রাসূল ﷺ এর ঘনিষ্ঠ বন্ধু ছিলেন?", options: ["উমর রা:", "আবু বকর রা:", "আলী রা:"], answer: 1 },
    { question: "ইমাম আবু হানিফা কোথায় জন্মগ্রহণ করেন?", options: ["বাগদাদ", "কুফা", "মক্কা"], answer: 1 },
    { question: "খলিফা ওসমান রা: কোন কিতাবের সংকলক ছিলেন?", options: ["কোরআন", "হাদিস", "তাওরাত"], answer: 0 },
    { question: "সাহাবাদের মধ্যে প্রথম শহীদ কে?", options: ["উসমান রা:", "হামজা রা:", "বিলাল রা:"], answer: 1 },
    { question: "আলী রা: কোন যুদ্ধের সময় শহীদ হন?", options: ["কুয়াদ যুদ্ধ", "বদর যুদ্ধ", "খন্দক যুদ্ধ"], answer: 0 },
    { question: "সাহাবাদের মধ্যে কাদেরকে 'আশহাবুশ শূরা' বলা হয়?", options: ["দ্বাদশ খলিফারা", "রাসূলের পরামর্শদাতা", "যুদ্ধের সৈনিক"], answer: 1 },
  ],

  "🧭 ইমান ও আকিদা": [
    { question: "ইমানের কতটি রুকন আছে?", options: ["৩টি", "৫টি", "৬টি"], answer: 2 },
    { question: "আকিদা বলতে কী বোঝায়?", options: ["বিশ্বাস", "ইবাদত", "আচার"], answer: 0 },
    { question: "আল্লাহর গুণবাচক নাম কতটি?", options: ["৯৯টি", "১০০টি", "৯৫টি"], answer: 0 },
    { question: "ইমানের সবচেয়ে গুরুত্বপূর্ণ রুকন কোনটি?", options: ["তাওহিদ", "নবী মান্যতা", "কিয়ামত"], answer: 0 },
    { question: "মালাইকাগণ বিশ্বাস ইমানের কোন রুকন?", options: ["২য়", "৩য়", "৪র্থ"], answer: 2 },
    { question: "ইমান কি শুধু ভাষাগত স্বীকারোক্তি?", options: ["হ্যাঁ", "না", "মাঝেমধ্যে"], answer: 1 },
    { question: "আকিদার প্রধান উৎস কী?", options: ["কোরআন ও হাদিস", "ঐতিহ্য", "মানব সভ্যতা"], answer: 0 },
  ],

  "📖 কোরআন ও হাদিস": [
    { question: "কোরআন কে অবতীর্ণ করেছেন?", options: ["জিবরাইল আ:", "মুহাম্মদ ﷺ", "আল্লাহ"], answer: 2 },
    { question: "হাদিসের সবচেয়ে প্রসিদ্ধ সংকলন কোনটি?", options: ["সহীহ বুখারী", "তিরমিযী", "নাসাঈ"], answer: 0 },
    { question: "কোরআন কী ভাষায় নাজিল হয়েছে?", options: ["আরবি", "ফারসি", "হিব্রু"], answer: 0 },
    { question: "কোরআনের মোট আয়াতের সংখ্যা কত?", options: ["৬২৩৬", "৬৪৩৬", "৬৫০০"], answer: 0 },
    { question: "কোরআনে সর্বপ্রথম অবতীর্ণ আয়াত কোন সূরার?", options: ["সূরা আলাক", "সূরা ফাতিহা", "সূরা বাকারা"], answer: 0 },
    { question: "হাদিস সংকলক ইমাম বুখারীর পূর্ণ নাম কী?", options: ["মুহাম্মদ ইবনে ইসмаয়িল", "মুহাম্মদ ইবনে মারওয়ান", "মুহাম্মদ ইবনে আব্দুল্লাহ"], answer: 0 },
    { question: "কোরআন নাজিল হওয়ার সময় কত বছর সময় লেগেছিল?", options: ["২৩ বছর", "১৩ বছর", "৩০ বছর"], answer: 0 },
  ],

  "🕋 নামাজ ও রোজা": [
    { question: "নামাজের ফরজ রাকাত কয়টি?", options: ["১৫", "১৭", "২০"], answer: 1 },
    { question: "রোজা রাখা ফরজ হয় কোন মাসে?", options: ["মুহাররম", "রজব", "রমজান"], answer: 2 },
    { question: "রোজার নিয়ত কখন করতে হয়?", options: ["ইফতারের সময়", "সেহরির সময়", "নামাজের সময়"], answer: 1 },
    { question: "কাদের জন্য রোজা রাখা ফরজ নয়?", options: ["বাচ্চাদের", "পাগলদের", "বৃদ্ধদের"], answer: 1 },
    { question: "নামাজের আগে জামাত আদায় করার নাম কি?", options: ["ফজর", "যোহর", "আসর"], answer: 0 },
    { question: "সূর্যোদয়ের আগে নামাজের নাম কী?", options: ["তাহজুদ", "ফজর", "দুআ"], answer: 1 },
    { question: "ঈদুল ফিতরের দিন কোন নামাজ আদায় করা হয়?", options: ["ঈদ নামাজ", "জুমা নামাজ", "তেহাজ্জুদ নামাজ"], answer: 0 },
  ],

  "🤲 দোয়া ও মাসায়েল": [
    { question: "ইফতারের সময় কোন দোয়া পড়া হয়?", options: ["اللهم لك صمت", "سبحان الله", "الحمد لله"], answer: 0 },
    { question: "মাসায়েল বলতে কী বোঝায়?", options: ["সমস্যা ও সমাধান", "ইবাদত", "স্মরণ"], answer: 0 },
    { question: "ঋতুবতী মহিলার নামাজ পড়া কি জরুরি?", options: ["হ্যাঁ", "না", "মাঝে মাঝে"], answer: 1 },
    { question: "দোয়া কবুল হওয়ার প্রধান শর্ত কী?", options: ["বিশ্বাস ও ভরসা", "দ্রুত পড়া", "উচ্চ কণ্ঠে পড়া"], answer: 0 },
    { question: "নামাজের পরে কোন দোয়া পড়া উত্তম?", options: ["আস্তাগফিরুল্লাহ", "দোয়া", "তাহলীল"], answer: 1 },
    { question: "দোয়া বেশি কবুল হয় কখন?", options: ["রাতের শেষ অংশে", "জুমার দিন", "ঈদের দিন"], answer: 0 },
    { question: "ইফতারের সময় কোন দোয়া পড়া হয়?", options: ["اللهم لك صمت", "سبحان الله", "الحمد لله"], answer: 0 },
  ],

  "⚰️ কবর ও আখিরাত": [
    { question: "কবর প্রশ্ন কে করে?", options: ["মানুষ", "ফেরেশতা", "জিন"], answer: 1 },
    { question: "কে জান্নাত ও জাহান্নামের ফয়সালা দেবেন?", options: ["নবী", "আল্লাহ", "ফেরেশতা"], answer: 1 },
    { question: "পুনরুত্থান হবে কবে?", options: ["কেয়ামতের দিন", "জানাজার সময়", "জুমার দিন"], answer: 0 },
    { question: "কবরের মাজারে তাবু স্থাপন করা যাবে কি?", options: ["হ্যাঁ", "না", "শর্তসাপেক্ষে"], answer: 1 },
    { question: "আখিরাতে নেকামতদের পুরস্কার কী?", options: ["জান্নাত", "জাহান্নাম", "ফেরেশতাদের সঙ্গ"], answer: 0 },
    { question: "জান্নাতের দরজা কয়টি?", options: ["৭", "৫", "১০"], answer: 0 },
    { question: "মুমিনের মৃত্যু পরবর্তী অবস্থা কী?", options: ["কবরের জীবন", "পৃথিবীতে ফিরে আসা", "সরাসরি জান্নাতে যাওয়া"], answer: 0 },
  ],

  "🏞️ জান্নাত ও জাহান্নাম": [
    { question: "জান্নাতিদের প্রথম খাবার কী হবে?", options: ["মধু", "মাছের কলিজা", "দুধ"], answer: 1 },
    { question: "জাহান্নামের পাহারাদার ফেরেশতা কে?", options: ["আজরাঈল", "মালিক", "মুনকার"], answer: 1 },
    { question: "জান্নাতে প্রবেশ করবে কারা?", options: ["ধনী লোকেরা", "আল্লাহভীরু মুমিনরা", "সব মুসলিম"], answer: 1 },
    { question: "জান্নাতের বর্ণনা কোথায় পাওয়া যায়?", options: ["কোরআন ও হাদিস", "ইতিহাসের বই", "লোককথা"], answer: 0 },
    { question: "জান্নাতের সবচেয়ে বড় উপহার কী?", options: ["আল্লাহর সন্তুষ্টি", "ধন-সম্পদ", "রাজত্ব"], answer: 0 },
    { question: "জাহান্নাম থেকে মুক্তির উপায় কী?", options: ["তাওবা ও ইমান", "জাদু", "যুদ্ধ"], answer: 0 },
    { question: "জান্নাতের কোন গুণাবলি সবচেয়ে বেশি প্রশংসিত?", options: ["চিরস্থায়িত্ব", "সৌন্দর্য", "শান্তি"], answer: 0 },
  ]
};


function Quiz({ questions, onClose }) {
  const [currentQ, setCurrentQ] = React.useState(0);
  const [selected, setSelected] = React.useState(null);
  const [score, setScore] = React.useState(0);
  const [showScore, setShowScore] = React.useState(false);
  const [timeLeft, setTimeLeft] = React.useState(15);
  const timerRef = React.useRef();

  React.useEffect(() => {
    if (showScore) return;
    if (timeLeft === 0) {
      handleNext();
      return;
    }
    timerRef.current = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timerRef.current);
  }, [timeLeft, showScore]);

  const handleAnswer = (index) => {
    if (selected === null) {
      setSelected(index);
      if (index === questions[currentQ].answer) {
        setScore(score + 1);
      }
      // ১ সেকেন্ড অপেক্ষা করে পরবর্তী প্রশ্নে যাবে
      setTimeout(() => {
        handleNext();
      }, 100);
    }
  };

  const handleNext = () => {
    setSelected(null);
    setTimeLeft(15);
    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQ(0);
    setSelected(null);
    setScore(0);
    setShowScore(false);
    setTimeLeft(15);
  };

  return (
     <RevealOnScroll>
    <div className="max-w-xl mx-auto bg-white rounded-lg p-6 shadow-lg relative">
      <button
        className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl"
        onClick={onClose}
        aria-label="Close Quiz"
      >
        &times;
      </button>

      {!showScore ? (
        <>
          <h3 className="text-2xl font-bold text-green-700 mb-4">
            প্রশ্ন {currentQ + 1} / {questions.length}
          </h3>
          <p className="mb-4 text-gray-800">{questions[currentQ].question}</p>

          <div className="space-y-3">
            {questions[currentQ].options.map((opt, i) => {
              const isCorrect = i === questions[currentQ].answer;
              const isSelected = i === selected;

              let bgColor = "bg-white hover:bg-green-100";
              if (selected !== null) {
                if (isCorrect) bgColor = "bg-green-300";
                else if (isSelected) bgColor = "bg-red-300";
                else bgColor = "bg-white";
              }

              return (
                <button
                  key={i}
                  disabled={selected !== null}
                  onClick={() => handleAnswer(i)}
                  className={`w-full text-left px-4 py-2 rounded border border-gray-300 transition ${bgColor}`}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          <div className="flex justify-between items-center mt-6">
            <div className="text-lg font-semibold text-gray-700">
              সময় বাকি: <span className="text-red-600">{timeLeft}s</span>
            </div>
           
          </div>
        </>
      ) : (
        <div className="text-center">
          <h3 className="text-3xl font-bold text-green-700 mb-6">কুইজ শেষ</h3>
          <p className="text-lg mb-4">
            আপনার স্কোর: {score} / {questions.length}
          </p>
          <button
            onClick={restartQuiz}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded"
          >
            আবার চেষ্টা করুন
          </button>
        </div>
      )}
    </div>
    </RevealOnScroll>
  );
}

export default function IslamicQuizPage() {
  const [activeTopic, setActiveTopic] = useState(null);

  return (
      <RevealOnScroll>
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-50 px-4 py-10 mt-16">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-green-700 mb-12">
        📚 ইসলামিক কুইজ সেন্টার
      </h1>

      {!activeTopic ? (
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {Object.keys(quizTopics).map((topic, idx) => (
            <div
              key={idx}
              onClick={() => setActiveTopic(topic)}
              className="bg-white border border-green-600 hover:border-green-400 shadow hover:shadow-xl transition-all duration-300 rounded-2xl p-6 cursor-pointer group"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-green-700 group-hover:text-green-800 transition">
                {topic}
              </h2>
              <p className="text-sm text-gray-500 mt-2">
                এই বিষয়ের প্রশ্নে নিজের জ্ঞান যাচাই করুন।
              </p>
              <div className="mt-4 text-sm text-green-600 group-hover:underline">
                👉 শুরু করুন
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Quiz
          questions={quizTopics[activeTopic]}
          onClose={() => setActiveTopic(null)}
        />
      )}
    </div>
    </RevealOnScroll>
  );
}

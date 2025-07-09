import { useState, useEffect } from "react";
import RevealOnScroll from "../Context/RevealOnScroll";

const books = [
    {
        id: 5,
        title: "কুরআন মজিদ (বাংলা অনুবাদ)",
        author: "তাফসীরসহ বাংলা অনুবাদ",
        description: "আল কুরআনের সহজবোধ্য বাংলা অনুবাদসহ সংস্করণ।",
        link: "https://www.quraanshareef.org/",
        category: "কুরআন"
    },
    {
        id: 1,
        title: "রিয়াদুস সালেহিন",
        author: "ইমাম নববী (রহ.)",
        description: "হাদীস সংকলনের অন্যতম বিখ্যাত কিতাব। দ্বীনের নানান দিক নির্দেশনা রয়েছে।",
        link: "https://www.hadithbd.com/hadith/chapter/?book=3",
        category: "হাদীস",
    },
    {
        id: 2,
        title: "তাফসীর ইবনে কাসীর",
        author: "ইমাম ইবনে কাসীর (রহ.)",
        description: "কুরআনের ব্যাখ্যা নিয়ে সেরা গ্রন্থগুলোর মধ্যে একটি।",
        link: "https://archive.org/details/TafseerIbnKathirRevisedEdition",
        category: "তাফসীর",
    },
    {
        id: 3,
        title: "মা'আরিফুল হাদীস",
        author: "মাওলানা আশরাফ আলী থানভী (রহ.)",
        description: "ছোট ছোট হাদীস ও তার ব্যাখ্যা নিয়ে রচিত অত্যন্ত জনপ্রিয় একটি বই।",
        link: "/books/arf-ul-hadis.pdf",
        category: "হাদীস",
    },
    {
        id: 4,
        title: "ফিকহুস সুন্নাহ",
        author: "সাইয়্যেদ সাবিক (রহ.)",
        description: "সুন্নাহভিত্তিক ফিকহ বই যা বাস্তব জীবনের প্রয়োজনীয় বিষয়ে লেখা।",
        link: "/books/fiqh-us-sunnah.pdf",
        category: "ফিকহ",
    },
];

export default function IslamicLibraryPage() {
    const [search, setSearch] = useState("");
    const [savedBooks, setSavedBooks] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("সব");
    const [currentPage, setCurrentPage] = useState(1);
    const [ratings, setRatings] = useState({});
    const [progress, setProgress] = useState({});
    const [comments, setComments] = useState({});
    const [tempComments, setTempComments] = useState({});
    const booksPerPage = 3;

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("savedBooks")) || [];
        const savedComments = JSON.parse(localStorage.getItem("bookComments")) || {};
        const savedRatings = JSON.parse(localStorage.getItem("bookRatings")) || {};
        const savedProgress = JSON.parse(localStorage.getItem("bookProgress")) || {};
        setSavedBooks(saved);
        setComments(savedComments);
        setTempComments(savedComments);
        setRatings(savedRatings);
        setProgress(savedProgress);
    }, []);

    const toggleSave = (bookId) => {
        let updated;
        if (savedBooks.includes(bookId)) {
            updated = savedBooks.filter((id) => id !== bookId);
        } else {
            updated = [...savedBooks, bookId];
        }
        setSavedBooks(updated);
        localStorage.setItem("savedBooks", JSON.stringify(updated));
    };

    const handleRating = (bookId, value) => {
        const updated = { ...ratings, [bookId]: value };
        setRatings(updated);
        localStorage.setItem("bookRatings", JSON.stringify(updated));
    };

    const handleProgress = (bookId, value) => {
        const updated = { ...progress, [bookId]: value };
        setProgress(updated);
        localStorage.setItem("bookProgress", JSON.stringify(updated));
    };

    const handleTempCommentChange = (bookId, text) => {
        setTempComments((prev) => ({ ...prev, [bookId]: text }));
    };

    const saveComment = (bookId) => {
        const newComment = tempComments[bookId] || "";
        const updated = { ...comments, [bookId]: newComment };
        setComments(updated);
        localStorage.setItem("bookComments", JSON.stringify(updated));
        setTempComments((prev) => ({ ...prev, [bookId]: "" }));
    };

    const filteredBooks = books.filter((book) => {
        const matchesSearch =
            book.title.toLowerCase().includes(search.toLowerCase()) ||
            book.author.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = selectedCategory === "সব" || book.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const totalPages = Math.ceil(filteredBooks.length / booksPerPage);
    const startIndex = (currentPage - 1) * booksPerPage;
    const currentBooks = filteredBooks.slice(startIndex, startIndex + booksPerPage);
    const categories = ["সব", ...new Set(books.map((book) => book.category))];

    return (
        <RevealOnScroll>
        <div className="min-h-screen bg-green-50 px-4 py-12 mt-20">
            <h1 className="text-4xl font-bold text-center text-green-700 mb-8">📚 ইসলামিক লাইব্রেরি</h1>

            <div className="max-w-2xl mx-auto mb-6">
                <input
                    type="text"
                    placeholder="বই খুঁজুন..."
                    className="w-full px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                        setCurrentPage(1);
                    }}
                />
            </div>

            <div className="flex flex-wrap gap-2 justify-center mb-8">
                {categories.map((cat, i) => (
                    <button
                        key={i}
                        onClick={() => {
                            setSelectedCategory(cat);
                            setCurrentPage(1);
                        }}
                        className={`px-4 py-2 rounded-full border ${selectedCategory === cat
                            ? "bg-green-600 text-white border-green-600"
                            : "bg-white text-green-700 border-green-300"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {currentBooks.map((book) => (
                    <div key={book.id} className="bg-white rounded-lg shadow hover:shadow-xl transition p-6 border border-green-100">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-semibold text-green-700">{book.title}</h3>
                            <button
                                onClick={() => toggleSave(book.id)}
                                className={`text-sm px-2 py-1 rounded ${savedBooks.includes(book.id) ? "bg-green-600 text-white" : "bg-gray-200 text-gray-700"
                                    }`}
>
                                {savedBooks.includes(book.id) ? "✔️ সংরক্ষিত" : "📌 সংরক্ষণ করুন"}
                            </button>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">✍️ লেখক: {book.author}</p>
                        <p className="text-sm text-gray-700 mb-4">{book.description}</p>
                        <a
                            href={book.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded mb-2"
                        >
                            📖 বই পড়ুন
                        </a>

                        <div className="mt-2">
                            <label className="block text-sm text-gray-600">⭐ রেটিং দিন:</label>
                            {[1, 2, 3, 4, 5].map((num) => (
                                <button
                                    key={num}
                                    onClick={() => handleRating(book.id, num)}
                                    className={`text-xl ${ratings[book.id] >= num ? "text-yellow-500" : "text-gray-300"}`}
                                >
                                    ★
                                </button>
                            ))}
                        </div>

                        <div className="mt-2">
                            <label className="block text-sm text-gray-600">📊 কতদূর পড়েছেন:</label>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={progress[book.id] || 0}
                                onChange={(e) => handleProgress(book.id, e.target.value)}
                                className="w-full"
                            />
                            <p className="text-sm text-gray-500">{progress[book.id] || 0}% সম্পন্ন</p>
                        </div>

                        <div className="mt-2">
                            <label className="block text-sm text-gray-600">💬 মন্তব্য:</label>
                            <textarea
                                rows="2"
                                value={tempComments[book.id] || ""}
                                onChange={(e) => handleTempCommentChange(book.id, e.target.value)}
                                placeholder="আপনার মন্তব্য লিখুন..."
                                className="w-full border rounded p-2 mt-1"
                            ></textarea>
                            <button
                                onClick={() => saveComment(book.id)}
                                className="mt-2 bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded"
                            >
                                💾মন্তব্য প্রেরণ করুন
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {totalPages > 1 && (
                <div className="flex justify-center gap-2 mt-8">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                        <button
                            key={num}
                            onClick={() => setCurrentPage(num)}
                            className={`px-4 py-2 rounded-full border ${currentPage === num
                                ? "bg-green-600 text-white border-green-600"
                                : "bg-white text-green-700 border-green-300"
                                }`}
                        >
                            {num}
                        </button>
                    ))}
                </div>
            )}

            {savedBooks.length > 0 && (
                <div className="max-w-6xl mx-auto mt-12">
                    <h2 className="text-2xl font-semibold text-green-700 mb-4 text-center">📌 সংরক্ষিত বইসমূহ</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {books
                            .filter((book) => savedBooks.includes(book.id))
                            .map((book) => (
                                <div key={book.id} className="bg-white rounded-lg shadow p-4 border border-green-100 relative">
                                    <button
                                        onClick={() => toggleSave(book.id)}
                                        className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white rounded px-3 py-1 text-sm font-semibold shadow"
                                        title="মুছুন"
                                        aria-label="মুছুন"
                                    >
                                       ❌ মুছে ফেলুন
                                    </button>
                                    <h3 className="text-lg font-bold text-green-700 mb-4">{book.title}</h3>
                                    <p className="text-sm text-gray-600 mb-1">✍️ লেখক: {book.author}</p>
                                    <p className="text-sm text-gray-700 mb-2">{book.description}</p>
                                    <a
                                        href={book.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                                    >
                                        📖 বই পড়ুন
                                    </a>
                                    {comments[book.id] && (
                                        <p className="mt-2 text-sm text-gray-600">
                                            💬 মন্তব্য: <span className="font-medium">{comments[book.id]}</span>
                                        </p>
                                    )}
                                </div>
                            ))}
                    </div>
                </div>
            )}
        </div>
        </RevealOnScroll>
    );
}

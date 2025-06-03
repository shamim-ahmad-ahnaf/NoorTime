import { useState } from "react";
import RevealOnScroll from "../Context/RevealOnScroll";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading modal
    const formData = new FormData(e.target);

    formData.append("access_key", "38df47ed-4efc-4a52-932b-9b24ea8c48a0");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    setLoading(false); // Hide loading modal

    if (res.success) {
      setSubmitted(true);
    } else {
      alert("Something went wrong. Please try again.");
      console.error("Submission failed:", res);
    }
  };

  return (
    <RevealOnScroll>
    <section className="py-16 px-6 mt-0 relative">
      {/* ✅ Loading Popup */}
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full backdrop-blur-xl bg bg-opacity-40 z-50 flex items-center justify-center">
          <div className="bg-white border border-green-600 p-8 rounded-md flex flex-col items-center shadow-lg">
            <svg className="animate-spin h-10 w-10 text-green-600 mb-4" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
              ></path>
            </svg>
            <p className="text-green-700 font-semibold text-lg">Sending Message...</p>
          </div>
        </div>
      )}

      <div className="max-w-8xl mx-auto rounded-lg p-10 flex flex-col md:flex-row gap-10">
        {/* Left side: Contact Form */}
        <div className="flex-1">
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="w-full space-y-4 border border-green-300 p-6 rounded-lg bg-white shadow-md"
            >
              <h2 className="text-4xl font-semibold mb-8 text-green-700 font-sans text-center md:text-left">
                Get in Touch
              </h2>

              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-green-800">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="w-full rounded-md border border-green-300 px-4 py-3 placeholder-green-400 focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-green-800">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="w-full rounded-md border border-green-300 px-4 py-3 placeholder-green-400 focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-green-800">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  placeholder="Write your message..."
                  className="w-full rounded-md border border-green-300 px-4 py-3 placeholder-green-400 resize-y focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-md font-semibold tracking-wide hover:bg-green-700 transition"
              >
                Send Message
              </button>
            </form>
          ) : (
            <p className="text-center py-10 text-green-700 text-2xl font-semibold">
              ✅ Thanks for reaching out! We'll get back to you soon.
            </p>
          )}
        </div>

        {/* Right side: Contact Info & Social Icons */}
        <div className="md:basis-1/3 rounded-lg p-8 mt-8 flex flex-col">
          <h3 className="text-2xl font-semibold mb-6 text-green-800">Contact Info</h3>
          <div className="flex items-center mb-4 text-green-700">
            <FaPhoneAlt className="mr-3 text-xl" />
            <a href="tel:+8801748186766" className="hover:underline">
              +880 1748186766
            </a>

          </div>
          <div className="flex items-center mb-4 text-green-700">
            <FaEnvelope className="mr-3 text-xl" />
            <a href="mailto:shamimahmadahnaf@gmail.com" className="hover:underline">
              shamimahmadahnaf@gmail.com
            </a>

          </div>
          <div className="flex items-center mb-8 text-green-700">
            <FaMapMarkerAlt className="mr-3 text-xl" />
            <span>Kapasia, Gazipur, Bangladesh</span>
          </div>

          <div className="flex space-x-6 text-green-700 text-2xl">
            <a
              href="https://www.facebook.com/profile.php?id=100092273649975&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-green-900 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/in/shamim-ahmad-772484331"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-green-900 transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </section>
    </RevealOnScroll>
  );
}

import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-16 px-6 mt-0">
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
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-green-800"
                >
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
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-green-800"
                >
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
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-green-800"
                >
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
              Thanks for reaching out! We'll get back to you soon.
            </p>
          )}
        </div>

        {/* Right side: Contact Info & Social Icons */}
        <div className="md:basis-1/3 rounded-lg p-8 mt-8 flex flex-col">
          <h3 className="text-2xl font-semibold mb-6 text-green-800">
            Contact Info
          </h3>
          <div className="flex items-center mb-4 text-green-700">
            <FaPhoneAlt className="mr-3 text-xl" />
            <span>+880 1234 567890</span>
          </div>
          <div className="flex items-center mb-4 text-green-700">
            <FaEnvelope className="mr-3 text-xl" />
            <span>info@noortime.com</span>
          </div>
          <div className="flex items-center mb-8 text-green-700">
            <FaMapMarkerAlt className="mr-3 text-xl" />
            <span>Kapasia, Gazipur, Bangladesh</span>
          </div>

          <h3 className="text-2xl font-semibold mb-4 text-green-800">
            Follow Us
          </h3>
          <div className="flex space-x-6 text-green-700 text-2xl">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-green-900 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-green-900 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
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
  );
}

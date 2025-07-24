// src/components/WhyChooseUs.jsx
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Quentin Leclerc',
    title: 'Project Manager',
    avatar: 'https://i.pravatar.cc/64?u=q1',
    quote: 'D&S provided exceptional service and quality.',
  },
  {
    name: 'Quentin Leclerc',
    title: 'Project Manager',
    avatar: 'https://i.pravatar.cc/64?u=q2',
    quote: 'D&S provided exceptional service and quality.',
  },
  {
    name: 'Quentin Leclerc',
    title: 'Project Manager',
    avatar: 'https://i.pravatar.cc/64?u=q3',
    quote: 'D&S provided exceptional service and quality.',
  },
  {
    name: 'Quentin Leclerc',
    title: 'Project Manager',
    avatar: 'https://i.pravatar.cc/64?u=q4',
    quote: 'D&S provided exceptional service and quality.',
  },
  {
    name: 'Quentin Leclerc',
    title: 'Project Manager',
    avatar: 'https://i.pravatar.cc/64?u=q5',
    quote: 'D&S provided exceptional service and quality.',
  },
  {
    name: 'Quentin Leclerc',
    title: 'Project Manager',
    avatar: 'https://i.pravatar.cc/64?u=q6',
    quote: 'D&S provided exceptional service and quality.',
  },
  {
    name: 'Quentin Leclerc',
    title: 'Project Manager',
    avatar: 'https://i.pravatar.cc/64?u=q7',
    quote: 'D&S provided exceptional service and quality.',
  },
];


export default function WhyChooseUs() {
  return (
    <section className="bg-black text-white py-16">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
        Why Choose Us
      </h2>

      {/* Scrollable Testimonials */}
      <div className="overflow-x-auto custom-scrollbar px-4">
        <div className="flex space-x-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-80 bg-gray-800 rounded-xl p-6 flex flex-col space-y-4"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium">{t.name}</p>
                  <p className="text-sm text-gray-400">{t.title}</p>
                </div>
              </div>
              <p className="text-gray-200 flex-grow">“{t.quote}”</p>
            </div>
          ))}
        </div>
      </div>

      {/* Demo Call Form */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-semibold mb-6">
          Schedule Free Demo Call
        </h3>
        <form className="inline-flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-2">
          <input
            type="tel"
            placeholder="Enter your phone number"
            className="px-4 py-2 rounded-lg text-black w-64 focus:outline-none"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-yellow-600 hover:bg-yellow-700 rounded-lg font-medium transition"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Social Icons */}
      <div className="mt-10 flex justify-center space-x-6 text-yellow-500 text-2xl">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X / Twitter"
        >
          <FaTwitter />
        </a>
      </div>
    </section>
  );
}

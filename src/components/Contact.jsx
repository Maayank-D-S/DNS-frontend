// src/components/ContactUs.jsx
import React from 'react';

const contacts = [
  {
    title: 'Devang Dobliyal',
    phone: '+91 92207 34566',
    email: 'devangDobliyal@dobliyalshah.com',
  },
  {
    title: 'Arnav Shah',
    phone: '+91 83693 95729',
    email: 'arnavshah@dobliyalshah.com',
  },
];

export default function ContactUs() {
  return (
    <section className="py-16 px-4 bg-white">
      {/* ─── Contact Cards ─────────────────────────────── */}
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center mt-16">
        {contacts.map((c, idx) => {
          const borderClass = idx % 2 === 1
            ? 'sm:border-l sm:border-gray-200'
            : '';
          return (
            <div
              key={c.title}
              className={[
                'w-full sm:w-1/2 px-6 py-8 flex flex-col items-center text-center',
                borderClass
              ].join(' ')}
            >
              <h3 className="text-lg font-semibold text-[#b5913e] mb-4">
                {c.title}
              </h3>
              {c.phone && <p className="text-gray-800 mb-1">{c.phone}</p>}
              <p className="text-gray-800">{c.email}</p>
            </div>
          );
        })}
      </div>

      {/* ─── Get in touch form (boxed) ────────────────── */}
      <div className="max-w-3xl mx-auto mt-16 p-8 bg-gray-50 rounded-lg shadow-lg">
        <h2 className="text-2xl md:text-3xl font-serif font-medium text-[#b5913e] mb-2">
          Get in touch
        </h2>
        <p className="text-gray-700 mb-8">
          What can we assist you with?
        </p>
        <form className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
          {/* Name */}
          <div className="flex flex-col">
            <label className="mb-1 text-gray-600">Name*</label>
            <input
              type="text"
              placeholder="Your Name"
              className="border-b border-gray-400 focus:outline-none focus:border-gray-600 py-1"
            />
          </div>
          {/* Email */}
          <div className="flex flex-col">
            <label className="mb-1 text-gray-600">E‑Mail ID*</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="border-b border-gray-400 focus:outline-none focus:border-gray-600 py-1"
            />
          </div>
          {/* Phone */}
          <div className="flex flex-col">
            <label className="mb-1 text-gray-600">Mobile Number*</label>
            <input
              type="tel"
              placeholder="+91 12345 67890"
              className="border-b border-gray-400 focus:outline-none focus:border-gray-600 py-1"
            />
          </div>
          {/* Country */}
          <div className="flex flex-col">
            <label className="mb-1 text-gray-600">Country*</label>
            <input
              type="text"
              placeholder="India"
              className="border-b border-gray-400 focus:outline-none focus:border-gray-600 py-1"
            />
          </div>
          {/* City */}
          <div className="flex flex-col">
            <label className="mb-1 text-gray-600">City*</label>
            <input
              type="text"
              placeholder="Mumbai"
              className="border-b border-gray-400 focus:outline-none focus:border-gray-600 py-1"
            />
          </div>
          {/* Message */}
          {/* <div className="flex flex-col md:col-span-3">
            <label className="mb-1 text-gray-600">Message</label>
            <textarea
              rows={3}
              placeholder="Your message..."
              className="border-b border-gray-400 focus:outline-none focus:border-gray-600 py-1 resize-none"
            />
          </div> */}
          {/* Consent Checkbox */}
          <div className="md:col-span-3 flex items-center space-x-2 mt-2">
            <input
              id="consent"
              type="checkbox"
              className="h-4 w-4 border-gray-400 rounded-sm"
            />
            <label htmlFor="consent" className="text-gray-600 text-sm">
              By checking this box, you agree to our{' '}
              <a href="/privacy" className="text-[#b5913e] underline">
                Privacy Policy
              </a>{' '}
              and consent to be contacted with relevant updates.
            </label>
          </div>
          {/* Submit */}
          <div className="md:col-span-3 flex justify-center mt-6">
            <button
              type="submit"
              onSubmit={()=>{alert("Thanks for filling the form, we will reach out to you soon")}}
              className="px-8 py-3 border border-[#b5913e] text-[#b5913e] hover:bg-[#b5913e] hover:text-white transition rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

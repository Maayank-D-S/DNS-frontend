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
      <h2 className="text-center text-2xl md:text-3xl font-serif font-medium mb-12">
        Contact Us
      </h2>

      {/* Flex container: wraps children, centers them, and allows responsive widths */}
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center">
        {contacts.map((c, idx) => {
          // On small+ screens, make each card half-width; on mobile full width.
          // Add a left border on the second column to visually separate cards.
          const borderClass =
            idx % 2 === 1
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
    </section>
  );
}

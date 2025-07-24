// src/components/InstantVerification.jsx
import React from 'react';

export default function UbThree() {
  return (
    <section className="bg-black text-white py-16 px-4 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left: image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img
            src="/ub3.png"           // ← your image path
            alt="Verified document"
            className="w-full max-w-md rounded-3xl object-cover shadow-lg"
          />
        </div>

        {/* Right: text */}
        <div className="w-full md:w-1/2">
          <p className="text-2xl md:text-3xl font-semibold leading-snug text-center md:text-left">
            All legal documents available for instant verification.
          </p>
        </div>
      </div>
    </section>
  );
}

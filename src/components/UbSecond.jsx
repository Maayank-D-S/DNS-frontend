// src/components/FeatureWithImage.jsx
import React from 'react';

export default function UbSecond() {
  return (
    <section className="bg-black text-white py-16 px-4 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
        
        {/* Left text block */}
        <div className="w-full md:w-1/2">
          <p className="text-2xl md:text-3xl font-semibold leading-snug">
            Commercial, Residential, Land Banks- We have all of them
          </p>
        </div>

        {/* Right image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src="/ye.png"
            alt="Chat"
            className="w-full max-w-sm rounded-2xl shadow-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}

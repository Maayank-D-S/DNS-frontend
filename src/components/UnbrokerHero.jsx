// src/components/UnBrokerHero.jsx
import React from 'react';

export default function UnBrokerHero() {
  return (
    <section className="bg-black text-white py-20 px-4 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
        
        {/* Text */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Meet <span className="text-red-500">Un</span>Broker
          </h1>
          <p className="mt-2 text-lg md:text-xl text-gray-400">
            Discover, Don’t Search
          </p>
        </div>

        {/* Logo/Image */}
        <div className="flex-shrink-0">
          <img
            src="/ub1.png"
            alt="UnBroker Logo"
            className="w-48 h-auto md:w-64 lg:w-80 mx-auto"
          />
        </div>
      </div>
    </section>
  );
}

// src/components/HeroSection.jsx
import React from 'react'

export default function UbVideo() {
  return (
    <section className="relative bg-black text-white flex flex-col items-center justify-center text-center  px-4 overflow-hidden h-[100vh] sm:h-[110vh] md:h-[100vh]">
      {/* ─── BACKGROUND VIDEO ─────────────────────────── */}
      <div className="absolute inset-0">
        
          {/* Put your <video> here, e.g.: */}

          <video
            src="/vidUb.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
       
      </div>

      {/* overlay to darken/matte the video slightly */}
      {/* <div className="absolute inset-0 bg-black/20" /> */}

      {/* ─── TEXT CONTENT ─────────────────────────────── */}
      <div className="relative z-10 max-w-2xl">
        {/* Main heading */}
        <h1 className="font-bold text-5xl md:text-5xl lg:text-6xl font-figtree">
          AI‑Powered Brokerage
        </h1>

        {/* Subheading */}
        <p className="mt-4 text-2xl md:text-3xl font-figtree">
          Say Goodbye to Old‑School Real Estate
        </p>

        {/* Tertiary line */}
        <p className="mt-2 text-base md:text-lg text-gray-300 font-figtree">
          Ask our UnReal agents to discover your dream property.
        </p>

        {/* Call‑to‑action */}
        <a
          href="/"
          className="
            mt-8 inline-block
            bg-black/60 hover:bg-black
            text-white font-semibold
            text-lg
            px-6 py-3
            rounded-full
            transition
          "
        >
          Try Now &rarr;
        </a>
      </div>
    </section>
  )
}

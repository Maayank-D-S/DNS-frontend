// src/components/FeatureCarousel.jsx
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function FeatureCarousel() {
  const slides = ['/p1.png','/p2.png','/ub.png','/ub.png','/ub.png'];

  // constants for slide width + gap
  const SLIDE_W = 80;   // vw
  const GAP_H = 15;     // vh

  const [current, setCurrent] = useState(0);
  const timer = useRef(null);
  const INTERVAL = 5000;

  // auto‑advance
  useEffect(() => {
    clearTimeout(timer.current);
    timer.current = setTimeout(
      () => setCurrent(c => (c + 1) % slides.length),
      INTERVAL
    );
    return () => clearTimeout(timer.current);
  }, [current, slides.length]);

  const prev = () => setCurrent(c => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent(c => (c + 1) % slides.length);

  // compute total offset
  const offsetW = current * SLIDE_W;   // vw
  const offsetH = current * GAP_H;     // vh

  return (
    <section className="bg-black py-16 overflow-x-hidden">
      {/* header / intro */}
      <div className="max-w-3xl mx-auto text-center mb-12 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          The All‑In‑One Construction OS
        </h2>
        <p className="text-lg md:text-xl text-white/80">
          All your site workflows, streamlined and synced
        </p>
      </div>

      {/* carousel */}
      <div className="relative w-screen px-[10vw] overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{
            transform: `translateX(calc(-${offsetW}vw - ${offsetH}vh))`
          }}
        >
          {slides.map((src,i) => (
            <div
              key={i}
              className="flex-shrink-0"
              style={{
                width: '80vw',
                height: '80vh',
                marginRight: `${GAP_H}vh`,
                boxShadow: '0 0 40px rgba(255,255,255,0.6)',
                borderRadius: '1rem',
                overflow: 'hidden'
              }}
            >
              <img
                src={src}
                alt={`slide ${i+1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* arrows */}
        <button
          onClick={prev}
          className="absolute top-1/2 left-2 p-2 bg-black/50 rounded-full -translate-y-1/2 hover:bg-black/70 transition"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={next}
          className="absolute top-1/2 right-2 p-2 bg-black/50 rounded-full -translate-y-1/2 hover:bg-black/70 transition"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* pagination dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_,i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition ${
                i === current ? 'bg-white' : 'bg-white/50 hover:bg-white'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

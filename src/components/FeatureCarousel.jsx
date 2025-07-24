// src/components/FeatureCarousel.jsx
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function FeatureCarousel() {
  // ── Replace these with your real image URLs ──
  const slides = ['/p1.png', '/p2.png', '/ub.png'];

  const [current, setCurrent] = useState(0);
  const timer = useRef(null);
  const INTERVAL = 5000; // 5s

  // auto‑advance
  useEffect(() => {
    clearTimeout(timer.current);
    timer.current = setTimeout(
      () => setCurrent((c) => (c + 1) % slides.length),
      INTERVAL
    );
    return () => clearTimeout(timer.current);
  }, [current, slides.length]);

  const prev = () =>
    setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c + 1) % slides.length);

  // we'll need these for the calc in translateX
  const offsetW = current * 80;  // 80vw per slide
  const offsetH = current * 10;  // 10vh gap per slide

  return (
    <div className="bg-black py-16 overflow-x-hidden">
      {/* full viewport width, with 10vw padding each side to peek */}
      <div className="relative w-screen px-[10vw] overflow-hidden">
        {/* ─── TRACK ────────────────────────────────────── */}
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{
            // slide by 80vw + 10vh per card
            transform: `translateX(calc(-${offsetW}vw - ${offsetH}vh))`
          }}
        >
          {slides.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0"
              style={{
                width: '80vw',
                height: '80vh',
                marginRight: '10vh',            // horizontal gap
                boxShadow: '0 0 40px rgba(255,255,255,0.6)',
                borderRadius: '1rem',
                overflow: 'hidden'
              }}
            >
              <img
                src={src}
                alt={`slide ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* ─── PREV/NEXT BUTTONS ───────────────────────── */}
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

        {/* ─── PAGINATION DOTS ─────────────────────────── */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition
                ${i === current ? 'bg-white' : 'bg-white/50 hover:bg-white'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

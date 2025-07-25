// src/components/FeatureCarousel.jsx
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function FeatureCarousel() {
  const SLIDE_W_DESK = 80; // vw on desktop
  const SLIDE_H_DESK = 80; // vh on desktop
  const SLIDE_W_MOB  = 85; // vw on mobile (rectangle)
  const SLIDE_H_MOB  = 60; // vw on mobile (rectangle)
  const GAP_H        = 15; // gap size
  const SLIDES_COUNT = 5;

  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const prev = () =>
    setCurrent(c => (c === 0 ? SLIDES_COUNT - 1 : c - 1));
  const next = () =>
    setCurrent(c => (c + 1) % SLIDES_COUNT);

  // auto‑advance
  useEffect(() => {
    const id = setTimeout(
      () => setCurrent(c => (c + 1) % SLIDES_COUNT),
      5000
    );
    return () => clearTimeout(id);
  }, [current]);

  // detect mobile
  useEffect(() => {
    const mql = window.matchMedia('(max-width: 768px)');
    const onChange = e => setIsMobile(e.matches);
    onChange(mql);
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  // compute shift
  const offsetX = (isMobile ? SLIDE_W_MOB : SLIDE_W_DESK) * current;
  const offsetY = GAP_H * current;

  return (
    <section className="py-16 overflow-hidden bg-black text-white">
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-12 px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          The All‑In‑One Construction OS
        </h2>
        <p className="text-lg md:text-xl text-white/80">
          All your site workflows, streamlined and synced
        </p>
      </div>

      <div className="relative w-screen px-[7vw] md:px-[10vw] overflow-visible">
        {/* ─── Slides Container with flex-gap ───────────────────────── */}
        <div
          className="flex gap-[15vw] md:gap-[15vh] transition-transform duration-700 ease-out"
          style={{
            transform: isMobile
              ? `translateX(calc(-${offsetX}vw - ${GAP_H * current}vw))`
              : `translateX(calc(-${offsetX}vw - ${offsetY}vh))`
          }}
        >
          {/* Slide #1 */}
          <div
            className="flex-shrink-0 flex bg-black rounded-xl shadow-[0_0_10px_rgba(255,255,255,0.5)] overflow-hidden"
            style={{
              width: isMobile ? `${SLIDE_W_MOB}vw` : `${SLIDE_W_DESK}vw`,
              height: isMobile ? `${SLIDE_H_MOB}vw` : `${SLIDE_H_DESK}vh`
            }}
          >
            <div className="w-1/2 p-6 flex flex-col justify-center">
              <h3 className="text-xl md:text-4xl font-bold mb-4">
                One view to monitor all your projects
              </h3>
              <p className="text-xs md:text-lg text-white/90">
                Track progress, delays, safety flags, material movement — in real time.
              </p>
            </div>
            <div className="w-1/2 relative overflow-hidden">
              <img
                src="/c5.png"
                alt="One view to monitor"
                className="absolute bottom-0 left-0 object-contain rounded-xl"
                style={{
                  width: '120%',
                  height: '100%',
                  transformOrigin: 'bottom left',
                  transition: 'transform 0.7s ease-out',
                  transform:
                    current === 0
                      ? `translate(${isMobile ? '8%' : '25%'}, ${isMobile ? '30%' : '20%'})`
                      : `translate(${isMobile ? '75%' : '50%'}, ${isMobile ? '75%' : '75%'})`
                }}
              />
            </div>
          </div>

          {/* Slide #2 */}
          <div
            className="flex-shrink-0 flex bg-[#26232C] rounded-xl shadow-[0_0_10px_rgba(255,255,255,0.5)] overflow-hidden"
            style={{
              width: isMobile ? `${SLIDE_W_MOB}vw` : `${SLIDE_W_DESK}vw`,
              height: isMobile ? `${SLIDE_H_MOB}vw` : `${SLIDE_H_DESK}vh`
            }}
          >
            <div className="w-1/2 p-6 flex flex-col justify-center">
              <h3 className="text-xl md:text-4xl font-bold mb-4">
                BIM‑Powered Planning
              </h3>
              <p className="text-sm md:text-lg text-white/90">
                We integrate with your BIM targets and timelines to auto‑assign, track, and alert.
              </p>
            </div>
            <div className="w-1/2 relative overflow-hidden">
              <img
                src="/c1.png"
                alt="BIM‑Powered Planning"
                className="absolute bottom-0 left-0 object-contain rounded-xl"
                style={{
                  width: '120%',
                  height: '90%',
                  transformOrigin: 'bottom left',
                  transition: 'transform 0.7s ease-out',
                  transform:
                    current === 1
                      ? `translate(${isMobile ? '20%' : '30%'}, ${isMobile ? '20%' : '20%'})`
                      : `translate(${isMobile ? '80%' : '60%'}, ${isMobile ? '85%' : '80%'})`
                }}
              />
            </div>
          </div>

          {/* Slide #3 */}
          <div
            className="flex-shrink-0 flex bg-black rounded-xl shadow-[0_0_10px_rgba(255,255,255,0.5)] overflow-hidden"
            style={{
              width: isMobile ? `${SLIDE_W_MOB}vw` : `${SLIDE_W_DESK}vw`,
              height: isMobile ? `${SLIDE_H_MOB}vw` : `${SLIDE_H_DESK}vh`
            }}
          >
            <div className="w-1/2 p-6 flex flex-col justify-center">
              <h3 className="text-xl md:text-4xl font-bold mb-4">
                Real‑time Workforce Visibility
              </h3>
              <p className="text-sm md:text-lg text-white/90">
                Know who’s working, where they are, and what they’re doing — instantly.
              </p>
            </div>
            <div className="w-1/2 relative overflow-hidden">
              <img
                src="/c2.png"
                alt="Real‑time Workforce"
                className="absolute bottom-0 left-0 object-contain rounded-xl"
                style={{
                  width: '120%',
                  height: '100%',
                  transformOrigin: 'bottom left',
                  transition: 'transform 0.7s ease-out',
                  transform:
                    current === 2
                      ? `translate(${isMobile ? '10%' : '30%'}, ${isMobile ? '25%' : '20%'})`
                      : `translate(${isMobile ? '50%' : '30%'}, ${isMobile ? '85%' : '70%'})`
                }}
              />
            </div>
          </div>

          {/* Slide #4 */}
          <div
            className="flex-shrink-0 flex bg-white rounded-xl shadow-[0_0_10px_rgba(255,255,255,0.5)] overflow-hidden text-black"
            style={{
              width: isMobile ? `${SLIDE_W_MOB}vw` : `${SLIDE_W_DESK}vw`,
              height: isMobile ? `${SLIDE_H_MOB}vw` : `${SLIDE_H_DESK}vh`
            }}
          >
            <div className="w-1/2 p-6 flex flex-col justify-center">
              <h3 className="text-xl md:text-4xl font-bold mb-4">
                Quality Check Reports
              </h3>
              <p className="text-sm md:text-lg text-gray-700">
                Log, track, and act on quality issues instantly.
              </p>
            </div>
            <div className="w-1/2 relative overflow-hidden">
              <img
                src="/c3.png"
                alt="Quality Check"
                className="absolute bottom-0 left-0 object-contain rounded-xl"
                style={{
                  width: '120%',
                  height: '95%',
                  transformOrigin: 'bottom left',
                  transition: 'transform 0.7s ease-out',
                  transform:
                    current === 3
                      ? `translate(${isMobile ? '0%' : '0%'}, ${isMobile ? '15%' : '15%'})`
                      : `translate(${isMobile ? '20%' : '0%'}, ${isMobile ? '80%' : '75%'})`
                }}
              />
            </div>
          </div>

          {/* Slide #5 */}
          <div
            className="flex-shrink-0 flex bg-[#E6DAFF] rounded-xl shadow-[0_0_10px_rgba(255,255,255,0.5)] overflow-hidden"
            style={{
              width: isMobile ? `${SLIDE_W_MOB}vw` : `${SLIDE_W_DESK}vw`,
              height: isMobile ? `${SLIDE_H_MOB}vw` : `${SLIDE_H_DESK}vh`
            }}
          >
            <div className="w-1/2 p-6 flex flex-col justify-center">
              <h3 className="text-xl md:text-4xl font-bold mb-4">
                Live Inventory Tracking
              </h3>
              <p className="text-sm md:text-lg text-gray-700">
                Know what’s on‑site, what’s coming, and what’s stuck.
              </p>
            </div>
            <div className="w-1/2 relative overflow-hidden">
              <img
                src="/c111.png"
                alt="Live Inventory"
                className="absolute bottom-0 left-0 object-contain rounded-xl"
                style={{
                  width: '120%',
                  height: '85%',
                  transformOrigin: 'bottom left',
                  transition: 'transform 0.7s ease-out',
                  transform:
                    current === 4
                      ? `translate(${isMobile ? '15%' : '10%'}, ${isMobile ? '0%' : '0%'})`
                      : `translate(${isMobile ? '85%' : '75%'}, ${isMobile ? '0%' : '0%'})`
                }}
              />
            </div>
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prev}
          className="absolute top-1/2 left-2 p-2 bg-white/60 rounded-full -translate-y-1/2 hover:bg-white/80 transition"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        <button
          onClick={next}
          className="absolute top-1/2 right-2 p-2 bg-white/60 rounded-full -translate-y-1/2 hover:bg-white/80 transition"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>

        {/* Pagination dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {[...Array(SLIDES_COUNT)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition ${
                i === current ? 'bg-gray-800' : 'bg-gray-400 hover:bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// src/components/PhoneFeatureSection.jsx
import React from 'react'

const leftFeatures = [
  { imageSrc: '/hard1.png',       label: 'Labor Tracking' },
  { imageSrc: '/house.png', label: 'Inventory Management' },
  { imageSrc: '/book.png',      label: 'Daily Site Logs' },
]

const rightFeatures = [
  { imageSrc: '/board.png',        label: 'Dashboard Insights' },
  { imageSrc: '/cir.png',         label: 'BIM‑Timeline Sync' },
  { imageSrc: '/snake.png',    label: 'Quality & Safety Reports' },
]

export default function PhoneFeatureSection() {
  return (
    <section className="relative pb-10 bg-black text-white w-full overflow-hidden">
      <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12 lg:px-0">
        
        {/** ─── MOBILE: 2‑col grid + video ───────────────────────────── */}
        <div className="lg:hidden flex flex-col items-center mb-12">
          <ul className="grid grid-cols-2 gap-x-8 gap-y-12 w-full">
            {leftFeatures.map((f, i) => (
              <React.Fragment key={i}>
                <li className="flex flex-col items-center text-center space-y-2">
                  <img src={f.imageSrc} alt={f.label} className="w-10 h-10" />
                  <span className="text-lg">{f.label}</span>
                </li>
                <li className="flex flex-col items-center text-center space-y-2">
                  <img
                    src={rightFeatures[i].imageSrc}
                    alt={rightFeatures[i].label}
                    className="w-8 h-8"
                  />
                  <span className="text-lg font-satoshi">{rightFeatures[i].label}</span>
                </li>
              </React.Fragment>
            ))}
          </ul>

          <div className="w-64 h-[600px] mt-8">
            <video
              src="/wf.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/** ─── DESKTOP: pinned columns + centered video ────────────────── */}
        <div className="hidden lg:block relative w-full h-[600px]">
          {/* Left column */}
          <ul className="absolute top-0 left-0 flex flex-col items-center space-y-12 w-60">
            {leftFeatures.map((f, i) => (
              <li key={i} className="flex flex-col items-center space-y-2">
                <img src={f.imageSrc} alt={f.label} className="w-8 h-8" />
                <span className="text-lg font-satoshi">{f.label}</span>
              </li>
            ))}
          </ul>

          {/* Center video */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-64 h-full">
            <video
              src="/wf.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Right column */}
          <ul className="absolute top-0 right-0 flex flex-col items-center space-y-12 w-60">
            {rightFeatures.map((f, i) => (
              <li key={i} className="flex flex-col items-center space-y-2">
                <img src={f.imageSrc} alt={f.label} className="w-8 h-8" />
                <span className="text-lg">{f.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* subtle fade overlay at bottom */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black" />
    </section>
  )
}

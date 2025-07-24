// src/components/PhoneFeatureSection.jsx
import React from 'react'
import { HardHat, ClipboardList, Box, Clock, FileText, Activity } from 'lucide-react'

const leftFeatures = [
  { icon: <HardHat className="w-8 h-8 text-yellow-400" />, label: 'Labor Tracking' },
  { icon: <Box className="w-8 h-8 text-yellow-400" />,     label: 'Inventory Management' },
  { icon: <Clock className="w-8 h-8 text-yellow-400" />,    label: 'Daily Site Logs' },
]

const rightFeatures = [
  { icon: <ClipboardList className="w-8 h-8 text-yellow-400" />, label: 'Dashboard Insights' },
  { icon: <FileText className="w-8 h-8 text-yellow-400" />,     label: 'BIM‑Timeline Sync' },
  { icon: <Activity className="w-8 h-8 text-yellow-400" />,     label: 'Quality & Safety Reports' },
]

export default function PhoneFeatureSection() {
  return (
    <section className="relative pb-10 bg-black text-white w-full overflow-hidden">
      <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12 lg:px-0">
        
        {/* ─── MOBILE: feature grid + video ───────────────────────────── */}
        <div className="lg:hidden flex flex-col items-center mb-12">
          <ul className="grid grid-cols-2 gap-x-8 gap-y-12 w-full">
            {leftFeatures.map((f, i) => (
              <React.Fragment key={i}>
                <li className="flex flex-col items-center space-y-2">
                  {f.icon}
                  <span className="text-lg">{f.label}</span>
                </li>
                <li className="flex flex-col items-center space-y-2">
                  {rightFeatures[i].icon}
                  <span className="text-lg">{rightFeatures[i].label}</span>
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

        {/* ─── DESKTOP: pinned columns + centered video ────────────────── */}
        <div className="hidden lg:block relative w-full h-[600px]">
          {/* left features */}
          <ul className="absolute top-0 left-0 flex flex-col items-center space-y-12 w-60">
            {leftFeatures.map((f, i) => (
              <li key={i} className="flex flex-col items-center space-y-2">
                {f.icon}
                <span className="text-lg">{f.label}</span>
              </li>
            ))}
          </ul>

          {/* centered video */}
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

          {/* right features */}
          <ul className="absolute top-0 right-0 flex flex-col items-center space-y-12 w-60">
            {rightFeatures.map((f, i) => (
              <li key={i} className="flex flex-col items-center space-y-2">
                {f.icon}
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

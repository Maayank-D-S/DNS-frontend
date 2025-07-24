// src/components/PhoneFeatureSection.jsx
import React from 'react'
import { HardHat, ClipboardList, Box, Clock, FileText, Activity } from 'lucide-react'

const leftFeatures = [
  { icon: <HardHat className="w-8 h-8 text-yellow-400" />, label: 'Labor Tracking' },
  { icon: <Box className="w-8 h-8 text-yellow-400" />, label: 'Inventory Management' },
  { icon: <Clock className="w-8 h-8 text-yellow-400" />, label: 'Daily Site Logs' },
]

const rightFeatures = [
  { icon: <ClipboardList className="w-8 h-8 text-yellow-400" />, label: 'Dashboard Insights' },
  { icon: <FileText className="w-8 h-8 text-yellow-400" />, label: 'BIM‑Timeline Sync' },
  { icon: <Activity className="w-8 h-8 text-yellow-400" />, label: 'Quality & Safety Reports' },
]

export default function PhoneFeatureSection() {
  return (
    <section className="relative bg-black text-white py-20 w-full overflow-hidden">
      <div
        className="
          relative z-10
          flex flex-col lg:flex-row
          items-center justify-center
          gap-y-12 lg:space-x-56
          px-6 md:px-12 lg:px-20
        "
      >
        {/* Left feature list */}
        <ul className="flex flex-col items-center space-y-12 flex-shrink-0">
          {leftFeatures.map((f, i) => (
            <li key={i} className="flex flex-col items-center space-y-2">
              {f.icon}
              <span className="text-lg">{f.label}</span>
            </li>
          ))}
        </ul>

        {/* Center phone + video */}
        <div className="relative w-64 h-[600px] flex-shrink-0">
          {/* phone frame behind */}
          
          <video
            src="/wf.mp4"
            autoPlay muted loop playsInline
            className="absolute
                       top-[6%] left-[7%]
                       w-[86%] h-[88%]
                       object-cover rounded-lg"
          />
        </div>

        {/* Right feature list */}
        <ul className="flex flex-col items-center space-y-12 flex-shrink-0">
          {rightFeatures.map((f, i) => (
            <li key={i} className="flex flex-col items-center space-y-2">
              {f.icon}
              <span className="text-lg">{f.label}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* subtle fade at bottom */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black" />
    </section>
  )
}

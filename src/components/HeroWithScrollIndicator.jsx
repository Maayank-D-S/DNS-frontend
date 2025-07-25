// src/components/HeroWithScrollIndicator.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function HeroWithScrollIndicator() {
  return (
    <section className="relative bg-black text-white flex flex-col items-center justify-center min-h-screen px-4">
      {/* HEADLINE */}
      <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center font-satoshi">
        Everything, in one place.
      </h1>

      {/* SCROLL INDICATOR */}
      <div className="flex flex-col items-center space-y-4">
        {/* mouse outline */}
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center overflow-hidden">
          {/* the little wheel */}
          <motion.div
            className="w-1 h-2 bg-white rounded mt-1"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        {/* down arrow */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-6 h-6 text-white" />
        </motion.div>
      </div>
    </section>
  );
}

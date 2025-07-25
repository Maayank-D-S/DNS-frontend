// src/components/InstantVerification.jsx
import React from 'react'
import { motion } from 'framer-motion'

export default function UbThree() {
  const slideDown = {
    hidden: { y: -80, opacity: 0 },
    show:   { y: 0,   opacity: 1 }
  }

  // Common viewport settings:
  const viewport = {  amount: 0.3 }  // fire when 30% visible, only once

  return (
    <section className="bg-black text-white py-16 px-4 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">

        {/* Left: image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center md:justify-start"
          variants={slideDown}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <img
            src="/ub3.png"
            alt="Verified document"
            className="w-full max-w-md rounded-3xl object-cover shadow-lg"
          />
        </motion.div>

        {/* Right: text */}
        <motion.div
          className="w-full md:w-1/2"
          variants={slideDown}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <p className="text-2xl md:text-3xl font-semibold leading-snug font-inter text-center md:text-left">
            All legal documents available for instant verification.
          </p>
        </motion.div>

      </div>
    </section>
  )
}

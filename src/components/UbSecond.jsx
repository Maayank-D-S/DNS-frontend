// src/components/FeatureWithImage.jsx
import React from 'react'
import { motion } from 'framer-motion'

export default function FeatureWithImage() {
  // slide down from 80px above + fade in
  const slideDown = {
    hidden: { y: -80, opacity: 0 },
    show:   { y:   0, opacity: 1 }
  }

  // fire when 30% visible, only once
  const viewport = {  amount: 0.3 }

  return (
    <section className="bg-black text-white py-16 px-4 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
        
        {/* Text block */}
        <motion.div
          className="w-full md:w-1/2"
          variants={slideDown}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <p className="text-2xl md:text-3xl font-bold font-inter leading-snug">
            Commercial, Residential, Land Banks—We have all of them
          </p>
        </motion.div>

        {/* Image block */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center md:justify-end"
          variants={slideDown}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <img
            src="/ye.png"
            alt="Chat"
            className="w-full max-w-sm rounded-2xl shadow-xl object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}

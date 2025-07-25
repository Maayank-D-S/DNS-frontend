// src/components/FeatureWithImage.jsx
import React from 'react'
import { motion } from 'framer-motion'

export default function FeatureWithImage() {
  const slideDown = {
    hidden: { y: -80, opacity: 0 },
    show:   { y: 0,   opacity: 1 }
  }

  // Animate when 30% visible, trigger only once
  const viewport = { amount: 0.3 }

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
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <p className="text-2xl md:text-3xl font-bold font-sans leading-snug">
            Select on the go, get custom tailored suggestions on the go.
            Converse with our agents for real time responses.
          </p>
        </motion.div>

        {/* Image block */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center md:justify-end"
          variants={slideDown}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          transition={{ duration: 0.6, ease: 'easeInOut'}}
        >
          <img
            src="/ub55.png"
            alt="Chat with AI agent"
            className="w-full max-w-sm rounded-2xl shadow-xl object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}

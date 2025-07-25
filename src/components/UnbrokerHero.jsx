// src/components/UnBrokerHero.jsx
import React from 'react'
import { motion } from 'framer-motion'

export default function UnBrokerHero() {
  // simple fade‑in variant
  const fadeIn = {
    hidden: { opacity: 0 },
    show:   { opacity: 1 }
  }

  // animate once when 30% visible
  const viewport = { amount: 0.3 }

  return (
    <section className="bg-black text-white py-20 px-4 md:px-16">
      <div
        className="
          max-w-7xl mx-auto
          flex flex-col-reverse      
          items-center
          gap-8                     
          md:flex-row               
          md:gap-x-40               
          md:items-center
        "
      >
        {/* Left (on desktop) / Bottom (on mobile): image */}
        <motion.div
          className="flex-shrink-0"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          transition={{ duration: 1.2, ease: 'easeIn' }}
        >
          <img
            src="/ub1.png"
            alt="UnBroker Logo"
            className="
              w-[90vw] max-w-full md:w-[400px] h-[300px]
              rounded-2xl shadow-lg
              object-cover
            mix-blend-screen    
            "
          />
        </motion.div>

        {/* Right (on desktop) / Top (on mobile): text */}
        <motion.div
          className="text-center md:text-left"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold">
            Meet <span className="text-red-500">Un</span>Broker
          </h1>
          <p className="mt-2 text-lg md:text-xl text-gray-400">
            Discover, Don’t Search
          </p>
        </motion.div>
      </div>
    </section>
  )
}

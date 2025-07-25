import React from "react";
import { motion } from "framer-motion";
export default function CsiteHero() {
  const titleVariant = {
    hidden: { y: -200, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 120, damping: 20, delay: 0.6 }
    }
  };
  
  const leftTextVariant = {
    hidden: { x: -200, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: { type: 'tween', duration: 0.8, ease: 'easeOut', delay: 0.6 }
    }
  };
  
  const rightTextVariant = {
    hidden: { x: 200, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: { type: 'tween', duration: 0.8, ease: 'easeOut', delay: 0.9 }
    }
  };
  return (
    
    <section className="relative h-screen w-full overflow-hidden mb-[15rem]">
      {/* video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/vid.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black/60 z-10" />


      {/* 1) Centered, animated CSite title */}
      <motion.div
        variants={titleVariant}
        initial="hidden"
        animate="show"
        className="absolute inset-x-0 top-16 text-center z-20"
      >
        <h1
          className="
            inline-block
            text-white
            text-[8rem] sm:text-8xl md:text-[10rem] lg:text-[12rem]
            font-bold
            filter drop-shadow-[0_0_30px_rgba(255,255,255,0.9)]
          "
        >
          CSite
        </h1>
      </motion.div>

      {/* 2) Content & tower */}
      <div className="relative h-full w-full z-30">
        {/* tower image */}
        <img
          src="/building.png"
          alt="Csite Tower"
          className="
            absolute left-1/2 bottom-0
            transform -translate-x-1/2 translate-y-1/6
            w-10/12 max-h-[75%]
            object-contain
          "
        />

        {/* left paragraph */}
        <motion.div
          variants={leftTextVariant}
          initial="hidden"
          animate="show"
          className="hidden md:block absolute top-2/3 md:top-1/2 left-6 md:left-12 max-w-xs text-white"
        >
          <p className="text-base md:text-lg leading-relaxed font-bold filter drop-shadow-[0_0_30px_rgba(255,255,255,0.9)]">
            Csite brings your entire project into one dashboard — from labor
            attendance to material flow. Stay ahead with real‑time visibility
            and make smarter, faster decisions without stepping on‑site.
          </p>
        </motion.div>

        {/* right paragraph */}
        <motion.div
          variants={rightTextVariant}
          initial="hidden"
          animate="show"
          className="hidden md:block absolute top-1/2 right-6 md:right-12 max-w-xs text-white text-right"
        >
          <p className="text-base md:text-lg leading-relaxed font-bold filter drop-shadow-[0_0_30px_rgba(255,255,255,0.9)]">
            Whether you’re handling one tower or ten, Csite scales with your
            ambition. Track timelines, quality checks, and budgets with
            pinpoint accuracy — powered by BIM integration.
          </p>
        </motion.div>
      </div>

      {/* call‑to‑action */}
      <div className="absolute bottom-8 w-full flex justify-center z-40">
        <button className="bg-yellow-600 text-black px-6 py-3 rounded-full text-lg font-medium hover:bg-yellow-700 transition">
          Request Free Demo
        </button>
      </div>
    </section>

   ) }

// src/components/UnBrokerHero.jsx
import React from "react";
import { motion } from "framer-motion";

export default function UnBrokerHero() {
  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const unMotion = {
    hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 2, ease: "easeInOut", delay: 0.3 },
    },
  };

  const viewport = { amount: 0.3 };

  return (
    <section className="bg-black text-white py-20 px-4 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse items-center gap-8 md:flex-row md:gap-x-40 md:items-center">
        {/* Image */}
        <motion.div
          className="flex-shrink-0"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          transition={{ duration: 3, ease: "easeInOut" }}
        >
          <img
            src="/ub1.png"
            alt="UnBroker Logo"
            className="
              w-[90vw] max-w-full md:w-[400px] h-[300px]
              rounded-2xl shadow-lg object-cover mix-blend-screen
            "
          />
        </motion.div>

        {/* Text */}
        <motion.div
          className="text-center md:text-left"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold font-inter leading-tight">
            {/* Mobile-only line break before UnBroker */}
            <span className="block md:inline">Meet </span>

            <span className="block md:inline">
              <motion.span
                className="inline-block text-red-500"
                variants={unMotion}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
              >
                Un
              </motion.span>
              Broker
            </span>
          </h1>

          <p className="mt-2 text-xl md:text-3xl text-gray-400 font-bold font-inter text-center md:text-left">
            Discover, Don’t Search
          </p>
        </motion.div>
      </div>
    </section>
  );
}

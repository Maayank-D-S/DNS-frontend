import { useState } from "react";
import { motion } from "framer-motion";

const properties = [
  {
    name: "CSite",
    location:
      "A new-age building experience for managing your construction sites digitally.",
    image: "/csitel.png",
  },
  {
    name: "UnBroker",
    location:
      "Discover your true home, interact digitally and findverified listings—powered by AI.",
    image: "/ub.png",
  },
  // {
  //   name: "Civil consultancy Services",
  //   location:
  //     "A modern civil planning suite that offers complete structural layout, urban utility mapping and other services backed by real-time geospatial data.",
  //   image: "/DCCS.png",
  // },
];

/* slide-up animation for each card */
const cardVariants = {
  hidden: { y: 35, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function IconicProperties() {
  return (
    <section className="py-16 px-6 md:px-16 bg-white">
      <p className="text-xs tracking-widest text-yellow-600 text-center mb-1">
        OUR PRODUCTS
      </p>
      <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
        WHAT WE OFFER
      </h2>

      {/* Cards Layout */}
      <div className="flex flex-col md:flex-row gap-6 items-center md:items-stretch justify-center">
        {properties.map((p, i) => (
          <div key={p.name} className="w-full md:w-1/3 max-w-md">
            <Card {...p} delay={i * 0.06} />
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Card ───────────────────────────────────────────────────────── */
function Card({ image, name, location, delay }) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.35 }}
      transition={{ delay }}
      className="w-full h-full bg-white rounded-md 
                overflow-hidden shadow hover:shadow-lg transition
                flex flex-col min-h-[300px]"
    >
      {/* Image */}
      <div className="h-48 md:h-56 flex-shrink-0 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover pointer-events-none"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-lg md:text-xl font-medium">{name}</h3>
          <p className="text-gray-500 text-sm mt-2">{location}</p>
        </div>
      </div>
    </motion.div>
  );
}

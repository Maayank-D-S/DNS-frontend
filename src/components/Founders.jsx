/* IconicProperties.jsx */
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const properties = [
  {
    name: "Devang Dobliyal",
    location: "Director: Business Development",
    image: "/Devang.jpg",
  },
  {
    name: "Arnav Shah",
    location: "Director: Engineering & Project Management",
    image: "/Arnav.png",
  },
];

/* Slide-up animation for each card */
const cardVariants = {
  hidden: { y: 35, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Founders() {
  const [index, setIndex] = useState(0);
  const last = properties.length - 1;

  // Mobile navigation handlers
  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(last, i + 1));

  return (
    <section className="py-16 px-4 md:px-16 bg-white">
      <p className="text-xs tracking-widest text-yellow-600 text-center mb-1"></p>
      <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
        MEET OUR FOUNDERS
      </h2>

      <div className="relative">
        {/* Mobile navigation arrows */}
        <button
          onClick={prev}
          disabled={index === 0}
          className="md:hidden absolute left-3 top-1/2 -translate-y-1/2
                    z-10 p-2 bg-white/80 rounded-full shadow
                    disabled:opacity-30"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          disabled={index === last}
          className="md:hidden absolute right-3 top-1/2 -translate-y-1/2
                    z-10 p-2 bg-white/80 rounded-full shadow
                    disabled:opacity-30"
        >
          <ChevronRight size={20} />
        </button>

        {/* Cards container */}
        <ul className="flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-8">
          {properties.map((p, i) => (
            <li
              key={p.name}
              className="w-full md:w-[280px] flex justify-center"
            >
              <Card {...p} delay={i * 0.06} />
            </li>
          ))}
        </ul>
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
      className="h-full w-full max-w-[90%] md:max-w-none bg-white rounded-md
                overflow-hidden shadow hover:shadow-lg transition
                flex flex-col justify-between md:min-h-[350px]" // 🔥 added min height
    >
      {/* Image Section */}
      <div className="h-48 md:h-56 flex-shrink-0 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover pointer-events-none"
        />
      </div>

      {/* Text Content */}
      <div className="p-4 flex flex-col flex-grow justify-between">
        <div className="flex flex-col justify-between h-full">
          <h3 className="text-lg md:text-xl font-medium">{name}</h3>
          <p className="text-gray-500 text-sm mt-2">{location}</p>
        </div>
      </div>
    </motion.div>
  );
}

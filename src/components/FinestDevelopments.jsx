import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const cards = [
  {
    img: "/images/design.jpg",
    text: "Recognizing the profound impact of design and service on well-being, we create thoughtful and purposeful living spaces.",
  },
  {
    img: "/images/tea.jpg",
    text: "Committed to surpassing expectations, our carefully crafted events and experiences ensure an enriched and empowered lifestyle.",
  },
  {
    img: "/images/pavilion.jpg",
    text: "We are creating homes and workspaces for an ever-changing tomorrow, where luxury and sustainability can co-exist in perfect harmony.",
  },
];

const slideUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const FinestDevelopments = () => {
  const { ref: headingRef, inView: headingInView } = useInView({ triggerOnce: false });
  const { ref: cardsRef, inView: cardsInView } = useInView({ triggerOnce: false });

  return (
    <section className="bg-white py-20 px-6 md:px-12 text-center">
      {/* Animated Heading */}
      <motion.h2
        ref={headingRef}
        initial="hidden"
        animate={headingInView ? "visible" : "hidden"}
        variants={slideUpVariants}
        className="text-2xl md:text-3xl font-serif mb-12"
      >
        Creating the world’s <span className="italic">finest</span> developments
      </motion.h2>

      {/* Animated Card Grid */}
      <motion.div
        ref={cardsRef}
        initial="hidden"
        animate={cardsInView ? "visible" : "hidden"}
        variants={slideUpVariants}
        className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto"
      >
        {cards.map((card, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img
              src="/i3.jpg"
              alt={`development-${index}`}
              className="w-full h-[320px] object-cover mb-6"
            />
            <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-xs">
              {card.text}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default FinestDevelopments;

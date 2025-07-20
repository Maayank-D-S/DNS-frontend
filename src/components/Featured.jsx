import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

/* slide‑up variant for list & button */
const slideVariants = {
  hidden: { y: 30, opacity: 0 },
  show:   (i) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.12 }
  })
};

export default function FeaturedAwards() {
  /* track visibility of the text column */
  const textRef  = useRef(null);
  const inView   = useInView(textRef, { amount: 0.35 }); // 35 % visible
  const controls = useAnimation();                       // drives both sets

  /* reset / start animation each time we enter or leave */
  useEffect(() => {
    if (inView) controls.start("show");
    else        controls.start("hidden");
  }, [inView, controls]);

  return (
    <section className="bg-[#f9f9f9] py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10">

        {/* ── Image with curtain reveal ─────────────────────── */}
        <div className="w-full lg:w-1/2 relative overflow-hidden rounded-sm">
          <img
            src="/Awards.jpg"
            alt="Awards Banner"
            className="w-full h-64 md:h-80 object-cover"
          />

          {/* curtain slides whenever section is visible */}
          <motion.div
            animate={{ x: inView ? "100%" : "0%" }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="absolute inset-0 bg-[#f9f9f9] z-10 pointer-events-none"
          />
        </div>

        {/* ── Text column with staggered slide‑up ───────────── */}
        <motion.div
          ref={textRef}
          initial="hidden"
          animate={controls}
          variants={slideVariants} /* keeps TS happy */
          className="flex-1"
        >
          <motion.p custom={0} variants={slideVariants}
            className="uppercase text-[#b5913e] text-sm font-medium mb-4">
            Featured Awards
          </motion.p>

          <ul className="text-gray-700 space-y-3 text-sm md:text-base">
            {[
              "Recognition for our leadership in luxury real estate and sustainability",
              "Best organisations for women 2024, by Economic Times",
              "ET Sustainable Organisations 2023",
              "Iconic Brands of India 2023 by ET Edge",
              "Great Manager Award 2023",
              "Among India's Top Builders 2024 in the National Category, Construction World Architect & Builder Awards",
              "Great place to work 2024 – 25"
            ].map((txt, i) => (
              <motion.li key={i} custom={i + 1} variants={slideVariants}>
                {txt}
              </motion.li>
            ))}
          </ul>

          <motion.div custom={8} variants={slideVariants} className="mt-6">
            <button className="text-[#b5913e] font-medium text-base hover:underline flex items-center gap-1">
              View All <span className="text-xl">›</span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

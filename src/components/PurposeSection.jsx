import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

/* ── slide‑up variants for text lines ─────────────────────────────── */
const textVariants = {
  hidden: { y: 25, opacity: 0 },
  show:  (i) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.55, ease: "easeOut", delay: i * 0.12 }
  })
};

export default function PurposeSection() {
  /* detect visibility of the whole section */
  const blockRef  = useRef(null);
  const inView    = useInView(blockRef, { amount: 0.4 });
  const controls  = useAnimation();          // drives the text

  /* restart text each time we enter / leave viewport */
  useEffect(() => {
    if (inView) controls.start("show");
    else         controls.start("hidden");
  }, [inView, controls]);

  return (
    <section
      ref={blockRef}
      className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 bg-[#fefae0]"
    >
      {/* ── TEXT (left on mobile, still left on desktop) ───────────── */}
      <motion.div
        className="md:w-1/2 mb-10 md:mb-0"
        initial="hidden"
        animate={controls}
      >
        <motion.p custom={0} variants={textVariants}
          className="text-xs uppercase text-yellow-600 font-medium mb-2">
          Our Purpose
        </motion.p>

        <motion.h2 custom={1} variants={textVariants}
          className="text-xl md:text-4xl font-semibold mb-4">
          Rebuilding trust. Reinventing real estate.
        </motion.h2>

        <motion.p custom={2} variants={textVariants}
          className="text-gray-700 text-xs leading-relaxed">
          D&S is committed to removing inefficiencies and manipulation from property buying and
          developing experience while promoting data transparency, inclusivity, and smarter living.
        </motion.p>
      </motion.div>

      {/* ── IMAGES with curtain reveal (right) ─────────────────────── */}
      <div className="md:w-1/2 flex gap-4 md:pl-6">
  {/* first image */}
  <div className="relative w-1/2 h-56 md:h-[35rem] overflow-hidden rounded-lg -ml-4 md:-ml-8">
    <img
      src="/t1.jpg"
      alt="The World Towers"
      className="w-full h-full object-cover"
    />
    <motion.div
      animate={{ x: inView ? "100%" : "50%" }}
      transition={{ duration: 1.1, ease: "easeOut" }}
      className="absolute inset-0 bg-[#fefae0] z-10"
    />
  </div>

  {/* second image */}
  <div className="relative w-1/2 h-56 md:h-[35rem] overflow-hidden rounded-lg">
    <img
      src="/t2.jpg"
      alt="Woman on bench"
      className="w-full h-full object-cover"
    />
    <motion.div
      animate={{ x: inView ? "100%" : "50%" }}
      transition={{ duration: 1.1, ease: "easeOut", delay: 0.15 }}
      className="absolute inset-0 bg-[#fefae0] z-10"
    />
  </div>
</div>

    </section>
  );
}

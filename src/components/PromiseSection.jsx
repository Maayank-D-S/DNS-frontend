import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

/* ── slide‑up variants for the text lines ───────────────────────────── */
const textVariants = {
  hidden: { y: 30, opacity: 0 },
  show: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: i * 0.15            // 150 ms between lines
    }
  })
};

/* ── COMPONENT ─────────────────────────────────────────────────────── */
export default function PromiseSection() {
  /** observe the whole text column */
  const imageRef = useRef(null);

  const imageInView = useInView(imageRef, { amount: 0.01 }); // trigger when 1% visible
  const textRef  = useRef(null);
  const inView   = useInView(textRef, { amount: 0.01 }); // 40 % visibility
  const controls = useAnimation();                      // manual driver
  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } }
  };
  /* start / reset the text animation each time visibility flips */
  useEffect(() => {
    if (inView) controls.start("show");
    else         controls.start("hidden");
  }, [inView, controls]);

  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 bg-white">

      {/* ── Image with a reusable “curtain” ─────────────────────────── */}
      <div ref={imageRef} className="relative md:w-1/2 mb-8 md:mb-0 overflow-hidden rounded-md">
        <img src="/pro.jpg" alt="Promise Building" className="w-full h-auto object-cover" />

        <motion.div
          /* slide the curtain right only while the section is visible */
          animate={{ translateX: imageInView? "100%" : "50%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute inset-0 bg-white z-10 pointer-events-none"
        />
      </div>

      {/* ── Text block with staggered lines ─────────────────────────── */}
      <motion.div
        ref={textRef}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="md:w-1/2 md:pl-12"
      >
        <motion.p  custom={0} variants={textVariants}
          className="text-sm uppercase text-yellow-600 font-medium mb-2 font-rajdhani">
          Our Vision
        </motion.p>

        <motion.h2 custom={1} variants={textVariants}
          className="text-3xl md:text-4xl font-semibold mb-4 font-rajdhani leading-snug">
          Transforming Real Estate with Technology.
        </motion.h2>

        <motion.p  custom={2} variants={textVariants}
          className="text-gray-700 text-lg mb-6">
          At D&S, we imagine a future where buying and building real estate is seamless, unbiased, and intelligent.
        </motion.p>

        <motion.a href="/impact" custom={3} variants={textVariants}
          className="px-6 py-2 border border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white transition">
          Our Mission
        </motion.a>
      </motion.div>
    </section>
  );
}

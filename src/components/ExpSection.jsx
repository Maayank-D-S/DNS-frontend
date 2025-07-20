import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ── slide‑up variants for the text lines ───────────────────────────── */
const textVariants = {
  hidden: { y: 30, opacity: 0 },
  show: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: i * 0.15,            // 150 ms between lines
    },
  }),
};

export default function ExpSection() {
  // ref + inView for image curtain
  const imageRef = useRef(null);
  const imageInView = useInView(imageRef, { amount: 0.01 }); // trigger at 1% visibility

  // container variants to stagger children
  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 bg-white">
      
      {/* ── Image + curtain ─────────────────────────────────────────── */}
      <div
        ref={imageRef}
        className="relative md:w-1/2 mb-8 md:mb-0 overflow-hidden rounded-md"
      >
        <img
          src="/exp.png"
          alt="Our Experience"
          className="w-full h-auto object-cover"
        />
        <motion.div
          animate={{ translateX: imageInView ? "100%" : "50%" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 bg-white z-10 pointer-events-none"
        />
      </div>

      {/* ── Text block with staggered lines ─────────────────────────── */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.01 }}
        variants={containerVariants}
        className="md:w-1/2 md:pl-12"
      >
        <motion.p
          custom={0}
          variants={textVariants}
          className="text-sm uppercase text-yellow-600 font-medium mb-2"
        >
          Our Experience
        </motion.p>

        <motion.h2
          custom={1}
          variants={textVariants}
          className="text-3xl md:text-4xl font-semibold mb-4 leading-snug"
        >
          Why D&S
        </motion.h2>

        <motion.p
          custom={2}
          variants={textVariants}
          className="text-gray-700 text-lg mb-6"
        >
          At D&amp;S, we merge design, data, and deep tech to deliver an exceptional real estate experience. We don’t sell homes. We empower smarter decisions.
        </motion.p>

        <motion.a
          href="/story"
          custom={3}
          variants={textVariants}
          className="inline-block px-6 py-2 border border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white transition"
        >
          ABOUT US
        </motion.a>
      </motion.div>
    </section>
  );
}

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* slide‑up variants for each text line */
const textVariants = {
  hidden: { y: 30, opacity: 0 },
  show: (i) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.12 }
  })
};

export default function AboutLodha() {
  // ref + inView for image curtain
  const imageRef = useRef(null);
  const imageInView = useInView(imageRef, { amount: 0.01 }); // 1% visibility

  // container variants to stagger children
  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } }
  };

  return (
    <section className="bg-[#fef9ea] py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* ─── Image + curtain reveal ────────────────────────────── */}
        <div
          ref={imageRef}
          className="md:w-1/2 relative overflow-hidden rounded-sm"
        >
          <img
            src="/s1.jpg"
            alt="About Lodha"
            className="w-full h-64 md:h-80 object-cover"
          />
          <motion.div
            /* curtain slides right when the image is in view */
            animate={{ x: imageInView ? "100%" : "50%" }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="absolute inset-0 bg-[#fef9ea] z-10"
          />
        </div>

        {/* ─── Text block with staggered slide‑up ──────────────── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.01 }}
          variants={containerVariants}
          className="md:w-1/2"
        >
          <motion.p
            custom={0}
            variants={textVariants}
            className="text-sm text-[#b5913e] font-medium uppercase mb-2"
          >
            About D&S
          </motion.p>

          <motion.h2
            custom={1}
            variants={textVariants}
            className="text-2xl md:text-3xl font-serif font-medium text-gray-800 mb-4"
          >
            Built for the future. Rooted in reality.
          </motion.h2>

          <motion.p
            custom={2}
            variants={textVariants}
            className="text-gray-700 leading-relaxed text-base"
          >
            We started D&S to fix what’s broken in real estate — from shady brokers to rigid planning. Our platforms UnBroker and Csite are designed to remove friction and bring fairness, using clean code, civil precision, and common sense. We're not another proptech buzzword. We're building infrastructure for better decisions.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";

/* simple slide‑up + fade‑in */
const slideVariants = {
  hidden: { y: 25, opacity: 0 },
  show:   (i) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.12 }
  })
};

export default function ImpactIntro() {
  return (
    <section className="bg-white py-16 px-4 md:px-8 text-center">
      <motion.div
        className="max-w-4xl mx-auto"
        variants={slideVariants}   /* just for TS / intellisense */
        initial="hidden"
        whileInView="show"         /* fires every time it re‑enters */
        viewport={{ amount: 0.4 }} /* 40 % visible to trigger      */
      >
        <motion.h2 custom={0} variants={slideVariants}
          className="text-2xl md:text-3xl font-medium text-gray-800 font-serif">
          Creating a positive impact
        </motion.h2>

        <motion.p custom={1} variants={slideVariants}
          className="text-gray-600 mt-4 leading-relaxed text-sm md:text-base">
          Lodha is committed to using our capabilities to create a positive
          impact on the environment and on society. As we grow, so does the
          scale of the impact we can make.
        </motion.p>

        <motion.p custom={2} variants={slideVariants}
          className="text-gray-600 mt-4 leading-relaxed text-sm md:text-base">
          Through&nbsp;
          <span className="font-semibold text-gray-800">Lodha Foundation</span>,
          we implement transformative projects in Education, Women&apos;s
          Empowerment, and Sustainable Urbanization to create a positive impact
          on the environment and society. We are recognized in global
          sustainability indices and rankings for the work we do to address the
          environmental impact of the built environment.
        </motion.p>

        <motion.div custom={3} variants={slideVariants} className="mt-8">
          <button
            className="border border-[#b5913e] text-[#b5913e] px-6 py-3 rounded-sm
                      hover:bg-[#b5913e] hover:text-white transition">
            Our Integrated Report
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}

import { motion } from "framer-motion";

/* reusable slide‑up variant*/
const itemVariants = {
  hidden: { y: 25, opacity: 0 },
  show:   i => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.15 }
  })
};

export default function KeyFactsSection() {
  return (
    <section className="bg-[#f9f9f9] text-gray-800 px-6 md:px-24 py-20">
      {/* title ------------------------------------------------------- */}
      <div className="text-center mb-12">
        <p className="text-sm uppercase text-yellow-800 font-semibold mb-2 tracking-wider">
          Key Facts
        </p>
        <h2 className="text-3xl md:text-4xl font-medium">
          Delivering excellence with continued growth
        </h2>
      </div>

      {/* grid -------------------------------------------------------- */}
      <motion.div
        className="flex flex-col md:flex-row justify-center gap-12 md:gap-20 items-center"
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.35 }}  /* trigger when 35 % visible */
      >
        {/* left column */}
        <div className="text-center md:text-right space-y-8 md:w-1/2">

          <motion.div custom={0} variants={itemVariants}>
            <p className="text-5xl font-serif text-yellow-800">65,000+</p>
            <p className="text-sm text-gray-600">
              Homes delivered <sup>^</sup>
            </p>
          </motion.div>

          <motion.div custom={1} variants={itemVariants}>
            <p className="uppercase text-xs text-yellow-800 font-semibold mb-1 tracking-widest">
              Presence In
            </p>
            <p>
              Mumbai, Thane, Pune,<br />
              Bengaluru and London
            </p>
          </motion.div>
        </div>

        {/* divider */}
        <div className="hidden md:block w-px h-40 bg-gray-300" />

        {/* right column */}
        <div className="text-center md:text-left space-y-8 md:w-1/2">

          <motion.div custom={2} variants={itemVariants}>
            <p className="text-4xl font-serif text-yellow-800">44</p>
            <p className="text-sm">
              Year legacy of<br />
              shaping real estate
            </p>
          </motion.div>

          <motion.div custom={3} variants={itemVariants}>
            <p className="text-4xl font-serif text-yellow-800">40</p>
            <p className="text-sm">
              operating<br />
              projects<sup>*</sup>
            </p>
          </motion.div>

          <motion.div custom={4} variants={itemVariants}>
            <p className="text-4xl font-serif text-yellow-800">100</p>
            <p className="text-sm">
              mn. Sq. ft. area<br />
              delivered
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* footnote ---------------------------------------------------- */}
      <p className="text-xs text-gray-500 text-center mt-12">
        *as of March&nbsp;31,&nbsp;2024 &nbsp; | &nbsp; ^By residential sales FY14 – 23
      </p>
    </section>
  );
}

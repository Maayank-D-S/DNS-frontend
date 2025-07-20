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

export default function WhoWeAre() {
  const cards = [
    {
      title: "Board of Directors",
      copy:
        "Experienced industry leaders ensure we are growing our positive impact as we grow our business."
    },
    {
      title: "Leadership Team",
      copy:
        "A motivated and passionate team with an unwavering commitment to excellence."
    }
  ];

  const values = [
    "We exist to exceed the expectations of our customers through innovative, world‑class solutions",
    "We go that last mile to do things right and deliver excellence in all that we undertake",
    "We work with the best people, treat them well, expect a lot and the rest will follow",
    "We behave with honesty, integrity and ethics with all stakeholders of our organization",
    "We wholeheartedly contribute and create a significant positive impact on our nation’s communities and its environment"
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Section title */}
        <div className="text-center mb-16">
          <p className="uppercase text-[#b5913e] text-sm tracking-wide font-medium">
            Who we are
          </p>
          <h2 className="text-2xl md:text-3xl font-serif text-gray-800">
            Guided by visionary leadership
          </h2>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              custom={0}                    /* each card slides as one */
              variants={slideVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.35 }}   /* re‑fires every entry */
              className="bg-[#fef9ea] p-10 text-center shadow-sm"
            >
              <h3 className="text-xl font-serif text-gray-800 mb-4">
                {c.title}
              </h3>
              <p className="text-gray-700 mb-6">{c.copy}</p>
              <button className="border border-[#b5913e] text-[#b5913e] py-2 px-6 hover:bg-[#b5913e] hover:text-white transition">
                View
              </button>
            </motion.div>
          ))}
        </div>

        {/* Our Values title */}
        <div className="text-center mb-12">
          <p className="uppercase text-[#b5913e] text-sm tracking-wide font-medium">
            Our Values
          </p>
          <h2 className="text-2xl md:text-3xl font-serif text-gray-800 mt-2">
            Shared principles that empower us to fulfill our purpose
          </h2>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Icon block */}
          <motion.div
            custom={0}
            variants={slideVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.35 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="space-y-2">
              <div className="h-2 w-14 bg-gray-300" />
              <div className="h-2 w-14 bg-gray-300" />
              <div className="h-2 w-14 bg-gray-600" />
              <div className="h-2 w-14 bg-gray-300" />
              <div className="h-2 w-14 bg-gray-300" />
            </div>
          </motion.div>

          {/* Value paragraphs */}
          {values.map((txt, i) => (
            <motion.p
              key={i}
              custom={i + 1}               /* stagger per item      */
              variants={slideVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.35 }}
              className={`text-sm leading-relaxed ${
                i === 4 ? "text-[#b5913e]" : "text-gray-700"
              }`}
            >
              {txt}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}

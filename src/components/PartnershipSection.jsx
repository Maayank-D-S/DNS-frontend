import { motion } from "framer-motion";

const partnerships = [
  "Launched Lodha Net Zero Urban Accelerator in partnership with RMI in 2022",
  "Part of Xynteo’s Build Ahead – a business‑led coalition dedicated to collectively tackling the challenge of achieving a net‑zero built environment",
  "Signatory to WRI‑led Business Charter, a value‑chain approach to decarbonising the building and construction sector in India"
];

/* slide‑up template */
const slide = {
  hidden: { y: 25, opacity: 0 },
  show:   (i) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.12 }
  })
};

export default function PartnershipsSection() {
  return (
    <section className="bg-white py-16 px-6 text-center">
      {/* heading + subtitle (stagger) */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.35 }}
        variants={slide}
      >
        <motion.h2 custom={0} variants={slide}
          className="text-3xl font-serif mb-2">
          Partnerships
        </motion.h2>

        <motion.p custom={1} variants={slide}
          className="text-gray-600 mb-10">
          Strategic partnerships to lead the change in the industry
        </motion.p>
      </motion.div>

      {/* list of partnerships */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-start gap-8 md:gap-12">
        {partnerships.map((text, i) => (
          <motion.div
            key={text}
            custom={i}
            variants={slide}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.35 }}
            className={`text-gray-700 text-sm leading-relaxed md:w-1/3 px-4 ${
              i !== 0 ? "border-l border-gray-300" : ""
            }`}
          >
            {text}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

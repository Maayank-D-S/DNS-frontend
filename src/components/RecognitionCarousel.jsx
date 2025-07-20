import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const recognitionItems = [
  "First Real Estate Company in India to have **SBTi validated Net‑Zero Targets** (both near and long term)",
  "Ranked 1st in India with the 6th highest score out of 500 Global Real Estate Development companies in the S&P Global Corporate Sustainability Assessment 2024. Member of Dow Jones Sustainability Indices",
  "Ranked 1st in Asia with a perfect score of 100/100 in the Residential Development Benchmark category at Global Real Estate Sustainability Benchmark 2024 (GRESB)",
  "Ranked 1st in India and 5th in Asia with a 5‑star rating and a score of 94/100 in GRESB Standing Investments Benchmark 2024",
  "Ranked 3rd among 300 most influential companies across the globe and adjudged No. 1 in the real estate industry globally in the Urban Benchmark published by the World Benchmarking Alliance",
  "Included in the **FTSE4Good Index Series** in the June 2023 index review",
  "Winner of the 10th **IGBC Green Champion Award** under the category of ‘Developer leading the Green Homes Movement in India’"
];

/* generic slide‑up */
const slide = {
  hidden: { y: 25, opacity: 0 },
  show:   (i) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.1 }
  })
};

export default function RecognitionCarousel() {
  const [start, setStart] = useState(0);
  const perPage           = 4;

  const prev = () => start > 0 && setStart(start - 1);
  const next = () =>
    start + perPage < recognitionItems.length && setStart(start + 1);

  const visible = recognitionItems.slice(start, start + perPage);

  return (
    <section className="text-center py-16 px-4 bg-white">
      {/* heading & subheading with stagger */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.35 }}
        variants={slide}
      >
        <motion.h2 custom={0} variants={slide}
          className="text-3xl font-serif mb-2">
          Recognition
        </motion.h2>

        <motion.p custom={1} variants={slide}
          className="text-gray-600 mb-10">
          Leading in global sustainability benchmarks
        </motion.p>
      </motion.div>

      <div className="relative max-w-7xl mx-auto">
        {/* card row */}
        <div className="flex justify-center gap-8 overflow-hidden">
          {visible.map((item, i) => (
            <motion.div
              key={item}
              custom={i}
              variants={slide}
              initial="hidden"
              animate="show"
              className="w-1/4 min-w-[220px] px-3 border-l border-gray-200
                         text-left text-sm text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: item.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
              }}
            />
          ))}
        </div>

        {/* navigation */}
        <div className="flex justify-center mt-10 gap-6">
          <button
            className="p-2 hover:text-yellow-600 transition disabled:opacity-30"
            onClick={prev}
            disabled={start === 0}
          >
            <ChevronLeft size={24} />
          </button>

          <button
            className="p-2 hover:text-yellow-600 transition disabled:opacity-30"
            onClick={next}
            disabled={start + perPage >= recognitionItems.length}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}

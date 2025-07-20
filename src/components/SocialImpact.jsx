import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const socialItems = [
  {
    title: "Unnati – Women Empowerment",
    imgSrc: "/images/women-empowerment.jpg",
    description:
      "Unnati, Lodha’s flagship Women’s Economic Empowerment initiative, champions and enables increased female participation in the formal workforce."
  },
  {
    title: "Lodha Genius Programme",
    imgSrc: "/images/lodha-genius.jpg",
    description:
      "Lodha Genius Programme, in partnership with Ashoka University, is a fully‑funded scholarship that nurtures and inspires the nation’s brightest young minds."
  },
  {
    title: "Education Infrastructure",
    imgSrc: "/images/school-infra.jpg",
    description:
      "Lodha is building the nation through access to quality education, with the Lodha World Schools, Lodha Oakwood School and the Sri Ram Universal School."
  }
];

/* generic slide‑up */
const slide = {
  hidden: { y: 25, opacity: 0 },
  show:   i => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.12 }
  })
};

/* card‑level slide‑up (image + text + button together) */
const cardWrap = {
  hidden: { y: 40, opacity: 0 },
  show:   { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } }
};

function SocialCard({ data }) {
  const ref      = useRef(null);
  const inView   = useInView(ref, { amount: 0.35 });
  const controls = useAnimation();

  useEffect(() => {
    inView ? controls.start("show") : controls.start("hidden");
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={cardWrap}
      initial="hidden"
      animate={controls}
      className="flex flex-col"
    >
      <img src={data.imgSrc} alt={data.title}
           className="w-full h-64 object-cover mb-4" />

      <p className="text-gray-700 text-sm mb-4">{data.description}</p>

      <button
        className="w-max border border-[#b5913e] text-[#b5913e] px-4 py-2 text-sm
                   hover:bg-[#b5913e] hover:text-white transition">
        Know More
      </button>
    </motion.div>
  );
}

export default function SocialImpact() {
  /* heading / intro animation */
  const headRef  = useRef(null);
  const headView = useInView(headRef, { amount: 0.35 });

  return (
    <section className="bg-[#fdf8ec] py-20 px-4 text-center">
      <motion.div
        ref={headRef}
        initial="hidden"
        animate={headView ? "show" : "hidden"}
        variants={slide}
        className="max-w-6xl mx-auto"
      >
        <motion.h2 custom={0} variants={slide}
          className="text-2xl md:text-3xl font-serif text-gray-800 mb-2">
          Social Impact
        </motion.h2>

        <motion.p custom={1} variants={slide}
          className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base mb-12">
          Lodha is committed to creating a positive impact on Indian society
          through programmes which support the nation’s development. Our
          current areas of focus are Women’s Empowerment and Education.
        </motion.p>
      </motion.div>

      {/* cards grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-left">
        {socialItems.map((item) => (
          <SocialCard key={item.title} data={item} />
        ))}
      </div>
    </section>
  );
}

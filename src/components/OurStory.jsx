import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

/* slide‑up variants for each text line */
const textVariants = {
  hidden: { y: 30, opacity: 0 },
  show: (i) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.12 },
  }),
};

/* reusable row component ------------------------------------------- */
function StoryRow({ img, heading, copy, reverse }) {
  // Text visibility
  const textRef = useRef(null);
  const textInView = useInView(textRef, { amount: 0.4 });

  // Image visibility (1% threshold)
  const imageRef = useRef(null);
  const imageInView = useInView(imageRef, { amount: 0.01 });

  const controls = useAnimation();

  useEffect(() => {
    if (textInView) controls.start("show");
    else controls.start("hidden");
  }, [textInView, controls]);

  const imageCol = (
    <div
      ref={imageRef}
      className="w-[90%] mx-auto md:w-1/2 relative overflow-hidden rounded"
    >
      <img
        src={img}
        alt={heading}
        className="w-full h-64 md:h-80 object-cover"
      />
      <motion.div
        animate={{ x: imageInView ? "100%" : "50%" }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="absolute inset-0 bg-white z-10 pointer-events-none"
      />
    </div>
  );

  const textCol = (
    <motion.div
      ref={textRef}
      className="md:w-1/2"
      variants={textVariants}
      initial="hidden"
      animate={controls}
    >
      <motion.h3
        custom={0}
        variants={textVariants}
        className="text-xl md:text-2xl font-serif text-gray-800 mb-4"
      >
        {heading}
      </motion.h3>
      <motion.p
        custom={1}
        variants={textVariants}
        className="text-gray-700 leading-relaxed text-base"
      >
        {copy}
      </motion.p>
    </motion.div>
  );

  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-10 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {imageCol}
      {textCol}
    </div>
  );
}

/* main section ------------------------------------------------------ */
export default function OurStory() {
  const copy1 = `Most real estate headaches are rooted in miscommunication and opacity. At D&S, we build
processes and platforms that engineer trust — through visible data, verified listings and clear
accountability. Trust isn’t a feature, it’s the foundation.`;
  const copy2 = `We don’t just consult. We co-create infrastructure that adapts, scales, and sustains. From
zoning logic to urban layouts, everything we design is modular, meaningful, and made to
solve real-world execution challenges.`;
  const copy3 = `Whether it’s a residential or commercial — we design with intent. Every decision goes
through the same filter: is it simple, is it scalable, is it honest?`;
  const copy4 = `We replace friction with flow. From UnBroker’s AI-guided bookings to Csite’s drag-drop
masterplanning, we’re building tools that work like modern software — not 1990s paperwork.`;
  const copy5 = `Sustainability isn't a pitch word. It’s a protocol we enrich into our systems ensuring spaces
we touch leave fewer regrets behind.`;

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-sm uppercase text-[#b5913e] font-medium tracking-wider">
            Our Mission
          </p>
          <h2 className="text-2xl md:text-3xl font-serif text-gray-800 mt-1">
          No chaos. No middlemen. Truly transparent Real Estate.
          </h2>
        </div>

        {/* Five alternating rows */}
        <StoryRow
          img="/s4.jpg"
          heading="Designing trust into the system"
          copy={copy1}
          reverse={false}
        />
        <div className="my-12" />

        <StoryRow
          img="/new-1.jpg"
          heading="Building smarter, not harder"
          copy={copy2}
          reverse={true}
        />
        <div className="my-12" />

        <StoryRow
          img="/s2.jpg"
          heading="Clean design. Clear process."
          copy={copy3}
          reverse={false}
        />
        <div className="my-12" />

        <StoryRow
          img="/new.jpg"
          heading="Making real estate truly digital-first"
          copy={copy4}
          reverse={true}
        />
        <div className="my-12" />

        <StoryRow
          img="/new-2.jpg"
          heading="Building for a future that outlives us"
          copy={copy5}
          reverse={false}
        />
      </div>
    </section>
  );
}

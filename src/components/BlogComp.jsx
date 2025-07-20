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
  const textRef = useRef(null);
  const textInView = useInView(textRef, { amount: 0.4 });
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
export default function BlogComp({ blog }) {
  const contents = blog.content;

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-sm uppercase text-[#b5913e] font-medium tracking-wider">
            BLOG
          </p>
          <h2 className="text-2xl md:text-3xl font-serif text-gray-800 mt-1">
            {blog.title}
          </h2>
        </div>

        {contents.map((content, index) => (
          <div key={index}>
            <StoryRow
              img={content.image}
              heading={content.heading}
              copy={content.copy}
              reverse={index % 2 === 0}
            />
            <div className="my-12" />
          </div>
        ))}
      </div>
    </section>
  );
}

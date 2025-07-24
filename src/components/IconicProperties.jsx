// src/components/IconicProperties.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const products = [
  {
    slug: "csite",
    name: "CSite",
    description:
      "A new-age building experience for managing your construction sites digitally.",
    image: "/csitel.png",
  },
  {
    slug: "unbroker",
    name: "UnBroker",
    description:
      "Discover your true home, interact digitally and find verified listings—powered by AI.",
    image: "/ub.png",
  },
];

const cardVariants = {
  hidden: { y: 35, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function IconicProperties() {
  return (
    <section id="products" className="py-16 px-6 md:px-16 bg-white">
      <p className="text-xs tracking-widest text-yellow-600 text-center mb-1">
        OUR PRODUCTS
      </p>
      <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
        WHAT WE OFFER
      </h2>

      <div className="flex flex-col md:flex-row gap-6 items-center md:items-stretch justify-center">
        {products.map((p, i) => (
          <div key={p.slug} className="w-full md:w-1/3 max-w-md">
            <Card product={p} delay={i * 0.06} />
          </div>
        ))}
      </div>
    </section>
  );
}

function Card({ product, delay }) {
  const { slug, name, description, image } = product;

  return (
    <Link to={`/${slug}`} className="block">
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.35 }}
        transition={{ delay }}
        className="w-full h-full bg-white rounded-md 
                   overflow-hidden shadow hover:shadow-lg transition
                   flex flex-col min-h-[300px]"
      >
        {/* Image */}
        <div className="h-48 md:h-56 flex-shrink-0 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover pointer-events-none"
          />
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-grow justify-between">
          <div>
            <h3 className="text-lg md:text-xl font-medium">{name}</h3>
            <p className="text-gray-500 text-sm mt-2">{description}</p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

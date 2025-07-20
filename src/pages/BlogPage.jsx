import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

import blogs from "../data/blogs";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const BlogGrid = () => {
  const navigate = useNavigate();
  return (
    <div>
    <Header/>
    <section className="py-20 px-6 md:px-16 bg-white">
      <motion.h2
        className="text-3xl md:text-4xl font-serif mb-12 text-center"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        Latest Insights
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 max-w-7xl mx-auto">
      {blogs.map((blog, idx) => (
            <motion.div
              key={blog.id}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="flex gap-6"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-40 h-28 object-cover flex-shrink-0"
              />
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-1">
                  {blog.title}
                </h3>
                <p className="text-gray-800 mb-1">
                  {blog.heading}
                </p>
                <button
                  onClick={() => navigate(`/blog/${blog.id}`, { state: { blog } })}
                  className="text-yellow-700 hover:underline text-sm"
                >
                  Read More
                </button>
              </div>
            </motion.div>
          ))}
      </div>
    </section>
    <Footer/>
    </div>
  );
};

export default BlogGrid;

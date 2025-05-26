"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

console.log("motion.section", motion.section); // Add at top of the component
export default function Contact() {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, backgroundColor: "#e0e0e0", transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
  };

  const arrowVariants = {
    hover: { x: 5, transition: { duration: 0.3 } },
  };

  return (
    <motion.section
      id="contact"
      className="py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-10 text-white font-pop"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          WANT TO WORK TOGETHER?
        </motion.h2>
        <motion.div
          className="flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={containerVariants}
        >
          <motion.a
            href="mailto:adityakumarjha.276@gmail.com?subject=Contact%20Request"
            className="bg-white font-pop text-black py-3 px-7 rounded-3xl hover:bg-gray-300 transition duration-300 flex items-center gap-2"
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
          >
            Send an Email
            <motion.span
              className="inline-block"
              variants={arrowVariants}
              whileHover="hover"
            >
              <FiArrowRight size={20} />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}

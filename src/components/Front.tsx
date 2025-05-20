"use client"

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import bg from '@/assets/bg.jpg';

export default function Front() {
  return (
    <section
      id="home"
      className="relative text-white font-pop bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>

      <div className="container h-screen px-6 text-center flex justify-center items-center flex-col relative">
        <motion.h1

          className="text-5xl md:text-6xl font-bold mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          WELCOME TO MY PORTFOLIO
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          My Name is Aditya Kumar Jha
        </motion.p>
        <motion.p
          className="text-xl md:text-2xl mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
        >
          I code experiences 🧑🏽‍💻
        </motion.p>
        <motion.a
          href="#contact"
          className="bg-white text-black py-3 px-8 rounded-full text-md md:text-xl hover:bg-gray-300 transition duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
        >
          Get in Touch
        </motion.a>

        {/* Social Icons (Mobile Only) */}
        <motion.div
          className="border-2 mt-8 flex p-3 rounded-3xl border-gray-400 justify-center items-center gap-6 md:hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.8 }}
        >
          <a
            href="https://github.com/adiijha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://linkedin.com/in/adiikj"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://instagram.com/adii_jha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a
            href="https://twitter.com/adii_kj"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FontAwesomeIcon icon={faXTwitter} size="2x" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

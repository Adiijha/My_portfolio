"use client"

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCode, faHouse, faPhone, faBook, faLaptop } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 },
    }),
  };

  const handleItemClick = (item : string) => {
    setActiveItem(item);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setActiveItem(""); 
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="bg-black shadow-md font-pop fixed top-0 w-full z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-white text-xl h-8 w-8">
          <FontAwesomeIcon icon={faCode} beat />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-center space-x-6 gap-4">
          {["Home", "Projects", "Technologies", "Contact"].map((item, index) => (
            <motion.li
              key={item}
              custom={index}
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.1, color: "#ffffff" }}
            >
              <a
                href={`#${item.toLowerCase()}`}
                className="text-gray-400 hover:text-white text-xl"
              >
                <FontAwesomeIcon
                  icon={
                    item === "Home"
                      ? faHouse
                      : item === "Projects"
                      ? faBook
                      : item === "Technologies"
                      ? faLaptop
                      : faPhone
                  }
                />{" "}
                {item}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Social Icons (Desktop) */}
        <div className="hidden md:flex items-center gap-2">
          {[{ href: "https://github.com/adiijha", icon: faGithub },
            { href: "https://linkedin.com/in/adiikj", icon: faLinkedin },
            { href: "https://instagram.com/adii_jha", icon: faInstagram },
            { href: "https://twitter.com/adii_kj", icon: faXTwitter }
          ].map((social, index) => (
            <motion.a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white mx-2"
              whileHover={{ scale: 1.2, color: "#ffffff" }}
            >
              <FontAwesomeIcon icon={social.icon} size="2x" />
            </motion.a>
          ))}
        </div>
      </nav>

      {/* Mobile Floating Navbar */}
      <motion.div
        className={`fixed bottom-8 border-2 border-gray-700 left-10 right-10 bg-slate-900 bg-opacity-50 backdrop-blur-md z-50 flex justify-between items-center py-3 px-6 md:hidden rounded-3xl`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Mobile Menu Items (without text) */}
        <ul className="flex justify-between space-x-6 w-full">
          {["Home", "Projects", "Technologies", "Contact"].map((item, index) => (
            <motion.li
              key={item}
              custom={index}
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.1, color: "#ffffff" }}
              className="text-center"
            >
              <a
                href={`#${item.toLowerCase()}`}
                className={`text-xl ${activeItem === item ? "text-blue-500" : "text-gray-400"}`}
                onClick={() => handleItemClick(item)} 
              >
                <FontAwesomeIcon
                  icon={
                    item === "Home"
                      ? faHouse
                      : item === "Projects"
                      ? faBook
                      : item === "Technologies"
                      ? faLaptop
                      : faPhone
                  }
                  className="h-7 w-7" 
                />
              </a>
            </motion.li>
          ))}
        </ul>

      </motion.div>
    </header>
  );
}

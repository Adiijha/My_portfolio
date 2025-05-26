"use client";

import React, { useState, useEffect } from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faXTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faCode, faHouse, faPhone, faBook, faLaptop } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [activeItem, setActiveItem] = useState("");

  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setActiveItem("");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", icon: faHouse },
    { label: "Projects", icon: faBook },
    { label: "Technologies", icon: faLaptop },
    { label: "Contact", icon: faPhone },
  ];

  const socialLinks = [
    { href: "https://github.com/adiijha", icon: faGithub },
    { href: "https://linkedin.com/in/adiikj", icon: faLinkedin },
    { href: "https://instagram.com/adii_jha", icon: faInstagram },
    { href: "https://twitter.com/adii_kj", icon: faXTwitter },
  ];

  return (
    <header className="bg-black shadow-md font-pop fixed top-0 w-full z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-white text-xl h-8 w-8">
          <FontAwesomeIcon icon={faCode} beat />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-center space-x-6 gap-4">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href={`#${item.label.toLowerCase()}`}
                className="text-gray-400 hover:text-white text-xl transition-colors duration-300 flex items-center gap-1"
              >
                <FontAwesomeIcon icon={item.icon} /> {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex items-center gap-2">
          {socialLinks.map((social) => (
            <a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-transform duration-300 transform hover:scale-110"
            >
              <FontAwesomeIcon icon={social.icon} size="2x" />
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile Floating Navbar */}
      <LazyMotion features={domAnimation}>
        <m.div
          className="fixed bottom-8 border-2 border-gray-700 left-10 right-10 bg-slate-900 bg-opacity-50 backdrop-blur-md z-50 flex justify-between items-center py-3 px-6 md:hidden rounded-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex justify-between space-x-6 w-full">
            {menuItems.map((item) => (
              <li key={item.label} className="text-center">
                <a
                  href={`#${item.label.toLowerCase()}`}
                  className={`text-xl ${
                    activeItem === item.label ? "text-blue-500" : "text-gray-400"
                  } transition-colors duration-300`}
                  onClick={() => handleItemClick(item.label)}
                >
                  <FontAwesomeIcon icon={item.icon} className="h-7 w-7" />
                </a>
              </li>
            ))}
          </ul>
        </m.div>
      </LazyMotion>
    </header>
  );
}

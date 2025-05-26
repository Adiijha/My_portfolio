"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

import html from "@/assets/html.jpeg";
import css from "@/assets/css.png";
import js from "@/assets/js.jpeg";
import ts from "@/assets/ts.png";
import reactIcon from "@/assets/react.jpeg";
import tailwind from "@/assets/tailwind.jpeg";
import bootstrap from "@/assets/bootstrap.png";
import mui from "@/assets/mui.png";
import node from "@/assets/node-js.jpeg";
import express from "@/assets/express.jpeg";
import mongodb from "@/assets/mongodb.jpeg";
import postgres from "@/assets/postgres.jpeg";
import git from "@/assets/git.jpeg";


interface Tech {
  name: string;
  icon: StaticImageData | string;
}

interface TechMap {
  [category: string]: Tech[];
}


const frontendTech = [
  { name: "HTML5", icon: html },
  { name: "CSS3", icon: css },
  { name: "JavaScript", icon: js },
  { name: "TypeScript", icon: ts },
  { name: "React", icon: reactIcon },
  { name: "TailwindCSS", icon: tailwind },
  { name: "Bootstrap", icon: bootstrap },
  { name: "Material-UI", icon: mui },
];

const backendTech = [
  { name: "Node.js", icon: node },
  { name: "Express.js", icon: express },
];

const databaseTech = [
  { name: "MongoDB", icon: mongodb },
  { name: "PostgreSQL", icon: postgres },
];

const otherTools = [{ name: "Git/GitHub", icon: git }];

// Use consistent keys (all lowercase)
const techMap : TechMap = {
  frontend: frontendTech,
  backend: backendTech,
  databases: databaseTech,
  othertools: otherTools,
};

const categories = [
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "databases", label: "Databases" },
  { key: "othertools", label: "Other Tools" },
];

export default function Technologies() {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      id="technologies"
      className="py-16 font-pop h-full"
      initial="hidden"
      whileInView="visible"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
      viewport={{ once: false }}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-10 text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          TECHNOLOGIES I KNOW
        </motion.h2>

        {/* Category Selector */}
        <motion.nav
          className="flex flex-wrap justify-center space-x-6 md:space-x-12 mb-8 md:mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          aria-label="Technology categories"
        >
          {categories.map(({ key, label }) => (
            <button
              key={key}
              className={`text-lg md:text-xl lg:text-2xl font-semibold text-white cursor-pointer mb-4 md:mb-0 border-b-2 border-transparent ${
                activeCategory === key
                  ? "border-b-2 border-white"
                  : "hover:underline"
              }`}
              onClick={() => setActiveCategory(key)}
              aria-current={activeCategory === key ? "true" : undefined}
            >
              {label}
            </button>
          ))}
        </motion.nav>

        {/* Tech Items Grid */}
        <motion.div
          key={activeCategory}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-10 px-4 md:px-24"
          initial="hidden"
          animate="visible"
          variants={categoryVariants}
        >
          {techMap[activeCategory].map((tech, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-t from-gray-800 to-gray-900 rounded-lg shadow-lg p-4 flex flex-col items-center justify-center transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-gray-500/50 duration-300"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              aria-label={tech.name}
            >
              <div className="mb-4 h-16 w-16 md:h-20 md:w-20 lg:h-12 lg:w-12 relative">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  fill
                  style={{ objectFit: "contain" }}
                  priority={true}
                  draggable={false}
                />
              </div>
              <h3 className="text-base md:text-lg lg:text-lg font-medium text-white">
                {tech.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

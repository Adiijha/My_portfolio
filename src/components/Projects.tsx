"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import RollerSwitch from '@/components/ui/RollerSwitch';
import Image from "next/image";

import snake from "@/assets/snakebit.png";
import gym from "@/assets/gym-web.png";
import portfolio from "@/assets/my-portfolio.png";
import glof from "@/assets/glof.png";
import trade from "@/assets/tradexcel.png";
import hobby from "@/assets/hobbyhive.png";
import dotshort from "@/assets/dotshort.png";
import optishrink from "@/assets/optishrink.png";
import markforge from "@/assets/markforge.png";
import flopentine from "@/assets/flopentine.png";
import dishcovery from "@/assets/dishcovery.png";

import tradeLogo from "@/assets/tradexcel-logo.png";
import hobbyLogo from "@/assets/hobbyhive-logo.png";
import snakeLogo from "@/assets/snakebit-logo.png";
import gymLogo from "@/assets/gym-logo.png";
import portlogo from "@/assets/logo.svg";
import optilogo from "@/assets/optishrink-logo.png";
import dotologo from "@/assets/dotshort-logo.png";
import marklogo from "@/assets/markforge-logo.png";
import floplogo from "@/assets/flopentine-logo.png";
import dishlogo from "@/assets/dishcovery-logo.png";

const projects = [
  {
    id: 1,
    title: "TradeXcel",
    description: "A virtual stock trading app for simulating and mastering market strategies.",
    img: trade,
    link: "https://tradexcel.vercel.app",
    githublink: "https://github.com/Adiijha/TradeXcel-frontend",
    logo: tradeLogo,
    technologies: ["React", "TailwindCSS", "Node.js", "Express", "MongoDB", "Yahoo Finance API"]
  },
  {
    id: 2,
    title: "HobbyHive",
    description: "A social platform connecting hobbyists and enthusiasts to share and grow their passions.",
    img: hobby,
    link: "https://hobbyhive-p.vercel.app",
    githublink: "https://github.com/Adiijha/HobbyHive-frontend",
    logo: hobbyLogo,
    technologies: ["React", "TailwindCSS", "Node.js", "Express", "MongoDB", "Socket.IO", "Cloudinary"]
  },
  {
    id: 3,
    title: "SnakeBit",
    description: "A dynamic snake game with a leaderboard, multiple gameplay modes, and customizable features.",
    img: snake,
    link: "https://snakebitv2.vercel.app/",
    githublink: "https://github.com/Adiijha/SnakeBit-frontend",
    logo: snakeLogo,
    technologies: ["React", "TailwindCSS", "Node.js", "MongoDB", "Express", "Socket.IO"]
  },
  {
    id: 4,
    title: "Gym Website",
    description: "A Gym website landing page with features like booking, 3 step plans etc.",
    img: gym,
    link: "https://adiijha.github.io/GymWeb-dtuproject/",
    githublink: "https://github.com/Adiijha/GymWeb-dtuproject",
    logo: gymLogo,
    technologies: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: 5,
    title: "Portfolio",
    description: "My Personal basic Portfolio showcasing my work and achievements.",
    img: portfolio,
    link: "https://www.adiikj.me/",
    githublink: "https://github.com/Adiijha/My_portfolio",
    logo: portlogo,
    technologies: ["Next Js", "TailwindCSS", "Framer Motion", "React"]
  },
  {
    id: 6,
    title: "GLOF-Prediction",
    description: "A landing page for a Machine Learning model to predict the GLOF.",
    img: glof,
    link: "https://glof-prediction.vercel.app/",
    githublink: "https://github.com/Adiijha/GLOF-Prediction",
    logo: glof,
    technologies: ["React", "TailwindCSS"]
  },
];

const fiveWeekProjects = [
  {
    id: 1,
    title: "DotShort",
    description: "A smart link shortener with QR codes, custom links, expiration, and basic analytics.",
    img: dotshort,
    link: "https://dotshort.vercel.app/",
    githublink: "https://github.com/Adiijha/DotShort-frontend",
    logo: dotologo,
    technologies: ["React", "TailwindCSS", "Node.js", "Express", "MongoDB", "Cloudinary"]
  },
  {
    id: 2,
    title: "OptiShrink",
    description: "Compress and optimize PDFs/images with different quality levels, batch processing, and history tracking.",
    img: optishrink,
    link: "https://optishrink.vercel.app/",
    githublink: "https://github.com/Adiijha/OptiShrink-frontend",
    logo: optilogo,
    technologies: ["React", "TailwindCSS", "Node.js", "Express", "MongoDB", "PDF-Co", "Cloudinary"]
  },
  {
    id: 3,
    title: "MarkForge",
    description: "A README generator for profile READMEs (expanding soon for project READMEs) with templates and downloads.",
    img: markforge,
    link: "https://markforge.vercel.app/",
    githublink: "https://github.com/Adiijha/MarkForge-frontend",
    logo: marklogo,
    technologies: ["React", "TailwindCSS"]
  },
  {
    id: 4,
    title: "Flopentine",
    description: "A fun Valentine’s project to anonymously share, read, and vote on hilarious Valentine’s Day fails.",
    img: flopentine,
    link: "https://flopentine.vercel.app/",
    githublink: "https://github.com/Adiijha/Flopentine-frontend",
    logo: floplogo,
    technologies: ["React", "TailwindCSS"]
  },
  {
    id: 5,
    title: "Dishcovery",
    description: "Find any dish, get full instructions, ingredients, and (soon) save favorites & watch video guides.",
    img: dishcovery,
    link: "https://dishcovery2.vercel.app/",
    githublink: "https://github.com/Adiijha/Dishcovery-frontend",
    logo: dishlogo,
    technologies: ["React", "TailwindCSS", "Spoonacular API"]
  },
];

export default function Projects() {
  const [showFiveWeekProjects, setShowFiveWeekProjects] = useState(false);

  return (
    <section id="projects" className="relative py-20 font-pop">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-center mb-6 text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          MY PROJECTS
        </motion.h2>

        <div className="flex justify-center items-center gap-4 mb-8">
          <span className="text-white text-sm md:text-xl">Main Projects</span>
          <RollerSwitch
            checked={showFiveWeekProjects}
            onChange={() => setShowFiveWeekProjects(!showFiveWeekProjects)}
            color="black"
            className="text-white w-10 h-10"
          />
          <span className="text-white text-sm md:text-xl">5 Weeks 5 Projects</span>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.4 } },
          }}
        >
          {(showFiveWeekProjects ? fiveWeekProjects : projects).map((project) => (
            <motion.div
              key={project.id}
              className="bg-gradient-to-t from-gray-800 to-gray-900 rounded-lg shadow-lg p-6 flex flex-col justify-between cursor-pointer hover:shadow-white/50 transition-all"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
              }}
            >
              <div className="flex items-center mb-4">
                <Image src={project.logo} alt={`${project.title} logo`} width={48} height={48} className="mr-4 rounded" />
                <h3 className="text-white text-xl md:text-2xl font-bold">{project.title}</h3>
              </div>
              <p className="text-gray-300 text-sm md:text-base mb-4">{project.description}</p>

              <div className="relative group">
                <Image
                  src={project.img}
                  alt={project.title}
                  className="rounded-lg transition-opacity duration-300"
                />
                <div className="absolute inset-0 flex flex-row items-center gap-4 justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black bg-white border-2 mt-1.5 border-black px-4 py-2 rounded-lg hover:bg-gray-200 transition mb-2"
                  >
                    Live Link
                  </a>
                  <a
                    href={project.githublink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-gray-800 border-2 border-gray-700 px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                  >
                    Github Repo
                  </a>
                </div>
              </div>
              <motion.div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="bg-gray-800 text-gray-300 px-3 py-1 text-xs md:text-sm font-medium rounded-lg">
                    {tech}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

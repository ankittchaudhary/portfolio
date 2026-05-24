"use client";

import { useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

const dummyProjects: Project[] = [
  {
    id: "1",
    category: "SaaS Platform",
    title: "Taskflow",
    description: "A productivity platform helping teams organize tasks, collaborate in real-time and get more done.",
    image: "/cms.png",
    link: "#",
  },
  {
    id: "2",
    category: "Mobile App",
    title: "Finance App",
    description: "A comprehensive personal finance tracker designed to help users manage their budget with ease.",
    image: "/cms.png",
    link: "#",
  },
  {
    id: "3",
    category: "E-commerce",
    title: "Storefront",
    description: "A modern e-commerce storefront with seamless checkout, inventory management, and analytics.",
    image: "/cms.png",
    link: "#",
  }
];

interface FeaturedWorkCardProps {
  project: Project;
}

const FeaturedWorkCard = ({ project }: FeaturedWorkCardProps) => {
  return (
    <div className="bg-[#141414] rounded-3xl p-6 md:p-12 pb-0 md:pb-0 text-white flex flex-col md:flex-row gap-8 items-center shadow-sm">
      <div className="flex-1 space-y-4">
        <p className="text-zinc-400 text-sm">{project.category}</p>
        <h3 className="text-3xl md:text-4xl font-semibold">{project.title}</h3>
        <p className="text-zinc-400 text-base md:text-lg max-w-md leading-relaxed">
          {project.description}
        </p>
        <div className="pt-4">
          <a
            href={project.link}
            className="inline-flex items-center gap-2 text-white font-medium border-b border-white/30 pb-1 hover:border-white transition-colors"
          >
            View Project <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
      <div className="flex-2 w-full relative aspect-4/3 md:aspect-auto md:h-[400px] rounded-2xl rounded-br-none rounded-bl-none overflow-hidden bg-zinc-800">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-top"
        />
      </div>
    </div>
  );
};

export default function FeaturedWork() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const projects = dummyProjects;

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];
  
  // Calculate progress width (0 to 1)
  const progressPercent = ((currentIndex + 1) / projects.length) * 100;

  // Animation variants
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  };

  return (
    <section className="py-24 bg-white" id="work">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-16 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col md:flex-row md:items-center justify-between w-full space-y-6">
            <div className="flex flex-col">
              <p className="uppercase tracking-[3px] text-sm font-semibold text-zinc-500">
                FEATURED WORK
              </p>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-zinc-800">
                Selected work <br />
                <span className="italic font-normal font-serif">that speaks for itself.</span>
              </h2>
              <p className="text-lg text-zinc-600 max-w-md mt-4">
                A selection of projects where I helped brands and businesses create meaningful digital experiences.
              </p>
            </div>
            <div className="pt-4">
              <a
                href="#all-work"
                className="inline-flex items-center gap-2 bg-[#1a1a1a] text-[#f5f0eb] text-[13.5px] font-medium px-6 py-3 rounded-xl transition-all duration-300 hover:bg-[#333] hover:scale-[1.03] active:scale-[0.97]"
              >
                View All Work
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Content - Project Card */}
          <div className="w-full">
            <div className="relative overflow-hidden rounded-3xl">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                >
                  <FeaturedWorkCard project={currentProject} />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Pagination / Controls */}
            <div className="flex items-center justify-center gap-6 mt-8 text-zinc-500 font-medium">
              <button 
                onClick={handlePrev}
                className="p-2 hover:text-zinc-800 transition-colors"
                aria-label="Previous Project"
              >
                <ArrowRight className="w-5 h-5 rotate-180" />
              </button>
              <div className="flex items-center gap-4 text-sm">
                <span className="text-zinc-800 w-4 text-right">
                  {String(currentIndex + 1).padStart(2, '0')}
                </span>
                <div className="w-16 h-[2px] bg-zinc-200 overflow-hidden relative rounded-full">
                  <motion.div 
                    className="absolute top-0 left-0 h-full bg-zinc-800"
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercent}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <span className="w-4 text-left">
                  {String(projects.length).padStart(2, '0')}
                </span>
              </div>
              <button 
                onClick={handleNext}
                className="p-2 hover:text-zinc-800 transition-colors"
                aria-label="Next Project"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

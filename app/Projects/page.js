"use client";

import { motion } from "framer-motion";
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaImage, 
  FaLink, 
  FaUser, 
  FaShoppingCart, 
  FaBlog, 
  FaComments 
} from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "ImageZ - AI Image Generator",
      desc: "Credit-based AI image generator using Clipdrop GenAI.",
      tech: ["MERN Stack", "Clipdrop API", "Tailwind CSS"],
      github: "https://github.com/Payal234/Text-image",
      live: "https://text-image-kappa.vercel.app/",
      icon: <FaImage className="text-indigo-500 text-lg" />,
    },
    {
      title: "URL Shortener",
      desc: "Shorten long URLs and track analytics.",
      tech: ["Next.js", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/Payal234/shorten-url",
      live: "#",
      icon: <FaLink className="text-indigo-500 text-lg" />,
    },
    {
      title: "Portfolio Website",
      desc: "Personal portfolio showcasing projects and skills.",
      tech: ["Next.js", "Tailwind CSS"],
      github: "#",
      live: "#",
      icon: <FaUser className="text-indigo-500 text-lg" />,
    },
    {
      title: "E-commerce Store",
      desc: "Full-featured online store with payment integration.",
      tech: ["React", "Stripe", "MongoDB"],
      github: "#",
      live: "#",
      icon: <FaShoppingCart className="text-indigo-500 text-lg" />,
    },
    {
      title: "Blog Platform",
      desc: "Markdown blog site with a custom CMS.",
      tech: ["Node.js", "Express", "MongoDB"],
      github: "#",
      live: "#",
      icon: <FaBlog className="text-indigo-500 text-lg" />,
    },
    {
      title: "Chat App",
      desc: "Real-time chat application with rooms and messaging.",
      tech: ["React", "Node.js", "Socket.io"],
      github: "#",
      live: "#",
      icon: <FaComments className="text-indigo-500 text-lg" />,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.25 } },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring" } },
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 px-6"
    >
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center mb-12 text-indigo-700"
      >
        Projects
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            variants={item}
            whileHover={{ scale: 1.05, translateY: -5 }}
            className="bg-white border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-xl transition flex flex-col"
          >
            {/* Project Title with Icon */}
            <div className="flex items-center gap-2 mb-2">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {project.icon}
              </motion.div>
              <h3 className="text-lg font-semibold text-gray-800">
                {project.title}
              </h3>
            </div>

            <p className="text-gray-700 mb-4 flex-grow">{project.desc}</p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Icons with tooltips */}
            <div className="flex gap-4 mt-auto relative">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-gray-700 transition text-lg relative group"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaGithub />
                <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 text-xs bg-gray-800 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  GitHub Repo
                </span>
              </motion.a>

              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800 transition text-base relative group"
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
              >
                <FaExternalLinkAlt />
                <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 text-xs bg-gray-800 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  Live Demo
                </span>
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

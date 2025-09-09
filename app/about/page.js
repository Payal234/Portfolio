"use client";

import { FaCode, FaDatabase, FaTools } from "react-icons/fa";
import { motion } from "framer-motion";

export default function About() {
  const education = [
    {
      degree: "MCA",
      school: "Prof. Ram Meghe Institute of Technology and Research, Amravati",
      year: "2024 - 2026",
      cgpa: "8.96 CGPA",
    },
    {
      degree: "BCA",
      school: "GH Raisoni Institute of Engineering and Technology, Nagpur",
      year: "2020 - 2023",
      cgpa: "8.63 CGPA",
    },
  ];

  const skills = [
    {
      name: "Programming",
      icon: <FaCode className="text-indigo-600 text-3xl" />,
      items: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Python"],
    },
    {
      name: "Tools",
      icon: <FaTools className="text-indigo-600 text-3xl" />,
      items: [
        "Tailwind CSS",
        "Material UI",
        "Git & GitHub",
        "VS Code",
        "Figma",
      ],
    },
    {
      name: "Databases",
      icon: <FaDatabase className="text-indigo-600 text-3xl" />,
      items: ["MySQL", "MongoDB"],
    },
  ];

  // Framer Motion variants for stagger animation
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring" } },
  };

  return (
  <section id="about" className="py-17 bg-gradient-to-b from-gray-50 to-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl  mx-auto">
        {/* About Me */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-indigo-700 mb-6 text-center"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-lg md:text-xl text-gray-700 mb-16 text-center max-w-3xl mx-auto"
        >
          I&apos;m Payal, a dedicated web developer with a passion for creating
          modern and responsive web applications. I specialize in transforming
          ideas into seamless, user-friendly digital experiences. My focus is on
          delivering high-quality, efficient, and visually appealing solutions
          that engage users effectively.
        </motion.p>

        {/* Education Section with Stagger Animation */}
        <h3 className="text-2xl font-semibold text-indigo-600 mb-8 text-center">
          Education
        </h3>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ scale: 1.05, translateY: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100"
            >
              <h4 className="text-xl font-bold text-gray-900">{edu.degree}</h4>
              <p className="text-gray-700 mt-1">{edu.school}</p>
              <p className="text-indigo-600 font-medium mt-2">{edu.cgpa}</p>
              <p className="text-gray-500">{edu.year}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Section with Stagger Animation & Floating Icons */}
        <h3 className="text-2xl font-semibold text-indigo-600 mb-8 text-center">
          Skills
        </h3>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 180 }}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transform"
            >
              <div className="flex items-center gap-3 mb-4">
                {/* Floating icon animation */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {skill.icon}
                </motion.div>
                <h4 className="text-xl font-bold text-gray-900">
                  {skill.name}
                </h4>
              </div>
              <ul className="space-y-2">
                {skill.items.map((itm, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ scale: 1.08, x: 5 }}
                    className="bg-gray-100 p-2 rounded-lg text-gray-700 text-center font-medium shadow-sm"
                  >
                    {itm}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

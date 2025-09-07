"use client";

import { useState } from "react";
import { Home, User, FolderOpen, Mail, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#f8f9fa] text-gray-900 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <h1
          className="text-2xl md:text-3xl italic tracking-tight text-gray-900"
          style={{ fontFamily: "cursive" }}
        >
          MyPortfolio 👩‍💻
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <a href="#home" className="hover:text-indigo-600 transition-colors flex flex-col items-center">
              <Home className="w-6 h-6" />
              <span className="sr-only">Home</span>
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-indigo-600 transition-colors flex flex-col items-center">
              <User className="w-6 h-6" />
              <span className="sr-only">About</span>
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-indigo-600 transition-colors flex flex-col items-center">
              <FolderOpen className="w-6 h-6" />
              <span className="sr-only">Projects</span>
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-indigo-600 transition-colors flex flex-col items-center">
              <Mail className="w-6 h-6" />
              <span className="sr-only">Contact</span>
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-200"
          onClick={() => setIsOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* AnimatePresence ensures smooth unmount */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Slide-in Drawer */}
            <motion.div
              className="fixed top-0 right-0 h-full w-64 bg-[#f8f9fa] shadow-lg z-50 flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              {/* Close Button */}
              <div className="flex justify-end p-4">
                <button onClick={() => setIsOpen(false)} className="hover:bg-gray-200 p-2 rounded-md">
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Menu Items */}
              <ul className="flex flex-col space-y-6 px-6 mt-6 text-lg font-medium">
                <li>
                  <a
                    href="#home"
                    className="flex items-center gap-3 hover:text-indigo-600"
                    onClick={() => setIsOpen(false)}
                  >
                    <Home className="w-5 h-5" /> Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="flex items-center gap-3 hover:text-indigo-600"
                    onClick={() => setIsOpen(false)}
                  >
                    <User className="w-5 h-5" /> About
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="flex items-center gap-3 hover:text-indigo-600"
                    onClick={() => setIsOpen(false)}
                  >
                    <FolderOpen className="w-5 h-5" /> Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="flex items-center gap-3 hover:text-indigo-600"
                    onClick={() => setIsOpen(false)}
                  >
                    <Mail className="w-5 h-5" /> Contact
                  </a>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

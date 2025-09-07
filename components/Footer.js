"use client";

import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-6 mt-auto w-full">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Contact Info - left side */}
        <div className="flex flex-col items-start gap-2 text-gray-300 text-sm">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-indigo-500" />
            <span>Karanja Ghadge [442203] , Maharashtra, India</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone className="text-indigo-500" />
            <span>+91 -XXXXXXXXXX</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-indigo-500" />
            <span>your@email.com</span>
          </div>
        </div>

        {/* Social Links - right side */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a
            href="https://github.com/Payal234"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="text-gray-300 hover:text-indigo-500 transition-colors text-lg"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/payal-ramkrishna-dhobale-5275b022a"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="text-gray-300 hover:text-indigo-500 transition-colors text-lg"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
            className="text-gray-300 hover:text-indigo-500 transition-colors text-lg"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 text-xs mt-4">
        © {new Date().getFullYear()} Payal. All rights reserved.
      </div>
    </footer>
  );
}

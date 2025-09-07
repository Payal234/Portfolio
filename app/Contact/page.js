"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-gray-50 to-gray-100"
    >
      <div className="w-full max-w-xl backdrop-blur-sm bg-white/70 border border-gray-200 rounded-2xl shadow-xl p-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-indigo-700 text-center"
        >
          Contact
        </motion.h2>

        <motion.form
          className="space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {/* Name Input */}
          <motion.div
            whileHover={{ y: -2, boxShadow: "0 6px 15px rgba(0,0,0,0.08)" }}
            transition={{ type: "spring", stiffness: 150 }}
            className="relative"
          >
            <input
              type="text"
              id="name"
              placeholder=" "
              className="peer w-full border border-gray-300 rounded-lg px-4 pt-5 pb-2 focus:outline-none focus:ring-0 transition"
            />
            <label
              htmlFor="name"
              className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-indigo-600 peer-focus:text-sm"
            >
              Your Name
            </label>
          </motion.div>

          {/* Email Input */}
          <motion.div
            whileHover={{ y: -2, boxShadow: "0 6px 15px rgba(0,0,0,0.08)" }}
            transition={{ type: "spring", stiffness: 150 }}
            className="relative"
          >
            <input
              type="email"
              id="email"
              placeholder=" "
              className="peer w-full border border-gray-300 rounded-lg px-4 pt-5 pb-2 focus:outline-none focus:ring-0 transition"
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-indigo-600 peer-focus:text-sm"
            >
              Your Email
            </label>
          </motion.div>

          {/* Message Input */}
          <motion.div
            whileHover={{ y: -2, boxShadow: "0 6px 15px rgba(0,0,0,0.08)" }}
            transition={{ type: "spring", stiffness: 150 }}
            className="relative"
          >
            <textarea
              id="message"
              rows={4}
              placeholder=" "
              className="peer w-full border border-gray-300 rounded-lg px-4 pt-5 pb-2 focus:outline-none focus:ring-0 transition"
            />
            <label
              htmlFor="message"
              className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-indigo-600 peer-focus:text-sm"
            >
              Your Message
            </label>
          </motion.div>

          {/* Floating Submit Button */}
          <motion.button
            type="submit"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 12px 25px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.97 }}
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg shadow-lg cursor-pointer hover:bg-indigo-700 transition-all"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}

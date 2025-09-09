"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Validate function
  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty.";
    }

    return newErrors;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setErrors({});
      console.log("Form submitted:", formData);
      // here you can send data with EmailJS, Nodemailer, or API route
      setFormData({ name: "", email: "", message: "" });
    } else {
      setErrors(validationErrors);
      setSubmitted(false);
    }
  };

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-gray-100"
    >
      <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl backdrop-blur-sm bg-white/80 border border-gray-200 rounded-2xl shadow-xl p-6 sm:p-8 md:p-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-indigo-700 text-center"
        >
          Contact
        </motion.h2>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6 sm:space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {/* Name Input */}
          <div className="relative">
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder=" "
              className={`peer w-full border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded-lg px-4 pt-5 pb-2 focus:outline-none focus:ring-2 ${
                errors.name ? "focus:ring-red-400" : "focus:ring-indigo-400"
              } transition text-sm sm:text-base`}
            />
            <label
              htmlFor="name"
              className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-indigo-600 peer-focus:text-sm"
            >
              Your Name
            </label>
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email Input */}
          <div className="relative">
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder=" "
              className={`peer w-full border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-lg px-4 pt-5 pb-2 focus:outline-none focus:ring-2 ${
                errors.email ? "focus:ring-red-400" : "focus:ring-indigo-400"
              } transition text-sm sm:text-base`}
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-indigo-600 peer-focus:text-sm"
            >
              Your Email
            </label>
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Message Input */}
          <div className="relative">
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder=" "
              className={`peer w-full border ${
                errors.message ? "border-red-500" : "border-gray-300"
              } rounded-lg px-4 pt-5 pb-2 focus:outline-none focus:ring-2 ${
                errors.message ? "focus:ring-red-400" : "focus:ring-indigo-400"
              } transition text-sm sm:text-base`}
            />
            <label
              htmlFor="message"
              className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-indigo-600 peer-focus:text-sm"
            >
              Your Message
            </label>
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 12px 25px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.97 }}
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-full bg-indigo-600 text-white font-semibold py-3 sm:py-4 rounded-lg shadow-lg cursor-pointer hover:bg-indigo-700 transition-all text-sm sm:text-base"
          >
            Send Message
          </motion.button>

          {/* Success Message */}
          {submitted && (
            <p className="text-green-600 text-center mt-4 text-sm sm:text-base">
              ✅ Thank you! Your message has been sent.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}


// "use client";

// import { motion } from "framer-motion";

// export default function Contact() {
//   return (
//     <section
//       id="contact"
//   className="min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 py-8 md:py-16 bg-gradient-to-b from-gray-50 to-gray-100"
//     >
//   <div className="w-full max-w-xl backdrop-blur-sm bg-white/70 border border-gray-200 rounded-2xl shadow-xl p-6 md:p-10">
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-4xl font-bold mb-12 text-indigo-700 text-center "
//         >
//           Contact
//         </motion.h2>

//         <motion.form
//           className="space-y-8"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//         >
//           {/* Name Input */}
//           <motion.div
//             whileHover={{ y: -2, boxShadow: "0 6px 15px rgba(0,0,0,0.08)" }}
//             transition={{ type: "spring", stiffness: 150 }}
//             className="relative"
//           >
//             <input
//               type="text"
//               id="name"
//               placeholder=" "
//               className="peer text-black w-full border border-gray-300 rounded-lg px-4 pt-5 pb-2 focus:outline-none focus:ring-0 transition"
//             />
//             <label
//               htmlFor="name"
//               className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-indigo-600 peer-focus:text-sm"
//             >
//               Your Name
//             </label>
//           </motion.div>

//           {/* Email Input */}
//           <motion.div
//             whileHover={{ y: -2, boxShadow: "0 6px 15px rgba(0,0,0,0.08)" }}
//             transition={{ type: "spring", stiffness: 150 }}
//             className="relative"
//           >
//             <input
//               type="email"
//               id="email"
//               placeholder=" "
//               className="peer w-full border border-gray-300 rounded-lg px-4 pt-5 pb-2 focus:outline-none focus:ring-0 transition"
//             />
//             <label
//               htmlFor="email"
//               className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-indigo-600 peer-focus:text-sm"
//             >
//               Your Email
//             </label>
//           </motion.div>

//           {/* Message Input */}
//           <motion.div
//             whileHover={{ y: -2, boxShadow: "0 6px 15px rgba(0,0,0,0.08)" }}
//             transition={{ type: "spring", stiffness: 150 }}
//             className="relative"
//           >
//             <textarea
//               id="message"
//               rows={4}
//               placeholder=" "
//               className="peer w-full border border-gray-300 rounded-lg px-4 pt-5 pb-2 focus:outline-none focus:ring-0 transition"
//             />
//             <label
//               htmlFor="message"
//               className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-indigo-600 peer-focus:text-sm"
//             >
//               Your Message
//             </label>
//           </motion.div>

//           {/* Floating Submit Button */}
//           <motion.button
//             type="submit"
//             whileHover={{
//               scale: 1.05,
//               boxShadow: "0px 12px 25px rgba(0,0,0,0.2)",
//             }}
//             whileTap={{ scale: 0.97 }}
//             animate={{ y: [0, -3, 0] }}
//             transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//             className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg shadow-lg cursor-pointer hover:bg-indigo-700 transition-all"
//           >
//             Send Message
//           </motion.button>
//         </motion.form>
//       </div>
//     </section>
//   );
// }

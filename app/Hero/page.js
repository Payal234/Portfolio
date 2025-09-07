"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import Head from "next/head";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  const [animationData, setAnimationData] = useState(null);
  const [visibleWords, setVisibleWords] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [showIcons, setShowIcons] = useState([false, false, false]); // staggered icons

  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1024);

  const heading = ["Hi,", "I'm", "Payal", "👩‍💻"];
  const wordDelay = 400; // delay per word in ms

  useEffect(() => {
    fetch("/girl-walk.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Failed to load Lottie JSON", err));
  }, []);

  // Animate heading words
  useEffect(() => {
    if (visibleWords < heading.length) {
      const timer = setTimeout(() => setVisibleWords(visibleWords + 1), wordDelay);
      return () => clearTimeout(timer);
    } else {
      const contentTimer = setTimeout(() => setShowContent(true), 300);
      return () => clearTimeout(contentTimer);
    }
  }, [visibleWords, heading.length]);

  // Animate Resume button
  useEffect(() => {
    if (showContent) {
      const resumeTimer = setTimeout(() => setShowResume(true), 400);
      return () => clearTimeout(resumeTimer);
    }
  }, [showContent]);

  // Animate icons one by one
  useEffect(() => {
    if (showResume) {
      const delays = [0, 200, 400]; // ms delays for each icon
      delays.forEach((delay, index) => {
        setTimeout(() => {
          setShowIcons((prev) => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        }, delay);
      });
    }
  }, [showResume]);

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Responsive font sizes
  const headingFontSize = windowWidth < 768 ? "2rem" : windowWidth < 1024 ? "2.5rem" : "3rem";
  const paragraphFontSize = windowWidth < 768 ? "1rem" : windowWidth < 1024 ? "1.15rem" : "1.25rem";
  const lottieMaxWidth = windowWidth < 768 ? 300 : windowWidth < 1024 ? 350 : 400;

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <section
        id="home"
        className="bg-[#f8f9fa] text-gray-900 min-h-screen flex items-center justify-center overflow-hidden px-4"
      >
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl gap-6 md:gap-10">
          {/* Information Section */}
          <div className="w-full md:w-1/2 flex flex-col gap-3 md:gap-4 text-center md:text-left">
            <h1
              className="font-semibold tracking-tight text-gray-900"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              {heading.map((word, index) => (
                <span
                  key={index}
                  className={`inline-block transition-opacity duration-500 ${
                    index < visibleWords ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    marginRight: "0.5rem",
                    fontSize: headingFontSize,
                    color: word === "Payal" ? "red" : undefined,
                  }}
                >
                  {word}
                </span>
              ))}
            </h1>

            <p
              className={`text-gray-700 font-medium leading-relaxed transition-opacity duration-700 ${
                showContent ? "opacity-100" : "opacity-0"
              }`}
              style={{ fontFamily: "Inter, sans-serif", fontSize: paragraphFontSize }}
            >
              I craft engaging web experiences as a <strong>Full-Stack Developer & Designer</strong>.
            </p>

            {/* Resume & Social */}
            <div className={`flex flex-col sm:flex-row items-center gap-3 mt-3 md:mt-4`}>
              <a
                href="Payal_Dhobale.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-5 py-2 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-500 transform ${
                  showResume ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                Resume
              </a>

              {/* Staggered Icons */}
              <div className="flex gap-4 text-gray-700 text-2xl">
                <a
                  href="https://github.com/Payal234"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hover:text-gray-900 transition-colors duration-300 transform ${
                    showIcons[0] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/payal-ramkrishna-dhobale-5275b022a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hover:text-blue-700 transition-colors duration-300 transform ${
                    showIcons[1] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  <FaLinkedin />
                </a>
                <a
                  href="payaldhobale399@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hover:text-red-600 transition-colors duration-300 transform ${
                    showIcons[2] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>

          {/* Animated Girl */}
          <div
            className={`w-full md:w-1/2 flex justify-center transition-opacity duration-700 ${
              showContent ? "opacity-100" : "opacity-0"
            }`}
          >
            {animationData && (
              <Lottie
                animationData={animationData}
                loop={true}
                className="animate-scale"
                style={{ maxWidth: lottieMaxWidth, width: "100%", height: "auto" }}
              />
            )}
          </div>
        </div>

        <style jsx>{`
          @keyframes scaleUpDown {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
          .animate-scale {
            animation: scaleUpDown 4s ease-in-out infinite;
          }
        `}</style>
      </section>
    </>
  );
}

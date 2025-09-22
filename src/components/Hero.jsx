import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import sami from "../assets/sami1.jpg";

const textVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Hero = () => {
  const fullText = "Full-Stack Web Developer";
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = isDeleting ? 80 : 120; // faster when deleting
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setDisplayedText(fullText.slice(0, index + 1));
        setIndex((prev) => prev + 1);

        if (index === fullText.length) {
          setTimeout(() => setIsDeleting(true), 1500); // pause before deleting
        }
      } else {
        // Deleting
        setDisplayedText(fullText.slice(0, index - 1));
        setIndex((prev) => prev - 1);

        if (index === 0) {
          setIsDeleting(false);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <motion.div
        className="hero-content"
        initial="hidden"
        animate="visible"
      >
        <motion.h3
          custom={1}
          variants={textVariant}
          className="hero-title"
        >
          Hi, I’m <span>Samuel Setarige</span>
        </motion.h3>

        {/* Typing Loop */}
        <motion.h2
          custom={2}
          variants={textVariant}
          className="hero-subtitle"
        >
          {displayedText}
          <span className="blinking-cursor">|</span>
        </motion.h2>

        <motion.p
          custom={3}
          variants={textVariant}
          className="hero-description"
        >
          I build modern, responsive, and scalable web applications using
          cutting-edge technologies. Let’s create something amazing together.
        </motion.p>

        <motion.div
          custom={4}
          variants={textVariant}
          className="hero-buttons"
        >
          <a href="#projects" className="btn-primary">🚀 View Projects</a>
          <a href="#contact" className="btn-secondary">📩 Contact Me</a>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-image"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        whileHover={{ scale: 1.05, rotate: 2 }}
      >
        <img src={sami} alt="Samuel Setarige" />
      </motion.div>
    </section>
  );
};

export default Hero;

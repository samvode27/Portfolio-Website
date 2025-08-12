import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import sami from "../assets/sami.jpg";

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

        <motion.h2
          custom={2}
          variants={textVariant}
          className="hero-subtitle"
        >
          Full-Stack Web Developer
        </motion.h2>

        <motion.p
          custom={3}
          variants={textVariant}
          className="hero-description"
        >
          I build modern, responsive, and scalable web applications using
          cutting-edge technologies like <b>React</b>, <b>Node.js</b>, and
          <b> MongoDB</b>. Let’s create something amazing together.
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

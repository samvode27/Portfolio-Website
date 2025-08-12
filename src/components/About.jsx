import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.25 + 0.4,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const About = () => {
  const cards = [
    {
      title: "🚀 Innovation",
      description:
        "I embrace emerging technologies to craft unique, impactful solutions that stand out in the digital landscape.",
    },
    {
      title: "🤝 Collaboration",
      description:
        "I thrive in team environments, ensuring open communication, empathy, and collective success.",
    },
    {
      title: "❤️ Passion",
      description:
        "I genuinely love building applications that make a difference, blending creativity and functionality.",
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container"> {/* Added container here */}
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="about-title">About Me</h2>
          <p className="about-subtitle">
            A quick snapshot of what drives me as a developer.
          </p>
        </motion.div>

        <div className="row">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="col-12 col-md-4 mb-4 mt-4"
              custom={i}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 1 }}
            >
              <div className="about-card h-100 d-flex flex-column">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import "./Services.css";
import { motion } from "framer-motion";
import { Code2, MonitorSmartphone, Sparkles } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code2 size={32} />,
      title: "Full-Stack Development",
      desc: "Building responsive, secure, and scalable web apps using React, Node.js, Express, and MongoDB.",
    },
    {
      icon: <MonitorSmartphone size={32} />,
      title: "Responsive UI/UX Design",
      desc: "Crafting clean and accessible UI experiences using modern tools like TailwindCSS and Figma.",
    },
    {
      icon: <Sparkles size={32} />,
      title: "Performance Optimization",
      desc: "Enhancing performance and SEO by improving code quality and load times.",
    },
  ];

  return (
    <section className="services section" id="services">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My Services
      </motion.h2>
      <div className="services-container">
        {services.map((service, index) => (
          <motion.div
            className="service-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.25 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, boxShadow: "0 12px 30px rgba(0, 245, 160, 0.25)" }}
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;

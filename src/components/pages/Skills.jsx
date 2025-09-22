import React from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiBootstrap,
  SiMongodb,
  SiMysql,
  SiTypescript,
  SiTailwindcss,
  SiGithub,
  SiVercel,
  SiPostman,
  SiPhp,     
  SiGo       
} from "react-icons/si";

import "./Skills.css";

const skillLogos = [
  <SiHtml5 color="#ff5722" size={100} key="html5" />,
  <SiCss3 color="#1572B6" size={100} key="css3" />,
  <SiJavascript color="#F7DF1E" size={100} key="javascript" />,
  <SiReact color="#61DAFB" size={100} key="react" />,
  <SiNodedotjs color="#339933" size={64} key="nodejs" />,
  <SiExpress color="#000000" size={100} key="express" />,
  <SiBootstrap color="#7952B3" size={100} key="bootstrap" />,
  <SiMongodb color="#47A248" size={100} key="mongodb" />,
  <SiMysql color="#F7DF1E" size={100} key="javascript" />,
  <SiTypescript color="#61DAFB" size={100} key="react" />,
  <SiTailwindcss color="#339933" size={64} key="nodejs" />,
  <SiGithub color="#000000" size={100} key="express" />,
  <SiVercel color="#7952B3" size={100} key="bootstrap" />,
  <SiPostman color="#47A248" size={100} key="mongodb" />,
  <SiPhp color="#7377ad" size={100} key="php" />,
  <SiGo color="#7377ad" size={100} key="Go" />     
];

const barVariants = {
  hidden: { width: 0 },
  visible: (i) => ({
    width: `${skills[i].level}%`,
    transition: { duration: 1, delay: i * 0.2 },
  }),
};

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="skills-title">My Skills</h2>
          <p className="skills-subtitle pb-5">Tools and technologies I work with.</p>
        </motion.div>
      </div>

      <motion.div
        className="skills-logos-container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="skills-logos-track">
          {/* Duplicate logos for smooth infinite scroll */}
          {[...skillLogos, ...skillLogos].map((LogoComponent, idx) => (
            <div key={idx} className="skills-logo-item">
              {LogoComponent}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

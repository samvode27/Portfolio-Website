import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Blood Donation App",
      description:
        "A full-stack application for managing blood donations with authentication, dashboards, and request handling.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      link: "https://github.com/samvode27/FullstackBloodDonation"
    },
    {
      title: "Hospital Admin Page",
      description:
        "Admin dashboard for hospitals to manage blood requests and donors.",
      tech: ["React", "Bootstrap"],
      link: "https://github.com/samvode27/Hospital-Admin-page"
    },
    {
      title: "Real Estate Website",
      description:
        "Frontend real-estate platform to display and filter properties.",
      tech: ["React", "CSS", "Framer Motion"],
      link: "https://github.com/samvode27/Real-estate-Frontend-Project",

    },
    {
      title: "Patient Page Frontend Project",
      description:
        "Patients can Search doctors, see top doctors, book appointments, read blogs, see notifications, contact doctors",
      tech: ["React", "Bootstrap CSS", "Framer Motion"],
      link: "https://github.com/samvode27/Patient-Page-Frontend-Project",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>
        <div className="row">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="col-12 col-md-6 col-lg-3 mb-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ scale: 1.05, boxShadow: "0 15px 35px rgba(0,245,160,0.3)" }}
            >
              <div className="project-card h-100 d-flex flex-column">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tech-list mb-3">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link mt-auto"
                >
                  View Code ↗
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

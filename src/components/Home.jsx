import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCode, FaFigma, FaCertificate, FaLaptopCode } from "react-icons/fa";
import { toast } from "react-toastify";
import { Mail, Phone, MapPin, Github, Instagram, Linkedin } from "lucide-react";
import { FaTelegramPlane } from "react-icons/fa";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaBootstrap, FaGithub, FaPhp, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiMysql, SiTailwindcss, SiTypescript, SiVercel, SiPostman, SiGo } from "react-icons/si";

import profile from "../assets/sami1.jpg";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import sacco from "../assets/sacco.png";
import waste from "../assets/waste.png";
import blood from "../assets/blood.png";
import logo from "../assets/logo.png";
import "./Home.css";
import emailjs from "@emailjs/browser";

export default function Home() {
  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);
  const [awards, setAwards] = useState(0);

  // Count-up animation
  useEffect(() => {
    const counters = [
      { value: 2, setter: setYears, duration: 800 },
      { value: 3, setter: setProjects, duration: 1000 },
      { value: 3, setter: setClients, duration: 1200 },
      { value: 3, setter: setAwards, duration: 900 },
    ];

    counters.forEach(({ value, setter, duration }) => {
      let start = 0;
      const step = Math.ceil(value / (duration / 20));
      const interval = setInterval(() => {
        start += step;
        if (start >= value) {
          setter(value);
          clearInterval(interval);
        } else {
          setter(start);
        }
      }, 20);
    });
  }, []);

  const skills = [
    { icon: <FaHtml5 />, percent: "92%", name: "HTML5", color: "#e44d26" },
    { icon: <FaCss3Alt />, percent: "89%", name: "CSS3", color: "#2965f1" },
    { icon: <FaJs />, percent: "94%", name: "JavaScript", color: "#f7df1e" },
    { icon: <FaReact />, percent: "87%", name: "React", color: "#61dbfb" },
    { icon: <FaNodeJs />, percent: "93%", name: "Node.js", color: "#68a063" },
    { icon: <SiExpress />, percent: "92%", name: "Express", color: "#ffffff" },
    { icon: <FaBootstrap />, percent: "96%", name: "Bootstrap", color: "#563d7c" },
    { icon: <SiMongodb />, percent: "91%", name: "MongoDB", color: "#47a248" },
    { icon: <SiMysql />, percent: "83%", name: "MySQL", color: "#00758f" },
    { icon: <SiTypescript />, percent: "86%", name: "TypeScript", color: "#3178c6" },
    { icon: <SiTailwindcss />, percent: "89%", name: "TailwindCSS", color: "#06b6d4" },
    { icon: <FaGithub />, percent: "92%", name: "GitHub", color: "#000000" },
    { icon: <SiVercel />, percent: "94%", name: "Vercel", color: "#000000" },
    { icon: <SiPostman />, percent: "97%", name: "Postman", color: "#ff6c37" },
    { icon: <FaPhp />, percent: "95%", name: "PHP", color: "#777bb4" },
    { icon: <SiGo />, percent: "89%", name: "Go", color: "#00add8" },
    { icon: <FaGitAlt />, percent: "86%", name: "Git", color: "#f34f29" },
  ];

  const duplicatedSkills = [...skills, ...skills];

  const steps = [
    {
      number: "01",
      title: "Define",
      description:
        "Working closely with you to understand your goals, needs, and vision, establishing a clear and focused strategy that lays the foundation for a successful and impactful project.",
    },
    {
      number: "02",
      title: "Develop",
      description:
        "Transforming your vision into reality through creative design, meticulous planning, and innovative execution, ensuring every detail aligns with your goals and delivers impactful, results-driven solutions tailored to your unique needs.",
      active: true,
    },
    {
      number: "03",
      title: "Deliver",
      description:
        "Providing exceptional results with precision and timeliness, exceeding expectations through reliable execution, thorough attention to detail, and ongoing support to ensure your project's success and long-term impact.",
    },
  ];

  const allProjects = [
    {
      id: 1,
      title: "Waste Management System",
      description: "A waste management full- stack system digitizes waste collection by connecting households, recycling centers, and city authorities through a web platform.",
      image: waste,
      tags: ["Go", "MongoDB", "React", "Node.js"],
    },
    {
      id: 2,
      title: "SACCO Management System",
      description: "A full-stack SACCO platform for savings, loans, and analytics.",
      image: sacco,
      tags: ["MERN", "Typescript", "Finance", "Dashboard"],
    },
    {
      id: 3,
      title: "Blood Donation App",
      description: "A full-stack application for managing blood donations with authentication, dashboards, and request handling.",
      image: blood,
      tags: ["AI", "React.js", "UX Design", "MERN"],
    },
  ];

  const [activeFilter, setActiveFilter] = useState("All");
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-cycle active card every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % allProjects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [allProjects.length]);

  // Filter logic
  const filteredProjects =
    activeFilter === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeFilter);

  // Form state
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    const handleScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const SOCIALS = [
    { icon: <FaTelegramPlane size={20} />, url: "https://t.me/samvode27", label: "Telegram", className: "telegram" },
    { icon: <Github size={20} />, url: "https://github.com/samvode27/", label: "GitHub", className: "github" },
    { icon: <Instagram size={20} />, url: "https://www.instagram.com/samvode_27?igsh=dzlwa3JlaGd5eXB1", label: "Instagram", className: "instagram" },
    { icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/samuel-setarige-29207a281/", label: "Linedin", className: "linkedin" },
  ];

  // Validation
  const validate = (fieldValues = formData) => {
    let temp = { ...errors };
    if ("name" in fieldValues) temp.name = fieldValues.name ? "" : "Name is required.";
    if ("email" in fieldValues)
      temp.email = fieldValues.email
        ? /\S+@\S+\.\S+/.test(fieldValues.email)
          ? ""
          : "Email is not valid."
        : "Email is required.";
    if ("subject" in fieldValues) temp.subject = fieldValues.subject ? "" : "Subject is required.";
    if ("message" in fieldValues) temp.message = fieldValues.message ? "" : "Message is required.";
    setErrors({ ...temp });
    return Object.values(temp).every((x) => x === "");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    validate({ [name]: value });
  };

  // Submit handler with EmailJS + toast
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("Please fix the errors in the form before sending.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        "service_y6kfy5f",
        "template_zx3drum",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "VF1Lj5j9tZ-FjUQuk" // replace with your EmailJS public key
      );

      toast.success("Message sent successfully! I'll get back to you soon.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    } catch (err) {
      console.error(err);
      toast.error("Oops! Something went wrong. Please try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      {/* NAVBAR */}
      <nav className="modern-navbar">
        <div className="nav-container">
          <div className="nav-logo" alt="Logo">
            <img src={logo} />
          </div>

          <ul className="nav-links">
            {["Services", "About", "Works", "Skills", "Approach", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* HERO */}
      <section className="modern-hero" id="services">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="hero-profile">
            <img src={profile} alt="Profile" />
          </div>

          <h1 className="hero-heading">
            Building digital products,
            <br />
            brands, <span>and experience.</span>
          </h1>

          <p className="hero-subtext">
            Hi! I'm <strong>Samuel Setarige</strong> — a passionate Full-Stack Developer from Ethiopia.
          </p>

          <motion.a
            href="#projects"
            className="hero-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            See My Work →
          </motion.a>
        </motion.div>
      </section>

      {/* STATS SECTION */}
      <motion.section
        className="stats-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="stat-box">
          <h2 className="stat-number">{years}</h2>
          <p>Years<br />Experience</p>

          <h2 className="stat-number">{projects}+</h2>
          <p>Projects<br />Completed</p>

          <h2 className="stat-number">{clients}+</h2>
          <p>Hackathons<br />Joined</p>

          <h2 className="stat-number">{awards}+</h2>
          <p>Certificates<br />Achieved</p>
        </div>
      </motion.section>

      {/* AGENCY FEATURE SECTION */}
      <section className="agency-section" id="about">
        <div className="agency-heading">
          <h2>
            Collaborate with brand and agencies to create{" "}
            <span>impactful results</span>
          </h2>
        </div>

        <div className="agency-features">
          <div className="feature-box">
            <div className="feature-icon">
              <img src={icon1} alt="UX & UI" />
            </div>
            <h3>UX & UI</h3>
            <p>
              Designing interfaces that are intuitive, efficient, and enjoyable to use.
            </p>
          </div>

          <div className="feature-box">
            <div className="feature-icon">
              <img src={icon2} alt="Web & Mobile App" />
            </div>
            <h3>Web Application </h3>
            <p>
              Building responsive and performant web applications for all devices.
            </p>
          </div>

          <div className="feature-box">
            <div className="feature-icon">
              <img src={icon3} alt="Design & Creative" />
            </div>
            <h3>Design & Creative</h3>
            <p>
              Crafting visuals and experiences that capture your brand’s essence.
            </p>
          </div>

          <div className="feature-box">
            <div className="feature-icon">
              <img src={icon4} alt="Development" />
            </div>
            <h3>Development</h3>
            <p>
              Writing clean, scalable, and high-quality code for modern applications.
            </p>
          </div>
        </div>
      </section>

      {/* Works */}
      <section className="experience-section" id="works">
        <div className="experience-container">
          {/* Left Column – Work Experience */}
          <div className="column">
            <h2 className="section-titlee">
              My work <span>experience</span>
            </h2>

            <div className="experience-card">
              <div className="experience-icon">
                <FaCode className="iiccoonn" />
              </div>
              <div className="experience-content">
                <h3>Full-Stack Developer</h3>
                <p>
                  Worked on multiple web applications requiring both front-end and back-end
                  development, integrating APIs and optimizing user experiences.
                </p>
              </div>
            </div>

            <div className="experience-card">
              <div className="experience-icon">
                <FaFigma className="iiccoonn" />
              </div>
              <div className="experience-content">
                <h3>Graphics & UI/UX Designer</h3>
                <p>
                  I craft engaging visuals and intuitive user interfaces, combining creativity and usability to deliver impactful digital experiences for websites and apps.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column – Education */}
          <div className="column">
            <h2 className="section-titlee">
              My <span>education</span>
            </h2>

            <div className="experience-card">
              <div className="experience-icon">
                <FaLaptopCode className="iiccoonn" />
              </div>
              <div className="experience-content">
                <div className="date-tag">Jan 2021 – Oct 2005</div>
                <h3>Bachelor in Computer Science</h3>
                <p>Focused on responsive web design and front-end development.</p>
              </div>
            </div>

            <div className="experience-card">
              <div className="experience-icon">
                <FaCertificate className="iiccoonn" /> {/* Certificate icon */}
              </div>
              <div className="experience-content">
                <div className="date-tag">2019 – 2025</div> {/* Or you can put individual dates if needed */}
                <h3>Certifications</h3>
                <p>Participated in multiple development, design, and technology-related programs and events.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="skills-section" id="skills">
        <h2 className="skills-titlee">
          My <span>skills</span>
        </h2>
        <p className="skills-subtitle">
          Tools and technologies I work with.
        </p>
        <div className="skills-track">
          {duplicatedSkills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <div className="skill-percent">{skill.percent}</div>
              <div className="skill-label">{skill.name}</div>
            </div>
          ))}

        </div>
      </section>

      {/* ApproachSection */}
      <section className="approach-section" id="approach">
        <h2 className="approach-title">
          My <span>approach</span>
        </h2>
        <div className="approach-container">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`approach-card ${step.active ? "active" : ""}`}
            >
              <span className="step-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {step.active && <div className="neon-border"></div>}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="projects-section" id="projects">
        <motion.h2
          className="projects-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          A small selection of <span>recent projects</span>
        </motion.h2>

        {/* Projects Grid */}
        <div className="projects-container">
          {filteredProjects.map((proj, index) => (
            <motion.div
              key={proj.id}
              className={`project-card ${index === activeIndex % filteredProjects.length ? "active" : ""
                }`}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <div className="project-image">
                <img src={proj.image} alt={proj.title} />
              </div>

              <span className="project-number">{proj.number}</span>
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>

              {/* Tags */}
              <div className="project-tags">
                {proj.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>

              <div className="neon-travel-border"></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* contact */}
      <section className={`contact-section`} id="contact">
        <div className="container">
          <div className="contact-grid">
            {/* Form */}
            <motion.form
              className="contact-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              noValidate
            >
              {["name", "email", "subject"].map((field) => (
                <div key={field} className="input-group">
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    id={field}
                    value={formData[field]}
                    onChange={handleChange}
                    required
                    placeholder=" "
                    aria-describedby={`${field}-error`}
                    aria-invalid={errors[field] ? "true" : "false"}
                    disabled={loading}
                  />
                  <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                  {errors[field] && (
                    <span className="error-text" id={`${field}-error`} role="alert">
                      {errors[field]}
                    </span>
                  )}
                </div>
              ))}

              <div className="input-group textarea-group">
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder=" "
                  required
                  aria-describedby="message-error"
                  aria-invalid={errors.message ? "true" : "false"}
                  disabled={loading}
                />
                <label htmlFor="message">Message</label>
                {errors.message && (
                  <span className="error-text" id="message-error" role="alert">
                    {errors.message}
                  </span>
                )}
              </div>

              <button type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>

              <div className="social-icons" role="list" aria-label="Social media links">
                {SOCIALS.map(({ icon, url, label, className }, i) => (
                  <a
                    key={i}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-icon ${className}`}
                    aria-label={label}
                    role="listitem"
                    tabIndex={0}
                    title={label}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </motion.form>

            {/* Contact Info + Map */}
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="info-cards">
                <div className="info-card">
                  <MapPin size={24} className="info-icon" />
                  <div>
                    <h5>Location</h5>
                    <p>Addis Ababa, Ethiopia</p>
                  </div>
                </div>

                <div className="info-card">
                  <Phone size={24} className="info-icon" />
                  <div>
                    <h5>Phone</h5>
                    <p>+251 944867635</p>
                  </div>
                </div>

                <div className="info-card">
                  <Mail size={24} className="info-icon" />
                  <div>
                    <h5>Email</h5>
                    <p>setarigesamuel@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="map-container" aria-label="Google map showing location">
                <iframe
                  title="Location map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.844457870966!2d38.7472923!3d8.9316496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b833445a562d3%3A0x3fe0af5961f648ab!2sSaris%20Hanamariam!5e0!3m2!1sen!2set!4v1691916000000!5m2!1sen!2set"
                  width="100%"
                  height="220"
                  style={{ border: 0, borderRadius: "12px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* footer */}
      <section className="footer">
        <p>© 2025 Samuel Setarige. All rights reserved.</p>
      </section>

    </div>
  );
}

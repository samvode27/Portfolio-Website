import { useState, useEffect } from "react";

const projects = [
  {
    title: "Blood Donation & Bank Management System",
    category: "Web Development",

    thumbnail: "/blood-donation/login.png",

    images: [
      "/blood-donation/login.png",
      "/blood-donation/blood-request.png",
      "/blood-donation/admin-dashboard.png",
      "/blood-donation/donor-dashboard.png",
    ],

    techStack: [
      "Bootstrap",
      "React 19",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Vercel",
      "Render",
    ],

    description:
      "A full-stack web application designed to streamline blood donation and blood bank management by connecting donors, hospitals, and administrators. It provides secure donor registration and authentication, role-based access control, hospital blood request management, and an administrative dashboard for managing system operations. Key features include donor registration and profile management, secure authentication and protected application areas, hospital blood request processing, administrative dashboard functionality, responsive design for desktop and mobile devices, RESTful API integration for efficient data management, and an AI-powered assistant with text and voice interaction to help users with questions and information.",

    github:
      "https://github.com/samvode27/Blood-Donation-and-Bank-Management-System",

    liveFrontend:
      "https://blood-donation-and-bank-management.vercel.app/",

    liveBackend:
      "https://blood-donation-and-bank-management-system.onrender.com/",
  },

  {
    title: "Savings & Loan (SACCO) Management System",
    category: "Web Development",

    thumbnail: "/sacco/home-page.png",

    images: [
      "/sacco/home-page.png",
      "/sacco/login-page.png",
      "/sacco/loan-management.png",
      "/sacco/saving.png",
    ],

    techStack: [
      "React",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Vercel",
      "Render",
      "Tailwind CSS",
    ],

    description:
      "WERQAMA SACCO is a full-stack savings and loan management system designed to streamline SACCO operations. Members can register, manage their profiles, track savings and transactions, and apply for loans. The system includes secure JWT authentication, loan application and approval workflows, administrative dashboard analytics, and structured MongoDB data management. It also provides a responsive and user-friendly interface for both desktop and mobile users.",

    github:
      "https://github.com/samvode27/Werqama-Sacco-System",

    liveFrontend:
      "https://werqama-sacco-frontend.vercel.app/",

    liveBackend:
      "https://werqama-sacco-backend-3meu.onrender.com/",
  },
];

const projectFilters = [
  "All",
  "Web Design",
  "Applications",
  "Web Development",
];

function ProjectCard({ project }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );

    setZoomLevel(1);
  }, 3000);

  return () => clearInterval(interval);
}, [project.images.length]);

  const zoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.5, 3));
  };

  const zoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.5, 1));
  };

  return (
    <div className="project-item active">

      <div className="project-img">
        <img
          src={project.images[currentImageIndex]}
          alt={`${project.title} screenshot ${currentImageIndex + 1}`}
          style={{
            transform: `scale(${zoomLevel})`,
            transformOrigin: "center center",
          }}
        />

        {/* Zoom Controls */}
        {project.images.length > 1 && (
          <div className="zoom-controls">
            <button
              className="zoom-btn"
              onClick={zoomIn}
              disabled={zoomLevel >= 3}
              aria-label="Zoom in"
            >
              +
            </button>

            <button
              className="zoom-btn"
              onClick={zoomOut}
              disabled={zoomLevel <= 1}
              aria-label="Zoom out"
            >
              −
            </button>
          </div>
        )}

        {/* Image Indicators */}
        {project.images.length > 1 && (
          <div className="image-indicators">
            {project.images.map((_, idx) => (
              <button
                key={idx}
                className={`indicator ${
                  idx === currentImageIndex ? "active" : ""
                }`}
                onClick={() => {
                  setCurrentImageIndex(idx);
                  setZoomLevel(1);
                }}
                aria-label={`View image ${idx + 1}`}
              />
            ))}
          </div>
        )}

        {/* Project Links on Image */}
        <div className="project-hover-links">

          <a
            href={project.github}
            className="project-link-icon"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Repository"
          >
            <ion-icon name="logo-github"></ion-icon>
          </a>

          <a
            href={project.liveFrontend}
            className="project-link-icon"
            target="_blank"
            rel="noopener noreferrer"
            title="Live Frontend"
          >
            <ion-icon name="globe-outline"></ion-icon>
          </a>

          <a
            href={project.liveBackend}
            className="project-link-icon"
            target="_blank"
            rel="noopener noreferrer"
            title="Backend API"
          >
            <ion-icon name="server-outline"></ion-icon>
          </a>

        </div>
      </div>

      {/* Project Header */}
      <div className="project-header">

        <div>
          <h3 className="project-title">
            {project.title}
          </h3>

          <p className="project-category">
            {project.category}
          </p>
        </div>
      </div>

      {/* Project Description */}
      <p
        className={`project-description ${
          expanded ? "expanded" : ""
        }`}
      >
        {project.description}
      </p>

      {project.description.length > 100 && (
        <button
          className="see-more-btn"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "See less" : "See more"}
        </button>
      )}

      {/* Technology Stack */}
      <div className="project-tech-stack">
        {project.techStack.map((tech, idx) => (
          <span key={idx} className="tech-badge">
            {tech}
          </span>
        ))}
      </div>

    </div>
  );
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <article className="portfolio" data-page="portfolio">

      <header>
        <h2 className="h2 article-title">
          Projects
        </h2>
      </header>

      <section className="projects">

        {/* Mobile Filter */}
        <div className="filter-select-box">
          <button
            className="filter-select"
            onClick={() => {}}
          >
            <span>{activeFilter}</span>

            <ion-icon
              name="chevron-down"
              className="select-icon"
            ></ion-icon>
          </button>
        </div>

        {/* Projects */}
        <ul className="project-list">
          {filteredProjects.map((project, index) => (
            <li key={index}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>

      </section>
    </article>
  );
}
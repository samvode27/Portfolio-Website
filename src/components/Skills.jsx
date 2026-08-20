import { useState } from "react";

const skillCategories = [
  {
    name: "Frontend",
    icon: "code-slash-outline",
    skills: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    ],
  },
  {
    name: "Backend",
    icon: "server-outline",
    skills: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
      { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
    ],
  },
  {
    name: "Database",
    icon: "file-tray-stacked-outline",
    skills: [
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    ],
  },
  {
    name: "Cloud & Hosting",
    icon: "cloud-outline",
    skills: [
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
      { name: "Render", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg" },
    ],
  },
  {
    name: "Tools & Version Control",
    icon: "git-branch-outline",
    skills: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
    ],
  },
];

const filterOptions = [
  { label: "All", icon: "globe-outline" },
  { label: "Frontend", icon: "code-slash-outline" },
  { label: "Backend", icon: "server-outline" },
  { label: "Database", icon: "file-tray-stacked-outline" },
  { label: "Cloud & Hosting", icon: "cloud-outline" },
  { label: "Tools & Version Control", icon: "git-branch-outline" },
];

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const filteredCategories =
    activeFilter === "All"
      ? skillCategories
      : skillCategories.filter((cat) => cat.name === activeFilter);

  return (
    <article className="skills" data-page="skills">
      <header>
        <h2 className="h2 article-title">Skills</h2>
      </header>

      <section className="skill-filters">
        {/* Desktop filter buttons */}
        <ul className="filter-list">
          {filterOptions.map((filter) => (
            <li key={filter.label} className="filter-item">
              <button
                type="button"
                className={`filter-btn ${activeFilter === filter.label ? "active" : ""}`}
                onClick={() => setActiveFilter(filter.label)}
              >
                <ion-icon name={filter.icon}></ion-icon>
                <span>{filter.label}</span>
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile filter select */}
        <div className="filter-select-box">
          <button
            type="button"
            className={`filter-select ${mobileFilterOpen ? "active" : ""}`}
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
          >
            <span>{activeFilter}</span>
            <ion-icon name="chevron-down" className="select-icon"></ion-icon>
          </button>
          <ul className="select-list">
            {filterOptions.map((filter) => (
              <li key={filter.label} className="select-item">
                <button
                  type="button"
                  onClick={() => {
                    setActiveFilter(filter.label);
                    setMobileFilterOpen(false);
                  }}
                >
                  {filter.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="skills-grid-container">
        {filteredCategories.map((category) => (
          <div key={category.name}>
            <div className="skill-category-header">
              <div className="icon-box">
                <ion-icon name={category.icon}></ion-icon>
              </div>
              <h3 className="h3">{category.name}</h3>
            </div>
            <div className="skills-grid">
              {category.skills.map((skill) => (
                <div key={skill.name} className="skill-card">
                  <div className="skill-icon">
                    <img src={skill.icon} alt={skill.name} />
                  </div>
                  <h5 className="skill-name">{skill.name}</h5>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </article>
  );
}

const experienceData = [
  {
    title: "Full-Stack Developer",
    company: "Personal & Academic Projects",
    location: "Addis Ababa",
    period: "2024 — Present",
    description:
      'Developing full-stack web applications using <strong>React.js, Node.js, Express.js, MongoDB, JavaScript, and C#</strong>. Building responsive user interfaces, <strong>RESTful APIs</strong>, authentication and authorization systems, database-driven applications, and role-based workflows. Deploying frontend and backend applications using platforms such as <strong>Vercel</strong> and <strong>Render</strong>, with a focus on clean architecture, performance, scalability, and user experience.',
  },
  {
    title: "Frontend Developer Intern",
    company: "CREAVERS Service PLC",
    location: "Addis Ababa",
    period: "02/2025 — 05/2025",
    description:
      'Developed responsive and accessible user interfaces for the <strong>MedLink-UI healthcare platform</strong> using <strong>Angular 18, Bootstrap, HTML, and CSS</strong>. Contributed to frontend feature development, bug fixing, UI improvements, and performance optimization while collaborating within a development team. Focused on creating clean, user-friendly, and maintainable interfaces across different screen sizes. Worked with technologies including <strong>Angular 18, Bootstrap, HTML, CSS, and UI Design</strong>.',
  },
  {
    title: "Summer Camp Participant / Software Development Trainee",
    company: "Information Network Security Administration (INSA)",
    location: "Addis Ababa",
    period: "Summer 2025",
    description:
      'Participated in a technology-focused summer camp program, gaining practical exposure to <strong>software development, technology, and information security concepts</strong>. Took part in hands-on learning activities, technical training, and collaborative exercises designed to strengthen <strong>problem-solving, programming, and teamwork skills</strong>.',
  },
];

const educationData = [
  {
    title: "Bachelor of Science in Computer Science",
    company: "Kibur College",
    period: "2025",
    description:
      "Completed a Bachelor of Science degree in Computer Science with a strong foundation in software development, programming, database systems, data structures and algorithms, web technologies, system analysis and design, and modern software development practices. Developed practical skills through academic and personal projects using frontend and backend technologies.",
  },
];

export default function Resume() {
  return (
    <article className="resume" data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          {experienceData.map((item) => (
            <li key={item.title} className="timeline-item">
              <h4 className="h4 timeline-item-title">{item.title}</h4>

              <p className="timeline-company">
                {item.company} — {item.location}
              </p>

              <span>{item.period}</span>

              <p
                className="timeline-text"
                dangerouslySetInnerHTML={{ __html: item.description }}
              ></p>
            </li>
          ))}
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          {educationData.map((item) => (
            <li key={item.title} className="timeline-item">
              <h4 className="h4 timeline-item-title">{item.title}</h4>

              <p className="timeline-company">{item.company}</p>

              <span>{item.period}</span>

              <p className="timeline-text">{item.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <a
        href="/SAMUEL_SETARGE.pdf"
        download
        className="download-resume-btn"
        style={{ marginTop: "25px" }}
      >
        <ion-icon name="download-outline"></ion-icon>
        <span>Download CV</span>
      </a>
    </article>
  );
}
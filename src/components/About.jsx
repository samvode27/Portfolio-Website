const services = [
  {
    title: "Full-stack Development",
    text: "Building complete, scalable web applications by developing both responsive frontend interfaces and reliable backend systems.",
    icon: "https://img.icons8.com/pastel-glyph/64/40C057/web-design--v1.png",
  },
  {
    title: "Web Development",
    text: "Creating modern, high-quality, and user-friendly websites with a focus on performance, responsiveness, and clean design.",
    icon: "https://img.icons8.com/ios-filled/50/40C057/imac-settings.png",
  },
  {
    title: "Frontend Development",
    text: "Developing responsive, interactive, and visually engaging user interfaces using modern frameworks and technologies.",
    icon: "https://img.icons8.com/pastel-glyph/64/40C057/mobile-taxi-service.png",
  },
  {
    title: "Backend Development",
    text: "Building robust server-side applications, RESTful APIs, and efficient database solutions.",
    icon: "https://img.icons8.com/pastel-glyph/64/40C057/camera.png",
  },
];

export default function About() {
  return (
      <article className="about" data-page="about">
        <header>
          <h2 className="h2 article-title">About me</h2>
        </header>

        <section className="about-text">
          <p>
            I am a Full-Stack Developer passionate about building modern, scalable, and user-friendly web applications. With experience in React, C#, Node.js, and various database technologies, I develop end-to-end solutions that combine clean frontend experiences with reliable backend systems.
          </p>
          <p>
            I enjoy solving problems and turning ideas into practical software solutions. My goal is to contribute my technical skills, problem-solving abilities, and commitment to continuous learning to build impactful, high-quality products while growing as a software developer.
          </p>
        </section>

        <section className="service">
          <h3 className="h3 service-title">What I'm doing</h3>

          <ul className="service-list">
            {services.map((service) => (
              <li key={service.title} className="service-item">
                <div className="service-icon-box">
                  <img src={service.icon} alt={service.title} />
                </div>
                <div className="service-content-box">
                  <h4 className="h4 service-item-title">{service.title}</h4>
                  <p className="service-item-text">{service.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </article>
  );
}

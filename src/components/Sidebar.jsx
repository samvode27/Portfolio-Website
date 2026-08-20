import { useState } from "react";

export default function Sidebar({ activeSection, setActiveSection }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <aside className="sidebar" data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src="/b.png" alt="Biruk Habte" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Biruk Habte">Samuel Setarge</h1>
          <p className="title">FullStack Developer</p>
        </div>

        <button
          type="button" 
          className="info-more-btn"
          onClick={() => setShowMore(!showMore)}
          data-sidebar-btn
        >
          <span>{showMore ? "Less" : "More"}</span>
          <ion-icon name={showMore ? "chevron-up" : "chevron-down"}></ion-icon>
        </button>
      </div>

      <div className={`sidebar-info-more ${showMore ? "visible" : "hidden"}`}>
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:biruk.habte-ug@aau.edu.et" className="contact-link">
                setarigesamuel@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+12133522795" className="contact-link">0944867635</a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Addis Ababa, Ethiopia</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

     <ul className="social-list">
        <li className="social-item">
          <a
            href="https://github.com/samvode27"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </li>

        <li className="social-item">
          <a
            href="https://www.linkedin.com/in/samuel-setarige-29207a281/"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </li>

        <li className="social-item">
          <a
            href="https://t.me/samvode27"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
          >
            <ion-icon name="paper-plane-outline"></ion-icon>
          </a>
        </li>
      </ul>

        <div className="separator"></div>

        <a
          href="/SAMUEL_SETARGE.pdf"
          download
          className="download-resume-btn"
        >
          <ion-icon name="download-outline"></ion-icon>
          <span>Download CV</span>
        </a>
      </div>
    </aside>
  );
}

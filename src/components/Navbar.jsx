import React, { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  // Toggle dark mode & save preference
  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      if (newMode) document.body.classList.add("dark");
      else document.body.classList.remove("dark");
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  // Load theme from localStorage or system preference on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.body.classList.add("dark");
    } else if (savedTheme === "light") {
      setDarkMode(false);
      document.body.classList.remove("dark");
    }
  }, []);

  // Close menu on window resize (desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li className="always-visible">
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
          </li>
          <li className={`toggle-only ${menuOpen ? "show" : ""}`}>
            <a href="#skills" onClick={() => setMenuOpen(false)}>
              Skills
            </a>
          </li>
          <li className={`toggle-only ${menuOpen ? "show" : ""}`}>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
          </li>
          <li className={`toggle-only ${menuOpen ? "show" : ""}`}>
            <a href="#services" onClick={() => setMenuOpen(false)}>
              Services
            </a>
          </li>
          <li className="always-visible">
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </li>
          <li>
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle Dark Mode"
              className="dark-mode-toggle"
              type="button"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </li>
        </ul>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close Menu" : "Open Menu"}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}

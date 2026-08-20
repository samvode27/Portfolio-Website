export default function Navbar({ activeSection, setActiveSection }) {
  const navItems = [
    { label: "About", value: "About" },
    { label: "Projects", value: "Portfolio" },
    { label: "Resume", value: "Resume" },
    { label: "Skills", value: "Skills" },
    { label: "Contact", value: "Contact" },
  ];

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {navItems.map((item) => (
          <li key={item.value} className="navbar-item">
            <button
              type="button"
              className={`navbar-link ${activeSection === item.value ? "navbarActive" : ""}`}
              onClick={() => setActiveSection(item.value)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

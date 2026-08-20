import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  const [activeSection, setActiveSection] = useState("About");

  const renderSection = () => {
    switch (activeSection) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Resume":
        return <Resume />;
      case "Skills":
        return <Skills />;
      case "Contact":
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <>
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

      <main>
        <div className="main-content">
          <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
          {renderSection()}
        </div>
      </main>
    </>
  );
}

export default App;

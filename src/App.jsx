import './App.css'

import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Work from "./components/Work.jsx";
import Contact from "./components/Contact.jsx";
import Clients from "./components/Clients.jsx";

function App() {
  return (
    <>
        <Navbar />
        <Header />
        <Skills />
        <Projects />
        <Clients />
        <Work />
        <Contact />
    </>
  )
}

export default App

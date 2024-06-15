import './App.css'
//import MainComponent from './components/MainComponent';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//import GamePage from './components/GamePage';

// Component Imports
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Clients from "./components/Clients.jsx";
import Work from './components/Work.jsx';

const sampleExperience = [
  {
    title: "Front End Developer",
    company: "WISH AGENCY",
    years: "April 2022 - Present",
    mainTech: ["React", "JavaScript"],
    technologies: ["HTML", "CSS", "React", "JavaScript"],
    description: "Assisted in the development of client websites, adhering to best practices in coding and design principles. Implemented responsive design techniques to enhance user experience across various devices and ensured cross-browser compatibility and optimized website performance for seamless user experiences. I continuously learn and develop my skills to stay current with evolving web technologies."
  },
  {
    title: "Designer / AV Engineer",
    company: "FINITE SOLUTIONS",
    years: "September 2014 - April 2022",
    mainTech: ["Design", "AV Engineering"],
    technologies: ["AutoCAD", "Photoshop", "Smart Home Systems"],
    description: "Responsible for comprehensive system design, documentation, installation, and testing of cutting-edge smart home control systems and intelligent lighting solutions. Led cinema design initiatives and crafted compelling proposals for both cinema and complete smart home systems."
  },
  {
    title: "Electrician",
    company: "J&R ELECTRICAL",
    years: "October 2013 - September 2014",
    mainTech: ["Electrical Work"],
    technologies: ["Wiring", "Lighting", "Safety Standards"],
    description: "Installation and meticulous testing of electrical systems, encompassing power, lighting, and data provisions for both residential and commercial settings ensuring that every aspect adheres to the most stringent standards, guaranteeing excellence in both functionality and safety."
  }
];

const sampleBasicInfo = {
  section_name: {
    experience: "Work Experience"
  }
};





function App() {
  return (
    <>
        <Navbar />

        <Header />
        <Skills />
        <Projects />
        <Work resumeExperience={sampleExperience} resumeBasicInfo={sampleBasicInfo} />
        <Clients />
        <Contact />
    </>
    
  )
}

export default App

import './App.css';

// Component Imports
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Clients from "./components/Clients.jsx";
import Work from './components/Work.jsx';
import GamePage from './components/GamePage.jsx';

const sampleExperience = [
  {
      title: "Machine Learning Research Assistant",
      company: "Professor Dr. Victor Churchill, Department of Mathematics, Trinity College",
      years: "January 2024 - Present",
      mainTech: ["Machine Learning","Deep Learning","Economic Analysis", "Data Analysis"],
      technologies: ["PyTorch",  "TensorFlow","Scikit-Learn",  "Keras", "Google Colab"],
      description: "Enhancing economic fraud detection in auto insurance claims with machine learning. Utilized Scikit-Learn, TensorFlow, NumPy, and Keras for model development, conducting over 100 experiments to fine-tune parameters and optimize performance. Analyzed comprehensive datasets and applied data preprocessing and one-hot-encoding to leverage categorical variables, improving model accuracy from 70-80% to at least 90%. Conducted a comparative study on deep learning architectures (e.g., LSTM, DNN) and machine learning models (e.g., Random Forest, XGBoost) to identify the appropriate algorithms for the dataset."
    },
    {
      title: "IT Consultant",
      company: "Library and IT Services, Trinity College",
      years: "January 2024 - Present",
      mainTech: ["Tech Support", "Access Control", "CRM tools"],
      technologies: ["Microsoft Azure", "isHelp", "Salto Systems", "Troubleshooting"],
      description: "Provided tech troubleshooting to students/staff on 75 issues weekly on ishelp ticketing system, resolving 100% within target timeframes. Guided library patrons in utilizing the 900,000+ collection resources. Configured and maintained multi-factor authentication controls using Microsoft Azure and implemented Salto Systems for access control, enhancing security protocols and access management across campus facilities."
    },
    
  {
    title: "Writing Associate",
    company: "Allan K. Smith Center for Writing and Rhetoric, Trinity College",
    years: "September 2023 - Present",
    mainTech: ["Creative Writing Consultation", "AI Impact Assessment on Writing"],
    technologies: ["GenAI and College Writing","Creative Writing","Assignment Feedback"],
    description: "Offered writing consultations, delivering constructive feedback to improve undergraduate/graduate-level writing. Developed “Trinity WritingAid” GPT as a research prototype that demonstrates how an AI tool can effectively support student learning while minimizing risks to educational integrity."
  },
  {
    title: "Resident Advisor/Assistant",
    company: "Bantam Network Residential Learning Community, Trinity College",
    years: "August 2023 - May 2024",
    mainTech: ["Community Building", "Emergency Response", "Campus Safety","Event Planning",],
    technologies: ["Conflict Resolution", "Sustainability Initiatives"],
    description: "Organized and led 5 events every semester attended by 70% of dorm residents to promote community building, sustainability initiatives, and social responsibility.Mediated resident issues through empathy-based counseling approach resulting in conflict resolutions and no conduct violations."
  },
];


const sampleBasicInfo = {
  section_name: {
    experience: "Work Experience"
  }
};

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})

function App() {
  return (
    <>
      <Navbar />
      <section id="home">
        <Header />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="work">
        <Work resumeExperience={sampleExperience} resumeBasicInfo={sampleBasicInfo} />
      </section>
      <section id="clients">
        <Clients />
      </section>
      <section id="arcade">
        <GamePage />
      </section>
      <section id="contact">
        <Contact />
      </section>
      
    </>
  );
}

export default App;

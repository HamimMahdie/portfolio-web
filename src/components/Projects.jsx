import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaPython, FaFlask, FaCss3, FaGithub, FaGitlab, FaDocker, FaJava} from 'react-icons/fa';
import { DiSqllite } from "react-icons/di";
// Image Imports
import fxp from "../assets/fxp.png";
import Scheduler from "../assets/foodpantry.png";
import TodoApp from "../assets/booklibrary.jpeg";
import { SiKubernetes, SiSpringboot,  } from "react-icons/si";
import { SiGmail } from "react-icons/si";
import { SiGradle } from "react-icons/si";

const Projects = () => {
    return (
        <section id="projects" className="scroll-mt-40">
            <div className="container mx-auto mb-20 px-4 lg:px-20">
            <div className="bg-highlight rounded-xl mb-16 text-center transition-all duration-200 ease-in-out transform hover:scale-150">
                    <h2 className="font-bold text-5xl lg:text-5xl text-theme-red pb-6">Projects</h2>
                </div>
                <div className="flex flex-col lg:flex-row lg:flex-row-reverse gap-12 items-center mb-20">
                    <img className="rounded-xl lg:w-[50%]" src={fxp} alt="Forex Predictor" />
                    <div className="bg-card-bg p-8 rounded-xl">
                        <h3 className="text-theme-red tracking-widest">ForEx Rates Predictor</h3>
                        <hr className="text-theme-red mb-8"/>
                        <div className="flex gap-4 items-center mb-4">
                            <p className="text-lg">Tech Stack | </p>
                            <FaPython className="w-8 h-8 text-white cursor-pointer hover:scale-110" />
                            <FaFlask className="w-8 h-8 text-white cursor-pointer hover:scale-110" />
                            <DiSqllite className="w-8 h-8 text-white cursor-pointer hover:scale-110" />
                            <FaHtml5 className="w-8 h-8 text-white cursor-pointer hover:scale-110" />
                            <FaCss3 className="w-8 h-8 text-white cursor-pointer hover:scale-110" />
                            <FaDocker className="w-8 h-8 text-white cursor-pointer hover:scale-110" />
                            <SiKubernetes className="w-8 h-8 text-white cursor-pointer hover:scale-110" />
                            
                            
                        </div>
                        <p>ForEx Predictor is an app that provides accurate currency exchange rate predictions and real-time data integration. Developed as a cloud-native application, it utilizes containerization with Docker and Kubernetes and is deployed on Google Cloud Platform. </p> <br/>
                        <p>The app features a microservices architecture with separate containers for the UI, Gateway API, Prediction service using ML models, and Data Storage, enhancing scalability and manageability by 30%. By fine-tuning LSTM neural networks for predictive modeling and integrating real-time data sources, it delivers 9% more accurate visual and actionable insights for traders and businesses. </p>
                        <div className="flex gap-3">
                            <a href="https://github.com/LukeAndrewColeman/code-snippets" target="_blank" rel="noopener noreferrer" className="hover:scale-105">
                                <button className="py-2 px-6 mt-10 bg-theme-red rounded-3xl text-[#24292D] font-bold">Code</button>
                            </a>
                            <a href="https://code-snippets.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:scale-105">
                                <button className="py-2 px-6 mt-10 bg-theme-red rounded-3xl text-[#24292D] font-bold">Live Preview</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row lg:flex-row-reverse gap-12 items-center mb-20">
                    <img className="rounded-xl lg:w-[50%]" src={Scheduler} alt="Scheduler" />
                    <div className="bg-card-bg p-8 rounded-xl">
                        <h3 className="text-theme-red tracking-widest">Food Pantry Scheduler</h3>
                        <hr className="text-theme-red mb-8"/>
                        <div className="flex gap-4 items-center mb-4">
                            <p className="text-lg">Tech Stack | </p>
                            <FaPython className="w-8 h-8 text-white cursor-pointer hover:scale-110" />
                            <FaFlask className="w-8 h-8 text-white cursor-pointer hover:scale-110" />
                            <SiGmail className="w-8 h-8 text-white cursor-pointer hover:scale-110" />
                            <DiSqllite className="w-8 h-8 text-white cursor-pointer hover:scale-110" />
                            <FaHtml5 className="w-8 h-8 text-white cursor-pointer hover:scale-110" />
                            <FaCss3 className="w-8 h-8 text-white cursor-pointer hover:scale-110" />
                            <FaGithub className="w-8 h-8 text-white cursor-pointer hover:scale-110" />
                            
                            </div>
                        <p>Food 'n Stuff Scheduler is an app that manages the administrative needs of Trinity College's food pantry. It features secure login/register, session management, and dashboards for admins and volunteers. </p> <br/>
                        <p>By integrating SQL databases, the application efficiently manages shifts posted by admins and hours logged by volunteers, ensuring seamless data management and retrieval. The system also includes email notifications for donation alerts via Google's SMTP API, with version control, CI/CD pipelines, and issue tracking managed through GitHub, enhancing collaboration and reducing deployment errors by 25%.</p>
                        
                        <div className="flex gap-3">
                            <a href="https://github.com/LukeAndrewColeman/Beat-Machine" target="_blank" rel="noopener noreferrer" className="hover:scale-105">
                                <button className="py-2 px-6 mt-10 bg-theme-red rounded-3xl text-[#24292D] font-bold">Code</button>
                            </a>
                            <a href="https://lukeandrewcoleman.github.io/Beat-Machine/" target="_blank" rel="noopener noreferrer" className="hover:scale-105">
                                <button className="py-2 px-6 mt-10 bg-theme-red rounded-3xl text-[#24292D] font-bold">Live Preview</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row lg:flex-row-reverse gap-12 items-center mb-20">
                    <img className="rounded-xl lg:w-[50%]" src={TodoApp} alt="Todo App" />
                    <div className="bg-card-bg p-8 rounded-xl">
                        <h3 className="text-theme-red tracking-widest">Personal Library Database</h3>
                        <hr className="text-theme-red mb-8"/>
                        <div className="flex gap-4 items-center mb-4">
                            <p className="text-lg">Tech Stack | </p>
                            <FaJava className="w-8 h-8 text-white cursor-pointer hover:scale-110" />
                            
                            <FaJs className="w-8 h-8 text-white cursor-pointer hover:scale-110" />
                            <SiSpringboot className="w-8 h-8 text-white cursor-pointer hover:scale-110" />
                            <SiGradle className="w-8 h-8 text-white cursor-pointer hover:scale-110" />
                            <FaHtml5 className="w-8 h-8 text-white cursor-pointer hover:scale-110" />
                            <FaCss3 className="w-8 h-8 text-white cursor-pointer hover:scale-110" />
                            </div>
                        <p>Personal Library Database is an application that allows users to manage their personal book collections efficiently. Developed through Test Driven Development (TDD), it features comprehensive CRUD operations and a user-friendly UI/UX.</p>
                        <br/>
                        <p>Built using Java and Spring Boot, the application provides functionalities such as adding, viewing, and deleting books. It employs a RESTful API for seamless interaction, and uses an H2 database for data persistence, along with JpaRepository for efficient data management.     
                        </p>
                        <div className="flex gap-3">
                            <a href="https://github.com/LukeAndrewColeman/Todo-List" target="_blank" rel="noopener noreferrer" className="hover:scale-105">
                                <button className="py-2 px-6 mt-10 bg-theme-red rounded-3xl text-[#24292D] font-bold">Code</button>
                            </a>
                            <a href="https://lukeandrewcoleman.github.io/Todo-List/" target="_blank" rel="noopener noreferrer" className="hover:scale-105">
                                <button className="py-2 px-6 mt-10 bg-theme-red rounded-3xl text-[#24292D] font-bold">Live Preview</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;

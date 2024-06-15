import React, { useEffect } from 'react';
import Rellax from 'rellax';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaPython, FaFlask, FaGithub, FaGitlab, FaDocker, FaJava, FaGit, FaGoogle } from 'react-icons/fa';
import { SiKubernetes, SiSpringboot, SiTensorflow, SiJavascript, SiSwift, SiPytorch, SiFirebase, SiJupyter, SiGooglecloud, SiMysql } from "react-icons/si";

const Skills = () => {

    useEffect(() => {
        const rellax = new Rellax('.rellax');
        return () => {
            rellax.destroy();
        };
    }, []);

    const skills = [
        { icon: <FaPython className="w-24 h-24 mb-4" />, title: "Python" },
        { icon: <FaJava className="w-24 h-24 mb-4" />, title: "Java" },
        
        { icon: <SiJavascript className="w-24 h-24 mb-4" />, title: "JavaScript" },
        { icon: <SiSwift className="w-24 h-24 mb-4" />, title: "Swift" },
        //{ icon: <SiMatlab className="w-24 h-24 mb-4" />, title: "MATLAB" },
        { icon: <FaNodeJs className="w-24 h-24 mb-4" />, title: "NodeJs" },
        { icon: <FaReact className="w-24 h-24 mb-4" />, title: "React" },
        { icon: <SiSpringboot className="w-24 h-24 mb-4" />, title: "SpringBoot" },
        { icon: <FaFlask className="w-24 h-24 mb-4" />, title: "Flask" },
        { icon: <FaDocker className="w-24 h-24 mb-4" />, title: "Docker" },
        { icon: <SiKubernetes className="w-24 h-24 mb-4" />, title: "Kubernetes" },
        { icon: <SiGooglecloud className="w-24 h-24 mb-4" />, title: "Google Cloud" },
        { icon: <SiMysql className="w-24 h-24 mb-4" />, title: "SQL" },
        { icon: <SiFirebase className="w-24 h-24 mb-4" />, title: "Firebase" },
        //{ icon: <FaGit className="w-24 h-24 mb-4" />, title: "Git" },
        { icon: <SiTensorflow className="w-24 h-24 mb-4" />, title: "TensorFlow" },
        { icon: <SiJupyter className="w-24 h-24 mb-4" />, title: "Jupyter Notebook" },
        { icon: <SiPytorch className="w-24 h-24 mb-4" />, title: "PyTorch" }
    ];

    return (
        <section id="skills" className="mb-32 scroll-mt-40">
            <div className="container mx-auto px-1 lg:px-20">
                <div className="bg-highlight rounded-xl mb-16 text-center transition-all duration-200 ease-in-out transform hover:scale-150">
                    <h2 className="font-bold text-5xl lg:text-5xl text-theme-red pb-6">Skills</h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <div key={index} className="flex flex-col items-center">
                            {skill.icon}
                            <h3 className="mt-2 text-xl">{skill.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

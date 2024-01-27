import React from 'react';

// Image Imports
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import Javascript from '../assets/javascript.png'
import PHP from '../assets/php.png'
import ReactImg from '../assets/react.png'
import Tailwind from '../assets/tailwind.png'
import GIT from '../assets/git.png'
import Wordpress from '../assets/wordpress.png'

const Skills = () => {
    return (
        <section id="skills" className="mb-32">
            <div className="container mx-auto px-10 lg:px-20">
                <h2 className="text-4xl font-bold mb-10 text-center">Skills</h2>
                <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 lg:gap-12">
                    <div className="flex flex-col items-center bg-card-bg p-10 rounded-xl shadow-lg">
                        <img src={HTML} className="h-20 mb-4"/>
                        <h3>HTML</h3>
                    </div>
                    <div className="flex flex-col items-center bg-card-bg p-10 rounded-xl shadow-lg">
                        <img src={CSS} className="h-20 mb-4"/>
                        <h3>CSS</h3>
                    </div>
                    <div className="flex flex-col items-center bg-card-bg p-10 rounded-xl shadow-lg">
                        <img src={Javascript} className="h-20 mb-4"/>
                        <h3>JavaScript</h3>
                    </div>
                    <div className="flex flex-col items-center bg-card-bg p-10 rounded-xl shadow-lg">
                        <img src={ReactImg} className="h-20 mb-4"/>
                        <h3>React</h3>
                    </div>
                    <div className="flex flex-col items-center bg-card-bg p-10 rounded-xl shadow-lg">
                        <img src={Tailwind} className="h-20 mb-4"/>
                        <h3>Tailwind</h3>
                    </div>
                    <div className="flex flex-col items-center bg-card-bg p-10 rounded-xl shadow-lg">
                        <img src={GIT} className="h-20 mb-4"/>
                        <h3>GIT</h3>
                    </div>
                    <div className="flex flex-col items-center bg-card-bg p-10 rounded-xl shadow-lg">
                        <img src={PHP} className="h-20 mb-4"/>
                        <h3>PHP</h3>
                    </div>
                    <div className="flex flex-col items-center bg-card-bg p-10 rounded-xl shadow-lg">
                        <img src={Wordpress} className="h-20 mb-4"/>
                        <h3>WordPress</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;

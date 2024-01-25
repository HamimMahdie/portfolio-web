import React from 'react';

import CV from "../assets/luke-andrew-coleman-cv-2024.pdf"

const Navbar = () => {
    return (
        <div className="h-[10vh] bg-dark-bg flex">
            <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between items-center">
                <p className="text-xl mt-6 lg:mt-0"><span className="text-theme-red font-bold">LUKE</span> ANDREW COLEMAN</p>
                <nav className='mt-4 lg:mt-0'>
                    <ul className="flex gap-10">
                        <li className="hover:text-theme-red hover:scale-110">
                            <a href="#home">Home</a>
                        </li>
                        <li className="hover:text-theme-red hover:scale-110">
                            <a href="#skills">Skills</a>
                        </li>
                        <li className="hover:text-theme-red hover:scale-110">
                            <a href="#projects">Projects</a>
                        </li>
                        <li className="hover:text-theme-red hover:scale-110">
                            <a href="#work">Work</a>
                        </li>
                        <li className="hover:text-theme-red hover:scale-110">
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>
                <a href={CV} target="_blank">
                    <button className="py-2 px-6 bg-theme-red rounded-3xl hidden lg:block hover:scale-110">Download CV</button>
                </a>

            </div>
        </div>
    );
};

export default Navbar;

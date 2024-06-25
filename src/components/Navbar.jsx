import React from 'react';

const Navbar = () => {
    return (
        <div className="h-[13vh] md:h-[10vh] bg-[#24292D] flex fixed w-full z-10">
            <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between items-center">
                <p className="text-xl mt-2 lg:mt-0">
                    <span className="text-theme-white font-bold"> <a href="#home"className="text-theme-red hover:text-theme-dark-red">HamimMahdie</a></span> 
                </p>
                <nav className="navbar-container mt-2 lg:mt-0 w-full">
                    <ul className="flex justify-center gap-2 lg:gap-5">
                        <li className="navbar-item hover:text-theme-red hover:scale-110">
                            <a href="#home">Home</a>
                        </li>
                        <li className="navbar-item hover:text-theme-red hover:scale-110">
                            <a href="#projects">Projects</a>
                        </li>
                        <li className="navbar-item hover:text-theme-red hover:scale-110">
                            <a href="#work">Work</a>
                        </li>
                        <li className="navbar-item hover:text-theme-red hover:scale-110">
                            <a href="#arcade">Arcade</a>
                        </li>
                        <li className="navbar-item hover:text-theme-red hover:scale-110">
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;

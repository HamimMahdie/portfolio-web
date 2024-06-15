import React from 'react';

// Importing the icons
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="bg-card-bg py-20">
            <div className="container mx-auto flex flex-col items-center">
                <div className="bg-highlight rounded-xl mb-16 text-center transition-all duration-200 ease-in-out transform hover:scale-150">
                    <h2 className="font-bold text-4xl lg:text-5xl text-theme-red pb-6">Contact Me</h2>
                </div>
                <div className="w-[70%] md:w-[60%] text-center">
                    <p>
                        Let's build something together. 
                        <br />
                        <br />
                        I'm also open to job/internship opportunities within the web development, SWE, and ML fields. If you have any job opportunities or just fancy a chat, please use the links below to get in touch.
                    </p>
                    <div className="flex gap-6 mt-10 justify-center">
                        <a href="https://www.linkedin.com/in/hamim-mahdie-5455ab1b2/" target="_blank" rel="noopener noreferrer" className="text-4xl text-theme-red hover:text-theme-dark-red transition-transform transform hover:scale-110">
                            <FaLinkedin />
                        </a>
                        <a href="mailto:hamimmahdie2@gmail.com" className="text-4xl text-theme-red hover:text-theme-dark-red transition-transform transform hover:scale-110">
                            <FaEnvelope />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

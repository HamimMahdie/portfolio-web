import React from 'react';

const Work = () => {
    return (
        <section id="work" className="scroll-mt-40">
            <div className="container mx-auto my-20 px-10 lg:px-20">
                <h2 className="text-4xl font-bold mb-10 text-center">Work Experience</h2>
                <ol className="relative border-s border-theme-red dark:border-gray-700">
                    <li className="mb-10 ms-4">
                        <div
                            className="absolute w-3 h-3 bg-theme-red rounded-full mt-1.5 -start-1.5 border border-theme-red dark:border-gray-900 dark:bg-gray-700"></div>
                        <h3 className="text-lg font-semibold text-gray-900 text-theme-red">Front End Developer - WISH
                            AGENCY
                        </h3>
                        <time
                            className="mb-1 text-sm font-light leading-none text-gray-400 dark:text-gray-500">April
                            2022 - Present
                        </time>
                        <p className="mb-4 mt-4 text-base font-normal text-gray-500 dark:text-gray-400">
                            Assisted in the development of client websites, adhering to best practices in coding and
                            design principles. Implemented responsive design techniques to enhance user experience
                            across various devices and ensured cross-browser compatibility and optimized website
                            performance for seamless user experiences.
                            I continuously learn and develop my skills to stay current with evolving web technologies.
                        </p>
                    </li>
                    <li className="mb-10 ms-4">
                        <div
                            className="absolute w-3 h-3 bg-theme-red rounded-full mt-1.5 -start-1.5 border border-theme-red dark:border-gray-900 dark:bg-gray-700"></div>
                        <h3 className="text-lg font-semibold text-gray-900 text-theme-red"> Designer / AV Engineer -
                            FINITE SOLUTIONS
                        </h3>
                        <time
                            className="mb-1 text-sm font-light leading-none text-gray-400 dark:text-gray-500">September
                            2014 - April 2022
                        </time>
                        <p className="mb-4 mt-4 text-base font-normal text-gray-500 dark:text-gray-400">
                            Responsible for comprehensive system design, documentation, installation, and testing of
                            cutting-edge smart home control systems and intelligent lighting solutions. Led cinema
                            design initiatives and crafted compelling proposals for both cinema and complete smart home
                            systems.
                        </p>
                    </li>
                    <li className="mb-10 ms-4">
                        <div
                            className="absolute w-3 h-3 bg-theme-red rounded-full mt-1.5 -start-1.5 border border-theme-red dark:border-gray-900 dark:bg-gray-700"></div>
                        <h3 className="text-lg font-semibold text-gray-900 text-theme-red">Electrician - J&R
                            ELECTRICAL</h3>
                        <time
                            className="mb-1 text-sm font-light leading-none text-gray-400 dark:text-gray-500">October
                            2013 - September 2014
                        </time>
                        <p className="mb-4 mt-4 text-base font-normal text-gray-500 dark:text-gray-400">Installation and
                            meticulous testing of electrical systems, encompassing power, lighting, and data provisions
                            for both residential and commercial settings ensuring that every aspect adheres to the most
                            stringent standards, guaranteeing excellence in both functionality and safety.
                        </p>
                    </li>
                </ol>
            </div>
        </section>
    );
};

export default Work;

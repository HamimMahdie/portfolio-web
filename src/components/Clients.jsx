import React from 'react';

// Image Imports
import Arrow from "../assets/SGA-logo.png";
import Alveo from "../assets/twb-logo.png";
import Ugp from "../assets/dents-logo.png";
import Springfield from "../assets/trin-logo.png";

const Clients = () => {
    const clients = [
        { img: Arrow, title: "Student Government", link: "https://commons.trincoll.edu/sga/" },
        { img: Alveo, title: "Translators w/o Borders", link: "https://translatorswithoutborders.org/" },
        { img: Ugp, title: "A Cappella", link: "https://trinityaccidentals.com/" },
        { img: Springfield, title: "Cultural Orgs", link: "https://www.instagram.com/trinity.ihouse/" }
    ];

    return (
        <section id="clients" className="mb-32 scroll-mt-40">
            <div className="container mx-auto px-10 lg:px-20">
                <div className="bg-highlight rounded-xl mb-16 text-center transition-all duration-200 ease-in-out transform hover:scale-150">
                    <h2 className="font-bold text-5xl lg:text-5xl text-theme-red pb-6">When I'm not coding...</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 lg:gap-12">
                    {clients.map((client, index) => (
                        <a key={index} href={client.link} className="flex flex-col items-center bg-card-bg p-10 rounded-xl shadow-lg" target="_blank" rel="noopener noreferrer">
                            <img className="h-[100px] mb-2" src={client.img} alt={client.title} />
                            <p className="text-center">{client.title}</p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clients;

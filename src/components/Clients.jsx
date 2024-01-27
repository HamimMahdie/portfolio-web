import React from 'react';

// Image Imports
import Arrow from "../assets/arrow-logo-white.png"
import Alveo from "../assets/alveo-logo-white.png"
import Ugp from "../assets/ugp-white-logo.png"
import Springfield from "../assets/springfield-white-logo.png"
import Christeyns from "../assets/christeyns-logo-white.png"

const Clients = () => {
    return (
        <section className="bg-card-bg py-20">
            <div className="container mx-auto flex flex-col items-center">
                <h2 className="text-4xl font-bold mb-16 text-center">Clients Worked With</h2>
                <div className="flex flex-wrap justify-center items-center gap-10">
                    <img className="h-[20px]" src={Arrow}/>
                    <img className="h-[30px]" src={Alveo}/>
                    <img className="h-[40px]" src={Ugp}/>
                    <img className="h-[40px]" src={Springfield}/>
                    <img className="h-[30px]" src={Christeyns}/>
                </div>
            </div>
        </section>
    );
};

export default Clients;

import React, { useState } from 'react';
import MainComponent from './MainComponent.jsx';
import './GamePage.css';

const GamePage = () => {
    
    return (
        <div>
            <section id="clients" className="mb-32 scroll-mt-40">
                <div className="container mx-auto px-10 lg:px-20">
                    <div className="bg-highlight rounded-xl mb-16 text-center transition-all duration-200 ease-in-out transform hover:scale-150">
                        <h2 className="font-bold text-5xl lg:text-5xl text-theme-red pb-6">Arcade</h2>
                    </div>
                </div>
            </section>
            <div className="game-page-container">
                <MainComponent />
            </div>
        </div>
    );
};

export default GamePage;

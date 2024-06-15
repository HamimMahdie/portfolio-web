/*
/ src/components/MainComponent.jsx
import React, { useState } from 'react';
import Mole from './Mole';

const MainComponent = () => {
    const [score, setScore] = useState(0);

    const handleWhack = () => {
        setScore(score + 1);
    };

    return (
        <div className="main-container">
            <h1>Whack-a-Beaver</h1>
            <p>Score: {score}</p>
            <Mole onWhack={handleWhack} />
        </div>
    );
};

export default MainComponent;
*/
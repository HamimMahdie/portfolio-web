import React, { useState, useEffect } from 'react';
import Mole from './Mole';
import backgroundMusic from '../assets/mole-score.wav';
import './MainComponent.css';

const backgroundAudio = new Audio(backgroundMusic);

const MainComponent = () => {
    const [score, setScore] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);
    const [moles, setMoles] = useState([]);

    useEffect(() => {
        let moleInterval;
        if (gameStarted) {
            backgroundAudio.loop = true;
            backgroundAudio.play();
            moleInterval = setInterval(() => {
                const moleCount = Math.floor(Math.random() * 10) + 1; // Random number of moles between 1 and 10
                setMoles(Array.from({ length: moleCount }, (_, index) => index));
            }, 1000); // Moles appear every second
        }
        return () => {
            clearInterval(moleInterval);
            backgroundAudio.pause();
            backgroundAudio.currentTime = 0;
        };
    }, [gameStarted]);

    const handleStart = () => {
        setGameStarted(true);
    };

    const handleWhack = () => {
        setScore(score + 1);
    };

    return (
        <div className="main-container">
            {!gameStarted ? (
                <button onClick={handleStart} className="start-button">Press Start</button>
            ) : (
                <>
                    <h1>Whack-a-Mole</h1>
                    <p>Score: {score}</p>
                    <div className="game-area">
                        {moles.map((_, index) => (
                            <Mole key={index} onWhack={handleWhack} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default MainComponent;

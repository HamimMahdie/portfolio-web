import React, { useState, useEffect } from 'react';
import { FaVolumeUp, FaVolumeMute, FaBell, FaBellSlash } from 'react-icons/fa'; // Added FaBell and FaBellSlash
import Mole from './Mole';
import backgroundMusic from '../assets/mole-score.wav';
import whackSound from '../assets/whack.mp3';
import './MainComponent.css';

const backgroundAudio = new Audio(backgroundMusic);
const whackAudio = new Audio(whackSound);

const MainComponent = () => {
    const [score, setScore] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);
    const [moles, setMoles] = useState([]);
    const [moleVisibleTime, setMoleVisibleTime] = useState(1500); // Mole visibility duration (ms)
    const [moleInterval, setMoleInterval] = useState(1000); // Interval between mole appearances (ms)
    const [isMusicPlaying, setIsMusicPlaying] = useState(true); // State to control music
    const [isSFXOn, setIsSFXOn] = useState(true);

    useEffect(() => {
        let moleInterval;
        if (gameStarted) {
            backgroundAudio.loop = true;
            backgroundAudio.play();
            moleInterval = setInterval(() => {
                const moleCount = Math.floor(Math.random() * 4) + 1; // Random number of moles between 1 and 10
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

    const handleRestart = () => {
        setGameStarted(false);
        setScore(0);
        setMoles([]);
    };

    const handleWhack = () => {
        setScore(score + 1);
        if (isSFXOn) {
            whackAudio.play();
        }
    };

    const toggleMusic = () => {
        if (isMusicPlaying) {
            backgroundAudio.pause();
        } else {
            backgroundAudio.play();
        }
        setIsMusicPlaying(!isMusicPlaying);
    };

    const toggleSFX = () => {
        setIsSFXOn(!isSFXOn);
    };

    return (
        <div className="main-wrapper">
            <div className="main-container">
                <div className="game-area">
                    {!gameStarted ? (
                        <button onClick={handleStart} className="start-button">Press Start</button>
                    ) : (
                        <>
                            <h1 className="game-title">Whack-a-Mole</h1>
                            <p className="game-score">Score: {score}</p>
                            <button onClick={handleRestart} className="restart-button">Restart</button>
                            <button onClick={toggleMusic} className="volume-button">
                                <span>Music</span> {isMusicPlaying ? <FaVolumeUp /> : <FaVolumeMute />}
                            </button>
                            <button className="volume-button" onClick={toggleSFX} style={{ top: '80px' }}>
                                <span>SFX</span> {isSFXOn ? <FaBell /> : <FaBellSlash />}
                            </button>
                            {moles.map((_, index) => (
                                <Mole key={index} onWhack={handleWhack} />
                            ))}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MainComponent;

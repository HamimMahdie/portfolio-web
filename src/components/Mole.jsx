/*
// src/components/Mole.jsx
import React, { useState, useEffect } from 'react';
import beaverImage from '../assets/beaver.png';
import whackSound from '../assets/whack.mp3';

const Mole = ({ onWhack }) => {
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const [visible, setVisible] = useState(false);
    const whackAudio = new Audio(whackSound);

    useEffect(() => {
        const showMole = () => {
            const top = Math.random() * window.innerHeight * 0.8;
            const side = Math.random() < 0.5 ? 'left' : 'right';
            const left = side === 'left' ? '10px' : `${window.innerWidth - 110}px`; // Adjust based on image width
            setPosition({ top, left });
            setVisible(true);
            setTimeout(() => setVisible(false), 1000);
        };
        const interval = setInterval(showMole, 2000);
        return () => clearInterval(interval);
    }, []);

    const handleClick = () => {
        setVisible(false);
        whackAudio.play();
        onWhack();
    };

    return (
        visible && (
            <div
                style={{ top: `${position.top}px`, left: position.left }}
                className="mole"
                onClick={handleClick}
            >
                <img src={beaverImage} alt="beaver" className="beaver-image" />
            </div>
        )
    );
};

export default Mole;
*/
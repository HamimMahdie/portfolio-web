import React, { useState, useEffect } from 'react';
import beaverImage from '../assets/beaver.png';

const Mole = ({ onWhack }) => {
    const [position, setPosition] = useState({ bottom: 0, left: 0 });
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const showMole = () => {
            const gameArea = document.querySelector('.game-area');
            const gameAreaHeight = gameArea.offsetHeight;
            const gameAreaWidth = gameArea.offsetWidth;
            const moleHeight = 180; // Adjust based on actual image height
            const moleWidth = 100; // Adjust based on actual image width

            // Ensure mole stays within the bottom half of the game area
            const bottom = Math.random() * (gameAreaHeight / 2 - moleHeight);
            const left = Math.random() * (gameAreaWidth - moleWidth);
            setPosition({ bottom, left });
            setVisible(true);
            setTimeout(() => setVisible(false), 1500);
        };
        showMole();
    }, []);

    const handleClick = () => {
        setVisible(false);
        onWhack();
    };

    return (
        visible && (
            <div
                style={{ bottom: `${position.bottom}px`, left: `${position.left}px` }}
                className="mole"
                onClick={handleClick}
            >
                <img src={beaverImage} alt="beaver" className="beaver-image" />
            </div>
        )
    );
};

export default Mole;

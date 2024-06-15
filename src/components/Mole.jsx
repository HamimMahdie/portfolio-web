import React, { useState, useEffect } from 'react';
import beaverImage from '../assets/beaver.png';
import whackSound from '../assets/whack.mp3';

const Mole = ({ onWhack }) => {
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const [visible, setVisible] = useState(false);
    const whackAudio = new Audio(whackSound);

    useEffect(() => {
        const showMole = () => {
            const top = Math.random() * (150 - 100); // Ensure mole stays within 2765px height, adjust 100px for image size
            const left = Math.random() * (260 - 100); // Ensure mole stays within 4691px width, adjust 100px for image size
            setPosition({ top, left });
            setVisible(true);
            setTimeout(() => setVisible(false), 1500); // Mole stays visible longer (1.5 seconds)
        };
        showMole(); // Show mole immediately upon mount
    }, []);
/*
    useEffect1(() => {
        const showMole1 = () => {
            const top1 = Math.random() * (2765 - 100); // Ensure mole stays within 2765px height, adjust 100px for image size
            const left1 = Math.random() * (4691 - 100); // Ensure mole stays within 4691px width, adjust 100px for image size
            setPosition1({ top, left });
            setVisible1(true);
            setTimeout1(() => setVisible1(false), 1500); // Mole stays visible longer (1.5 seconds)
        };
        showMole1(); // Show mole immediately upon mount
    }, []);
*/
    const handleClick = () => {
        setVisible(false);
        whackAudio.play();
        onWhack();
    };

    return (
        visible && (
            <div
                style={{ top: `${position.top}px`, left: `${position.left}px` }}
                className="mole"
                onClick={handleClick}
            >
                <img src={beaverImage} alt="beaver" className="beaver-image" />
            </div>
        )
    );
};

export default Mole;

import React, { useState, useEffect } from 'react';
import beaverImage from '../assets/beaver.png';

const Mole = ({ onWhack }) => {
    const [position, setPosition] = useState({ bottom: 0, left: 0 });
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const showMole = () => {
        
        const bottom = Math.random() * (720 - 620); // Ensure mole stays within 720px height, adjust 100px for image size, showing only in the bottom half
        const left = Math.random() * (1280 - 100); // Ensure mole stays within 1280px width, adjust 100px for image size
        setPosition({bottom, left });
        setVisible(true);
        setTimeout(() => setVisible(false), 1500); // Mole stays visible longer (1.5 seconds)
        };
        showMole(); // Show mole immediately upon mount
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

import React, { useEffect, useState } from 'react';
import './rainy.css';

const RainyDay = ({ dropCount = 60 }) => {
    const [drops, setDrops] = useState([]);
    const [splashes, setSplashes] = useState([]);

    useEffect(() => {
        const raindrops = [];
        const rainSplashes = [];

        for (let i = 0; i < dropCount; i++) {
            const left = Math.random() * 100 + 'vw';
            const height = Math.random() * 20 + 10 + 'px'; // Rain streak length 10-30px
            const animationDuration = Math.random() * 0.5 + 0.6 + 's'; // Fast fall: 0.6s - 1.1s
            const animationDelay = Math.random() * 2 + 's';
            const opacity = Math.random() * 0.4 + 0.3;

            raindrops.push({
                id: i,
                style: {
                    left: left,
                    height: height,
                    animationDuration: animationDuration,
                    animationDelay: animationDelay,
                    opacity: opacity
                }
            });
        }

        // Add some splash effects at the bottom
        const splashEmojis = ['💧', '🌧️', '☔'];
        for (let i = 0; i < 8; i++) {
            const left = Math.random() * 90 + 5 + 'vw';
            const animationDuration = Math.random() * 1.5 + 1 + 's';
            const animationDelay = Math.random() * 3 + 's';
            const emoji = splashEmojis[Math.floor(Math.random() * splashEmojis.length)];

            rainSplashes.push({
                id: i,
                emoji,
                style: {
                    left: left,
                    bottom: Math.random() * 10 + 'vh',
                    fontSize: Math.random() * 8 + 12 + 'px',
                    animationDuration: animationDuration,
                    animationDelay: animationDelay
                }
            });
        }

        setDrops(raindrops);
        setSplashes(rainSplashes);
    }, [dropCount]);

    return (
        <div className="rain-container" aria-hidden="true">
            {drops.map(drop => (
                <div key={drop.id} className="raindrop" style={drop.style} />
            ))}
            {splashes.map(splash => (
                <div key={`splash-${splash.id}`} className="rain-splash" style={splash.style}>
                    {splash.emoji}
                </div>
            ))}
        </div>
    );
};

export default RainyDay;

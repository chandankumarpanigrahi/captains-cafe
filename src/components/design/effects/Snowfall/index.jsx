import React, { useEffect, useState } from 'react';
import './snowfall.css';

const Snowfall = ({ snowflakeCount = 50 }) => {
    const [snowflakes, setSnowflakes] = useState([]);

    useEffect(() => {
        const flakes = [];
        for (let i = 0; i < snowflakeCount; i++) {
            const size = Math.random() * 5 + 2 + 'px'; // Random size between 2px and 7px
            const left = Math.random() * 100 + 'vw';
            const animationDuration = Math.random() * 5 + 3 + 's'; // Random fall duration between 3s and 8s
            const animationDelay = Math.random() * 5 + 's';
            const opacity = Math.random() * 0.5 + 0.3;

            flakes.push({
                id: i,
                style: {
                    width: size,
                    height: size,
                    left: left,
                    animationDuration: `${animationDuration}, ${Math.random() * 2 + 2}s`, // separate duration for fall and shake
                    animationDelay: `${animationDelay}, ${Math.random() * 2}s`,
                    opacity: opacity
                }
            });
        }
        setSnowflakes(flakes);
    }, [snowflakeCount]);

    return (
        <div className="snow-container" aria-hidden="true">
            {snowflakes.map(flake => (
                <div key={flake.id} className="snowflake" style={flake.style} />
            ))}
        </div>
    );
};

export default Snowfall;

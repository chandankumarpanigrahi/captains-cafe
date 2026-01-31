import React, { useEffect, useState } from 'react';
import './hearts.css';

const FallingHearts = ({ heartCount = 30 }) => {
    const [hearts, setHearts] = useState([]);

    useEffect(() => {
        const newHearts = [];
        const colors = ['#ff4d6d', '#ff8fa3', '#ffb3c1', '#ff002b', '#d90429'];

        for (let i = 0; i < heartCount; i++) {
            const size = Math.random() * 20 + 10 + 'px'; // Random size between 10px and 30px
            const left = Math.random() * 100 + 'vw';
            const animationDuration = Math.random() * 5 + 4 + 's'; // Random fall duration between 4s and 9s
            const animationDelay = Math.random() * 5 + 's';
            const opacity = Math.random() * 0.5 + 0.5;
            const color = colors[Math.floor(Math.random() * colors.length)];

            newHearts.push({
                id: i,
                style: {
                    fontSize: size,
                    left: left,
                    animationDuration: `${animationDuration}, ${Math.random() * 3 + 2}s`, // separate duration for fall and sway
                    animationDelay: `${animationDelay}, ${Math.random() * 2}s`,
                    opacity: opacity,
                    color: color
                }
            });
        }
        setHearts(newHearts);
    }, [heartCount]);

    return (
        <div className="hearts-container" aria-hidden="true">
            {hearts.map(heart => (
                <div key={heart.id} className="heart" style={heart.style}>
                    ❤
                </div>
            ))}
        </div>
    );
};

export default FallingHearts;

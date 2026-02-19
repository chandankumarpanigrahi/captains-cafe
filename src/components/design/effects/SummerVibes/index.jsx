import React, { useEffect, useState } from 'react';
import './summer.css';

const SummerVibes = ({ elementCount = 30 }) => {
    const [elements, setElements] = useState([]);

    useEffect(() => {
        const items = [];
        const emojis = ['☀️', '🌻', '🌴', '✨', '🌞', '⭐'];

        for (let i = 0; i < elementCount; i++) {
            const size = Math.random() * 16 + 12 + 'px'; // Random size between 12px and 28px
            const left = Math.random() * 100 + 'vw';
            const animationDuration = Math.random() * 6 + 5 + 's'; // Random fall duration between 5s and 11s
            const animationDelay = Math.random() * 6 + 's';
            const opacity = Math.random() * 0.4 + 0.4;
            const emoji = emojis[Math.floor(Math.random() * emojis.length)];

            items.push({
                id: i,
                emoji,
                style: {
                    fontSize: size,
                    left: left,
                    animationDuration: `${animationDuration}, ${Math.random() * 3 + 2}s`,
                    animationDelay: `${animationDelay}, ${Math.random() * 2}s`,
                    opacity: opacity
                }
            });
        }
        setElements(items);
    }, [elementCount]);

    return (
        <div className="summer-container" aria-hidden="true">
            {elements.map(el => (
                <div key={el.id} className="summer-element" style={el.style}>
                    {el.emoji}
                </div>
            ))}
        </div>
    );
};

export default SummerVibes;

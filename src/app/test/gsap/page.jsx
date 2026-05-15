"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const GsapTesting = () => {
    const boxRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const W = containerRef.current.offsetWidth;

        gsap.set(boxRef.current, { force3D: true }); // 👈 enable GPU from start

        const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

        tl.fromTo(boxRef.current,
            { x: -50 },
            { x: W * 0.33, rotation: "+=360", duration: 3, ease: "power2.inOut" })
            .to(boxRef.current, { duration: 1 })
            .to(boxRef.current, { x: W * 0.65, rotation: "+=360", duration: 3, ease: "power2.inOut" })
            .to(boxRef.current, { duration: 1 })
            .to(boxRef.current, { x: W * 1, rotation: "+=360", duration: 3, ease: "power2.inOut" });

        return () => tl.kill();
    }, []);

    return (
        <div className="container mt-40">
            <div
                className="bg-red-50"
                ref={containerRef}
                style={{ position: "relative", height: 120 }}
            >
                <div
                    ref={boxRef}
                    style={{
                        width: 115,
                        height: 115,
                        position: "absolute",
                        top: 0,
                        willChange: "transform",     // 👈 GPU hint
                        transform: "translateZ(0)",  // 👈 force GPU layer
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="115"
                        height="115"
                        viewBox="0 0 115 115"
                        fill="none"
                    >
                        <circle cx="57.5" cy="57.5" r="53.5" stroke="black" strokeWidth="8" />
                        <rect x="54" width="7" height="115" rx="1" fill="black" />
                        <rect x="95.6838" y="14.3665" width="7" height="115" rx="1" transform="rotate(45 95.6838 14.3665)" fill="black" />
                        <rect x="115" y="55" width="7" height="115" rx="1" transform="rotate(90 115 55)" fill="black" />
                        <rect x="99.9264" y="96.3909" width="7" height="115" rx="1" transform="rotate(135 99.9264 96.3909)" fill="black" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default GsapTesting;
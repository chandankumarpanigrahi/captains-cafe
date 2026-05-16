"use client"
import React from 'react'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import car1 from "../../../assets/svg/Car 1.svg"
import car1wheel from "../../../assets/svg/Car 1 wheel.svg"
import car2 from "../../../assets/svg/Car 2.svg"
import car2wheel from "../../../assets/svg/Car 2 wheel.svg"
import tcc from "../../../assets/svg/TCC.svg"
import tccMobile from "../../../assets/svg/TCC Mobile.svg"
import Image from 'next/image'
const VectorCafe = () => {
    const Car1Body = useRef(null);
    const Car2Body = useRef(null);
    const Car1Wheel1 = useRef(null);
    const Car1Wheel2 = useRef(null);
    const Car2Wheel1 = useRef(null);
    const Car2Wheel2 = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ repeat: -1 });

            // Car body movement
            tl.fromTo(Car1Body.current,
                { x: -250 },
                { x: "8vw", duration: 5, ease: "power1.out" }
            )
                .to(Car1Body.current, { duration: 2 })                        // break
                .to(Car1Body.current, { x: "55vw", duration: 10, ease: "power1.in" })
                .to(Car1Body.current, { duration: 2 })                        // break
                .set(Car1Body.current, { x: -250 });

            // Wheel timeline - matches car exactly
            const wheelTl = gsap.timeline({ repeat: -1 });

            wheelTl
                .to([Car1Wheel1.current, Car1Wheel2.current],
                    { rotation: "+=360", duration: 5, ease: "power1.out" }   // Phase 1: 5s move
                )
                .to([Car1Wheel1.current, Car1Wheel2.current],
                    { duration: 2 }                                            // Phase 2: 2s pause
                )
                .to([Car1Wheel1.current, Car1Wheel2.current],
                    { rotation: "+=1080", duration: 10, ease: "power1.in" }   // Phase 3: 10s move (+=720 = 2 full rotations in 10s)
                )
                .to([Car1Wheel1.current, Car1Wheel2.current],
                    { duration: 2 }                                            // Phase 4: 2s pause
                );


            gsap.fromTo(Car2Body.current,
                { x: 260 }, { x: "-55vw", repeat: -1, duration: 18, yoyo: false, ease: "linear" }
            );

            gsap.to(Car2Wheel1.current, { duration: 2, repeat: -1, rotate: -360, ease: "linear" });

            gsap.to(Car2Wheel2.current, { duration: 2, repeat: -1, rotate: -360, ease: "linear" });

        });
        return () => ctx.revert();

    }, []);

    return (
        <div className='!px-0 container mt-40 overflow-hidden'>
            <div className='hidden md:block relative w-full'>
                <div>
                    <Image src={tcc} alt="tcc" />
                </div>
                <div className='absolute bottom-8 left-0 w-[15%]' ref={Car1Body}>
                    <div className="relative">
                        <Image src={car1} className="w-full h-auto" alt="car1" />
                        <Image src={car1wheel} className="w-1/8 h-auto absolute bottom-1.5 left-7" alt="car1wheel" ref={Car1Wheel1} />
                        <Image src={car1wheel} className="w-1/8 h-auto absolute bottom-1.5 right-5" alt="car1wheel" ref={Car1Wheel2} />
                    </div>
                </div>
                <div className='absolute bottom-1 right-0 w-[15%]' ref={Car2Body}>
                    <div className="relative">
                        <Image src={car2} className="w-full h-auto" alt="car2" />
                        <Image src={car2wheel} className="w-1/9 h-auto absolute bottom-[3px] left-[29px]" alt="car1wheel" ref={Car2Wheel1} />
                        <Image src={car2wheel} className="w-1/9 h-auto absolute bottom-[3px] right-[26px]" alt="car1wheel" ref={Car2Wheel2} />
                    </div>
                </div>
            </div>
            <div className='block md:hidden'>
                <Image src={tccMobile} alt="tccMobile" />
            </div>
        </div>
    )
}

export default VectorCafe
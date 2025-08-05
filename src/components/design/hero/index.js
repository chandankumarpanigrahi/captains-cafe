import React from 'react'
import styles from "./style.module.css"
import Image from 'next/image'

import cupDesign from "../../../assets/images/cup_design.png"

const HeroSection = () => {
    return (
        <div className="container h-full flex flex-col md:flex-row items-center z-10 relative">
            <div className="w-full h-max md:w-1/2 my-auto animate__animated animate__slideInLeft">
                <div className="flex flex-col">
                    <h6 className="text-gray-300 font-bold text-2xl mb-4">MORE FLAVOR FOR LESS</h6>
                    <h1 className="mb-4">Taste The Differance</h1>
                    <p className='text-white font-light tracking-wide text-lg mb-5'>Savor the best food, crafted with care and passion, for the moments that matter most. Scottish Cafe, where every bite is unforgettable.</p>
                    <button className={`${styles.cta_button} w-min whitespace-nowrap border-0 text-white rounded-full py-1 px-4`}>Order Online</button>
                </div>
            </div>
            <div className="w-full h-full hidden md:w-1/2 md:block animate__animated animate__slideInRight">
                <div className={`${styles.hero_cup_design} relative flex justify-center h-full pt-20`}>
                    <Image className={`${styles.cup_design} absolute`} src={cupDesign} alt='Captains Cafe Brand Cup'/>
                    <div className={`${styles.cup_background} absolute`}></div>
                    <div className={`${styles.cup_circle} absolute`}></div>
                    <div className={`${styles.cup_dot_area} absolute`}>
                        <div className={`${styles.cup_dots} relative`}>
                            <div className={`${styles.cup_dot} ${styles.cup_dot_1} rounded-full absolute`}></div>
                            <div className={`${styles.cup_dot} ${styles.cup_dot_2} rounded-full absolute`}></div>
                            <div className={`${styles.cup_dot} ${styles.cup_dot_3} rounded-full absolute`}></div>
                            <div className={`${styles.cup_dot} ${styles.cup_dot_4} rounded-full absolute`}></div>
                            <div className={`${styles.cup_dot} ${styles.cup_dot_5} rounded-full absolute`}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
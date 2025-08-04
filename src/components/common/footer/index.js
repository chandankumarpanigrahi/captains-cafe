import React from 'react'
import styles from "./style.module.css"
import Image from 'next/image'
import logoLight from "../../../assets/images/logo_light.png"
import lightHouse from "../../../assets/images/footer_lighthouse.png"
import miniBoat from "../../../assets/images/footer_boat.png"
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiPeerlist } from "react-icons/si";

const Footer = () => {
    return (
        <div className={`${styles.footer} mt-20 w-full relative flex justify-center`}>
            <div className="container pt-36 pb-22">
                {/* Full Body */}
                <div className={`${styles.footer_body} flex flex-col lg:flex-row`}>

                    {/* Left Side */}
                    <div className={`${styles.footer_about} w-full lg:w-1/3 flex pr-0 md:pr-10 lg:pr-5 mb-8 lg:mb-0`}>
                        <div className="flex w-1/3">
                            <Image src={logoLight} width="100%" height={80} alt='Footer Logo' className='object-cover'/>
                        </div>
                        <div className="flex w-2/3 flex-col">
                            <h3 className='text-xl text-yellow-600 font-semibold'>The Captain&apos;s Cafe</h3>
                            <h6 className='text-white font-light mb-5'>Sail Into Flavors</h6>
                            <p className='text-white text-sm'>Savor the best food, crafted with care and passion, for the moments that matter most. Scottish Cafe, where every bite is unforgettable.</p>
                            <div className={`${styles.footer_social_media} flex flex-row gap-1`}>
                                <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                                <a href="#" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
                                <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                                <a href="#" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                                <a href="#" target="_blank" rel="noopener noreferrer"><SiPeerlist /></a>
                            </div>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className={`${styles.footer_links} rounded-tl-4xl rounded-br-4xl w-full lg:w-2/3 flex flex-row flex-wrap p-4`}>
                        <div className="w-full md:w-1/4">Hello</div>
                        <div className="w-full md:w-1/4">Hello</div>
                        <div className="w-full md:w-1/4">Hello</div>
                        <div className="w-full md:w-1/4">Hello</div>
                    </div>

                </div>
            </div>

            <Image className={styles.light_house_bg} src={lightHouse} alt='background Light House'/>
            <Image className={styles.mini_boat} height={80} src={miniBoat} alt='background Mini Boat'/>
        </div>
    )
}

export default Footer
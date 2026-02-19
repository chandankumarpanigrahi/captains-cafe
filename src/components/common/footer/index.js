"use client"
import React from 'react'
import styles from "./style.module.css"
import Image from 'next/image'
import logoLight from "../../../assets/images/logo_light.png"
import lightHouse from "../../../assets/images/footer_lighthouse.png"
import miniBoat from "../../../assets/images/footer_boat.png"
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import { IoGlobeOutline } from "react-icons/io5";
import Link from 'next/link'
import ScrollToTop from "react-scroll-to-top";
const socialMedia = [
    {
        icon: <IoLogoInstagram />,
        link: "https://www.instagram.com/thecaptainscafe.india",
        title: "Instagram"
    },
    {
        icon: <FaFacebookF />,
        link: "https://www.facebook.com/thecaptainscafe.india/",
        title: "Facebook"
    }
]


const Footer = () => {
    return (
        <div className={`${styles.footer} mt-20 w-full relative flex justify-center`}>
            <div className="container relative pt-36 sm:pb-22 pb-10">
                {/* Full Body */}
                <div className={`${styles.footer_body} flex flex-col lg:flex-row`}>

                    {/* Left Side */}
                    <div className={`${styles.footer_about} w-full lg:w-1/3 flex pr-0 pt-0 lg:pt-6 md:pr-10 lg:pr-5 mb-8 lg:mb-0`}>
                        <Link href="/" className="flex items-start w-1/3 pe-6">
                            <Image src={logoLight} width="100%" alt='Footer Logo' className='object-contain' />
                        </Link>
                        <div className="flex w-2/3 flex-col">
                            <h6 className='text-2xl footer-text-color font-semibold'>The Captain&apos;s Cafe</h6>
                            <div className='text-white font-light mb-5'>Sail Into Flavors</div>
                            <p className='text-white text-sm'>Savor the best food, crafted with care and passion, for the moments that matter most. Scottish Cafe, where every bite is unforgettable.</p>
                            <div className={`${styles.footer_social_media} flex flex-row gap-2 mt-3`}>
                                {socialMedia.map((item, index) => (
                                    <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" aria-label={item.title} title={item.title} className='p-2 text-white bg-amber-900 rounded-full hover:bg-amber-700'>{item.icon}</a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className={`${styles.footer_links} rounded-tl-4xl rounded-br-4xl w-full lg:w-2/3 flex flex-row flex-wrap px-10 py-6`}>
                        <div className="w-full md:w-2/9 mb-8 md:mb-0">
                            <h5 className='text-xl mb-3 footer-text-color font-semibold'>Company</h5>
                            <ul className='flex flex-col gap-1.5 text-white font-light '>
                                <li className='text-md '><Link href="/about">About</Link></li>
                                <li className='text-md '><Link href="/offers">Offers</Link></li>
                                <li className='text-md '><Link href="/gallery">Gallery</Link></li>
                                <li className='text-md '><Link href="/career">Career</Link></li>
                                <li className='text-md '><Link href="/contact">Contact Us</Link></li>
                            </ul>
                        </div>
                        <div className="w-full md:w-2/9 mb-8 md:mb-0">
                            <h5 className='text-xl mb-3 footer-text-color font-semibold'>Help</h5>
                            <ul className='flex flex-col gap-1.5 text-white font-light '>
                                <li className='text-md '><Link href="/menu">Menu</Link></li>
                                <li className='text-md '><Link href="/support">Support</Link></li>
                                <li className='text-md '><Link href="/terms-and-conditions">T&C</Link></li>
                                <li className='text-md '><Link href="/privacy-policy">Privacy Policy</Link></li>
                                <li className='text-md '><Link href="/faqs">FAQs</Link></li>
                            </ul>
                        </div>
                        <div className="w-full md:w-2/9 mb-8 md:mb-0">
                            <h5 className='text-xl mb-3 footer-text-color font-semibold'>Resources</h5>
                            <ul className='flex flex-col gap-1.5 text-white font-light '>
                                <li className='text-md '><Link href="/blogs">Blogs</Link></li>
                                <li className='text-md '><Link href="/testimonials">Testimonials</Link></li>
                                <li className='text-md '><Link href="/docs">Documentation</Link></li>
                            </ul>
                        </div>
                        <div className="w-full md:w-3/9 mb-5 md:mb-0">
                            <h5 className='text-xl mb-3 footer-text-color font-semibold'>Contact Us</h5>
                            <ul className='flex flex-col gap-1.5 text-white font-light '>
                                <li className='text-md flex gap-2 items-center'><MdCall className='text-blue-300' /><a href="#">+91 81447 74349</a></li>
                                <li className='text-md flex gap-2 items-center'><HiLocationMarker className='text-blue-300' /><a href="#">IRC Village, Bhubaneswar</a></li>
                                <li className='text-md pl-6'><a href="#">Saheed Nagar, Bhubaneswar</a></li>
                                <li className='text-md flex gap-2 items-center'><IoGlobeOutline className='text-blue-300' /><a href="#">thecaptainscafe.com</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

            <Image className={styles.light_house_bg} src={lightHouse} alt='background Light House' />
            <Image className={styles.mini_boat} height={80} src={miniBoat} alt='background Mini Boat' />
            <ScrollToTop smooth />
        </div>
    )
}

export default Footer
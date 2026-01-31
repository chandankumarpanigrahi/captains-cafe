"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import styles from "./style.module.css"

import CountUp from '@/components/ui/CountUp/page'
import aboutUsImage from "../../assets/images/pages/about/aboutUs.png"
import brandIdentityImage from "../../assets/images/pages/about/brandIdentity.png"
import QualityImage from "../../assets/images/pages/about/QualityImage.png"
import InnovationsImage from "../../assets/images/pages/about/InnovationsImage.png"
import SustainabilityImage from "../../assets/images/pages/about/SustainabilityImage.png"
import HospitalityImage from "../../assets/images/pages/about/HospitalityImage.png"
import PassionImage from "../../assets/images/pages/about/PassionImage.png"

import CardAnchor from "../../assets/images/cardAnchor.png"

import Ellipse1 from "../../assets/images/Ellipse_1.png"
import Ellipse2 from "../../assets/images/Ellipse_2.png"
import Ellipse3 from "../../assets/images/Ellipse_3.png"

import Image from 'next/image'
import { MdArrowOutward } from "react-icons/md";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Link from 'next/link'

const About = () => {
    const router = useRouter();

    const valuePoints = [
        {
            image: QualityImage,
            name: "Quality"
        },
        {
            image: InnovationsImage,
            name: "Innovations"
        },
        {
            image: SustainabilityImage,
            name: "Sustainability"
        },
        {
            image: HospitalityImage,
            name: "Hospitality"
        },
        {
            image: PassionImage,
            name: "Passion"
        },
    ]

    return (
        <div className='container py-10'>
            {/* <button className='bg-blue-700 text-lg w-full flex flex-col text-white px-8 py-3 rounded-full hover:bg-blue-900 cursor-pointer' onClick={() => router.push("/")}>Click Here</button> */}

            {/* About Us Cards */}
            <div className={`${styles.aboutUsCard} w-full flex flex-col lg:flex-row rounded-br-3xl rounded-tl-3xl overflow-hidden h-full bg-white dark:bg-amber-950 mb-12`}>
                <div className='w-full lg:w-4/7 relative z-3'>
                    <Image src={aboutUsImage} alt='About Us Cafe Image' className='w-full h-full object-cover rounded-br-3xl rounded-tl-3xl' />
                </div>
                <div className="w-full h-auto px-5 py-10 md:py-8 md:pr-12 md:pl-20 flex justify-center items-center relative">
                    <div className="h-auto w-full relative z-3">
                        <h1 className='text-2xl sm:text-3xl font-bold text-[#0B3F71] dark:text-white mb-3'>About Us</h1>
                        <p className='text-slate-600 dark:text-orange-100 text-md lg:text-lg mb-3'>Captain&apos;s Cafe is a nautical-themed café chain with multiple locations across Bhubaneswar, inspired by the spirit of the sea and global journeys. The cafés serve a thoughtfully curated range of café dishes and freshly baked goods, drawing flavours from across the world and presenting them in a warm, maritime setting.</p>
                        <p className='text-slate-600 dark:text-orange-100 text-md lg:text-lg mb-3'>Beyond its dine-in spaces, Captain&apos;s Cafe also operates a cloud bakery and provides catering services, extending the same quality, consistency, and flavour to homes, offices, and events throughout the city.</p>
                    </div>
                    <Image src={CardAnchor} alt='Anchor Card' className={`${styles.aboutAnchor} absolute z-1 opacity-10 dark:invert`} />
                    <Image src={Ellipse3} alt='About Left Ellipse' className={`${styles.about_ellipse_1} absolute z-1`} />
                    <Image src={Ellipse2} alt='Ellipse' className={`${styles.about_ellipse_2} absolute z-1`} />
                </div>
            </div>
            <div className={`${styles.brandCard} w-full flex flex-col-reverse lg:flex-row rounded-br-3xl rounded-tl-3xl overflow-hidden h-full bg-white dark:bg-amber-950 mb-12`}>
                <div className="w-full h-auto px-5 py-10 md:py-8 md:pr-20 md:pl-12 flex justify-center items-center relative">
                    <div className="h-auto w-full relative z-2">
                        <h1 className='text-2xl sm:text-3xl font-bold text-[#0B3F71] dark:text-white mb-3'>Brand Identity</h1>
                        <p className='text-slate-600 dark:text-orange-100 text-md lg:text-lg mb-3'>The Captain&apos;s Cafe is inspired by a maritime and sea-sailing theme, where every visit is a journey into a world of flavors. Drawing on the captain&apos;s spirit of exploration, we invite our guests to embark on a culinary voyage guided by  the adventurous spirit of the sea.</p>
                        <p className='text-slate-600 dark:text-orange-100 text-md lg:text-lg mb-3'>It symbolizes leadership, guidance, and discovery, which reflects our commitment to providing a bold and exciting dining experience.</p>
                    </div>
                    <Image src={CardAnchor} alt='Anchor Card' className={`${styles.brandAnchor} absolute z-1 opacity-10 dark:invert`} />
                    <Image src={Ellipse2} alt='About Left Ellipse' className={`${styles.brand_ellipse_1} absolute z-1`} />
                    <Image src={Ellipse1} alt='Ellipse' className={`${styles.brand_ellipse_2} absolute z-1`} />
                </div>
                <div className='w-full lg:w-4/7 relative z-3'>
                    <Image src={brandIdentityImage} alt='Brand Identity Cafe Image' className='w-full h-full object-cover object-right rounded-br-3xl rounded-tl-3xl ' />
                </div>
            </div>



            {/* Mission / Vision Design */}
            <div className="flex flex-col md:flex-row w-full justify-center items-start md:px-6 lg:px-40 mb-18">
                <div className='h-auto px-3 md:px-8 w-full lg:w-11/12 mb-8 md:mb-0 md:border-r-2 md:border-dashed'>
                    <h1 className='text-2xl sm:text-3xl font-bold text-[#0B3F71] dark:text-blue-100 mb-3 text-center md:text-right'>Our Mission</h1>
                    <p className='text-[#103D68] dark:text-blue-300 text-md md:text-lg text-center md:text-right'>At The Captain&apos;s Café, our mission is to take you on a culinary voyage around the globe, offering diverse and delectable dishes all under one roof. With a unique nautical flair and a passion for delivering exceptional flavors,  we aim to create an immersive dining experience that celebrates the rich and diverse culinary heritage of the world.</p>
                </div>
                <div className='h-auto px-3 md:px-8 w-full lg:w-11/12'>
                    <h1 className='text-2xl sm:text-3xl font-bold text-[#0B3F71] dark:text-blue-100 mb-3 text-center md:text-left'>Our Vision</h1>
                    <p className='text-[#103D68] dark:text-blue-300 text-md md:text-lg text-center md:text-left'>Our vision is to be the premier destination for food enthusiasts seeking a maritime adventure through international cuisine. We strive to create a café where every meal is a journey, and every visit is an opportunity to explore exciting, bold flavors. At The Captain&apos;s Café, we invite you to embark on a flavorful voyage of discovery with us.</p>
                </div>
            </div>



            {/* Our Values */}
            <div className="flex flex-col w-full justify-center items-center p-0 md:px-6 lg:px-40 mb-18">
                <div className='px-2 md:px-6 w-full md:w-10/12 mb-6'>
                    <h1 className='text-2xl sm:text-3xl font-bold text-[#713711] dark:text-orange-100 mb-3 text-center'>Our Values</h1>
                    <p className='text-[#5D3820] dark:text-orange-200 text-md: md:text-lg text-center'>At <strong>The Captain&apos;s Café,</strong>we are guided by a commitment to quality, innovation, and sustainability. We strive to craft exceptional dishes using the finest ingredients while embracing creativity to deliver unique global flavors. Our warm hospitality ensures every guest feels welcome, and our passion for food drives us to create meaningful dining experiences that leave a lasting impression.</p>
                </div>
                <div className="flex gap-4 flex-row justify-center flex-wrap mx-auto w-fit">
                    {valuePoints.map((items, index) => (
                        <div key={index.id} className="flex flex-col items-center px-6">
                            <Image src={items.image} height={80} width={80} alt='Quality Image Icon' />
                            <h2 className='text-xl sm:text-2xl font-bold text-[#713711] dark:text-blue-100 mt-2 -center'>{items.name}</h2>
                        </div>
                    ))}
                </div>
            </div>

            {/* Video Testimonials */}
            <div className="flex flex-col w-full justify-center items-center mb-18">
                <div className='w-full mb-6 px-4 lg:px-40 '>
                    <h1 className='text-2xl sm:text-4xl font-bold text-[#12406D] dark:text-white mb-3 text-center'>Over <CountUp
                        from={678}
                        to={1000}
                        separator=","
                        direction="up"
                        duration={1}
                    />+ People Trust Us</h1>
                    <p className='text-gray-700 dark:text-gray-300 text-md lg:text-lg text-center w-full px-0 md:px-16 lg:px-36'>Clarity gives you the blocks & components you need to create a truly professional website, landing page or admin panel for your SaaS.</p>
                </div>
                <div className="w-full">
                    <Carousel opts={{ align: "start", }} className="w-full h-full">
                        <CarouselContent>
                            <CarouselItem className="basis-1/1 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 p-4">
                                <div className={`${styles.videoCard_design} mx-auto relative rounded-lg overflow-hidden w-[260px]`}>
                                    <video
                                        controls
                                        preload="none"
                                        className="h-full w-full"
                                        poster="/videos/video_1_thumbnail.png">
                                        <source src="/videos/video_1.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                    <div className={styles.hoverArea}>
                                        <div className="absolute z-2 bottom-0 p-4">
                                            <h4 className="text-left text-white text-xl font-semibold">Sameer Dash</h4>
                                            <p className="text-left text-gray-200 text-md font-light">3rd Jan 2025</p>
                                        </div>
                                        <div className={`${styles.videoCard_overlay} absolute z-1 inset-0 rounded-md`}></div>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="basis-1/1 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 p-4">
                                <div className={`${styles.videoCard_design} mx-auto relative rounded-lg overflow-hidden w-[260px]`}>
                                    <video
                                        controls
                                        preload="none"
                                        className="h-full w-full"
                                        poster="/videos/video_2_thumbnail.png">
                                        <source src="/videos/video_2.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                    <div className={styles.hoverArea}>
                                        <div className="absolute z-2 bottom-0 p-4">
                                            <h4 className="text-left text-white text-xl font-semibold">Sameer Dash</h4>
                                            <p className="text-left text-gray-200 text-md font-light">3rd Jan 2025</p>
                                        </div>
                                        <div className={`${styles.videoCard_overlay} absolute z-1 inset-0 rounded-md`}></div>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="basis-1/1 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 p-4">
                                <div className={`${styles.videoCard_design} mx-auto w-[240px] relative rounded-lg overflow-hidden`}>
                                    <video
                                        controls
                                        preload="none"
                                        className="h-full w-full"
                                        poster="/videos/video_3_thumbnail.png">
                                        <source src="/videos/video_3.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                    <div className={styles.hoverArea}>
                                        <div className="absolute z-2 bottom-0 p-4">
                                            <h4 className="text-left text-white text-xl font-semibold">Sameer Dash</h4>
                                            <p className="text-left text-gray-200 text-md font-light">3rd Jan 2025</p>
                                        </div>
                                        <div className={`${styles.videoCard_overlay} absolute z-1 inset-0 rounded-md`}></div>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="basis-1/1 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 p-4">
                                <div className={`${styles.videoCard_design} mx-auto w-[240px] relative rounded-lg overflow-hidden`}>
                                    <video
                                        controls
                                        preload="none"
                                        className="h-full w-full"
                                        poster="/videos/video_3_thumbnail.png">
                                        <source src="/videos/video_3.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                    <div className={styles.hoverArea}>
                                        <div className="absolute z-2 bottom-0 p-4">
                                            <h4 className="text-left text-white text-xl font-semibold">Sameer Dash</h4>
                                            <p className="text-left text-gray-200 text-md font-light">3rd Jan 2025</p>
                                        </div>
                                        <div className={`${styles.videoCard_overlay} absolute z-1 inset-0 rounded-md`}></div>
                                    </div>
                                </div>
                            </CarouselItem>
                        </CarouselContent>
                        {/* <CarouselPrevious className={`${styles.left_arrow} border-0 bg-transparent`} />
                        <CarouselNext className={`${styles.right_arrow} border-0 bg-transparent`} /> */}
                    </Carousel>
                </div>
                <Link className="mt-5 text-center flex justify-center text-amber-900 dark:text-gray-200 w-full" href="# ">See all reviews by our customers<MdArrowOutward className='ps-2' size={26} /></Link>
            </div>
        </div>
    )
}

export default About
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
import Image from 'next/image'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

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
            <div className='w-full flex flex-col lg:flex-row rounded-br-3xl rounded-tl-3xl overflow-hidden h-full bg-white drop-shadow-xl mb-12'>
                <Image src={aboutUsImage} alt='About Us Cafe Image' className='w-4/7 h-80 object-cover rounded-br-3xl rounded-tl-3xl' />
                <div className="w-full h-auto py-8 pr-12 pl-20 flex justify-center items-center">
                    <div className="h-auto w-full">
                        <h1 className='text-2xl sm:text-3xl font-bold text-[#0B3F71] mb-3'>About Us</h1>
                        <p className='text-slate-600 text-lg mb-3'>The Captain&apos;s Café, with multiple locations in Bhubaneswar where every meal is a journey and every visit an opportunity to sail into exciting flavors.</p>
                        <p className='text-slate-600 text-lg mb-3'>Our catering/bakery division, where we provide healthy and hygienic meals to the students of the School of Maritime Studies (SOMS) at Centurion University, ensuring a nutritious dining experience for maritime professionals in training.</p>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-col lg:flex-row rounded-br-3xl rounded-tl-3xl overflow-hidden h-full bg-white drop-shadow-xl mb-16'>
                <div className="w-full h-auto py-8 pr-20 pl-12 flex justify-center items-center">
                    <div className="h-auto w-full">
                        <h1 className='text-2xl sm:text-3xl font-bold text-[#0B3F71] mb-3'>Brand Identity</h1>
                        <p className='text-slate-600 text-lg mb-3'>The Captain&apos;s Cafe is inspired by a maritime and sea-sailing theme, where every visit is a journey into a world of flavors. Drawing on the captain&apos;s spirit of exploration, we invite our guests to embark on a culinary voyage guided by  the adventurous spirit of the sea.</p>
                        <p className='text-slate-600 text-lg mb-3'>It symbolizes leadership, guidance, and discovery, which reflects our commitment to providing a bold and exciting dining experience.</p>
                    </div>
                </div>
                <Image src={brandIdentityImage} alt='Brand Identity Cafe Image' className='w-4/7 h-80 object-cover object-right rounded-br-3xl rounded-tl-3xl' />
            </div>



            {/* Mission / Vision Design */}
            <div className="flex w-full justify-center items-center px-40 mb-18">
                <div className='h-auto px-8 w-11/12 border-r-2 border-dashed'>
                    <h1 className='text-2xl sm:text-3xl font-bold text-[#0B3F71] mb-3 text-right'>Our Mission</h1>
                    <p className='text-[#103D68] text-lg text-right'>At The Captain&apos;s Café, our mission is to take you on a culinary voyage around the globe, offering diverse and delectable dishes all under one roof. With a unique nautical flair and a passion for delivering exceptional flavors,  we aim to create an immersive dining experience that celebrates the rich and diverse culinary heritage of the world.</p>
                </div>
                <div className='h-auto px-8 w-11/12'>
                    <h1 className='text-2xl sm:text-3xl font-bold text-[#0B3F71] mb-3 text-left'>Our Vision</h1>
                    <p className='text-[#103D68] text-lg text-left'>Our vision is to be the premier destination for food enthusiasts seeking a maritime adventure through international cuisine. We strive to create a café where every meal is a journey, and every visit is an opportunity to explore exciting, bold flavors. At The Captain&apos;s Café, we invite you to embark on a flavorful voyage of discovery with us.</p>
                </div>
            </div>



            {/* Our Values */}
            <div className="flex flex-col w-full justify-center items-center px-40 mb-18">
                <div className='px-6 w-10/12 mb-6'>
                    <h1 className='text-2xl sm:text-3xl font-bold text-[#713711] mb-3 text-center'>Our Values</h1>
                    <p className='text-[#5D3820] text-lg text-center'>At <strong>The Captain&apos;s Café,</strong>we are guided by a commitment to quality, innovation, and sustainability. We strive to craft exceptional dishes using the finest ingredients while embracing creativity to deliver unique global flavors. Our warm hospitality ensures every guest feels welcome, and our passion for food drives us to create meaningful dining experiences that leave a lasting impression.</p>
                </div>
                <div className="flex gap-4 flex-row flex-wrap mx-auto w-fit">
                    {valuePoints.map((items, index) => (
                        <div key={index.id} className="flex flex-col items-center px-6">
                            <Image src={items.image} height={80} width={80} alt='Quality Image Icon' />
                            <h2 className='text-xl sm:text-2xl font-bold text-[#713711] mt-2 -center'>{items.name}</h2>
                        </div>
                    ))}
                </div>
            </div>

            {/* Video Testimonials */}
            <div className="flex flex-col w-full justify-center items-center px-40 mb-18">
                <div className='w-full mb-6'>
                    <h1 className='text-2xl sm:text-4xl font-bold text-[#12406D] mb-3 text-center'>Over <CountUp
                        from={678}
                        to={1000}
                        separator=","
                        direction="up"
                        duration={1}
                    />+ People Trust Us</h1>
                    <p className='text-gray-700 text-lg text-center w-full px-36'>Clarity gives you the blocks & components you need to create a truly professional website, landing page or admin panel for your SaaS.</p>
                </div>
                <div className="w-full hidden">
                    <Carousel opts={{ align: "start", }} className="w-full h-full">
                    <CarouselContent>
                         <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <div className={`${styles.card_design} p-4`}>
                                <Image src={PassionImage} alt='Image' className='rounded-full p-2 mb-3' />
                                <div className="flex flex-col gap-2.5 mb-3 items-center">
                                    <h4 className='text-center color-primary text-3xl font-semibold'>Khopra Patties</h4>
                                    <p className='text-center color-secondary text-2xl w-6/10 font-normal'>Crispy golden patties with a sweet coconut filling.</p>
                                </div>
                            </div>
                        </CarouselItem>
                        {/* {trendyItems.map((item, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <div className={`${styles.card_design} p-2 md:p-4 flex flex-col items-center`}>
                                    <div className={`${styles.image_area}`}>
                                        <Image src={item.image} alt='Image' className={`${styles.image_area} rounded-full p-2 mb-3`}/>
                                    </div>
                                    <div className="flex flex-col gap-2.5 mb-3 items-center">
                                        <h4 className='text-center color-primary text-2xl xl:text-3xl font-semibold'>{item.name}</h4>
                                        <p className='text-center color-secondary text-lg lg:text-xl w-8/10 font-normal'>{item.description}</p>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))} */}
                    </CarouselContent>
                    <CarouselPrevious className={`${styles.left_arrow} border-0 bg-transparent`} />
                    <CarouselNext className={`${styles.right_arrow} border-0 bg-transparent`}  />
                </Carousel>
                </div>
            </div>


        </div>
    )
}

export default About
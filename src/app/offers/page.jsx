"use client"
import React from 'react'
import styles from "./style.module.css"
import { Card } from "@/components/ui/card"
import Image from 'next/image'
import SubBanner from '@/components/common/sub banner'

// Images
import offer1 from "../../assets/images/pages/offers/offer1.png"
import offer2 from "../../assets/images/pages/offers/offer2.jpg"
import offer3 from "../../assets/images/pages/offers/offer3.jpg"

import ccLogo from "../../assets/images/logo.png"
import zomatoLogo from "../../assets/images/zomato logo.png"

// Icons
import { LuExpand } from "react-icons/lu";
import { PiShareFat } from "react-icons/pi";
import Link from 'next/link'


const Offers = () => {

    // All Card Data
    const offersCard = [
        {
            offerImage: offer1,
            offerName: "FOODIE FRIDAY (Flat 50% Off)",
            offerLogo: ccLogo,
            tag: "FOODIE",
            tagColor: "bg-blue-800",
            desc: "Every Friday (T&C Apply)",
            linkPath: "/offers/foodie-friday"
        },
        {
            offerImage: offer2,
            offerName: "Buy 2 and Get 1 Coffee Free",
            offerLogo: ccLogo,
            tag: "BOGO",
            tagColor: "bg-teal-600",
            desc: "Still Stock Lasts (T&C Apply)",
            linkPath: "/offers/#"
        },
        {
            offerImage: offer3,
            offerName: "Samosa Day Special Samosa Chat",
            offerLogo: ccLogo,
            tag: "SPECIAL",
            tagColor: "bg-rose-800",
            desc: "Limited Time (T&C Apply)",
            linkPath: "/offers/#"
        },
        {
            offerImage: offer3,
            offerName: "upto 80% off on First Order on Zomato",
            offerLogo: zomatoLogo,
            tag: "ZOMATO",
            tagColor: "bg-red-700",
            desc: "New User Only (T&C Apply)",
            linkPath: "/offers/#"
        },
    ]
    return (
        <>
            <SubBanner
                title="Our Offers"
                breadcrumbItems={[
                    // { label: "Company", href: "/company" },
                    { label: "All Our Offers" } // No href = current page
                ]}
            />
            <div className='container py-10'>

                {/* Heading and Description */}
                <div className="flex flex-col px-0 md:px-20 lg:px-80 w-full mb-16">
                    <h1 className='text-[#0E467D] dark:text-white text-3xl md:text-4xl font-bold mb-3 text-center'>Grab The Offers</h1>
                    <p className='text-[#374F67] dark:text-gray-300 text-md md:text-lg text-center'>Don't miss out on our latest deals and discounts! Here are some of the exciting offers we have just for you.</p>
                </div>

                {/* Cards */}
                <div className="w-full gap-x-1 gap-y-8 flex flex-wrap flex-row justify-evenly">
                    {offersCard.map((value, index) =>
                        <Card className={`${styles.card_top_area} w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-0 overflow-hidden gap-0 rounded-xl h-fit`} key={index}>
                            <div className='relative w-full h-[180px]'>
                                <Image src={value.offerImage} alt='About Us Cafe Image' className='w-full h-full object-cover' />
                                <div className={`${value.tagColor} text-md px-4 rounded-tl-lg py-1 uppercase absolute z-5 bottom-0 right-0 text-white`}>{value.tag}</div>
                                <div className={`${styles.overlay_design} z-2 absolute inset-0 flex flex-row items-center justify-center h-full w-full`}>
                                    <Link href={value.linkPath} className='hover:scale-125 transition-all ease-in-out duration-200'>
                                        <LuExpand size={60} color='#fff' />
                                    </Link>
                                    <Link href="#" className='hover:scale-125 transition-all ease-in-out duration-200 hidden'>
                                        <PiShareFat size={60} color='#fff' />
                                    </Link>
                                </div>
                            </div>
                            <div className='relative z-3 bg-white dark:bg-gray-200 flex flex-col items-center justify-center gap-2 py-4 px-12'>
                                <h4 className='text-[20px] font-semibold text-center text-black'>{value.offerName}</h4>
                                <Image src={value.offerLogo} alt='Captains Cafe Logo' width={50} className='rounded-sm' />
                                <small className='text-center text-gray-400 text-[10px]'>{value.desc}</small>
                            </div>
                        </Card>
                    )}
                </div>
            </div>
        </>
    )
}

export default Offers
"use client"
import React from 'react'
import styles from "./style.module.css"
import { Card } from "@/components/ui/card"
import Image from 'next/image'
import aboutUsImage from "../../assets/images/pages/about/aboutUs.png"
const Offers = () => {
    return (
        <div className='container py-10'>

            {/* Heading and Description */}
            <div className="flex flex-col px-80 w-full mb-16">
                <h1 className='color-primary text-4xl font-bold mb-3 text-center'>Grab The Offers</h1>
                <p className='text-[#374F67] text-md: md:text-lg text-center'>Don't miss out on our latest deals and discounts! Here are some of the exciting offers we have just for you.</p>
            </div>

            {/* Cards */}
            <div className="w-full flex flex-wrap flex-row justify-evenly">
                <Card className='w-1/4 p-0 overflow-hidden'>
                    <div className={`${styles.card_top_area} relative w-full h-[220px]`}>
                        <Image src={aboutUsImage} alt='About Us Cafe Image' className='w-full h-full object-cover' />
                        <div className="text-md px-4 rounded-tl-lg py-1 uppercase bg-[#2819b2] absolute z-2 bottom-0 right-0 text-white">BOGO</div>
                    </div>

                </Card>
            </div>
        </div>
    )
}

export default Offers

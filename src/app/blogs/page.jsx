"use client"
import React from 'react'
import styles from "./style.module.css"
import { Card } from "@/components/ui/card"
import Image from 'next/image'
import Link from 'next/link'
import SubBanner from '@/components/common/sub banner'

// Images
import blog1 from "../../assets/images/pages/blogs/blog1.png"

const Offers = () => {

    return (
        <>
            <SubBanner
                title="Our Blogs"
                breadcrumbItems={[
                    // { label: "Company", href: "/company" },
                    { label: "Blogs" } // No href = current page
                ]}
            />
            <div className='container py-10'>

                {/* Heading and Description */}
                <div className="flex flex-col px-0 md:px-20 lg:px-80 w-full mb-16">
                    <h1 className='color-primary text-3xl md:text-4xl font-bold mb-3 text-center'>All Our Blogs</h1>
                    <p className='text-[#374F67] text-md md:text-lg text-center'>Here&apos;s all our blogs</p>
                </div>

                {/* Cards */}
                <div className="w-full gap-x-1 gap-y-8 flex flex-wrap flex-row justify-evenly">

                    <Card className={`${styles.card_top_area} w-1/4 p-0 overflow-hidden gap-0 rounded-xl`}>
                        <div className='relative w-full h-[200px]'>
                            <Image src={blog1} alt='About Us Cafe Image' className='w-full h-full object-cover' />
                        </div>
                        <div className='relative z-3 bg-white flex flex-col items-center justify-center py-3 px-4'>
                            <small className='text-left w-full text-[#316AA1] text-[12px] font-semibold mb-1'>16 December 2024</small>
                            <div className="flex w-full flex-start">
                                <h4 className='text-[#0B3F71] font-semibold text-left text-xl'>Celebrating Harry Potters Week</h4>
                            </div>
                        </div>
                    </Card>

                </div>
            </div>
        </>
    )
}

export default Offers

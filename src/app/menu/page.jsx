"use client"

import React from 'react'
import CountUp from '@/components/ui/CountUp/page'
import Image from 'next/image'

import cupImage from "../../assets/images/pages/menu/cup.png"
import noodleFork from "../../assets/images/pages/menu/noodleFork.png"

const ContactUs = () => {
    return (
        <>
            <div className='container py-10'>
                {/* Top Part */}
                <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:w-2/7 pr-0 lg:pr-3">
                        <div className="flex flex-col gap-4 w-full">
                            <div className='m-0 lg:mt-16'>
                                <p className='text-gray-600 text-lg mb-1'>More Than
                                    <CountUp
                                        from={0}
                                        to={5000}
                                        separator=","
                                        direction="up"
                                        duration={2}
                                        className='text-3xl ml-2 text-blue-900 font-semibold'
                                    />
                                </p>
                                <p className='text-center text-sm font-semibold text-blue-950'>Positive and Impressive Reviews</p>
                            </div>
                            <hr />
                            <div className='relative h-full w-full'>
                                <Image src={cupImage} alt='cup Image' className='w-[120px]  absolute bottom-0 left-0' />
                                <p className='text-right text-sm text-blue-900 w-3/5 float-end'>Indulge your senses with our diverse menu, offering a unique blend of classic favorites and innovative creations. Discover the perfect cup of coffee or the ideal dish to complement your day at The Captain&apos;s Cafe.</p>
                            </div>
                            <hr />
                        </div>
                    </div>
                    <div className="w-full lg:w-3/7">
                        <div className="w-full h-10 bg-red-100"></div>
                    </div>
                    <div className="w-full lg:w-2/7 pl-3">
                        <div className="w-full flex">
                            <div className='bg-gradient-to-r from-orange-900 to-orange-950 h-20 w-9/10 pl-3 ml-auto rounded-tl-full rounded-bl-full relative'>
                                <Image src={noodleFork} alt='cup Image' className='w-[80px]  absolute -top-3 right-2' />
                                <p>UPTO 50%</p>
                                <h1>OFF <sup>*</sup></h1>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default ContactUs

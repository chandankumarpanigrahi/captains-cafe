"use client"

import React from 'react'
import CountUp from '@/components/ui/CountUp/page'
import Image from 'next/image'

import { Avatar, AvatarImage } from "@/components/ui/avatar"

// Images
import cupImage from "../../assets/images/pages/menu/cup.png"
import noodleFork from "../../assets/images/pages/menu/noodleFork.png"
import trending1 from "../../assets/images/pages/menu/trending1.png"
import trending2 from "../../assets/images/pages/menu/trending2.png"

// icons
import { MdArrowOutward } from "react-icons/md";
import { FaCircle } from "react-icons/fa";
import { IoTriangle } from "react-icons/io5";

const ContactUs = () => {
    return (
        <>
            <div className='container py-10'>
                {/* Top Part */}
                <div className="flex flex-col lg:flex-row">

                    {/* Left */}
                    <div className="w-full lg:w-2/7 pr-0 lg:pr-3">
                        <div className="flex flex-col gap-4 w-full">
                            <div className='m-0 lg:mt-8'>
                                <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale mb-2">
                                    <Avatar className="border-2 border-white">
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                    </Avatar>
                                    <Avatar className="border-2 border-white">
                                        <AvatarImage src="https://github.com/leerob.png" alt="@leerob" />
                                    </Avatar>
                                    <Avatar className="border-2 border-white">
                                        <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
                                    </Avatar>
                                    <Avatar className="flex justify-center items-center bg-blue-100 text-blue-800 font-semibold border-2 border-white">
                                        +5k
                                    </Avatar>
                                </div>
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
                                <p className='text-right text-[15px] text-blue-900 w-3/5 float-end'>Indulge your senses with our diverse menu, offering a unique blend of classic favorites and innovative creations. Discover the perfect cup of coffee or the ideal dish to complement your day at The Captain&apos;s Cafe.</p>
                            </div>
                            <hr />
                        </div>
                    </div>

                    {/* Middle */}
                    <div className="w-full lg:w-3/7">
                        <div className="w-full h-10 bg-red-100"></div>
                    </div>

                    {/* Right */}
                    <div className="w-full lg:w-2/7 pl-3">
                        <div className="w-full flex mb-8">
                            <div className='bg-gradient-to-r from-orange-900 to-orange-950 h-fit w-full pl-8 py-2 ml-auto rounded-tl-full rounded-bl-full relative cursor-default'>
                                <Image src={noodleFork} alt='cup Image' className='w-[80px]  absolute -top-3 right-0' />
                                <div className="flex flex-row items-end">
                                    <div className='flex flex-col'>
                                        <p className='text-amber-400 text-lg font-semibold'>UPTO 50%</p>
                                        <h1 className='text-white font-semibold text-5xl flex gap-1'>OFF <sup className='text-sm pt-1'>*</sup></h1>
                                        <h5 className='text-white text-md uppercase font-light opacity-50'>AVAIL SOON</h5>
                                    </div>
                                    <MdArrowOutward size={60} className='text-white opacity-40' />
                                </div>
                            </div>
                        </div>

                        {/* Best  Seller Items */}
                        <div className="flex w-full flex-col gap-3 my-4">
                            <div className="flex flex-row">
                                <Image src={trending1} alt='Trending Item 1' width={80} />
                                <div className="flex-flex-col pl-3 w-full">
                                    <small className='text-gray-600'>Bestseller Dish</small>
                                    <div className="flex items-center gap-2 w-full">
                                        <h1 className='text-xl font-semibold text-blue-900'>Khopra Patties</h1>
                                        <div className="border-2 border-green-600 text-green-600 size-4 flex justify-center items-center"><FaCircle size={10} /></div>
                                    </div>
                                    <h6 className='text-amber-600 font-semibold'>₹ 129.00</h6>
                                </div>
                            </div>
                            <div className="flex flex-row">
                                <Image src={trending2} alt='Trending Item 1' width={80} />
                                <div className="flex-flex-col pl-3 w-full">
                                    <small className='text-gray-600'>Bestseller Dish</small>
                                    <div className="flex items-center gap-2 w-full">
                                        <h1 className='text-xl font-semibold text-blue-900'>Cheese Noodle</h1>
                                        <div className="border-2 border-red-600 text-red-600 size-4 flex justify-center items-center"><IoTriangle size={10} /></div>
                                    </div>
                                    <h6 className='text-amber-600 font-semibold'>₹ 199.00</h6>
                                </div>
                            </div>
                        </div>

                        <hr />
                        <div className="flex justify-center gap-2 my-3 ">
                            <p className="uppercase text-blue-900 font-medium">VIEW FULL MENU</p>
                            <MdArrowOutward size={23} className='text-blue-900' />
                        </div>
                        <hr />
                    </div>
                </div>

            </div>

        </>
    )
}

export default ContactUs

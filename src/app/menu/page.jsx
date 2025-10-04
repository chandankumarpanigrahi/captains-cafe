"use client"

import React from 'react'
import CountUp from '@/components/ui/CountUp/page'
import Image from 'next/image'
import styles from "./style.module.css"

import { Avatar, AvatarImage } from "@/components/ui/avatar"

// Images
import cupImage from "../../assets/images/pages/menu/cup.png"
import noodleFork from "../../assets/images/pages/menu/noodleFork.png"
import trending1 from "../../assets/images/pages/menu/trending1.png"
import trending2 from "../../assets/images/pages/menu/trending2.png"
import cafe from "../../assets/images/pages/menu/cafe.jpg"
import plate from "../../assets/images/pages/menu/plate.png"
import leaf from "../../assets/images/pages/menu/leaf.png"
import middleAbstracts from "../../assets/images/pages/menu/middleAbstracts.png"
import testeText from "../../assets/images/pages/menu/testeText.png"
import noodleMenu from "../../assets/images/pages/menu/noodleMenu.png"

// icons
import { MdArrowOutward } from "react-icons/md";
import { FaCircle } from "react-icons/fa";
import { IoTriangle } from "react-icons/io5";

const ContactUs = () => {
    return (
        <>
            <div className='container py-10'>
                {/* Top Part */}
                <div className="flex flex-col lg:flex-row relative pb-16">

                    {/* Left */}
                    <div className="w-full lg:w-2/7 mb-8 lg:mb-0 pr-0 lg:pr-3">
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
                    <div className="w-full lg:w-3/7 mb-4">
                        <div className="w-full flex justify-center items-center mt-16 relative">
                            <Image src={cafe} alt='Cafe Image' className='w-[280px] lg:w-[360px] h-[400px] lg:h-[500px] object-cover rounded-full p-4 lg:p-8 border-4 border-[#0B3F71] lg:border-b-transparent' />
                            <div className='bg-[#12406D] size-48 absolute -top-16 rounded-full p-4 cursor-default group'>
                                <div className='w-full h-full bg-[#102E4B] rounded-full border-2 border-white flex justify-center items-center relative'>
                                    <p className='text-white text-left text-3xl scale-85 w-2/3 group-hover:scale-90 transition-all duration-400 ease-in-out'>Sail Into Flavors</p>
                                    <MdArrowOutward size={44} className='text-white absolute right-5 top-10 opacity-20 group-hover:scale-110 transition-all duration-100 ease-in-out' />
                                </div>
                            </div>
                            <div className='size-56 absolute bottom-10 lg:bottom-14 scale-100 lg:scale-125'>
                                <div className="w-full h-full relative">
                                    <Image src={plate} alt='Plate Image' className={`${styles.plate} absolute inset-0 z-3`} />
                                    <Image src={leaf} alt='Plate Image' className={`${styles.leaf} absolute inset-0 z-2 scale-115`} />
                                    <div className='w-full h-full border-3 border-white rounded-full scale-90'></div>
                                </div>
                            </div>
                            <Image src={testeText} alt='Taste the difference Text' className='absolute -bottom-12 hidden lg:block scale-50' />
                        </div>
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
                    <Image src={middleAbstracts} alt='Spice Abstracts' className='absolute -bottom-20 scale-90 hidden lg:block' />
                </div>
                <div className="flex justify-center w-full">
                    <Image src={noodleMenu} alt="Menu Text" width={220} />
                </div>




            </div>

        </>
    )
}

export default ContactUs

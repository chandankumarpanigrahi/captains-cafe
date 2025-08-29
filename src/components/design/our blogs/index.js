import React from 'react'
import styles from "./style.module.css"
import Image from 'next/image'
import CafeImage from "../../../assets/images/services/cafe.png"
import { FiArrowUpRight } from "react-icons/fi";
import Link from 'next/link';

const Blogs = () => {
    return (
        <div className='container animate__animated animate__fadeInUp mb-8 md:mb-22'>
            <div className="flex flex-col lg:flex-row items-center">
                <div className={`${styles.delight_text} w-full flex flex-col pl-0 pr-0 md:pl-16 md:pr-12`}>
                    <h1 className='color-primary text-4xl font-bold mb-10 text-center'>Our Blogs</h1>
                    <div className="flex flex-col lg:flex-row w-full h-fit">
                        <div className="w-full lg:w-1/2 h-full mb-4 lg:mb-0 p-0 lg:pr-2">
                            <div className="rounded-md bg-white h-full drop-shadow-md overflow-hidden flex flex-col md:flex-row lg:flex-col">
                                <Image src={CafeImage} alt="blog 1 Image" className='object-cover h-40 md:h-auto lg:h-60 w-full md:w-2/5 lg:w-full' />
                                <div className="flex flex-col px-6 py-4">
                                    <p className='text-sm font-semibold text-[#316AA1] mb-2'>16 May 2025</p>
                                    <div className="flex flex-row mb-2">
                                        <h1 className='text-xl font-semibold text-[#0B3F71]'>Celebrating Harry Potters Week</h1>
                                        <Link href="#" className='ms-auto hover:scale-150 transition-transform'>
                                            <FiArrowUpRight className='text-[#0B3F71] text-2xl' />
                                        </Link>
                                    </div>
                                    <p className='text-gray-500 text-sm font-normal mb-5 md:line-clamp-2'>How do you create compelling presentations that wow your colleagues and impress your managers?</p>
                                    <div className="flex flex-row gap-2 flex-wrap">
                                        <div className="py-1 px-3 rounded-4xl bg-[#E9F4FF] text-[11px] text-[#1d558a]">Harry Potter&apos;s Week</div>
                                        <div className="py-1 px-3 rounded-4xl bg-[#E9F4FF] text-[11px] text-[#1d558a]">Celebrations</div>
                                        <div className="py-1 px-3 rounded-4xl bg-[#E9F4FF] text-[11px] text-[#1d558a]">Happy Weeks</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 p-0 lg:pl-2 h-auto flex flex-col gap-3">
                            <div className="rounded-md bg-white h-1/2 drop-shadow-md overflow-hidden flex flex-col md:flex-row">
                                <Image src={CafeImage} altr="blog 1 Image" className='h-auto object-cover w-full md:w-2/5'/>
                                <div className="flex flex-col px-6 py-4 w-full md:w-3/5">
                                    <p className='text-sm font-semibold text-[#316AA1] mb-2'>19 Jun 2024</p>
                                    <div className="flex flex-row mb-2">
                                        <h1 className='text-xl font-semibold text-[#0B3F71] md:line-clamp-1'>Migrating to Linear 101</h1>
                                        <Link href="#" className='ms-auto hover:scale-150 transition-transform'>
                                            <FiArrowUpRight className='text-[#0B3F71] text-2xl' />
                                        </Link>
                                    </div>
                                    <p className='text-gray-500 text-sm font-normal mb-5 md:line-clamp-3'>Linear helps streamline software projects, sprints, tasks, and bug tracking. Here&apos;s how to get</p>
                                    <div className="flex flex-row gap-2">
                                        <div className="py-1 px-3 rounded-4xl bg-[#E9F4FF] text-[11px] text-[#1d558a]">Design</div>
                                        <div className="py-1 px-3 rounded-4xl bg-[#E9F4FF] text-[11px] text-[#1d558a]">Research</div>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-md bg-white h-1/2 drop-shadow-md overflow-hidden flex flex-col md:flex-row">
                                <Image src={CafeImage} altr="blog 1 Image" className='h-auto object-cover w-full md:w-2/5'/>
                                <div className="flex flex-col px-6 py-4 w-full md:w-3/5">
                                    <p className='text-sm font-semibold text-[#316AA1] mb-2'>18 May 2024</p>
                                    <div className="flex flex-row mb-2">
                                        <h1 className='text-xl font-semibold text-[#0B3F71] md:line-clamp-1'>Building your API Stack</h1>
                                        <Link href="#" className='ms-auto hover:scale-150 transition-transform'>
                                            <FiArrowUpRight className='text-[#0B3F71] text-2xl' />
                                        </Link>
                                    </div>
                                    <p className='text-gray-500 text-sm font-normal mb-5 md:line-clamp-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A sint eum nostrum praesentium dignissimos libero eos laborum deserunt explicabo voluptatem! Dolorum porro ipsam amet earum voluptates iusto? Est alias, ipsum accusamus repellat quos, maiores, similique laboriosam placeat nisi nobis atque odit culpa rem.</p>
                                    <div className="flex flex-row gap-2">
                                        <div className="py-1 px-3 rounded-4xl bg-[#E9F4FF] text-[11px] text-[#1d558a]">Design</div>
                                        <div className="py-1 px-3 rounded-4xl bg-[#E9F4FF] text-[11px] text-[#1d558a]">Research</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs
import React from 'react'
import styles from "./style.module.css"
import Image from 'next/image'
import CafeImage from "../../../assets/images/services/cafe.png"
import { FiArrowUpRight } from "react-icons/fi";
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import Button from '@/components/common/button';

const Blogs = () => {
    return (
        <div className='container animate__animated animate__fadeInUp mb-8 md:mb-22'>
            <div className="flex flex-col lg:flex-row items-center">
                <div className={`${styles.delight_text} w-full flex flex-col pl-0 pr-0 md:pl-16 md:pr-12`}>
                    <h1 className='text-[#0e467d] dark:text-white text-4xl font-bold mb-10 text-center'>Our Blogs</h1>
                    <div className="flex flex-col lg:flex-row w-full h-fit mb-4">
                        <div className="w-full lg:w-1/2 h-full mb-4 lg:mb-0 p-0 lg:pr-2">
                            <div className="rounded-md bg-white dark:bg-blue-950 h-full drop-shadow-md overflow-hidden flex flex-col md:flex-row group lg:flex-col">
                                <Image src={CafeImage} alt="blog 1 Image" className='object-cover h-40 md:h-auto lg:h-60 w-full md:w-2/5 lg:w-full' />
                                <div className="flex flex-col px-6 py-4">
                                    <p className='text-sm font-semibold text-[#316AA1] dark:text-blue-200 mb-2'>16 May 2025</p>
                                    <div className="flex flex-row mb-2">
                                        <h1 className='text-xl font-semibold text-[#0B3F71] dark:text-white'>Celebrating Harry Potters Week</h1>
                                        <Link href="#" className='ms-auto group-hover:scale-150 transition-transform'>
                                            <FiArrowUpRight className='text-[#0B3F71] dark:text-gray-100 text-2xl' />
                                        </Link>
                                    </div>
                                    <p className='text-gray-500 dark:text-gray-300 text-sm font-normal mb-5 md:line-clamp-2'>How do you create compelling presentations that wow your colleagues and impress your managers?</p>
                                    <div className="flex flex-row gap-2 flex-wrap">
                                        <div className="py-1 px-3 rounded-4xl bg-[#E9F4FF] text-[11px] text-[#1d558a]">Harry Potter&apos;s Week</div>
                                        <div className="py-1 px-3 rounded-4xl bg-[#E9F4FF] text-[11px] text-[#1d558a]">Celebrations</div>
                                        <div className="py-1 px-3 rounded-4xl bg-[#E9F4FF] text-[11px] text-[#1d558a]">Happy Weeks</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 p-0 lg:pl-2 h-auto flex flex-col gap-3">
                            <div className="rounded-md bg-white dark:bg-blue-950 h-1/2 drop-shadow-md overflow-hidden flex flex-col md:flex-row group">
                                <Image src={CafeImage} alt="blog 1 Image" className='h-auto object-cover w-full md:w-2/5' />
                                <div className="flex flex-col px-6 py-4 w-full md:w-3/5">
                                    <p className='text-sm font-semibold text-[#316AA1] dark:text-blue-200 mb-2'>19 Jun 2024</p>
                                    <div className="flex flex-row mb-2">
                                        <h1 className='text-xl font-semibold text-[#0B3F71] dark:text-white md:line-clamp-1'>Migrating to Linear 101</h1>
                                        <Link href="#" className='ms-auto group-hover:scale-150 transition-transform'>
                                            <FiArrowUpRight className='text-[#0B3F71] dark:text-gray-100 text-2xl' />
                                        </Link>
                                    </div>
                                    <p className='text-gray-500 dark:text-gray-300 text-sm font-normal mb-5 md:line-clamp-3'>Linear helps streamline software projects, sprints, tasks, and bug tracking. Here&apos;s how to get</p>
                                    <div className="flex flex-row gap-2">
                                        <div className="py-1 px-3 rounded-4xl bg-[#E9F4FF] text-[11px] text-[#1d558a]">Design</div>
                                        <div className="py-1 px-3 rounded-4xl bg-[#E9F4FF] text-[11px] text-[#1d558a]">Research</div>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-md bg-white dark:bg-blue-950 h-1/2 drop-shadow-md overflow-hidden flex flex-col md:flex-row group">
                                <Image src={CafeImage} alt="blog 1 Image" className='h-auto object-cover w-full md:w-2/5' />
                                <div className="flex flex-col px-6 py-4 w-full md:w-3/5">
                                    <p className='text-sm font-semibold text-[#316AA1] dark:text-blue-200 mb-2'>18 May 2024</p>
                                    <div className="flex flex-row mb-2">
                                        <h1 className='text-xl font-semibold text-[#0B3F71] dark:text-white md:line-clamp-1'>Building your API Stack</h1>
                                        <Link href="#" className='ms-auto group-hover:scale-150 transition-transform'>
                                            <FiArrowUpRight className='text-[#0B3F71] dark:text-gray-100 text-2xl' />
                                        </Link>
                                    </div>
                                    <p className='text-gray-500 dark:text-gray-300 text-sm font-normal mb-5 md:line-clamp-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A sint eum nostrum praesentium dignissimos libero eos laborum deserunt explicabo voluptatem! Dolorum porro ipsam amet earum voluptates iusto? Est alias, ipsum accusamus repellat quos, maiores, similique laboriosam placeat nisi nobis atque odit culpa rem.</p>
                                    <div className="flex flex-row gap-2">
                                        <div className="py-1 px-3 rounded-4xl bg-[#E9F4FF] text-[11px] text-[#1d558a]">Design</div>
                                        <div className="py-1 px-3 rounded-4xl bg-[#E9F4FF] text-[11px] text-[#1d558a]">Research</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center items-center mb-10">
                        <Link href="#" className='text-[#0B3F71] dark:text-white'>View All</Link>
                    </div>

                    <div className="flex flex-col w-full md:w-1/2 lg:w-4/10 items-center mx-auto mb-20">
                        <h2 className='text-[#0B3F71] dark:text-gray-100 text-center text-xl mb-4'>Subscribe to learn about new Posts, the latest in Blogs, solutions, and updates.</h2>
                        <div className="flex flex-col gap-2 w-8/10">
                            <div className="flex flex-col md:flex-row gap-2 items-center w-3/5 md:w-full mx-auto">
                                <Input type="email" placeholder="Enter your email" className="bg-white" />
                                <Button text="Subscribe" radius="md" size='sm'></Button>
                            </div>
                            <p className='text-[12px] text-gray-500 dark:text-gray-300 text-center md:text-left font-light'>We care about your data in our <Link href="#" className='underline text-blue-600 dark:text-blue-500 decoration-blue-400 decoration-1 underline-offset-1'>privacy policy</Link></p>
                        </div>
                    </div>

                    {/* Maps Area */}
                    <h1 className='text-[#0e467d] dark:text-white text-4xl font-bold mb-8 text-center'>Visit to Our Cafe</h1>
                    <div className='rounded-2xl border-2 border-[#254F78] overflow-hidden'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2646.1430926936305!2d85.80470970127055!3d20.29151302873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909f0f5fdbe79%3A0xd33e65388725eb77!2sThe%20Captain%27s%20Cafe!5e0!3m2!1sen!2sin!4v1756447234334!5m2!1sen!2sin"
                            width="100%"
                            height="240"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs
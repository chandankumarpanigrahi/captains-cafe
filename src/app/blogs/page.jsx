"use client"
import React from 'react'
import styles from "./style.module.css"
import { Card } from "@/components/ui/card"
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import SubBanner from '@/components/common/sub banner'

// Images
import blog1 from "../../assets/images/pages/blogs/blog1.png"
import blog2 from "../../assets/images/pages/blogs/blog2.png"

// Icon
import { GoArrowUpRight } from "react-icons/go";

const Offers = () => {
    const router = useRouter();
    const redirect = (path) => {
        router.push(path)
    }

    const blogs = [
        {
            id: 1,
            img: blog1,
            date: "16 December 2024",
            title: "Celebrating Harry Potters Week",
            desc: "How do you create compelling presentations that wow your colleagues and impress your managers?",
            tags: ["Harry Potter's Week", "Celebrations"],
            urlPath: "/blogs/harry-potters-week"
        },
        {
            id: 2,
            img: blog2,
            date: "22 September 2024",
            title: "Honoring the Magic of Cafe Annyversery",
            desc: "Tips for Creating Engaging Presentations That Enchant Your Cafe Annyversery Guests into the Main Outlet of our Cafe in Bhubaneswar",
            tags: ["Annyversery", "Happy Cafe"],
            urlPath: "/blogs/cafe-annyversery"
        }
    ];
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
                <div className="w-full flex gap-y-4 flex-wrap flex-row justify-evenly">

                    {/* <Card className={`${styles.card_top_area} w-2/9 p-0 overflow-hidden gap-0 rounded-xl cursor-pointer`}>
                        <div className='relative w-full h-[200px]'>
                            <Image src={blog1} alt='About Us Cafe Image' className='w-full h-full object-cover' />
                        </div>
                        <div className='relative z-3 bg-white flex flex-col pt-3 pb-4 px-4'>
                            <small className='text-left w-full text-[#316AA1] text-[12px] font-semibold mb-1'>16 December 2024</small>
                            <div className="flex w-full flex-start">
                                <h4 className='text-[#0B3F71] font-semibold text-left text-xl'>Celebrating Harry Potters Week</h4>
                                <GoArrowUpRight size={24} className='pt-1' />
                            </div>
                            <p className='text-gray-500 text-sm overflow-ellipsis line-clamp-3 mb-3'>How do you create compelling presentations that wow your colleagues and impress your managers?</p>
                            <div className={`${styles.tags} flex w-full flex-row flex-wrap gap-1`}>
                                <h6>Harry Potter&apos;s Week</h6>
                                <h6>Celebrations</h6>
                            </div>
                        </div>
                    </Card> */}

                    {blogs.map((blog) => (
                        <Card
                            key={blog.id}
                            className={`${styles.card_top_area} w-2/9 p-0 overflow-hidden gap-0 rounded-xl cursor-pointer`}
                            onClick={() => redirect(blog.urlPath)}
                        >
                            <div className="relative w-full h-[200px]">
                                <Image
                                    src={blog.img}
                                    alt={blog.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="relative z-3 bg-white flex flex-col pt-3 pb-4 px-4">
                                <small className="text-left w-full text-[#316AA1] text-[12px] font-semibold mb-1">
                                    {blog.date}
                                </small>
                                <div className="flex w-full flex-start">
                                    <h4 className="text-[#0B3F71] font-semibold text-left text-xl">
                                        {blog.title}
                                    </h4>
                                    <GoArrowUpRight size={24} className="pt-1" />
                                </div>
                                <p className="text-gray-500 text-sm overflow-ellipsis line-clamp-3 mb-3">
                                    {blog.desc}
                                </p>
                                <div className={`${styles.tags} flex w-full flex-row flex-wrap gap-1`}>
                                    {blog.tags.map((tag, i) => (
                                        <h6 key={i}>{tag}</h6>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

            </div>
        </>
    )
}

export default Offers

"use client"
import React from 'react'
import Link from 'next/link'
import styles from "./style.module.css"
import { PiQuotesFill } from "react-icons/pi";
import SubBanner from '@/components/common/sub banner'

import Image from 'next/image';
import user1 from "../../assets/images/avatars/user_2.png"
import user2 from "../../assets/images/avatars/user_1.png"
import user3 from "../../assets/images/avatars/user_3.png"
import user4 from "../../assets/images/avatars/user_4.png"
import user5 from "../../assets/images/avatars/user_5.png"

import feauredImage from "../../assets/images/pages/testimonials/featured.png"
import { Card } from '@/components/ui/card';

const Career = () => {
    const textTestimonials = [
        {
            avatar: user1,
            name: "Rahul Das",
            company: "Marketing Head, TechNest Solutions",
            testimonial:
                "The ambiance is so relaxing, and the coffee is simply divine! A must-visit spot in Bhubaneswar."
        },
        {
            avatar: user2,
            name: "Priya Mohanty",
            company: "Food Blogger, Bhubaneswar Eats",
            testimonial:
                "Fresh bakery items and flavorful beverages make every visit delightful. Love their cakes and cozy seating area!"
        },
        {
            avatar: user3,
            name: "Satyajit Behera",
            company: "Software Engineer, Infyware",
            testimonial:
                "Great variety of veg and nonveg options. Their specialty coffee and desserts always hit the right spot!"
        },
        {
            avatar: user4,
            name: "Sangeeta Panda",
            company: "Event Planner, Urban Celebrations",
            testimonial:
                "Captains Cafe never disappoints! Delicious food, friendly staff and beautiful presentation keep me coming back for more."
        },
        {
            avatar: user5,
            name: "Abhipsa Roul",
            company: "Founder, StartupHub Odisha",
            testimonial:
                "A hidden gem for meetings and casual hangouts. Excellent cakes, drinks and atmosphere right in the heart of the city!"
        }
    ];

    return (
        <>
            <SubBanner
                title="Testimonials"
                breadcrumbItems={[
                    // { label: "Company", href: "/company" },
                    { label: "All Testimonials" } // No href = current page
                ]}
            />
            <div className='container py-10'>

                {/* Heading and Description */}
                <div className="flex flex-col px-0 md:px-20 lg:px-60 w-full mb-16">
                    <h1 className='color-primary text-3xl md:text-4xl font-bold mb-3 text-center'>Voices of Delight</h1>
                    <p className='text-[#374F67] text-md md:text-lg text-center'>Hear what our patrons have to say about their unforgettable experiences at Captain's Cafe. From the first sip of coffee to the last bite of dessert, our guests share their stories of joy and satisfaction.</p>
                </div>

                {/* Featured Section */}
                <h3 className='text-blue-900 text-xl text-center font-semibold mb-6 lg:md-10'>Featured Rave Reviews</h3>
                <div className="flex flex-col lg:flex-row justify-between mb-18">
                    <div className="relative w-full p-12 md:px-28 md:py-10  lg:w-5/8 flex flex-col mb-6 lg:mb-0">
                        <h1 className='text-2xl text-center md:text-left font-semibold text-amber-900 mb-3 lg:mb-4'>A Perfect Blend of Taste and Ambiance!</h1>
                        <p className='text-gray-700 p-0 lg:pr-12  text-center md:text-left'>Captain&apos;s Cafe is a gem in Bhubaneswar! The food is delicious, the coffee is exceptional, and the cozy ambiance makes it a perfect spot to relax. The staff is friendly and attentive, adding to the wonderful experience. Highly recommended for food lovers and coffee enthusiasts!</p>
                        <PiQuotesFill size={65} className={`${styles.left_quote} absolute left-0 md:left-12 text-3xl md:text-7xl top-0`} />
                        <PiQuotesFill size={65} className={`${styles.right_quote} absolute right-0 md:right-12  text-3xl md:text-7xl bottom-0`} />
                    </div>
                    <div className="w-full lg:w-3/8 flex flex-col">
                        <div className="relative w-full h-full rounded-xl overflow-hidden">
                            <Image src={feauredImage} alt="Featured Image" className='h-full w-full object-cover' />
                            <div className="flex absolute inset-0 z-1 opacity-90 bg-gradient-to-b from-transparent from-50% via-stone-800 via-90% to-black to-100%">
                                <div className="text-white w-full h-ful flex flex-col mt-auto px-6 py-4">
                                    <h5 className='text-[24px] font-semibold'>Silan Panigrahi</h5>
                                    <p className='text-sm text-gray-200 font-light'>Product Manager, Purnima & co.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Featured Section */}
                <h3 className='text-blue-900 text-xl text-center font-semibold mb-6 lg:md-10'>Featured Rave Reviews</h3>
                <div className="flex flex-col md:flex-row flex-wrap gap-y-8 justify-between">
                    {/* <Card className="w-full md:w-4/9 lg:w-2/9 p-5 rounded-md flex flex-col items-center gap-0">
                        <p className='text-md text-center text-blue-900 font-medium mb-5'>The ambiance is so relaxing, and the coffee is simply divine! A must-visit spot in Bhubaneswar.</p>
                        <div className="flex flex-col mt-auto items-center">
                            <Image src={user1} alt='User Icon' className='rounded-full mb-1' width={60} height={60} />
                            <h5 className='text-md text-center text-gray-700 font-medium'>Rahul Das</h5>
                            <h5 className='text-[12px] text-center text-gray-500'>Marketing Head, TechNest Solutions</h5>
                        </div>
                    </Card> */}

                    {textTestimonials.map((value, index) => (
                        <Card key={index} className={`drop-shadow-xl hover:drop-shadow-xl/25 w-full md:w-4/9 lg:w-2/9 p-5 rounded-md flex flex-col items-center gap-0 transition-all duration-500 ease-in-out cursor-default group`}>
                            <p className='text-md text-center text-blue-900 font-medium mb-5'>{value.testimonial}</p>
                            <div className="flex flex-col mt-auto items-center group-hover:-translate-y-0.5 transition-all duration-500 ease-in-out ">
                                <Image src={value.avatar} alt='User Icon' className='rounded-full mb-1' width={60} height={60} />
                                <h5 className='text-md text-center text-gray-700 font-medium'>{value.name}</h5>
                                <h5 className='text-[12px] text-center text-gray-500'>{value.company}</h5>
                            </div>
                        </Card>
                    ))}
                </div>



            </div>
        </>
    )
}

export default Career

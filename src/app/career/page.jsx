"use client"
import React from 'react'
import Link from 'next/link'
import SubBanner from '@/components/common/sub banner'

// Icons
import { HiMiniUsers } from "react-icons/hi2";
import { PiShieldCheckeredFill } from "react-icons/pi";
import { GiGraduateCap } from "react-icons/gi";
import { MdOutlineAutoGraph } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";

const Career = () => {
    const vacanciesData = [
        {
            category: "Management",
            vacancies: [
                {
                    post: "Cafe Manager",
                    experience: "3+ Years",
                    deadline: "28-05-2025",
                    description: ["Oversee daily cafe operations", "Manage staff scheduling and training"],
                    link: "/career/cafe-manager"
                },
                {
                    post: "Assistant Manager",
                    experience: "2+ Years",
                    deadline: "22-06-2025",
                    description: ["Support cafe manager in daily operations", "Supervise staff during shifts"]
                }
            ]
        },
        {
            category: "Kitchen Staff",
            vacancies: [
                {
                    post: "Head Chef",
                    experience: "4+ Years",
                    deadline: "15-07-2025",
                    description: ["Develop menu items and specials", "Manage kitchen staff and workflow"]
                },
                {
                    post: "Line Cook",
                    experience: "1+ Years",
                    deadline: "30-06-2025",
                    description: ["Prepare food items according to recipes", "Maintain clean and organized workstation"]
                },
                {
                    post: "Pastry Chef",
                    experience: "2+ Years",
                    deadline: "10-08-2025",
                    description: ["Create desserts and baked goods", "Manage pastry section inventory"]
                }
            ]
        },
        {
            category: "Front of House",
            vacancies: [
                {
                    post: "Barista",
                    experience: "1+ Years",
                    deadline: "25-05-2025",
                    description: ["Prepare high-quality coffee beverages", "Maintain coffee equipment"]
                },
                {
                    post: "Server",
                    experience: "6 Months+",
                    deadline: "20-06-2025",
                    description: ["Take customer orders accurately", "Serve food and beverages promptly"]
                },
                {
                    post: "Cashier",
                    experience: "6 Months+",
                    deadline: "18-07-2025",
                    description: ["Process customer payments", "Handle cash transactions accurately"]
                }
            ]
        }
    ]


    return (
        <>
            <SubBanner
                title="Career"
                breadcrumbItems={[
                    // { label: "Company", href: "/company" },
                    { label: "Career" } // No href = current page
                ]}
            />
            <div className='container py-10'>

                {/* Heading and Description */}
                <div className="flex flex-col px-0 md:px-20 lg:px-60 w-full mb-16">
                    <h1 className='color-primary text-3xl md:text-4xl font-bold mb-3 text-center'>Come Join Us</h1>
                    <p className='text-[#374F67] text-md md:text-lg text-center'>At Captain's Cafe, we&apos;re on a mission to serve joy, creativity, and exceptional experiences. If you&apos;re passionate about hospitality, innovation, and making a difference, we&apos;d love to have you join our journey. Let&apos;s brew success together!</p>
                </div>

                {/* Description Section */}
                <div className="flex flex-col lg:flex-row justify-between mb-24">
                    <div className="w-full lg:w-3/8 flex flex-col mb-6 lg:mb-0">
                        <div className="uppercase text-blue-900 text-md font-semibold mb-2 lg:md-3">Benefits</div>
                        <h1 className='text-3xl font-semibold text-amber-900 mb-3 lg:mb-4'>Why You Should Join Our Awesome Team</h1>
                        <p className='text-gray-700'>At Captain's Cafe, we don&apos;t just serve great coffee - we build great careers. We believe that a happy, motivated team is the secret ingredient to our success. That&apos;s why we&apos;ve created a warm, inclusive, and growth-driven work environment where every team member feels truly valued.</p>
                    </div>
                    <div className="w-full lg:w-4/8 flex flex-col">
                        <div className="flex flex-col flex-wrap md:flex-row w-full border-2 border-blue-900 rounded-2xl bg-white p-3">
                            <div className="w-full md:w-1/2 px-2 py-3 mb-2 md:mb-0 flex flex-col items-center">
                                <div className='bg-blue-100 inline-block w-fit p-3 rounded-lg mb-3'><HiMiniUsers size={36} className='text-blue-900' /></div>
                                <h6 className='text-center text-lg font-semibold text-blue-900 mb-1'>Team work</h6>
                                <p className='text-center text-[13px] text-gray-500'>Collaborate with a supportive and fun-loving team that feels like family.</p>
                            </div>
                            <div className="w-full md:w-1/2 px-2 py-3 mb-2 md:mb-0 flex flex-col items-center">
                                <div className='bg-blue-100 inline-block w-fit p-3 rounded-lg mb-3'><PiShieldCheckeredFill size={36} className='text-blue-900' /></div>
                                <h6 className='text-center text-lg font-semibold text-blue-900 mb-1'>Secured Future</h6>
                                <p className='text-center text-[13px] text-gray-500'>Unlock opportunities to grow and take on exciting new challenges.</p>
                            </div>
                            <div className="w-full md:w-1/2 px-2 py-3 mb-2 md:mb-0 flex flex-col items-center">
                                <div className='bg-blue-100 inline-block w-fit p-3 rounded-lg mb-3'><GiGraduateCap size={36} className='text-blue-900' /></div>
                                <h6 className='text-center text-lg font-semibold text-blue-900 mb-1'>Learning Opportunity</h6>
                                <p className='text-center text-[13px] text-gray-500'>Access training programs to sharpen your skills and boost your potential.</p>
                            </div>
                            <div className="w-full md:w-1/2 px-2 py-3 mb-2 md:mb-0 flex flex-col items-center">
                                <div className='bg-blue-100 inline-block w-fit p-3 rounded-lg mb-3'><MdOutlineAutoGraph size={36} className='text-blue-900' /></div>
                                <h6 className='text-center text-lg font-semibold text-blue-900 mb-1'>Upgrade Skills</h6>
                                <p className='text-center text-[13px] text-gray-500'>Enjoy exclusive discounts on food, beverages, and more for you.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Heading and Description */}
                <div className="flex flex-col px-0 md:px-20 lg:px-60 w-full mb-6">
                    <h1 className='color-primary text-3xl md:text-4xl font-bold mb-3 text-center'>Career Openings</h1>
                    <p className='text-[#374F67] text-md md:text-lg text-center'>Check out our open roles below and take the first step toward an exciting career with us!</p>
                </div>

                <div className="flex flex-col gap-3 w-full">
                    {vacanciesData.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="flex flex-col lg:flex-row w-full mb-8">
                            <h1 className='w-full md:w-3/12 mb-3 lg:mb-0 uppercase text-blue-900 text-lg md:text-xl font-semibold'>
                                {category.category} (<span>{category.vacancies.length}</span>)
                            </h1>
                            <div className='w-full lg:w-9/12 flex flex-col gap-y-3'>
                                {category.vacancies.map((value, index) => (
                                    <div key={index} className='group flex flex-col md:flex-row p-3 border-1 justify-between rounded-sm border-amber-900 bg-white'>
                                        <div className="flex flex-col">
                                            <h2 className='text-xl text-amber-900 font-semibold mb-2'>{value.post}</h2>
                                            <ul className='list-disc pl-5 text-sm text-gray-500'>
                                                {value.description.map((desc, i) => (
                                                    <li key={i}>{desc}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <hr className='my-3 lg:hidden' />
                                        <div className="flex flex-col">
                                            <div className="flex flex-row justify-between mb-2 w-full lg:w-[200px]">
                                                <div className='text-sm text-gray-500'>Experience</div>
                                                <div className='text-sm text-blue-900 font-semibold'>{value.experience}</div>
                                            </div>
                                            <div className="flex flex-row justify-between mb-2 w-full lg:w-[200px]">
                                                <div className='text-sm text-gray-500'>Deadline</div>
                                                <div className='text-sm text-blue-900 font-semibold'>{value.deadline}</div>
                                            </div>
                                            <div className="flex flex-row justify-end w-full lg:w-[200px]">
                                                <Link href={value.link || ""}>
                                                    <BsArrowRight size={26} className='text-gray-500 group-hover:-rotate-45 group-hover:text-amber-900 transition-all duration-300' />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default Career

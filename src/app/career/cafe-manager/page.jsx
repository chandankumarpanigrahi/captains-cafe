"use client"
import React from 'react'
import SubBanner from '@/components/common/sub banner'
import styles from "../style.module.css"
import { Card } from '@/components/ui/card';

// Icons
import {
    GoLocation,
} from "react-icons/go";
import {
    IoBriefcaseOutline,
    IoCalendarOutline,
    IoSchoolOutline,
    IoTimeOutline,
    IoCalendarClearOutline,
    IoPeopleOutline,
    IoHourglassOutline
} from "react-icons/io5";
import { AiTwotonePushpin } from "react-icons/ai";

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import PathCopy from '@/components/design/path copy';
import Image from 'next/image';

const CafeManager = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [currentPath, setCurrentPath] = useState('');

    useEffect(() => {
        // Get the full path including query parameters
        const fullPath = searchParams.toString()
            ? `${pathname}?${searchParams.toString()}`
            : pathname;

        setCurrentPath(fullPath);
    }, [pathname, searchParams]);

    return (
        <>
            <SubBanner
                title="Career"
                breadcrumbItems={[
                    { label: "Career", href: "/career" },
                    { label: "Cafe Manager" } // No href = current page
                ]}
            />
            <div className='container py-10'>

                <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:w-8/12 mb-6">
                        <h1 className='text-2xl font-semibold text-amber-900 mb-3 uppercase'>Cafe Manager</h1>
                        <section className='my-5'>
                            <h6 className='text-[#0E467D] text-lg font-semibold mb-1'>Who We&apos;re Looking For:</h6>
                            <ul className='list-disc pl-8 text-[#374F67] mb-1'>
                                <li>A coffee enthusiast with a passion for crafting the perfect cup.</li>
                                <li>Someone with excellent communication skills and a warm, welcoming attitude.</li>
                                <li>A team player who thrives in a fast-paced environment.</li>
                            </ul>
                        </section>

                        <section className='my-5'>
                            <h6 className='text-[#0E467D] text-lg font-semibold mb-1'>Your Role &amp; Responsibilities:</h6>
                            <ul className='list-disc pl-8 text-[#374F67] mb-2'>
                                <li>Prepare and serve high-quality coffee and beverages.</li>
                                <li>Maintain a clean and organized workspace.</li>
                                <li>Engage with customers, take orders, and provide exceptional service.</li>
                                <li>Stay updated on coffee trends and recommend new menu items.</li>
                                <li>Handle cash transactions and operate the POS system.</li>
                            </ul>
                        </section>

                        <section className='my-5'>
                            <h6 className='text-[#0E467D] text-lg font-semibold mb-1'>Bonus Points for Familiarity With:</h6>
                            <ul className='list-disc pl-8 text-[#374F67] mb-2'>
                                <li>Specialty coffee brewing techniques (e.g., pour-over, French press, espresso).</li>
                                <li>Latte art and creative beverage presentation.</li>
                                <li>Inventory management and ordering supplies.</li>
                            </ul>
                        </section>

                        <section className='my-5'>
                            <h6 className='text-[#0E467D] text-lg font-semibold mb-1'>Educational Requirement:</h6>
                            <ul className='list-disc pl-8 text-[#374F67] mb-2'>
                                <li>No formal education required; a high school diploma or equivalent is preferred.</li>
                                <li>Certification in barista training or hospitality is a plus.</li>
                            </ul>
                        </section>

                        <section className='my-5'>
                            <h6 className='text-[#0E467D] text-lg font-semibold mb-1'>Salary:</h6>
                            <p className='text-[#374F67] mb-2'>Competitive pay starting at ₹15,000 - ₹20,000 per month, based on experience.</p>
                        </section>

                        <section className='my-5'>
                            <h6 className='text-[#0E467D] text-lg font-semibold mb-1'>Working Hours:</h6>
                            <p className=' text-[#374F67] mb-2'>Flexible shifts: Morning (7 AM - 2 PM) or Evening (3 PM - 11 PM).</p>
                        </section>

                        <section className='my-5'>
                            <h6 className='text-[#0E467D] text-lg font-semibold mb-1'>Working Days:</h6>
                            <p className=' text-[#374F67] mb-2'>6 days a week, with one rotating day off.</p>
                        </section>

                        <section className='my-5'>
                            <h6 className='text-[#0E467D] text-lg font-semibold mb-1'>Perks &amp; Benefits You&apos;ll Get:</h6>
                            <ul className='list-disc pl-8 text-[#374F67] mb-2'>
                                <li>Free meals and unlimited coffee during shifts.</li>
                                <li>Employee discounts on food and beverages.</li>
                                <li>Opportunities for skill development and career growth.</li>
                                <li>A supportive and fun work environment.</li>
                            </ul>
                        </section>

                        <section className='my-5'>
                            <h6 className='text-[#0E467D] text-lg font-semibold mb-1'>The Application Process:</h6>
                            <ul className='list-decimal pl-8 text-[#374F67] mb-2'>
                                <li>Fill out the online application form.</li>
                                <li>Attach your resume and a brief cover letter (optional).</li>
                                <li>If shortlisted, attend an in-person interview and a coffee-making demo.</li>
                                <li>Receive an offer and join our team!</li>
                            </ul>
                        </section>

                        <section className='my-5'>
                            <h6 className='text-[#0E467D] text-lg font-semibold mb-1'>Our Statement:</h6>
                            <p className=' text-[#374F67] mb-2'>
                                At Captain&apos;s Cafe, we believe in brewing more than just coffee &minus; we create experiences.
                                If you&apos;re passionate about coffee, hospitality, and making people smile, we&apos;d love to have you on our team.
                                Join us and be part of a workplace that feels like home!
                            </p>
                        </section>

                    </div>




                    <div className="w-full lg:w-4/12 p-0 lg:pl-12">
                        <div className="w-full flex flex-col gap-3 lg:sticky top-32">
                            <Card className="px-6 pt-4 pb-6 gap-0">
                                <p className='text-blue-900 font-semibold flex flex-row justify-between mb-5'>Job Summary</p>
                                <div className="flex flex-col gap-6">

                                    <div className="flex flex-row items-center">
                                        <GoLocation size={32} color="#713711" />
                                        <div className="flex flex-col pl-5">
                                            <h6 className="text-sm text-gray-500">Location</h6>
                                            <p className="text-[16px] font-medium text-blue-900">CRP, Bhubaneswar</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-row items-center">
                                        <IoBriefcaseOutline size={32} color="#713711" />
                                        <div className="flex flex-col pl-5">
                                            <h6 className="text-sm text-gray-500">Job Type</h6>
                                            <p className="text-[16px] font-medium text-blue-900">Full Time</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-row items-center">
                                        <IoCalendarOutline size={32} color="#713711" />
                                        <div className="flex flex-col pl-5">
                                            <h6 className="text-sm text-gray-500">Date posted</h6>
                                            <p className="text-[16px] font-medium text-blue-900">posted 1 month ago</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-row items-center">
                                        <IoSchoolOutline size={32} color="#713711" />
                                        <div className="flex flex-col pl-5">
                                            <h6 className="text-sm text-gray-500">Experience</h6>
                                            <p className="text-[16px] font-medium text-blue-900">Experience: 2 year</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-row items-center">
                                        <IoTimeOutline size={32} color="#713711" />
                                        <div className="flex flex-col pl-5">
                                            <h6 className="text-sm text-gray-500">Working Hours</h6>
                                            <p className="text-[16px] font-medium text-blue-900">9 AM - 6 PM</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-row items-center">
                                        <IoCalendarClearOutline size={32} color="#713711" />
                                        <div className="flex flex-col pl-5">
                                            <h6 className="text-sm text-gray-500">Working Days</h6>
                                            <p className="text-[16px] font-medium text-blue-900">
                                                Weekly: 6 days<br />
                                                Weekend: Sunday
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-row items-center">
                                        <IoPeopleOutline size={32} color="#713711" />
                                        <div className="flex flex-col pl-5">
                                            <h6 className="text-sm text-gray-500">Vacancy</h6>
                                            <p className="text-[16px] font-medium text-blue-900">No. of Vacancy: 3</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-row items-center">
                                        <IoHourglassOutline size={32} color="#713711" />
                                        <div className="flex flex-col pl-5">
                                            <h6 className="text-sm text-gray-500">Deadline</h6>
                                            <p className="text-[16px] font-medium text-blue-900">25-05-2025</p>
                                        </div>
                                    </div>


                                </div>
                            </Card>
                            <Card className="px-4 py-2 gap-0">
                                <p className='text-blue-900 font-semibold flex flex-row justify-between mb-2'>Share the Offer  <AiTwotonePushpin size={20} /></p>
                                <PathCopy />
                            </Card>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default CafeManager

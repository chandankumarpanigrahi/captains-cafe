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

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm, ValidationError } from '@formspree/react';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import PathCopy from '@/components/design/path copy';
import Dropzone from '@/components/ui/Dropzone';

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
    const handleFiles = (files) => {
        console.log("Dropped files:", files);
        // upload logic here
    };
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
                        <h1 className='text-2xl font-semibold text-amber-900 dark:text-yellow-200 mb-3 uppercase text-center md:text-left'>Cafe Manager</h1>
                        <section className='my-5'>
                            <h6 className='text-[#0E467D] dark:text-white text-lg font-semibold mb-1'>Who We&apos;re Looking For:</h6>
                            <ul className='list-disc pl-8 text-[#374F67] dark:text-gray-400 mb-1'>
                                <li>A coffee enthusiast with a passion for crafting the perfect cup.</li>
                                <li>Someone with excellent communication skills and a warm, welcoming attitude.</li>
                                <li>A team player who thrives in a fast-paced environment.</li>
                            </ul>
                        </section>

                        <section className='my-5'>
                            <h6 className='text-[#0E467D] dark:text-white text-lg font-semibold mb-1'>Your Role &amp; Responsibilities:</h6>
                            <ul className='list-disc pl-8 text-[#374F67] dark:text-gray-400 mb-2'>
                                <li>Prepare and serve high-quality coffee and beverages.</li>
                                <li>Maintain a clean and organized workspace.</li>
                                <li>Engage with customers, take orders, and provide exceptional service.</li>
                                <li>Stay updated on coffee trends and recommend new menu items.</li>
                                <li>Handle cash transactions and operate the POS system.</li>
                            </ul>
                        </section>

                        <section className='my-5'>
                            <h6 className='text-[#0E467D] dark:text-white text-lg font-semibold mb-1'>Bonus Points for Familiarity With:</h6>
                            <ul className='list-disc pl-8 text-[#374F67] dark:text-gray-400 mb-2'>
                                <li>Specialty coffee brewing techniques (e.g., pour-over, French press, espresso).</li>
                                <li>Latte art and creative beverage presentation.</li>
                                <li>Inventory management and ordering supplies.</li>
                            </ul>
                        </section>

                        <section className='my-5'>
                            <h6 className='text-[#0E467D] dark:text-white text-lg font-semibold mb-1'>Educational Requirement:</h6>
                            <ul className='list-disc pl-8 text-[#374F67] dark:text-gray-400 mb-2'>
                                <li>No formal education required; a high school diploma or equivalent is preferred.</li>
                                <li>Certification in barista training or hospitality is a plus.</li>
                            </ul>
                        </section>

                        <section className='my-5'>
                            <h6 className='text-[#0E467D] dark:text-white text-lg font-semibold mb-1'>Salary:</h6>
                            <p className='text-[#374F67] dark:text-gray-400 mb-2'>Competitive pay starting at ₹15,000 - ₹20,000 per month, based on experience.</p>
                        </section>

                        <section className='my-5'>
                            <h6 className='text-[#0E467D] dark:text-white text-lg font-semibold mb-1'>Working Hours:</h6>
                            <p className=' text-[#374F67] dark:text-gray-400 mb-2'>Flexible shifts: Morning (7 AM - 2 PM) or Evening (3 PM - 11 PM).</p>
                        </section>

                        <section className='my-5'>
                            <h6 className='text-[#0E467D] dark:text-white text-lg font-semibold mb-1'>Working Days:</h6>
                            <p className=' text-[#374F67] dark:text-gray-400 mb-2'>6 days a week, with one rotating day off.</p>
                        </section>

                        <section className='my-5'>
                            <h6 className='text-[#0E467D] dark:text-white text-lg font-semibold mb-1'>Perks &amp; Benefits You&apos;ll Get:</h6>
                            <ul className='list-disc pl-8 text-[#374F67] dark:text-gray-400 mb-2'>
                                <li>Free meals and unlimited coffee during shifts.</li>
                                <li>Employee discounts on food and beverages.</li>
                                <li>Opportunities for skill development and career growth.</li>
                                <li>A supportive and fun work environment.</li>
                            </ul>
                        </section>

                        <section className='my-5'>
                            <h6 className='text-[#0E467D] dark:text-white text-lg font-semibold mb-1'>The Application Process:</h6>
                            <ul className='list-decimal pl-8 text-[#374F67] dark:text-gray-400 mb-2'>
                                <li>Fill out the online application form.</li>
                                <li>Attach your resume and a brief cover letter (optional).</li>
                                <li>If shortlisted, attend an in-person interview and a coffee-making demo.</li>
                                <li>Receive an offer and join our team!</li>
                            </ul>
                        </section>

                        <section className='my-5'>
                            <h6 className='text-[#0E467D] dark:text-white text-lg font-semibold mb-1'>Our Statement:</h6>
                            <p className=' text-[#374F67] dark:text-gray-400 mb-2'>
                                At Captain&apos;s Cafe, we believe in brewing more than just coffee &minus; we create experiences.
                                If you&apos;re passionate about coffee, hospitality, and making people smile, we&apos;d love to have you on our team.
                                Join us and be part of a workplace that feels like home!
                            </p>
                        </section>

                    </div>


                    <div className="w-full lg:w-4/12 p-0 lg:pl-12">
                        <div className="w-full flex flex-col gap-3 lg:sticky top-32">
                            <Card className="px-6 pt-4 pb-6 gap-0">
                                <p className='text-blue-900 dark:text-white font-semibold flex flex-row justify-between mb-5'>Job Summary</p>
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-row items-center">
                                        <GoLocation size={32} color="#713711" />
                                        <div className="flex flex-col pl-5">
                                            <h6 className="text-sm text-[#374F67] dark:text-gray-400">Location</h6>
                                            <p className="text-[16px] font-medium text-blue-900 dark:text-white">CRP, Bhubaneswar</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-row items-center">
                                        <IoBriefcaseOutline size={32} color="#713711" />
                                        <div className="flex flex-col pl-5">
                                            <h6 className="text-sm text-[#374F67] dark:text-gray-400">Job Type</h6>
                                            <p className="text-[16px] font-medium text-blue-900 dark:text-white">Full Time</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-row items-center">
                                        <IoCalendarOutline size={32} color="#713711" />
                                        <div className="flex flex-col pl-5">
                                            <h6 className="text-sm text-[#374F67] dark:text-gray-400">Date posted</h6>
                                            <p className="text-[16px] font-medium text-blue-900 dark:text-white">posted 1 month ago</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-row items-center">
                                        <IoSchoolOutline size={32} color="#713711" />
                                        <div className="flex flex-col pl-5">
                                            <h6 className="text-sm text-[#374F67] dark:text-gray-400">Experience</h6>
                                            <p className="text-[16px] font-medium text-blue-900 dark:text-white">Experience: 2 year</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-row items-center">
                                        <IoTimeOutline size={32} color="#713711" />
                                        <div className="flex flex-col pl-5">
                                            <h6 className="text-sm text-[#374F67] dark:text-gray-400">Working Hours</h6>
                                            <p className="text-[16px] font-medium text-blue-900 dark:text-white">9 AM - 6 PM</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-row items-center">
                                        <IoCalendarClearOutline size={32} color="#713711" />
                                        <div className="flex flex-col pl-5">
                                            <h6 className="text-sm text-[#374F67] dark:text-gray-400">Working Days</h6>
                                            <p className="text-[16px] font-medium text-blue-900 dark:text-white">
                                                Weekly: 6 days<br />
                                                Weekend: Sunday
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-row items-center">
                                        <IoPeopleOutline size={32} color="#713711" />
                                        <div className="flex flex-col pl-5">
                                            <h6 className="text-sm text-[#374F67] dark:text-gray-400">Vacancy</h6>
                                            <p className="text-[16px] font-medium text-blue-900 dark:text-white">No. of Vacancy: 3</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-row items-center">
                                        <IoHourglassOutline size={32} color="#713711" />
                                        <div className="flex flex-col pl-5">
                                            <h6 className="text-sm text-[#374F67] dark:text-gray-400">Deadline</h6>
                                            <p className="text-[16px] font-medium text-blue-900 dark:text-white">25-05-2025</p>
                                        </div>
                                    </div>

                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button className="bg-blue-900 hover:bg-blue-950 dark:text-white">Apply Now</Button>
                                        </DialogTrigger>

                                        {/* Modal Content */}
                                        <DialogContent className="sm:max-w-[550px] h-fit">
                                            <div className='max-h-[500px] md:max-h-none pr-3 overflow-scroll md:overflow-hidden'>
                                                {/* Modal Header */}
                                                <DialogHeader>
                                                    <DialogTitle className="text-gray-600">Apply for <span className="text-blue-900 ">Cafe Manager</span>, The Captain&apos;s Cafe</DialogTitle>
                                                    <DialogDescription>
                                                        Please fill your details below and apply.
                                                    </DialogDescription>
                                                </DialogHeader>

                                                {/* Modal Body */}
                                                <form>
                                                    <label htmlFor="name">
                                                        Your Name
                                                    </label>
                                                    <Input
                                                        id="name"
                                                        type="name"
                                                        name="name"
                                                        placeholder="Enter Your Full Name"
                                                        className="mb-4 mt-1"
                                                    />
                                                    <ValidationError
                                                        prefix="Name"
                                                        field="name"
                                                    />

                                                    <label htmlFor="phone">
                                                        Mobile Number
                                                    </label>
                                                    <Input
                                                        id="phone"
                                                        type="number"
                                                        name="phone"
                                                        placeholder="Enter Your Phone Number"
                                                        className="mb-4 mt-1"
                                                    />
                                                    <ValidationError
                                                        prefix="Phone Number"
                                                        field="phone"
                                                    />

                                                    <label htmlFor="email">
                                                        Email Address
                                                    </label>
                                                    <Input
                                                        id="email"
                                                        type="email"
                                                        name="email"
                                                        placeholder="Enter Your Email Address"
                                                        className="mb-4 mt-1"
                                                    />
                                                    <ValidationError
                                                        prefix="Email"
                                                        field="email"
                                                    />

                                                    <label htmlFor="message">
                                                        Describe About Your Experience
                                                    </label>
                                                    <Textarea
                                                        id="message"
                                                        name="message"
                                                        placeholder="Describe here"
                                                        className="mb-4 mt-1"
                                                    />
                                                    <ValidationError
                                                        prefix="Description"
                                                        field="message"
                                                    />

                                                    <label htmlFor="file">
                                                        Upload Your Resume
                                                    </label>
                                                    <div className="mb-4 mt-1">
                                                        <Dropzone onFiles={handleFiles} />
                                                    </div>
                                                    <ValidationError
                                                        prefix="File"
                                                        field="file"
                                                    />
                                                </form>

                                                {/* Modal Footer */}
                                                <DialogFooter>
                                                    <DialogClose asChild>
                                                        <Button variant="outline">Cancel</Button>
                                                    </DialogClose>
                                                    <Button type="submit">Submit</Button>
                                                </DialogFooter>
                                            </div>

                                        </DialogContent>
                                    </Dialog>

                                </div>
                            </Card>
                            <Card className="px-4 py-2 gap-0">
                                <p className='text-blue-900 dark:text-white font-semibold flex flex-row justify-between mb-2'>Share the Offer  <AiTwotonePushpin size={20} /></p>
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

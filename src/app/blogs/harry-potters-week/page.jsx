"use client"
import React from 'react'
import SubBanner from '@/components/common/sub banner'
import styles from "../style.module.css"
import { Card } from '@/components/ui/card';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

// Image
import banner from "../../../assets/images/pages/blogs/blog1_banner.png"

// Icons
import { RiCake3Line } from "react-icons/ri";
import { AiTwotonePushpin } from "react-icons/ai";

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import PathCopy from '@/components/design/path copy';
import Image from 'next/image';

const FoodieFriday = () => {
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

    const HrLine = () => (
        < div className="relative w-full flex items-center justify-center" >
            <span className="absolute left-0 top-1/2 w-[calc(50%-16px)] h-px bg-[#4488c9] dark:bg-blue-200" aria-hidden="true"></span>
            <RiCake3Line size={20} className="text-[#31699E] dark:text-blue-200" />
            <span className="absolute right-0 top-1/2 w-[calc(50%-16px)] h-px bg-[#4488c9] dark:bg-blue-200" aria-hidden="true"></span>
        </div >
    )
    return (
        <>
            <SubBanner
                title="Harry Potters Week"
                breadcrumbItems={[
                    { label: "Blogs", href: "/blogs" },
                    { label: "Celebrating Harry Potters Week" } // No href = current page
                ]}
            />
            <div className='container py-10'>
                <div className='flex flex-col gap-2 md:gap-3 items-center mb-5'>
                    <h1 className='text-2xl md:text-4xl mb-1 md:mb-3 text-center font-semibold text-[#0E467D] dark:text-white'>&#10024; Magical Harry Potter Week at The Captain&apos;s Cafe!</h1>
                    <p className='text-center text-sm md:text-[16px] w-full lg:w-9/12 text-[#374F67] dark:text-gray-200 mb-5'>Calling all witches, wizards, and muggles! &#127775; From <strong className='text-amber-700 dark:text-orange-200'>5th Nov 2025</strong> to <strong className='text-amber-700 dark:text-orange-200'>11th Nov 2025</strong>, Captain&apos;s Cafe is transforming into a Hogwarts-inspired haven with spellbinding treats, enchanting decor, and non-stop Harry Potter movie marathons!</p>
                    <h4 className='text-[#0E467D] dark:text-white text-md md:text-xl text-center font-semibold '>🪄 The Magic Awaits You…</h4>
                </div>

                <Image src={banner} alt='Banner' className='w-full rounded-2xl mb-4 hidden md:block border-1 border-amber-50' />

                <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:w-8/12 mb-6">

                        <HrLine/>

                        <section className='my-5'>
                            <h6 className='text-[#0E467D] dark:text-white text-lg font-semibold mb-1'>1. Themed Food & Drinks (100% Muggle-Approved!)</h6>
                            <ul className='list-disc pl-8 text-[#374F67] dark:text-blue-200 mb-1'>
                                <li>“Butterbeer Latte” - A creamy, caramel-vanilla latte with a frothy top</li>
                                <li>“Golden Snitch Donuts” - Honey-glazed with edible gold glitter</li>
                                <li>“Hufflepuff Honey Cake” - Layers of sponge cake with spiced honey buttercream</li>
                                <li>“Slytherin Serpent Pasta” - Green pesto pasta with basil & parmesan</li>
                                <li>“Chocolate Frogs” - Rich dark chocolate frogs with collectible character cards</li>
                            </ul>
                            <i className='text-[#374F67] dark:text-blue-200 font-medium'>(Vegetarian & vegan options available! Ask your server for “Muggle modifications.”)</i>
                        </section>

                        <HrLine/>

                        <section className='my-5'>
                            <h6 className='text-[#0E467D] dark:text-white text-lg font-semibold mb-1'>2. Daily Movie Screenings</h6>
                            <p className='text-[#0E467D] dark:text-white font-semibold mb-2'>Relive the magic on our big screen!  Schedule:</p>
                            <ul className='list-disc pl-8 text-[#374F67] dark:text-blue-200 mb-2'>
                                <li><strong>Monday:</strong> Harry Potter & the Sorcerer&apos;s Stone</li>
                                <li><strong>Tuesday:</strong> Chamber of Secrets</li>
                                <li><strong>Wednesday:</strong> Prisoner of Azkaban</li>
                                <li><strong>Thursday:</strong> Goblet of Fire</li>
                                <li><strong>Friday:</strong> Order of the Phoenix</li>
                                <li><strong>Saturday:</strong> Half-Blood Prince</li>
                                <li><strong>Sunday:</strong> Deathly Hallows (Parts 1 & 2) &minus; Epic Double Feature!</li>
                            </ul>
                            <i className='text-[#374F67] dark:text-blue-200 font-medium'>(&#128356; Time: 6 PM &minus; 9 PM (Dinner + Movie Specials Available))</i>
                        </section>

                        <HrLine/>

                        <section className='my-5'>
                            <h6 className='text-[#0E467D] dark:text-white text-lg font-semibold mb-1'>&#128203; Terms & Conditions:</h6>
                            <ul className='list-decimal pl-8 text-[#374F67] dark:text-blue-200'>
                                <li>Themed menu available all week (while supplies last).</li>
                                <li>Movie screenings free with any purchase.</li>
                                <li>House Cup points tracked via customer receipts (mention your house at checkout).</li>
                                <li>No outside food/drink. Costumes encouraged but not required!</li>
                            </ul>
                        </section>

                        <HrLine/>

                        <section className='my-5'>
                            <h6 className='text-[#0E467D] dark:text-white text-lg font-semibold mb-1'>&#127757; “I Solemnly Swear I&apos;m Up for This!”</h6>
                            <ul className='pl-8 text-[#374F67] dark:text-blue-200'>
                                <li>Don&apos;t miss out &minus; reservations recommended for dinner screenings!</li>
                                <li>Accio, customers! See you at Captain&apos;s Cafe for a week of wizarding wonders. &#10024;</li>
                            </ul>
                        </section>
                    </div>




                    <div className="w-full lg:w-4/12 p-0 lg:pl-12">
                        <div className="w-full flex flex-col gap-3 lg:sticky top-32">
                            <Card className="px-4 py-2 gap-0">
                                <p className='text-blue-900 dark:text-blue-200 font-semibold flex flex-row justify-between mb-2'>Share the Offer  <AiTwotonePushpin size={20} /></p>
                                <PathCopy />
                            </Card>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default FoodieFriday

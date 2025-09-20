"use client"
import React from 'react'
import SubBanner from '@/components/common/sub banner'
import styles from "../style.module.css"
import { Card } from '@/components/ui/card';
import { Code } from '@/components/ui/code';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

// Icons
import { RiCake3Line } from "react-icons/ri";
import { AiTwotonePushpin } from "react-icons/ai";

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

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

    return (
        <>
            <SubBanner
                title="Foodie Friday"
                breadcrumbItems={[
                    { label: "All Our Offers", href: "/offers" },
                    { label: "Foodie Friday" } // No href = current page
                ]}
            />
            <div className='container py-10'>
                <div className='flex flex-col gap-2 md:gap-3 items-center mb-5'>
                    <h1 className='text-2xl md:text-4xl mb-1 md:mb-3 text-center font-semibold text-[#0E467D]'>&#127790; Foodie Friday at Captain&apos;s Cafe!</h1>
                    <h4 className='text-[#0E467D] text-md md:text-xl text-center font-semibold'>Get a FLAT 50% OFF All Bakery Items Every Single Friday!</h4>
                    <p className='text-center text-sm md:text-[16px] w-full lg:w-9/12 text-[#374F67]'>Treat your taste buds to a sweet escape! <strong className='text-amber-700'>Every Friday</strong>, enjoy a flat <strong className='text-amber-700'>50%</strong> discount on our entire bakery range &ndash; from flaky croissants to decadent cakes. Whether you&apos;re craving a buttery pastry with your morning coffee or a dessert to end your week on a high note, we&apos;ve got you covered!</p>
                </div>


                <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:w-8/12 mb-6">
                        <div className={`${styles.blog_hr_line} w-full flex justify-center`}><RiCake3Line size={20} color='#31699E' /></div>

                        <section className='my-5'>
                            <h6 className='text-[#0E467D] text-lg font-semibold mb-1'>&#127856; Featured Bakery Items on Discount:</h6>
                            <ul className='list-disc pl-8 text-[#374F67]'>
                                <li>Freshly baked croissants (plain, chocolate, almond)</li>
                                <li>Artisanal muffins (blueberry, chocolate chip, banana nut)</li>
                                <li>Classic doughnuts (glazed, sprinkled, filled)</li>
                                <li>Rich brownies & blondies</li>
                                <li>Signature cakes by the slice (red velvet, tiramisu, carrot cake)</li>
                                <li>And more!</li>
                            </ul>
                            <i className='text-[#374F67] font-medium'>(Discount applies to all bakery display items.)</i>
                        </section>

                        <div className={`${styles.blog_hr_line} w-full flex justify-center`}><RiCake3Line size={20} color='#31699E' /></div>

                        <section className='my-5'>
                            <h6 className='text-[#0E467D] text-lg font-semibold mb-1'>&#129321; Why You&apos;ll Love Foodie Friday:</h6>
                            <ul className='list-disc pl-8 text-[#374F67]'>
                                <li>"A Sweet Start to the Weekend!" &ndash; Unwind after a long week with half-price treats.</li>
                                <li>"Try Something New!" &ndash; Perfect excuse to sample that pastry you&apos;ve been eyeing.</li>
                                <li>"Share the Joy" &ndash; Bring friends/family for a budget-friendly bakery feast.</li>
                            </ul>
                        </section>

                        <div className={`${styles.blog_hr_line} w-full flex justify-center`}><RiCake3Line size={20} color='#31699E' /></div>

                        <section className='my-5'>
                            <h6 className='text-[#0E467D] text-lg font-semibold mb-1'>&#128203; Terms & Conditions:</h6>
                            <ul className='list-decimal pl-8 text-[#374F67]'>
                                <li>Valid every <strong className='text-amber-700'>Friday</strong> for dine-in, takeaway, and online orders (all day).</li>
                                <li><strong className='text-amber-700'>50%</strong> discount applies only to bakery items <i>(excludes beverages, combos, or promotional items).</i></li>
                                <li>Cannot be combined with other offers/coupons.</li>
                                <li>Limited stock &ndash; discounts apply while supplies last.</li>
                                <li>Not applicable on public holidays or special event days.</li>
                                <li>The Captain&apos;s Cafe reserves the right to modify/terminate the offer without prior notice.</li>
                            </ul>
                        </section>

                        <div className={`${styles.blog_hr_line} w-full flex justify-center`}><RiCake3Line size={20} color='#31699E' /></div>

                        <section className='my-5'>
                            <h6 className='text-[#0E467D] text-lg font-semibold mb-1'>&#10067; How to Redeem:</h6>
                            <ul className='list-decimal pl-8 text-[#374F67]'>
                                <li>Dine-in/Takeaway: Its by default applied.</li>
                                <li>Online orders: Use code <strong className='text-amber-700'>FOODIEFRIDAY</strong> on our app/website.</li>
                            </ul>
                        </section>

                        <div className={`${styles.blog_hr_line} w-full flex justify-center`}><RiCake3Line size={20} color='#31699E' /></div>

                        <section className='my-5'>
                            <h6 className='text-[#0E467D] text-lg font-semibold mb-1'>&#128226; Pro Tip:</h6>
                            <ul className='pl-8 text-[#374F67]'>
                                <li>Follow us on Instagram <a className='text-blue-900 font-semibold' href="https://www.instagram.com/thecaptainscafe.india/" target='_blank'>@thecaptainscafe.india</a> for best offers, event details, weekly specials and surprise freebies!</li>
                            </ul>
                        </section>
                    </div>




                    <div className="w-full lg:w-4/12 p-0 lg:pl-12">
                        <div className="w-full flex flex-col gap-3 lg:sticky top-32">
                            <Card className="px-4 py-0">
                                <Accordion
                                    type="single"
                                    collapsible
                                    className="w-full"
                                    defaultValue="item-1"
                                >

                                    <AccordionItem value="item-1">
                                        <AccordionTrigger className="text-md items-center text-gray-800">Will this offer run every Friday indefinitely?</AccordionTrigger>
                                        <AccordionContent className="flex flex-col gap-4 text-sm text-gray-500">
                                            <p>
                                                For now, yes! But terms may change during festive/holiday seasons. Follow us on social media for updates.
                                            </p>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-2">
                                        <AccordionTrigger className="text-md items-center text-gray-800">Can I avail this offer for online delivery on Fridays?</AccordionTrigger>
                                        <AccordionContent className="flex flex-col gap-4 text-sm text-gray-500">
                                            <p>
                                                Our flagship product combines cutting-edge technology with sleek
                                                design. Built with premium materials, it offers unparalleled
                                                performance and reliability.
                                            </p>
                                            <p>
                                                Key features include advanced processing capabilities, and an
                                                intuitive user interface designed for both beginners and experts.
                                            </p>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-2">
                                        <AccordionTrigger className="text-md items-center text-gray-800">Is there a limit on how many discounted items I can order?</AccordionTrigger>
                                        <AccordionContent className="flex flex-col gap-4 text-sm text-gray-500">
                                            <p>
                                                Our flagship product combines cutting-edge technology with sleek
                                                design. Built with premium materials, it offers unparalleled
                                                performance and reliability.
                                            </p>
                                            <p>
                                                Key features include advanced processing capabilities, and an
                                                intuitive user interface designed for both beginners and experts.
                                            </p>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-2">
                                        <AccordionTrigger className="text-md items-center text-gray-800">Are gluten-free or vegan bakery options included in the discount?</AccordionTrigger>
                                        <AccordionContent className="flex flex-col gap-4 text-sm text-gray-500">
                                            <p>
                                                Our flagship product combines cutting-edge technology with sleek
                                                design. Built with premium materials, it offers unparalleled
                                                performance and reliability.
                                            </p>
                                            <p>
                                                Key features include advanced processing capabilities, and an
                                                intuitive user interface designed for both beginners and experts.
                                            </p>
                                        </AccordionContent>
                                    </AccordionItem>

                                </Accordion>
                            </Card>

                            <Card className="px-4 py-2 gap-0">
                                <p className='text-blue-900 font-semibold flex flex-row justify-between mb-2'>Share the Offer  <AiTwotonePushpin size={20} /></p>
                                <Code showCopyButton variant="outline" className="w-full">{currentPath || 'Loading...'}</Code>
                            </Card>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default FoodieFriday

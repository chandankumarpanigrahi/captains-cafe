"use client"
import React from 'react'
import SubBanner from '@/components/common/sub banner'

const TermsAndConditions = () => {
    return (
        <>
            <SubBanner
                title="Terms & Conditions"
                breadcrumbItems={[
                    { label: "Terms & Conditions" }
                ]}
            />
            <div className='container py-10'>

                {/* Heading and Description */}
                <div className="flex flex-col px-0 md:px-20 lg:px-80 w-full mb-16">
                    <h1 className='text-[#0E467D] dark:text-white text-3xl md:text-4xl font-bold mb-3 text-center'>Have Questions? We&apos;re Here to Help!</h1>
                    <p className='text-[#374F67] dark:text-gray-300 text-md md:text-lg text-center'>At Captain&apos;s Cafe, we strive to provide a seamless and enjoyable experience for all our guests. These Terms & Conditions outline the rules and guidelines for using our services, including reservations, dining, and online interactions. By accessing our services, you agree to comply with these terms. Please read them carefully.</p>
                </div>

                <h1 className='text-2xl font-semibold text-amber-900 dark:text-orange-300 mb-3'>Terms & Conditions</h1>
                <div className="w-full text-md flex gap-y-4 flex-col text-sky-800 dark:text-gray-300">
                    <ol className="list-decimal text-sm lg:text-md list-inside space-y-4">
                        <li className="flex flex-col">
                            <h2 className="font-semibold">1. Introduction</h2>
                            <p className="pl-4">Welcome to Captain's Cafe. These Terms & Conditions govern your use of our website, mobile app, reservation system, and in-person dining services. By using our services, you agree to these terms.</p>
                        </li>
                        <li className="flex flex-col">
                            <h2 className="font-semibold">2. Reservations & Cancellations</h2>
                            <ul className="list-disc pl-8">
                                <li>Reservations can be made online, via phone, or in person.</li>
                                <li>We recommend arriving on time; delays beyond 30 minutes may result in forfeiture of your table.</li>
                                <li>For cancellations, please notify us at least 2 hours in advance to avoid penalties.</li>
                                <li>No-shows may be subject to a cancellation fee.</li>
                            </ul>
                        </li>
                        <li className="flex flex-col">
                            <h2 className="font-semibold">3. Dining Policies</h2>
                            <ul className="list-disc pl-8">
                                <li>Outside food and beverages are not permitted.</li>
                                <li>Special dietary requests should be communicated in advance.</li>
                                <li>We reserve the right to refuse service for inappropriate behavior.</li>
                            </ul>
                        </li>
                        <li className="flex flex-col">
                            <h2 className="font-semibold">4. Payments & Refunds</h2>
                            <ul className="list-disc pl-8">
                                <li>All payments must be made in the accepted currencies (cash/card/digital payments).</li>
                                <li>Refunds, if applicable, will be processed within 5-7 business days.</li>
                                <li>Promotional offers and discounts cannot be combined unless specified.</li>
                            </ul>
                        </li>
                        <li className="flex flex-col">
                            <h2 className="font-semibold">5. Liability & Safety</h2>
                            <ul className="list-disc pl-8">
                                <li>Captain's Cafe is not responsible for lost or stolen personal belongings.</li>
                                <li>Guests are expected to follow safety guidelines while on the premises.</li>
                                <li>We reserve the right to modify services due to unforeseen circumstances (e.g., weather, maintenance).</li>
                            </ul>
                        </li>
                        <li className="flex flex-col">
                            <h2 className="font-semibold">6. Intellectual Property</h2>
                            <p className="pl-4">All content (logos, menus, website design) is the property of Captain's Cafe and may not be reproduced without permission.</p>
                        </li>
                        <li className="flex flex-col">
                            <h2 className="font-semibold">7. Changes to Terms</h2>
                            <p className="pl-4">We may update these Terms & Conditions periodically. The latest version will always be available on our website.</p>
                        </li>
                        <li className="flex flex-col">
                            <h2 className="font-semibold">8. Governing Law</h2>
                            <p className="pl-4">These terms are governed by the laws of [Your Country/State]. Any disputes will be resolved in the appropriate jurisdiction.</p>
                        </li>
                        <li className="flex flex-col">
                            <h2 className="font-semibold">9. Contact Us</h2>
                            <p className="pl-4">For any inquiries, please reach out to us at contact@captainscafe.com.</p>
                        </li>
                    </ol>
                </div>
            </div>
        </>
    )
}

export default TermsAndConditions
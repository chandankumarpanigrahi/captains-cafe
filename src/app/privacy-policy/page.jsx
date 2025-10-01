"use client"
import React from 'react'
import SubBanner from '@/components/common/sub banner'

const PrivacyPolicy = () => {
    return (
        <>
            <SubBanner
                title="Privacy Policy"
                breadcrumbItems={[
                    { label: "Privacy Policy" }
                ]}
            />
            <div className='container py-10'>

                {/* Heading and Description */}
                <div className="flex flex-col px-0 md:px-20 lg:px-80 w-full mb-16">
                    <h1 className='text-[#0E467D] dark:text-white text-3xl md:text-4xl font-bold mb-3 text-center'>Have Concerns? We&apos;re Here to Help!</h1>
                    <p className='text-[#374F67] dark:text-gray-300 text-md md:text-lg text-center'>At Captain&apos;s Cafe, your privacy is our priority. Our privacy policy outlines how we collect, use, and protect your personal information. We are committed to transparency and ensuring that your data is handled with care. Explore our policy to understand your rights and how we safeguard your information.</p>
                </div>

                <h1 className='text-2xl font-semibold text-amber-900 dark:text-orange-300 mb-3'>Privacy Policy</h1>
                <div className="w-full text-md flex gap-y-4 flex-col text-sky-800 dark:text-gray-300">
                    <ol className="list-decimal text-sm lg:text-md list-inside space-y-4">
                        <li className="flex flex-col">
                            <h2 className="font-semibold">1. Introduction</h2>
                            <p className="pl-4">Welcome to Captain's Cafe. We prioritize your privacy and are dedicated to safeguarding your personal information while being transparent about how we collect, use, and protect your data.</p>
                        </li>
                        <li className="flex flex-col">
                            <h2 className="font-semibold">2. Information We Collect</h2>
                            <ul className="list-disc pl-8">
                                <li>Personal details (name, email, phone number, etc.).</li>
                                <li>Reservation and dining history.</li>
                                <li>Payment information for transactions.</li>
                                <li>Website usage data through cookies and analytics.</li>
                            </ul>
                        </li>
                        <li className="flex flex-col">
                            <h2 className="font-semibold">3. How We Use Your Information</h2>
                            <ul className="list-disc pl-8">
                                <li>To enhance and provide our services.</li>
                                <li>For reservation confirmations and reminders.</li>
                                <li>To securely process payments and transactions.</li>
                                <li>To send promotional offers (with your consent).</li>
                            </ul>
                        </li>
                        <li className="flex flex-col">
                            <h2 className="font-semibold">4. Data Security</h2>
                            <p className="pl-4">We employ industry-standard security measures to protect your information. However, please note that no online platform can guarantee complete security.</p>
                        </li>
                        <li className="flex flex-col">
                            <h2 className="font-semibold">5. Third-Party Sharing</h2>
                            <p className="pl-4">We do not sell or trade your personal information. We may share it with trusted partners solely for service-related purposes.</p>
                        </li>
                        <li className="flex flex-col">
                            <h2 className="font-semibold">6. Your Rights</h2>
                            <p className="pl-4">You can request access to your personal information.
                                You may opt out of marketing communications at any time.
                                You can request the deletion of your data, subject to legal obligations.</p>
                        </li>
                        <li className="flex flex-col">
                            <h2 className="font-semibold">7. Updates to This Policy</h2>
                            <p className="pl-4">We may update this policy from time to time. Please check this page for any changes.</p>
                        </li>
                        <li className="flex flex-col">
                            <h2 className="font-semibold">8. Contact Us</h2>
                            <p className="pl-4">For any inquiries, please reach out to us at contact@captainscafe.com.</p>
                        </li>
                    </ol>
                </div>
            </div>
        </>
    )
}

export default PrivacyPolicy

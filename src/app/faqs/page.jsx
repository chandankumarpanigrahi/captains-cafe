"use client"
import React from 'react'
import SubBanner from '@/components/common/sub banner'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const TermsAndConditions = () => {
    return (
        <>
            <SubBanner
                title="Frequently Asked Questions"
                breadcrumbItems={[
                    { label: "FAQs" }
                ]}
            />
            <div className='container py-10'>

                {/* Heading and Description */}
                <div className="flex flex-col px-0 md:px-20 lg:px-80 w-full mb-16">
                    <h1 className='color-primary text-3xl md:text-4xl font-bold mb-3 text-center'>Got Questions? We&apos;ve Got Answers!</h1>
                    <p className='text-[#374F67] text-md md:text-lg text-center'>At Captain&apos;s Cafe, we believe in providing clarity and support. Our FAQs are designed to help you navigate our services, understand our mission, and find the answers you need. Join us in creating memorable experiences!</p>
                </div>

                <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue="item-1"
                >

                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-md items-center text-amber-900">Do you offer a complimentary trial?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-sm text-gray-500">
                            <p>Absolutely! You can enjoy a complimentary 30-day trial. Additionally, we offer a personalized 30-minute onboarding call to help you get started quickly.</p>
                        </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="billing-history">
                        <AccordionTrigger className="text-md items-center text-amber-900">How do I access my billing history?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-sm text-gray-500">
                            <p>You can view your billing history by logging into your account on our website and navigating to the "Billing" section. All your past invoices and payment records are available for download.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="payment-method">
                        <AccordionTrigger className="text-md items-center text-amber-900">Can I change my payment method at any time?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-sm text-gray-500">
                            <p>Yes, you can update your payment method anytime from your account settings. Simply go to the "Payment Methods" section to add, remove, or update your preferred payment option.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="late-fees">
                        <AccordionTrigger className="text-md items-center text-amber-900">Are there any fees for late payments?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-sm text-gray-500">
                            <p>We provide a 7-day grace period for payments. A late fee of 5% may be applied if payment is not received after this period. We'll send reminders before any fees are charged.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="plan-limits">
                        <AccordionTrigger className="text-md items-center text-amber-900">What happens if I exceed my plan's limits?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-sm text-gray-500">
                            <p>If you exceed your plan limits, we'll notify you and offer options to upgrade. In most cases, service continues uninterrupted while we work with you to find the right solution.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="trial-period">
                        <AccordionTrigger className="text-md items-center text-amber-900">Is there a trial period before subscribing?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-sm text-gray-500">
                            <p>Absolutely! We offer a 30-day free trial for all new customers. No credit card required to start. You'll have full access to all features during the trial period.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="reset-password">
                        <AccordionTrigger className="text-md items-center text-amber-900">How do I reset my password?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-sm text-gray-500">
                            <p>Click "Forgot Password" on the login page and enter your email address. We'll send you a secure link to reset your password. The link expires after 24 hours for security.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="refund-policy">
                        <AccordionTrigger className="text-md items-center text-amber-900">Can I get a refund for unused services?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-sm text-gray-500">
                            <p>We offer prorated refunds for unused portions of your subscription if cancelled within 14 days of payment. Contact our support team for assistance with refund requests.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="support-options">
                        <AccordionTrigger className="text-md items-center text-amber-900">What support options are available with my plan?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-sm text-gray-500">
                            <p>All plans include email support with 24-hour response time. Premium plans add live chat and phone support. Enterprise plans include dedicated account management.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="annual-discounts">
                        <AccordionTrigger className="text-md items-center text-amber-900">Are there discounts for annual subscriptions?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-sm text-gray-500">
                            <p>Yes! Annual subscriptions save you 20% compared to monthly billing. You can switch to annual billing anytime from your account settings.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="multiple-devices">
                        <AccordionTrigger className="text-md items-center text-amber-900">Can I use my subscription on multiple devices?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-sm text-gray-500">
                            <p>Your subscription can be used on up to 3 devices simultaneously. For additional devices, consider upgrading to our Family or Business plans which offer more connections.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="privacy">
                        <AccordionTrigger className="text-md items-center text-amber-900">Is my personal information kept private?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-sm text-gray-500">
                            <p>We take privacy seriously. Your personal information is encrypted and never sold to third parties. Read our detailed Privacy Policy for complete information.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="technical-issue">
                        <AccordionTrigger className="text-md items-center text-amber-900">How do I report a technical issue?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-sm text-gray-500">
                            <p>Contact our technical support team via email at support@captainscafe.com or use the "Report Issue" form in your account dashboard. We typically respond within 2 hours.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="plan-features">
                        <AccordionTrigger className="text-md items-center text-amber-900">What features are included in the different plans?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-sm text-gray-500">
                            <p>Visit our Pricing page for a detailed feature comparison. Basic includes core features, Premium adds advanced analytics, and Enterprise offers custom solutions and priority support.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="pause-subscription">
                        <AccordionTrigger className="text-md items-center text-amber-900">Can I pause my subscription temporarily?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-sm text-gray-500">
                            <p>Yes, you can pause your subscription for up to 3 months once per year. During the pause, your data is preserved but services are suspended. Contact support to arrange a pause.</p>
                        </AccordionContent>
                    </AccordionItem>

                </Accordion>

            </div>
        </>
    )
}

export default TermsAndConditions
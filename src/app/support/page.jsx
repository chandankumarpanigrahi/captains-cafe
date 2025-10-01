import React from 'react'
import { LiaFacebook } from "react-icons/lia";
import { LiaInstagram } from "react-icons/lia";
import styles from "./style.module.css"
import EmblaCarouselMultiple from '@/components/design/fade image';

// Icons
import { IoMdCall } from "react-icons/io";

const ContactUs = () => {
    return (
        <>
            <div className='container py-10'>

                {/* Heading and Description */}
                <div className="flex flex-col px-0 md:px-20 lg:px-80 w-full mb-16">
                    <h1 className='text-[#0E467D] dark:text-white text-3xl md:text-4xl font-bold mb-3 text-center'>We&apos;re Here to Help!</h1>
                    <p className='text-[#374F67] dark:text-gray-300 text-md md:text-lg text-center'>Our team is ready to assist you with any questions you may have. We can't wait to hear from you!</p>
                </div>

                {/* Support Numbers */}
                <div className="flex flex-col lg:flex-row gap-y-5 mb-20 w-full justify-evenly">
                    <div className="w-full lg:w-1/4 flex flex-col bg-green-50 dark:bg-green-950 border-2 border-green-600 rounded-lg overflow-hidden">
                        <div className='py-6 pr-2 pl-24 text-2xl lg:text-3xl text-green-600 dark:text-green-100 font-light'><strong className='font-bold'>Order</strong> Related Support</div>
                        <div className="bg-green-600 p-2 text-green-40 flex flex-row justify-center items-center gap-3 text-white">
                            <IoMdCall size={32} className='opacity-70'/>
                            <p className='text-2xl lg:text-3xl font-bold'>1800 159 159</p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/4 flex flex-col bg-blue-50 dark:bg-blue-950 border-2 border-blue-900 rounded-lg overflow-hidden">
                        <div className='py-6 pr-2 pl-24 text-2xl lg:text-3xl text-blue-900 dark:text-blue-100 font-light'><strong className='font-bold'>Website</strong> Related Support</div>
                        <div className="bg-blue-900 p-2 text-blue-40 flex flex-row justify-center items-center gap-3 text-white">
                            <IoMdCall size={32} className='opacity-70'/>
                            <p className='text-2xl lg:text-3xl font-bold'>+91 89596 89623</p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/4 flex flex-col bg-orange-50 dark:bg-orange-950 border-2 border-orange-900 rounded-lg overflow-hidden">
                        <div className='py-6 pr-2 pl-24 text-2xl lg:text-3xl text-orange-900 dark:text-orange-100 font-light'><strong className='font-bold'>Cafe</strong> Related Support</div>
                        <div className="bg-orange-900 p-2 text-orange-40 flex flex-row justify-center items-center gap-3 text-white">
                            <IoMdCall size={32} className='opacity-70'/>
                            <p className='text-2xl lg:text-3xl font-bold'>1800 066 011</p>
                        </div>
                    </div>
                </div>


                <div className='flex flex-col-reverse lg:flex-row items-center'>
                    <div className='w-full lg:w-3/5 p-0 lg:px-12'>
                        <div className="w-full">
                            <EmblaCarouselMultiple />
                        </div>
                    </div>
                    <div className='w-full lg:w-2/5 mb-12 lg:mb-0'>
                        <section className='mb-12'>
                            <h3 className='text-3xl text-[#0E467D] dark:text-white font-semibold mb-3'>Visit Us</h3>
                            <ol className='list-decimal pl-5 flex flex-col gap-2 text-gray-700 dark:text-blue-200 text-lg'>
                                <li><a href="#" target='_blank'>Ekamra Kanan Road, near Chilika Fresh, Rental Colony, IRC Village, Nayapalli, Bhubaneswar, Odisha 751011</a></li>
                                <li><a href="#" target='_blank'>Beside Government Veterinary Hospital, Maharishi College Rd, Saheed Nagar, Bhubaneswar, Odisha 751007</a></li>
                            </ol>
                        </section>
                        <section className='mb-12'>
                            <h3 className='text-3xl text-[#0E467D] dark:text-white font-semibold mb-3'>Call Us</h3>
                            <ol className='flex flex-col gap-1 text-gray-700 dark:text-blue-200 text-lg'>
                                <li><a href="tel:+918144774349" target='_blank'>+91 81447 74349</a></li>
                            </ol>
                        </section>
                        <section className='mb-12'>
                            <h3 className='text-3xl text-[#0E467D] dark:text-white font-semibold mb-3'>Mail Us</h3>
                            <ol className='flex flex-col gap-1 text-gray-700 dark:text-blue-200 text-lg'>
                                <li><a href="mailto:contact@thecaptainscafe.co.uk" target='_blank'>contact@thecaptainscafe.co.uk</a></li>
                            </ol>
                        </section>
                        <section className='mb-10'>
                            <h3 className='text-3xl text-[#0E467D] dark:text-white font-semibold mb-3'>Café Hours</h3>
                            <ol className='flex flex-col gap-1 text-gray-700 dark:text-blue-200 text-lg'>
                                <li>Monday to Sunday: 8:30 am - 10 pm</li>
                            </ol>
                        </section>
                        <section className='flex flex-row gap-2'>
                            <a href='#' target='_blank' className={`${styles.fb_icon}  p-1 text-white cursor-pointer rounded-full`}><LiaFacebook size={60} /></a>
                            <a href='https://www.instagram.com/thecaptainscafe.india' target='_blank' className={`${styles.insta_icon}  p-1 text-white cursor-pointer rounded-full`}><LiaInstagram size={60} className={styles.icon} /></a>
                        </section>
                    </div>

                </div>
            </div>

        </>
    )
}

export default ContactUs

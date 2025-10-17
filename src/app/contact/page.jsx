import React from 'react'
import { LiaFacebook } from "react-icons/lia";
import { LiaInstagram } from "react-icons/lia";
import styles from "./style.module.css"
import EmblaCarouselMultiple from '@/components/design/fade image';
import MapsView from '@/components/common/mapsView';

const ContactUs = () => {
    return (
        <>
            <div className='container py-10'>

                {/* Heading and Description */}
                <div className="flex flex-col px-0 md:px-20 lg:px-80 w-full mb-16">
                    <h1 className='text-[#0E467D] dark:text-white text-3xl md:text-4xl font-bold mb-3 text-center'>Get in Touch</h1>
                    <p className='text-[#374F67] dark:text-gray-300 text-md md:text-lg text-center'>We're here to help and answer any question you might have. We look forward to hearing from you.</p>
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
                                <li><a href="#" target='_blank' aria-label="CRPF Cafe">Ekamra Kanan Road, near Chilika Fresh, Rental Colony, IRC Village, Nayapalli, Bhubaneswar, Odisha 751011</a></li>
                                <li><a href="#" target='_blank' aria-label="Saheed Nagar Cafe">Beside Government Veterinary Hospital, Maharishi College Rd, Saheed Nagar, Bhubaneswar, Odisha 751007</a></li>
                            </ol>
                        </section>
                        <section className='mb-12'>
                            <h3 className='text-3xl text-[#0E467D] dark:text-white font-semibold mb-3'>Call Us</h3>
                            <ol className='flex flex-col gap-1 text-gray-700 dark:text-blue-200 text-lg'>
                                <li><a href="tel:+918144774349" target='_blank' aria-label="Calling Number">+91 81447 74349</a></li>
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
                            <a href='#' target='_blank' aria-label="Facebok" className={`${styles.fb_icon}  p-1 text-white cursor-pointer rounded-full`}><LiaFacebook size={60} /></a>
                            <a href='https://www.instagram.com/thecaptainscafe.india' target='_blank' aria-label="Instagram" className={`${styles.insta_icon}  p-1 text-white cursor-pointer rounded-full`}><LiaInstagram size={60} className={styles.icon} /></a>
                        </section>
                    </div>

                </div>
            </div>
            <div className="w-full flex bg-[#220F02] py-12 relative">
                <div className='container  mx-auto relative'>
                    <div className="flex py-10 flex-col lg:flex-row relative z-2">
                        <div className="w-full lg:w-1/2 flex flex-col gap-10 text-white">
                            <h1 className='text-5xl p-4 leading-normal text-center lg:text-left'>Have any Query! <br />Let&apos;s discuss </h1>
                            <p className='p-4'>Thank you for getting in touch! <br /> Kindly Fill the form, have a great day!</p>
                        </div>
                        <div className="w-full lg:w-1/2 flex flex-wrap gap-y-6 text-white">
                            <div className="w-1/2 pr-3">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full bg-transparent border-b border-amber-50 py-2 focus:outline-none"
                                />
                            </div>
                            <div className="w-1/2 pl-3">
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full bg-transparent border-b border-amber-50 py-2 focus:outline-none"
                                />
                            </div>

                            <div className="w-1/2 pr-3">
                                <input
                                    type="number"
                                    placeholder="Phone Number"
                                    className="w-full bg-transparent border-b border-amber-50 py-2 focus:outline-none"
                                />
                            </div>
                            <div className="w-1/2 pl-3">
                                <select
                                    className="w-full bg-transparent border-b border-amber-50 py-2 focus:outline-none"
                                >
                                    <option className='text-gray-700' value="">Country</option>
                                    <option className='text-gray-700' value="India">India</option>
                                    <option className='text-gray-700' value="USA">USA</option>
                                </select>
                            </div>

                            <div className="w-1/2 pr-3">
                                <input
                                    type="text"
                                    placeholder="Company Name"
                                    className="w-full bg-transparent border-b border-amber-50 py-2 focus:outline-none"
                                />
                            </div>
                            <div className="w-1/2 pl-3">
                                <select
                                    className="w-full bg-transparent border-b border-amber-50 py-2 focus:outline-none"
                                >
                                    <option className='text-gray-700' value="">Interested in</option>
                                    <option className='text-gray-700' value="service1">Service 1</option>
                                    <option className='text-gray-700' value="service2">Service 2</option>
                                </select>
                            </div>

                            <div className="w-full">
                                <textarea
                                    placeholder="Message"
                                    rows="3"
                                    className="w-full bg-transparent border-b border-amber-50 py-2 focus:outline-none"
                                ></textarea>
                            </div>

                            <div className="w-full mt-4">
                                <button className="bg-white text-black px-6 py-2 rounded">
                                    SUBMIT
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className={`${styles.contact_bg_text} absolute`}>Contact Us</div>
                </div>
            </div>
            <MapsView />
        </>
    )
}

export default ContactUs

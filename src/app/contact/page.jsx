import React from 'react'
import { LiaFacebook } from "react-icons/lia";
import { LiaInstagram } from "react-icons/lia";
import styles from "./style.module.css"

const ContactUs = () => {
    return (
        <div className='container py-10'>

            {/* Heading and Description */}
            <div className="flex flex-col px-0 md:px-20 lg:px-80 w-full mb-16">
                <h1 className='color-primary text-3xl md:text-4xl font-bold mb-3 text-center'>Get in Touch</h1>
                <p className='text-[#374F67] text-md md:text-lg text-center'>We're here to help and answer any question you might have. We look forward to hearing from you.</p>
            </div>

            <div className='flex flex-col-reverse lg:flex-row items-center'>

                <div className='w-3/5'>
                    <div>
                        <div>

                        </div>
                        <div>

                        </div>
                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>

                <div className='w-2/5'>
                    <section className='mb-12'>
                        <h3 className='text-3xl text-blue-900 font-semibold mb-3'>Visit Us</h3>
                        <ol className='list-decimal pl-5 flex flex-col gap-2 text-gray-700 text-lg'>
                            <li><a href="#" target='_blank'>Ekamra Kanan Road, near Chilika Fresh, Rental Colony, IRC Village, Nayapalli, Bhubaneswar, Odisha 751011</a></li>
                            <li><a href="#" target='_blank'>Beside Government Veterinary Hospital, Maharishi College Rd, Saheed Nagar, Bhubaneswar, Odisha 751007</a></li>
                        </ol>
                    </section>
                    <section className='mb-12'>
                        <h3 className='text-3xl text-blue-900 font-semibold mb-3'>Call Us</h3>
                        <ol className='flex flex-col gap-1 text-gray-700 text-lg'>
                            <li><a href="tel:+918144774349" target='_blank'>+91 81447 74349</a></li>
                        </ol>
                    </section>
                    <section className='mb-12'>
                        <h3 className='text-3xl text-blue-900 font-semibold mb-3'>Mail Us</h3>
                        <ol className='flex flex-col gap-1 text-gray-700 text-lg'>
                            <li><a href="mailto:contact@thecaptainscafe.co.uk" target='_blank'>contact@thecaptainscafe.co.uk</a></li>
                        </ol>
                    </section>
                    <section className='mb-10'>
                        <h3 className='text-3xl text-blue-900 font-semibold mb-3'>Café Hours</h3>
                        <ol className='flex flex-col gap-1 text-gray-700 text-lg'>
                            <li>Monday to Sunday: 8:30 am - 10 pm</li>
                        </ol>
                    </section>
                    <section className='flex flex-row gap-2'>
                        <a href='#' target='_blank' className={`${styles.fb_icon}  p-1 text-white cursor-pointer rounded-full`}><LiaFacebook size={60} /></a>
                        <a href='https://www.instagram.com/thecaptainscafe.india' target='_blank' className={`${styles.insta_icon}  p-1 text-white cursor-pointer rounded-full`}><LiaInstagram size={60} className={styles.icon}/></a>
                    </section>
                </div>

            </div>

        </div>
    )
}

export default ContactUs

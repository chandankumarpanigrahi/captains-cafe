import React from 'react'
import styles from "./style.module.css"
import Image from 'next/image'
import Button from '@/components/common/button';
import BakeryImage from "../../../assets/images/services/bakery.png"
import CateringImage from "../../../assets/images/services/catering.png"
import CafeImage from "../../../assets/images/services/cafe.png"
import anchor from "../../../assets/images/anchor.png"

const Testimonials = () => {
    return (
        <div className='container animate__animated animate__fadeInUp mb-32'>
            <div className="flex flex-col lg:flex-row justify-center items-center">
                <h1 className='color-primary text-4xl font-bold mb-10 text-center w-2/5'>What Our Happy and Fulfilled Customer Say's About Us</h1>
                <div className={`${styles.testimonials} flex flex-col pl-0 pr-0 md:pl-16 md:pr-12`}>

                </div>
            </div>
        </div>
    )
}

export default Testimonials
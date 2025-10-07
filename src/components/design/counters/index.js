import React from 'react'
import styles from "./style.module.css";
import { FaRegClock } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdCall } from "react-icons/md";

const Counters = () => {
    return (
        <div className="container mb-3 px-2 sm:px-0 lg:mb-6 animate__animated animate__slideInUp relative z-16">
            <div className={`${styles.all_cards} gap-6 relative -top-10 flex flex-col lg:flex-row w-full`}>
                <div className={`${styles.card_area} bg-[#f5f7ff] dark:bg-blue-950 flex flex-col px-12 py-5 justify-center items-center w-full lg:w-fit`}>
                    <div className={`${styles.card_icon} mb-3`}>
                        <FaRegClock className='text-blue-900 dark:text-blue-300'/>
                    </div>
                    <h2 className='text-xl mb-0 whitespace-nowrap text-[#2F2F2F] dark:text-white'>09:00 am - 10:00 pm</h2>
                    <p className='text-[#7A7A7A] dark:text-gray-300'>Open Hours</p>
                </div>
                <div className={`${styles.card_area} bg-[#fff8f2] dark:bg-amber-950 flex flex-col px-12 py-5 justify-center items-center w-full`}>
                    <div className={`${styles.card_icon} mb-3`}>
                        <FaMapLocationDot className='text-yellow-950 dark:text-orange-200'/>
                    </div>
                    <h2 className='text-xl mb-0 whitespace-nowrap text-[#2F2F2F] dark:text-white'>Bhubaneswar, Odisha</h2>
                    <p className='text-[#7A7A7A] dark:text-gray-300'>Get Direction</p>
                </div>
                <div className={`${styles.card_area} bg-[#f5f7ff] dark:bg-blue-950 flex flex-col px-12 py-5 justify-center items-center w-full lg:w-fit`}>
                    <div className={`${styles.card_icon} mb-3`}>
                        <MdCall className='text-blue-900 dark:text-blue-300'/>
                    </div>
                    <h2 className='text-xl mb-0 whitespace-nowrap text-[#2F2F2F] dark:text-white'>+91 81447 74349</h2>
                    <p className='text-[#7A7A7A] dark:text-gray-300'>Call Us</p>
                </div>
            </div>
        </div>
    )
}
export default Counters
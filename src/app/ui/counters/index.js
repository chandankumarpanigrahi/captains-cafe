import React from 'react'
import styles from "./style.module.css";
import { FaRegClock } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdCall } from "react-icons/md";

const Counters = () => {
    return (
        <div className="container mb-3 px-2 sm:px-0 lg:mb-">
            <div className={`${styles.all_cards}  gap-6 relative flex flex-col lg:flex-row w-full`}>
                <div className={`${styles.card_area} bg-white flex flex-col px-12 py-5 justify-center items-center w-full lg:w-fit`}>
                    <div className={`${styles.card_icon} mb-3`}>
                        <FaRegClock className='text-blue-900' />
                    </div>
                    <h2 className='text-xl mb-0 whitespace-nowrap'>09:00 am - 10:00 pm</h2>
                    <p>Open Hours</p>
                </div>
                <div className={`${styles.card_area} bg-white flex flex-col px-12 py-5 justify-center items-center w-full`}>
                    <div className={`${styles.card_icon} mb-3`}>
                        <FaMapLocationDot className='text-yellow-950' />
                    </div>
                    <h2 className='text-xl mb-0 whitespace-nowrap'>Bhubaneswar, Odisha</h2>
                    <p>Get Direction</p>
                </div>
                <div className={`${styles.card_area} bg-white flex flex-col px-12 py-5 justify-center items-center w-full lg:w-fit`}>
                    <div className={`${styles.card_icon} mb-3`}>
                        <MdCall className='text-blue-900' />
                    </div>
                    <h2 className='text-xl mb-0 whitespace-nowrap'>+91 81447 74349</h2>
                    <p>Call Us</p>
                </div>
            </div>
        </div>
    )
}

export default Counters
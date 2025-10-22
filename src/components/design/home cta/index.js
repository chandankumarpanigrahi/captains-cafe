import React from 'react'
import styles from "./style.module.css"
import Image from 'next/image'
import plateImage from "../../../assets/images/plate_2.png"
import plateImageLeaves from "../../../assets/images/plate_2_leaves.png"
import plateImageOuterCircle from "../../../assets/images/plate_2_outer_circle.png"
import plateImageInnerCircle from "../../../assets/images/plate_2_inner_circle.png"

const HomeCta = () => {
    return (
        <div className='container animate__animated animate__fadeInUp mb-6 md:mb-18'>
            <div className={`${styles.background_design} py-4 px-6 md:py-6 md:px-10 rounded-xl md:rounded-3xl relative flex flex-col justify-center items-start`}>
                <div className="w-full md:w-3/5 flex flex-col items-center md:items-start gap-4">
                    <p className={`${styles.main_text} text-white text-center md:text-left opacity-80 leading-tight p-0 md:pr-10`}>Experience the perfect blend of taste, quality, and care - because you deserve nothing but the best.</p>
                    <button className='w-min whitespace-nowrap border-0 bg-white rounded-full py-2 px-4 text-blue-900 font-bold'>Contact Us Now</button>
                </div>
                <div className={`${styles.plate_design} absolute overflow-hidden`}>
                    <Image className='absolute inset-0 w-full h-full object-cover z-7' src={plateImage} alt='Plate Image'></Image>
                    <Image className='absolute inset-0 w-full h-full object-cover z-8' src={plateImageLeaves} alt='Plate Image Leaves'></Image>
                    <Image className='absolute inset-0 w-full h-full object-cover z-6' src={plateImageOuterCircle} alt='Plate Image Outer Circle'></Image>
                    <Image className='absolute inset-0 w-full h-full object-cover z-5' src={plateImageInnerCircle} alt='Plate Image Inner Circle'></Image>
                </div>
            </div>
        </div>
    )
}

export default HomeCta
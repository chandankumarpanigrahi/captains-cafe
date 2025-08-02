import React from 'react'
import styles from "./style.module.css"
import Image from 'next/image'
import plateImage from "../../../assets/images/plate_2.png"
import plateImageLeaves from "../../../assets/images/plate_2_leaves.png"
import plateImageOuterCircle from "../../../assets/images/plate_2_outer_circle.png"
import plateImageInnerCircle from "../../../assets/images/plate_2_inner_circle.png"

const HomeCta = () => {
    return (
        <div className='container'>
            <div className={`${styles.background_design} py-6 px-10 rounded-3xl relative flex flex-col justify-center items-start`}>
                <div className="w-full lg:w-3/5 flex flex-col gap-4">
                    <p className={`${styles.main_text} text-white opacity-80 leading-tight pr-10`}>Experience the perfect blend of taste, quality, and care - because you deserve nothing but the best.</p>
                    <button className='w-min whitespace-nowrap border-0 bg-white rounded-full py-2 px-4 text-blue-900 font-bold'>Contact Us Now</button>
                </div>
                <div className={`${styles.plate_design}`}>
                    <Image src={plateImage} alt='Plate Image'></Image>
                    <Image src={plateImageLeaves} alt='Plate Image Leaves'></Image>
                    <Image src={plateImageOuterCircle} alt='Plate Image Outer Circle'></Image>
                    <Image src={plateImageInnerCircle} alt='Plate Image Inner Circle'></Image>
                </div>
            </div>
        </div>
    )
}

export default HomeCta
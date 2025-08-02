import React from 'react'
import styles from "./style.module.css"
import Image from 'next/image'
import plateImage from "../../../assets/images/plate_1.png"
import plateImageShadow from "../../../assets/images/plate_1_shadow.png"
import plateImageLeaves from "../../../assets/images/plate_1_leaves.png"
import { PiChefHatFill } from "react-icons/pi";
import { MdShoppingCart } from "react-icons/md";
import { MdFastfood } from "react-icons/md";
import { MdRoomService } from "react-icons/md";

const WhyChooseUs = () => {
    return (
        <div className='container'>
            <div className="flex flex-col lg:flex-row items-center h-full">
                <div className="w-full lg:w-1/3 py-8 overflow-hidden lg:overflow-visible lg:p-0 h-full">
                    <div className={`${styles.plate_design}`}>
                        <Image src={plateImage} alt='Plate Image'></Image>
                        <Image src={plateImageShadow} alt='Plate Image Shadow'></Image>
                        <Image src={plateImageLeaves} alt='Plate Image Leaves'></Image>
                    </div>
                </div>
                <div className="w-full lg:w-2/3 h-full pl-0 lg:pl-20">
                    <div className="flex flex-col">
                        <h1 className='text-2xl md:text-3xl font-bold color-primary mb-4'>The Captain&apos;s Café - Sail Into Flavors.</h1>
                        <div className="flex flex-row flex-wrap">
                            <div className="w-full sm:w-1/2 mb-3 sm:mb-0 sm:pr-4 sm:pt-4 sm:pb-4">
                                <div className="flex flex-row justify-start gap-4">
                                    <PiChefHatFill className={`${styles.icon} text-yellow-900`}/>
                                    <div className="flex flex-col">
                                        <h5 className='text-xl sm:text-2xl font-semibold color-primary mb-2'>Global Flavors</h5>
                                        <p className={`${styles.card_text} text-md`}>Our team of master chefs brings years of experience and creativity to every dish, ensuring each bite is a masterpiece of flavor and presentation.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2 mb-3 sm:mb-0 sm:pl-4 sm:pt-4 sm:pb-4">
                                <div className="flex flex-row justify-start gap-4">
                                    <MdShoppingCart className={`${styles.icon} text-yellow-900`}/>
                                    <div className="flex flex-col">
                                        <h5 className='text-xl sm:text-2xl font-semibold color-primary mb-2'>Online Order</h5>
                                        <p className={`${styles.card_text} text-md`}>Enjoy your favorite dishes from the comfort of your home with our easy and reliable online ordering system as well as from Zomato and Swiggy</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2 mb-3 sm:mb-0 sm:pr-4 sm:pt-4 sm:pb-4">
                                <div className="flex flex-row justify-start gap-4">
                                    <MdFastfood className={`${styles.icon} text-yellow-900`}/>
                                    <div className="flex flex-col">
                                        <h5 className='text-xl sm:text-2xl font-semibold color-primary mb-2'>Quality Food</h5>
                                        <p className={`${styles.card_text} text-md`}>Fresh ingredients, exceptional recipes, and a commitment to quality come together to create meals that delight your senses.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2 mb-3 sm:mb-0 sm:pl-4 sm:pt-4 sm:pb-4">
                                <div className="flex flex-row justify-start gap-4">
                                    <MdRoomService className={`${styles.icon} text-yellow-900`}/>
                                    <div className="flex flex-col">
                                        <h5 className='text-xl sm:text-2xl font-semibold color-primary mb-2'>Best Service</h5>
                                        <p className={`${styles.card_text} text-md`}>We pride ourselves on providing warm, friendly, and attentive service that makes every visit a delightful experience.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs

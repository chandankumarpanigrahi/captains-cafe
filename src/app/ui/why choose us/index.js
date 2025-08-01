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
            <div className="flex flex-col md:flex-row items-center h-full">
                <div className="w-1/3 h-full">
                    <div className={`${styles.plate_design}`}>
                        <Image src={plateImage}></Image>
                        <Image src={plateImageShadow}></Image>
                        <Image src={plateImageLeaves}></Image>
                    </div>
                </div>
                <div className="w-2/3 h-full pl-0 lg:pl-20">
                    <div className="flex flex-col">
                        <h1 className='text-3xl font-bold color-primary mb-4'>The Captain's Café - Sail Into Flavors.</h1>
                        <div className="flex flex-row flex-wrap">
                            <div className="w-1/2 pr-4 pt-4 pb-4">
                                <div className="flex flex-row justify-start gap-4">
                                    <PiChefHatFill className={`${styles.icon} text-yellow-900`}/>
                                    <div className="flex flex-col">
                                        <h5 className='text-2xl font-semibold color-primary mb-2'>Global Flavors</h5>
                                        <p className={`${styles.card_text} text-md`}>Our team of master chefs brings years of experience and creativity to every dish, ensuring each bite is a masterpiece of flavor and presentation.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/2 pl-4 pt-4 pb-4">
                                <div className="flex flex-row justify-start gap-4">
                                    <MdShoppingCart className={`${styles.icon} text-yellow-900`}/>
                                    <div className="flex flex-col">
                                        <h5 className='text-2xl font-semibold color-primary mb-2'>Online Order</h5>
                                        <p className={`${styles.card_text} text-md`}>Enjoy your favorite dishes from the comfort of your home with our easy and reliable online ordering system as well as from Zomato and Swiggy</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/2 pr-4 pt-4 pb-4">
                                <div className="flex flex-row justify-start gap-4">
                                    <MdFastfood className={`${styles.icon} text-yellow-900`}/>
                                    <div className="flex flex-col">
                                        <h5 className='text-2xl font-semibold color-primary mb-2'>Quality Food</h5>
                                        <p className={`${styles.card_text} text-md`}>Fresh ingredients, exceptional recipes, and a commitment to quality come together to create meals that delight your senses.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/2 pl-4 pt-4 pb-4">
                                <div className="flex flex-row justify-start gap-4">
                                    <MdRoomService className={`${styles.icon} text-yellow-900`}/>
                                    <div className="flex flex-col">
                                        <h5 className='text-2xl font-semibold color-primary mb-2'>Best Service</h5>
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

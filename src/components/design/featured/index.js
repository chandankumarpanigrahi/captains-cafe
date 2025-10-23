import React from 'react'
import styles from "./style.module.css"
import Image from 'next/image'
import fork from "../../../assets/images/featured_fork.png"
import featured_bg from "../../../assets/images/featured_bg.png"
import { PiChefHatDuotone } from "react-icons/pi";
import { PiTeaBagDuotone } from "react-icons/pi";
import { CiCoffeeCup } from "react-icons/ci";
import Button from '@/components/common/button';

const Featured = () => {
    return (
        <div className='container animate__animated animate__fadeInUp mb-8'>
            <div className="flex flex-col lg:flex-row items-center">
                <div className="relative lg:w-1/2 pl-8 pt-8 mb-8 lg:mb-0 w-auto">
                    <div className="absolute left-0 top-0">
                        <div className={`${styles.bg_design}`}>
                            {/* <div className={`${styles.bg_texture}`}></div> */}
                            <Image src={featured_bg} alt='featured bg' className='w-full h-full' fill/>
                        </div>
                    </div>
                    <div className={`${styles.featured_content} flex px-4`}>
                        <div className="w-0 sm:w-1/2 flex justify-center items-end">
                            <Image src={fork} alt='Fork Image' className={`${styles.fork_image}`} />
                        </div>
                        <div className="w-full sm:w-1/2 flex flex-col justify-end h-full pb-12">
                            <div className='text-amber-50 text-center md:text-left text-2xl md:text-3xl font-semibold mb-10'>Crafted <br/>with Passion</div>
                            <div className="flex flex-col">
                                <div className="flex flex-row mb-4 pb-4">
                                    <div className={`${styles.featured_icon}`}>
                                        <PiChefHatDuotone className='text-4xl text-white'/>
                                    </div>
                                    <p className='text-amber-50 font-normal text-lg md:text-xl w-8/10 pl-3'>Freshly Prepared with Care</p>
                                </div>
                                
                                <div className="flex flex-row mb-4 pb-4">
                                    <div className={`${styles.featured_icon}`}>
                                        <PiTeaBagDuotone className='text-4xl text-white' />
                                    </div>
                                    <p className='text-amber-50 font-normal text-lg md:text-xl w-8/10 pl-3'>Responsibly Sourced Ingredients</p>
                                </div>

                                <div className="flex flex-row">
                                    <div className={`${styles.featured_icon}`}>
                                        <CiCoffeeCup className='text-4xl text-white' />
                                    </div>
                                    <p className='text-amber-50 font-normal text-lg md:text-xl w-8/10 pl-3'>Flavorful Experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${styles.delight_text} flex flex-col pl-0 pr-0 md:pl-16 md:pr-12`}>
                    <h1 className='text-blue-900 dark:text-white text-4xl font-bold mb-4'>Delight in Every Bite</h1>
                    <p className={`${styles.qoutation} text-[#406990] dark:text-blue-300 relative pr-8 pl-12 mb-6 text-xl w-full sm:w-9/10`}>Savor the difference with every dish we serve.</p>
                    <div className='flex flex-col gap-2 mb-4'>
                        <p className='text-slate-600 dark:text-blue-100 text-lg'>Indulge in our chef-curated dishes made from handpicked, high-quality ingredients. Whether you&apos;re craving something spicy, sweet, or savory - we&apos;ve got something to satisfy every craving.</p>
                        <p className='text-slate-600 dark:text-blue-100 text-lg'>At our café, every dish is a celebration of vegetarian goodness. From comforting classics to exciting new flavors, we serve food that&apos;s nourishing, wholesome, and delicious.</p>
                        <p className='text-slate-600 dark:text-blue-100 text-lg'>We believe in clean, green eating - using only the freshest ingredients sourced locally. Step in for a guilt-free indulgence that delights your palate and uplifts your spirit.</p>
                    </div>
                    <Button text="Explore the Flavors" radiusSide="tr" className={`${styles.featured_button} rounded-tl-3xl rounded-br-3xl w-fit`}/>
                </div>
            </div>
        </div>
    )
}

export default Featured
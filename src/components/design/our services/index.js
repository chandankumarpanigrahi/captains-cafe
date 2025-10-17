import React from 'react'
import styles from "./style.module.css"
import Image from 'next/image'
import Button from '@/components/common/button';
import BakeryImage from "../../../assets/images/services/bakery.png"
import CateringImage from "../../../assets/images/services/catering.png"
import CafeImage from "../../../assets/images/services/cafe.png"
import anchor from "../../../assets/images/anchor.png"

const Services = () => {
    return (
        <div className='container animate__animated animate__fadeInUp mb-8 md:mb-22'>
            <div className="flex flex-col lg:flex-row items-center">
                <div className={`${styles.delight_text} flex flex-col pl-0 pr-0 md:pl-16 md:pr-12`}>
                    <h1 className='text-[#0e467d] dark:text-white text-4xl font-bold mb-10 text-center'>Our Services</h1>
                    <div className='flex flex-col lg:flex-row flex-wrap mb-4'>
                        <div className="w-full lg:w-1/3 mb-8 p-0 lg:pr-4">
                            <div className={`flex flex-col rounded-tl-xl rounded-br-xl border-2 border-color-primary`}>
                                <Image src={BakeryImage} alt='Bakery Image' className={`${styles.card_image} rounded-tl-lg`} />
                                <div className={`${styles.inner_card} relative rounded-br-lg bg-blue-950`}>
                                    <div className={`${styles.details_dark} flex flex-col items-center px-4 py-6 rounded-br-lg`}>
                                        <h1 className="uppercase text-sky-50 text-center text-3xl font-semibold mb-3">BAKERY</h1>
                                        <p className='text-sky-50 text-center font-light text-xl mb-4 w-6/7'>Freshly Baked Delights</p>
                                        <p className='text-center text-sky-50 opacity-80 text-md tracking-wide font-extralight w-full md:w-8/10 mb-6'>Experience the essence of Scotland in every bite. Our bakery offers a variety of handcrafted breads, pastries, and traditional Scottish treats baked daily to perfection. From buttery shortbread to scones served with clotted cream, we bring warmth to your table.</p>
                                    </div>
                                    <Image src={anchor} alt='Anchor Image' className={`${styles.anchor} absolute`}/>
                                    <div className="absolute -bottom-5 w-full flex justify-center items-center z-20">
                                        <Button text="Explore Our Bakery" radiusSide="tr" textColor="color-primary" bgColor="bg-sky-100"  link='/bakery-service' className={`${styles.featured_button} rounded-tl-xl rounded-br-xl font-semibold border-2 border-color-primary`}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/3 mb-8 p-0 lg:px-4 mt-12">
                            <div className={`flex flex-col rounded-tl-xl rounded-br-xl border-2 border-orange-950`}>
                                <Image src={CateringImage} alt='Catering Image' className={`${styles.card_image} rounded-tl-lg`} />
                                <div className={`${styles.inner_card} relative rounded-br-lg bg-orange-100`}>
                                    <div className={`${styles.details_light} flex flex-col items-center px-4 py-6 rounded-br-lg`}>
                                        <h1 className="uppercase text-orange-950 text-center text-3xl font-semibold mb-3">Catering Kitchen</h1>
                                        <p className='text-orange-950 text-center font-light text-xl mb-4 w-6/7'>Bespoke Catering for Every Occasion</p>
                                        <p className='text-center text-orange-950 opacity-80 text-md tracking-wide font-normal w-full md:w-8/10 mb-6'>Hosting a gathering or planning an event? Let our catering kitchen make it memorable. We specialize in creating tailored menus featuring Scottish classics and modern flavors, using only the finest, locally sourced ingredients.</p>
                                    </div>
                                    <Image src={anchor} alt='Anchor Image' className={`${styles.anchor} absolute`}/>
                                    <div className="absolute -bottom-5 w-full flex justify-center items-center z-20">
                                        <Button text="Discover Services" radiusSide="tr" textColor="text-orange-950" bgColor="bg-orange-50"  link='/catering-service' className={`${styles.featured_button} rounded-tl-xl rounded-br-xl font-semibold border-2 border-orange-950`} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/3 mb-8 p-0 lg:pl-4">
                            <div className={`flex flex-col rounded-tl-xl rounded-br-xl border-2 border-color-primary`}>
                                <Image src={CafeImage} alt='Cafe Image' className={`${styles.card_image} rounded-tl-lg`} />
                                <div className={`${styles.inner_card} relative rounded-br-lg bg-blue-950`}>
                                    <div className={`${styles.details_dark} flex flex-col items-center px-4 py-6 rounded-br-lg`}>
                                        <h1 className="uppercase text-sky-50 text-center text-3xl font-semibold mb-3">Cafe Chains</h1>
                                        <p className='text-sky-50 text-center font-light text-xl mb-4 w-6/7'>Your Cozy Corner, Everywhere</p>
                                        <p className='text-center text-sky-50 opacity-80 text-md tracking-wide font-extralight w-full md:w-8/10 mb-6'>From the heart of Scotland to your neighborhood, our cafe chains bring you a comforting experience. Savor signature coffees, teas, and Scottish bites in a warm, inviting atmosphere at any of our locations.</p>
                                    </div>
                                    <Image src={anchor} alt='Anchor Image' className={`${styles.anchor} absolute`}/>
                                    <div className="absolute -bottom-5 w-full flex justify-center items-center z-20">
                                        <Button text="Explore Our Cafe" radiusSide="tr" textColor="color-primary" bgColor="bg-sky-100"  link='/cafe-chain' className={`${styles.featured_button} rounded-tl-xl rounded-br-xl font-semibold border-2 border-color-primary`} />
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

export default Services
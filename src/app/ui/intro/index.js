import React from 'react'
import styles from "./style.module.css"
import Image from 'next/image'
import Image1 from '../../../assets/images/intro_cup.png'

const Intro = () => {
    return (
        <div className={`${styles.intro_section} container mb-8`}>
            <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-5/7">
                    <div className="flex flex-col mb-3">
                        <h1 className='text-3xl font-bold color-primary mb-3'>The Captain's Café - Sail Into Flavors.</h1>
                        <p className={`${styles.text_color} text-lg mb-2 pr-0 lg:pr-5`}>Situated in the vibrant city of <strong>Bhubaneswar</strong>, Scottish Café is your destination for mouth-watering vegetarian snacks, exceptional catering services, and delightful bakery creations. We take pride in crafting every dish with care, using only the freshest ingredients.</p>
                        <p className={`${styles.text_color} text-lg pr-0 lg:pr-5`}>Whether it's a quick snack, a special event, or a sweet indulgence, Scottish Café promises a memorable experience filled with flavor, warmth, and tradition. Join us to savor the best of vegetarian cuisine and baked delights!</p>
                    </div>
                    <div className="flex flex-row w-full flex-wrap">
                        <div className="w-1/2 md:w-1/4 md:mb-2 my-3">
                            <h2 className='font-bold text-3xl text-yellow-950 text-center md:text-left'>2000+</h2>
                            <h2 className='font-medium text-md text-yellow-800 text-center md:text-left'>Daily Customers</h2>
                        </div>
                        <div className="w-1/2 md:w-1/4 md:mb-2 my-3">
                            <h2 className='font-bold text-3xl text-yellow-950 text-center md:text-left'>7+</h2>
                            <h2 className='font-medium text-md text-yellow-800 text-center md:text-left'>Outlets</h2>
                        </div>
                        <div className="w-1/2 md:w-1/4 md:mb-2 my-3">
                            <h2 className='font-bold text-3xl text-yellow-950 text-center md:text-left'>125+</h2>
                            <h2 className='font-medium text-md text-yellow-800 text-center md:text-left'>Global Dishes</h2>
                        </div>
                        <div className="w-1/2 md:w-1/4 md:mb-2 my-3">
                            <h2 className='font-bold text-3xl text-yellow-950 text-center md:text-left'>100%</h2>
                            <h2 className='font-medium text-md text-yellow-800 text-center md:text-left'>Satisfaction</h2>
                        </div>
                    </div>
                </div>
                <div className="w-2/7 hidden lg:block">
                    <Image src={Image1}
                        alt="Cup Holding Image"
                        className='ml-auto'
                    />
                </div>
            </div>
        </div>
    )
}

export default Intro
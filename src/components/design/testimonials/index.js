import React from 'react'
import styles from "./style.module.css"
import { PiQuotesFill } from "react-icons/pi";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const Testimonials = () => {
    const trendyItems = [
        {
            description: "The Captain’s Cafe has truly become my go-to spot! Their scones are the best I've ever had, and the atmosphere is so warm and inviting. Whether it's a quick coffee break or a catered event, they never fail to impress. Highly recommend!",
            name: "Subrat Kumar Panda"
        },
        {
            description: "I absolutely love The Captain’s Cafe! It’s my favorite place to unwind. Their blueberry scones are out of this world, and the cozy vibe makes it perfect for catching up with friends. I can’t recommend it enough!",
            name: "Bhagawat Swain"
        },
        {
            description: "The Captain’s Cafe is simply fantastic! It’s my go-to spot for relaxation. Their raspberry muffins are divine, and the warm atmosphere is ideal for hanging out with pals. I highly suggest visiting it!",
            name: "Archana Mohanty"
        },
        {
            description: "The Sailor’s Bistro is absolutely amazing! It’s my favorite place to unwind. Their blueberry scones are heavenly, and the cozy vibe is perfect for chilling with friends. I strongly recommend checking it out!",
            name: "Subhashree Panda"
        }
    ]
    return (
        <div className='container animate__animated animate__fadeInUp mb-32'>
            <div className="flex flex-col justify-center items-center">
                <h1 className='color-primary text-3xl md:text-4xl font-bold mb-10 text-center w-full md:4/5 lg:w-2/5'>What Our Happy and Fulfilled Customer Say&apos;s About Us</h1>
                <div className={`${styles.testimonials} w-full flex flex-col pl-0 pr-0 md:pl-16 md:pr-12 relative`}>
                    <Carousel plugins={[
                        Autoplay({
                            delay: 5000,
                        }),
                    ]} opts={{ align: "start", }} className="w-full h-full">
                        <CarouselContent>
                            {trendyItems.map((item, index) => (
                                <CarouselItem key={index} className="basis-1/1">
                                    <div className={`${styles.card_design} p-2 md:p-4 flex flex-col items-center`}>
                                        <div className="flex flex-col gap-2.5 mb-3 items-center max-w-none lg:max-w-3xl">
                                            <p className='text-center color-secondary text-md md:text-xl w-8/10 font-normal'>{item.description}</p>
                                            <h4 className='text-center color-primary text-md md:text-xl font-semibold'> - {item.name}</h4>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className={`${styles.left_arrow} border-0 bg-transparent`} />
                        <CarouselNext className={`${styles.right_arrow} border-0 bg-transparent`} />
                    </Carousel>
                    <PiQuotesFill className={`${styles.left_quote} absolute left-0 md:left-12 text-3xl md:text-7xl top-0`}/>
                    <PiQuotesFill className={`${styles.right_quote} absolute right-0 md:right-12  text-3xl md:text-7xl bottom-0`}/>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
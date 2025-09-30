import React from 'react'
import styles from "./style.module.css"
import Image from 'next/image'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import khopra from "../../../assets/images/items/khopra.png"
import samosa from "../../../assets/images/items/samosa.png"
import fries from "../../../assets/images/items/fries.png"
import paneer from "../../../assets/images/items/paneer.png"
import cappuccino from "../../../assets/images/items/cappuccino.png"
import chocolate from "../../../assets/images/items/chocolate.png"
import coffee from "../../../assets/images/items/coffee.png"
import lassi from "../../../assets/images/items/lassi.png"

const TrendyMenu = () => {
    const trendyItems = [
        {
            name: "Khopra Patties",
            image: khopra,
            description: "Crispy golden patties with a sweet coconut filling."
        },
        {
            name: "Samosa",
            image: samosa,
            description: "Deep-fried pastry filled with spiced potatoes and peas."
        },
        {
            name: "French Fries",
            image: fries,
            description: "Crispy, golden fries with a perfect seasoning."
        },
        {
            name: "Paneer Tikka",
            image: paneer,
            description: "Grilled paneer marinated in spices, served with mint chutney."
        },
        {
            name: "Cappuccino",
            image: cappuccino,
            description: "Creamy espresso topped & frothy milk for a rich, taste."
        },
        {
            name: "Chocolate Mousse",
            image: chocolate,
            description: "Decadent chocolate dessert with a smooth, airy texture."
        },
        {
            name: "Cold Coffee",
            image: coffee,
            description: "Iced coffee blended with milk for a refreshing, creamy flavor."
        },
        {
            name: "Mango Lassi",
            image: lassi,
            description: "Creamy yogurt drink blended with ripe mangoes for a tropical taste."
        },
    ]
    return (
        <>
            <div className='container mx-auto animate__animated animate__fadeInUp mb-18 mt-18 md:mt-12 md:mb-26'>
                <h1 className='text-center text-[#0e467d] dark:text-white text-4xl font-bold mb-4 md:mb-6'>Our Trendy Dishes</h1>
                <Carousel opts={{ align: "start", }} className="w-full h-full">
                    <CarouselContent>
                         {/* <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <div className={`${styles.card_design} p-4`}>
                                <Image src={snacks} alt='Image' className='rounded-full p-2 mb-3' />
                                <div className="flex flex-col gap-2.5 mb-3 items-center">
                                    <h4 className='text-center text-[#0e467d] text-3xl font-semibold'>Khopra Patties</h4>
                                    <p className='text-center color-secondary text-2xl w-6/10 font-normal'>Crispy golden patties with a sweet coconut filling.</p>
                                </div>
                            </div>
                        </CarouselItem> */}
                        {trendyItems.map((item, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <div className={`${styles.card_design} bg-white dark:bg-amber-950 p-2 md:p-4 flex flex-col items-center`}>
                                    <div className={`${styles.image_area}`}>
                                        <Image src={item.image} alt='Image' className={`${styles.image_area} rounded-full p-2 mb-3`}/>
                                    </div>
                                    <div className="flex flex-col gap-2.5 mb-3 items-center">
                                        <h4 className='text-center text-[#0e467d] dark:text-white text-2xl xl:text-3xl font-semibold'>{item.name}</h4>
                                        <p className='text-center text-[#4E79A2] dark:text-orange-100 text-lg lg:text-xl w-8/10 font-normal'>{item.description}</p>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className={`${styles.left_arrow} border-0 bg-transparent`} />
                    <CarouselNext className={`${styles.right_arrow} border-0 bg-transparent`}  />
                </Carousel>
            </div>
        </>
    )
}

export default TrendyMenu
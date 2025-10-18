import React from 'react'
import styles from "./style.module.css"
import Image from 'next/image'

import snacks from "../../../assets/images/snacks.png"
import snacksOutline from "../../../assets/images/snacks_outline.png"
import bakery from "../../../assets/images/bakery.png"
import bakeryOutline from "../../../assets/images/bakery_outline.png"
import beverages from "../../../assets/images/beverages.png"
import beveragesOutline from "../../../assets/images/beverages_outline.png"
import menu from "../../../assets/images/menu.png"
import menuOutline from "../../../assets/images/menu_outline.png"

const PopularMenu = () => {
    const menuItems = [
        {
            name: "Snacks",
            image: snacks,
            imageOutline: snacksOutline
        },
        {
            name: "Beverages",
            image: beverages,
            imageOutline: beveragesOutline
        },
        {
            name: "Bakery",
            image: bakery,
            imageOutline: bakeryOutline
        },
        {
            name: "Menu",
            image: menu,
            imageOutline: menuOutline
        }
    ]
    return (
        <div className={`${styles.background_design} relative bg-white w-full animate__animated animate__fadeInUp mt-18 mb-6 md:mb-18`}>
            <div className='container mx-auto animate__animated animate__fadeInUp'>
                <h1 className='text-center color-primary text-4xl font-bold mb-8 md:mb-6'>Our Popular Menu Category</h1>
                <div className="flex flex-row flex-wrap w-full">
                    {menuItems.map((item) => (
                        <div key={item.name} className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-3 lg:mb-0 group">
                            <div className="cursor-pointer border-2 border-orange-900 h-[240px] bg-[#F6F4F3] rounded-lg w-full flex flex-col justify-center items-center pt-3">
                                <div className="size-[140px] relative mb-4">
                                    <Image src={item.imageOutline} className="absolute object-cover inset-0 w-full h-full" alt={`${item.name} outline`}/>
                                    <Image src={item.image} className="group-hover:opacity-100 opacity-0 absolute object-cover inset-0 w-full h-full transition-all ease-in-out duration-500" alt={item.name}/>
                                </div>
                                <p className="group-hover:-translate-y-1 text-amber-900 uppercase text-center font-semibold text-2xl transition-all ease-in-out duration-500">{item.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PopularMenu
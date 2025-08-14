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
        <div className={`${styles.background_design} w-full animate__animated animate__fadeInUp mt-12 mb-6 md:mb-18`}>
            <div className='container mx-auto animate__animated animate__fadeInUp'>
                <h1 className='text-center color-primary text-4xl font-bold mb-8 md:mb-6'>Our Popular Menu Category</h1>
                <div className={`${styles.card_design} flex flex-row flex-wrap w-full`}>
                    {/* <div className="w-1/4">
                        <div className={`${styles.card} w-full flex flex-col justify-center items-center pt-3`}>
                            <div className={`${styles.card_image} mb-4`}>
                                <Image src={snacksOutline} className={`${styles.image_outline}`} />
                                <Image src={snacks} className={`${styles.image}`} />
                            </div>
                            <h6 className={`${styles.card_text} uppercase text-center font-semibold text-2xl`}>Snacks</h6>
                        </div>
                    </div> */}
                    {menuItems.map((item) => (
                        <div className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-3 lg:mb-0">
                            <div className={`${styles.card} w-full flex flex-col justify-center items-center pt-3`}>
                                <div className={`${styles.card_image} mb-4`}>
                                    <Image src={item.imageOutline} className={`${styles.image_outline}`} />
                                    <Image src={item.image} className={`${styles.image}`} />
                                </div>
                                <h6 className={`${styles.card_text} uppercase text-center font-semibold text-2xl`}>{item.name}</h6>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PopularMenu
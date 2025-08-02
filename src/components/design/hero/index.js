import React from 'react'
import styles from "./style.module.css"
import Button from '@/components/common/button'

const HeroSection = () => {
    return (
        <div className="container flex flex-col md:flex-row z-10 relative">
            <div className="w-full md:w-1/2">
                <div className="flex flex-col">
                    <h6 className="text-xl text-gray-200 font-medium">MORE FLAVOR FOR LESS</h6>
                    <h1 className="">Taste The Differance</h1>
                    <p>Savor the best food, crafted with care and passion, for the moments that matter most. Scottish Cafe, where every bite is unforgettable.</p>
                    <Button text="Order Online"
                    />
                </div>
            </div>
            
        </div>
    )
}

export default HeroSection

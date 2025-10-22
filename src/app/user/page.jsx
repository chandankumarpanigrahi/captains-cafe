"use client"
import React from 'react'
import SubBanner from '@/components/common/sub banner'
import logo from "../../assets/images/logo_light.png"
import image1 from "../../assets/images/cafe/img_1.jpg"
import image2 from "../../assets/images/cafe/img_2.jpg"
import image3 from "../../assets/images/cafe/img_3.jpg"
import image4 from "../../assets/images/cafe/img_4.jpg"
import image5 from "../../assets/images/cafe/img_5.jpg"
import image6 from "../../assets/images/cafe/img_6.jpg"
import loginBg from "../../assets/images/user_login_bg.png"
import Image from 'next/image'
import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
} from '@/components/ui/input-group'


// icons
import { IoChevronDownOutline } from "react-icons/io5";

const User = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselImages = [
        { src: image1, alt: 'Carousel Image 1' },
        { src: image2, alt: 'Carousel Image 2' },
        { src: image3, alt: 'Carousel Image 3' },
        { src: image4, alt: 'Carousel Image 4' },
        { src: image5, alt: 'Carousel Image 5' },
        { src: image6, alt: 'Carousel Image 6' }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000);

        return () => clearInterval(interval);
    }, [carouselImages.length]);

    return (
        <>
            <SubBanner
                title="User Login"
                showBreadcrumb={false}
            />
            <div className='container pt-10'>
                <div className="flex flex-row items-center px-10 xl:px-40">
                    <div className="hidden lg:block w-1/2 h-[460px] bg-gray-300 relative border-blue-900 border-l-3 border-y-3 rounded-tl-xl rounded-bl-xl overflow-hidden">

                        {/* Carousel - Base Layer */}
                        <div className="relative w-full h-full">
                            {carouselImages.map((image, index) => (
                                <div key={index} className={`absolute inset-0 transition-opacity duration-3000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-cover saturate-110"
                                        priority={index === 0}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Blur Overlay - Middle Layer */}
                        <div className="absolute inset-0 z-10 backdrop-blur-[4px] bg-black/15"></div>

                        {/* Logo overlay - Top Layer */}
                        <div className="flex w-full h-full items-center justify-center absolute inset-0 z-20">
                            <Image
                                src={logo}
                                alt="logo"
                                className="size-30 object-contain drop-shadow-lg"
                            />
                        </div>

                    </div>
                    <div className="w-full lg:w-1/2 h-[560px] bg-gray-200  border-blue-900 border-3 rounded-xl relative overflow-hidden">
                        <Image src={loginBg} alt='Login Background' className='inset-0 w-full h-full absolute' />
                        <div className="w-full h-full relative z-2">
                            <div className="flex flex-col h-full p-16">
                                <section className="flex flex-col">
                                    <h1 className='text-[#12406D] dark:text-white text-3xl font-bold mb-0.5'>Welcome Back</h1>
                                    <p className='mb-4 text-gray-700'>Log in to your account</p>
                                    <InputGroup className="bg-white rounded-lg overflow-hidden shadow-sm relative">
                                        {/* Country Code Select */}
                                        <div className="relative flex items-center border-r border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800">
                                            <select
                                                id="country-code"
                                                name="country-code"
                                                className="appearance-none bg-transparent text-gray-700 dark:text-gray-200 font-medium focus:outline-none pr-6 pl-3 py-2 cursor-pointer"
                                                defaultValue="+91"
                                            >
                                                <option value="+91">🇮🇳 +91</option>
                                                <option value="+92">🇵🇰 +92</option>
                                                <option value="+1">🇺🇸 +1</option>
                                                <option value="+44">🇬🇧 +44</option>
                                                <option value="+61">🇦🇺 +61</option>
                                            </select>

                                            {/* Dropdown Arrow */}
                                            <span className="absolute right-1 text-gray-400 pointer-events-none"><IoChevronDownOutline /></span>
                                        </div>

                                        {/* Input Field */}
                                        <InputGroupInput
                                            id="mobile"
                                            placeholder="Enter mobile number"
                                            className="focus:ring-0 focus:border-none border-0 text-gray-900 dark:text-white pl-3"
                                        />
                                    </InputGroup>

                                </section>
                                <section className="flex flex-col mt-auto">

                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default User
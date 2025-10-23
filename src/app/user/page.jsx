"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import SubBanner from '@/components/common/sub banner'
import { toast } from "react-hot-toast";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
    InputGroupText,
    InputGroupTextarea,
} from '@/components/ui/input-group'
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"


// Images
import logo from "../../assets/images/logo_light.png"
import image1 from "../../assets/images/cafe/img_1.jpg"
import image2 from "../../assets/images/cafe/img_2.jpg"
import image3 from "../../assets/images/cafe/img_3.jpg"
import image4 from "../../assets/images/cafe/img_4.jpg"
import image5 from "../../assets/images/cafe/img_5.jpg"
import image6 from "../../assets/images/cafe/img_6.jpg"
import loginBg from "../../assets/images/user_login_bg.png"


// icons
import { IoChevronDownOutline } from "react-icons/io5";
import Button from '@/components/common/button'
import { Input } from '@/components/ui/input'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import Link from 'next/link';

const User = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Changing the form placements
    const [changeState, setChangeState] = useState("mobileLogin")

    // Show/Hide password
    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

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

    // Toast
    const passwordChangeSuccess = () => { toast.success("Successfully Changed Password"); };
    const loginSuccess = () => {
        // toast.error("Login Failed");
        toast.success("Login Successful");
    };
    const registration = () => { toast.error("Registration Failed"); };
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
                        <Image src={loginBg} alt='Login Background' className='inset-0 w-full h-full absolute dark:invert' />
                        <div className="w-full h-full relative z-2">

                            {/* MobileNumber Login */}
                            <div className={`${changeState === "mobileLogin" ? "block" : "hidden"} flex flex-col h-full p-16`}>
                                <section className="flex flex-col">
                                    <h1 className='text-[#12406D] dark:text-white text-3xl font-bold mb-0.5'>Welcome Back</h1>
                                    <p className='mb-5 text-gray-700'>Log in to your account</p>
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
                                            className="focus:ring-0 focus:border-none border-0 bg-white dark:bg-neutral-900 text-gray-900 dark:text-white pl-3"
                                        />
                                    </InputGroup>
                                    <p className='mt-4 text-[13px] text-gray-600'>You will receive an SMS verification that may apply message and data rates.</p>
                                </section>
                                <section className="flex flex-col justify-center items-center mt-auto">
                                    <Button text="Log in" className='w-full' onClick={loginSuccess} />
                                    <button className="cursor-pointer text-sm text-blue-950 font-semibold mt-3" onClick={() => setChangeState("emailLogin")}>Use email, instead</button>
                                </section>
                            </div>



                            {/* Email Login */}
                            <div className={`${changeState === "emailLogin" ? "block" : "hidden"} flex flex-col h-full p-16`}>
                                <section className="flex flex-col">
                                    <h1 className='text-[#12406D] dark:text-white text-3xl font-bold mb-0.5'>Welcome Back</h1>
                                    <p className='mb-5 text-gray-700'>Log in to your account</p>
                                    <Input type="email" placeholder="Email Address" className="bg-white mb-3" />
                                    <InputGroup className={`bg-white`}>
                                        <InputGroupInput placeholder="Password" type={showPassword ? "text" : "password"} />
                                        <InputGroupAddon align="inline-end">
                                            <button type="button" onClick={togglePassword} className="focus:outline-none pr-2">
                                                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                                            </button>
                                        </InputGroupAddon>
                                    </InputGroup>
                                    <div className="flex flex-row justify-between mt-2 px-1">
                                        <button className='text-[13px] text-blue-950 font-semibold cursor-pointer' onClick={() => setChangeState("mobileLogin")}>Use mobile number</button>
                                        <button className='text-[13px] text-blue-950 font-semibold cursor-pointer' onClick={() => setChangeState("resetPassword")}>Forget Password?</button>
                                    </div>
                                </section>
                                <section className="flex flex-col justify-center items-center mt-auto">
                                    <Link className='flex items-center justify-center gap-2 uppercase transition-colors px-4 py-2 text-base bg-primary-dark text-white rounded-full w-full ' onClick={() => loginSuccess()} href="/user/dashboard">Log in</Link>
                                    <div className="text-sm text-blue-950 mt-3 cursor-default">Don&apos;t have account? <button className='font-semibold cursor-pointer' onClick={() => setChangeState("newReg")}>Create Account</button></div>
                                </section>
                            </div>


                            {/* New Registration */}
                            <div className={`${changeState === "newReg" ? "block" : "hidden"} flex flex-col h-full p-16`}>
                                <section className="flex flex-col">
                                    <h1 className='text-[#12406D] dark:text-white text-3xl font-bold mb-0.5'>Registration</h1>
                                    <p className='mb-5 text-gray-700'>Create your own account</p>
                                    <Input type="text" placeholder="Full Name" className="bg-white mb-4" />
                                    <Input type="email" placeholder="Email Address" className="bg-white mb-4" />
                                    <Input type="number" placeholder="Mobile Number" className="bg-white mb-4" />
                                    <InputGroup className={`bg-white`}>
                                        <InputGroupInput placeholder="Password" type={showPassword ? "text" : "password"} />
                                        <InputGroupAddon align="inline-end">
                                            <button type="button" onClick={togglePassword} className="focus:outline-none pr-2">
                                                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                                            </button>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </section>
                                <section className="flex flex-col justify-center items-center mt-auto">
                                    <Button text="Register" className='w-full' onClick={() => registration()} />
                                    <div className="text-sm text-blue-950 mt-3 cursor-default">Already have account? <button className='font-semibold cursor-pointer' onClick={() => setChangeState("mobileLogin")}>Login</button></div>
                                </section>
                            </div>


                            {/* Password Reset */}
                            <div className={`${changeState === "resetPassword" ? "block" : "hidden"} flex flex-col h-full p-16`}>
                                <section className="flex flex-col">
                                    <h1 className='text-[#12406D] dark:text-white text-3xl font-bold mb-0.5'>Reset Password</h1>
                                    <p className='mb-5 text-gray-700'>Recover your lost password</p>
                                    <Input type="text" placeholder="Full Name" className="bg-white mb-4" />
                                    <Input type="email" placeholder="Email Address" className="bg-white mb-4" />
                                    <div className="flex flex-row justify-between">
                                        <InputOTP maxLength={6}>
                                            <InputOTPGroup className="disabled:cursor-not-allowed">
                                                <InputOTPSlot index={0} className="bg-white" />
                                                <InputOTPSlot index={1} className="bg-white" />
                                                <InputOTPSlot index={2} className="bg-white" />
                                            </InputOTPGroup>
                                            <InputOTPSeparator />
                                            <InputOTPGroup>
                                                <InputOTPSlot index={3} className="bg-white" />
                                                <InputOTPSlot index={4} className="bg-white" />
                                                <InputOTPSlot index={5} className="bg-white" />
                                            </InputOTPGroup>
                                        </InputOTP>
                                        <Button text="SEND OTP" className='w-fit' size='sm' radius='md' />
                                    </div>
                                </section>
                                <section className="flex flex-col justify-center items-center mt-auto">
                                    <Button text="Reset Password" className='w-full' onClick={passwordChangeSuccess} />
                                    <div className="text-sm text-blue-950 mt-3 cursor-default">Know your passwod? <button className='font-semibold cursor-pointer' onClick={() => setChangeState("mobileLogin")}>Back to Login</button></div>
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
"use client"

import React from 'react'
import CountUp from '@/components/ui/CountUp/page'
import Image from 'next/image'
import styles from "./style.module.css"
import { useState } from 'react'
import { useEffect } from "react";
import { useRouter, useSearchParams } from 'next/navigation';
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { QRCode } from "@/components/kibo-ui/qr-code";
import PathCopy from '@/components/design/path copy';
import ShareCard from '@/components/ui/shareCard';
// Fancybox for Gallery View
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

// Images
import cupImage from "../../assets/images/pages/menu/cup.png"
import noodleFork from "../../assets/images/pages/menu/noodleFork.png"
import trending1 from "../../assets/images/pages/menu/trending1.png"
import trending2 from "../../assets/images/pages/menu/trending2.png"
import cafe from "../../assets/images/pages/menu/cafe.jpg"
import plate from "../../assets/images/pages/menu/plate.png"
import leaf from "../../assets/images/pages/menu/leaf.png"
import middleAbstracts from "../../assets/images/pages/menu/middleAbstracts.png"
import testeText from "../../assets/images/pages/menu/testeText.png"
import noodleMenu from "../../assets/images/pages/menu/noodleMenu.png"

// icons
import { MdArrowOutward } from "react-icons/md";
import { FaCircle } from "react-icons/fa";
import { IoTriangle } from "react-icons/io5";
import { AiTwotonePushpin } from "react-icons/ai";

// JSON Files
import menu from "@/data/menu.js"
import { Card } from '@/components/ui/card'
import Button from '@/components/common/button'

const ContactUs = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    // Initialize states from URL parameters or defaults
    const [tabview, setTabview] = useState(searchParams.get('tab') || 'cafe');
    const [selection, setSelection] = useState(searchParams.get('location') || 'saheed');
    const [viewmenu, setViewmenu] = useState(searchParams.get('menu') || 'food');
    const [viewCateringMenu, setViewCateringMenu] = useState(searchParams.get('catering') || 'lunch');

    // Update URL when any tab state changes
    useEffect(() => {
        const params = new URLSearchParams(searchParams.toString());

        // Always update the main tab
        params.set('tab', tabview);

        // Update location if in cafe tab
        if (tabview === 'cafe') {
            params.set('location', selection);
            params.set('menu', viewmenu);
            params.delete('catering'); // Remove catering param when not in use
        } else {
            params.set('catering', viewCateringMenu);
            params.delete('location'); // Remove location param when not in use
            params.delete('menu'); // Remove menu param when not in use
        }

        // Update URL without refreshing the page
        router.push(`?${params.toString()}`, { scroll: false });
    }, [tabview, selection, viewmenu, viewCateringMenu, router, searchParams]);

    // Handle tab changes with URL updates
    const handleTabChange = (tab) => {
        setTabview(tab);
    };

    const handleLocationChange = (location) => {
        setSelection(location);
    };

    const handleMenuChange = (menu) => {
        setViewmenu(menu);
    };

    const handleCateringChange = (catering) => {
        setViewCateringMenu(catering);
    };

    // Fancybox for Gallery View
    useEffect(() => {
        Fancybox.bind("[data-fancybox='gallery']", {});
        return () => {
            Fancybox.destroy();
        };
    }, []);

    return (
        <>
            <div className='container py-10'>
                {/* Top Part */}
                <div className="flex flex-col lg:flex-row relative pb-16">

                    {/* Left */}
                    <div className="w-full lg:w-2/7 mb-8 lg:mb-0 pr-0 lg:pr-3">
                        <div className="flex flex-col gap-4 w-full items-center">
                            <div className='m-0 lg:mt-8 flex flex-col w-full'>
                                <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale mb-2 w-fit mx-auto lg:mx-0">
                                    <Avatar className="border-2 border-white">
                                        <AvatarImage src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_21.png" alt="avatar" />
                                    </Avatar>
                                    <Avatar className="border-2 border-white">
                                        <AvatarImage src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_10.png" alt="avatar" />
                                    </Avatar>
                                    <Avatar className="border-2 border-white">
                                        <AvatarImage src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_22.png" alt="avatar" />
                                    </Avatar>
                                    <Avatar className="border-2 border-white">
                                        <AvatarImage src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_25.png" alt="avatar" />
                                    </Avatar>
                                    <Avatar className="flex justify-center items-center bg-blue-100 text-blue-800 font-semibold border-2 border-white">
                                        +5k
                                    </Avatar>
                                </div>
                                <p className='text-gray-600 text-center lg:text-left dark:text-gray-400 text-lg mb-1'>More Than
                                    <CountUp
                                        from={0}
                                        to={5000}
                                        separator=","
                                        direction="up"
                                        duration={2}
                                        className='text-3xl ml-2 text-blue-900 font-semibold dark:text-white'
                                    />
                                </p>
                                <p className='text-center text-sm font-semibold text-blue-950 dark:text-white dark:font-normal'>Positive and Impressive Reviews</p>
                            </div>
                            <hr className='w-full' />
                            <div className='relative h-full w-full'>
                                <Image src={cupImage} alt='cup Image' className='w-[120px]  absolute bottom-0 left-0' />
                                <p className='text-right text-[15px] text-blue-900 dark:text-blue-300 w-3/5 float-end'>Indulge your senses with our diverse menu, offering a unique blend of classic favorites and innovative creations. Discover the perfect cup of coffee or the ideal dish to complement your day at The Captain&apos;s Cafe.</p>
                            </div>
                            <hr className='w-full' />
                        </div>
                    </div>



                    {/* Middle */}
                    <div className="w-full lg:w-3/7 mb-4">
                        <div className="w-full flex justify-center items-center pt-16 pb-12 relative overflow-hidden">
                            <Image src={cafe} alt='Cafe Image' className='w-[280px] lg:w-[360px] h-[400px] lg:h-[500px] object-cover rounded-full p-4 lg:p-8 border-4 border-[#0B3F71] lg:border-b-transparent' />
                            <div className='bg-[#12406D] size-48 absolute top-0 rounded-full p-4 cursor-default group'>
                                <div className='w-full h-full bg-[#102E4B] rounded-full border-2 border-white flex justify-center items-center relative'>
                                    <p className='text-white text-left text-3xl scale-85 w-2/3 group-hover:scale-90 transition-all duration-400 ease-in-out'>Sail Into Flavors</p>
                                    <MdArrowOutward size={44} className='text-white absolute right-5 top-10 opacity-20 group-hover:scale-110 transition-all duration-100 ease-in-out' />
                                </div>
                            </div>
                            <div className='size-56 absolute bottom-16 lg:bottom-26 scale-100 lg:scale-125'>
                                <div className="w-full h-full relative">
                                    <Image src={plate} alt='Plate Image' className={`${styles.plate} absolute inset-0 z-3`} />
                                    <Image src={leaf} alt='Plate Image' className={`${styles.leaf} absolute inset-0 z-2 scale-115`} />
                                    <div className='w-full h-full border-3 border-white rounded-full scale-90'></div>
                                </div>
                            </div>
                            <Image src={testeText} alt='Taste the difference Text' className='absolute bottom-0 hidden lg:block scale-50' />
                        </div>
                    </div>



                    {/* Right */}
                    <div className="w-full lg:w-2/7 pl-3">
                        <div className="w-full flex mb-8">
                            <div className='bg-gradient-to-r from-orange-900 to-orange-950 h-fit w-full pl-8 py-2 ml-auto rounded-tl-full rounded-bl-full relative cursor-default'>
                                <Image src={noodleFork} alt='cup Image' className='w-[80px]  absolute -top-3 right-0' />
                                <div className="flex flex-row items-end">
                                    <div className='flex flex-col'>
                                        <p className='text-amber-400 text-lg font-semibold'>UPTO 50%</p>
                                        <h1 className='text-white font-semibold text-5xl flex gap-1'>OFF <sup className='text-sm pt-1'>*</sup></h1>
                                        <h5 className='text-white text-md uppercase font-light opacity-50'>AVAIL SOON</h5>
                                    </div>
                                    <MdArrowOutward size={60} className='text-white opacity-40' />
                                </div>
                            </div>
                        </div>

                        {/* Best  Seller Items */}
                        <div className="flex w-full flex-col gap-3 my-4">
                            <div className="flex flex-row">
                                <Image src={trending1} alt='Trending Item 1' width={80} />
                                <div className="flex-flex-col pl-3 w-full">
                                    <small className='text-gray-600 dark:text-gray-400'>Bestseller Dish</small>
                                    <div className="flex items-center gap-2 w-full">
                                        <h1 className='text-xl font-semibold text-blue-900 dark:text-blue-300'>Khopra Patties</h1>
                                        <div className="border-2 border-green-600 text-green-600 size-4 flex justify-center items-center"><FaCircle size={10} /></div>
                                    </div>
                                    <h6 className='text-amber-600 font-semibold'>₹ 129.00</h6>
                                </div>
                            </div>
                            <div className="flex flex-row">
                                <Image src={trending2} alt='Trending Item 1' width={80} />
                                <div className="flex-flex-col pl-3 w-full">
                                    <small className='text-gray-600 dark:text-gray-400'>Bestseller Dish</small>
                                    <div className="flex items-center gap-2 w-full">
                                        <h1 className='text-xl font-semibold text-blue-900 dark:text-blue-300'>Cheese Noodle</h1>
                                        <div className="border-2 border-red-600 text-red-600 size-4 flex justify-center items-center"><IoTriangle size={10} /></div>
                                    </div>
                                    <h6 className='text-amber-600 font-semibold'>₹ 199.00</h6>
                                </div>
                            </div>
                        </div>

                        <hr />
                        <div className="flex justify-center gap-2 my-3 ">
                            <p className="uppercase text-blue-900 dark:text-blue-300 font-medium">VIEW FULL MENU</p>
                            <MdArrowOutward size={23} className='text-blue-900 dark:text-blue-300' />
                        </div>
                        <hr />
                    </div>
                    <Image src={middleAbstracts} alt='Spice Abstracts' className='absolute -bottom-20 scale-90 hidden lg:block' />
                </div>
                <div className="flex justify-center w-full">
                    <Image src={noodleMenu} alt="Menu Text" width={220} />
                </div>







                {/* Tabs Main Start */}
                <div className='flex justify-center mb-6'>
                    <div className="rounded-xl md:rounded-full flex flex-col md:flex-row p-1 bg-white shadow-[inset_0_2px_4px_3px_rgba(0,0,0,0.19)]">
                        <div className={`${tabview === "cafe" ? "bg-blue-950 text-white" : ""} rounded-lg text-center md:rounded-full w-full md:w-fit cursor-pointer text-lg md:text-2xl text-gray-400 font-semibold px-6 py-1`} onClick={() => handleTabChange("cafe")}>Cafe Menu</div>
                        <div className={`${tabview === "catering" ? "bg-blue-950 text-white" : ""} rounded-lg text-center md:rounded-full w-full md:w-fit cursor-pointer text-lg md:text-2xl text-gray-400 font-semibold px-6 py-1`} onClick={() => handleTabChange("catering")}>Catering Menu</div>
                    </div>
                </div>

                <div>

                    {/* Cafe Tab Start */}
                    <div className={`${tabview === "cafe" ? "block" : "hidden"} w-full`}>
                        <div className="flex justify-center mb-4">
                            <Select onValueChange={handleLocationChange} value={selection}>
                                <SelectTrigger className="w-[280px] bg-white dark:bg-blue-950 dark:text-white">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="saheed">Saheed Nagar, Bhubaneswar</SelectItem>
                                    <SelectItem value="crpf">CRPF, Bhubaneswar</SelectItem>
                                    <SelectItem value="cutm">Centurion Campus, Bhubaneswar</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* View Area */}

                        {/* ============== SAHEED NAGAR CAFE MENU START ================== */}
                        <div className={`${selection === "saheed" ? "block" : "hidden"} w-full h-fit`}>
                            <div className="flex flex-wrap flex-col lg:flex-row h-fit">
                                <div className="w-full lg:w-3/4 pr-0 lg:pr-8 h-full">
                                    <ul className='px-4 flex flex-row flex-nowrap overflow-x-auto w-full mb-4'>
                                        <li className={`${viewmenu === "food" ? "text-blue-900 dark:text-blue-300 border-b-2 border-[#12406D] dark:border-blue-300" : "text-gray-400 dark:text-gray-300"} w-full lg:w-1/3 text-center uppercase font-semibold cursor-pointer p-3 whitespace-nowrap`} onClick={() => handleMenuChange("food")}> Food Menu </li>
                                        <li className={`${viewmenu === "bakery" ? "text-blue-900 dark:text-blue-300 border-b-2 border-[#12406D] dark:border-blue-300" : "text-gray-400 dark:text-gray-300"} w-full lg:w-1/3 text-center uppercase font-semibold cursor-pointer p-3 whitespace-nowrap`} onClick={() => handleMenuChange("bakery")}> Bakery Menu </li>
                                        <li className={`${viewmenu === "beverage" ? "text-blue-900 dark:text-blue-300 border-b-2 border-[#12406D] dark:border-blue-300" : "text-gray-400 dark:text-gray-300"} w-full lg:w-1/3 text-center uppercase font-semibold cursor-pointer p-3 whitespace-nowrap`} onClick={() => handleMenuChange("beverage")}> Beverage Menu </li>
                                    </ul>

                                    {/* Food */}
                                    <div className={`${viewmenu === "food" ? "block" : "hidden"} flex flex-col lg:flex-row flex-wrap h-full w-full justify-around`}>
                                        {menu.saheedNagar.food.map((value, index) => (
                                            <div key={index} className='relative aspect-[2/3] w-full lg:w-5/11 mb-2 rounded-lg drop-shadow-xl overflow-hidden'>
                                                <a
                                                    key={index}
                                                    href={value.image}
                                                    data-fancybox="gallery"
                                                >
                                                    <Image
                                                        src={value.image}
                                                        alt="Cafe"
                                                        fill
                                                    />
                                                </a>
                                            </div>
                                        ))}
                                    </div>


                                    {/* Bakery */}
                                    <div className={`${viewmenu === "bakery" ? "block" : "hidden"} flex flex-col lg:flex-row flex-wrap h-full w-full justify-around`}>
                                        {menu.saheedNagar.bakery.map((value, index) => (
                                            <div key={index} className='relative aspect-[2/3] w-full lg:w-5/11 mb-2 rounded-lg drop-shadow-xl overflow-hidden'>
                                                <a
                                                    key={index}
                                                    href={value.image}
                                                    data-fancybox="gallery"
                                                >
                                                    <Image
                                                        src={value.image}
                                                        alt="Cafe"
                                                        fill
                                                    />
                                                </a>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Beverage */}
                                    <div className={`${viewmenu === "beverage" ? "block" : "hidden"} flex flex-col lg:flex-row flex-wrap h-full w-full justify-around`}>
                                        {menu.saheedNagar.beverage.map((value, index) => (
                                            <div key={index} className='relative aspect-[2/3] w-full lg:w-5/11 mb-2 rounded-lg drop-shadow-xl overflow-hidden'>
                                                <a
                                                    key={index}
                                                    href={value.image}
                                                    data-fancybox="gallery"
                                                >
                                                    <Image
                                                        src={value.image}
                                                        alt="Cafe"
                                                        fill
                                                    />
                                                </a>
                                            </div>
                                        ))}
                                    </div>

                                </div>
                                <div className="w-full lg:w-1/4 h-full lg:sticky top-32">
                                    <div className="flex flex-col w-full gap-4">
                                        <Card className="p-8 rounded-md gap-0">
                                            <h1 className='uppercase text-center text-lg text-blue-900 dark:text-white font-semibold mb-3'>Quick Order</h1>
                                            <QRCode data={menu.saheedNagar.qrLink[0].link} className="mb-5" />
                                            <a className='flex items-center justify-center gap-2 w-full uppercase transition-colors px-4 py-2 text-base bg-primary-dark text-white rounded' href={menu.saheedNagar.qrLink[0].link} target='_blank'>Order Now</a>
                                        </Card>
                                        <Card className="p-3 rounded-md gap-0">
                                            <p className='text-blue-900 dark:text-white font-semibold text-center mb-2'>or Order from,</p>
                                            <div className="flex flex-row gap-2 justify-center flex-wrap mb-2">
                                                {menu.foodPartnerLogo.map((value, index) => (
                                                    <a key={index} href={value.link} className='grayscale-40 hover:grayscale-0 hover:scale-105 transition ease-in-out duration-200'>
                                                        <Image
                                                            src={value.image}
                                                            alt='Cafe'
                                                            width={80}
                                                            height={80}
                                                            className='rounded-lg'
                                                        />
                                                    </a>
                                                ))}
                                            </div>
                                        </Card>
                                        <Card className="p-3 rounded-md gap-0">
                                            <p className='text-blue-900 dark:text-white font-semibold dark:font-normal flex flex-row justify-between mb-2'>Share the Offer  <AiTwotonePushpin size={20} /></p>
                                            <ShareCard
                                                title="Amazing Blog Post You Should Read!"
                                            />
                                            {/* <PathCopy /> */}
                                        </Card>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ============== SAHEED NAGAR CAFE MENU END ================== */}




                        {/* ============== CRPF CAFE MENU START ================== */}
                        <div className={`${selection === "crpf" ? "block" : "hidden"} w-full h-fit`}>
                            <div className="flex flex-wrap flex-col lg:flex-row h-fit">
                                <div className="w-full lg:w-3/4 pr-0 lg:pr-8 h-full">

                                    {/* Food */}
                                    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-full w-full justify-around`}>
                                        {menu.crpf.map((value, index) => (
                                            <div key={index} className='relative aspect-[3/5] w-full rounded-lg border border-blue-900 overflow-hidden'>
                                                <a
                                                    key={index}
                                                    href={value.image}
                                                    data-fancybox="gallery"
                                                >
                                                    <Image
                                                        src={value.image}
                                                        alt="Cafe"
                                                        fill
                                                    />
                                                </a>
                                            </div>
                                        ))}
                                    </div>


                                </div>
                                <div className="w-full lg:w-1/4 h-full lg:sticky top-32">
                                    <div className="flex flex-col w-full gap-4">
                                        <Card className="p-8 rounded-md gap-0 hidden">
                                            <h1 className='uppercase text-center text-lg text-blue-900 dark:text-white font-semibold mb-3'>Quick Order</h1>
                                            <QRCode data={menu.saheedNagar.qrLink[0].link} className="mb-5" />
                                            <a className='flex items-center justify-center gap-2 w-full uppercase transition-colors px-4 py-2 text-base bg-primary-dark text-white rounded' href={menu.saheedNagar.qrLink[0].link} target='_blank'>Order Now</a>
                                        </Card>
                                        <Card className="p-3 rounded-md gap-0">
                                            <p className='text-blue-900 dark:text-white font-semibold text-center mb-2'>or Order from,</p>
                                            <div className="flex flex-row gap-2 justify-center flex-wrap mb-2">
                                                {menu.foodPartnerLogo.map((value, index) => (
                                                    <a key={index} href={value.link} className='grayscale-40 hover:grayscale-0 hover:scale-105 transition ease-in-out duration-200'>
                                                        <Image
                                                            src={value.image}
                                                            alt='Cafe'
                                                            width={80}
                                                            height={80}
                                                            className='rounded-lg'
                                                        />
                                                    </a>
                                                ))}
                                            </div>
                                        </Card>
                                        <Card className="p-3 rounded-md gap-0">
                                            <p className='text-blue-900 dark:text-white font-semibold dark:font-normal flex flex-row justify-between mb-2'>Share the Offer  <AiTwotonePushpin size={20} /></p>
                                            <ShareCard
                                                title="Amazing Blog Post You Should Read!"
                                            />
                                            {/* <PathCopy /> */}
                                        </Card>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ============== CRPF CAFE MENU END ================== */}




                        <div className={`${selection === "cutm" ? "block" : "hidden"} bg-green-100 w-full h-50`}>
                            <div className="flex justify-center items-center w-full h-full">
                                Coming Soon
                            </div>
                        </div>
                    </div>
                    {/* Cafe Tab End */}


                    {/* Catering Tab Start */}
                    <div className={`${tabview === "catering" ? "block" : "hidden"} w-full`}>
                        <div className="flex flex-wrap flex-col lg:flex-row h-fit">
                            <div className="w-full lg:w-3/4 pr-0 lg:pr-8 h-full">
                                <ul className='px-4 flex flex-row flex-nowrap overflow-x-auto w-full mb-4'>
                                    <li
                                        className={`${viewCateringMenu === "lunch" ? "text-blue-900 dark:text-blue-300 border-b-2 border-[#12406D] dark:border-blue-300" : "text-gray-400 dark:text-gray-300"} w-full lg:w-1/3 text-center uppercase font-semibold cursor-pointer p-3 whitespace-nowrap`}
                                        onClick={() => handleCateringChange("lunch")}
                                    >
                                        Lunch Menu
                                    </li>
                                    <li
                                        className={`${viewCateringMenu === "presindent" ? "text-blue-900 dark:text-blue-300 border-b-2 border-[#12406D] dark:border-blue-300" : "text-gray-400 dark:text-gray-300"} w-full lg:w-1/3 text-center uppercase font-semibold cursor-pointer p-3 whitespace-nowrap`}
                                        onClick={() => handleCateringChange("presindent")}
                                    >
                                        Presindent&apos;s Special
                                    </li>
                                    <li
                                        className={`${viewCateringMenu === "captain" ? "text-blue-900 dark:text-blue-300 border-b-2 border-[#12406D] dark:border-blue-300" : "text-gray-400 dark:text-gray-300"} w-full lg:w-1/3 text-center uppercase font-semibold cursor-pointer p-3 whitespace-nowrap`}
                                        onClick={() => handleCateringChange("captain")}
                                    >
                                        Captain&apos;s Special
                                    </li>
                                </ul>

                                {/* Lunch Menu*/}
                                <div className={`${viewCateringMenu === "lunch" ? "block" : "hidden"} flex flex-col lg:flex-row flex-wrap h-full w-full justify-around`}>
                                    {menu.catering.lunch.map((value, index) => (
                                        <div key={index} className='relative aspect-[2/3] w-full mb-2 rounded-lg drop-shadow-xl overflow-hidden'>
                                            <Image
                                                src={value.image}
                                                alt='Cafe'
                                                fill
                                            />
                                        </div>
                                    ))}
                                </div>


                                {/* Presindent Special */}
                                <div className={`${viewCateringMenu === "presindent" ? "block" : "hidden"} flex flex-col lg:flex-row flex-wrap h-full w-full justify-around`}>
                                    {menu.catering.president.map((value, index) => (
                                        <div key={index} className='relative aspect-[2/3] w-full mb-2 rounded-lg drop-shadow-xl overflow-hidden'>
                                            <Image
                                                src={value.image}
                                                alt='Cafe'
                                                fill
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* Captain Special */}
                                <div className={`${viewCateringMenu === "captain" ? "block" : "hidden"} flex flex-col lg:flex-row flex-wrap h-full w-full justify-around`}>
                                    {menu.catering.captain.map((value, index) => (
                                        <div key={index} className='relative aspect-[2/3] w-full mb-2 rounded-lg drop-shadow-xl overflow-hidden'>
                                            <Image
                                                src={value.image}
                                                alt='Cafe'
                                                fill
                                            />
                                        </div>
                                    ))}
                                </div>
                                <p className='mt-8 bg-blue-50 dark:bg-card border-1 border-blue-900 p-4 text-[#374F67] dark:text-blue-100 rounded-md text-center text-md mb-8'>The Catering Menu featured here is curated by <strong>The Scottish&apos;s Catering</strong>, a distinguished brand known for its culinary excellence. While <strong>The Captain&apos;s Cafe</strong> presents its own unique offerings, the catering services are exclusively provided under the expertise of <strong>The Scottish&apos;s Catering</strong>.</p>
                            </div>
                            <div className="w-full lg:w-1/4 h-full lg:sticky top-32">
                                <div className="flex flex-col w-full gap-4">
                                    <Card className="p-3 rounded-md gap-0 hidden">
                                        <h1 className='uppercase text-center text-lg text-blue-900 dark:text-white font-semibold mb-3'>Quick Order</h1>
                                        <QRCode data={menu.catering.qrLink[0].link} className="p-5" />
                                    </Card>
                                    <Card className="p-3 rounded-md gap-0">
                                        <p className='text-blue-900 dark:text-white font-semibold flex flex-row justify-between mb-2'>Share the Offer  <AiTwotonePushpin size={20} /></p>
                                        <ShareCard
                                            title="Amazing Blog Post You Should Read!"
                                        />
                                        {/* <PathCopy /> */}
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Catering Tab End */}
                </div>
                {/* Tabs Main End */}

            </div>

        </>
    )
}

export default ContactUs
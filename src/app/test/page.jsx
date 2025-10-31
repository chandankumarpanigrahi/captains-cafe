"use client"
import React, { useActionState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState, useEffect } from 'react'
import { toast } from "react-hot-toast";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import ContactForm from '@/components/common/form'
import FormSheetDB from '@/components/common/test'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import FileUpload from '@/components/ui/FileUplooad'
import TreeStructure from '@/components/ui/TreeStructure'
import EmblaCarousel from '@/components/design/fade image'
import CalMe from '@/components/ui/calMe'
import ShareCard from '@/components/ui/shareCard'

// Select
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import FullCalendar from '@/components/ui/calendar';

const lunch = [
    {
        name: "Special Menu",
        price: "₹ 3299",
        days: "30 Days"
    },
    {
        name: "Special Menu",
        price: "₹ 3299",
        days: "30 Days"
    },
    {
        name: "Regular Menu",
        price: "₹ 2499",
        days: "30 Days"
    },
    {
        name: "Full Non-Veg Menu",
        price: "₹ 3499",
        days: "28 Days"
    },
    {
        name: "Pure Veg Menu",
        price: "₹ 1499",
        days: "30 Days"
    }
]

const dinner = [
    {
        name: "Dinner Special",
        price: "₹ 3599",
        days: "30 Days"
    },
    {
        name: "Family Dinner",
        price: "₹ 4599",
        days: "30 Days"
    }
];

const breakfast = [
    {
        name: "Healthy Breakfast",
        price: "₹ 999",
        days: "30 Days"
    },
    {
        name: "Healthy Breakfast",
        price: "₹ 999",
        days: "30 Days"
    },
    {
        name: "Continental Breakfast",
        price: "₹ 1299",
        days: "30 Days"
    }
];

const Test = ({ params }) => {
    const [selected, setSelected] = useState("red");
    const router = useRouter();
    const redirect = (path) => {
        router.push(path)
    }

    // For ShareCard
    const { slug } = params;

    const menus = [
        { id: "menu1", label: "Menu 1", name: "Regular Menu" },
        { id: "menu2", label: "Menu 2", name: "Special Menu" },
        { id: "menu3", label: "Menu 3", name: "Captain's Special" },
        { id: "menu4", label: "Menu 4", name: "President's Special" },
    ];

    // useState and useEffect
    const [count, setCount] = useState(0);

    const [name, setName] = useState("");

    const [inputName, setInputName] = useState("");
    const [manualName, setManualName] = useState("");
    const updateDetails = () => {
        setManualName(inputName);
    }
    const successToaster = () => {
        toast.success("Yeh !!!, It's Success");
    };

    const errorToaster = () => {
        toast.error("Oops !! Error Occoured");
    };

    const loadingToaster = () => {
        toast.loading("Loading...");
    };

    const openToaster = () => {
        // 1️⃣ Show loading toast and store its ID
        const toastId = toast.loading("Updating profile...", {
            style: {
                borderRadius: "10px",
                background: "#333",
                color: "#fff",
            },
        });

        // 2️⃣ After 2 seconds (simulate API or process), update it to success
        setTimeout(() => {
            toast.success("Profile updated successfully!", {
                id: toastId, // this replaces the loading toast
                duration: 3000,
                style: {
                    borderRadius: "10px",
                    background: "#333",
                    color: "#fff",
                },
            });
        }, 2000); // you can adjust time based on real action
    };

    useEffect(() => {
        console.log("The count changed! It is now: ", count);
    }, [count]);


    return (
        <div className='container mt-40'>
            <Tabs defaultValue="lunch" className="w-full mb-5">
                <TabsList>
                    <TabsTrigger value="lunch">Lunch</TabsTrigger>
                    <TabsTrigger value="dinner">Dinner</TabsTrigger>
                    <TabsTrigger value="breakfast">Breakfast</TabsTrigger>
                </TabsList>

                <TabsContent value="lunch">
                    <ul className="flex w-full flex-wrap">
                        {lunch.map((item, index) => (
                            <li key={index} className="p-2 w-full lg:w-1/3 h-full">
                                <div className="border p-4 rounded-lg space-y-2 hover:cursor-pointer bg-white dark:bg-neutral-900 hover:bg-amber-50 hover:text-amber-900 dark:hover:text-amber-100">
                                    <div><strong>Meal:</strong> {item.name}</div>
                                    <div><strong>Duration:</strong> {item.days}</div>
                                    <div><strong>Price:</strong> {item.price}</div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </TabsContent>

                <TabsContent value="dinner">
                    <ul className="space-y-4 flex w-full">
                        {dinner.map((item, index) => (
                            <li key={index} className="p-2 w-full lg:w-1/3 h-full">
                                <div className="border p-4 rounded-lg space-y-2 hover:cursor-pointer bg-white dark:bg-neutral-900 hover:bg-amber-50 hover:text-amber-900 dark:hover:text-amber-100">
                                    <div><strong>Meal:</strong> {item.name}</div>
                                    <div><strong>Duration:</strong> {item.days}</div>
                                    <div><strong>Price:</strong> {item.price}</div>
                                </div>
                            </li>
                        ))}

                    </ul>
                </TabsContent>

                <TabsContent value="breakfast">
                    <ul className="space-y-4 flex w-full">
                        {breakfast.map((item, index) => (
                            <li key={index} className="p-2 w-full lg:w-1/3 h-full">
                                <div className="border p-4 rounded-lg space-y-2 hover:cursor-pointer bg-white dark:bg-neutral-900 hover:bg-amber-50 hover:text-amber-900 dark:hover:text-amber-100">
                                    <div><strong>Meal:</strong> {item.name}</div>
                                    <div><strong>Duration:</strong> {item.days}</div>
                                    <div><strong>Price:</strong> {item.price}</div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </TabsContent>
            </Tabs>
            <hr />

            <button onClick={() => redirect("/")} className='transition-all duration-400 ease-in-out bg-blue-900 border-2 border-blue-950 text-white cursor-pointer px-6 py-2 rounded-full my-6 hover:bg-amber-900 hover:border-amber-950'>Button Routing to <span className='font-semibold'>About</span></button>

            <hr />

            <div className="flex flex-col lg:flex-row gap-2">
                <button onClick={successToaster} className='transition-all duration-400 ease-in-out bg-white border-2 border-blue-950 text-blue-900 cursor-pointer px-6 py-2 rounded-lg my-6 hover:bg-green-800 hover:border-green-900 hover:text-white'><span className='font-semibold'>Success</span></button>
                <button onClick={errorToaster} className='transition-all duration-400 ease-in-out bg-white border-2 border-blue-950 text-blue-900 cursor-pointer px-6 py-2 rounded-lg my-6 hover:bg-red-600 hover:border-red-700 hover:text-white'><span className='font-semibold'>Error</span></button>
                <button onClick={loadingToaster} className='transition-all duration-400 ease-in-out bg-white border-2 border-blue-950 text-blue-900 cursor-pointer px-6 py-2 rounded-lg my-6 hover:bg-gray-800 hover:border-gray-900 hover:text-white'><span className='font-semibold'>Loading</span></button>
                <button onClick={openToaster} className='transition-all duration-400 ease-in-out bg-white border-2 border-blue-950 text-blue-900 cursor-pointer px-6 py-2 rounded-lg my-6 hover:bg-emerald-600 hover:border-emerald-700 hover:text-white'><span className='font-semibold'>Success Aftar Loading</span></button>
            </div>

            <hr />

            {/* Dyamic Data Passing */}
            <div className="flex flex-row flex-wrap gap-2 my-8">
                {menus.map((menu) => (
                    <Link
                        key={menu.id}
                        href={{
                            pathname: `/test/${menu.id}`, query: { link: menu.label },
                        }}
                        className="border-2 border-blue-200 hover:border-blue-400 bg-blue-100 px-3 py-1.5 text-blue-800 rounded-full">
                        {menu.label}
                    </Link>
                ))}
            </div>

            <hr />

            <div>
                <div className="flex flex-col gap-5 py-10 items-center">
                    <div className="flex flex-col lg:flex-row gap-10">
                        <div className="p-4 text-center">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    placeholder="Type your name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="border p-2 bg-white rounded-3xl"
                                />
                            </div>
                            <p className="mt-4">Hello {name || "friend"}, Set your counts</p>
                        </div>
                        <div className="p-4 text-center">
                            <div className="flex flex-col md:flex-row gap-2">
                                <input
                                    type="text"
                                    placeholder="Type your name"
                                    onChange={(e) => setInputName(e.target.value)}
                                    className="border p-2 bg-white rounded-3xl"
                                />
                                <button className='text-md py-1 px-4 text-white bg-blue-800 rounded-full cursor-pointer' onClick={() => updateDetails()}>CHECK</button>
                            </div>
                            <p className="mt-4">Hello {manualName || "friend"}, Set your counts</p>
                        </div>
                    </div>
                    <div className='flex ms-4 gap-2 items-center'>
                        <button className='text-white text-xl bg-blue-800 hover:bg-blue-950 size-8 rounded-full cursor-pointer' onClick={() => setCount(count - 1)}>-</button>
                        <p className='text-xl'>Value : <span className='inline-block w-[60px]'>{count}</span></p>
                        <button className='text-white text-xl bg-blue-800 hover:bg-blue-950 size-8 rounded-full cursor-pointer' onClick={() => setCount(count + 1)}>+</button>
                        <button className='text-white text-xl bg-blue-800 hover:bg-blue-950 px-4 py-1 rounded-full cursor-pointer' onClick={() => setCount(0)}>Reset</button>
                    </div>
                    <div className="flex flex-col gap-6 lg:gap-2 items-center justify-center mt-4">
                        <div className="flex gap-1 flex-col lg:flex-row items-center">
                            <div className='flex flex-row w-fit text-xl border-2 border-blue-800 rounded-full cursor-pointer'><button className='text-white text-xl bg-blue-800 size-8 rounded-full cursor-pointer' onClick={() => setCount(count - 10)}>-</button><span onClick={() => setCount(10)} className='px-2 text-blue-900 font-medium'>10</span><button className='text-white text-xl bg-blue-800 size-8 rounded-full cursor-pointer' onClick={() => setCount(count + 10)}>+</button></div>
                            <div className='flex flex-row w-fit text-xl border-2 border-blue-800 rounded-full cursor-pointer'><button className='text-white text-xl bg-blue-800 size-8 rounded-full cursor-pointer' onClick={() => setCount(count - 50)}>-</button><span onClick={() => setCount(50)} className='px-2 text-blue-900 font-medium'>50</span><button className='text-white text-xl bg-blue-800 size-8 rounded-full cursor-pointer' onClick={() => setCount(count + 50)}>+</button></div>
                            <div className='flex flex-row w-fit text-xl border-2 border-blue-800 rounded-full cursor-pointer'><button className='text-white text-xl bg-blue-800 size-8 rounded-full cursor-pointer' onClick={() => setCount(count - 100)}>-</button><span onClick={() => setCount(100)} className='px-2 text-blue-900 font-medium'>100</span><button className='text-white text-xl bg-blue-800 size-8 rounded-full cursor-pointer' onClick={() => setCount(count + 100)}>+</button></div>
                        </div>
                        <div className="flex gap-1 flex-col lg:flex-row  items-center">
                            <div className='flex flex-row w-fit text-xl border-2 border-blue-800 rounded-full cursor-pointer'><button className='text-white text-xl bg-blue-800 size-8 rounded-full cursor-pointer' onClick={() => setCount(count - 250)}>-</button><span onClick={() => setCount(250)} className='px-2 text-blue-900 font-medium'>250</span><button className='text-white text-xl bg-blue-800 size-8 rounded-full cursor-pointer' onClick={() => setCount(count + 250)}>+</button></div>
                            <div className='flex flex-row w-fit text-xl border-2 border-blue-800 rounded-full cursor-pointer'><button className='text-white text-xl bg-blue-800 size-8 rounded-full cursor-pointer' onClick={() => setCount(count - 500)}>-</button><span onClick={() => setCount(500)} className='px-2 text-blue-900 font-medium'>500</span><button className='text-white text-xl bg-blue-800 size-8 rounded-full cursor-pointer' onClick={() => setCount(count + 500)}>+</button></div>
                            <div className='flex flex-row w-fit text-xl border-2 border-blue-800 rounded-full cursor-pointer'><button className='text-white text-xl bg-blue-800 size-8 rounded-full cursor-pointer' onClick={() => setCount(count - 1000)}>-</button><span onClick={() => setCount(1000)} className='px-2 text-blue-900 font-medium'>1000</span><button className='text-white text-xl bg-blue-800 size-8 rounded-full cursor-pointer' onClick={() => setCount(count + 1000)}>+</button></div>
                        </div>
                    </div>
                </div>
            </div>


            <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="item-1"
            >
                <AccordionItem value="item-1">
                    <AccordionTrigger>Product Information</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p>
                            Our flagship product combines cutting-edge technology with sleek
                            design. Built with premium materials, it offers unparalleled
                            performance and reliability.
                        </p>
                        <p>
                            Key features include advanced processing capabilities, and an
                            intuitive user interface designed for both beginners and experts.
                        </p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Shipping Details</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p>
                            We offer worldwide shipping through trusted courier partners.
                            Standard delivery takes 3-5 business days, while express shipping
                            ensures delivery within 1-2 business days.
                        </p>
                        <p>
                            All orders are carefully packaged and fully insured. Track your
                            shipment in real-time through our dedicated tracking portal.
                        </p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Return Policy</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p>
                            We stand behind our products with a comprehensive 30-day return
                            policy. If you&apos;re not completely satisfied, simply return the
                            item in its original condition.
                        </p>
                        <p>
                            Our hassle-free return process includes free return shipping and
                            full refunds processed within 48 hours of receiving the returned
                            item.
                        </p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            <Dialog>
                <form>
                    <DialogTrigger asChild>
                        <Button variant="outline">Open Dialog</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Edit profile</DialogTitle>
                            <DialogDescription>
                                Make changes to your profile here. Click save when you&apos;re
                                done.
                            </DialogDescription>
                        </DialogHeader>
                        <h3>Herllo</h3>
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button variant="outline">Cancel</Button>
                            </DialogClose>
                            <Button type="submit">Save changes</Button>
                        </DialogFooter>
                    </DialogContent>
                </form>
            </Dialog>
            <div className="mb-10"></div>
            <ContactForm />
            <div className="mb-20"></div>

            {/* Share Card */}
            <ShareCard
                title="Amazing Blog Post You Should Read!"
                className="mt-8"
            />
            <div className="mb-20"></div>

            {/* Select */}
            <div className="flex justify-center mb-4">
                <Select onValueChange={(value) => setSelected(value)}>
                    <SelectTrigger className="w-[260px] bg-white">
                        <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="red">Red</SelectItem>
                        <SelectItem value="blue">Blue</SelectItem>
                        <SelectItem value="green">Green</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div>
                <div className={`${selected === "red" ? "block" : "hidden"} w-full h-40 bg-red-300 rounded`}></div>
                <div className={`${selected === "blue" ? "block" : "hidden"} w-full h-40 bg-blue-300 rounded`}></div>
                <div className={`${selected === "green" ? "block" : "hidden"} w-full h-40 bg-green-300 rounded`}></div>
            </div>

            <div className="mb-20"></div>

            <div className="flex flex-col lg:flex-row flex-wrap w-full">
                <div className="w-full lg:w-2/5 p-0 lg:pr-5">
                    <FormSheetDB />
                </div>
                <div className="w-full lg:w-3/5 p-0 lg:pl-5 h-full">
                    <FileUpload />
                    <CalMe />
                    {/* Gallery Image */}
                    <div>
                        <EmblaCarousel />
                    </div>

                </div>
            </div>
            <TreeStructure />
            
            {/* Calendar */}
            <FullCalendar/>
        </div>
    )
}

export default Test
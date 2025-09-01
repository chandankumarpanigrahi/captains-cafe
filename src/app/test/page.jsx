"use client"
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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

const Test = () => {
    const router = useRouter();
    const redirect = (path) =>{
        router.push(path)
    }

    return (
        <div className='container'>
            <Tabs defaultValue="lunch" className="w-full mb-5">
                <TabsList>
                    <TabsTrigger value="lunch">Lunch</TabsTrigger>
                    <TabsTrigger value="dinner">Dinner</TabsTrigger>
                    <TabsTrigger value="breakfast">Breakfast</TabsTrigger>
                </TabsList>

                <TabsContent value="lunch">
                    <ul className="flex w-full flex-wrap">
                        {lunch.map((item, index) => (
                            <li key={index} className="p-2 w-1/3 h-full">
                                <div className="border p-4 rounded-lg space-y-2 hover:cursor-pointer bg-white hover:bg-amber-50 hover:text-amber-900">
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
                            <li key={index} className="p-2 w-1/3 h-full">
                                <div className="border p-4 rounded-lg space-y-2 hover:cursor-pointer bg-white hover:bg-amber-50 hover:text-amber-900">
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
                            <li key={index} className="p-2 w-1/3 h-full">
                                <div className="border p-4 rounded-lg space-y-2 hover:cursor-pointer bg-white hover:bg-amber-50 hover:text-amber-900">
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

            <button onClick={() => redirect("/about")} className='transition-all duration-400 ease-in-out bg-blue-900 border-2 border-blue-950 text-white cursor-pointer px-6 py-2 rounded-full my-6 hover:bg-amber-900 hover:border-amber-950 ring-8'>Button Routing to <span className='font-semibold'>About</span></button>

            <hr />

            <div className="flex flex-row gap-2 my-8">
                <Link href="/test/menu1" className='border-2 border-blue-200 hover:border-blue-400 bg-blue-100 px-3 py-1.5 text-blue-800 rounded-full'>Menu 1</Link>
                <Link href="/test/menu2" className='border-2 border-blue-200 hover:border-blue-400 bg-blue-100 px-3 py-1.5 text-blue-800 rounded-full'>Menu 2</Link>
                <Link href="/test/menu3" className='border-2 border-blue-200 hover:border-blue-400 bg-blue-100 px-3 py-1.5 text-blue-800 rounded-full'>Menu 3</Link>
                <Link href="/test/menu4" className='border-2 border-blue-200 hover:border-blue-400 bg-blue-100 px-3 py-1.5 text-blue-800 rounded-full'>Menu 4</Link>
            </div>

            <hr />
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
            <FormSheetDB />
        </div>
    )
}

export default Test
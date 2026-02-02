"use client"
import { Card } from '@/components/ui/card'
import React from 'react'
import { useState, useRef } from 'react'
import Button from '@/components/common/button'
import VideoTestimonialsTable from './videoTestimonialsTable'

// Breadcrumb
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import CardHeading from '../../elements/CardHeading'
import Image from 'next/image'
import { toast } from "react-hot-toast";

// Input
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FaRegCalendarAlt } from "react-icons/fa";

import feauredImage from "@/assets/images/pages/testimonials/featured.png"

const Page = () => {
    const [activeTab, setActiveTab] = useState("tab1")

    // For the input fields
    const [username, setUsername] = useState("")
    const [designation, setDesignation] = useState("")
    const [reviewHeading, setReviewHeading] = useState("")
    const [testimonial, setTestimonial] = useState("")
    const [selectedFile, setSelectedFile] = useState(null)
    const [date, setDate] = useState("")
    const fileInputRef = useRef(null)

    // For the Udated Card Design
    const [updatedName, setUpdatedName] = useState("Silan Panigrahi")
    const [updatedDesignation, setUpdatedDesignation] = useState("Product Manager, Purnima & co.")
    const [updatedReviewHeading, setUpdatedReviewHeading] = useState("A Perfect Blend of Taste and Ambiance!")
    const [updatedTestimonial, setUpdatedTestimonial] = useState("Captain's Cafe is a gem in Bhubaneswar! The food is delicious, the coffee is exceptional, and the cozy ambiance makes it a perfect spot to relax. The staff is friendly and attentive, adding to the wonderful experience. Highly recommended for food lovers and coffee enthusiasts!")
    const [updatedImage, setUpdatedImage] = useState(feauredImage)

    const handleSubmit = () => {
        if (username) setUpdatedName(username)
        if (designation) setUpdatedDesignation(designation)
        if (reviewHeading) setUpdatedReviewHeading(reviewHeading)
        if (testimonial) setUpdatedTestimonial(testimonial)
        if (selectedFile) {
            setUpdatedImage(URL.createObjectURL(selectedFile))
        }
        toast.success("Testimonial updated successfully!");
    }

    const handleReset = () => {
        setUsername("")
        setDesignation("")
        setReviewHeading("")
        setTestimonial("")

        setSelectedFile(null)
        if (fileInputRef.current) {
            fileInputRef.current.value = ""
        }
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setSelectedFile(file)
        }
    }

    return (
        <div className='w-full'>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/admin/content">Content</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Testimonials</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <div className='flex flex-col md:flex-row w-full mt-3'>
                <Card className="rounded-md gap-3 p-4 h-fit w-full">
                    <div className="flex flex-row text-lg">
                        <div className={`${activeTab === "tab1" ? "border-blue-900 border-b-3 font-semibold" : ""} px-4 py-1 cursor-pointer`} onClick={() => setActiveTab("tab1")}>Featured Testimonials</div>
                        <div className={`${activeTab === "tab2" ? "border-blue-900 border-b-3 font-semibold" : ""} px-4 py-1 cursor-pointer`} onClick={() => setActiveTab("tab2")}>Video Review</div>
                    </div>

                    {/* Tab 1 Section */}
                    <div className={`${activeTab === "tab1" ? "block" : "hidden"} w-full flex flex-col gap-2`}>
                        <hr className='mb-2' />
                        <div className="flex flex-col md:flex-row gap-5">
                            <div className="flex flex-col gap-3">
                                <div className="flex flex-col w-full gap-1">
                                    <CardHeading title="Update" />
                                    <hr className='w-full' />
                                </div>
                                <div className='w-full h-full border-0 md:border-r border-gray-200 pr-0 md:pr-3'>
                                    <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-5 gap-4 w-full">
                                        <div className="space-y-1">
                                            <Label className="text-[14px] text-gray-600 block font-medium" mandatory={true}>User Image</Label>
                                            <Input
                                                type="file"
                                                placeholder="Upload File"
                                                className="w-full px-3 py-0.5 text-sm"
                                                onChange={handleFileChange}
                                                ref={fileInputRef}
                                            />
                                            <div className="space-y-1">
                                                <Label className="text-[14px] text-gray-600 block font-medium" mandatory={true}>User Full Name</Label>
                                                <Input
                                                    placeholder="Enter User Full Name"
                                                    className="w-full py-2 text-sm shadow-sm"
                                                    value={username}
                                                    onChange={(e) => setUsername(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-1">
                                            <Label className="text-[14px] text-gray-600 block font-medium" mandatory={true}>Designation</Label>
                                            <Input
                                                placeholder="Enter Designation"
                                                className="w-full py-2 text-sm shadow-sm"
                                                value={designation}
                                                onChange={(e) => setDesignation(e.target.value)}
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <Label className="text-[14px] text-gray-600 block font-medium" mandatory={true}>Review Heading</Label>
                                            <Input
                                                placeholder="Enter Review Heading"
                                                className="w-full py-2 text-sm shadow-sm"
                                                value={reviewHeading}
                                                onChange={(e) => setReviewHeading(e.target.value)}
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <Label className="text-[14px] text-gray-600 block font-medium" mandatory={true}>
                                                Text Body
                                            </Label>
                                            <textarea
                                                placeholder="Enter description or content"
                                                className="w-full min-h-[80px] p-2 border shadow-md border-input rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent resize-none placeholder-gray-400"
                                                value={testimonial}
                                                onChange={(e) => setTestimonial(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    {/* Reset and Update Buttons */}
                                    <div className="flex gap-2 mt-4">
                                        <Button
                                            variant='outline'
                                            text="Reset"
                                            type="button"
                                            radius='md'
                                            className="w-fit ms-auto"
                                            size='sm'
                                            onClick={handleReset}
                                        />
                                        <Button
                                            text="Update"
                                            type="submit"
                                            radius='md'
                                            className="w-full md:w-fit px-4"
                                            size='sm'
                                            onClick={handleSubmit}
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* Fetched Testimonials Section */}
                            <div className="flex w-full lg:max-w-[500px] flex-col justify-between gap-4">
                                <div className="flex flex-col w-full gap-1">
                                    <CardHeading title="Preview" />
                                    <hr className='w-full' />
                                </div>
                                <div className="flex flex-col">
                                    <div className="relative w-full h-full rounded-xl overflow-hidden">
                                        <Image src={updatedImage} alt="Featured Image" width={500} height={500} className='h-full w-full object-cover' />
                                        <div className="flex absolute inset-0 z-1 opacity-90 bg-gradient-to-b from-transparent from-50% via-stone-800 via-90% to-black to-100%">
                                            <div className="text-white w-full h-ful flex flex-col mt-auto px-6 py-4">
                                                <h5 className='text-[24px] font-semibold'>{updatedName}</h5>
                                                <p className='text-sm text-gray-200 font-light'>{updatedDesignation}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative w-full flex flex-col mb-6 lg:mb-0">
                                    <h1 className='text-2xl text-center md:text-left font-semibold text-amber-900 dark:text-orange-100 mb-2'>{updatedReviewHeading}</h1>
                                    <p className='text-gray-700 dark:text-gray-300 p-0 lg:pr-12  text-center md:text-left'>{updatedTestimonial}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tab 2 Section */}
                    <div className={`${activeTab === "tab2" ? "block" : "hidden"} flex flex-col gap-2`}>
                        <div className="flex flex-row items-center">
                            <CardHeading title="View" bottomLine="false" />
                        </div>
                        <hr className='mb-2' />
                        <div className="flex flex-col xl:flex-row gap-4">
                            <div className="w-full xl:w-[350px] shrink-0">
                                <form className="space-y-2 w-full max-h-[calc(100vh-270px)] overflow-y-auto pr-2">
                                    <div className="w-full">
                                        <Label className="text-[14px] text-gray-600 block font-medium">
                                            User Name
                                        </Label>
                                        <Input
                                            placeholder="Enter Full Name"
                                            className="w-full px-3 py-0.5 text-sm"
                                        />
                                    </div>
                                    <div className="w-full">
                                        <Label className="text-[14px] text-gray-600 block font-medium mb-1">Video Testimonial</Label>
                                        <Input
                                            type="file"
                                            placeholder="Upload File"
                                            className="w-full px-3 py-0.5 text-sm"
                                        />
                                    </div>
                                </form>
                                {/* Reset and Update Buttons */}
                                <div className="flex gap-2 mt-4">
                                    <Button
                                        variant='outline'
                                        text="Reset"
                                        type="button"
                                        radius='md'
                                        className="w-fit"
                                        size='sm'
                                    />
                                    <Button
                                        text="Submit"
                                        type="submit"
                                        radius='md'
                                        className="flex-1"
                                        size='sm'
                                    />
                                </div>
                            </div>
                            <div className="flex-1 overflow-hidden border-l pl-5 border-gray-200">
                                <VideoTestimonialsTable />
                            </div>
                        </div>
                    </div>

                </Card>
            </div>
        </div>
    )
}

export default Page
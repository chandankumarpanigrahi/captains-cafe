"use client"
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Button from '@/components/common/button'
import React, { useState, useRef } from 'react'
import { FiClock } from 'react-icons/fi'
import { FaRegEdit } from "react-icons/fa";

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

import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"

// Images
import Image from 'next/image'
import aboutUsImage from "@/assets/images/pages/about/aboutUs.png"
import brandIdentity from "@/assets/images/pages/about/brandIdentity.png"

const Page = () => {
    return (
        <>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/admin/content">Content</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>About Us</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <div className='flex flex-col md:flex-row w-full mt-3'>
                <Card className="rounded-md gap-3 p-4 h-fit w-full md:w-[370px] mb-4">
                    <CardHeading title="Edit" bottomLine="true" />
                    <form className="space-y-2 w-full max-h-[calc(100vh-240px)] overflow-y-auto">
                        <div className="w-full">
                            <Label className="text-[14px] text-gray-600 block font-medium mb-1">About Us - Image</Label>
                            <Input
                                type="file"
                                placeholder="Upload File"
                                className="w-full px-3 py-0.5 text-sm"
                            />
                        </div>
                        <div className="w-full">
                            <Label className="text-[14px] text-gray-600 block font-medium">
                                About Us - Text
                            </Label>
                            <textarea
                                placeholder="Enter description or content"
                                className="w-full min-h-[80px] p-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent resize-none placeholder-gray-400"
                            />
                        </div>
                        <div className="w-full">
                            <Label className="text-[14px] text-gray-600 block font-medium mb-1">Brand Identity - Image</Label>
                            <Input
                                type="file"
                                placeholder="Upload File"
                                className="w-full px-3 py-0.5 text-sm"
                            />
                        </div>
                        <div className="w-full">
                            <Label className="text-[14px] text-gray-600 block font-medium mb-1">
                                Brand Identity - Text
                            </Label>
                            <textarea
                                placeholder="Enter description or content"
                                className="w-full min-h-[80px] p-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent resize-none placeholder-gray-400"
                            />
                        </div>
                        <div className="w-full">
                            <Label className="text-[14px] text-gray-600 block font-medium mb-1">
                                Mission
                            </Label>
                            <textarea
                                placeholder="Enter description or content"
                                className="w-full min-h-[80px] p-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent resize-none placeholder-gray-400"
                            />
                        </div>
                        <div className="w-full">
                            <Label className="text-[14px] text-gray-600 block font-medium mb-1">
                                Vision
                            </Label>
                            <textarea
                                placeholder="Enter description or content"
                                className="w-full min-h-[80px] p-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent resize-none placeholder-gray-400"
                            />
                        </div>
                        <div className="w-full">
                            <Label className="text-[14px] text-gray-600 block font-medium mb-1">Mobile App- Image</Label>
                            <Input
                                type="file"
                                placeholder="Upload File"
                                className="w-full px-3 py-0.5 text-sm"
                            />
                        </div>
                        <div className="w-full">
                            <Label className="text-[14px] text-gray-600 block font-medium mb-1">Android App Link</Label>
                            <Input
                                placeholder="Paste Link Here"
                                className="w-full px-3 py-0.5 text-sm"
                            />
                        </div>
                        <div className="w-full">
                            <Label className="text-[14px] text-gray-600 block font-medium mb-1">iOS App Link</Label>
                            <Input
                                placeholder="Paste Link Here"
                                className="w-full px-3 py-0.5 text-sm"
                            />
                        </div>
                    </form>
                    {/* Reset and Update Buttons */}
                    <div className="flex gap-2">
                        <Button
                            variant='outline'
                            text="Reset"
                            type="button"
                            radius='md'
                            className="w-fit"
                            size='sm'
                        />
                        <Button
                            text="Update"
                            type="submit"
                            radius='md'
                            className="flex-1"
                            size='sm'
                        />
                    </div>
                </Card>
                <Card className="rounded-md gap-1.5 p-4 w-full h-fit ml-0 md:ml-3">
                    <div className="flex">
                        <CardHeading title="Edit" bottomLine="false" />
                        <Button text="EDIT" className='ml-auto' size='sm' icon={<FaRegEdit />} radius='sm' iconPosition="left" />
                    </div>
                    <hr />
                    <div className="flex flex-col flex-wrap gap-y-2 py-2">
                        <div className="flex flex-col sm:flex-row">
                            <h2 className='text-gray-600 block font-medium text-md w-[220px] pb-0.5 sm:pb-0'>About Us</h2>
                            <div className="flex flex-col w-full sm:w-[calc(100%-220px)] gap-2">
                                <Dialog>
                                    <DialogTrigger className='w-fit before:content-["-"] sm:before:content-[":"] before:pr-3 sm:before:pr-2 before:font-bold before:text-gray-500'>
                                        <div className='inline p-0 text-blue-600 underline underline-offset-2 decoration-2 cursor-pointer decoration-blue-500 font-semibold'>Image</div>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[1225px]">
                                        <Image src={aboutUsImage} alt="About Image" className='w-full' />
                                    </DialogContent>
                                </Dialog>
                                <p className='text-gray-500 before:content-["-"] sm:before:content-[":"] before:pr-3 sm:before:pr-2 before:font-bold text-justify'>The Captain&apos;s Café, with multiple locations in Bhubaneswar where every meal is a journey and every visit an opportunity to sail into exciting flavors.
                                    Our catering/bakery division, where we provide healthy and hygienic meals to the students of the School of Maritime Studies (SOMS) at Centurion University, ensuring a nutritious dining experience for maritime professionals in training.</p>
                            </div>
                        </div>
                        <hr />

                        <div className="flex flex-col sm:flex-row">
                            <h2 className='text-gray-600 block font-medium text-md w-[220px] pb-0.5 sm:pb-0'>Brand Identity</h2>
                            <div className="flex flex-col w-full sm:w-[calc(100%-220px)] gap-2">
                                <Dialog>
                                    <DialogTrigger className='w-fit before:content-["-"] sm:before:content-[":"] before:pr-3 sm:before:pr-2 before:font-bold before:text-gray-500'>
                                        <div className='inline p-0 text-blue-600 underline underline-offset-2 decoration-2 cursor-pointer decoration-blue-500 font-semibold'>Image</div>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[1225px]">
                                        <Image src={brandIdentity} alt="About Image" className='w-full' />
                                    </DialogContent>
                                </Dialog>
                                <p className='text-gray-500 before:content-["-"] sm:before:content-[":"] before:pr-3 sm:before:pr-2 before:font-bold text-justify'>The Captain&apos;s Cafe is inspired by a maritime and sea-sailing theme, where every visit is a journey into a world of flavors. Drawing on the captain&apso;s spirit of exploration, we invite our guests to embark on a culinary voyage guided by the adventurous spirit of the sea. It symbolizes leadership, guidance, and discovery, which reflects our commitment to providing a bold and exciting dining experience.</p>
                            </div>
                        </div>
                        <hr />

                        <div className="flex flex-col sm:flex-row">
                            <h2 className='text-gray-600 block font-medium text-md w-[220px] pb-0.5 sm:pb-0'>Mission</h2>
                            <div className="flex flex-col w-full sm:w-[calc(100%-220px)] gap-2">
                                <p className='text-gray-500 before:content-["-"] sm:before:content-[":"] before:pr-3 sm:before:pr-2 before:font-bold text-justify'>At The Captain&apos;s Café, our mission is to take you on a culinary voyage around the globe, offering diverse and delectable dishes all under one roof. With a unique nautical flair and a passion for delivering exceptional flavors, we aim to create an immersive dining experience that celebrates the rich and diverse culinary heritage of the world.</p>
                            </div>
                        </div>
                        <hr />

                        <div className="flex flex-col sm:flex-row">
                            <h2 className='text-gray-600 block font-medium text-md w-[220px] pb-0.5 sm:pb-0'>Vision</h2>
                            <div className="flex flex-col w-full sm:w-[calc(100%-220px)] gap-2">
                                <p className='text-gray-500 before:content-["-"] sm:before:content-[":"] before:pr-3 sm:before:pr-2 before:font-bold text-justify'>Our vision is to be the premier destination for food enthusiasts seeking a maritime adventure through international cuisine. We strive to create a café where every meal is a journey, and every visit is an opportunity to explore exciting, bold flavors. At The Captain&apso;s Café, we invite you to embark on a flavorful voyage of discovery with us.</p>
                            </div>
                        </div>
                        <hr />

                        <div className="flex flex-row flex-wrap gap-y-2 py-2">
                            <div className="flex flex-col sm:flex-row w-full">
                                <h2 className='text-gray-600 block font-medium text-md w-[220px] pb-0.5 sm:pb-0'>Mobile App - Image</h2>
                                <Dialog>
                                    <DialogTrigger className='w-fit before:content-["-"] sm:before:content-[":"] before:pr-3 sm:before:pr-2 before:font-bold before:text-gray-500'>
                                        <div className='inline p-0 text-blue-600 underline underline-offset-2 decoration-2 cursor-pointer decoration-blue-500 font-semibold'>Image</div>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[1225px]">
                                        <Image src={brandIdentity} alt="About Image" className='w-full' />
                                    </DialogContent>
                                </Dialog>
                            </div>
                            <div className="flex flex-col sm:flex-row w-full lg:w-1/2">
                                <h2 className='text-gray-600 block font-medium text-md w-[220px] pb-0.5 sm:pb-0'>Android App Link</h2>
                                <div className='w-fit before:content-["-"] sm:before:content-[":"] before:pr-3 sm:before:pr-2 before:font-bold before:text-gray-500'>
                                    <a href="https://play.google.com/store/apps/details?id=com.captainscafeedinburgh&pcampaignid=web_share" target='_blank' className='text-blue-600 underline underline-offset-2 decoration-2 cursor-pointer decoration-blue-500 font-semibold'>Link</a>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row w-full lg:w-1/2">
                                <h2 className='text-gray-600 block font-medium text-md w-[220px] pb-0.5 sm:pb-0'>iOS App Link</h2>
                                <div className='w-fit before:content-["-"] sm:before:content-[":"] before:pr-3 sm:before:pr-2 before:font-bold before:text-gray-500'>
                                    <a href="https://play.google.com/store/apps/details?id=com.captainscafeedinburgh&pcampaignid=web_share" target='_blank' className='text-blue-600 underline underline-offset-2 decoration-2 cursor-pointer decoration-blue-500 font-semibold'>Link</a>
                                </div>
                            </div>
                        </div>

                    </div>

                </Card>
            </div>
        </>
    )
}

export default Page
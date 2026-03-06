"use client"
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Button from '@/components/common/button'
import React, { useState, useRef } from 'react'
import { FaRegEye } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { IoCaretUp, IoCaretDown } from "react-icons/io5";
import { FaPlusSquare } from "react-icons/fa";

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


const ActionToolbar = () => (
    <div className='flex bg-gray-50 w-fit pt-0.5 pb-1 px-1 rounded-b-md border border-gray-300 shadow-[0_2px_4.7px_0_rgba(0,0,0,0.19)] mr-2 ms-auto gap-1'>
        <RiDeleteBin6Line size={18} className='text-red-600 cursor-pointer' />
        <FaRegEye size={18} className='cursor-pointer text-[#E0AC00]' />
        <AiFillEdit size={18} className='cursor-pointer text-blue-700' />
        <IoCaretUp size={18} className='cursor-pointer text-green-600' />
        <IoCaretDown size={18} className='cursor-pointer text-green-600' />
    </div>
);


const ManageContact = () => {

    return (
        <>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/admin/content">Content</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Contact Us</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <div className='flex flex-col md:flex-row w-full mt-3'>
                <Card className="rounded-md gap-3 p-4 h-fit w-full md:w-[370px] mb-4">
                    <CardHeading title="Update" bottomLine="true" />
                    <form className="space-y-2 w-full max-h-[calc(100vh-240px)] overflow-y-auto">
                        <div className="w-full">
                            <div className="flex flex-col mb-2">
                                <div className="flex flex-row justify-between items-center">
                                    <Label className="text-[14px] text-gray-600 block font-medium mb-1">Location - <span className='italic font-light'>&#40;In Text&#41;</span></Label>
                                    <FaPlusSquare size={18} className='cursor-pointer text-blue-800' />
                                </div>
                                <div className='flex flex-col'>
                                    <textarea
                                        placeholder="Enter address"
                                        className="w-full min-h-[80px] p-2 border border-gray-300 rounded text-sm  resize-none placeholder-gray-400"
                                    />
                                </div>
                            </div>
                            <Label className="text-[14px] text-gray-600 block font-medium mb-1">Location - <span className='italic font-light'>&#40;Map URL&#41;</span></Label>
                            <div className='flex flex-col'>
                                <Input
                                    type="text"
                                    placeholder="Paste URL"
                                    className="w-full px-3 py-0.5 text-sm"
                                />
                                <ActionToolbar />
                            </div>
                        </div>

                        <div className="w-full">
                            <div className="flex flex-row justify-between items-center">
                                <Label className="text-[14px] text-gray-600 block font-medium mb-1">Café Hours</Label>
                                <FaPlusSquare size={18} className='cursor-pointer text-blue-800' />
                            </div>
                            <div className='flex flex-col'>
                                <textarea
                                    placeholder="Enter description or content"
                                    className="w-full min-h-[80px] p-2 border border-gray-300 rounded text-sm  resize-none placeholder-gray-400"
                                />
                                <ActionToolbar />
                            </div>
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
                                placeholder="Enter brand identity description"
                                className="w-full min-h-[80px] p-2 border border-gray-300 rounded text-sm  resize-none placeholder-gray-400"
                            />
                        </div>
                        <div className="w-full">
                            <Label className="text-[14px] text-gray-600 block font-medium mb-1">
                                Mission
                            </Label>
                            <textarea
                                placeholder="Enter description or content"
                                className="w-full min-h-[80px] p-2 border border-gray-300 rounded text-sm  resize-none placeholder-gray-400"
                            />
                        </div>
                        <div className="w-full">
                            <Label className="text-[14px] text-gray-600 block font-medium mb-1">
                                Vision
                            </Label>
                            <textarea
                                placeholder="Enter description or content"
                                className="w-full min-h-[80px] p-2 border border-gray-300 rounded text-sm  resize-none placeholder-gray-400"
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
                        <CardHeading title="View" bottomLine="false" />
                        <Button text="EDIT" className='ml-auto' size='sm' icon={<FaRegEdit />} radius='sm' iconPosition="left" />
                    </div>
                    <hr />
                    <div className="flex flex-col flex-wrap gap-y-3 py-2">
                        <div className="flex flex-col sm:flex-row">
                            <h2 className='text-gray-600 block font-medium text-md w-[220px] pb-0.5 sm:pb-0'>Location</h2>
                            <div className="flex flex-col w-full sm:w-[calc(100%-220px)] gap-2">
                                <p className='text-gray-500 before:content-["-"] sm:before:content-[":"] before:pr-3 sm:before:pr-2 before:font-bold text-justify'>Ekamra Kanan Road, near Chilika Fresh,
                                    Rental Colony, IRC Village, Nayapalli,
                                    Bhubaneswar Odisha 751011</p>
                                <p className='text-gray-500 before:content-["-"] sm:before:content-[":"] before:pr-3 sm:before:pr-2 before:font-bold text-justify'>768, Beside Government Veterinary Hospital,
                                    Maharishi College Rd, Saheed Nagar,
                                    Bhubaneswar, Odisha 751007</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:h-[54px]">
                            <div className="flex flex-col sm:flex-row w-full md:w-1/2 h-fit">
                                <h2 className='text-gray-600 block font-medium text-md w-[220px] pb-0.5 sm:pb-0 h-fit'>Working Hours</h2>
                                <div className="flex flex-col h-fit gap-2">
                                    <p className='text-gray-500 before:content-["-"] sm:before:content-[":"] before:pr-3 sm:before:pr-2 before:font-bold text-justify'>Monday - Saturday</p>
                                    <p className='text-gray-500 before:content-["-"] sm:before:content-[":"] before:pr-3 sm:before:pr-2 before:font-bold text-justify'>09:00 am - 10:00 pm</p>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row w-full md:w-1/2 h-fit">
                                <h2 className='text-gray-600 block font-medium text-md w-[220px] pb-0.5 sm:pb-0 h-fit'>Mobile Number</h2>
                                <div className="flex flex-col h-fit gap-2">
                                    <p className='text-gray-500 before:content-["-"] sm:before:content-[":"] before:pr-3 sm:before:pr-2 before:font-bold text-justify'>+91 81447 74349</p>
                                </div>
                            </div>
                        </div>

                        <hr />

                        <div className="flex flex-row flex-wrap gap-y-3 py-2">
                            <div className="flex flex-col sm:flex-row w-full">
                                <h2 className='text-gray-600 block font-medium text-md w-[220px] pb-0.5 sm:pb-0'>Website</h2>
                                <p className='text-gray-500 before:content-["-"] sm:before:content-[":"] before:pr-3 sm:before:pr-2 before:font-bold text-justify'>https://scottishcafe.co.uk</p>
                            </div>
                            <div className="flex flex-col sm:flex-row w-full">
                                <h2 className='text-gray-600 block font-medium text-md w-[220px] pb-0.5 sm:pb-0'>Instagram</h2>
                                <p className='text-gray-500 before:content-["-"] sm:before:content-[":"] before:pr-3 sm:before:pr-2 before:font-bold text-justify'><span className="cursor-pointer text-gray-300">https://instagram.com/</span>thecaptainscafe.india</p>
                            </div>
                            <div className="flex flex-col sm:flex-row w-full">
                                <h2 className='text-gray-600 block font-medium text-md w-[220px] pb-0.5 sm:pb-0'>Facebook</h2>
                                <p className='text-gray-500 before:content-["-"] sm:before:content-[":"] before:pr-3 sm:before:pr-2 before:font-bold text-justify'><span className="cursor-pointer text-gray-300">https://facebook.com/</span>thecaptainscafe.india</p>
                            </div>
                            <div className="flex flex-col sm:flex-row w-full">
                                <h2 className='text-gray-600 block font-medium text-md w-[220px] pb-0.5 sm:pb-0'>Twitter</h2>
                                <p className='text-gray-500 before:content-["-"] sm:before:content-[":"] before:pr-3 sm:before:pr-2 before:font-bold text-justify'><span className="cursor-pointer text-gray-300">https://twitter.com/</span>thecaptainscafe.india</p>
                            </div>
                            <div className="flex flex-col sm:flex-row w-full">
                                <h2 className='text-gray-600 block font-medium text-md w-[220px] pb-0.5 sm:pb-0'>LinkedIn</h2>
                                <p className='text-gray-500 before:content-["-"] sm:before:content-[":"] before:pr-3 sm:before:pr-2 before:font-bold text-justify'><span className="cursor-pointer text-gray-300">https://linkedin.com/</span>thecaptainscafe.india</p>
                            </div>
                            <div className="flex flex-col sm:flex-row w-full">
                                <h2 className='text-gray-600 block font-medium text-md w-[220px] pb-0.5 sm:pb-0'>Youtube</h2>
                                <p className='text-gray-500 before:content-["-"] sm:before:content-[":"] before:pr-3 sm:before:pr-2 before:font-bold text-justify'><span className="cursor-pointer text-gray-300">https://youtube.com/</span>thecaptainscafe.india</p>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </>
    )
}

export default ManageContact;

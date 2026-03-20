"use client"
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Button from '@/components/common/button'
import React, { useState } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineCall } from "react-icons/md";
import { toast } from "react-hot-toast";

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


import { Checkbox } from '@/components/ui/checkbox'
import { Field } from '@/components/ui/field'
import AllSupportTable from './allSupportTable'
import CustomerDetails from './customerDetails'

// This is for mobile number input
const Support = () => {
    const [mobileNumbers, setMobileNumbers] = useState([Array(10).fill("")]);
    const [activeTab, setActiveTab] = useState("all");

    const handleUpdate = (e) => {
        e?.preventDefault();
        toast.success("Updated successfully!");
    };

    const handleEdit = (e) => {
        e?.preventDefault();
    };

    const handleReset = (e) => {
        e?.preventDefault();
    };

    return (
        <>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/admin/content">Content</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Support</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <div className='flex flex-col md:flex-row w-full mt-3'>
                <div className="flex flex-col md:w-[370px]">
                    <Card className="rounded-md gap-3 p-4 h-fit w-full mb-4">
                        <CardHeading title="Edit" bottomLine="true" />
                        <form onSubmit={handleUpdate} className="space-y-4 w-full max-h-[calc(100vh-240px)] overflow-y-auto">

                            <div className="w-full space-y-4">
                                <div className="flex flex-row justify-between items-center mb-1">
                                    <Label className="text-[14px] text-gray-600 block font-medium mb-1">Order Support</Label>
                                    <Field orientation="horizontal" className="flex w-fit">
                                        <Checkbox id="terms-checkbox-1" name="terms-checkbox-1" />
                                        <Label htmlFor="terms-checkbox-1" className="mb-0 text-sm">Show CC</Label>
                                    </Field>
                                </div>
                                {mobileNumbers.map((digits, entryIndex) => (
                                    <div key={entryIndex} className="flex flex-row group">
                                        <div className="flex flex-row justify-between">
                                            {digits.map((digit, digitIndex) => (
                                                <Input
                                                    key={digitIndex}
                                                    type="number"
                                                    placeholder="-"
                                                    className="w-1/12 px-1.5 py-0.5 text-lg rounded-sm focus-visible:ring-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                                    value={digit}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="w-full space-y-4">
                                <div className="flex flex-row justify-between items-center mb-1">
                                    <Label className="text-[14px] text-gray-600 block font-medium mb-1">Website Support</Label>
                                    <Field orientation="horizontal" className="flex w-fit">
                                        <Checkbox id="terms-checkbox-2" name="terms-checkbox-2" />
                                        <Label htmlFor="terms-checkbox-2" className="mb-0 text-sm">Show CC</Label>
                                    </Field>
                                </div>
                                {mobileNumbers.map((digits, entryIndex) => (
                                    <div key={entryIndex} className="flex flex-row group">
                                        <div className="flex flex-row justify-between">
                                            {digits.map((digit, digitIndex) => (
                                                <Input
                                                    key={digitIndex}
                                                    type="number"
                                                    placeholder="-"
                                                    className="w-1/12 px-1.5 py-0.5 text-lg rounded-sm focus-visible:ring-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                                    value={digit}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="w-full space-y-4">
                                <div className="flex flex-row justify-between items-center mb-1">
                                    <Label className="text-[14px] text-gray-600 block font-medium mb-1">Café Support</Label>
                                    <Field orientation="horizontal" className="flex w-fit">
                                        <Checkbox id="terms-checkbox-3" name="terms-checkbox-3" />
                                        <Label htmlFor="terms-checkbox-3" className="mb-0 text-sm">Show CC</Label>
                                    </Field>
                                </div>
                                {mobileNumbers.map((digits, entryIndex) => (
                                    <div key={entryIndex} className="flex flex-row group">
                                        <div className="flex flex-row justify-between">
                                            {digits.map((digit, digitIndex) => (
                                                <Input
                                                    key={digitIndex}
                                                    type="number"
                                                    placeholder="-"
                                                    className="w-1/12 px-1.5 py-0.5 text-lg rounded-sm focus-visible:ring-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                                    value={digit}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </form>

                        <div className="flex gap-2">
                            <Button
                                variant='outline'
                                text="Reset"
                                type="button"
                                radius='md'
                                className="w-fit"
                                size='sm'
                                onClick={handleReset}
                            />
                            <Button
                                text="Update"
                                type="submit"
                                radius='md'
                                className="flex-1"
                                size='sm'
                                onClick={handleUpdate}
                            />
                        </div>
                    </Card>

                    {/* Number View */}
                    <div className="flex flex-col gap-3">

                        <div className="flex flex-col bg-emerald-700 rounded-md border-2 border-emerald-700 overflow-hidden">
                            <h3 className='text-center text-xl w-full p-4 bg-white/80 text-emerald-700'><span className="font-bold">Order</span> Related Support </h3>
                            <div className="flex items-center gap-3 text-white text-xl p-3 justify-center">
                                <MdOutlineCall size={26} className='opacity-60' />
                                <p className='text-2xl font-bold'>1800 159 159</p>
                            </div>
                        </div>

                        <div className="flex flex-col bg-blue-900 rounded-md border-2 border-blue-900 overflow-hidden">
                            <h3 className='text-center text-xl w-full p-4 bg-white/80 text-blue-900'><span className="font-bold">Website</span> Related Support </h3>
                            <div className="flex items-center gap-3 text-white text-xl p-3 justify-center">
                                <MdOutlineCall size={26} className='opacity-60' />
                                <p className='text-2xl font-bold'>+91 89596 89623</p>
                            </div>
                        </div>

                        <div className="flex flex-col bg-yellow-900 rounded-md border-2 border-yellow-900 overflow-hidden">
                            <h3 className='text-center text-xl w-full p-4 bg-white/80 text-yellow-900'><span className="font-bold">Café</span> Related Support </h3>
                            <div className="flex items-center gap-3 text-white text-xl p-3 justify-center">
                                <MdOutlineCall size={26} className='opacity-60' />
                                <p className='text-2xl font-bold'>1800 066 011</p>
                            </div>
                        </div>

                    </div>
                </div>




                {/* Right Side View area */}
                <Card className="rounded-md gap-1.5 p-4 w-full h-fit ml-0 md:ml-3">
                    <div className="flex">
                        <CardHeading title="View" bottomLine="false" />
                        <Button
                            text="EDIT"
                            className='ml-auto hidden'
                            size='sm'
                            icon={<FaRegEdit />}
                            radius='sm'
                            iconPosition="left"
                            onClick={handleEdit}
                        />
                    </div>
                    <hr />
                    <div className='flex flex-row gap-3 w-full overflow-x-auto'>
                        <div className={`${activeTab === "all" ? "border-b-4 text-black border-black/80" : ""} p-2 text-lg cursor-pointer whitespace-nowrap hover:bg-blue-50`} onClick={() => setActiveTab("all")}>All Supports</div>
                        <div className={`${activeTab === "order" ? "border-b-4 text-emerald-700 border-emerald-700" : ""} p-2 text-lg cursor-pointer whitespace-nowrap hover:bg-blue-50`} onClick={() => setActiveTab("order")}>Order Supports</div>
                        <div className={`${activeTab === "website" ? "border-b-4 text-blue-800 border-blue-800" : ""} p-2 text-lg cursor-pointer whitespace-nowrap hover:bg-blue-50`} onClick={() => setActiveTab("website")}>Website Supports</div>
                        <div className={`${activeTab === "cafe" ? "border-b-4 text-yellow-800 border-yellow-800" : ""} p-2 text-lg cursor-pointer whitespace-nowrap hover:bg-blue-50`} onClick={() => setActiveTab("cafe")}>Café Supports</div>
                    </div>

                    <div>
                        {/* <AllSupportTable /> */}
                        <CustomerDetails />
                    </div>
                </Card>
            </div>
        </>
    )
}

export default Support;
"use client"
import React, { useState } from 'react'
import { Editor } from 'primereact/editor';
import { toast } from "react-hot-toast";
import { FiPlusSquare } from "react-icons/fi";
import { GoPlus, GoX } from "react-icons/go";
import { FiClock, FiCalendar } from "react-icons/fi";
import { MdOutlineEdit, MdOutlineDelete } from "react-icons/md";

// Breadcrumb
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import CardHeading from '@/app/admin/elements/CardHeading'
import { Card } from "@/components/ui/card"
import Button from '@/components/common/button'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const AddLoyaltyProgram = () => {
    const [date, setDate] = React.useState("");
    const [editorText, setEditorText] = useState('');
    const handleSubmit = () => {
        toast.success("Offer submitted successfully!");
    };

    const handleReset = () => {
        setEditorText('');
        toast.success("Form reset successfully!");
    };

    return (
        <div className='w-full'>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/admin/content">Content</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/admin/content/offers">Offers</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Add New Offer</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className='flex flex-col md:flex-row w-full mt-3 gap-4'>

                {/* Left Column */}
                <Card className="rounded-md gap-3 p-4 h-fit w-full flex flex-col">

                    {/* Header */}
                    <div className="flex flex-row items-center w-full">
                        <CardHeading title="Add New Offer" bottomLine="false" />
                        <Button text="Cancel" variant='outline' className='ml-auto' size='sm' radius='sm' link="/admin/content/offers" />
                    </div>
                    <hr className='mb-1' />

                    {/* Card Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4 w-full">
                        <div className="space-y-1">
                            <Label className="text-[14px] text-gray-600 block font-medium">Offer Title</Label>
                            <Input
                                placeholder="Enter title"
                                className="w-full py-2 text-sm"
                            />
                        </div>
                        <div className="space-y-1">
                            <Label className="text-[13px] text-gray-600 font-medium">Coupon Code</Label>
                            <Input
                                placeholder="Enter New Coupon Code"
                                className="w-full py-2 text-sm"
                            />
                        </div>
                        <div className="space-y-1">
                            <Label className="text-[14px] text-gray-600 block font-medium">Posting Date</Label>
                            <div className="w-full relative">
                                <input
                                    type="date"
                                    className="absolute inset-0 w-full h-full opacity-0 z-10"
                                    aria-label="Select Date"
                                    onChange={(e) => setDate(e.target.value)}
                                />
                                <div
                                    className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm flex items-center justify-between bg-white hover:bg-gray-50 cursor-pointer"
                                >
                                    <span className={`${date ? "text-black" : "text-gray-500"}`}>
                                        {date ? date.split('-').reverse().join('-') : "Select Date"}
                                    </span>
                                    <FiCalendar className="text-gray-400 cursor-pointer" size={16} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Rich Text Editor */}
                    <div className="mt-2">
                        <Editor
                            value={editorText}
                            onTextChange={(e) => setEditorText(e.htmlValue)}
                            style={{ minHeight: '220px' }}
                        />
                    </div>

                    {/* Bottom buttons */}
                    <div className="flex flex-row justify-center gap-3 mt-2">
                        <Button text="RESET" variant='outline' size='sm' radius='sm' onClick={handleReset} />
                        <Button text="SUBMIT" size='sm' radius='sm' onClick={handleSubmit} />
                    </div>
                </Card>

            </div>
        </div>
    )
}

export default AddLoyaltyProgram
"use client"
import React from 'react'
import { FiClock, FiCalendar } from "react-icons/fi";
// Breadcrumb
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import CardHeading from '../../../elements/CardHeading'

// Card
import {
    Card
} from "@/components/ui/card"

// Button
import Button from '@/components/common/button'

// Input
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// Select
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const addBlog = () => {
    const [date, setDate] = React.useState("");
    const [time, setTime] = React.useState("");

    return (
        <div className='w-full'>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/admin/content">Content</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/admin/content/career">Career</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Add New Post</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <div className='flex flex-col md:flex-row w-full mt-3'>
                <Card className="rounded-md gap-3 p-4 h-fit w-full">
                    <div className={`w-full flex flex-col gap-2`}>
                        <div className="flex flex-row items-center w-full">
                            <CardHeading title="Add New Post" bottomLine="false" />
                            <Button text="Cancel" className='ml-auto' size='sm' radius='sm' link="/admin/content/career" />
                        </div>
                        <hr className='mb-2' />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4 w-full">
                            <div className="space-y-1">
                                <Label className="text-[14px] text-gray-600 block font-medium">Job Position</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Job Position" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="1">Job Position 1</SelectItem>
                                        <SelectItem value="2">Job Position 2</SelectItem>
                                        <SelectItem value="3">Job Position 3</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-1">
                                <Label className="text-[14px] text-gray-600 block font-medium">Designation</Label>
                                <Input
                                    placeholder="Enter Designation"
                                    className="w-full py-2 text-sm"
                                />
                            </div>
                            <div className="space-y-1">
                                <Label className="text-[14px] text-gray-600 block font-medium">Job Type</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Job Type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="1">Full Time</SelectItem>
                                        <SelectItem value="2">Part Time</SelectItem>
                                        <SelectItem value="3">Internship</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-1">
                                <Label className="text-[14px] text-gray-600 block font-medium">Experience</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Experience" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="1">0-1 Year</SelectItem>
                                        <SelectItem value="2">1-2 Year</SelectItem>
                                        <SelectItem value="3">2-3 Year</SelectItem>
                                        <SelectItem value="4">3-4 Year</SelectItem>
                                        <SelectItem value="5">4-5 Year</SelectItem>
                                        <SelectItem value="6">5-6 Year</SelectItem>
                                        <SelectItem value="7">6-7 Year</SelectItem>
                                        <SelectItem value="8">7-8 Year</SelectItem>
                                        <SelectItem value="9">8-9 Year</SelectItem>
                                        <SelectItem value="10">9-10 Year</SelectItem>
                                        <SelectItem value="11">10+ Year</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-1">
                                <Label className="text-[14px] text-gray-600 block font-medium">Working Hours</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Working Hours" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="1">10:00 AM - 6:00 PM</SelectItem>
                                        <SelectItem value="2">01:00 PM - 09:00 PM</SelectItem>
                                        <SelectItem value="3">02:00 PM - 10:00 PM</SelectItem>
                                        <SelectItem value="4">03:00 PM - 11:00 PM</SelectItem>
                                        <SelectItem value="5">04:00 PM - 12:00 PM</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-1">
                                <Label className="text-[14px] text-gray-600 block font-medium">Working Days</Label>
                                <div className="grid grid-cols-2 gap-2">
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select Start Day" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="1">Monday</SelectItem>
                                            <SelectItem value="2">Tuesday</SelectItem>
                                            <SelectItem value="3">Wednesday</SelectItem>
                                            <SelectItem value="4">Thursday</SelectItem>
                                            <SelectItem value="5">Friday</SelectItem>
                                            <SelectItem value="6">Saturday</SelectItem>
                                            <SelectItem value="7">Sunday</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select End Day" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="1">Monday</SelectItem>
                                            <SelectItem value="2">Tuesday</SelectItem>
                                            <SelectItem value="3">Wednesday</SelectItem>
                                            <SelectItem value="4">Thursday</SelectItem>
                                            <SelectItem value="5">Friday</SelectItem>
                                            <SelectItem value="6">Saturday</SelectItem>
                                            <SelectItem value="7">Sunday</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <Label className="text-[14px] text-gray-600 block font-medium">No. of Vacancies</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select No. of Vacancies" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="1">1</SelectItem>
                                        <SelectItem value="2">2</SelectItem>
                                        <SelectItem value="3">3</SelectItem>
                                        <SelectItem value="4">4</SelectItem>
                                        <SelectItem value="5">5</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-1">
                                <Label className="text-[14px] text-gray-600 block font-medium">Deadline</Label>
                                <div className="w-full relative">
                                    <input
                                        type="date"
                                        className="absolute inset-0 w-full h-full opacity-0 z-10"
                                        aria-label="Select date"
                                        onChange={(e) => setDate(e.target.value)}
                                    />
                                    <div
                                        className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm flex items-center justify-between bg-white hover:bg-gray-50 cursor-pointer"
                                    >
                                        <span className={`${date ? "text-black" : "text-gray-500"}`}>
                                            {date || "Select Date"}
                                        </span>
                                        <FiCalendar className="text-gray-400 cursor-pointer" size={16} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row items-center w-full">
                        <CardHeading title="Description" bottomLine="false" />
                    </div>
                </Card>
            </div >
        </div >
    )
}

export default addBlog
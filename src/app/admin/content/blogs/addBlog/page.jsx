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
import CardHeading from '@/app/admin/elements/CardHeading'

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
                        <BreadcrumbLink href="/admin/content/blogs">All Blogs</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Add New Blog</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <div className='flex flex-col md:flex-row w-full mt-3'>
                <Card className="rounded-md gap-3 p-4 h-fit w-full">
                    <div className={`w-full flex flex-col gap-2`}>
                        <div className="flex flex-row items-center w-full">
                            <CardHeading title="Add New Blog" bottomLine="false" />
                            <Button text="Cancel" className='ml-auto' size='sm' radius='sm' link="/admin/content/blogs" />
                        </div>
                        <hr className='mb-2' />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4 w-full">
                            <div className="space-y-1">
                                <Label className="text-[14px] text-gray-600 block font-medium">Blog Heading</Label>
                                <Input
                                    placeholder="Enter title"
                                    className="w-full py-2 text-sm"
                                />
                            </div>
                            <div className="space-y-1">
                                <Label className="text-[14px] text-gray-600 block font-medium">Upload Banner</Label>
                                <Input
                                    type="file"
                                    placeholder="Upload File"
                                    className="w-full px-3 py-0.5 text-sm"
                                />
                            </div>
                            <div className="space-y-1">
                                <Label className="text-[14px] text-gray-600 block font-medium">Posting Date</Label>
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
                                            {date ? date.split('-').reverse().join('-') : "Select Date"}
                                        </span>
                                        <FiCalendar className="text-gray-400 cursor-pointer" size={16} />
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <Label className="text-[14px] text-gray-600 block font-medium">Posting Time</Label>
                                <div className="w-full relative">
                                    <input
                                        type="time"
                                        className="absolute inset-0 w-full h-full opacity-0 z-10"
                                        aria-label="Select end time"
                                        onChange={(e) => setTime(e.target.value)}
                                    />
                                    <div
                                        className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm flex items-center justify-between bg-white hover:bg-gray-50 cursor-pointer"
                                    >
                                        <span className={`${time ? "text-black" : "text-gray-500"}`}>
                                            {time || "00:00"}
                                        </span>
                                        <FiClock className="text-gray-400 cursor-pointer" size={16} />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-1">
                                <Label className="text-[14px] text-gray-600 block font-medium">Tags</Label>
                                <Select>
                                    <SelectTrigger className="w-full py-2 text-sm">
                                        <SelectValue placeholder="Select a tag" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Tags</SelectLabel>
                                            <SelectItem value="technology">Technology</SelectItem>
                                            <SelectItem value="programming">Programming</SelectItem>
                                            <SelectItem value="webdev">Web Development</SelectItem>
                                            <SelectItem value="ai">AI</SelectItem>
                                            <SelectItem value="blockchain">Blockchain</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>

                            </div>
                        </div>
                    </div>
                </Card>
            </div >
        </div >
    )
}

export default addBlog
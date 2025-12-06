"use client"
import React from 'react'
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
                        <div className="flex w-full flex-wrap">
                            <div className="space-y-1 w-full md:w-1/2 lg:w-4/12 xl:w-3/12 2xl:w-2/12">
                                <Label className="text-[14px] text-gray-600 block font-medium">Blog Heading</Label>
                                <Input
                                    placeholder="Enter title"
                                    className="w-full py-2 text-sm"
                                />
                            </div>
                            <div className="space-y-1 w-full md:w-1/2 lg:w-4/12 xl:w-3/12 2xl:w-2/12">
                                <Label className="text-[14px] text-gray-600 block font-medium">Upload Banner</Label>
                                <Input
                                    type="file"
                                    placeholder="Upload File"
                                    className="w-full px-3 py-0.5 text-sm"
                                />
                            </div>
                            <div className="space-y-1 w-full md:w-1/2 lg:w-4/12 xl:w-3/12 2xl:w-2/12">
                                <Label className="text-[14px] text-gray-600 block font-medium">Posting Date</Label>
                                <Input
                                    type="date"
                                    placeholder="Enter Date"
                                    className="w-full py-2 text-sm"
                                />
                            </div>
                            <div className="space-y-1 w-full md:w-1/2 lg:w-4/12 xl:w-3/12 2xl:w-2/12">
                                <Label className="text-[14px] text-gray-600 block font-medium">Posting Time</Label>
                                <Input
                                    type="time"
                                    placeholder="Enter Time"
                                    className="w-full py-2 text-sm"
                                />
                            </div>
                            <div className="space-y-1 w-full md:w-1/2 lg:w-4/12 xl:w-3/12 2xl:w-2/12">
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
            </div>
        </div>
    )
}

export default addBlog
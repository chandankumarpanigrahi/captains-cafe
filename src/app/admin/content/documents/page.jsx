"use client"
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Button from '@/components/common/button'
import React, { useState, useRef, useEffect } from 'react'
import { FaRegCalendarAlt } from "react-icons/fa";

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
import AllDocumentsTable from './allDocumentsTable'

const AdminDocuments = () => {
    const [date, setDate] = React.useState("");
    return (
        <>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/admin/content">Content</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Documents</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <div className='flex flex-col md:flex-row w-full mt-3'>
                <Card className="rounded-md gap-3 p-4 h-fit w-full md:w-[370px] mb-4">
                    <CardHeading title="Add" bottomLine="true" />
                    <form className="space-y-2 w-full max-h-[calc(100vh-240px)] overflow-y-auto">
                        <div className="w-full">
                            <Label className="text-[14px] text-gray-600 block font-medium mb-1">Upload Logo</Label>
                            <Input
                                type="file"
                                placeholder="Upload File"
                                className="w-full px-3 py-0.5 text-sm"
                            />
                        </div>
                        <div className="w-full">
                            <Label className="text-[14px] text-gray-600 block font-medium">
                                Document Name
                            </Label>
                            <Input
                                placeholder="Enter text"
                                className="w-full px-3 py-0.5 text-sm"
                            />
                        </div>
                        <div className="w-full">
                            <Label className="text-[14px] text-gray-600 block font-medium">
                                Department Title 1
                            </Label>
                            <Input
                                placeholder="Enter text"
                                className="w-full px-3 py-0.5 text-sm"
                            />
                        </div>
                        <div className="w-full">
                            <Label className="text-[14px] text-gray-600 block font-medium">
                                Department Title 2
                            </Label>
                            <Input
                                placeholder="Enter text"
                                className="w-full px-3 py-0.5 text-sm"
                            />
                        </div>
                        <div className="w-full">
                            <Label className="text-[14px] text-gray-600 block font-medium mb-1">Upload Document</Label>
                            <Input
                                type="file"
                                placeholder="Upload File"
                                className="w-full px-3 py-0.5 text-sm"
                            />
                        </div>
                        <div className="space-y-1">
                            <Label className="text-[14px] text-gray-600 block font-medium">Issue Date</Label>
                            <div className="w-full relative shadow-sm rounded-md">
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
                                    <FaRegCalendarAlt className="text-gray-400 cursor-pointer" size={16} />
                                </div>
                            </div>
                        </div>
                        <div className="space-y-1">
                            <Label className="text-[14px] text-gray-600 block font-medium">Validity Till</Label>
                            <div className="w-full relative shadow-sm rounded-md">
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
                                    <FaRegCalendarAlt className="text-gray-400 cursor-pointer" size={16} />
                                </div>
                            </div>
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
                            text="Submit"
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
                        <Button
                            text="Save"
                            className='ml-auto'
                            size='sm'
                            radius='sm'
                        />
                    </div>
                    <hr />
                    <div className="flex flex-col flex-wrap gap-y-2 py-2">
                        <AllDocumentsTable />
                    </div>

                </Card>
            </div>
        </>
    )
}

export default AdminDocuments
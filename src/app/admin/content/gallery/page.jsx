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

const AdminGallery = () => {
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
                    <CardHeading title="Add" bottomLine="true" />
                    <form className="space-y-2 w-full max-h-[calc(100vh-240px)] overflow-y-auto">
                        <div className="w-full">
                            <Label className="text-[14px] text-gray-600 block font-medium mb-1">Upload Image</Label>
                            <Input
                                type="file"
                                placeholder="Upload File"
                                className="w-full px-3 py-0.5 text-sm"
                            />
                        </div>
                        <div className="w-full">
                            <Label className="text-[14px] text-gray-600 block font-medium">
                                Image Caption
                            </Label>
                            <textarea
                                placeholder="Enter text"
                                className="w-full min-h-[80px] p-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent resize-none placeholder-gray-400"
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
                    </div>
                    <hr />
                    <div className="flex flex-col flex-wrap gap-y-2 py-2">

                    </div>

                </Card>
            </div>
        </>
    )
}

export default AdminGallery
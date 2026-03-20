"use client"
import { Card } from '@/components/ui/card'
import React from 'react'
import { useState } from 'react'
import SubmitTable from './submitTable'
import CardHeading from '../../../elements/CardHeading'
import PublishTable from './oldTable'

// Breadcrumb
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const Page = () => {
    const [activeTab, setActiveTab] = useState("tab1")
    return (
        <div className='w-full'>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/admin/content">Content</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/admin/content/contact">Contact Us</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Form Data</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <div className='flex flex-col md:flex-row w-full mt-3'>
                <Card className="rounded-md gap-3 p-4 h-fit w-full">
                    <div className="flex flex-row text-lg">
                        <div className={`${activeTab === "tab1" ? "border-blue-900 border-b-3 font-semibold" : ""} px-4 py-1 cursor-pointer`} onClick={() => setActiveTab("tab1")}>New Submits</div>
                        <div className={`${activeTab === "tab2" ? "border-blue-900 border-b-3 font-semibold" : ""} px-4 py-1 cursor-pointer`} onClick={() => setActiveTab("tab2")}>Old Submits</div>
                    </div>

                    {/* Tab 1 Section */}
                    <div className={`${activeTab === "tab1" ? "block" : "hidden"} w-full flex flex-col gap-2`}>
                        <div className="flex flex-row items-center w-full">
                            <CardHeading title="View" bottomLine="false" />
                        </div>
                        <hr className='mb-2' />
                        <SubmitTable />
                    </div>


                    {/* Tab 2 Section */}
                    <div className={`${activeTab === "tab2" ? "block" : "hidden"} flex flex-col gap-2`}>
                        <div className="flex flex-row items-center">
                            <CardHeading title="View" bottomLine="false" />
                        </div>
                        <hr className='mb-2' />
                        <PublishTable />
                    </div>

                </Card>
            </div>
        </div>
    )
}

export default Page

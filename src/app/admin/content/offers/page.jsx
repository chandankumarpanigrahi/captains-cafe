"use client"
import { Card } from '@/components/ui/card'
import React from 'react'
import { useState } from 'react'
import Button from '@/components/common/button'

// Iocns
import { FiPlusSquare } from "react-icons/fi";

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
import ArchivedPostsTable from './archivedOffersTable'
import AllPostsTable from './allOffersTable'
import ExpiredPostsTable from './expiredOffersTable'

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
                        <BreadcrumbPage>Manage Offers</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <div className='flex flex-col md:flex-row w-full mt-3'>
                <Card className="rounded-md gap-3 p-4 h-fit w-full">
                    <div className="flex flex-row text-lg">
                        <div className={`${activeTab === "tab1" ? "border-blue-900 border-b-3 font-semibold" : ""} px-4 py-1 cursor-pointer`} onClick={() => setActiveTab("tab1")}>All Offers</div>
                        <div className={`${activeTab === "tab2" ? "border-blue-900 border-b-3 font-semibold" : ""} px-4 py-1 cursor-pointer`} onClick={() => setActiveTab("tab2")}>Archived</div>
                        <div className={`${activeTab === "tab3" ? "border-blue-900 border-b-3 font-semibold" : ""} px-4 py-1 cursor-pointer`} onClick={() => setActiveTab("tab3")}>Expired</div>

                    </div>

                    {/* Tab 1 Section */}
                    <div className={`${activeTab === "tab1" ? "block" : "hidden"} w-full flex flex-col gap-2`}>
                        <div className="flex flex-row items-center w-full">
                            <CardHeading title="View" bottomLine="false" />
                            <Button text="ADD" className='ml-auto' size='sm' icon={<FiPlusSquare />} radius='sm' iconPosition="left" link="/admin/content/offers/addOffer" />
                        </div>
                        <hr className='mb-2' />
                        <AllPostsTable />
                    </div>


                    {/* Tab 2 Section */}
                    <div className={`${activeTab === "tab2" ? "block" : "hidden"} flex flex-col gap-2`}>
                        <div className="flex flex-row items-center">
                            <CardHeading title="View" bottomLine="false" />
                        </div>
                        <hr className='mb-2' />
                        <ArchivedPostsTable />
                    </div>

                    {/* Tab 3 Section */}
                    <div className={`${activeTab === "tab3" ? "block" : "hidden"} flex flex-col gap-2`}>
                        <div className="flex flex-row items-center">
                            <CardHeading title="View" bottomLine="false" />
                        </div>
                        <hr className='mb-2' />
                        <ExpiredPostsTable />
                    </div>

                </Card>
            </div>
        </div>
    )
}

export default Page
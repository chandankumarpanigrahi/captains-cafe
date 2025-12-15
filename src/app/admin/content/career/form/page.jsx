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
import FormDataTable from './formDataTable'

const Page = () => {

    return (
        <div className='w-full'>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/admin/content/career">Career</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Form Data</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <div className='flex flex-col md:flex-row w-full mt-3'>
                <Card className="rounded-md gap-3 p-4 h-fit w-full">
                    <div className="flex flex-row items-center w-full">
                        <CardHeading title="View All Applied Form Data" bottomLine="false" />
                    </div>
                    <hr className='mb-2' />
                    <FormDataTable />
                </Card>
            </div>
        </div>
    )
}

export default Page
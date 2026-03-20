import React from 'react'

import Button from '@/components/common/button';
import CardHeading from '../../elements/CardHeading'
import { TbArrowBackUp } from "react-icons/tb";
import { LuHistory } from "react-icons/lu";
import { TbShoppingBag } from "react-icons/tb";
import { GrCycle } from "react-icons/gr";
import { CgUserList } from "react-icons/cg";
import { BiSolidEdit } from "react-icons/bi";

const CustomerDetails = () => {
    return (
        <div>
            <div className="flex justify-between items-center">
                <CardHeading title="View" bottomLine="false" />
                <Button
                    text="Back"
                    className=''
                    size='sm'
                    icon={<TbArrowBackUp />}
                    radius='sm'
                    iconPosition="left"
                />
            </div>
            <hr className='my-3' />
            <div>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 gap-4 w-full">
                    <div className="flex space-y-1">
                        <h2 className='text-gray-600 block font-medium text-md w-[140px]'>Name</h2>
                        <div className="flex flex-col w-full sm:w-[calc(100%-140px)] gap-2">
                            <p className='text-gray-500 before:content-["-"] sm:before:content-[":"] before:pr-3 sm:before:pr-2 before:font-bold text-justify'>Archana Sahoo</p>
                        </div>
                    </div>
                    <div className="flex space-y-1">
                        <h2 className='text-gray-600 block font-medium text-md w-[140px]'>Customer ID</h2>
                        <div className="flex flex-col w-full sm:w-[calc(100%-140px)] gap-2">
                            <p className='text-gray-500 before:content-["-"] sm:before:content-[":"] before:pr-3 sm:before:pr-2 before:font-bold text-justify'>7845128956</p>
                        </div>
                    </div>
                    <div className="flex space-y-1">
                        <h2 className='text-gray-600 block font-medium text-md w-[140px]'>Mobile Number</h2>
                        <div className="flex flex-col w-full sm:w-[calc(100%-140px)] gap-2">
                            <p className='text-gray-500 before:content-["-"] sm:before:content-[":"] before:pr-3 sm:before:pr-2 before:font-bold text-justify'>+91 89562 78452</p>
                        </div>
                    </div>
                    <div className="flex space-y-1">
                        <h2 className='text-gray-600 block font-medium text-md w-[140px]'>Email ID</h2>
                        <div className="flex flex-col w-full sm:w-[calc(100%-140px)] gap-2">
                            <p className='text-gray-500 before:content-["-"] sm:before:content-[":"] before:pr-3 sm:before:pr-2 before:font-bold text-justify'>archana.sahoo@gmail.com</p>
                        </div>
                    </div>

                </div>
                <div className="flex flex-wrap gap-2 w-full mt-6">
                    <Button
                        text="Recent Order"
                        className='bg-green-800 w-fit whitespace-nowrap'
                        size='md'
                        icon={<LuHistory />}
                        radius='sm'
                        iconPosition="left"
                        variant='secondary'
                    />
                    <Button
                        text="All Orders"
                        className='bg-green-800 w-fit whitespace-nowrap'
                        size='md'
                        icon={<TbShoppingBag />}
                        radius='sm'
                        iconPosition="left"
                        variant='primary'
                    />
                    <Button
                        text="Subscription"
                        className='bg-purple-900 w-fit whitespace-nowrap'
                        size='md'
                        icon={<GrCycle />}
                        radius='sm'
                        iconPosition="left"
                        variant='secondary'
                    />
                    <Button
                        text="Customer Details"
                        className='!bg-amber-900 w-fit whitespace-nowrap'
                        size='md'
                        icon={<CgUserList />}
                        radius='sm'
                        iconPosition="left"
                        variant='secondary'
                    />
                    <Button
                        text="Modify"
                        className='!bg-cyan-900 w-fit whitespace-nowrap'
                        size='md'
                        icon={<BiSolidEdit />}
                        radius='sm'
                        iconPosition="left"
                        variant='secondary'
                    />
                </div>
            </div>
        </div>
    )
}

export default CustomerDetails
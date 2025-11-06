"use client";
import AdminSidebar from '@/components/common/adminSidebar/page';
import React from 'react'

export default function DashboardLayout({ children }) {


    return (
        <div className="w-full h-screen">
            <div className='h-full'>
                <div className="flex flex-row justify-between">
                    <div className='w-0 lg:w-[260px] py-3'>
                        <AdminSidebar/>
                    </div>
                    <div className='w-full lg:w-[calc(100%-280px)] py-3 h-screen overflow-y-auto'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
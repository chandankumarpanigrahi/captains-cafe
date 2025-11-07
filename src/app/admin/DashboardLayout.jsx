"use client";
import React from 'react'

import styles from "./style.module.css"
import AdminSidebar from '@/components/common/adminSidebar/page';

export default function DashboardLayout({ children }) {
    return (
        <div className="w-full h-screen">
            <div className='h-full'>
                <div className="flex">
                    {/* Sidebar */}
                    <div className='flex-shrink-0'>
                        <AdminSidebar />
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 h-full">
                        <div className={`${styles.top_bar} relative z-2 w-full flex flex-col bg-white rounded-br-mg rounded-bl-md py-3 pl-14 pr-4`}>
                            logout
                        </div>
                        <div className='flex flex-col h-[calc(100vh-60px)] overflow-y-auto py-3 px-4 lg:pl-6 pr-2'>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
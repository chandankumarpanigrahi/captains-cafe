"use client";
import React from 'react'
import { usePathname } from "next/navigation";
import SubBanner from '@/components/common/sub banner'
import UserSidebar from '@/components/common/userSidebar/page';

export default function DashboardLayout({ children }) {
    const pathname = usePathname();

    const getPageTitle = () => {
        if (pathname.includes('/dashboard')) return "Dashboard";
        if (pathname.includes('/profile')) return "Profile Settings";
        if (pathname.includes('/orders')) return "My Orders";
        return "User Dashboard";
    };

    return (
        <div className="w-full">
            <SubBanner
                title={getPageTitle()}
                showBreadcrumb={true}
                breadcrumbItems={[
                    { label: "Login", href: "/user" },
                    { label: getPageTitle() }
                ]}
            />

            <div className='container mx-auto pt-12'>
                <div className="flex flex-row justify-between">
                    <div className='w-0 lg:w-[240px]'>
                        <UserSidebar />
                    </div>
                    <div className='w-full lg:w-[calc(100%-260px)]'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
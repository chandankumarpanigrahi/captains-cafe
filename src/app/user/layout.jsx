"use client";
import React from 'react'
import { usePathname } from "next/navigation";
import LoginLayout from './LoginLayout';
import DashboardLayout from './DashboardLayout';
import { notFound } from 'next/navigation';

const Layout = ({ children }) => {
    const pathname = usePathname();
    const isLoginPage = pathname === "/user";
    
    const showNotFound = true;

    if (showNotFound && pathname.startsWith('/user')) {
        notFound();
    }

    if (isLoginPage) {
        return <LoginLayout>{children}</LoginLayout>;
    }

    return <DashboardLayout>{children}</DashboardLayout>;
}

export default Layout;
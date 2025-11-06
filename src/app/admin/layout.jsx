"use client";
import React from 'react'
import { usePathname } from "next/navigation";
import LoginLayout from './LoginLayout';
import DashboardLayout from './DashboardLayout';
import { notFound } from 'next/navigation';

const Layout = ({ children }) => {
    const pathname = usePathname();
    const isLoginPage = pathname === "/admin";
    
    const showNotFound = false;

    if (showNotFound && pathname.startsWith('/admin')) {
        notFound();
    }

    if (isLoginPage) {
        return <LoginLayout>{children}</LoginLayout>;
    }

    return <DashboardLayout>{children}</DashboardLayout>;
}

export default Layout;
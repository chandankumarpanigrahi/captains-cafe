"use client";
import React from 'react'
import { usePathname } from "next/navigation";
import LoginLayout from './LoginLayout';
import DashboardLayout from './DashboardLayout';

const Layout = ({ children }) => {
    const pathname = usePathname();
    const isLoginPage = pathname === "/user";

    if (isLoginPage) {
        return <LoginLayout>{children}</LoginLayout>;
    }

    return <DashboardLayout>{children}</DashboardLayout>;
}

export default Layout;
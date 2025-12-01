"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from "next/navigation";
import styles from "./style.module.css"

import SubMenu from './SubMenu';

// Images
import logo from "../../../assets/images/logo.png";
import avatar from "../../../assets/images/avatars/user_0.png";

// Icons
import { MdDashboard } from "react-icons/md";
import { BiSolidBookContent } from "react-icons/bi";
import { PiShoppingBagFill } from "react-icons/pi";
import { TbAlignBoxLeftTopFilled } from "react-icons/tb";
import { RiUserSettingsFill } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
import { FaMicrochip } from "react-icons/fa6";
import { MdInventory } from "react-icons/md";

const AdminSidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);
    const pathname = usePathname();

    // Check screen size and handle responsiveness
    useEffect(() => {
        const checkScreenSize = () => {
            const mobile = window.innerWidth < 1024; // lg breakpoint
            setIsMobile(mobile);
            if (mobile) {
                setIsSidebarOpen(false);
            } else {
                setIsSidebarOpen(true);
            }
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Simplified nav items - only parent paths
    const navItems = [
        { icon: MdDashboard, path: '/admin/dashboard', label: 'Dashboard' },
        { icon: BiSolidBookContent, path: '/admin/content', label: 'Content' },
        { icon: PiShoppingBagFill, path: '/admin/orders', label: 'Orders' },
        { icon: TbAlignBoxLeftTopFilled, path: '/admin/products', label: 'Products' },
        { icon: RiUserSettingsFill, path: '/admin/users', label: 'Users' },
        { icon: IoSettingsSharp, path: '/admin/settings', label: 'Settings' },
        { icon: FaMicrochip, path: '/admin/system', label: 'System' },
        { icon: MdInventory, path: '/admin/inventory', label: 'Inventory' }
    ];

    // Check if active - simple path matching
    const isActive = (path) => {
        return pathname.startsWith(path);
    };

    return (
        <>
            {/* Toggle Button */}
            <button
                onClick={toggleSidebar}
                className={`fixed top-1 left-3 z-50 p-2 transition-all duration-200 lg:top-1 cursor-pointer ${
                    isSidebarOpen ? 'lg:left-68' : 'lg:left-2 rounded-md bg-gradient-to-b from-[#ffe8d5] to-[#f7ece2] shadow-md hover:shadow-lg'
                }`}
            >
                {isSidebarOpen ? '☰' : '☰'}
            </button>

            {/* Overlay for mobile */}
            {isMobile && isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/30 bg-opacity-50 z-40 lg:hidden"
                    onClick={toggleSidebar}
                />
            )}

            {/* Sidebar */}
            <div className={`${styles.sidebar_bg} 
                fixed lg:relative h-full top-0 left-0 z-50 rounded-tr-2xl rounded-br-2xl
                transition-all duration-300 ease-in-out
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
                ${isSidebarOpen ? 'w-80 lg:w-66' : 'w-0 lg:w-0'}
            `}>
                <div className={`
                    h-screen rounded-tr-2xl rounded-br-2xl bg-gradient-to-b from-[#ffe8d5] via-10% via-[#fff6ed] via-30% via-[#f7ece2] to-[#ffe8d5] to-100% shadow-md
                    transition-all duration-300 overflow-y-auto
                    ${isSidebarOpen ? 'opacity-100' : 'opacity-0 relative -left-66 lg:opacity-0'}
                `}>
                    <div className="flex flex-col h-full">
                        {/* Logo */}
                        <div className="flex flex-row gap-1 items-center px-4 pt-4 pb-2">
                            <div className="w-[55px] h-[55px] flex items-center justify-center">
                                <Image src={logo} alt='Logo' className='w-full h-full object-contain' />
                            </div>
                            <div className="flex flex-col">
                                <h2 className='text-blue-950 font-bold text-lg'>The Captain&apos;s Cafe</h2>
                                <p className='text-blue-950 font-light text-sm'>The Captain&apos;s Bridge</p>
                            </div>
                        </div>

                        {/* Navigation Menu */}
                        <div className="flex flex-row items-center my-auto flex-1">
                            <nav className="flex flex-col my-auto w-fit gap-0 relative">
                                <div className={styles.side_main_category_before}></div>
                                <ul className={`${styles.side_main_category} flex flex-col gap-4 pl-2 pr-3 py-8 rounded-tr-4xl rounded-br-4xl`}>
                                    {navItems.map((item, index) => {
                                        const IconComponent = item.icon;
                                        const active = isActive(item.path);

                                        return (
                                            <li 
                                                key={index}
                                                className="relative"
                                                onMouseEnter={() => setHoveredItem(index)}
                                                onMouseLeave={() => setHoveredItem(null)}
                                            >
                                                <Link
                                                    href={item.path}
                                                    className={`hover:opacity-100 text-white transition-all duration-200 ${
                                                        active ? 'opacity-100 scale-110' : 'opacity-30'
                                                    }`}
                                                >
                                                    <IconComponent size="30" />
                                                </Link>

                                                {/* Tooltip */}
                                                {hoveredItem === index && (
                                                    <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-3 z-50">
                                                        <div className="relative">
                                                            {/* Tooltip Content */}
                                                            <div className="bg-gray-900 text-white text-sm font-medium px-3 py-2 rounded-lg shadow-lg whitespace-nowrap">
                                                                {item.label}
                                                                {/* Tooltip arrow */}
                                                                <div className="absolute right-full top-1/2 transform -translate-y-1/2">
                                                                    <div className="border-4 border-transparent border-r-gray-900"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </li>
                                        );
                                    })}
                                </ul>
                                <div className={styles.side_main_category_after}></div>
                            </nav>
                            
                            {/* Sub-Menu */}
                            <div className="flex-1 min-w-0">
                                <SubMenu />
                            </div>
                        </div>

                        {/* User Profile */}
                        <div className="p-4">
                            <div className='relative bg-white p-1.5 rounded-xl shadow-lg pl-22'>
                                <div className="text-[16px] leading-tight font-semibold text-blue-950">Mr Sushant</div>
                                <p className=' leading-tight text-[12px] text-blue-950 mb-1'>sushant.co@gmail.com</p>
                                <div className="bg-blue-900 text-[11px] rounded-full text-white px-2 w-fit">Admin</div>
                                <div className="absolute size-[80px] left-0 bottom-0 rounded-xl overflow-hidden">
                                    <Image src={avatar} alt='Avatar' className='w-full h-full object-cover' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminSidebar;
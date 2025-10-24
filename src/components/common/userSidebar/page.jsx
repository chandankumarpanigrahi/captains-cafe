"use client";
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import {
    FiHome,
    FiUser,
    FiMapPin,
    FiHeart,
    FiShoppingBag,
    FiRepeat,
    FiCreditCard,
    FiBell,
    FiLogOut,
    FiMenu,
    FiX
} from 'react-icons/fi';
import Link from 'next/link';

const UserSidebar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Check if mobile on mount and resize
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
            if (window.innerWidth >= 1024) {
                setIsOpen(true);
            } else {
                setIsOpen(false);
            }
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const menuItems = [
        { icon: FiHome, label: 'Home', href: '/user/dashboard' },
        { icon: FiUser, label: 'Profile', href: '/user/profile' },
        { icon: FiMapPin, label: 'Address', href: '/user/address' },
        { icon: FiHeart, label: 'Wishlist', href: '/user/wishlist' },
        { icon: FiShoppingBag, label: 'Orders', href: '/user/orders' },
        { icon: FiRepeat, label: 'Subscriptions', href: '/user/subscriptions' },
        { icon: FiCreditCard, label: 'Payments', href: '/user/payments' },
        { icon: FiBell, label: 'Notifications', href: '/user/notifications' },
    ];

    const isActive = (href) => {
        return pathname === href || pathname.startsWith(href + '/');
    };

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Mobile Hamburger Button */}
            {isMobile && (
                <button
                    onClick={toggleSidebar}
                    className="relative -top-16 left-0 z-50 p-2 bg-white dark:bg-neutral-800 rounded-md shadow-lg lg:hidden"
                >
                    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            )}

            {/* Overlay for mobile */}
            {isMobile && isOpen && (
                <div
                    className="relative z-30 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div className={`relative -top-10 lg:top-0 z-2 transition-all duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-[120%] lg:translate-x-0'} w-64 lg:w-full `}>
                <div className="flex flex-col h-full p-1 lg:p-0 lg:bg-none">
                    {/* Navigation Menu */}
                    <nav className="flex-1">
                        <ul className="space-y-1 lg:space-y-4">
                            {menuItems.map((item) => {
                                const Icon = item.icon;
                                const active = isActive(item.href);

                                return (
                                    <li key={item.href}>
                                        <a
                                            href={item.href}
                                            className={`
                                                    flex items-center lg:shadow-md space-x-3 px-4 py-3 rounded-lg transition-all duration-200
                                                    ${active
                                                    ? 'bg-[#12406D] text-white border-r-2 '
                                                    : 'text-[#12406D] dark:text-gray-100 bg-neutral-100 dark:bg-neutral-900 dark:hover:bg-neutral-700 hover:bg-gray-100 hover:text-gray-900'
                                                }
                                            `}
                                            onClick={() => isMobile && setIsOpen(false)}
                                            >
                                            <Icon size={20} />
                                            <span className="font-medium">{item.label}</span>
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    {/* Logout Button */}
                    <div className="pt-4">
                        <Link href="/user"
                            className="flex items-center space-x-3 w-full px-4 py-3 text-red-600 shadow-md bg-red-50 hover:bg-red-700 hover:text-red-50 rounded-lg transition-all duration-200" >
                            <FiLogOut size={20} />
                            <span className="font-medium">LOGOUT</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserSidebar;
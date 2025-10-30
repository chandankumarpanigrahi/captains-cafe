"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
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

const UserSidebar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

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

    // Check if mobile on mount and resize
    useEffect(() => {
        const checkMobile = () => {
            const mobile = window.innerWidth < 1024;
            setIsMobile(mobile);
            setIsOpen(!mobile);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Close sidebar on route change (mobile only)
    useEffect(() => {
        if (isMobile) {
            setIsOpen(false);
        }
    }, [pathname, isMobile]);

    const isActive = useCallback((href) => {
        return pathname === href || pathname.startsWith(href + '/');
    }, [pathname]);

    const toggleSidebar = () => setIsOpen(prev => !prev);

    const handleLogout = async () => {
        const result = await Swal.fire({
            title: 'Logout Confirmation',
            text: 'Are you sure you want to logout?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes, Logout',
            cancelButtonText: 'Cancel',
            confirmButtonColor: '#ef4444',
            cancelButtonColor: '#6b7280',
            customClass: {
                popup: 'rounded-2xl shadow-2xl',
                confirmButton: 'px-6 py-2.5 rounded-lg font-semibold transition-all',
                cancelButton: 'px-6 py-2.5 rounded-lg font-semibold mr-3 transition-all'
            },
            buttonsStyling: false,
            reverseButtons: true
        });

        if (result.isConfirmed) {
            await Swal.fire({
                title: 'Logged Out Successfully!',
                text: 'Redirecting you to the home page...',
                icon: 'success',
                confirmButtonText: 'OK',
                confirmButtonColor: '#10b981',
                customClass: {
                    popup: 'rounded-2xl shadow-2xl',
                    confirmButton: 'px-6 py-2.5 rounded-lg font-semibold transition-all'
                },
                buttonsStyling: false,
                timer: 2000,
                timerProgressBar: true
            });
            router.push('/user');
        }
    };

    const handleNavigation = (href) => {
        if (isMobile) setIsOpen(false);
        router.push(href);
    };

    return (
        <>
            {/* Mobile Toggle Button */}
            {isMobile && (
                <button
                    onClick={toggleSidebar}
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                    className="fixed bottom-10 right-0 z-500 p-2 bg-[#0c3c6a]  dark:bg-neutral-800 rounded-tr-md rounded-bl-md rounded-tl-[3px] rounded-br-[3px] shadow-lg lg:hidden hover:shadow-xl transition-all duration-200 hover:scale-105"
                >
                    {isOpen ? (
                        <FiX size={24} className="text-white dark:text-gray-200" />
                    ) : (
                        <FiMenu size={24} className="text-white dark:text-gray-200" />
                    )}
                </button>
            )}

            {/* Overlay */}
            {isMobile && isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
                    onClick={() => setIsOpen(false)}
                    aria-hidden="true"
                />
            )}

            {/* Sidebar */}
            <aside
                className={`
                    fixed lg:relative top-0 left-0 h-screen lg:h-auto z-70
                    w-72 lg:w-full
                    transition-transform duration-300 ease-in-out
                    ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
                `}
            >
                <div className="h-full lg:h-auto bg-white dark:bg-gray-900 lg:bg-transparent rounded-none lg:rounded-2xl shadow-2xl lg:shadow-none flex flex-col">
                    {/* Mobile Header Spacer */}
                    {isMobile && <div className="flex-shrink-0" />}

                    {/* Scrollable Content Container */}
                    <div className="flex-1 overflow-y-auto overflow-x-hidden p-6 lg:p-0 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
                        {/* Navigation Menu */}
                        <nav className="flex-1">
                            <ul className="space-y-2">
                                {menuItems.map((item) => {
                                    const Icon = item.icon;
                                    const active = isActive(item.href);

                                    return (
                                        <li key={item.href}>
                                            <button
                                                onClick={() => handleNavigation(item.href)}
                                                className={`
                                                    flex items-center w-full space-x-3 px-4 py-3.5 rounded-xl
                                                    transition-all duration-200 font-medium
                                                    lg:shadow-md hover:shadow-lg
                                                    ${active
                                                        ? 'bg-gradient-to-r from-[#12406D] to-[#1a5a9e] text-white shadow-lg scale-[1.02]'
                                                        : 'text-gray-700 dark:text-gray-100 bg-gray-50 dark:bg-neutral-800 hover:bg-gray-100 dark:hover:bg-neutral-700 hover:scale-[1.02]'
                                                    }
                                                `}
                                            >
                                                <Icon size={20} className={active ? 'animate-pulse' : ''} />
                                                <span>{item.label}</span>
                                                {active && (
                                                    <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse" />
                                                )}
                                            </button>
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>

                        {/* Logout Button */}
                        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 lg:border-none">
                            <button
                                onClick={handleLogout}
                                className="flex items-center justify-center space-x-3 w-full px-4 py-3.5 
                                         text-red-600 dark:text-red-400 font-semibold
                                         bg-red-50 dark:bg-red-950/30 
                                         hover:bg-red-600 hover:text-white dark:hover:bg-red-600
                                         rounded-xl shadow-md hover:shadow-lg
                                         transition-all duration-200 hover:scale-[1.02]
                                         group"
                            >
                                <FiLogOut size={20} className="group-hover:rotate-180 transition-transform duration-300" />
                                <span>LOGOUT</span>
                            </button>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default UserSidebar;
"use client";
import React, { useState, useEffect } from 'react';
import styles from "./style.module.css";
import AdminSidebar from '@/components/common/adminSidebar/page';
import { FaCaretDown } from "react-icons/fa";
import { FiBell } from "react-icons/fi";
import { RiFullscreenFill } from "react-icons/ri";
import { RiFullscreenExitLine } from "react-icons/ri";
import { IoMdLogOut } from "react-icons/io";

export default function DashboardLayout({ children }) {
    const [currentTime, setCurrentTime] = useState('');
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isOpen, setIsOpen] = useState(true);
    const [notifications, setNotifications] = useState(3);
    const [showDropdown, setShowDropdown] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);

    // Live date and time
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const timeString = now.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            }).toUpperCase();

            const dateString = now.toLocaleDateString('en-US', {
                day: '2-digit',
                month: 'short',
                year: 'numeric'
            });

            setCurrentTime(`${timeString} ${dateString}`);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    // Fullscreen functionality
    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.log(`Error attempting to enable fullscreen: ${err.message}`);
            });
            setIsFullscreen(true);
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
                setIsFullscreen(false);
            }
        }
    };

    // Handle fullscreen change events
    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);
        return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
    }, []);

    // Logout functionality
    const handleLogout = () => {
        // Add your logout logic here
        console.log('Logging out...');
        router.push('/admin');
    };

    // Mock notifications data
    const notificationItems = [
        { id: 1, text: 'New order received', time: '2 min ago', unread: true },
        { id: 2, text: 'System update available', time: '1 hour ago', unread: true },
        { id: 3, text: 'Inventory low on items', time: '3 hours ago', unread: false },
    ];

    const markAsRead = (id) => {
        setNotifications(prev => Math.max(0, prev - 1));
        // In real app, you'd update the notification status
    };

    return (
        <div className="w-full h-screen overflow-hidden">
            <div className='h-full'>
                <div className="flex">
                    {/* Sidebar */}
                    <div className='flex-shrink-0'>
                        <AdminSidebar />
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 h-full">
                        <div className={`${styles.top_bar} relative z-20 gap-4 w-full flex flex-row items-center bg-white rounded-br-md rounded-bl-md py-2 pl-14 pr-4 shadow-sm`}>

                            {/* Location Dropdown */}
                            {/* <div className="relative mr-auto">
                                <button
                                    onClick={() => setShowDropdown(!showDropdown)}
                                    className="flex items-center gap-2 px-3 py-1 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
                                >
                                    <span className="text-sm font-medium text-gray-700">Saheed Nagar</span>
                                    <span className={`transform transition-transform ${showDropdown ? 'rotate-180' : ''}`}><FaCaretDown /></span>
                                </button>

                                {showDropdown && (
                                    <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-30">
                                        <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors">
                                            Saheed Nagar
                                        </button>
                                        <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors">
                                            Jaydev Vihar
                                        </button>
                                        <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors">
                                            Nayapalli
                                        </button>
                                    </div>
                                )}
                            </div> */}

                            {/* Pulse Open with Condition */}
                            <div className="items-center gap-2 ml-auto hidden md:flex">
                                <div className={`w-3 h-3 rounded-full animate-pulse ${isOpen ? 'bg-green-500' : 'bg-red-500'}`}></div>
                                <span className="text-sm font-medium text-gray-700">
                                    {isOpen ? 'OPEN' : 'CLOSED'}
                                </span>
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="ml-2 px-2 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded transition-colors"
                                >
                                    {isOpen ? 'Close' : 'Open'}
                                </button>
                            </div>

                            {/* Notifications */}
                            <div className="relative hidden md:flex">
                                <button
                                    onClick={() => setShowNotifications(!showNotifications)}
                                    className="relative p-1.5 cursor-pointer rounded-full bg-indigo-50 border border-indigo-200 hover:bg-indigo-100 transition-colors"
                                >
                                    <FiBell size={18} className='text-indigo-800' />
                                    {notifications > 0 && (
                                        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                                            {notifications}
                                        </span>
                                    )}
                                </button>

                                {showNotifications && (
                                    <div className="absolute top-full right-0 mt-1 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-30">
                                        <div className="p-3 border-b border-gray-200">
                                            <h3 className="font-semibold text-gray-800">Notifications</h3>
                                        </div>
                                        <div className="max-h-60 overflow-y-auto">
                                            {notificationItems.map(notification => (
                                                <div
                                                    key={notification.id}
                                                    className={`p-3 border-b border-gray-100 hover:bg-gray-50 transition-colors ${notification.unread ? 'bg-blue-50' : ''
                                                        }`}
                                                    onClick={() => markAsRead(notification.id)}
                                                >
                                                    <p className="text-sm text-gray-800">{notification.text}</p>
                                                    <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="p-2 border-t border-gray-200">
                                            <button className="w-full text-center text-sm text-blue-600 hover:text-blue-800 py-1 transition-colors">
                                                View All Notifications
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Full Screen */}
                            <button
                                onClick={toggleFullscreen}
                                className="p-1.5 cursor-pointer rounded-full bg-purple-50 border border-purple-200 hover:bg-purple-100 transition-colors hidden md:flex"
                                title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
                            >
                                {isFullscreen ? (
                                    <RiFullscreenExitLine size={18} className='text-purple-800' />
                                ) : (
                                    <RiFullscreenFill size={18} className='text-purple-800' />
                                )}
                            </button>

                            {/* Live Date & Time */}
                            <div className="px-3 py-0.5 rounded-full bg-cyan-50 border border-cyan-200 hidden md:flex">
                                <span className="text-md font-semibold font-mono text-cyan-600">{currentTime}</span>
                            </div>

                            {/* Logout */}
                            <button
                                onClick={handleLogout}
                                className="pl-2 pr-4 py-0.5 ml-auto md:ml-0 bg-red-50 border border-red-200 hover:bg-red-600 hover:text-white text-red-600 text-md font-medium rounded-full transition-colors flex items-center gap-2">
                                <IoMdLogOut />
                                Logout
                            </button>
                        </div>

                        {/* Overlay for dropdowns */}
                        {(showDropdown || showNotifications) && (
                            <div
                                className="fixed inset-0 z-10"
                                onClick={() => {
                                    setShowDropdown(false);
                                    setShowNotifications(false);
                                }}
                            />
                        )}

                        <div className='flex flex-col h-[calc(100vh-60px)] overflow-y-auto py-3 px-4 lg:pl-6 pr-2'>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
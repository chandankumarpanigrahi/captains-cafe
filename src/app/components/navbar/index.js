"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [mobileDropdown, setMobileDropdown] = useState(null);

    // Close mobile menu on desktop resize
    useEffect(() => {
        const handleResize = () => window.innerWidth >= 768 && setIsOpen(false);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const menuItems = [
        {
            name: 'Products',
            submenu: [
                { name: 'Web App', href: '/products/web' },
                { name: 'Mobile App', href: '/products/mobile' },
            ],
        },
        {
            name: 'Solutions',
            submenu: [
                { name: 'For Startups', href: '/solutions/startups' },
                { name: 'For Enterprises', href: '/solutions/enterprises' },
            ],
        },
        { name: 'Pricing', href: '/pricing' },
    ];

    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0">
                        {/* <img src="/logo.svg" alt="Logo" className="h-8 w-auto" /> */}
                    </Link>

                    {/* Desktop Menu - Hover Dropdowns */}
                    <div className="hidden md:flex items-center space-x-8">
                        {menuItems.map((item, index) => (
                            <div
                                key={index}
                                className="relative group" // Group for hover states
                            >
                                {item.submenu ? (
                                    <>
                                        <button className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600 group">
                                            {item.name}
                                            <FiChevronDown className="ml-1 transition-transform group-hover:rotate-180" />
                                        </button>
                                        {/* Hover-activated dropdown */}
                                        <div className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                                            {item.submenu.map((subItem, subIndex) => (
                                                <Link
                                                    key={subIndex}
                                                    href={subItem.href}
                                                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className="px-3 py-2 text-gray-700 hover:text-blue-600"
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Link
                            href="/contact"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-gray-700"
                    >
                        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu - Click Dropdowns */}
                {isOpen && (
                    <div className="md:hidden bg-white pb-4">
                        {menuItems.map((item, index) => (
                            <div key={index} className="px-2 pt-2">
                                {item.submenu ? (
                                    <>
                                        <button
                                            onClick={() => setMobileDropdown(mobileDropdown === index ? null : index)}
                                            className="flex w-full justify-between items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                                        >
                                            {item.name}
                                            <FiChevronDown className={`transition-transform ${mobileDropdown === index ? 'rotate-180' : ''}`} />
                                        </button>
                                        {mobileDropdown === index && (
                                            <div className="pl-4">
                                                {item.submenu.map((subItem, subIndex) => (
                                                    <Link
                                                        key={subIndex}
                                                        href={subItem.href}
                                                        className="block px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-md"
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                        <div className="px-2 pt-2">
                            <Link
                                href="/contact"
                                className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
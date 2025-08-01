"use client";
import styles from "./style.module.css";
import logo from "../../../assets/images/logo.png";
import Image from "next/image";
import MainButton from "../button";
import { FaRegUser, FaChevronDown, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";

export default function MainHeader({ activeTab = null }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState(null);
    const [nestedSubmenu, setNestedSubmenu] = useState(null);
    const navRef = useRef(null);

    // Close menus when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setActiveSubmenu(null);
                setNestedSubmenu(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const navItems = [
        {
            name: "Home",
            href: "#",
        },
        {
            name: "About",
            href: "#"
        },
        {
            name: "Menu",
            href: "#"
        },
        {
            name: "Blogs",
            href: "#"
        },
        
        // {
        //     name: "Menu",
        //     href: "#",
        //     submenu: [
        //         {
        //             name: "Food",
        //             href: "#",
        //             submenu: [
        //                 { name: "Starters", href: "#" },
        //                 { name: "Main Course", href: "#" },
        //                 { name: "Desserts", href: "#" }
        //             ]
        //         },
        //         {
        //             name: "Drinks",
        //             href: "#",
        //             submenu: [
        //                 { name: "Hot Drinks", href: "#" },
        //                 { name: "Cold Drinks", href: "#" },
        //                 { name: "Alcoholic", href: "#" }
        //             ]
        //         }
        //     ]
        // },
        // {
        //     name: "About",
        //     href: "#",
        //     submenu: [
        //         { name: "Our Story", href: "#" },
        //         { name: "Chefs", href: "#" },
        //         { name: "Testimonials", href: "#" }
        //     ]
        // },
        { name: "Contact", href: "#" }
    ];

    const toggleSubmenu = (index) => {
        setActiveSubmenu(activeSubmenu === index ? null : index);
    };

    const toggleNestedSubmenu = (index) => {
        setNestedSubmenu(nestedSubmenu === index ? null : index);
    };

    return (
        <div ref={navRef}>
            {/* Desktop Navigation */}
            <div className={`${styles.header} container`}>
                {/* Logo */}
                <div className={`${styles.logo_area}`}>
                    <Link href="">
                        <Image
                            src={logo}
                            className={styles.logo}
                            width={110}
                            height={110}
                            alt="Logo"
                        />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <ul className="ml-auto flex flex-row gap-2 max-lg:hidden">
                    {navItems.map((item, index) => (
                        <li
                            key={index}
                            className="relative group"
                            onMouseEnter={() => item.submenu && setActiveSubmenu(index)}
                            onMouseLeave={() => item.submenu && setActiveSubmenu(null)}
                        >
                            <Link
                                href={item.href}
                                className={`p-2 text-lg color-primary font-medium flex items-center ${activeTab === item.name ? "border-b-2 border-b-blue-900" : ""
                                    }`}
                            >
                                {item.name}
                                {item.submenu && <FaChevronDown className="ml-1 text-xs" />}
                            </Link>

                            {/* Level 1 Submenu - Only shows immediate children */}
                            {item.submenu && activeSubmenu === index && (
                                <div
                                    className="absolute left-0 mt-0 w-56 bg-white shadow-lg rounded-md z-10 border border-gray-100"
                                    onMouseLeave={() => setNestedSubmenu(null)}
                                >
                                    {item.submenu.map((subItem, subIndex) => (
                                        <div
                                            key={subIndex}
                                            className="relative"
                                            onMouseEnter={() => subItem.submenu && setNestedSubmenu(subIndex)}
                                        >
                                            <Link
                                                href={subItem.href}
                                                className={`block px-4 py-3 hover:bg-primary-light ${subItem.submenu ? "flex justify-between items-center" : ""
                                                    }`}
                                            >
                                                {subItem.name}
                                                {subItem.submenu && <FaChevronRight className="text-xs" />}
                                            </Link>

                                            {/* Level 2 Submenu - Only appears when hovering its parent */}
                                            {subItem.submenu && nestedSubmenu === subIndex && (
                                                <div className="absolute left-full top-0 ml-0 w-56 bg-white shadow-lg rounded-md z-20 border border-gray-100">
                                                    {subItem.submenu.map((nestedItem, nestedIndex) => (
                                                        <Link
                                                            key={nestedIndex}
                                                            href={nestedItem.href}
                                                            className="block px-4 py-3 hover:bg-primary-light"
                                                        >
                                                            {nestedItem.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Desktop Buttons */}
                <ul className="ml-auto flex flex-row gap-2 max-lg:hidden">
                    <MainButton text="Order Now" className="inner_shadow" />
                    <MainButton icon={<FaRegUser />} className="inner_shadow" />
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden ml-auto p-2 text-primary"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className={`${styles.mobile_menu} lg:hidden bg-white shadow-lg`}>
                    <ul className="flex flex-col gap-0.5 p-2">
                        {navItems.map((item, index) => (
                            <li key={index} className="relative">
                                {item.submenu ? (
                                    <>
                                        <button
                                            onClick={() => toggleSubmenu(index)}
                                            className={`w-full p-2 text-lg flex justify-between items-center ${activeTab === item.name ? "bg-primary-dark text-white" : "text-primary"
                                                } rounded-md`}
                                        >
                                            {item.name}
                                            <FaChevronDown
                                                className={`transition-transform ${activeSubmenu === index ? "rotate-180" : ""
                                                    }`}
                                            />
                                        </button>

                                        {/* Mobile Level 1 Submenu */}
                                        {activeSubmenu === index && (
                                            <ul className="pl-4 mt-1 space-y-1">
                                                {item.submenu.map((subItem, subIndex) => (
                                                    <li key={subIndex} className="relative">
                                                        {subItem.submenu ? (
                                                            <>
                                                                <button
                                                                    onClick={() => toggleNestedSubmenu(subIndex)}
                                                                    className="w-full p-2 pl-3 text-primary flex justify-between items-center hover:bg-primary-light rounded"
                                                                >
                                                                    {subItem.name}
                                                                    <FaChevronRight
                                                                        className={`transition-transform ${nestedSubmenu === subIndex ? "rotate-90" : ""
                                                                            }`}
                                                                    />
                                                                </button>

                                                                {/* Mobile Level 2 Submenu */}
                                                                {nestedSubmenu === subIndex && (
                                                                    <ul className="pl-4 mt-1 space-y-1">
                                                                        {subItem.submenu.map((nestedItem, nestedIndex) => (
                                                                            <li key={nestedIndex}>
                                                                                <Link
                                                                                    href={nestedItem.href}
                                                                                    className="block p-2 pl-5 text-primary hover:bg-primary-light rounded"
                                                                                >
                                                                                    {nestedItem.name}
                                                                                </Link>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                )}
                                                            </>
                                                        ) : (
                                                            <Link
                                                                href={subItem.href}
                                                                className="block p-2 pl-3 text-primary hover:bg-primary-light rounded"
                                                            >
                                                                {subItem.name}
                                                            </Link>
                                                        )}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className={`block p-3 text-lg ${activeTab === item.name ? "bg-primary-dark text-white" : "text-primary"
                                            } rounded-md`}
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </li>
                        ))}
                        <li className="flex gap-2 mt-2">
                            <MainButton
                                text="Order Now"
                                className="inner_shadow w-full justify-center"
                                size="lg"
                            />
                            <MainButton
                                icon={<FaRegUser />}
                                className="inner_shadow"
                                size="lg"
                            />
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}
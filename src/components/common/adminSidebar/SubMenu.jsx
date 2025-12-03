"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from "./style.module.css";
import { FaCaretDown } from "react-icons/fa";

const SubMenu = () => {
    const pathname = usePathname();
    const [activeMainMenu, setActiveMainMenu] = useState('');
    const [openDropdown, setOpenDropdown] = useState(null); // Now tracks only one open dropdown

    const subMenuItems = {
        '/admin/dashboard': [
            { name: 'Dashboard', path: '/admin/dashboard' },
            { name: 'Orders', path: '/admin/dashboard/orders' },
            { name: 'Quick Access', path: '/admin/dashboard/quickAccess' },
            { name: 'Calendar', path: '/admin/dashboard/calendar' },
            { name: 'Notification', path: '/admin/dashboard/notification' },
        ],
        '/admin/content': [
            { name: 'Home', path: '/admin/content/home' },
            { name: 'About Us', path: '/admin/content/about' },
            { name: 'Blogs', path: '/admin/content/blogs' },
            {
                name: 'Career',
                path: '/admin/content/career',
                dropdown: [
                    { name: 'Manage Posts', path: '/admin/content/career' },
                    { name: 'Form Data', path: '/admin/content/career/form' }
                ]
            },
            { name: 'Gallery', path: '/admin/content/gallery' },
            { name: 'Documents', path: '/admin/content/documents' },
            {
                name: 'Testimonials',
                path: '/admin/content/testimonials',
                dropdown: [
                    { name: 'Manage', path: '/admin/content/testimonials' },
                    { name: 'Form Data', path: '/admin/content/testimonials/form' }
                ]
            },
            {
                name: 'Offers',
                path: '/admin/content/offers',
                dropdown: [
                    { name: 'Manage', path: '/admin/content/offers' },
                    { name: 'Loyalty Program', path: '/admin/content/offers/Loyalty' }
                ]
            },
            {
                name: 'Contact Us',
                path: '/admin/content/contact',
                dropdown: [
                    { name: 'Manage', path: '/admin/content/contact' },
                    { name: 'Form Data', path: '/admin/content/contact/form' }
                ]
            },
            { name: 'Support', path: '/admin/content/support' },
            { name: 'FAQ', path: '/admin/content/faq' },
            { name: 'Privacy Policy', path: '/admin/content/privacy' }
        ],
        '/admin/orders': [
            { name: 'All Orders', path: '/admin/orders' },
            {
                name: 'Pending',
                path: '/admin/orders/pending',
                dropdown: [
                    { name: 'Review', path: '/admin/orders/pending/review' },
                    { name: 'Approval', path: '/admin/orders/pending/approval' }
                ]
            },
            { name: 'Completed', path: '/admin/orders/completed' },
            { name: 'Cancelled', path: '/admin/orders/cancelled' }
        ],
        '/admin/products': [
            { name: 'All Products', path: '/admin/products' },
            {
                name: 'Categories',
                path: '/admin/products/categories',
                dropdown: [
                    { name: 'All Categories', path: '/admin/products/categories' },
                    { name: 'Add New', path: '/admin/products/categories/add' },
                    { name: 'Manage', path: '/admin/products/categories/manage' }
                ]
            },
            { name: 'Inventory', path: '/admin/products/inventory' },
            { name: 'Reviews', path: '/admin/products/reviews' }
        ],
        '/admin/users': [
            { name: 'All Users', path: '/admin/users' },
            { name: 'Admins', path: '/admin/users/admins' },
            { name: 'Customers', path: '/admin/users/customers' },
            { name: 'Roles', path: '/admin/users/roles' }
        ],
        '/admin/settings': [
            { name: 'General', path: '/admin/settings' },
            { name: 'Appearance', path: '/admin/settings/appearance' },
            { name: 'Notifications', path: '/admin/settings/notifications' }
        ],
        '/admin/system': [
            { name: 'Status', path: '/admin/system' },
            { name: 'Logs', path: '/admin/system/logs' },
            { name: 'Backup', path: '/admin/system/backup' }
        ],
        '/admin/inventory': [
            { name: 'Stock', path: '/admin/inventory' },
            { name: 'Suppliers', path: '/admin/inventory/suppliers' },
            { name: 'Orders', path: '/admin/inventory/orders' }
        ]
    };

    // Determine which main menu is active based on current path
    useEffect(() => {
        const currentMainMenu = Object.keys(subMenuItems).find(menuPath =>
            pathname.startsWith(menuPath)
        );
        setActiveMainMenu(currentMainMenu || '');
    }, [pathname]);

    // Toggle dropdown - closes others when opening a new one
    const toggleDropdown = (itemName) => {
        setOpenDropdown(prev => prev === itemName ? null : itemName);
    };

    // Check if a sub-menu item is active
    const isSubItemActive = (itemPath) => {
        return pathname === itemPath ||
            (itemPath !== '/admin/dashboard' && pathname.startsWith(itemPath));
    };

    // Check if dropdown should be open by default (if any child is active)
    // This will only work for the initially active dropdown
    const isDropdownOpenByDefault = (dropdownItems, itemName) => {
        if (openDropdown !== null) return openDropdown === itemName;

        // Only auto-open if no dropdown is manually opened and this has active children
        return dropdownItems.some(child => isSubItemActive(child.path));
    };

    // Close dropdown when clicking outside (optional enhancement)
    useEffect(() => {
        const handleClickOutside = () => {
            setOpenDropdown(null);
        };

        // Add event listener when a dropdown is open
        if (openDropdown !== null) {
            document.addEventListener('click', handleClickOutside);
            return () => document.removeEventListener('click', handleClickOutside);
        }
    }, [openDropdown]);

    if (!activeMainMenu || !subMenuItems[activeMainMenu]) {
        return null;
    }

    return (
        <div className={`${styles.submenu} h-fit overflow-y-auto`} onClick={(e) => e.stopPropagation()}>
            <div className="py-8 px-4">
                <h3 className="text-blue-950 font-semibold text-lg mb-4 px-2 border-l-4 border-blue-900">
                    {activeMainMenu.split('/').pop().charAt(0).toUpperCase() +
                        activeMainMenu.split('/').pop().slice(1)}
                </h3>

                <ul className="space-y-1">
                    {subMenuItems[activeMainMenu].map((item, index) => {
                        const hasDropdown = item.dropdown && item.dropdown.length > 0;
                        const isDropdownOpen = hasDropdown ? isDropdownOpenByDefault(item.dropdown, item.name) : false;
                        const isActive = isSubItemActive(item.path);

                        return (
                            <li key={index}>
                                {/* Main Sub-Menu Item */}
                                <div className="relative">
                                    <Link
                                        href={item.path}
                                        className={`flex group justify-between items-center px-3 py-2 rounded-lg transition-all duration-200 ${isActive
                                            ? 'bg-white text-blue-900 shadow-md font-semibold'
                                            : 'text-blue-900 hover:bg-white hover:text-blue-900'
                                            }`}
                                        onClick={(e) => {
                                            // If clicking on a dropdown item, don't navigate, just toggle dropdown
                                            if (hasDropdown) {
                                                e.preventDefault();
                                                toggleDropdown(item.name);
                                            }
                                        }}
                                    >
                                        <span className="text-md">{item.name}</span>
                                        {hasDropdown && (
                                            <span
                                                className={`transform transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''
                                                    }`}
                                            >
                                                <FaCaretDown className='opacity-70 group-hover:opacity-100' />
                                            </span>
                                        )}
                                    </Link>

                                    {/* Dropdown Items */}
                                    {hasDropdown && isDropdownOpen && (
                                        <ul className="ml-4 mt-1 space-y-1 border-l-2 rounded-bl-2xl pl-2">
                                            {item.dropdown.map((dropdownItem, dropdownIndex) => (
                                                <li key={dropdownIndex}>
                                                    <Link
                                                        href={dropdownItem.path}
                                                        className={`block px-3 py-2 rounded-lg transition-all duration-200 text-sm ${pathname === dropdownItem.path
                                                                ? 'bg-blue-100 text-blue-900 font-medium'
                                                                : 'text-blue-700 hover:bg-white hover:text-blue-900'
                                                            }`}
                                                        onClick={() => {
                                                            // Close dropdown when a sub-item is clicked
                                                            setOpenDropdown(null);
                                                        }}
                                                    >
                                                        {dropdownItem.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default SubMenu;
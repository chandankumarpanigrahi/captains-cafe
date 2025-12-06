"use client";
import React, { useState } from 'react';
import DataTable from '@/components/ui/data-table';
import { Button } from '@/components/ui/button';
import { Status } from '@/components/ui/status';
import { toast } from "react-hot-toast";
import { MdOutlineContentCopy, MdCheck } from "react-icons/md";

const AllBlogsTable = () => {
    const [copiedRowId, setCopiedRowId] = useState(null);
    const [blogs, setBlogs] = useState([
        { id: 1, blogName: "Harry Potter's Week", blogDate: "12 Nov 2025", status: "scheduled", isPublished: false },
        { id: 2, blogName: "Fantasy World", blogDate: "15 Nov 2025", status: "default", isPublished: false },
        { id: 3, blogName: "Tech Updates", blogDate: "10 Nov 2025", status: "archived", isPublished: false },
        { id: 4, blogName: "Travel Diary", blogDate: "18 Nov 2025", status: "none", isPublished: false },
        { id: 5, blogName: "Coffee Culture", blogDate: "20 Nov 2025", status: "default", isPublished: true },
        { id: 6, blogName: "Coding 101", blogDate: "22 Nov 2025", status: "scheduled", isPublished: false },
        { id: 7, blogName: "Morning Brew", blogDate: "25 Nov 2025", status: "archived", isPublished: false },
        { id: 8, blogName: "Beans Origins", blogDate: "26 Nov 2025", status: "default", isPublished: true },
        { id: 9, blogName: "Latte Art Tips", blogDate: "28 Nov 2025", status: "none", isPublished: false },
        { id: 10, blogName: "Roasting Guide", blogDate: "01 Dec 2025", status: "default", isPublished: true },
        { id: 11, blogName: "Cafe Layouts", blogDate: "03 Dec 2025", status: "scheduled", isPublished: false },
        { id: 12, blogName: "Barista Life", blogDate: "05 Dec 2025", status: "default", isPublished: true },
        { id: 13, blogName: "Tea vs Coffee", blogDate: "07 Dec 2025", status: "archived", isPublished: false },
        { id: 14, blogName: "Espresso Shots", blogDate: "10 Dec 2025", status: "none", isPublished: false },
        { id: 15, blogName: "Pastry Pairing", blogDate: "12 Dec 2025", status: "default", isPublished: true },
        { id: 16, blogName: "Customer Stories", blogDate: "14 Dec 2025", status: "scheduled", isPublished: false },
        { id: 17, blogName: "Winter Menu", blogDate: "16 Dec 2025", status: "default", isPublished: true },
        { id: 18, blogName: "Staff Picks", blogDate: "18 Dec 2025", status: "none", isPublished: false },
        { id: 19, blogName: "Sustainable Cups", blogDate: "20 Dec 2025", status: "archived", isPublished: false },
        { id: 20, blogName: "Music for Carp", blogDate: "22 Dec 2025", status: "default", isPublished: true },
        { id: 21, blogName: "Holiday Hours", blogDate: "24 Dec 2025", status: "scheduled", isPublished: false },
        { id: 22, blogName: "New Year Goals", blogDate: "26 Dec 2025", status: "default", isPublished: true },
        { id: 23, blogName: "Best Beans 2025", blogDate: "28 Dec 2025", status: "archived", isPublished: false },
        { id: 24, blogName: "Community Event", blogDate: "30 Dec 2025", status: "none", isPublished: false },
    ]);

    // Function to toggle publish state
    const togglePublishState = (id) => {
        setBlogs(blogs.map(blog => {
            if (blog.id === id) {
                const newPublishedState = !blog.isPublished;
                const newStatus = newPublishedState ? 'default' : 'scheduled';

                // Show toast notification
                toast.success(`Blog ${newPublishedState ? 'published' : 'unpublished'} successfully!`);

                return {
                    ...blog,
                    isPublished: newPublishedState,
                    status: newStatus
                };
            }
            return blog;
        }));
    };

    // Function to toggle archive state
    const toggleArchiveState = (id) => {
        setBlogs(blogs.map(blog => {
            if (blog.id === id) {
                const isCurrentlyArchived = blog.status === 'archived';
                const newStatus = isCurrentlyArchived ? 'scheduled' : 'archived';

                // Show toast notification
                toast.success(`Blog ${isCurrentlyArchived ? 'unarchived' : 'archived'} successfully!`);

                return {
                    ...blog,
                    status: newStatus,
                    isPublished: newStatus === 'default' // If published, set isPublished to true
                };
            }
            return blog;
        }));
    };

    // Function to edit blog
    const handleEdit = (id) => {
        const blog = blogs.find(b => b.id === id);
        toast.info(`Editing blog: "${blog.blogName}"`);
        // Add your edit logic here
    };

    // Function to handle share
    const handleShare = (blogName, id) => {
        // Simulate copying share link to clipboard
        navigator.clipboard.writeText(`https://captainscafe.com/blogs/${blogName.toLowerCase().replace(/\s+/g, '-')}`)
            .then(() => {
                toast.success(`Share link for "${blogName}" copied to clipboard!`);
                setCopiedRowId(id);
                setTimeout(() => setCopiedRowId(null), 2000);
            })
            .catch(() => {
                toast.error("Failed to copy share link");
            });
    };

    // Function to get status display text
    const getStatusText = (status) => {
        switch (status) {
            case 'default':
                return 'Published';
            case 'scheduled':
                return 'Scheduled';
            case 'archived':
                return 'Archived';
            case 'none':
                return 'Draft';
            default:
                return 'Draft';
        }
    };

    // Define columns
    const columns = [
        {
            key: 'id',
            header: 'Sl. No.',
            width: '100px',
            filterable: false,
            cellClassName: 'text-center font-mono text-sm whitespace-nowrap',
        },
        {
            key: 'blogName',
            header: 'Blog Title',
            width: '200px',
            cell: (row) => (
                <div className="flex items-center justify-center gap-2 whitespace-nowrap">
                    <span className="font-semibold text-gray-600">{row.blogName}</span>
                </div>
            )
        },
        {
            key: 'blogDate',
            header: 'Date',
            width: '200px',
            cell: (row) => (
                <div className="flex items-center justify-center gap-2 whitespace-nowrap">
                    <span className="font-semibold text-gray-600">{row.blogDate}</span>
                </div>
            )
        },
        {
            key: 'status',
            header: 'Status',
            width: '120px',
            cell: (row) => (
                <div className="flex items-center justify-center gap-2 whitespace-nowrap">
                    <Status variant={row.status}>
                        {getStatusText(row.status)}
                    </Status>
                </div>
            )
        },
        {
            key: 'share',
            header: 'Share',
            width: '120px',
            cell: (row) => (
                <div className="flex items-center justify-center gap-2 whitespace-nowrap">
                    <button
                        className={`cursor-pointer font-medium text-sm transition-all duration-200 ${copiedRowId === row.id ? 'text-green-600' : 'text-blue-700 hover:text-blue-800'
                            }`}
                        onClick={(e) => {
                            e.stopPropagation();
                            handleShare(row.blogName, row.id);
                        }}
                    >
                        {copiedRowId === row.id ? <MdCheck size={18} /> : <MdOutlineContentCopy size={18} />}
                    </button>
                </div>
            )
        },
    ];

    // Custom action buttons
    const renderCustomActions = (row) => {
        const isPublished = row.status === 'default';
        const isArchived = row.status === 'archived';
        const isScheduled = row.status === 'scheduled';

        return (
            <div className="flex items-center justify-center gap-2">
                {/* Publish/Unpublish Button */}
                {row.status !== 'archived' && (
                    <button
                        variant="ghost"
                        size="sm"
                        className={`px-2 py-0.5 rounded-sm cursor-pointer border transition-all text-sm font-medium whitespace-nowrap ${isPublished
                            ? 'text-gray-700 bg-gray-100 hover:bg-gray-200 border-gray-300'
                            : 'text-white bg-blue-900 hover:bg-blue-800 border-blue-900'
                            }`}
                        title={isPublished ? "Unpublish" : "Publish"}
                        onClick={(e) => {
                            e.stopPropagation();
                            togglePublishState(row.id);
                        }}
                    >
                        {isPublished ? "Unpublish" : isScheduled ? "Publish Now" : "Publish"}
                    </button>
                )}

                {/* Archive/Unarchive Button */}
                <button
                    variant="ghost"
                    size="sm"
                    className={`px-2 py-0.5 rounded-sm cursor-pointer border transition-all text-sm font-medium whitespace-nowrap ${isArchived
                        ? 'text-gray-700 bg-gray-100 hover:bg-gray-200 border-gray-300'
                        : 'text-amber-700 bg-amber-50 hover:bg-amber-100 border-amber-300'
                        }`}
                    title={isArchived ? "Unarchive" : "Archive"}
                    onClick={(e) => {
                        e.stopPropagation();
                        toggleArchiveState(row.id);
                    }}
                >
                    {isArchived ? "Unarchive" : "Archive"}
                </button>

                {/* Edit Button - Disabled for archived blogs */}
                <button
                    variant="ghost"
                    size="sm"
                    className={`px-2 py-0.5 rounded-sm cursor-pointer border transition-all text-sm font-medium whitespace-nowrap ${row.status === 'archived'
                        ? 'text-gray-400 bg-gray-100 border-gray-300 cursor-not-allowed'
                        : 'text-green-700 bg-green-50 hover:bg-green-100 border-green-300'
                        }`}
                    title={row.status === 'archived' ? "Cannot edit archived blogs" : "Edit Blog"}
                    onClick={(e) => {
                        if (row.status !== 'archived') {
                            e.stopPropagation();
                            handleEdit(row.id);
                        }
                    }}
                    disabled={row.status === 'archived'}
                >
                    Edit
                </button>
            </div>
        );
    };

    return (
        <div className='w-full'>

            {/* DataTable with Custom Actions */}
            <DataTable
                columns={columns}
                data={blogs}
                enableSorting={true}
                enableFiltering={true}
                enableColumnFilters={false}
                enableRowSelection={false}
                enableColumnVisibility={true}
                enableExport={true}
                enablePagination={true}
                enableActions={true}
                renderActions={renderCustomActions}
                actionsPosition="end"
                actionsColumnWidth="150px"
                actionsColumnHeader="Actions"
                pageSizeOptions={[5, 10, 25, 50]}
                defaultPageSize={10}
                onRowClick={(row) => {
                    // console.log('Row clicked:', row);
                    // setSelectedAction(`Clicked on ${row.name}`);
                }}
            />

        </div>
    );
};

export default AllBlogsTable;
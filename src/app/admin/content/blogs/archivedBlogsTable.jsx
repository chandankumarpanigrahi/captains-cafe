"use client";
import React, { useState } from 'react';
import DataTable from '@/components/ui/data-table';
import { Button } from '@/components/ui/button';
import { toast } from "react-hot-toast";
import { MdOutlineContentCopy, MdCheck } from "react-icons/md";

const TrashBlogsTable = () => {
    const [copiedRowId, setCopiedRowId] = useState(null);
    const [blogs, setBlogs] = useState([
        { id: 1, blogName: "Harry Potter's Week", blogDate: "12 Nov 2025", status: "scheduled", isPublished: false },
        { id: 2, blogName: "Fantasy World", blogDate: "15 Nov 2025", status: "default", isPublished: false },
        { id: 3, blogName: "Tech Updates", blogDate: "10 Nov 2025", status: "archived", isPublished: false },
        { id: 4, blogName: "Travel Diary", blogDate: "18 Nov 2025", status: "none", isPublished: false }
    ]);

    // Function to restore blog
    const handleRestore = (id) => {
        setBlogs(blogs.map(blog => {
            if (blog.id === id) {
                // Show toast notification
                toast.success(`Blog restored successfully!`);

                return {
                    ...blog,
                    status: 'scheduled',
                    isPublished: false
                };
            }
            return blog;
        }));
    };

    // Function to delete blog
    const handleDelete = (id) => {
        setBlogs(blogs.filter(blog => blog.id !== id));
        toast.success("Blog deleted successfully!");
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
        return (
            <div className="flex items-center justify-center gap-2">
                {/* Restore Button */}
                <button
                    className="px-2 py-0.5 rounded-sm cursor-pointer border transition-all text-sm font-medium whitespace-nowrap text-white bg-blue-900 hover:bg-blue-800 border-blue-900"
                    title="Restore"
                    onClick={(e) => {
                        e.stopPropagation();
                        handleRestore(row.id);
                    }}
                >
                    Restore
                </button>

                {/* Delete Button */}
                <button
                    className="px-2 py-0.5 rounded-sm cursor-pointer border transition-all text-sm font-medium whitespace-nowrap text-red-700 bg-red-50 hover:bg-red-100 border-red-300"
                    title="Delete"
                    onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(row.id);
                    }}
                >
                    Delete
                </button>

                {/* Edit Button */}
                <button
                    className="px-2 py-0.5 rounded-sm cursor-pointer border transition-all text-sm font-medium whitespace-nowrap text-green-700 bg-green-50 hover:bg-green-100 border-green-300"
                    title="Edit Blog"
                    onClick={(e) => {
                        e.stopPropagation();
                        handleEdit(row.id);
                    }}
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

export default TrashBlogsTable;
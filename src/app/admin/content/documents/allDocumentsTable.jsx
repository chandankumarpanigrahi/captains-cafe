"use client";
import React, { useState } from 'react';
import DataTable from '@/components/ui/data-table';
import { Button } from '@/components/ui/button';
import { Status } from '@/components/ui/status';
import { toast } from "react-hot-toast";
import { MdOutlineContentCopy, MdCheck } from "react-icons/md";
import { FaFilePdf } from "react-icons/fa";

const AllBlogsTable = () => {
    const [copiedRowId, setCopiedRowId] = useState(null);
    const [blogs, setBlogs] = useState([
        { id: 1, documentName: "Food Safety", logo: "/images/logos/ofs.png", fromDate: "12 Nov 2025", toDate: "12 Nov 2035", issuer: "FSSAI, Govt. of India", link: "../../file/sample.pdf", status: "scheduled", isPublished: false },
        { id: 2, documentName: "Business License", logo: "/images/logos/fssai.png", fromDate: "15 Nov 2025", toDate: "15 Nov 2035", issuer: "BMC, Bhubaneswar", link: "../../file/fssai.pdf", status: "default", isPublished: false },
        { id: 3, documentName: "Fire Safety", logo: "/images/logos/bmc.png", fromDate: "10 Nov 2025", toDate: "10 Nov 2035", issuer: "OFC, Govt. of Odisha", link: "../../file/sample.pdf", status: "scheduled", isPublished: false }
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

    // Function to get status display text
    const getStatusText = (status) => {
        switch (status) {
            case 'default':
                return 'Published';
            case 'scheduled':
                return 'Scheduled';
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
            key: 'logo',
            header: 'Logo',
            width: '100px',
            cell: (row) => (
                <div className="flex items-center justify-center gap-2 whitespace-nowrap">
                    <img src={row.logo} alt={row.blogName} className="h-24 object-contain" />
                </div>
            ),
            filterable: false,
            cellClassName: 'text-center font-mono text-sm whitespace-nowrap',
        },
        {
            key: 'documentName',
            header: 'Blog Title',
            width: '200px',
            cell: (row) => (
                <div className="flex flex-col items-start justify-center gap-1 whitespace-nowrap">
                    <div className="flex flex-row items-end gap-2">
                        <div className="font-semibold text-[24px] leading-tight text-blue-900">{row.documentName}</div>
                        <div className=" text-gray-400 text-[16px]">(by {row.issuer})</div>
                    </div>
                    <div className="flex text-gray-600 flex-row gap-1 text-[14px]">
                        <div className="font-light">Valid from</div>
                        <div className="font-semibold">{row.fromDate}</div>
                        <div className="font-light">to</div>
                        <div className="font-semibold">{row.toDate}</div>
                    </div>
                </div>
            )
        },
        {
            key: 'link',
            header: 'Link',
            width: '200px',
            cell: (row) => (
                <div className="flex items-center flex-row justify-center gap-2 whitespace-nowrap border-r border-gray-200">
                    <div className="flex flex-col items-end">
                        <span className="text-gray-800 text-[13px]">2 Pages</span>
                        <span className="text-gray-400 text-[12px] mb-1">2.02mb</span>
                        <a href={row.link} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600">View</a>
                    </div>
                    <FaFilePdf size={56} className='text-red-500' />
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

                {/* Delete Button */}
                <button
                    variant="ghost"
                    size="sm"
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
                    variant="ghost"
                    size="sm"
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

export default AllBlogsTable;
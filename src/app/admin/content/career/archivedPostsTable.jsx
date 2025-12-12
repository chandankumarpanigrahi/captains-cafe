"use client";
import React, { useState } from 'react';
import DataTable from '@/components/ui/data-table';
import { toast } from "react-hot-toast";
import { MdOutlineContentCopy, MdCheck, MdArrowForward } from "react-icons/md";
import { FaShare } from "react-icons/fa6";

const ArchivedPostsTable = () => {
    const [copiedRowId, setCopiedRowId] = useState(null);
    const [posts, setPosts] = useState([
        { id: 1, jobTitle: "Executive Chef", experience: "7 Years", jobDate: "12 Aug 2025" },
        { id: 2, jobTitle: "Culinary Team Member", experience: "1 Year", jobDate: "03 Aug 2025" }
    ]);

    // Function to restore post
    const handleRestore = (id) => {
        setPosts(posts.filter(post => post.id !== id));
        toast.success(`Job restored successfully!`);
    };

    // Function to delete post
    const handleDelete = (id) => {
        setPosts(posts.filter(post => post.id !== id));
        toast.success("Job deleted successfully!");
    };

    // Function to edit post
    const handleEdit = (id) => {
        const post = posts.find(p => p.id === id);
        toast.info(`Editing job: "${post.jobTitle}"`);
    };

    // Function to handle share copy
    const handleCopy = (jobTitle, id) => {
        navigator.clipboard.writeText(`https://captainscafe.com/career/${jobTitle.toLowerCase().replace(/\s+/g, '-')}`)
            .then(() => {
                toast.success(`Link copied!`);
                setCopiedRowId(id);
                setTimeout(() => setCopiedRowId(null), 2000);
            })
            .catch(() => {
                toast.error("Failed to copy link");
            });
    };

    // Define columns
    const columns = [
        {
            key: 'id',
            header: 'Sl. No.',
            width: '80px',
            filterable: false,
            cellClassName: 'text-center font-mono text-sm whitespace-nowrap',
        },
        {
            key: 'jobTitle',
            header: 'Job Title',
            width: '250px',
            cell: (row) => (
                <div className="flex items-center justify-start gap-2 whitespace-nowrap px-4">
                    <span className="font-medium text-gray-700">{row.jobTitle}</span>
                </div>
            )
        },
        {
            key: 'experience',
            header: 'Experience',
            width: '150px',
            cell: (row) => (
                <div className="flex items-center justify-center gap-2 whitespace-nowrap">
                    <span className="text-gray-600">{row.experience}</span>
                </div>
            )
        },
        {
            key: 'jobDate',
            header: 'Date',
            width: '150px',
            cell: (row) => (
                <div className="flex items-center justify-center gap-2 whitespace-nowrap">
                    <span className="text-gray-600">{row.jobDate}</span>
                </div>
            )
        },
        {
            key: 'share',
            header: 'Share',
            width: '100px',
            cell: (row) => (
                <div className="flex items-center justify-center gap-3 whitespace-nowrap">
                    {/* Copy Link */}
                    <button
                        className={`cursor-pointer transition-all duration-200 ${copiedRowId === row.id ? 'text-green-600' : 'text-gray-500 hover:text-gray-700'}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            handleCopy(row.jobTitle, row.id);
                        }}
                        title="Copy Link"
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
                    className="px-3 py-1 rounded-sm cursor-pointer border transition-all text-sm font-medium whitespace-nowrap text-yellow-700 bg-white hover:bg-yellow-50 border-yellow-500"
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
                    className="px-3 py-1 rounded-sm cursor-pointer border transition-all text-sm font-medium whitespace-nowrap text-red-600 bg-white hover:bg-red-50 border-red-400"
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
                    className="px-3 py-1 rounded-sm cursor-pointer border transition-all text-sm font-medium whitespace-nowrap text-green-600 bg-white hover:bg-green-50 border-green-500"
                    title="Edit Job"
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
            <DataTable
                columns={columns}
                data={posts}
                enableSorting={true}
                enableFiltering={true}
                enableColumnFilters={false}
                enableRowSelection={false}
                enableColumnVisibility={true}
                enableExport={false}
                enablePagination={true}
                enableActions={true}
                renderActions={renderCustomActions}
                actionsPosition="end"
                actionsColumnWidth="280px"
                actionsColumnHeader="Action"
                pageSizeOptions={[5, 10, 25, 50]}
                defaultPageSize={10}
            />
        </div>
    );
};

export default ArchivedPostsTable;
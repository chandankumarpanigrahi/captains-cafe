"use client";
import React, { useState } from 'react';
import DataTable from '@/components/ui/data-table';
import { toast } from "react-hot-toast";
import { MdOutlineContentCopy, MdCheck, MdArrowForward } from "react-icons/md";
import { FaShare } from "react-icons/fa6";

const ArchivedPostsTable = () => {
    const [copiedRowId, setCopiedRowId] = useState(null);
    const [posts, setPosts] = useState([
        { id: 1, userName: "Sameer Dash", video: "https://example.com/video1", published: false },
        { id: 2, userName: "Namita Pattnaik", video: "https://example.com/video2", published: false },
        { id: 3, userName: "Akash Pradhan", video: "https://example.com/video3", published: false },
        { id: 4, userName: "sASMITA nAIK", video: "https://example.com/video4", published: false }
    ]);

    // Function to toggle publish status
    const handlePublishToggle = (id) => {
        setPosts(posts.map(post => {
            if (post.id === id) {
                const newStatus = !post.published;
                if (newStatus) {
                    toast.success("Video published successfully!");
                } else {
                    toast.success("Video unpublished successfully!");
                }
                return { ...post, published: newStatus };
            }
            return post;
        }));
    };

    // Function to delete post
    const handleDelete = (id) => {
        setPosts(posts.filter(post => post.id !== id));
        toast.success("Video deleted successfully!");
    };

    // Function to edit post
    const handleEdit = (id) => {
        const post = posts.find(p => p.id === id);
        toast.info(`Editing job: "${post.userName}"`);
    };

    // Function to handle share copy
    const handleCopy = (userName, id) => {
        navigator.clipboard.writeText(`https://captainscafe.com/career/${userName.toLowerCase().replace(/\s+/g, '-')}`)
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
            key: 'userName',
            header: 'User Name',
            width: '250px',
            cell: (row) => (
                <div className="flex items-center justify-start gap-2 whitespace-nowrap px-4">
                    <span className="font-medium text-gray-700">{row.userName}</span>
                </div>
            )
        },
        {
            key: 'video',
            header: 'Video',
            width: '150px',
            cell: (row) => (
                <div className="flex items-center justify-center gap-2 whitespace-nowrap">
                    <a href={row.video} target="_blank" rel="noopener noreferrer" className="text-blue-600 uppercase font-semibold underline">Link</a>
                </div>
            )
        }
    ];

    // Custom action buttons
    const renderCustomActions = (row) => {
        return (
            <div className="flex items-center justify-center gap-2">
                {/* Publish/Unpublish Button */}
                <button
                    className={`px-3 py-1 rounded-sm cursor-pointer border transition-all text-sm font-medium whitespace-nowrap ${row.published
                        ? 'text-gray-600 bg-white hover:bg-gray-50 border-gray-400'
                        : 'text-blue-600 bg-white hover:bg-blue-50 border-blue-500'
                        }`}
                    title={row.published ? "Unpublish" : "Publish"}
                    onClick={(e) => {
                        e.stopPropagation();
                        handlePublishToggle(row.id);
                    }}
                >
                    {row.published ? "Unpublish" : "Publish"}
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
"use client";
import React, { useState } from 'react';
import DataTable from '@/components/ui/data-table';
import { Button } from '@/components/ui/button';
import { Status } from '@/components/ui/status';
import { toast } from "react-hot-toast";
import { MdOutlineContentCopy, MdCheck } from "react-icons/md";

const AllPostsTable = () => {
    const [copiedRowId, setCopiedRowId] = useState(null);
    const [posts, setPosts] = useState([
        { id: 1, jobTitle: "Head Chef", experience: "4 Years", jobDate: "12 Aug 2025", status: "default" },
        { id: 2, jobTitle: "Kitchen Staff", experience: "2 Years", jobDate: "03 Aug 2025", status: "default" },
        { id: 3, jobTitle: "Sous Chef", experience: "3 Years", jobDate: "15 Sep 2025", status: "default" },
        { id: 4, jobTitle: "Pastry Chef", experience: "5 Years", jobDate: "20 Oct 2025", status: "archived" },
        { id: 5, jobTitle: "Line Cook", experience: "1 Year", jobDate: "11 Nov 2025", status: "default" },
        { id: 6, jobTitle: "Dishwasher", experience: "6 Months", jobDate: "30 Dec 2025", status: "default" },
        { id: 7, jobTitle: "Food Prep Assistant", experience: "1 Year", jobDate: "05 Jan 2026", status: "archived" },
        { id: 8, jobTitle: "Head Chef", experience: "4 Years", jobDate: "12 Aug 2025", status: "default" },
        { id: 9, jobTitle: "Kitchen Staff", experience: "2 Years", jobDate: "03 Aug 2025", status: "default" },
        { id: 10, jobTitle: "Sous Chef", experience: "3 Years", jobDate: "15 Sep 2025", status: "default" },
        { id: 11, jobTitle: "Pastry Chef", experience: "5 Years", jobDate: "20 Oct 2025", status: "archived" },
        { id: 12, jobTitle: "Line Cook", experience: "1 Year", jobDate: "11 Nov 2025", status: "default" },
        { id: 13, jobTitle: "Dishwasher", experience: "6 Months", jobDate: "30 Dec 2025", status: "default" },
        { id: 14, jobTitle: "Food Prep Assistant", experience: "1 Year", jobDate: "05 Jan 2026", status: "archived" },
    ]);

    // Function to toggle publish state
    const togglePublishState = (id) => {
        setPosts(posts.map(post => {
            if (post.id === id) {
                const isCurrentlyActive = post.status === 'default';
                const newStatus = isCurrentlyActive ? 'archived' : 'default'; // toggling between active and archived for simple behavior

                toast.success(`Job ${isCurrentlyActive ? 'archived' : 'activated'} successfully!`);

                return {
                    ...post,
                    status: newStatus
                };
            }
            return post;
        }));
    };

    // Function to toggle archive state - merging logic since we only have Active/Archived in image
    const toggleArchiveState = (id) => {
        togglePublishState(id); // Reusing logic for simplicity as the image implies binary state
    };

    // Function to edit job
    const handleEdit = (id) => {
        const post = posts.find(b => b.id === id);
        toast.info(`Editing job: "${post.jobTitle}"`);
        // Add your edit logic here
    };

    // Function to handle share
    const handleShare = (jobTitle, id) => {
        // Simulate copying share link to clipboard
        navigator.clipboard.writeText(`https://captainscafe.com/career/${jobTitle.toLowerCase().replace(/\s+/g, '-')}`)
            .then(() => {
                toast.success(`Share link for "${jobTitle}" copied to clipboard!`);
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
                return 'Active';
            case 'archived':
                return 'Archived';
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
            key: 'jobTitle',
            header: 'Job Title',
            width: '200px',
            cell: (row) => (
                <div className="flex items-center justify-center gap-2 whitespace-nowrap">
                    <span className="font-semibold text-gray-600">{row.jobTitle}</span>
                </div>
            )
        },
        {
            key: 'experience',
            header: 'Experience',
            width: '200px',
            cell: (row) => (
                <div className="flex items-center justify-center gap-2 whitespace-nowrap">
                    <span className="font-semibold text-gray-600">{row.experience}</span>
                </div>
            )
        },
        {
            key: 'jobDate',
            header: 'Date',
            width: '200px',
            cell: (row) => (
                <div className="flex items-center justify-center gap-2 whitespace-nowrap">
                    <span className="font-semibold text-gray-600">{row.jobDate}</span>
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
                            handleShare(row.jobTitle, row.id);
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
        const isActive = row.status === 'default';
        const isArchived = row.status === 'archived';

        return (
            <div className="flex items-center justify-center gap-2">
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

                {/* Edit Button */}
                <button
                    variant="ghost"
                    size="sm"
                    className={`px-2 py-0.5 rounded-sm cursor-pointer border transition-all text-sm font-medium whitespace-nowrap ${row.status === 'archived'
                        ? 'text-gray-400 bg-gray-100 border-gray-300 cursor-not-allowed'
                        : 'text-green-700 bg-green-50 hover:bg-green-100 border-green-300'
                        }`}
                    title={row.status === 'archived' ? "Cannot edit archived jobs" : "Edit Job"}
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
            <DataTable
                columns={columns}
                data={posts}
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

export default AllPostsTable;
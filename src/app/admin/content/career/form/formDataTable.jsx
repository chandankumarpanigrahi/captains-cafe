"use client";
import React, { useState } from 'react';
import DataTable from '@/components/ui/data-table';
import { Status } from '@/components/ui/status';
import { toast } from "react-hot-toast";
import { FaFilePdf } from "react-icons/fa";

const resume1 = "/assets/docs/sample.pdf";

const FormDataTable = () => {
    const [posts, setPosts] = useState([{
        id: 1,
        name: "John Doe",
        email: "john.doe@gmail.com",
        phone: "+91 85689 85986",
        jobPosition: "Kitchen Staff",
        message: "My experience at CCMC has been amazing - excellent faculty, hands-on training, and a supportive environment that prepared me well for my maritime career.",
        fileLink: resume1,
        status: "applied"
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane.smith@gmail.com",
        phone: "+91 85689 85986",
        jobPosition: "Culinary Arts Instructor",
        message: "My time at CCMC was fantastic - outstanding instructors, practical training, and a nurturing atmosphere that equipped me thoroughly for my career in maritime.",
        fileLink: resume1,
        status: "applied"
    },
    {
        id: 3,
        name: "Alice Johnson",
        email: "alice.johnson@gmail.com",
        phone: "+91 85689 85986",
        jobPosition: "Pastry Chef",
        message: "CCMC provided me with an enriching experience; the curriculum was robust, and the mentorship I received was invaluable for my professional growth.",
        fileLink: resume1,
        status: "applied"
    },
    {
        id: 4,
        name: "Bob Brown",
        email: "bob.brown@gmail.com",
        phone: "+91 85689 85986",
        jobPosition: "Waiter",
        message: "The training at CCMC was exceptional, offering a blend of theory and practice that truly honed my skills in pastry arts, preparing me for the culinary field.",
        fileLink: resume1,
        status: "applied"
    },
    {
        id: 5,
        name: "Charlie Davis",
        email: "charlie.davis@gmail.com",
        phone: "+91 85689 85986",
        jobPosition: "Waitress",
        message: "My time at CCMC was transformative - the hands-on training and supportive staff helped me develop the skills needed for a successful career in maritime.",
        fileLink: resume1,
        status: "applied"
    },
    {
        id: 6,
        name: "David Wilson",
        email: "david.wilson@gmail.com",
        phone: "+91 85689 85986",
        jobPosition: "Bartender",
        message: "The curriculum at CCMC was comprehensive, providing me with the knowledge and skills to excel in my role as a bartender.",
        fileLink: resume1,
        status: "applied"
    },
    {
        id: 7,
        name: "Eve Taylor",
        email: "eve.taylor@gmail.com",
        phone: "+91 85689 85986",
        jobPosition: "Kitchen Staff",
        message: "My time at CCMC was enriching - the hands-on training and supportive staff helped me develop the skills needed for a successful career in maritime.",
        fileLink: resume1,
        status: "applied"
    },
    {
        id: 8,
        name: "Frank White",
        email: "frank.white@gmail.com",
        phone: "+91 85689 85986",
        jobPosition: "Kitchen Staff",
        message: "The training at CCMC was exceptional, offering a blend of theory and practice that truly honed my skills in pastry arts, preparing me for the culinary field.",
        fileLink: resume1,
        status: "applied"
    },
    {
        id: 9,
        name: "Grace Johnson",
        email: "grace.johnson@gmail.com",
        phone: "+91 85689 85986",
        jobPosition: "Kitchen Staff",
        message: "My time at CCMC was enriching - the hands-on training and supportive staff helped me develop the skills needed for a successful career in maritime.",
        fileLink: resume1,
        status: "applied"
    },
    {
        id: 10,
        name: "Hannah Davis",
        email: "hannah.davis@gmail.com",
        phone: "+91 85689 85986",
        jobPosition: "Kitchen Staff",
        message: "The curriculum at CCMC was comprehensive, providing me with the knowledge and skills to excel in my role as a bartender.",
        fileLink: resume1,
        status: "applied"
    },
    {
        id: 11,
        name: "Isaac Wilson",
        email: "isaac.wilson@gmail.com",
        phone: "+91 85689 85986",
        jobPosition: "Kitchen Staff",
        message: "My time at CCMC was enriching - the hands-on training and supportive staff helped me develop the skills needed for a successful career in maritime.",
        fileLink: resume1,
        status: "applied"
    },
    ]);

    // Function to handle status change
    const handleStatusChange = (id, newStatus) => {
        setPosts(prevPosts =>
            prevPosts.map(post =>
                post.id === id ? { ...post, status: newStatus } : post
            )
        );
        toast.success(`Status updated to ${newStatus}`);
    };

    // Function to edit job
    const handleEdit = (id) => {
        const post = posts.find(b => b.id === id);
        toast.info(`Editing job: "${post.name}"`);
        // Add your edit logic here
    };

    // Function to handle share
    const handleShare = (name, id) => {
        // Simulate copying share link to clipboard
        navigator.clipboard.writeText(`https://captainscafe.com/career/${name.toLowerCase().replace(/\s+/g, '-')}`)
            .then(() => {
                toast.success(`Share link for "${name}" copied to clipboard!`);
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
            key: 'name',
            header: 'Name',
            width: '200px',
            cell: (row) => (
                <div className="flex items-center justify-center gap-2 whitespace-nowrap">
                    <span className="font-semibold text-gray-600">{row.name}</span>
                </div>
            )
        },
        {
            key: 'email',
            header: 'Email',
            width: '200px',
            cell: (row) => (
                <div className="flex items-center justify-center gap-2 whitespace-nowrap">
                    <span className="font-semibold text-gray-600">{row.email}</span>
                </div>
            )
        },
        {
            key: 'phone',
            header: 'Phone',
            width: '200px',
            cell: (row) => (
                <div className="flex items-center justify-center gap-2 whitespace-nowrap">
                    <span className="font-semibold text-gray-600">{row.phone}</span>
                </div>
            )
        },
        {
            key: 'jobPosition',
            header: 'Applied For',
            width: '200px',
            cell: (row) => (
                <div className="flex items-center justify-center">
                    <span className="font-semibold text-blue-800">{row.jobPosition}</span>
                </div>
            )
        },
        {
            key: 'message',
            header: 'Message',
            width: '300px',
            cell: (row) => (
                <div className="flex items-center justify-center gap-2">
                    <span className="text-gray-600 text-justify  w-[300px]">{row.message}</span>
                </div>
            )
        },
        {
            key: 'file',
            header: 'File',
            width: '80px',
            cell: (row) => (
                <a href={row.fileLink} target="_blank" className="flex flex-col items-center justify-center cursor-pointer gap-1">
                    <FaFilePdf className="text-red-700" size={28} />
                    <span className="text-gray-600 text-[12px]">PDF</span>
                </a>
            )
        },
        {
            key: 'status',
            header: 'Status',
            width: '120px',
            cell: (row) => (
                <div className="flex items-center justify-center gap-2 whitespace-nowrap">
                    <Status variant={row.status}>
                        {row.status}
                    </Status>
                </div>
            )
        },
    ];

    // Custom action buttons
    const renderCustomActions = (row) => {

        return (
            <div className="grid grid-cols-2 items-center justify-center gap-2">
                {/* Accepted Button */}
                <button
                    onClick={() => handleStatusChange(row.id, 'accepted')}
                    className={`w-full px-2 py-0.5 rounded-sm cursor-pointer border transition-all text-sm font-medium whitespace-nowrap 
                        ${row.status === 'accepted'
                            ? 'text-white bg-green-600 border-green-700 hover:bg-green-700'
                            : 'text-green-700 bg-green-50 hover:bg-green-100 border-green-300'
                        }`}
                >
                    Accept
                </button>

                {/* Rejected Button */}
                <button
                    onClick={() => handleStatusChange(row.id, 'rejected')}
                    className={`w-full px-2 py-0.5 rounded-sm cursor-pointer border transition-all text-sm font-medium whitespace-nowrap 
                        ${row.status === 'rejected'
                            ? 'text-white bg-red-600 border-red-700 hover:bg-red-700'
                            : 'text-red-700 bg-red-50 hover:bg-red-100 border-red-300'
                        }`}
                >
                    Reject
                </button>

                {/* Shortlisted Button */}
                <button
                    onClick={() => handleStatusChange(row.id, 'shortlisted')}
                    className={`w-full px-2 py-0.5 rounded-sm cursor-pointer border transition-all text-sm font-medium whitespace-nowrap 
                        ${row.status === 'shortlisted'
                            ? 'text-white bg-amber-600 border-amber-700 hover:bg-amber-700'
                            : 'text-amber-700 bg-amber-50 hover:bg-amber-100 border-amber-300'
                        }`}
                >
                    Shortlist
                </button>

                {/* Forward Button */}
                <button
                    onClick={() => handleStatusChange(row.id, 'forwarded')}
                    className={`w-full px-2 py-0.5 rounded-sm cursor-pointer border transition-all text-sm font-medium whitespace-nowrap 
                        ${row.status === 'forward'
                            ? 'text-white bg-blue-600 border-blue-700 hover:bg-blue-700'
                            : 'text-blue-700 bg-blue-50 hover:bg-blue-100 border-blue-300'
                        }`}
                >
                    Forward
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
                actionsColumnWidth="200px"
                actionsColumnHeader="Actions"
                pageSizeOptions={[5, 10, 25, 50]}
                defaultPageSize={5}
                onRowClick={(row) => {
                    // console.log('Row clicked:', row);
                    // setSelectedAction(`Clicked on ${row.name}`);
                }}
            />

        </div>
    );
};

export default FormDataTable;
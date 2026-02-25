"use client";
import React, { useState } from 'react';
import DataTable from '@/components/ui/data-table';
import { toast } from "react-hot-toast";

const AllTestimonialsTable = () => {
    const [testimonials, setTestimonials] = useState([
        { id: 1, name: "Achana Rani Badajena", designation: "CTO, Magnasoft", photo: "#", feedback: "Amazing pastries and friendly service. This cafe has quickly become my go-to place for meetings!", status: "pending" },
        { id: 2, name: "Subham Kar", designation: "Sales, HDFC", photo: "#", feedback: "The patio seating is a hidden treasure. Sipping their signature coffee while reading a novel is pure bliss!", status: "pending" },
        { id: 3, name: "Sunil Kumar Patra", designation: "Marketing Manager, TechCorp", photo: "#", feedback: "Innovative ambiance and creative decor. Perfect for brainstorming sessions and team lunches!", status: "pending" },
        { id: 4, name: "Sumati Rout", designation: "Product Designer, NextGen", photo: "#", feedback: "A blend of excellent coffee and art. It's an inspiring space that fuels creativity!", status: "pending" },
        { id: 5, name: "Sasmita Kumari Sahoo", designation: "Software Engineer, CodeLab", photo: "#", feedback: "The cozy atmosphere makes it an ideal spot for remote work. Highly recommend their chai!", status: "pending" },
        { id: 6, name: "Rakesh Jena", designation: "HR Director, PeopleFirst", photo: "#", feedback: "Great place for networking events. The staff is accommodating and the food is delightful!", status: "pending" },
    ]);

    // Function to approve testimonial
    const handleApprove = (id) => {
        setTestimonials(testimonials.map(testimonial => {
            if (testimonial.id === id) {
                toast.success(`Testimonial approved successfully!`);
                return { ...testimonial, status: 'approved' };
            }
            return testimonial;
        }));
    };

    // Function to reject testimonial
    const handleReject = (id) => {
        setTestimonials(testimonials.map(testimonial => {
            if (testimonial.id === id) {
                toast.error(`Testimonial rejected.`);
                return { ...testimonial, status: 'rejected' };
            }
            return testimonial;
        }));
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
            key: 'photo',
            header: 'Photo',
            width: '200px',
            cell: (row) => (
                <a href={row.photo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 whitespace-nowrap">
                    <span className="font-semibold text-blue-600">Link</span>
                </a>
            )
        },
        {
            key: 'designation',
            header: 'Designation',
            width: '200px',
            cell: (row) => (
                <div className="flex items-center justify-center gap-2 whitespace-nowrap">
                    <span className="font-semibold text-gray-600">{row.designation}</span>
                </div>
            )
        },
        {
            key: 'feedback',
            header: 'Feedback',
            width: '200px',
            cell: (row) => (
                <div className="flex items-center justify-center gap-2">
                    <span className="max-w-[500px] min-w-[200px] break-words text-gray-600">{row.feedback}</span>
                </div>
            )
        },

    ];

    // Custom action buttons
    const renderCustomActions = (row) => {
        const isApproved = row.status === 'approved';
        const isRejected = row.status === 'rejected';

        return (
            <div className="flex items-center justify-center gap-2">
                {/* Approve Button */}
                <button
                    size="sm"
                    className={`px-2 py-0.5 rounded-sm cursor-pointer border transition-all text-sm font-medium whitespace-nowrap ${isApproved
                        ? 'text-green-700 bg-green-100 border-green-400 cursor-default opacity-70'
                        : 'text-green-700 bg-green-50 hover:bg-green-100 border-green-300'
                        }`}
                    title="Approve"
                    disabled={isApproved}
                    onClick={(e) => {
                        e.stopPropagation();
                        handleApprove(row.id);
                    }}
                >
                    Approve
                </button>

                {/* Reject Button */}
                <button
                    size="sm"
                    className={`px-2 py-0.5 rounded-sm cursor-pointer border transition-all text-sm font-medium whitespace-nowrap ${isRejected
                        ? 'text-red-700 bg-red-100 border-red-400 cursor-default opacity-70'
                        : 'text-red-700 bg-red-50 hover:bg-red-100 border-red-300'
                        }`}
                    title="Reject"
                    disabled={isRejected}
                    onClick={(e) => {
                        e.stopPropagation();
                        handleReject(row.id);
                    }}
                >
                    Reject
                </button>
            </div>
        );
    };

    return (
        <div className='w-full'>

            {/* DataTable with Custom Actions */}
            <DataTable
                columns={columns}
                data={testimonials}
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

export default AllTestimonialsTable;

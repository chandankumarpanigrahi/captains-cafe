"use client";
import React, { useState } from 'react';
import DataTable from '@/components/ui/data-table';
import { toast } from "react-hot-toast";

const SubmitTable = () => {
    const [testimonials, setTestimonials] = useState([
        { id: 1, date: "2026-03-10", time: "10:31 AM", name: "Achana Rani Badajena", email: "archana.b23@gmail.com", phone: "7845128956", country: "India", company: "Sulagna Enterprizes", interests: "Bakery", message: "Amazing pastries and friendly service. This cafe has quickly become my go-to place for meetings!", status: "pending" },
        { id: 2, date: "2026-03-10", time: "02:02 PM", name: "Subham Kar", email: "subhamkar223@gmail.com", phone: "8989565623", country: "India", company: "LLP Finances Ltd", interests: "Cafe", message: "The patio seating is a hidden treasure. Sipping their signature coffee while reading a novel is pure bliss!", status: "pending" }
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
            key: 'date',
            header: 'Date',
            width: '100px',
            cell: (row) => (
                <div className="flex flex-col gap-1 items-center justify-center whitespace-nowrap">
                    <span className="font-normal text-gray-600">{row.time}</span>
                    <span className="font-normal text-gray-600">{row.date}</span>
                </div>
            )
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
            width: '100px',
            cell: (row) => (
                <div className="flex items-center justify-center gap-2 whitespace-nowrap">
                    <span className="font-semibold text-gray-600">{row.phone}</span>
                </div>
            )
        },
        {
            key: 'country',
            header: 'Country',
            width: '200px',
            cell: (row) => (
                <div className="flex items-center justify-center gap-2 whitespace-nowrap">
                    <span className="font-semibold text-gray-600">{row.country}</span>
                </div>
            )
        },
        {
            key: 'company',
            header: 'Company',
            width: '200px',
            cell: (row) => (
                <div className="flex items-center justify-center gap-2 whitespace-nowrap">
                    <span className="font-semibold text-gray-600">{row.company}</span>
                </div>
            )
        },
        {
            key: 'interests',
            header: 'Interests',
            width: '200px',
            cell: (row) => (
                <div className="flex items-center justify-center gap-2 whitespace-nowrap">
                    <span className="font-semibold text-gray-600">{row.interests}</span>
                </div>
            )
        },
        {
            key: 'message',
            header: 'Message',
            width: '360px',
            cell: (row) => (
                <div className="flex items-center justify-center gap-2">
                    <span className="max-w-[500px] min-w-[200px] break-words text-gray-600">{row.message}</span>
                </div>
            )
        },

    ];

    // Custom action buttons
    const renderCustomActions = (row) => {
        return (
            <div className="flex flex-col gap-2 min-w-[250px] p-1">
                <textarea 
                    placeholder="Type Comment" 
                    className="w-full text-sm p-2 text-gray-700 bg-gray-50 border border-gray-300 rounded resize-none h-16 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    onClick={(e) => e.stopPropagation()}
                ></textarea>
                <div className="flex justify-end gap-2">
                    <button
                        className="px-4 py-0.5 text-green-600 bg-white border border-green-600 rounded hover:bg-green-50 transition-colors text-sm font-medium"
                        onClick={(e) => {
                            e.stopPropagation();
                            toast.success('Comment saved successfully!');
                        }}
                    >
                        Save
                    </button>
                    <button
                        className="px-4 py-0.5 text-red-600 bg-white border border-red-600 rounded hover:bg-red-50 transition-colors text-sm font-medium"
                        onClick={(e) => {
                            e.stopPropagation();
                            // Optional: add delete logic
                            toast.error('Record deleted.');
                        }}
                    >
                        Delete
                    </button>
                </div>
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
                actionsColumnWidth="300px"
                actionsColumnHeader="Action"
                pageSizeOptions={[5, 10, 25, 50]}
                defaultPageSize={10}
            />

        </div>
    );
};

export default SubmitTable;

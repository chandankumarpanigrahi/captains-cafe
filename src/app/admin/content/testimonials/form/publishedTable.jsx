"use client";
import React, { useState } from 'react';
import DataTable from '@/components/ui/data-table';
import { toast } from "react-hot-toast";

const PublishTable = () => {
    const [testimonials, setTestimonials] = useState([
        { id: 1, name: "Sumati Rout", designation: "Product Designer, NextGen", photo: "#", feedback: "A blend of excellent coffee and art. It's an inspiring space that fuels creativity!", isPublished: false },
        { id: 2, name: "Achana Rani Badajena", designation: "CTO, Magnasoft", photo: "#", feedback: "Amazing pastries and friendly service. This cafe has quickly become my go-to place for meetings!", isPublished: false },
        { id: 3, name: "Subham Kar", designation: "Sales, HDFC", photo: "#", feedback: "The patio seating is a hidden treasure. Sipping their signature coffee while reading a novel is pure bliss!", isPublished: false },
        { id: 4, name: "Sunil Kumar Patra", designation: "Marketing Manager, TechCorp", photo: "#", feedback: "Innovative ambiance and creative decor. Perfect for brainstorming sessions and team lunches!", isPublished: false },
    ]);

    // Toggle publish / unpublish
    const togglePublish = (id) => {
        setTestimonials(testimonials.map(testimonial => {
            if (testimonial.id === id) {
                const next = !testimonial.isPublished;
                toast.success(`Testimonial ${next ? 'published' : 'unpublished'} successfully!`);
                return { ...testimonial, isPublished: next };
            }
            return testimonial;
        }));
    };

    // Delete testimonial row
    const handleDelete = (id) => {
        setTestimonials(testimonials.filter(t => t.id !== id));
        toast.success("Testimonial deleted successfully!");
    };

    // Define columns — same structure as submitTable
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

    // Action buttons: Publish/Unpublish + Delete
    const renderCustomActions = (row) => {
        return (
            <div className="flex items-center justify-center gap-2">
                {/* Publish / Unpublish Button */}
                <button
                    size="sm"
                    className={`px-2 py-0.5 rounded-sm cursor-pointer border transition-all text-sm font-medium whitespace-nowrap ${row.isPublished
                        ? 'text-gray-700 bg-gray-100 hover:bg-gray-200 border-gray-300'
                        : 'text-white bg-blue-900 hover:bg-blue-800 border-blue-900'
                        }`}
                    title={row.isPublished ? "Unpublish" : "Publish"}
                    onClick={(e) => {
                        e.stopPropagation();
                        togglePublish(row.id);
                    }}
                >
                    {row.isPublished ? "Unpublish" : "Publish"}
                </button>

                {/* Delete Button */}
                <button
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
            </div>
        );
    };

    return (
        <div className='w-full'>
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
                }}
            />
        </div>
    );
};

export default PublishTable;

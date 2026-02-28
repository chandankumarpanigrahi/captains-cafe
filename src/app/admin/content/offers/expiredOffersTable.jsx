"use client";
import React, { useState } from 'react';
import DataTable from '@/components/ui/data-table';
import { toast } from "react-hot-toast";
import { MdOutlineContentCopy, MdCheck } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";

const ExpiredPostsTable = () => {
    const [offers, setOffers] = useState([
        { id: 1, offerTitle: "Pay 30 get 5 Offer", availed: "12 Subscribers", validity: "20 Jun 2025", status: "expired" },
        { id: 2, offerTitle: "Harry Potters Week Celebration", availed: "120 Customers", validity: "12 Aug 2025", status: "expired" },
        { id: 3, offerTitle: "New Cafe Opening Offer", availed: "163 Customers", validity: "03 Aug 2025", status: "expired" },
    ]);

    // Re-publish an expired offer
    const handlePublish = (id) => {
        setOffers(offers.filter(o => o.id !== id));
        toast.success("Offer re-published successfully!");
    };

    // Archive the expired offer
    const handleArchive = (id) => {
        setOffers(offers.filter(o => o.id !== id));
        toast.success("Offer archived successfully!");
    };

    // Edit offer
    const handleEdit = (id) => {
        const offer = offers.find(o => o.id === id);
        toast.info(`Editing offer: "${offer.offerTitle}"`);
    };

    // View offer
    const handleView = (id) => {
        const offer = offers.find(o => o.id === id);
        toast(`Viewing offer: "${offer.offerTitle}"`);
    };

    // Columns — same structure as allOffersTable
    const columns = [
        {
            key: 'id',
            header: 'Sl. No.',
            width: '80px',
            filterable: false,
            cellClassName: 'text-center font-mono text-sm whitespace-nowrap',
        },
        {
            key: 'offerTitle',
            header: 'Offer Title',
            width: '220px',
            cell: (row) => (
                <div className="flex items-center gap-2">
                    <span className="text-gray-700">{row.offerTitle}</span>
                </div>
            )
        },
        {
            key: 'availed',
            header: 'Availed',
            width: '140px',
            cell: (row) => (
                <div className="flex items-center justify-center">
                    <span className="text-gray-600 whitespace-nowrap">{row.availed}</span>
                </div>
            )
        },
        {
            key: 'validity',
            header: 'Validity',
            width: '130px',
            cell: (row) => (
                <div className="flex items-center justify-center">
                    <span className="text-gray-600 whitespace-nowrap">{row.validity}</span>
                </div>
            )
        },
        {
            key: 'status',
            header: 'Status',
            width: '100px',
            cell: () => (
                <div className="flex items-center justify-center">
                    <span className="text-sm font-semibold whitespace-nowrap text-orange-500">
                        Expired
                    </span>
                </div>
            )
        },
        {
            key: 'share',
            header: 'Share',
            width: '90px',
            cell: () => (
                // Share icons greyed out for expired — matching screenshot
                <div className="flex items-center justify-center gap-2">
                    <span className="text-gray-300"><MdOutlineContentCopy size={17} /></span>
                    <span className="text-gray-300"><IoShareSocialOutline size={17} /></span>
                </div>
            )
        },
    ];

    // Action buttons — Publish, Archive, Edit, View (matching screenshot)
    const renderCustomActions = () => {
        return (
            <div className="flex items-center justify-center gap-1 flex-wrap">

                {/* Publish */}
                <button
                    className="disabled:opacity-40 disabled:cursor-default px-2 py-0.5 rounded-sm cursor-pointer border transition-all text-sm font-medium whitespace-nowrap text-white bg-blue-900 hover:bg-blue-800 border-blue-900"
                    title="Re-publish"
                    onClick={(e) => { e.stopPropagation(); handlePublish(); }}
                    disabled
                >
                    Publish
                </button>

                {/* Archive */}
                <button
                    className="disabled:opacity-40 disabled:cursor-default px-2 py-0.5 rounded-sm cursor-pointer border transition-all text-sm font-medium whitespace-nowrap text-amber-700 bg-amber-50 hover:bg-amber-100 border-amber-300"
                    title="Archive"
                    onClick={(e) => { e.stopPropagation(); handleArchive(); }}
                    disabled
                >
                    Archive
                </button>

                {/* Edit */}
                <button
                    className="px-2 py-0.5 rounded-sm cursor-pointer border transition-all text-sm font-medium whitespace-nowrap text-green-700 bg-green-50 hover:bg-green-100 border-green-300"
                    title="Edit"
                    onClick={(e) => { e.stopPropagation(); handleEdit(); }}
                >
                    Edit
                </button>

                {/* View */}
                <button
                    className="px-2 py-0.5 rounded-sm cursor-pointer border transition-all text-sm font-medium whitespace-nowrap text-blue-700 bg-blue-50 hover:bg-blue-100 border-blue-300"
                    title="View"
                    onClick={(e) => { e.stopPropagation(); handleView(); }}
                >
                    View
                </button>
            </div>
        );
    };

    return (
        <div className='w-full'>
            <DataTable
                columns={columns}
                data={offers}
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
                actionsColumnWidth="260px"
                actionsColumnHeader="Action"
                pageSizeOptions={[5, 10, 25, 50]}
                defaultPageSize={10}
                onRowClick={() => { }}
            />
        </div>
    );
};

export default ExpiredPostsTable;
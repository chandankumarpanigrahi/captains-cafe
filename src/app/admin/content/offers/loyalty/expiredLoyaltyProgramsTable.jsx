"use client";
import React, { useState } from 'react';
import DataTable from '@/components/ui/data-table';
import { toast } from "react-hot-toast";
import { MdOutlineContentCopy, MdCheck } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";
import LoyaltyViewModal from "./LoyaltyViewModal";

const ExpiredPostsTable = () => {
    const [selectedOffer, setSelectedOffer] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [offers, setOffers] = useState([
        { id: 1, offerTitle: "Pay 30 get 5 Offer", couponCode: "PAY30", validity: "20 Jun 2025", status: "expired" },
        { id: 2, offerTitle: "Harry Potters Week Celebration", couponCode: "HARRY50", validity: "12 Aug 2025", status: "expired" },
        { id: 3, offerTitle: "New Cafe Opening Offer", couponCode: "OPEN100", validity: "03 Aug 2025", status: "expired" },
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

    // Copy coupon code
    const handleCopyCoupon = (code, id) => {
        navigator.clipboard
            .writeText(code)
            .then(() => {
                toast.success(`Coupon code "${code}" copied!`);
                // Note: We don't have a copiedRowId state in this file, adding it for consistency
                toast.success("Coupon code copied!");
            })
            .catch(() => toast.error("Failed to copy coupon code"));
    };

    // View offer
    const handleView = (id) => {
        const offer = offers.find(o => o.id === id);
        setSelectedOffer(offer);
        setIsModalOpen(true);
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
            key: 'couponCode',
            header: 'Coupon Code',
            width: '140px',
            cell: (row) => (
                <div className="flex items-center justify-center gap-2 group">
                    <span className="text-gray-700 uppercase">{row.couponCode}</span>
                    <button
                        onClick={(e) => { e.stopPropagation(); handleCopyCoupon(row.couponCode, row.id); }}
                        className="text-amber-800 transition-colors"
                    >
                        <MdOutlineContentCopy size={16} className="opacity-70 group-hover:opacity-100" />
                    </button>
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
                    <span className="text-sm font-semibold whitespace-nowrap text-amber-500">
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
                    <span className="text-gray-300 opacity-50"><MdOutlineContentCopy size={18} /></span>
                    <span className="text-gray-300 opacity-50"><IoShareSocialOutline size={18} strokeWidth={2} /></span>
                </div>
            )
        },
    ];

    // Action buttons — Publish, Archive, Edit, View (matching screenshot)
    const renderCustomActions = (row) => {
        return (
            <div className="flex items-center justify-center gap-2 flex-wrap">
                {/* Publish */}
                <button
                    className="disabled:opacity-40 disabled:cursor-default px-3 py-1 rounded-md cursor-default border transition-all text-sm font-medium whitespace-nowrap text-gray-300 border-gray-200 bg-white"
                    title="Re-publish"
                    disabled
                >
                    Publish
                </button>

                {/* Archive */}
                <button
                    className="disabled:opacity-40 disabled:cursor-default px-3 py-1 rounded-md cursor-default border transition-all text-sm font-medium whitespace-nowrap text-gray-300 border-gray-200 bg-white"
                    title="Archive"
                    disabled
                >
                    Archive
                </button>

                {/* Edit */}
                <button
                    className="px-3 py-1 rounded-md cursor-pointer border transition-all text-sm font-medium whitespace-nowrap text-green-600 bg-white hover:bg-green-50 border-green-500"
                    title="Edit"
                    onClick={(e) => { e.stopPropagation(); handleEdit(row?.id); }}
                >
                    Edit
                </button>

                {/* View */}
                <button
                    className="px-3 py-1 rounded-md cursor-pointer border transition-all text-sm font-medium whitespace-nowrap text-cyan-600 bg-white hover:bg-cyan-50 border-cyan-500"
                    title="View"
                    onClick={(e) => { e.stopPropagation(); handleView(row?.id); }}
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
                actionsColumnWidth="320px"
                actionsColumnHeader="Action"
                pageSizeOptions={[5, 10, 25, 50]}
                defaultPageSize={10}
                onRowClick={() => { }}
            />

            <LoyaltyViewModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                offer={selectedOffer}
            />
        </div>
    );
};

export default ExpiredPostsTable;
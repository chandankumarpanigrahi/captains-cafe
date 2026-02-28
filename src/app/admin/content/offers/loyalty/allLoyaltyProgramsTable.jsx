"use client";
import React, { useState } from 'react';
import DataTable from '@/components/ui/data-table';
import { toast } from "react-hot-toast";
import { MdOutlineContentCopy, MdCheck, MdAdd } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";
import LoyaltyViewModal from "./LoyaltyViewModal";

const AllPostsTable = () => {
    const [copiedRowId, setCopiedRowId] = useState(null);
    const [selectedOffer, setSelectedOffer] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [offers, setOffers] = useState([
        { id: 1, offerTitle: "Buy 1 Get 1 Free on Bakery Items", couponCode: "BOGO", validity: "12 Aug 2025", status: "active", isPublished: true },
        { id: 2, offerTitle: "Ratha Yatra Offer", couponCode: "YATRA2725", validity: "30 Jun 2025", status: "expired", isPublished: false },
    ]);

    // Toggle publish / unpublish
    const togglePublish = (id) => {
        setOffers(offers.map(offer => {
            if (offer.id === id) {
                const next = !offer.isPublished;
                toast.success(`Offer ${next ? 'published' : 'unpublished'} successfully!`);
                return { ...offer, isPublished: next };
            }
            return offer;
        }));
    };

    // Archive offer
    const handleArchive = (id) => {
        setOffers(offers.map(offer => {
            if (offer.id === id) {
                toast.success("Offer archived successfully!");
                return { ...offer, status: 'archived' };
            }
            return offer;
        }));
    };

    // Edit offer
    const handleEdit = (id) => {
        const offer = offers.find(o => o.id === id);
        toast.info(`Editing offer: "${offer.offerTitle}"`);
    };

    // View offer
    const handleView = (id) => {
        const offer = offers.find(o => o.id === id);
        setSelectedOffer(offer);
        setIsModalOpen(true);
    };

    // Copy coupon code
    const handleCopyCoupon = (code, id) => {
        navigator.clipboard
            .writeText(code)
            .then(() => {
                toast.success(`Coupon code "${code}" copied!`);
                setCopiedRowId(`coupon-${id}`);
                setTimeout(() => setCopiedRowId(null), 2000);
            })
            .catch(() => toast.error("Failed to copy coupon code"));
    };

    // Copy share link
    const handleShare = (offerTitle, id) => {
        navigator.clipboard
            .writeText(`https://captainscafe.com/offers/${offerTitle.toLowerCase().replace(/\s+/g, '-')}`)
            .then(() => {
                toast.success(`Share link for "${offerTitle}" copied!`);
                setCopiedRowId(`share-${id}`);
                setTimeout(() => setCopiedRowId(null), 2000);
            })
            .catch(() => toast.error("Failed to copy share link"));
    };

    // Native share / fallback
    const handleNativeShare = (offerTitle) => {
        const url = `https://captainscafe.com/offers/${offerTitle.toLowerCase().replace(/\s+/g, '-')}`;
        if (navigator.share) {
            navigator.share({ title: offerTitle, url });
        } else {
            toast(`Share: ${url}`);
        }
    };

    // Columns
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
                        {copiedRowId === `coupon-${row.id}` ? <MdCheck size={16} /> : <MdOutlineContentCopy size={16} className="opacity-70 group-hover:opacity-100" />}
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
            cell: (row) => (
                <div className="flex items-center justify-center">
                    <span className={`text-sm font-semibold whitespace-nowrap ${row.status === 'active' ? 'text-green-600' :
                        row.status === 'expired' ? 'text-amber-500' :
                            'text-gray-500'
                        }`}>
                        {row.status === 'active' ? 'Active' : row.status === 'expired' ? 'Expired' : 'Archived'}
                    </span>
                </div>
            )
        },
        {
            key: 'share',
            header: 'Share',
            width: '90px',
            cell: (row) => {
                const isExpired = row.status === 'expired';
                return (
                    <div className="flex items-center justify-center gap-2">
                        {/* Copy link */}
                        <button
                            className={`transition-all duration-200 ${isExpired
                                ? 'text-gray-300 cursor-not-allowed opacity-50'
                                : copiedRowId === `share-${row.id}`
                                    ? 'text-green-600'
                                    : 'text-amber-800 hover:text-blue-700'
                                }`}
                            disabled={isExpired}
                            title="Copy link"
                            onClick={(e) => {
                                e.stopPropagation();
                                if (!isExpired) handleShare(row.offerTitle, row.id);
                            }}
                        >
                            {copiedRowId === `share-${row.id}`
                                ? <MdCheck size={18} />
                                : <MdOutlineContentCopy size={18} />}
                        </button>

                        {/* Native share */}
                        <button
                            className={`transition-all duration-200 ${isExpired
                                ? 'text-gray-300 cursor-not-allowed opacity-50'
                                : 'text-blue-900 hover:text-blue-700'
                                }`}
                            disabled={isExpired}
                            title="Share"
                            onClick={(e) => {
                                e.stopPropagation();
                                if (!isExpired) handleNativeShare(row.offerTitle);
                            }}
                        >
                            <IoShareSocialOutline size={18} strokeWidth={2} />
                        </button>
                    </div>
                );
            }
        },
    ];

    // Action buttons
    const renderCustomActions = (row) => {
        const isExpired = row.status === 'expired';

        return (
            <div className="flex items-center justify-center gap-2 flex-wrap">
                {/* Archive */}
                <button
                    className={`px-3 py-1 rounded-md cursor-pointer border transition-all text-sm font-medium whitespace-nowrap ${isExpired
                        ? 'text-gray-300 border-gray-200 bg-white cursor-not-allowed opacity-50'
                        : 'text-amber-700 bg-white hover:bg-amber-50 border-amber-500'
                        }`}
                    title="Archive"
                    onClick={(e) => { e.stopPropagation(); if (!isExpired) handleArchive(row.id); }}
                    disabled={isExpired}
                >
                    Archive
                </button>

                {/* Edit */}
                <button
                    className="px-3 py-1 rounded-md cursor-pointer border transition-all text-sm font-medium whitespace-nowrap text-green-600 bg-white hover:bg-green-50 border-green-500"
                    title="Edit"
                    onClick={(e) => { e.stopPropagation(); handleEdit(row.id); }}
                >
                    Edit
                </button>

                {/* View */}
                <button
                    className="px-3 py-1 rounded-md cursor-pointer border transition-all text-sm font-medium whitespace-nowrap text-cyan-600 bg-white hover:bg-cyan-50 border-cyan-500"
                    title="View"
                    onClick={(e) => { e.stopPropagation(); handleView(row.id); }}
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
                actionsColumnWidth="280px"
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

export default AllPostsTable;
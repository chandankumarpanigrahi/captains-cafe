"use client";
import React, { useState } from 'react';
import DataTable from '@/components/ui/data-table';
import { toast } from "react-hot-toast";
import { MdOutlineContentCopy, MdCheck } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";

const AllPostsTable = () => {
    const [copiedRowId, setCopiedRowId] = useState(null);
    const [offers, setOffers] = useState([
        { id: 1, offerTitle: "Harry Potters Week Celebration", availed: "120 Customers", validity: "12 Aug 2025", status: "active", isPublished: false },
        { id: 2, offerTitle: "New Cafe Opening Offer", availed: "163 Customers", validity: "03 Aug 2025", status: "active", isPublished: true },
        { id: 3, offerTitle: "Foodie Friday 50% Off", availed: "221 Customers", validity: "15 Sep 2025", status: "active", isPublished: false },
        { id: 4, offerTitle: "Pay 30 get 5 Offer", availed: "12 Subscribers", validity: "20 Jun 2025", status: "expired", isPublished: false },
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
        toast(`Viewing offer: "${offer.offerTitle}"`);
    };

    // Copy share link
    const handleShare = (offerTitle, id) => {
        navigator.clipboard
            .writeText(`https://captainscafe.com/offers/${offerTitle.toLowerCase().replace(/\s+/g, '-')}`)
            .then(() => {
                toast.success(`Share link for "${offerTitle}" copied!`);
                setCopiedRowId(id);
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
            cell: (row) => (
                <div className="flex items-center justify-center">
                    <span className={`text-sm font-semibold whitespace-nowrap ${row.status === 'active' ? 'text-green-600' :
                        row.status === 'expired' ? 'text-orange-500' :
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
                                ? 'text-gray-300 cursor-not-allowed'
                                : copiedRowId === row.id
                                    ? 'text-green-600'
                                    : 'text-gray-500 hover:text-blue-700'
                                }`}
                            disabled={isExpired}
                            title="Copy link"
                            onClick={(e) => {
                                e.stopPropagation();
                                if (!isExpired) handleShare(row.offerTitle, row.id);
                            }}
                        >
                            {copiedRowId === row.id
                                ? <MdCheck size={17} />
                                : <MdOutlineContentCopy size={17} />}
                        </button>

                        {/* Native share */}
                        <button
                            className={`transition-all duration-200 ${isExpired
                                ? 'text-gray-300 cursor-not-allowed'
                                : 'text-gray-500 hover:text-blue-700'
                                }`}
                            disabled={isExpired}
                            title="Share"
                            onClick={(e) => {
                                e.stopPropagation();
                                if (!isExpired) handleNativeShare(row.offerTitle);
                            }}
                        >
                            <IoShareSocialOutline size={17} />
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
            <div className="flex items-center justify-center gap-1 flex-wrap">

                {/* Publish / Unpublish — hidden for expired */}
                {!isExpired && (
                    <button
                        className={`px-2 py-0.5 rounded-sm cursor-pointer border transition-all text-sm font-medium whitespace-nowrap ${row.isPublished
                            ? 'text-gray-700 bg-gray-100 hover:bg-gray-200 border-gray-300'
                            : 'text-white bg-blue-900 hover:bg-blue-800 border-blue-900'
                            }`}
                        title={row.isPublished ? "Unpublish" : "Publish"}
                        onClick={(e) => { e.stopPropagation(); togglePublish(row.id); }}
                    >
                        {row.isPublished ? "Unpublish" : "Publish"}
                    </button>
                )}

                {/* Archive */}
                <button
                    className="px-2 py-0.5 rounded-sm cursor-pointer border transition-all text-sm font-medium whitespace-nowrap text-amber-700 bg-amber-50 hover:bg-amber-100 border-amber-300"
                    title="Archive"
                    onClick={(e) => { e.stopPropagation(); handleArchive(row.id); }}
                >
                    Archive
                </button>

                {/* Edit */}
                <button
                    className="px-2 py-0.5 rounded-sm cursor-pointer border transition-all text-sm font-medium whitespace-nowrap text-green-700 bg-green-50 hover:bg-green-100 border-green-300"
                    title="Edit"
                    onClick={(e) => { e.stopPropagation(); handleEdit(row.id); }}
                >
                    Edit
                </button>

                {/* View */}
                <button
                    className="px-2 py-0.5 rounded-sm cursor-pointer border transition-all text-sm font-medium whitespace-nowrap text-blue-700 bg-blue-50 hover:bg-blue-100 border-blue-300"
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
                actionsColumnWidth="260px"
                actionsColumnHeader="Action"
                pageSizeOptions={[5, 10, 25, 50]}
                defaultPageSize={10}
                onRowClick={() => { }}
            />
        </div>
    );
};

export default AllPostsTable;
"use client";

import React from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { MdOutlineContentCopy, MdCheck } from "react-icons/md";
import { toast } from "react-hot-toast";

const LoyaltyViewModal = ({ isOpen, onClose, offer }) => {
    const [copied, setCopied] = React.useState(false);

    if (!offer) return null;

    const handleCopy = (e) => {
        e.stopPropagation();
        navigator.clipboard.writeText(offer.couponCode || "");
        setCopied(true);
        toast.success("Coupon code copied!");
        setTimeout(() => setCopied(false), 2000);
    };

    const terms = [
        <>Valid every <strong>Friday</strong> for dine-in, takeaway, and online orders <em>(all day)</em>.</>,
        <><strong>50%</strong> discount applies only to bakery items <em>(excludes beverages, combos, or promotional items)</em>.</>,
        "Cannot be combined with other offers/coupons.",
        "Limited stock – discounts apply while supplies last.",
        "Not applicable on public holidays or special event days.",
        "The Captain's Cafe reserves the right to modify/terminate the offer without prior notice.",
    ];

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[500px] border-none shadow-2xl overflow-hidden p-8">
                <DialogHeader className="mb-6">
                    <DialogTitle className="text-2xl font-bold text-blue-900 text-left">
                        {offer.offerTitle}
                    </DialogTitle>
                </DialogHeader>

                <div className="space-y-4">
                    <div className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                        <span className="text-xl">📜</span>
                        <span>Terms & Conditions:</span>
                    </div>

                    <ol className="space-y-3 list-decimal list-inside text-gray-600 text-[15px] leading-relaxed pl-1">
                        {terms.map((term, index) => (
                            <li key={index} className="pl-2 -indent-5 ml-5">
                                {term}
                            </li>
                        ))}
                    </ol>
                </div>

                <div className="mt-8 flex items-center justify-end gap-3 text-gray-500 font-medium">
                    <span className="text-sm">Code:</span>
                    <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-md border border-gray-100">
                        <span className="text-blue-900 font-bold tracking-wider uppercase">
                            {offer.couponCode || "N/A"}
                        </span>
                        <button
                            onClick={handleCopy}
                            className="text-amber-800 transition-colors hover:text-amber-700"
                            title="Copy code"
                        >
                            {copied ? <MdCheck size={20} /> : <MdOutlineContentCopy size={20} />}
                        </button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default LoyaltyViewModal;

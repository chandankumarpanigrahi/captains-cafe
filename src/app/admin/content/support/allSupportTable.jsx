"use client";
import React, { useState } from 'react';
import DataTable from '@/components/ui/data-table';
import { toast } from "react-hot-toast";

// icons
import { PiChatTeardropTextBold } from "react-icons/pi";
import { MdOutlineMail, MdOutlineCall, MdOutlineStarHalf, MdClose } from "react-icons/md";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { RiArrowGoForwardFill } from "react-icons/ri";

import { Button } from '@/components/ui/button';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { MoreVertical, Clock, CheckCircle, XCircle, Send } from 'lucide-react';

const AllSupportTable = () => {
    const [support, setSupport] = useState([
        { id: 1, date: "2026-03-10", time: "10:31 AM", email: "archana452@gmail.com", phone: "9437124589", name: "Achana Rani Badajena", complaintId: "7845128956", message: "Change Order items", status: "pending" },
        { id: 2, date: "2026-03-10", time: "02:02 PM", email: "skar.new@gmail.com", phone: "8895632147", name: "Subham Kar", complaintId: "8989565623", message: "Subscription Failed", status: "pending" },
        { id: 3, date: "2026-03-11", time: "09:15 AM", email: "rahul.mishra91@gmail.com", phone: "9123456782", name: "Rahul Mishra", complaintId: "7845693210", message: "Payment not reflecting", status: "resolved" },
        { id: 4, date: "2026-03-11", time: "11:48 AM", email: "pooja.sahoo24@gmail.com", phone: "8765432190", name: "Pooja Sahoo", complaintId: "7845236987", message: "Unable to login", status: "closed" },
        { id: 5, date: "2026-03-11", time: "03:22 PM", email: "amit.das87@gmail.com", phone: "7984561230", name: "Amit Das", complaintId: "7845963214", message: "Order delayed", status: "pending" },
        { id: 6, date: "2026-03-12", time: "10:05 AM", email: "sneha.patnaik@gmail.com", phone: "9658741236", name: "Sneha Patnaik", complaintId: "7845123478", message: "Profile update issue", status: "resolved" },
        { id: 7, date: "2026-03-12", time: "01:30 PM", email: "rakesh.nayak22@gmail.com", phone: "9345678124", name: "Rakesh Nayak", complaintId: "7845789652", message: "App crashing", status: "forwarded" },
        { id: 8, date: "2026-03-12", time: "04:12 PM", email: "ananya.sen03@gmail.com", phone: "9078563412", name: "Ananya Sen", complaintId: "7845987412", message: "Refund request", status: "closed" },
        { id: 9, date: "2026-03-13", time: "09:55 AM", email: "debasish.rout@gmail.com", phone: "8897456123", name: "Debasish Rout", complaintId: "7845632147", message: "Invoice missing", status: "pending" },
        { id: 10, date: "2026-03-13", time: "12:40 PM", email: "priyanka.sharma88@gmail.com", phone: "9812345670", name: "Priyanka Sharma", complaintId: "7845874123", message: "Wrong product delivered", status: "resolved" },
        { id: 11, date: "2026-03-13", time: "02:18 PM", email: "sourav.behera@gmail.com", phone: "9438567120", name: "Sourav Behera", complaintId: "7845996321", message: "Password reset issue", status: "closed" },
        { id: 12, date: "2026-03-14", time: "10:50 AM", email: "kunal.verma55@gmail.com", phone: "8756341298", name: "Kunal Verma", complaintId: "7845123698", message: "Coupon not working", status: "forwarded" },
        { id: 13, date: "2026-03-14", time: "01:05 PM", email: "neha.gupta21@gmail.com", phone: "9563412780", name: "Neha Gupta", complaintId: "7845784125", message: "Delivery address change", status: "pending" },
        { id: 14, date: "2026-03-14", time: "03:37 PM", email: "arjun.singh.dev@gmail.com", phone: "9021456783", name: "Arjun Singh", complaintId: "7845214789", message: "Duplicate charge", status: "resolved" },
        { id: 15, date: "2026-03-15", time: "11:22 AM", email: "meera.iyer07@gmail.com", phone: "9887456129", name: "Meera Iyer", complaintId: "7845369852", message: "Account verification issue", status: "closed" }
    ]);

    // Define columns
    const columns = [
        {
            key: 'id',
            header: 'Sl. No.',
            width: '100px',
            filterable: false,
            cellClassName: 'text-center font-mono text-sm whitespace-nowrap',
        }, {
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
            key: 'complaintId',
            header: 'Complaint ID',
            width: '100px',
            cell: (row) => (
                <div className="flex items-center justify-center gap-2 whitespace-nowrap">
                    <span className="font-semibold text-gray-600">{row.complaintId}</span>
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
        {
            key: 'status',
            header: 'Status',
            width: '100px',
            cell: (row) => {
                const status = row.status?.toLowerCase();
                let Icon = null;
                let colorClasses = "";
                switch (status) {
                    case 'pending':
                        Icon = Clock;
                        colorClasses = "text-yellow-700 bg-yellow-50 border-yellow-300 dark:bg-yellow-900/30 dark:border-yellow-700 dark:text-yellow-400";
                        break;
                    case 'resolved':
                        Icon = CheckCircle;
                        colorClasses = "text-green-700 bg-green-50 border-green-300 dark:bg-green-900/30 dark:border-green-700 dark:text-green-400";
                        break;
                    case 'forwarded':
                        Icon = Send;
                        colorClasses = "text-red-700 bg-red-50 border-red-300 dark:bg-red-900/30 dark:border-red-700 dark:text-red-400";
                        break;
                    case 'closed':
                    default:
                        Icon = XCircle;
                        colorClasses = "text-gray-700 bg-gray-50 border-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300";
                        break;
                }
                return (
                    <div className="flex items-center justify-center">
                        <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-semibold capitalize whitespace-nowrap ${colorClasses}`}>
                            {Icon && <Icon size={14} />}
                            <span>{status}</span>
                        </div>
                    </div>
                );
            }
        },
    ];

    // Dummy functions to prevent ReferenceError when clicking actions
    const handleEmailResend = (row) => {
        console.log("Email Resend for:", row);
        toast.success(`Email sent successfully! to ${row.email}`);
    };

    const handleMessage = (row) => {
        console.log("Message for:", row);
        toast.success(`Call initiated to ${row.phone}`);
    };

    const handleShare = (row) => {
        console.log("Share for:", row);
        toast.success(`Feedback link shared to ${row.email}`);
    };

    // Custom action buttons
    const renderCustomActions = (row) => {
        return (
            <div className="flex flex-row justify-center items-center gap-5 p-1">
                <button className="cursor-pointer flex flex-row items-center gap-1 text-green-600" title='Chat' onClick={(e) => {
                    e.stopPropagation();
                }}>
                    <PiChatTeardropTextBold size={24} /> Chat
                </button>
                <button className="cursor-pointer flex flex-row items-center gap-1 text-gray-700" title='Open' onClick={(e) => {
                    e.stopPropagation();
                }}>
                    <LuSquareArrowOutUpRight size={22} /> Open
                </button>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0"
                            title="More Actions"
                        >
                            <MoreVertical className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-fit">
                        <DropdownMenuItem onClick={() => handleEmailResend(row)}>
                            <MdOutlineMail size={24} className="mr-2 h-4 w-4 text-gray-600" />
                            Confirmation Email
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleMessage(row)}>
                            <MdOutlineCall size={24} className="mr-2 h-4 w-4 text-purple-600" />
                            Call User
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleShare(row)}>
                            <MdOutlineStarHalf size={24} className="mr-2 h-4 w-4 text-yellow-600" />
                            Feedback Link
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => handleShare(row)}>
                            <RiArrowGoForwardFill size={24} className="mr-2 h-4 w-4 text-green-600" />
                            Forward to Team
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className='flex flex-col items-start'>
                            <textarea
                                placeholder="Type Comment"
                                className="w-full text-sm p-2 text-gray-700 bg-gray-50 border border-gray-300 rounded resize-none h-16 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                onClick={(e) => e.stopPropagation()}
                            ></textarea>
                            <div className='flex flex-row items-center justify-start' onClick={() => handleShare(row)}>
                                <MdClose size={24} className="mr-2 h-4 w-4 text-red-600" />
                                Close Request
                            </div>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div >
        );
    };

    return (
        <div className='w-full'>

            {/* DataTable with Custom Actions */}
            <DataTable
                columns={columns}
                data={support}
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
                rowClassName={(row) => {
                    switch (row.status?.toLowerCase()) {
                        case 'pending': return 'bg-yellow-50 dark:bg-yellow-900/10';
                        case 'approved': return 'bg-green-50 dark:bg-green-900/10';
                        case 'resolved': return 'bg-green-50 dark:bg-green-900/10';
                        case 'forwarded': return 'bg-red-50 dark:bg-red-900/10';
                        case 'closed': return 'bg-gray-50 dark:bg-gray-900/10';
                        default: return '';
                    }
                }}
            />

        </div>
    );
};

export default AllSupportTable;

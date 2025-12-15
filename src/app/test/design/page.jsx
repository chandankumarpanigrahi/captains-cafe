"use client";
import React, { useState } from 'react';
import DataTable from '@/components/ui/data-table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

import { Editor } from 'primereact/editor';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
    Edit, Trash2, Eye, Copy, Archive, Share2,
    MoreVertical, Star, Bell, Lock, Unlock,
    CheckCircle, XCircle, User, Mail, Download,
    MessageSquare, Phone, Calendar
} from 'lucide-react';
import { Status } from '@/components/ui/status';

const UsersPage = () => {
    const [selectedAction, setSelectedAction] = useState(null);

    // Sample data
    const users = [
        { id: 1, name: "Sourav Nayak", email: "sourav.nayak@example.com", role: "Admin", status: "active", verified: true },
        { id: 2, name: "Priyanka Behera", email: "priyanka.behera@example.com", role: "User", status: "active", verified: false },
        { id: 3, name: "Rakesh Sahoo", email: "rakesh.sahoo@example.com", role: "Manager", status: "inactive", verified: true },
        { id: 4, name: "Smita Patra", email: "smita.patra@example.com", role: "User", status: "active", verified: true },
        { id: 5, name: "Chinmay Panda", email: "chinmay.panda@example.com", role: "Admin", status: "active", verified: false },
        { id: 6, name: "Ankita Swain", email: "ankita.swain@example.com", role: "Editor", status: "inactive", verified: true },
        { id: 7, name: "Bikash Mohanty", email: "bikash.mohanty@example.com", role: "User", status: "active", verified: false },
        { id: 8, name: "Debasmita Rout", email: "debasmita.rout@example.com", role: "User", status: "active", verified: true },
        { id: 9, name: "Gourav Dash", email: "gourav.dash@example.com", role: "Admin", status: "inactive", verified: false },
        { id: 10, name: "Sasmita Lenka", email: "sasmita.lenka@example.com", role: "User", status: "active", verified: true },
    ];

    // Define columns
    const columns = [
        {
            key: 'id',
            header: 'ID',
            width: '60px',
            filterable: false,
            cellClassName: 'text-center font-mono text-sm',
        },
        {
            key: 'name',
            header: 'Name',
            width: '200px',
            cell: (row) => (
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <User className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="font-semibold">{row.name}</span>
                </div>
            )
        },
        {
            key: 'email',
            header: 'Email',
            cell: (row) => (
                <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gray-500" />
                    <a
                        href={`mailto:${row.email}`}
                        className="text-blue-600 hover:underline"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {row.email}
                    </a>
                </div>
            )
        },
        {
            key: 'role',
            header: 'Role',
            width: '120px',
            cell: (row) => (
                <Badge
                    variant={
                        row.role === 'Admin' ? 'destructive' :
                            row.role === 'Manager' ? 'default' :
                                row.role === 'Editor' ? 'secondary' : 'outline'
                    }
                >
                    {row.role}
                </Badge>
            )
        },
        {
            key: 'status',
            header: 'Status',
            width: '120px',
            cell: (row) => (
                <div className="flex items-center gap-2">
                    <div
                        className={`w-2 h-2 rounded-full ${row.status === 'active' ? 'bg-green-500' : 'bg-red-500'}`}
                    />
                    <Status variant={row.status === 'active' ? 'default' : 'scheduled'}>
                        {row.status}
                    </Status>
                </div>
            )
        },
    ];

    // Action handlers
    const handleView = (row) => {
        setSelectedAction(`Viewing ${row.name}`);
        console.log('View:', row);
        // Add your view logic here
    };

    const handleEdit = (row) => {
        setSelectedAction(`Editing ${row.name}`);
        console.log('Edit:', row);
        // Add your edit logic here
    };

    const handleDelete = (row) => {
        if (window.confirm(`Are you sure you want to delete ${row.name}?`)) {
            setSelectedAction(`Deleting ${row.name}`);
            console.log('Delete:', row);
            // Add your delete logic here
        }
    };

    const handleCopyEmail = (row) => {
        navigator.clipboard.writeText(row.email);
        setSelectedAction(`Copied email: ${row.email}`);
    };

    const handleArchive = (row) => {
        setSelectedAction(`Archiving ${row.name}`);
        console.log('Archive:', row);
    };

    const handleShare = (row) => {
        setSelectedAction(`Sharing ${row.name}'s profile`);
        console.log('Share:', row);
    };

    const handleMessage = (row) => {
        setSelectedAction(`Messaging ${row.name}`);
        console.log('Message:', row);
    };

    const handleToggleStatus = (row) => {
        const newStatus = row.status === 'active' ? 'inactive' : 'active';
        setSelectedAction(`Changing ${row.name}'s status to ${newStatus}`);
        console.log('Toggle Status:', row, newStatus);
    };

    // ==================== CUSTOM ACTIONS RENDERER ====================
    // This is where you define YOUR custom action buttons
    const renderCustomActions = (row) => {
        return (
            <div className="flex items-center justify-center gap-1">
                {/* Quick action buttons - Always visible */}
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleView(row)}
                    className="p-0 hover:bg-blue-50 text-blue-600 hover:text-blue-700 border border-transparent hover:border-blue-600"
                    title="View Details"
                >
                    <Eye className="h-4 w-4" /> View Details
                </Button>

                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleEdit(row)}
                    className=" p-0 hover:bg-green-50 text-green-600 hover:text-green-700 border border-transparent hover:border-green-600"
                    title="Edit User"
                >
                    <Edit className="h-4 w-4" /> Edit User
                </Button>

                {/* Dropdown for more actions */}
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
                    <DropdownMenuContent align="end" className="w-48">
                        <DropdownMenuItem onClick={() => handleCopyEmail(row)}>
                            <Copy className="mr-2 h-4 w-4 text-gray-600" />
                            Copy Email
                        </DropdownMenuItem>

                        <DropdownMenuItem onClick={() => handleMessage(row)}>
                            <MessageSquare className="mr-2 h-4 w-4 text-purple-600" />
                            Send Message
                        </DropdownMenuItem>

                        <DropdownMenuItem onClick={() => handleShare(row)}>
                            <Share2 className="mr-2 h-4 w-4 text-blue-600" />
                            Share Profile
                        </DropdownMenuItem>

                        <DropdownMenuItem onClick={() => handleArchive(row)}>
                            <Archive className="mr-2 h-4 w-4 text-orange-600" />
                            Archive User
                        </DropdownMenuItem>

                        <DropdownMenuSeparator />

                        {/* Conditional action based on status */}
                        <DropdownMenuItem onClick={() => handleToggleStatus(row)}>
                            {row.status === 'active' ? (
                                <>
                                    <Lock className="mr-2 h-4 w-4 text-orange-600" />
                                    Deactivate User
                                </>
                            ) : (
                                <>
                                    <Unlock className="mr-2 h-4 w-4 text-green-600" />
                                    Activate User
                                </>
                            )}
                        </DropdownMenuItem>

                        <DropdownMenuSeparator />

                        {/* Delete - disabled for admins */}
                        <DropdownMenuItem
                            onClick={() => handleDelete(row)}
                            className="text-red-600 focus:text-red-600"
                            disabled={row.role === 'Admin'}
                        >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete User
                            {row.role === 'Admin' && (
                                <span className="ml-auto text-xs text-gray-400">Protected</span>
                            )}
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        );
    };

    return (
        <div className="container mx-auto py-10 space-y-6">
            {/* Header */}
            <div className="space-y-2">
                <h1 className="text-3xl font-bold">User Management</h1>
                <p className="text-gray-600">
                    Manage your users with custom action buttons
                </p>
            </div>

            {/* Action Feedback */}
            {selectedAction && (
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-blue-600" />
                        <p className="text-sm font-medium text-blue-900">
                            {selectedAction}
                        </p>
                    </div>
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedAction(null)}
                    >
                        <XCircle className="h-4 w-4" />
                    </Button>
                </div>
            )}

            {/* DataTable with Custom Actions */}
            <DataTable
                columns={columns}
                data={users}
                enableSorting={true}
                enableFiltering={true}
                enableColumnFilters={true}
                enableRowSelection={true}
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
            <Editor />
        </div>
    );
};

export default UsersPage;
"use client";
import React from 'react'
import SubBanner from '@/components/common/sub banner'

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const Design = () => {
    return (
        <>
            <SubBanner
                title="Test Design"
                breadcrumbItems={[
                    { label: "Test", href: "/test" },
                    { label: "Design" }
                ]}
            />
            <div className='container py-10'>
                <Table className="bg-white text-center border">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-30 text-center">Invoice</TableHead>
                            <TableHead  className="text-center">Status</TableHead>
                            <TableHead  className="text-center">Method</TableHead>
                            <TableHead className="text-center">Amount</TableHead>
                            <TableHead className="w-40 text-center">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">DFHD5436523</TableCell>
                            <TableCell>7587654</TableCell>
                            <TableCell>Online</TableCell>
                            <TableCell className="text-right">85478</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">DFHD5436523</TableCell>
                            <TableCell>7587654</TableCell>
                            <TableCell>Online</TableCell>
                            <TableCell className="text-right">85478</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">DFHD5436523</TableCell>
                            <TableCell>7587654</TableCell>
                            <TableCell>Online</TableCell>
                            <TableCell className="text-right">85478</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">DFHD5436523</TableCell>
                            <TableCell>7587654</TableCell>
                            <TableCell>Online</TableCell>
                            <TableCell className="text-right">85478</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">DFHD5436523</TableCell>
                            <TableCell>7587654</TableCell>
                            <TableCell>Online</TableCell>
                            <TableCell className="text-right">85478</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </>
    )
}

export default Design;
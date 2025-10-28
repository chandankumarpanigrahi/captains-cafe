'use client';
import React from 'react';
import { IoCheckmarkSharp } from "react-icons/io5";
import { TbProgress } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const completed = <div className='flex flex-row items-center gap-0.5 text-[12px] py-0.5 pr-3 pl-2 rounded-xl text-green-700 bg-green-100 w-fit font-semibold'> <IoCheckmarkSharp size={14} /> Completed </div>
const pending = <div className='flex flex-row items-center gap-0.5 text-[12px] py-0.5 pr-3 pl-2 rounded-xl text-amber-700 bg-amber-100 w-fit font-semibold'> <TbProgress size={14} /> Pending </div>
const progress = <div className='flex flex-row items-center gap-0.5 text-[12px] py-0.5 pr-3 pl-2 rounded-xl text-indigo-700 bg-indigo-100 w-fit font-semibold'> <TbProgress size={14} /> In-Progress </div>
const cancelled = <div className='flex flex-row items-center gap-0.5 text-[12px] py-0.5 pr-3 pl-2 rounded-xl text-red-700 bg-red-100 w-fit font-semibold'> <RxCross2 size={14} /> Cancelled </div>

const recentOrders = [
  {
    slno: "1",
    orderId: "CC004120",
    date: "Oct 15, 2025",
    status: completed,
    details: "Monthly Payment (May)",
  },
  {
    slno: "2",
    orderId: "CC004121",
    date: "Oct 18, 2025",
    status: progress,
    details: "Monthly Payment (June)",
  },
  {
    slno: "3",
    orderId: "CC004122",
    date: "Oct 20, 2025",
    status: cancelled,
    details: "Monthly Payment (June)",
  },
];

const PaymentHistory = () => {
  return (
    <div className="w-full px-6 py-4 rounded-md bg-white dark:bg-neutral-800 shadow-[inset_-4px_-4px_4px_-1px_rgba(0,0,0,0.15)] border border-gray-100 dark:border-neutral-700">
      <h2 className="text-2xl font-semibold text-blue-900 mb-4">Payment History</h2>
      <div className="overflow-x-auto">
        <Table className="whitespace-nowrap">
          <TableHeader>
            <TableRow className="bg-gray-100">
              <TableHead className="w-[100px]">Sl. No.</TableHead>
              <TableHead>Transaction ID</TableHead>
              <TableHead>Transaction Date</TableHead>
              <TableHead>Payment Status</TableHead>
              <TableHead>Details</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentOrders.map((order) => (
              <TableRow key={order.orderId}>
                <TableCell>{order.slno}</TableCell>
                <TableCell className="font-medium">#{order.orderId}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.status}</TableCell>
                <TableCell>{order.details}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default PaymentHistory;
import React from 'react'
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
} from "@/components/ui/table";

const completed = (
  <div className='flex flex-row items-center gap-0.5 text-[12px] py-0.5 pr-3 pl-2 rounded-xl text-green-700 bg-green-100 w-fit font-semibold'>
    <IoCheckmarkSharp size={14} /> Completed
  </div>
);
const pending = (
  <div className='flex flex-row items-center gap-0.5 text-[12px] py-0.5 pr-3 pl-2 rounded-xl text-amber-700 bg-amber-100 w-fit font-semibold'>
    <TbProgress size={14} /> Pending
  </div>
);
const cancelled = (
  <div className='flex flex-row items-center gap-0.5 text-[12px] py-0.5 pr-3 pl-2 rounded-xl text-red-700 bg-red-100 w-fit font-semibold'>
    <RxCross2 size={14} /> Cancelled
  </div>
);

const recentOrders = [
  {
    slno: "1",
    orderId: "4120",
    date: "Oct 15, 2025",
    status: completed,
    details: "Premium Plan - Annual Subscription",
  },
  {
    slno: "2",
    orderId: "4121",
    date: "Oct 18, 2025",
    status: pending,
    details: "Pro Plan - Monthly Renewal",
  },
  {
    slno: "3",
    orderId: "4122",
    date: "Oct 20, 2025",
    status: cancelled,
    details: "Basic Plan - Trial Upgrade",
  },
  {
    slno: "4",
    orderId: "4123",
    date: "Oct 21, 2025",
    status: completed,
    details: "Enterprise Plan - Quarterly Renewal",
  },
  {
    slno: "5",
    orderId: "4124",
    date: "Oct 22, 2025",
    status: pending,
    details: "Pro Plan - Team Add-on Purchase",
  },
  {
    slno: "6",
    orderId: "4125",
    date: "Oct 23, 2025",
    status: completed,
    details: "Premium Plan - Upgrade from Pro",
  },
  {
    slno: "7",
    orderId: "4126",
    date: "Oct 25, 2025",
    status: cancelled,
    details: "Basic Plan - Subscription Canceled",
  },
  {
    slno: "8",
    orderId: "4127",
    date: "Oct 27, 2025",
    status: completed,
    details: "Pro Plan - Auto Renewal",
  },
  {
    slno: "9",
    orderId: "4128",
    date: "Oct 28, 2025",
    status: completed,
    details: "Enterprise Plan - Custom Integration",
  },
  {
    slno: "10",
    orderId: "4129",
    date: "Oct 29, 2025",
    status: pending,
    details: "Basic Plan - Monthly Subscription",
  },
  {
    slno: "11",
    orderId: "4130",
    date: "Oct 30, 2025",
    status: completed,
    details: "Premium Plan - Gift Subscription",
  },
  {
    slno: "12",
    orderId: "4131",
    date: "Nov 1, 2025",
    status: pending,
    details: "Pro Plan - Add-on License",
  },
];

const Orders = () => {
  return (
    <div className='flex flex-col space-y-3'>
      <div className="w-full px-6 py-4 rounded-md bg-white dark:bg-neutral-800 shadow-[inset_-4px_-4px_4px_-1px_rgba(0,0,0,0.15)] border border-gray-100 dark:border-neutral-700">
        <div className="flex justify-between items-center">
          <h3 className='text-lg font-semibold text-blue-900 dark:text-blue-200'>All Past Orders</h3>
        </div>
        <hr className='my-2 border-gray-200 dark:border-neutral-700' />
        <Table className="whitespace-nowrap">
          <TableHeader>
            <TableRow className="bg-gray-100 dark:bg-neutral-700">
              <TableHead className="w-[80px]">Sl. No.</TableHead>
              <TableHead>Order ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
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

export default Orders;
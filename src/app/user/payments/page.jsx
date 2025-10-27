'use client';
import React from 'react';
import { IoCheckmark } from "react-icons/io5";
import { TbProgress } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";

const PaymentHistory = () => {
  const payments = [
    {
      id: 1,
      transactionId: "#3066",
      date: "Apr 6, 2025",
      status: "Completed",
      details: "Monthly Payment (May)"
    },
    {
      id: 2,
      transactionId: "#3065",
      date: "May 6, 2025",
      status: "In Progress",
      details: "Monthly Payment (June)"
    },
    {
      id: 3,
      transactionId: "#3064",
      date: "May 6, 2025",
      status: "Cancelled",
      details: "Monthly Payment (June)"
    },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case "Completed":
        return (
          <div className="flex items-center gap-1 text-green-700 bg-green-100 text-[13px] px-2.5 py-0.5 rounded-xl font-medium w-fit">
            <IoCheckmark size={14} /> Completed
          </div>
        );
      case "In Progress":
        return (
          <div className="flex items-center gap-1 text-blue-700 bg-blue-100 text-[13px] px-2.5 py-0.5 rounded-xl font-medium w-fit">
            <TbProgress size={14} /> In Progress
          </div>
        );
      case "Cancelled":
        return (
          <div className="flex items-center gap-1 text-red-700 bg-red-100 text-[13px] px-2.5 py-0.5 rounded-xl font-medium w-fit">
            <RxCross2 size={14} /> Cancelled
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full px-6 py-4 rounded-md bg-white dark:bg-neutral-800 shadow-[inset_-4px_-4px_4px_-1px_rgba(0,0,0,0.15)] border border-gray-100 dark:border-neutral-700">
      <h2 className="text-2xl font-semibold text-blue-900 mb-4">Payment History</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left text-sm text-gray-700">
              <th className="py-3 px-4 font-semibold">Transaction</th>
              <th className="py-3 px-4 font-semibold">Transaction ID</th>
              <th className="py-3 px-4 font-semibold">Transaction Date</th>
              <th className="py-3 px-4 font-semibold">Payment Status</th>
              <th className="py-3 px-4 font-semibold">Details</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm">
            {payments.map((p) => (
              <tr key={p.id} className="border-b hover:bg-gray-50 transition-colors">
                <td className="py-3 px-4">{p.id}</td>
                <td className="py-3 px-4 font-semibold text-gray-800">{p.transactionId}</td>
                <td className="py-3 px-4">{p.date}</td>
                <td className="py-3 px-4">{getStatusBadge(p.status)}</td>
                <td className="py-3 px-4">{p.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
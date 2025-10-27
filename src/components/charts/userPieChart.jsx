"use client"
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const HalfDonutWithTooltip = () => {
    const data = [
        { name: 'Completed', value: 24, color: '#10b981' },
        { name: 'Meal Left', value: 36, color: '#3b82f6' },
        { name: 'Lunch Skipped', value: 8, color: '#f59e0b' },
        { name: 'Dinner Skipped', value: 4, color: '#ef4444' }
    ];

    const total = data.reduce((sum, item) => sum + item.value, 0);

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const dataItem = payload[0];
            const percentage = ((dataItem.payload.value / total) * 100).toFixed(1);
            return (
                <div className="bg-white p-1 border border-gray-200 rounded-sm shadow-lg">
                    <p className="font-medium text-[10px] text-gray-800">{dataItem.name}</p>
                    <p className="text-[10px] text-gray-600">
                        {dataItem.value} meals ({percentage}%)
                    </p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="w-full">
            <div className="relative" style={{ height: '100px' }}>
                <ResponsiveContainer width="100%" height="100%" className=" scale-130">
                    <PieChart>
                        <Tooltip content={<CustomTooltip />} />
                        <Pie
                            data={data}
                            cx="50%"
                            cy="90%"
                            startAngle={180}
                            endAngle={0}
                            innerRadius={50}
                            outerRadius={80}
                            paddingAngle={2}
                            dataKey="value"
                            cornerRadius={5}
                        >
                            {data.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={entry.color}
                                    stroke="white"
                                    strokeWidth={2}
                                />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>

                {/* Center Text */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-center">
                    <div className="text-xl font-bold text-gray-800">{total}</div>
                    <div className="text-xs text-gray-500">Total</div>
                </div>
            </div>

            {/* Detailed Legend */}
            <div className="space-y-2 pt-4">
                {data.map((item, index) => {
                    const percentage = ((item.value / total) * 100).toFixed(1);
                    return (
                        <div key={index} className="flex items-center justify-between rounded-lg hover:bg-gray-50">
                            <div className="flex items-center gap-3">
                                <div
                                    className="w-3 h-3 rounded-full"
                                    style={{ backgroundColor: item.color }}
                                ></div>
                                <span className="text-sm text-gray-700">{item.name}</span>
                            </div>
                            <div className="text-right flex items-center gap-1">
                                <div className="text-sm font-medium text-gray-800">{item.value}</div>
                                <div className="text-xs text-gray-500 pt-0.5">{percentage}%</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default HalfDonutWithTooltip;
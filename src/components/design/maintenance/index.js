'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { FaTools, FaClock } from 'react-icons/fa';

const MaintenancePage = () => {
    return (
        <div className="w-full flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 to-black text-white px-4">
            <motion.div
                className="text-center max-w-xl"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <motion.div
                    className="flex justify-center text-yellow-400 mb-6"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                >
                    <FaTools size={60} />
                </motion.div>

                <h1 className="text-4xl md:text-5xl font-bold mb-4">We’re Under Maintenance</h1>
                <p className="text-lg md:text-xl text-gray-300 mb-6">
                    Our website is getting a quick tune-up to serve you better. We'll be back shortly!
                </p>

                <div className="flex justify-center items-center gap-2 text-gray-400">
                    <FaClock />
                    <span>Expected back soon</span>
                </div>
            </motion.div>
        </div>
    );
};

export default MaintenancePage;

"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoClose } from 'react-icons/io5';
import modalData from '../../data/promoModal.json';

const PromoModal = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        setIsMounted(true);
        if (!modalData.isActive) return;

        const today = new Date().toDateString();
        const lastSeenDate = localStorage.getItem('lastSeenPromoModalDate');
        const hasSeenModal = localStorage.getItem('hasSeenPromoModal');

        if (modalData.showDaily) {
            if (lastSeenDate === today) {
                return;
            }
        } else if (modalData.showOnce && hasSeenModal) {
            return;
        }

        // Add a small delay for better UX
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!modalData.targetDate) return;

        const calculateTimeLeft = () => {
            const difference = +new Date(modalData.targetDate) - +new Date();
            let timeLeft = {};

            if (difference > 0) {
                timeLeft = {
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                };
            } else {
                timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
            }
            return timeLeft;
        };

        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        if (modalData.showDaily) {
            localStorage.setItem('lastSeenPromoModalDate', new Date().toDateString());
        } else if (modalData.showOnce) {
            localStorage.setItem('hasSeenPromoModal', 'true');
        }
    };

    if (!isMounted || !isVisible) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300">
            <div
                className="relative w-full max-w-lg bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 scale-100"
                role="dialog"
                aria-modal="true"
            >
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
                    aria-label="Close modal"
                >
                    <IoClose size={24} />
                </button>

                {/* Image Section */}
                <div className="relative w-full h-64 sm:h-72">
                    <Image
                        src={modalData.imageUrl}
                        alt="Promotional Offer"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>

                {/* Content Section */}
                <div className="p-2 md:p-4 text-center space-y-4">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-600 mb-2">
                            Special Offer!
                        </h2>
                        <p className="text-lg font-medium text-gray-700 dark:text-gray-200">
                            {modalData.text}
                        </p>
                    </div>

                    {/* Countdown Timer */}
                    {modalData.targetDate && (
                        <div className="flex justify-center gap-4 text-center pb-2">
                            {[
                                { label: 'Days', value: timeLeft.days },
                                { label: 'Hours', value: timeLeft.hours },
                                { label: 'Mins', value: timeLeft.minutes },
                                { label: 'Secs', value: timeLeft.seconds }
                            ].map((item, index) => (
                                <div key={index} className="flex flex-col items-center">
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 rounded-lg shadow-inner">
                                        <span className="text-lg sm:text-xl font-bold text-amber-600 dark:text-amber-500">
                                            {String(item.value).padStart(2, '0')}
                                        </span>
                                    </div>
                                    <span className="text-xs sm:text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium transform uppercase tracking-wider">
                                        {item.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}

                    <Link
                        href={modalData.buttonLink}
                        onClick={handleClose}
                        className="inline-block w-full sm:w-auto px-8 py-3 text-base font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-600 rounded-full hover:from-amber-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-orange-500/30"
                    >
                        {modalData.buttonText}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PromoModal;

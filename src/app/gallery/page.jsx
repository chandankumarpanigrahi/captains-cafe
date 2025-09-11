// app/gallery/page.js
'use client';

import { useState } from 'react';
import Image from 'next/image';

const images = [
    { id: 1, src: '/images/sn.jpg', alt: 'Mountain Landscape', description: 'Beautiful mountain view with sunset' },
    { id: 2, src: '/images/sn.jpg', alt: 'Ocean Waves', description: 'Calm ocean waves hitting the shore' },
    { id: 3, src: '/images/sn.jpg', alt: 'Forest Path', description: 'Mysterious forest path in autumn' },
    { id: 4, src: '/images/sn.jpg', alt: 'City Skyline', description: 'Modern city skyline at night' },
    { id: 5, src: '/images/sn.jpg', alt: 'Desert Dunes', description: 'Golden desert dunes at sunrise' },
    { id: 6, src: '/images/sn.jpg', alt: 'Northern Lights', description: 'Aurora borealis in night sky' },
];

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);

    const openLightbox = (image) => {
        setSelectedImage(image);
        document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    };

    const goToNext = () => {
        if (!selectedImage) return;
        const currentIndex = images.findIndex(img => img.id === selectedImage.id);
        const nextIndex = (currentIndex + 1) % images.length;
        setSelectedImage(images[nextIndex]);
    };

    const goToPrev = () => {
        if (!selectedImage) return;
        const currentIndex = images.findIndex(img => img.id === selectedImage.id);
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        setSelectedImage(images[prevIndex]);
    };

    // Handle keyboard navigation
    const handleKeyDown = (e) => {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') goToNext();
        if (e.key === 'ArrowLeft') goToPrev();
    };

    return (
        <div className="container bg-gray-50 py-8 px-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Image Gallery</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {images.map((image) => (
                        <div
                            key={image.id}
                            className="w-full h-60 relative group cursor-pointer overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                            onClick={() => openLightbox(image)}
                        >
                            <div className="w-full h-full relative">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover w-full h-full"
                                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                />
                            </div>
                            <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-end">
                                <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <h3 className="font-semibold">{image.alt}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Lightbox Component */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 bg-[#000000c4] z-500 flex items-center justify-center p-4"
                        onClick={closeLightbox}
                        onKeyDown={handleKeyDown}
                        tabIndex={0}
                    >
                        <div className="relative max-w-6xl w-full max-h-full flex items-center justify-center">
                            {/* Close Button */}
                            <button
                                className="absolute top-4 right-4 cursor-pointer text-white bg-[#041d36] bg-opacity-50 rounded-full p-2 z-10 transition-colors"
                                onClick={closeLightbox}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Navigation Buttons */}
                            <button
                                className="absolute left-4 text-white bg-[#0000004f] cursor-pointer hover:bg-[#00000067] rounded-full p-4 z-10 hover:bg-opacity-75 transition-colors"
                                onClick={(e) => { e.stopPropagation(); goToPrev(); }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <button
                                className="absolute right-4 text-white bg-[#0000004f] cursor-pointer hover:bg-[#00000067] rounded-full p-4 z-10 hover:bg-opacity-75 transition-colors"
                                onClick={(e) => { e.stopPropagation(); goToNext(); }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>

                            {/* Image */}
                            <div className="relative w-full h-full max-h-[80vh] flex items-center justify-center">
                                <Image
                                    src={selectedImage.src}
                                    alt={selectedImage.alt}
                                    width={1200}
                                    height={800}
                                    className="object-contain max-h-full rounded-lg"
                                    onClick={(e) => e.stopPropagation()}
                                />
                            </div>

                            {/* Caption */}
                            <div className="hidden md:block absolute bottom-4 left-0 right-0 text-gray-100 bg-[#00000033] text-center p-4 bg-opacity-50 rounded-lg mx-4">
                                <h3 className="text-xl font-semibold">{selectedImage.alt}</h3>
                                <p className="mt-1">{selectedImage.description}</p>
                                <div className="mt-2 text-sm opacity-75">
                                    {images.findIndex(img => img.id === selectedImage.id) + 1} of {images.length}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
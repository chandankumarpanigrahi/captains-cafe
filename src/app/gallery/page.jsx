'use client'
import React, { useEffect } from "react";
import styles from "./style.module.css";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/    .css";
import Image from "next/image";

const GalleryPage = () => {
    useEffect(() => {
        Fancybox.bind("[data-fancybox='gallery']", {});
        return () => {
            Fancybox.destroy();
        };
    }, []);

    const images = [
        {
            src: "/images/gallery/img_1.jpg",
            thumb: "/images/gallery/img_1.jpg",
            alt: "Photo 1",
        },
        {
            src: "/images/gallery/img_2.jpg",
            thumb: "/images/gallery/img_2.jpg",
            alt: "Photo 2",
        },
        {
            src: "/images/gallery/img_3.jpg",
            thumb: "/images/gallery/img_3.jpg",
            alt: "Photo 3",
        },
        {
            src: "/images/gallery/img_4.jpg",
            thumb: "/images/gallery/img_4.jpg",
            alt: "Photo 4",
        },
        {
            src: "/images/gallery/img_5.jpg",
            thumb: "/images/gallery/img_5.jpg",
            alt: "Photo 5",
        },
        {
            src: "/images/gallery/img_6.jpg",
            thumb: "/images/gallery/img_6.jpg",
            alt: "Photo 6",
        },
        {
            src: "/images/gallery/img_7.jpg",
            thumb: "/images/gallery/img_7.jpg",
            alt: "Photo 7",
        },
        {
            src: "/images/gallery/img_8.jpg",
            thumb: "/images/gallery/img_8.jpg",
            alt: "Photo 8",
        },
        {
            src: "/images/gallery/img_9.jpg",
            thumb: "/images/gallery/img_9.jpg",
            alt: "Photo 9",
        },
        {
            src: "/images/gallery/img_10.jpg",
            thumb: "/images/gallery/img_10.jpg",
            alt: "Photo 10",
        },
    ];

    return (
        <div className='container pt-10'>
            {/* Heading and Description */}
            <div className="flex flex-col px-0 md:px-20 lg:px-80 w-full mb-16">
                <h1 className='color-primary text-3xl md:text-4xl font-bold mb-3 text-center'>Showcase of Excellence</h1>
                <p className='text-[#374F67] text-md md:text-lg text-center'>A collection of our latest works and moments.</p>
            </div>
            <div className={`${styles.galleryContainer} flex flex-row flex-wrap w-full`}>
                {images.map((img, idx) => (
                    <a
                        key={idx}
                        href={img.src}
                        data-fancybox="gallery"
                        data-caption={img.alt}
                        className={styles.galleryItem}
                    >
                        <Image
                            src={img.thumb}
                            alt={img.alt}
                            width={300}
                            height={200}
                            className={styles.galleryImage}
                        />
                    </a>
                ))}
            </div>
        </div>

    );
};

export default GalleryPage;

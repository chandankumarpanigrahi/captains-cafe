"use client"
import React, { useEffect } from 'react'
import styles from "./style.module.css"
import { Card } from "@/components/ui/card"
import Image from 'next/image'
import SubBanner from '@/components/common/sub banner'
import { Fancybox } from "@fancyapps/ui"
import "@fancyapps/ui/dist/fancybox/fancybox.css"

const Documentations = () => {

    const docs = [
        {
            img: "/images/logos/fssai.png",
            title: "Office Compliance",
            dept: "Govt",
            pdf: "/file/fssai.pdf"
        },
        {
            img: "/images/logos/ofs.png",
            title: "Food Safety",
            dept: "FSSAI",
            pdf: "/file/fssai.pdf"
        },
        {
            img: "/images/logos/bmc.png",
            title: "Environmental",
            dept: "MoEF",
            pdf: "/file/fssai.pdf"
        },
    ]

    React.useEffect(() => {
        Fancybox.bind("[data-fancybox='pdf']", {}); // bind for PDF view links
        return () => Fancybox.destroy();
    }, []);

    return (
        <>
            <SubBanner
                title="Documentations"
                breadcrumbItems={[
                    { label: "All Documents" }
                ]}
            />
            <div className='container py-10'>

                {/* Heading and Description */}
                <div className="flex flex-col px-0 md:px-20 lg:px-80 w-full mb-16">
                    <h1 className='text-[#0E467D] dark:text-white text-3xl md:text-4xl font-bold mb-3 text-center'>Required Documentation</h1>
                    <p className='text-[#374F67] dark:text-gray-300 text-md md:text-lg text-center'>Find all necessary certifications and licenses right here!</p>
                </div>

                {/* Cards */}
                <div className="w-full flex gap-y-4 flex-wrap flex-row justify-evenly">
                    {docs.map((doc, index) => (
                        <Card
                            key={index}
                            className={`${styles.card} flex flex-col items-center p-4 gap-0 group rounded-md relative overflow-hidden w-[260px]`}
                        >
                            <Image
                                src={doc.img}
                                width={160}
                                height={160}
                                alt={doc.title}
                                className={`${styles.logo}`}
                            />
                            <div className='flex flex-col justify-center -translate-y-2 md:translate-none'>
                                <h3 className={`${styles.name} text-[#12406D] dark:text-white text-xl font-semibold mb-1 text-center`}>
                                    {doc.title}
                                </h3>
                                <small className={`${styles.dept} text-gray-400 mb-3 text-center`}>
                                    {doc.dept}
                                </small>
                            </div>
                            {/* View PDF link */}
                            <a
                                href={doc.pdf}
                                data-fancybox="pdf"
                                data-type="iframe" // ensures PDF loads as iframe
                                className="absolute bottom-2 md:-bottom-4 group-hover:bottom-3 text-blue-700 dark:text-orange-200 uppercase text-sm mt-auto"
                            >
                                View
                            </a>
                        </Card>
                    ))}
                </div>

            </div>
        </>
    )
}

export default Documentations

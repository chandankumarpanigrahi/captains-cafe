import React from 'react'
import styles from './style.module.css'
import { FiHome } from "react-icons/fi";
import Link from "next/link"
import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const SubBanner = ({
    title = "Page Title",
    breadcrumbItems = [],
    showBreadcrumb = true,
    titleSize = "text-4xl md:text-6xl" // Added titleSize prop
}) => {
    return (
        <div className={`${styles.background_design} w-full`}>
            <div className="h-full w-full flex container mx-auto pt-18 justify-center items-center flex-col">
                <h1 className={`text-white text-4xl md:text-6xl mb-6 font-quicksand font-semibold`}>
                    {title}
                </h1>

                {/* Conditionally render breadcrumb */}
                {showBreadcrumb && (
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href="/" className='text-lg text-gray-300 hover:text-gray-200 font-quicksand font-medium'>
                                        <FiHome />
                                    </Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            {breadcrumbItems.map((item, index) => (
                                <React.Fragment key={index}>
                                    <BreadcrumbItem>
                                        {item.href ? (
                                            <BreadcrumbLink asChild>
                                                <Link href={item.href} className="text-gray-400 hover:text-gray-200 text-lg font-quicksand font-normal">
                                                    {item.label}
                                                </Link>
                                            </BreadcrumbLink>
                                        ) : (
                                            <BreadcrumbPage className="text-white text-lg font-quicksand font-semibold">
                                                {item.label}
                                            </BreadcrumbPage>
                                        )}
                                    </BreadcrumbItem>
                                    {index < breadcrumbItems.length - 1 && <BreadcrumbSeparator className="text-lx" />}
                                </React.Fragment>
                            ))}
                        </BreadcrumbList>
                    </Breadcrumb>
                )}
            </div>
        </div>
    );
};

export default SubBanner
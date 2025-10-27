'use client';
import React from 'react';
import Link from 'next/link';
import { MdKeyboardArrowRight } from "react-icons/md";

const ViewMore = ({
    link = "#",
    text = "View More"
}) => {
    return (
        <Link
            href={link}
            aria-label={text}
            className="text-sm flex items-center text-blue-800 font-semibold group"
        >
            <span className="transition-all duration-300 ease-in-out">
                {text}
            </span>
            <MdKeyboardArrowRight
                size={18}
                className="transition-transform duration-300 ease-in-out group-hover:translate-x-1"
            />
        </Link>
    );
};

export default ViewMore;

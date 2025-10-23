"use client";
import React from 'react'
import { usePathname } from "next/navigation";


const layout = ({ children }) => {
    const pathname = usePathname();
    
    return (
        <>
            {children}
        </>
    )
}

export default layout
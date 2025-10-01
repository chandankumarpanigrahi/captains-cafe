"use client"

import SubBanner from '@/components/common/sub banner'
import React from 'react'

const layout = ({ children }) => {
    return (
        <>
            <SubBanner
                title="Our Menu"
                breadcrumbItems={[
                    // { label: "Company", href: "/company" },
                    { label: "Menu" } // No href = current page
                ]}
            />
            {children}
        </>
    )
}

export default layout
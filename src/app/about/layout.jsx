import SubBanner from '@/components/common/sub banner'
import React from 'react'

const layout = ({ children }) => {
    return (
        <>
            <SubBanner
                title="About Us"
                breadcrumbItems={[
                    // { label: "Company", href: "/company" },
                    { label: "About Us" } // No href = current page
                ]}
            />

            {children}
        </>
    )
}

export default layout
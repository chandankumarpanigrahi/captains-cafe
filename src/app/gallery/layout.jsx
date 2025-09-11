import SubBanner from '@/components/common/sub banner'
import React from 'react'

const layout = ({ children }) => {
    return (
        <>
            <SubBanner
                title="Gallery"
                breadcrumbItems={[
                    // { label: "Company", href: "/company" },
                    { label: "Gallery" } // No href = current page
                ]}
            />

            {children}
        </>
    )
}

export default layout
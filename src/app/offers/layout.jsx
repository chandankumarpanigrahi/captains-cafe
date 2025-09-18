import SubBanner from '@/components/common/sub banner'
import React from 'react'

const layout = ({ children }) => {
    return (
        <>
            <SubBanner
                title="Our Offers"
                breadcrumbItems={[
                    // { label: "Company", href: "/company" },
                    { label: "All Our Offers" } // No href = current page
                ]}
            />

            {children}
        </>
    )
}

export default layout
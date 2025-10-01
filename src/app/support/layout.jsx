import SubBanner from '@/components/common/sub banner'
import React from 'react'

const layout = ({ children }) => {
    return (
        <>
            <SubBanner
                title="Support"
                breadcrumbItems={[
                    // { label: "Company", href: "/company" },
                    { label: "Support" } // No href = current page
                ]}
            />
            {children}
        </>
    )
}

export default layout
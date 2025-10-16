import React from 'react'
import SubBanner from '@/components/common/sub banner'

const Design = () => {
    return (
        <>
            <SubBanner
                title="Test Design"
                breadcrumbItems={[
                    { label: "Test", href: "/test" },
                    { label: "Design" } // No href = current page
                ]}
            />
            <div className='container py-10'>
            </div>
        </>
    )
}

export default Design;

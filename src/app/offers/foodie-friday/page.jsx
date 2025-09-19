import React from 'react'
import SubBanner from '@/components/common/sub banner'

const FoodieFriday = () => {
    return (
        <>
            <SubBanner
                title="Foodie Friday"
                breadcrumbItems={[
                    { label: "All Our Offers", href: "/offers" },
                    { label: "Foodie Friday" } // No href = current page
                ]}
            />
            <div className='container py-10'>
                <p className='text-center'>Coming Soon</p>
            </div>
        </>
    )
}

export default FoodieFriday

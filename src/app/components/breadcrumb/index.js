import Link from 'next/link'
import React from 'react'

const Breadcrumb = (props) => {
    return (
        <div className="container mt-4 flex items-center text-sm text-gray-600">
            <Link href="#" className="hover:text-primary">
                Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="#" className="hover:text-primary">
                Menu
            </Link>
            <span className="mx-2">/</span>
            <Link href="#" className="hover:text-primary">
                Food
            </Link>
            <span className="mx-2">/</span>
            <span className="text-primary-dark font-medium">Main Course</span>
        </div>
    )
}

export default Breadcrumb

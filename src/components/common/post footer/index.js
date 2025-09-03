import React from 'react'
import { FaHeart } from "react-icons/fa";
const PostFooter = () => {
    return (
        <div className='bg-[#021528] text-[#E1B89D] w-full flex'>
            <div className="container mx-auto flex text-sm py-1.5">
                <p>&copy; Copyright 2024-25, All Rights Reserved by The Captain&apos;s Cafe</p>
                <p className='ml-auto flex items-center'>Made with <FaHeart className='text-red-600 mx-1.5'/> by <a href="https://shoolin.co.uk" className='font-semibold hover:text-white ml-1'>Shoolin Innovations Limited, UK</a></p>
            </div>
        </div>
    )
}

export default PostFooter

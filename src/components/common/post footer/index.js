import React from 'react'
import { FaHeart } from "react-icons/fa";
const PostFooter = () => {
    return (
        <div className='bg-[#021528] text-[#E1B89D] w-full flex'>
            <div className="container mx-auto flex flex-col lg:flex-row gap-y-1 text-[12px] md:text-sm py-1.5">
                <p className='text-center lg:text-left'>&copy; Copyright 2024-25, All Rights Reserved by The Captain&apos;s Cafe</p>
                <p className='mx-auto lg:mr-0 text-center'>Made with <FaHeart className='text-red-600 mx-1.5 inline-block'/> by <a href="https://shoolin.co.uk" className='font-semibold hover:text-white ml-1'>Shoolin Innovations Limited, UK</a></p>
            </div>
        </div>
    )
}

export default PostFooter

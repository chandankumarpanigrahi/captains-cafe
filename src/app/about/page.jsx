"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
const About = () => {
    const router = useRouter();
    return (
        <div>
            <h1>About Us</h1>
            <button className='bg-blue-700 text-lg w-full flex flex-col text-white px-8 py-3 rounded-full hover:bg-blue-900 cursor-pointer' onClick={() => router.push("/")}>Click Here</button>
        </div>
    )
}

export default About
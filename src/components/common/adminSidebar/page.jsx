import React from 'react'

// Images
import logo from "../../../assets/images/logo.png"
import avatar from "../../../assets/images/avatars/user_0.png"
import Image from 'next/image'

const AdminSidebar = () => {
    return (
        <div className='flex flex-col h-full w-full rounded-tr-2xl rounded-br-2xl bg-gradient-to-b from-[#ffe8d5] via-30% via-[#f7ece2] via-60% via-[#f7ece2] to-[#ffe8d5] to-100% shadow-md p-4'>

            {/* Logo */}
            <div className="flex flex-row gap-1 items-center">
                <Image src={logo} alt='Image Logo Format' className='w-[55px]'/>
                <div className="flex flex-col">
                    <h2 className='text-blue-950 font-bold text-lg'>The Captain&apos;s Cafe</h2>
                    <p className='text-blue-950 font-light text-sm'>The Captain&apos;s Bridge</p>
                </div>
            </div>

            {/* User */}
            <div className='relative bg-white p-1.5 rounded-xl shadow-lg pl-22 mt-auto'>
                <div className="text-[16px] leading-tight font-semibold text-blue-950">Mr Sushant</div>
                <p className=' leading-tight text-[12px] text-blue-950 mb-1'>sushant.co@gmail.com</p>
                <div className="bg-blue-900 text-[11px] rounded-full text-white px-2 w-fit">Admin</div>
                <div className="absolute size-[80px] left-0 bottom-0 rounded-xl overflow-hidden">
                    <Image src={avatar} alt='Avatar' className='w-full h-full object-cover'/>
                </div>
            </div>
        </div>
    )
}

export default AdminSidebar

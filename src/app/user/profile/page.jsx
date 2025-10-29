"use client"
import React, { useEffect } from 'react'
import Button from '@/components/common/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import styles from "./style.module.css"

// Lightbox
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

// Images
import avatar from "../../../assets/images/avatars/user_6.png"

// Icons
import { MdCall } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import Image from 'next/image'

const Profile = () => {
  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']", {
      Thumbs: false,
      Toolbar: true,
    });

    return () => {
      Fancybox.destroy();
    };
  }, []);

  // Convert imported image to URL string for Fancybox
  const avatarSrc = typeof avatar === 'string' ? avatar : avatar.src;


  return (
    <div className='flex flex-col space-y-3'>
      <div className={`${styles.userRow} w-full flex flex-row items-center gap-3 md:my-8 px-2 md:pl-50 md:pr-12 py-2 md:py-5 rounded-full relative bg-[#12406D] shadow-[inset_-6px_-10px_3px_-3px_rgba(0,0,0,0.25)]`}>
        <div className={`${styles.userAvatar} md:absolute z-2 left-0 md:-top-8 size-20 md:size-42 flex items-center justify-center`}>
          <a
            href={avatarSrc}
            data-fancybox="gallery"
          >
            <Image
              src={avatar}
              alt='Avatar'
              className={`${styles.userAvatarImage} rounded-full w-fit cursor-pointer`}
            />
          </a>
        </div>
        <div className='w-full'>
          <h1 className={`${styles.userName} w-full text-xl md:text-3xl text-white font-semibold mb-2 break-words`}>Mr. Subham Choudhury</h1>
          <div className={`${styles.userContacts} flex flex-col space-y-1 space-x-6 md:flex-row`}>
            <div className="w-fit flex gap-1 text-sm md:text-md items-center text-white/90">
              <MdCall className='opacity-80' size="18" />
              <span className='break-all'>+91 89599 78588</span>
            </div>
            <div className="w-fit flex gap-1 text-sm md:text-md items-center text-white/90">
              <IoIosMail className='opacity-80' size="20" />
              <span className='break-all'>subham787898@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-6 py-4 rounded-md bg-white dark:bg-neutral-800 shadow-[inset_-4px_-4px_4px_-1px_rgba(0,0,0,0.15)] border border-gray-100">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-2xl font-semibold text-blue-900 dark:text-white">Personal Information</h2>
          <Sheet>
            <SheetTrigger asChild>
              <Button text="EDIT" radius="md" size='sm' />
            </SheetTrigger>
            <SheetContent className="p-0 border-0">
              <SheetHeader>
                <SheetTitle className="bg-blue-950 py-2 px-4 text-white">Edit Details</SheetTitle>
              </SheetHeader>
              <div className="py-2 px-4">
                <form>
                  <div className="mb-3">
                    <Label className="text-gray-800 dark:text-gray-300">Your Name</Label>
                    <Input type="text" placeholder="Enter Your Name" defaultValue="Subham Choudhury" />
                  </div>
                  <div className="mb-3">
                    <Label className="text-gray-800 dark:text-gray-300">Mobile Number</Label>
                    <Input type="text" placeholder="Enter Your Mobile Number" defaultValue="+91 89599 78588" />
                  </div>
                  <div className="mb-3">
                    <Label className="text-gray-800 dark:text-gray-300">Alternate Mobile Number</Label>
                    <Input type="text" placeholder="Enter Alternate Mobile Number" defaultValue="+91 78554 98665" />
                  </div>
                  <div className="mb-3">
                    <Label className="text-gray-800 dark:text-gray-300">Email Address</Label>
                    <Input type="email" placeholder="Enter Your Email Address" defaultValue="subham787898@gmail.com" />
                  </div>
                  <div className="mb-3">
                    <Label className="text-gray-800 dark:text-gray-300">Upload Your Profile Picture</Label>
                    <Input type="file" />
                  </div>
                  <div className="mb-3 flex flex-row">
                    <Button variant='outline' text="Cancel" radius='md' className='mr-3' />
                    <Button text="Update" radius='md' className='w-full' />
                  </div>
                </form>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <hr className='my-2 border-gray-200' />
        <div className="flex flex-wrap justify-between gap-3 opacity-90 text-[15px] mt-4">
          <div className="w-full lg:w-[49%] flex flex-col md:flex-row md:gap-3">
            <div className="w-full md:w-[30%] font-semibold">Name</div>
            <div className='hidden md:inline-block'>:</div>
            <div>Subham Choudhury</div>
          </div>
          <div className="w-full lg:w-[49%] hidden md:flex flex-col md:flex-row md:gap-3">
          </div>
          <div className="w-full lg:w-[49%] flex flex-col md:flex-row md:gap-3">
            <div className="w-full md:w-[30%] font-semibold">Mobile Number</div>
            <div className='hidden md:inline-block'>:</div>
            <div>+91 89599 78588</div>
          </div>
          <div className="w-full lg:w-[49%] flex flex-col md:flex-row md:gap-3">
            <div className="w-full md:w-[30%] font-semibold">Alternate Number</div>
            <div className='hidden md:inline-block'>:</div>
            <div>+91 78554 98665</div>
          </div>
          <div className="w-full lg:w-[49%] flex flex-col md:flex-row md:gap-3">
            <div className="w-full md:w-[30%] font-semibold">Email Address</div>
            <div className='hidden md:inline-block'>:</div>
            <div>subham787898@gmail.com</div>
          </div>
        </div>
      </div>


      <div className="w-full px-6 py-4 rounded-md bg-white dark:bg-neutral-800 shadow-[inset_-4px_-4px_4px_-1px_rgba(0,0,0,0.15)] border border-gray-100">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-2xl font-semibold text-blue-900 dark:text-white">User Information</h2>
        </div>
        <hr className='my-2 border-gray-200' />
        <div className="flex flex-wrap justify-between gap-3 opacity-90 text-[15px] mt-4">
          <div className="w-full lg:w-[49%] flex flex-col md:flex-row md:gap-3">
            <div className="w-[30%] font-semibold">Last Login</div>
            <div className='hidden md:inline-block'>:</div>
            <div>12th Oct 2025 / 12:06PM</div>
          </div>
          <div className="w-full lg:w-[49%] flex flex-col md:flex-row md:gap-3">
            <div className="w-[30%] font-semibold">Active Since</div>
            <div className='hidden md:inline-block'>:</div>
            <div>21st Jan 2024</div>
          </div>
          <div className="w-full lg:w-[49%] flex flex-col md:flex-row md:gap-3">
            <div className="w-[30%] font-semibold">User Type</div>
            <div className='hidden md:inline-block'>:</div>
            <div>Individual</div>
          </div>
          <div className="w-full lg:w-[49%] flex flex-col md:flex-row md:gap-3">
            <div className="w-[30%] font-semibold">Subscriptions</div>
            <div className='hidden md:inline-block'>:</div>
            <div>NA</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
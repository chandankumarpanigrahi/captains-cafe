import Button from '@/components/common/button'
import React from 'react'
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

const Profile = () => {
  return (
    <div className='flex flex-col space-y-3'>
      <div className="w-full px-6 py-4 rounded-md bg-white dark:bg-neutral-800 shadow-[inset_-4px_-4px_4px_-1px_rgba(0,0,0,0.15)] border border-gray-100">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-2xl font-semibold text-blue-900">Personal Information</h2>
          <Sheet>
            <SheetTrigger>
              <Button text="EDIT" radius="md" size='sm' />
            </SheetTrigger>
            <SheetContent className="p-0 border-0">
              <SheetHeader>
                <SheetTitle className="bg-blue-950 py-2 px-4 text-white">Edit Details</SheetTitle>
                <SheetDescription className=" py-2 px-4">
                  <form>
                    <div className="mb-3">
                      <Label className="text-gray-800">Your Name</Label>
                      <Input type="text" placeholder="Enter Your Name" value="Subham Choudhury" />
                    </div>
                    <div className="mb-3">
                      <Label className="text-gray-800">Mobile Number</Label>
                      <Input type="text" placeholder="Enter Your Mobile Number" value="+91 89599 78588" />
                    </div>
                    <div className="mb-3">
                      <Label className="text-gray-800">Alternate Mobile Number</Label>
                      <Input type="text" placeholder="Enter Alternate Mobile Number" value="+91 78554 98665" />
                    </div>
                    <div className="mb-3">
                      <Label className="text-gray-800">Email Address</Label>
                      <Input type="email" placeholder="Enter Your Email Address" value="subham787898@gmail.com" />
                    </div>
                    <div className="mb-3">
                      <Label className="text-gray-800">Upload Your Profile Picture</Label>
                      <Input/>
                    </div>
                    <div className="mb-3 flex flex-row">
                      <Button text="Cancel" radius='md' className='mr-3'/>
                      <Button text="Update" radius='md' className='w-full'/>
                    </div>
                  </form>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
        <hr className='my-2 border-gray-200' />
        <div className="flex flex-wrap justify-between gap-3 text-gray-600 text-[15px] mt-4">
          <div className="w-full lg:w-[49%] flex gap-3">
            <div className="w-[30%] font-semibold">Name</div>
            <div>:</div>
            <div>Subham Choudhury</div>
          </div>
          <div className="w-full lg:w-[49%] flex gap-3">
          </div>
          <div className="w-full lg:w-[49%] flex gap-3">
            <div className="w-[30%] font-semibold">Mobile Number</div>
            <div>:</div>
            <div>+91 89599 78588</div>
          </div>
          <div className="w-full lg:w-[49%] flex gap-3">
            <div className="w-[30%] font-semibold">Alternate Number</div>
            <div>:</div>
            <div>+91 78554 98665</div>
          </div>
          <div className="w-full lg:w-[49%] flex gap-3">
            <div className="w-[30%] font-semibold">Email Address</div>
            <div>:</div>
            <div>subham787898@gmail.com</div>
          </div>
        </div>
      </div>


      <div className="w-full px-6 py-4 rounded-md bg-white dark:bg-neutral-800 shadow-[inset_-4px_-4px_4px_-1px_rgba(0,0,0,0.15)] border border-gray-100">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-2xl font-semibold text-blue-900">User Information</h2>
        </div>
        <hr className='my-2 border-gray-200' />
        <div className="flex flex-wrap justify-between gap-3 text-gray-600 text-[15px] mt-4">
          <div className="w-full lg:w-[49%] flex gap-3">
            <div className="w-[30%] font-semibold">Last Login</div>
            <div>:</div>
            <div>12th Oct 2025 / 12:06PM</div>
          </div>
          <div className="w-full lg:w-[49%] flex gap-3">
            <div className="w-[30%] font-semibold">Active Since</div>
            <div>:</div>
            <div>21st Jan 2024</div>
          </div>
          <div className="w-full lg:w-[49%] flex gap-3">
            <div className="w-[30%] font-semibold">User Type</div>
            <div>:</div>
            <div>Individual</div>
          </div>
          <div className="w-full lg:w-[49%] flex gap-3">
            <div className="w-[30%] font-semibold">Subscriptions</div>
            <div>:</div>
            <div>NA</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
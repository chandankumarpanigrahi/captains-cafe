"use client"
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Button from '@/components/common/button'
import React, { useState, useRef } from 'react'
import CardHeading from '../elements/CardHeading'
import { FiClock } from 'react-icons/fi'
import { FaRegEdit } from "react-icons/fa";

const AdminDashboard = () => {
  // Initial values for reset functionality
  const initialValues = {
    workingHours: {
      start: '09:00',
      end: '17:00'
    },
    location: '',
    mobileNumber: '',
    textHeader: '',
    textBody: '',
    mobileError: ''
  }

  const [workingHours, setWorkingHours] = useState(initialValues.workingHours)
  const [location, setLocation] = useState(initialValues.location)
  const [mobileNumber, setMobileNumber] = useState(initialValues.mobileNumber)
  const [textHeader, setTextHeader] = useState(initialValues.textHeader)
  const [textBody, setTextBody] = useState(initialValues.textBody)
  const [mobileError, setMobileError] = useState(initialValues.mobileError)

  const startTimeRef = useRef(null)
  const endTimeRef = useRef(null)

  const handleTimeChange = (type, e) => {
    setWorkingHours(prev => ({
      ...prev,
      [type]: e.target.value
    }))
  }

  // Convert 24h time to 12h format for display
  const formatTimeForDisplay = (time24) => {
    if (!time24) return '--:-- --';
    const [hours, minutes] = time24.split(':');
    const hour = parseInt(hours, 10);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12;
    return `${hour12.toString().padStart(2, '0')}:${minutes} ${ampm}`;
  };

  const handleMobileChange = (e) => {
    const value = e.target.value
    const digitsOnly = value.replace(/\D/g, '').slice(0, 10)
    setMobileNumber(digitsOnly)

    if (digitsOnly && digitsOnly.length === 10 && !/^[6-9]/.test(digitsOnly)) {
      setMobileError('Indian mobile numbers start with 6, 7, 8, or 9')
    } else if (digitsOnly && digitsOnly.length !== 10) {
      setMobileError('Mobile number must be 10 digits')
    } else {
      setMobileError('')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (mobileNumber && mobileNumber.length !== 10) {
      setMobileError('Please enter a valid 10-digit mobile number')
      return
    }

    console.log('Form submitted:', {
      workingHours,
      location,
      mobileNumber,
      textHeader,
      textBody
    })

    alert('Settings saved successfully!')
  }

  // Reset form to initial values
  const handleReset = (e) => {
    e.preventDefault() // Prevent form submission

    setWorkingHours({ ...initialValues.workingHours })
    setLocation(initialValues.location)
    setMobileNumber(initialValues.mobileNumber)
    setTextHeader(initialValues.textHeader)
    setTextBody(initialValues.textBody)
    setMobileError(initialValues.mobileError)

    console.log('Form reset to initial values')
  }

  // Function to trigger the native time picker
  const openTimePicker = (ref) => {
    if (ref.current) {
      ref.current.showPicker();
    }
  }

  return (
    <div className='flex flex-row w-full'>
      <Card className="rounded-md p-4 h-fit w-full md:w-[370px]">
        <CardHeading title="Edit" bottomLine="true" />
        <form onSubmit={handleSubmit} className="space-y-2 w-full">
          {/* Working Hours Section */}
          <div className="space-y-1 w-full">
            <Label className="text-[14px] text-gray-600 block font-medium">
              Working Hours
            </Label>
            <div className="flex flex-col md:flex-row items-center justify-between w-full gap-2">
              {/* Start Time - Custom Design */}
              <div className="w-full md:w-[45%] relative">
                <input
                  type="time"
                  ref={startTimeRef}
                  value={workingHours.start}
                  onChange={(e) => handleTimeChange('start', e)}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  aria-label="Select start time"
                />
                <div
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm flex items-center justify-between bg-white hover:bg-gray-50 cursor-pointer"
                  onClick={() => openTimePicker(startTimeRef)}
                >
                  <span className="text-gray-700">
                    {formatTimeForDisplay(workingHours.start)}
                  </span>
                  <FiClock className="text-gray-400" size={16} />
                </div>
              </div>

              <span className="text-gray-500 text-sm">to</span>

              {/* End Time - Custom Design */}
              <div className="w-full md:w-[45%] relative">
                <input
                  type="time"
                  ref={endTimeRef}
                  value={workingHours.end}
                  onChange={(e) => handleTimeChange('end', e)}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  aria-label="Select end time"
                />
                <div
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm flex items-center justify-between bg-white hover:bg-gray-50 cursor-pointer"
                  onClick={() => openTimePicker(endTimeRef)}
                >
                  <span className="text-gray-700">
                    {formatTimeForDisplay(workingHours.end)}
                  </span>
                  <FiClock className="text-gray-400" size={16} />
                </div>
              </div>
            </div>
          </div>

          {/* Location Section */}
          <div className="space-y-1">
            <Label className="text-[14px] text-gray-600 block font-medium">
              Location
            </Label>
            <Input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter your business address"
              className="w-full py-2 text-sm"
            />
          </div>

          {/* Mobile Number Section */}
          <div className="space-y-1">
            <Label className="text-[14px] text-gray-600 block font-medium">
              Mobile Number
            </Label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                <span className="text-gray-900 text-sm">+91</span>
                <div className="w-px h-3 bg-gray-300"></div>
              </div>
              <Input
                value={mobileNumber}
                onChange={handleMobileChange}
                placeholder="Enter 10-digit mobile number"
                className="w-full py-2 pl-12 text-sm"
                type="tel"
                maxLength={10}
              />
            </div>
            {mobileError && (
              <p className="text-xs text-red-500 font-medium mt-1">{mobileError}</p>
            )}
          </div>

          {/* Text Header Section */}
          <div className="space-y-1">
            <Label className="text-[14px] text-gray-600 block font-medium">
              Text Header
            </Label>
            <Input
              value={textHeader}
              onChange={(e) => setTextHeader(e.target.value)}
              placeholder="Enter heading or title"
              className="w-full py-2 text-sm"
            />
          </div>

          {/* Text Body Section */}
          <div className="space-y-1">
            <Label className="text-[14px] text-gray-600 block font-medium">
              Text Body
            </Label>
            <textarea
              value={textBody}
              onChange={(e) => setTextBody(e.target.value)}
              placeholder="Enter description or content"
              className="w-full min-h-[80px] p-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent resize-none placeholder-gray-400"
            />
          </div>

          {/* Reset and Update Buttons */}
          <div className="flex gap-2">
            <Button
              variant='outline'
              text="Reset"
              type="button" // Changed from "reset" to "button" for custom handler
              onClick={handleReset}
              radius='md'
              className="w-fit"
              size='sm'
            />
            <Button
              text="Update"
              type="submit"
              radius='md'
              className="flex-1"
              size='sm'
            />
          </div>
        </form>
      </Card>
      <Card className="rounded-md gap-3 p-4 w-full h-fit ml-3">
        <div className="flex">
          <CardHeading title="Edit" bottomLine="false" />
          <Button text="EDIT" className='ml-auto' size='sm' icon={<FaRegEdit />} radius='sm' iconPosition="left"/>
        </div>
        <hr />
      </Card>
    </div>
  )
}

export default AdminDashboard
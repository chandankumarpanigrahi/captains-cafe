"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import Image from 'next/image';

// Images
import morning from "../../../assets/images/morning.png"
import afternoon from "../../../assets/images/afternoon.png"
import evening from "../../../assets/images/evening.png"
import night from "../../../assets/images/night.png"

// Icons
import { BsFillBellFill } from "react-icons/bs";
import { IoArrowUpOutline } from "react-icons/io5";
import { ImHistory } from "react-icons/im";
import { BiFoodMenu } from "react-icons/bi";
import HalfDonutWithTooltip from '@/components/charts/userPieChart';

const Dashboard = () => {
  const [currentDiv, setCurrentDiv] = useState(0);

  useEffect(() => {
    const updateCurrentDiv = () => {
      const now = new Date();
      const hours = now.getHours();

      if (hours >= 0 && hours < 6) {
        setCurrentDiv(0); // Sleepy Time: 12 AM - 5:59 AM
      } else if (hours >= 6 && hours < 12) {
        setCurrentDiv(1); // Morning: 6 AM - 11:59 AM
      } else if (hours >= 12 && hours < 17) {
        setCurrentDiv(2); // Afternoon: 12 PM - 5:59 PM
      } else {
        setCurrentDiv(3); // Evening: 6 PM - 11:59 PM
      }
    };

    updateCurrentDiv();

    // Update every minute to handle time changes
    const interval = setInterval(updateCurrentDiv, 60000);
    return () => clearInterval(interval); // Cleanup
  }, []);

  const getCurrentContent = () => {
    switch (currentDiv) {
      case 0:
        return {
          image: night,
          text: "Sleepy Time",
          gradient: "from-violet-700 via-violet-500 to-violet-300"
        };
      case 1:
        return {
          image: morning,
          text: "Good Morning",
          gradient: "from-emerald-700 via-emerald-500 to-emerald-300"
        };
      case 2:
        return {
          image: afternoon,
          text: "Good Afternoon",
          gradient: "from-lime-700 via-lime-500 to-lime-300"
        };
      case 3:
        return {
          image: evening,
          text: "Good Evening",
          gradient: "from-orange-700 via-orange-500 to-orange-400"
        };
      default:
        return {
          image: morning,
          text: "Hello",
          gradient: "from-gray-700 via-gray-500 to-gray-300"
        };
    }
  };

  const currentContent = getCurrentContent();

  const stepperStage = "3";
  const steps = [
    { number: 1, label: "Order Placed" },
    { number: 2, label: "Packed" },
    { number: 3, label: "Dispatched" },
    { number: 4, label: "Delivered" }
  ];


  return (
    <div className='flex flex-col space-y-3'>
      <div className="px-6 py-4 rounded-md bg-white dark:bg-neutral-800 shadow-[inset_-4px_-4px_4px_-1px_rgba(0,0,0,0.15)] border border-gray-100 w-full flex flex-row items-center">
        <div className="flex flex-col md:flex-row space-x-3 space-y-2 items-left md:items-center w-full">
          <Image
            src={currentContent.image}
            width={60}
            height={60}
            className="object-contain"
            alt={currentContent.text}
          />
          <div className="flex flex-col">
            <div className={`text-lg font-semibold bg-gradient-to-r ${currentContent.gradient} bg-clip-text text-transparent`}>
              {currentContent.text}
            </div>
            <h3 className='text-xl font-semibold text-zinc-600 dark:text-white/90'>Mr. Subham Choudhury</h3>
          </div>
          <button className='ml-auto hidden md:block'>
            <BsFillBellFill size={28} className=' text-yellow-600' />
          </button>
        </div>
      </div>

      <div className="flex flex-row flex-wrap w-full justify-between">
        <div className="w-full lg:w-[calc(100%-272px)] mb-4 lg:mb-0 flex flex-col justify-between">
          <div className="w-full flex flex-col md:flex-row flex-wrap justify-between">
            <div className="w-full md:w-[calc(33%-8px)] px-6 py-4 rounded-md bg-sky-50 dark:bg-neutral-800 shadow-[inset_-4px_-4px_4px_-1px_rgba(0,0,0,0.15)] border border-gray-100 flex flex-col items-start justify-center mb-3">
              <h1 className='text-3xl font-semibold mb-2 text-blue-900 dark:text-blue-200'>62</h1>
              <div className="flex flex-row gap-1 items-start text-green-900/80 dark:text-green-400">
                <small className='mt-0.5'><IoArrowUpOutline size={14} /></small>
                <div className='text-[11px]'>12% than Last Month</div>
              </div>
              <p className='text-sm'>Total Orders</p>
            </div>
            <div className="w-full md:w-[calc(33%-8px)] px-6 py-4 rounded-md bg-amber-50 dark:bg-neutral-800 shadow-[inset_-4px_-4px_4px_-1px_rgba(0,0,0,0.15)] border border-gray-100 flex flex-col items-start justify-center mb-3">
              <h1 className='text-3xl font-semibold mb-2 text-yellow-600/90 dark:text-amber-200 leading-5'>12th <small className='text-sm'>April 2025</small></h1>
              <div className="flex flex-row gap-1 items-start text-gray-500 dark:text-green-400">
                <small className='mt-0.5'><ImHistory size={14} /></small>
                <div className='text-[11px]'>12 Days Ago</div>
              </div>
              <p className='text-sm'>Last Order</p>
            </div>
            <div className="w-full md:w-[calc(33%-8px)] px-6 py-4 rounded-md bg-red-50 dark:bg-neutral-800 shadow-[inset_-4px_-4px_4px_-1px_rgba(0,0,0,0.15)] border border-gray-100 flex flex-col items-start justify-center mb-3">
              <h1 className='text-3xl font-semibold mb-2 text-red-700 dark:text-red-200'>₹ 1299</h1>
              <div className="flex flex-row gap-1 items-start text-red-600/70 dark:text-green-400">
                <small className='mt-0.5'><BiFoodMenu size={14} /></small>
                <div className='text-[11px]'>Special Menu 30 Days</div>
              </div>
              <p className='text-sm'>Current Plan</p>
            </div>
          </div>
          <div className="w-full px-6 py-4 rounded-md bg-green-50 dark:bg-neutral-800 shadow-[inset_-4px_-4px_4px_-1px_rgba(0,0,0,0.15)] border border-gray-100 flex flex-col items-start">
            <h1 className='text-lg font-semibold mb-1 text-green-700 dark:text-green-400'>Track Recent Order</h1>
            <ul className="flex flex-col md:flex-row flex-wrap text-[15px] text-slate-600 dark:text-gray-400 justify-between w-full">
              <li>Order No.: <span className='font-semibold text-slate-800 dark:text-slate-200'>#128902</span></li>
              <li>Date & Time: <span className='font-semibold text-slate-800 dark:text-slate-200'>12-Oct-2025  12:06 PM</span></li>
              <li>Status: <span className='font-semibold text-amber-600 dark:text-amber-200'>In Process</span></li>
            </ul>

            {/* Stepper */}
            {/* <div className='flex flex-col lg:flex-row w-full pt-5'>
              <div className="flex flex-col w-full">
                <div className='flex justify-center w-full mb-1'>
                  <div className="size-3 bg-blue-800 rounded-full relative z-2"></div>
                </div>
                <p className='text-[14px] text-center pt-1 text-gray-600'>Text Notation</p>
              </div>
              <div className="flex flex-col w-full">
                <div className={`flex justify-center w-full mb-1 relative before:z-1 before:absolute before:content-[''] before:h-0.5 before:w-full before:right-[50%] before:top-1.25 ${parseInt(stepperStage) >= 2 ? "before:bg-blue-600" : "before:bg-gray-300"}`}>
                  <div className="size-3 bg-blue-800 rounded-full relative z-2"></div>
                </div>
                <p className='text-[14px] text-center pt-1 text-gray-600'>Text Notation</p>
              </div>
              <div className="flex flex-col w-full">
                <div className={`flex justify-center w-full mb-1 relative before:z-1 before:absolute before:content-[''] before:h-0.5 before:w-full before:right-[50%] before:top-1.25 ${parseInt(stepperStage) >= 3 ? "before:bg-blue-600" : "before:bg-gray-300"}`}>
                  <div className="size-3 bg-blue-800 rounded-full relative z-2"></div>
                </div>
                <p className='text-[14px] text-center pt-1 text-gray-600'>Text Notation</p>
              </div>
              <div className="flex flex-col w-full">
                <div className={`flex justify-center w-full mb-1 relative before:z-1 before:absolute before:content-[''] before:h-0.5 before:w-full before:right-[50%] before:top-1.25 ${parseInt(stepperStage) >= 4 ? "before:bg-blue-600" : "before:bg-gray-300"}`}>
                  <div className="size-3 bg-blue-800 rounded-full relative z-2"></div>
                </div>
                <p className='text-[14px] text-center pt-1 text-gray-600'>Text Notation</p>
              </div>
            </div> */}
            <div className='flex flex-col md:flex-row w-full pt-5'>
              {steps.map((step, index) => {
                const stepNumber = step.number;
                const isActive = stepNumber <= parseInt(stepperStage);

                return (
                  <div key={stepNumber} className="flex items-center flex-row md:flex-col w-full h-10">
                    <div className={`flex h-full justify-center items-center w-5 md:w-full mb-0 md:mb-1 relative ${stepNumber > 1 ? `before:z-1 before:absolute before:content-[''] before:h-full before:w-0.5 md:before:h-0.5 md:before:w-full before:right-[45%] md:before:right-[50%] before:-top-5 md:before:top-1.25 ${isActive ? "before:bg-blue-500" : "before:bg-gray-300"
                        }` : ''
                      }`}>
                      <div className={`size-3 rounded-full relative z-2 ${isActive ? "bg-blue-800" : "bg-gray-300"
                        }`}></div>
                    </div>
                    <p className={`text-[14px] text-left w-full md:text-center pl-2 md:pl-0 pt-0 md:pt-1 ${isActive ? "text-gray-800 dark:text-white font-medium" : "text-gray-400 dark:text-white/40"
                      }`}>
                      {step.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[260px] px-6 py-4 rounded-md bg-cyan-50 dark:bg-neutral-800 shadow-[inset_-4px_-4px_4px_-1px_rgba(0,0,0,0.15)] border border-gray-100 flex flex-row items-center overflow-hidden">
          <HalfDonutWithTooltip/>
        </div>
      </div>

    </div>
  )
}

export default Dashboard
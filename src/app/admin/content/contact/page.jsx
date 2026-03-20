"use client"
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Button from '@/components/common/button'
import React, { useState, useRef } from 'react'
import { FaRegEdit, FaRegEye, FaRegEyeSlash, FaPlusSquare, FaFacebook, FaYoutube } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoCaretUp, IoCaretDown, IoGlobeOutline } from "react-icons/io5";
import { FiClock, FiInstagram } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { toast } from "react-hot-toast";

// Breadcrumb
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import CardHeading from '../../elements/CardHeading'


const ActionToolbar = ({ onDelete, onMoveUp, onMoveDown, showDelete = true, showMoveUp = true, showMoveDown = true }) => {
    const [isVisible, setIsVisible] = useState(true);
    return (
        <div className='flex bg-gray-50 transition-opacity duration-200 w-fit pt-0.5 pb-1 px-1 rounded-b-md border border-gray-300 shadow-[0_2px_4.7px_0_rgba(0,0,0,0.19)] mr-2 ms-auto gap-1'>
            {showDelete && (
                <div className="cursor-pointer" onClick={onDelete}>
                    <RiDeleteBin6Line size={18} className='text-red-600' />
                </div>
            )}
            <div className="cursor-pointer" onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? (
                    <FaRegEye size={18} className='text-[#E0AC00]' />
                ) : (
                    <FaRegEyeSlash size={18} className='text-[#E0AC00]' />
                )}
            </div>
            {showMoveUp && (
                <div className="cursor-pointer" onClick={onMoveUp}>
                    <IoCaretUp size={18} className='text-green-600' />
                </div>
            )}
            {showMoveDown && (
                <div className="cursor-pointer" onClick={onMoveDown}>
                    <IoCaretDown size={18} className='text-green-600' />
                </div>
            )}
        </div>
    );
};

const EyeToggle = ({ className = "" }) => {
    const [isVisible, setIsVisible] = useState(true);
    return (
        <div className={`cursor-pointer ${className}`} onClick={() => setIsVisible(!isVisible)}>
            {isVisible ? (
                <FaRegEye size={18} className="text-amber-400 group-hover:text-amber-600 bg-white" />
            ) : (
                <FaRegEyeSlash size={18} className="text-amber-400 group-hover:text-amber-600 bg-white" />
            )}
        </div>
    );
};

// This is for mobile number input
const ManageContact = () => {
    const [locations, setLocations] = useState([{ address: "", mapUrl: "" }]);
    const [cafeHours, setCafeHours] = useState([{ start: "00:00", end: "00:00" }]);
    const [mobileNumbers, setMobileNumbers] = useState([Array(10).fill("")]);
    const [emails, setEmails] = useState([""]);
    const [socialLinks, setSocialLinks] = useState({
        website: "",
        instagram: "",
        facebook: "",
        linkedin: "",
        twitter: "",
        youtube: ""
    });

    const [viewData, setViewData] = useState({
        locations: [
            { address: "Ekamra Kanan Road, near Chilika Fresh, Rental Colony, IRC Village, Nayapalli, Bhubaneswar Odisha 751011", mapUrl: "" },
            { address: "768, Beside Government Veterinary Hospital, Maharishi College Rd, Saheed Nagar, Bhubaneswar, Odisha 751007", mapUrl: "" }
        ],
        cafeHours: [{ start: "09:00", end: "22:00" }],
        mobileNumbers: [["8", "1", "4", "4", "7", "7", "4", "3", "4", "9"]],
        emails: ["scottishcafe.co.uk"],
        socialLinks: {
            website: "https://scottishcafe.co.uk",
            instagram: "thecaptainscafe.india",
            facebook: "thecaptainscafe.india",
            twitter: "thecaptainscafe.india",
            linkedin: "thecaptainscafe.india",
            youtube: "thecaptainscafe.india"
        }
    });

    const addItem = (type) => {
        if (type === 'location') setLocations([...locations, { address: "", mapUrl: "" }]);
        if (type === 'hour') setCafeHours([...cafeHours, { start: "00:00", end: "00:00" }]);
        if (type === 'mobile') setMobileNumbers([...mobileNumbers, Array(10).fill("")]);
        if (type === 'email') setEmails([...emails, ""]);
    };

    const removeItem = (type, index) => {
        if (type === 'location' && locations.length > 1) setLocations(locations.filter((_, i) => i !== index));
        if (type === 'hour' && cafeHours.length > 1) setCafeHours(cafeHours.filter((_, i) => i !== index));
        if (type === 'mobile' && mobileNumbers.length > 1) setMobileNumbers(mobileNumbers.filter((_, i) => i !== index));
        if (type === 'email' && emails.length > 1) setEmails(emails.filter((_, i) => i !== index));
    };

    const moveItem = (type, index, direction) => {
        const list = type === 'location' ? [...locations] : type === 'hour' ? [...cafeHours] : type === 'mobile' ? [...mobileNumbers] : [...emails];
        const setList = type === 'location' ? setLocations : type === 'hour' ? setCafeHours : type === 'mobile' ? setMobileNumbers : setEmails;

        const newIndex = direction === 'up' ? index - 1 : index + 1;
        if (newIndex >= 0 && newIndex < list.length) {
            [list[index], list[newIndex]] = [list[newIndex], list[index]];
            setList(list);
        }
    };

    const updateLocation = (index, field, value) => {
        const newLocations = [...locations];
        newLocations[index][field] = value;
        setLocations(newLocations);
    };

    const updateCafeHour = (index, field, value) => {
        const newHours = [...cafeHours];
        newHours[index][field] = value;
        setCafeHours(newHours);
    };

    const updateEmail = (index, value) => {
        const newEmails = [...emails];
        newEmails[index] = value;
        setEmails(newEmails);
    };

    const handleMobileInputChange = (entryIndex, digitIndex, value) => {
        if (value.length > 1) value = value.slice(-1);
        if (!/^\d*$/.test(value)) return;

        const newMobileNumbers = [...mobileNumbers];
        newMobileNumbers[entryIndex][digitIndex] = value;
        setMobileNumbers(newMobileNumbers);
    };

    const handleUpdate = (e) => {
        e?.preventDefault();
        setViewData({
            locations: [...locations],
            cafeHours: [...cafeHours],
            mobileNumbers: [...mobileNumbers],
            emails: [...emails],
            socialLinks: { ...socialLinks }
        });
        toast.success("Updated successfully!");
    };

    const handleEdit = (e) => {
        e?.preventDefault();
        setLocations([...viewData.locations]);
        setCafeHours([...viewData.cafeHours]);
        setMobileNumbers([...viewData.mobileNumbers]);
        setEmails([...viewData.emails]);
        setSocialLinks({ ...viewData.socialLinks });
    };

    const handleReset = (e) => {
        e?.preventDefault();
        setLocations([{ address: "", mapUrl: "" }]);
        setCafeHours([{ start: "00:00", end: "00:00" }]);
        setMobileNumbers([Array(10).fill("")]);
        setEmails([""]);
        setSocialLinks({
            website: "",
            instagram: "",
            facebook: "",
            linkedin: "",
            twitter: "",
            youtube: ""
        });
    };

    return (
        <>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/admin/content">Content</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Contact Us</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <div className='flex flex-col md:flex-row w-full mt-3'>
                <Card className="rounded-md gap-3 p-4 h-fit w-full md:w-[370px] mb-4">
                    <CardHeading title="Update" bottomLine="true" />
                    <form onSubmit={handleUpdate} className="space-y-2 w-full max-h-[calc(100vh-240px)] overflow-y-auto">
                        <div className="w-full space-y-4">
                            {locations.map((loc, index) => (
                                <div key={index} className="flex flex-col group">
                                    <div className="flex flex-row justify-between items-center mb-1">
                                        <Label className="text-[14px] text-gray-600 block font-medium mb-1 truncate">
                                            Location {locations.length > 1 && `#${index + 1}`} - <span className='italic font-light'>&#40;In Text&#41;</span>
                                        </Label>
                                        {index === 0 && <FaPlusSquare size={18} className='cursor-pointer text-blue-800' onClick={() => addItem('location')} />}
                                    </div>
                                    <div className='flex flex-col'>
                                        <textarea
                                            placeholder="Enter address"
                                            value={loc.address}
                                            onChange={(e) => updateLocation(index, 'address', e.target.value)}
                                            className="w-full min-h-[80px] p-2 border border-gray-300 rounded text-sm resize-none placeholder-gray-400 focus:outline-none"
                                        />
                                    </div>
                                    <Label className="text-[14px] text-gray-600 block font-medium mt-2 mb-1">Location {locations.length > 1 && `#${index + 1}`} - <span className='italic font-light'>&#40;Map URL&#41;</span></Label>
                                    <div className='flex flex-col'>
                                        <Input
                                            type="url"
                                            placeholder="Paste URL"
                                            value={loc.mapUrl}
                                            onChange={(e) => updateLocation(index, 'mapUrl', e.target.value)}
                                            className="w-full px-3 py-0.5 text-sm"
                                        />
                                        <ActionToolbar
                                            showDelete={locations.length > 1}
                                            onDelete={() => removeItem('location', index)}
                                            onMoveUp={() => moveItem('location', index, 'up')}
                                            onMoveDown={() => moveItem('location', index, 'down')}
                                            showMoveUp={index > 0}
                                            showMoveDown={index < locations.length - 1}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="w-full space-y-4">
                            <div className="flex flex-row justify-between items-center mb-1">
                                <Label className="text-[14px] text-gray-600 block font-medium mb-1">Café Hours</Label>
                                <FaPlusSquare size={18} className='cursor-pointer text-blue-800' onClick={() => addItem('hour')} />
                            </div>
                            {cafeHours.map((hour, index) => (
                                <div key={index} className="flex flex-col group">
                                    <div className="flex flex-row gap-2">
                                        <div className="w-full relative">
                                            <input
                                                type="time"
                                                className="absolute inset-0 w-full h-full opacity-0 z-10 cursor-pointer"
                                                aria-label="Select start time"
                                                value={hour.start}
                                                onChange={(e) => updateCafeHour(index, 'start', e.target.value)}
                                            />
                                            <div className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm flex items-center justify-between bg-white hover:bg-gray-50 cursor-pointer">
                                                <span className={`${hour.start !== "00:00" ? "text-black" : "text-gray-500"}`}>
                                                    {hour.start || "00:00"}
                                                </span>
                                                <FiClock className="text-gray-400 cursor-pointer" size={16} />
                                            </div>
                                        </div>
                                        <div className="w-full relative">
                                            <input
                                                type="time"
                                                className="absolute inset-0 w-full h-full opacity-0 z-10 cursor-pointer"
                                                aria-label="Select end time"
                                                value={hour.end}
                                                onChange={(e) => updateCafeHour(index, 'end', e.target.value)}
                                            />
                                            <div className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm flex items-center justify-between bg-white hover:bg-gray-50 cursor-pointer">
                                                <span className={`${hour.end !== "00:00" ? "text-black" : "text-gray-500"}`}>
                                                    {hour.end || "00:00"}
                                                </span>
                                                <FiClock className="text-gray-400 cursor-pointer" size={16} />
                                            </div>
                                        </div>
                                    </div>
                                    <ActionToolbar
                                        showDelete={cafeHours.length > 1}
                                        onDelete={() => removeItem('hour', index)}
                                        onMoveUp={() => moveItem('hour', index, 'up')}
                                        onMoveDown={() => moveItem('hour', index, 'down')}
                                        showMoveUp={index > 0}
                                        showMoveDown={index < cafeHours.length - 1}
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="w-full space-y-4">
                            <div className="flex flex-row justify-between items-center mb-1">
                                <Label className="text-[14px] text-gray-600 block font-medium mb-1">Mobile Number</Label>
                                <FaPlusSquare size={18} className='cursor-pointer text-blue-800' onClick={() => addItem('mobile')} />
                            </div>
                            {mobileNumbers.map((digits, entryIndex) => (
                                <div key={entryIndex} className="flex flex-col group">
                                    <div className="flex flex-row justify-between">
                                        {digits.map((digit, digitIndex) => (
                                            <Input
                                                key={digitIndex}
                                                type="number"
                                                placeholder="-"
                                                className="w-1/12 px-1.5 py-0.5 text-lg rounded-sm focus-visible:ring-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                                value={digit}
                                                onChange={(e) => handleMobileInputChange(entryIndex, digitIndex, e.target.value)}
                                            />
                                        ))}
                                    </div>
                                    <ActionToolbar
                                        showDelete={mobileNumbers.length > 1}
                                        onDelete={() => removeItem('mobile', entryIndex)}
                                        onMoveUp={() => moveItem('mobile', entryIndex, 'up')}
                                        onMoveDown={() => moveItem('mobile', entryIndex, 'down')}
                                        showMoveUp={entryIndex > 0}
                                        showMoveDown={entryIndex < mobileNumbers.length - 1}
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="w-full space-y-4">
                            <div className="flex flex-row justify-between items-center mb-1">
                                <Label className="text-[14px] text-gray-600 block font-medium mb-1">Email ID</Label>
                                <FaPlusSquare size={18} className='cursor-pointer text-blue-800' onClick={() => addItem('email')} />
                            </div>
                            {emails.map((email, index) => (
                                <div key={index} className="flex flex-col group">
                                    <Input
                                        type="email"
                                        placeholder="Enter Email"
                                        value={email}
                                        onChange={(e) => updateEmail(index, e.target.value)}
                                        className="w-full px-3 py-0.5 text-sm"
                                    />
                                    <ActionToolbar
                                        showDelete={emails.length > 1}
                                        onDelete={() => removeItem('email', index)}
                                        onMoveUp={() => moveItem('email', index, 'up')}
                                        onMoveDown={() => moveItem('email', index, 'down')}
                                        showMoveUp={index > 0}
                                        showMoveDown={index < emails.length - 1}
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="w-full">
                            <div className="flex flex-col mb-2">
                                <div className="flex flex-row justify-between items-center mb-1">
                                    <Label className="text-[14px] text-gray-600 block font-medium mb-1">Social Media Links</Label>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <div className="flex gap-2 items-center relative group">
                                        <IoGlobeOutline size={28} className='text-sky-600' />
                                        <Input
                                            type="url"
                                            placeholder="Website URL"
                                            className="w-full px-3 py-0.5 text-sm"
                                            value={socialLinks.website}
                                            onChange={(e) => setSocialLinks({ ...socialLinks, website: e.target.value })}
                                        />
                                        <EyeToggle className="absolute right-2" />
                                    </div>
                                    <div className="flex gap-2 items-center relative group">
                                        <svg width="0" height="0" className="absolute">
                                            <linearGradient id="instagram-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                                                <stop stopColor="#f09433" offset="0%" />
                                                <stop stopColor="#e6683c" offset="25%" />
                                                <stop stopColor="#dc2743" offset="50%" />
                                                <stop stopColor="#cc2366" offset="75%" />
                                                <stop stopColor="#bc1888" offset="100%" />
                                            </linearGradient>
                                        </svg>
                                        <FiInstagram size={28} style={{ stroke: "url(#instagram-gradient)" }} />
                                        <Input
                                            type="text"
                                            placeholder="Instagram"
                                            className="w-full px-3 py-0.5 text-sm"
                                            value={socialLinks.instagram}
                                            onChange={(e) => setSocialLinks({ ...socialLinks, instagram: e.target.value })}
                                        />
                                        <EyeToggle className="absolute right-2" />
                                    </div>
                                    <div className="flex gap-2 items-center relative group">
                                        <FaFacebook size={30} className='text-[#0060df]' />
                                        <Input
                                            type="text"
                                            placeholder="Facebook"
                                            className="w-full px-3 py-0.5 text-sm"
                                            value={socialLinks.facebook}
                                            onChange={(e) => setSocialLinks({ ...socialLinks, facebook: e.target.value })}
                                        />
                                        <EyeToggle className="absolute right-2" />
                                    </div>
                                    <div className="flex gap-2 items-center relative group">
                                        <AiOutlineLinkedin size={30} className='text-[#0077B5]' />
                                        <Input
                                            type="text"
                                            placeholder="LinkedIn"
                                            className="w-full px-3 py-0.5 text-sm"
                                            value={socialLinks.linkedin}
                                            onChange={(e) => setSocialLinks({ ...socialLinks, linkedin: e.target.value })}
                                        />
                                        <EyeToggle className="absolute right-2" />
                                    </div>
                                    <div className="flex gap-2 items-center relative group">
                                        <FaXTwitter size={28} className='text-black' />
                                        <Input
                                            type="text"
                                            placeholder="Twitter"
                                            className="w-full px-3 py-0.5 text-sm"
                                            value={socialLinks.twitter}
                                            onChange={(e) => setSocialLinks({ ...socialLinks, twitter: e.target.value })}
                                        />
                                        <EyeToggle className="absolute right-2" />
                                    </div>
                                    <div className="flex gap-2 items-center relative group">
                                        <FaYoutube size={28} className='text-red-600' />
                                        <Input
                                            type="text"
                                            placeholder="Youtube"
                                            className="w-full px-3 py-0.5 text-sm"
                                            value={socialLinks.youtube}
                                            onChange={(e) => setSocialLinks({ ...socialLinks, youtube: e.target.value })}
                                        />
                                        <EyeToggle className="absolute right-2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    {/* Reset and Update Buttons */}
                    <div className="flex gap-2">
                        <Button
                            variant='outline'
                            text="Reset"
                            type="button"
                            radius='md'
                            className="w-fit"
                            size='sm'
                            onClick={handleReset}
                        />
                        <Button
                            text="Update"
                            type="submit"
                            radius='md'
                            className="flex-1"
                            size='sm'
                            onClick={handleUpdate}
                        />
                    </div>
                </Card>

                {/* Right Side View area */}
                <Card className="rounded-md gap-1.5 p-4 w-full h-fit ml-0 md:ml-3">
                    <div className="flex">
                        <CardHeading title="View" bottomLine="false" />
                        <Button
                            text="EDIT"
                            className='ml-auto'
                            size='sm'
                            icon={<FaRegEdit />}
                            radius='sm'
                            iconPosition="left"
                            onClick={handleEdit}
                        />
                    </div>
                    <hr />
                    <div className="flex flex-col flex-wrap gap-y-3 py-2">
                        <div className="flex flex-col sm:flex-row">
                            <h2 className='text-gray-600 block font-medium text-md w-[220px] pb-0.5 sm:pb-0'>Location</h2>
                            <div className="flex flex-col w-full sm:w-[calc(100%-220px)] gap-2">
                                {viewData.locations.map((loc, i) => (
                                    <p key={i} className='text-gray-500 before:content-["-"] sm:before:content-[":"] before:pr-3 sm:before:pr-2 before:font-bold text-justify'>
                                        {loc.address || "No address provided"}
                                    </p>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:h-fit">
                            <div className="flex flex-col sm:flex-row w-full md:w-1/2 h-fit">
                                <h2 className='text-gray-600 block font-medium text-md w-[220px] pb-0.5 sm:pb-0 h-fit'>Working Hours</h2>
                                <div className="flex flex-col h-fit gap-2">
                                    <p className='text-gray-500 before:content-["-"] sm:before:content-[":"] before:pr-3 sm:before:pr-2 before:font-bold text-justify'>Monday - Saturday</p>
                                    {viewData.cafeHours.map((hour, i) => (
                                        <p key={i} className='text-gray-500 before:content-["-"] sm:before:content-[":"] before:pr-3 sm:before:pr-2 before:font-bold text-justify uppercase'>
                                            {hour.start} - {hour.end}
                                        </p>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row w-full md:w-1/2 h-fit">
                                <h2 className='text-gray-600 block font-medium text-md w-[220px] pb-0.5 sm:pb-0 h-fit'>Mobile Number</h2>
                                <div className="flex flex-col h-fit gap-2">
                                    {viewData.mobileNumbers.map((digits, i) => (
                                        <p key={i} className='text-gray-500 before:content-["-"] sm:before:content-[":"] before:pr-3 sm:before:pr-2 before:font-bold text-justify'>
                                            +91 {digits.join("")}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <hr />

                        <div className="flex flex-row flex-wrap gap-y-3 py-2">
                            <div className="flex flex-col sm:flex-row w-full">
                                <h2 className='text-gray-600 block font-medium text-md w-[220px] pb-0.5 sm:pb-0'>Website</h2>
                                <p className='text-gray-500 before:content-["-"] sm:before:content-[":"] before:pr-3 sm:before:pr-2 before:font-bold text-justify'>{viewData.socialLinks.website || "-"}</p>
                            </div>
                            <div className="flex flex-col sm:flex-row w-full">
                                <h2 className='text-gray-600 block font-medium text-md w-[220px] pb-0.5 sm:pb-0'>Instagram</h2>
                                <p className='text-gray-500 before:content-["-"] sm:before:content-[":"] before:pr-3 sm:before:pr-2 before:font-bold text-justify'><span className="cursor-pointer text-gray-300">https://instagram.com/</span>{viewData.socialLinks.instagram}</p>
                            </div>
                            <div className="flex flex-col sm:flex-row w-full">
                                <h2 className='text-gray-600 block font-medium text-md w-[220px] pb-0.5 sm:pb-0'>Facebook</h2>
                                <p className='text-gray-500 before:content-["-"] sm:before:content-[":"] before:pr-3 sm:before:pr-2 before:font-bold text-justify'><span className="cursor-pointer text-gray-300">https://facebook.com/</span>{viewData.socialLinks.facebook}</p>
                            </div>
                            <div className="flex flex-col sm:flex-row w-full">
                                <h2 className='text-gray-600 block font-medium text-md w-[220px] pb-0.5 sm:pb-0'>Twitter</h2>
                                <p className='text-gray-500 before:content-["-"] sm:before:content-[":"] before:pr-3 sm:before:pr-2 before:font-bold text-justify'><span className="cursor-pointer text-gray-300">https://twitter.com/</span>{viewData.socialLinks.twitter}</p>
                            </div>
                            <div className="flex flex-col sm:flex-row w-full">
                                <h2 className='text-gray-600 block font-medium text-md w-[220px] pb-0.5 sm:pb-0'>LinkedIn</h2>
                                <p className='text-gray-500 before:content-["-"] sm:before:content-[":"] before:pr-3 sm:before:pr-2 before:font-bold text-justify'><span className="cursor-pointer text-gray-300">https://linkedin.com/</span>{viewData.socialLinks.linkedin}</p>
                            </div>
                            <div className="flex flex-col sm:flex-row w-full">
                                <h2 className='text-gray-600 block font-medium text-md w-[220px] pb-0.5 sm:pb-0'>Youtube</h2>
                                <p className='text-gray-500 before:content-["-"] sm:before:content-[":"] before:pr-3 sm:before:pr-2 before:font-bold text-justify'><span className="cursor-pointer text-gray-300">https://youtube.com/</span>{viewData.socialLinks.youtube}</p>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </>
    )
}

export default ManageContact;

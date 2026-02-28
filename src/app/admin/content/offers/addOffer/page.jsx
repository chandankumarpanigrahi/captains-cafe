"use client"
import React, { useState } from 'react'
import { Editor } from 'primereact/editor';
import { toast } from "react-hot-toast";
import { FiPlusSquare } from "react-icons/fi";
import { GoPlus, GoX } from "react-icons/go";
import { MdOutlineEdit, MdOutlineDelete } from "react-icons/md";

// Breadcrumb
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import CardHeading from '@/app/admin/elements/CardHeading'
import { Card } from "@/components/ui/card"
import Button from '@/components/common/button'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const AddNewOffer = () => {
    const [editorText, setEditorText] = useState('');

    // FAQ state
    const [question, setQuestion] = useState('');
    const [response, setResponse] = useState('');
    const [faqs, setFaqs] = useState([
        { id: 1, question: 'Will this offer run every Friday indefinitely?', response: 'Yes, the offer runs every Friday until further notice.' },
        { id: 2, question: 'Can I avail this offer for online delivery on Fridays?', response: 'Yes, the offer is valid for both dine-in and online orders.' },
        { id: 3, question: 'Is there a limit on how many discounted items I can order?', response: 'You can order up to 5 discounted items per visit.' },
        { id: 4, question: 'Are gluten-free or vegan bakery options included in the discount?', response: 'Yes, all bakery items including gluten-free and vegan options are included.' },
    ]);
    const [expandedFaqId, setExpandedFaqId] = useState(null);
    const [editingFaqId, setEditingFaqId] = useState(null);

    const handleAddFaq = () => {
        if (!question.trim()) { toast.error("Please enter a question"); return; }
        if (!response.trim()) { toast.error("Please enter a response"); return; }
        if (editingFaqId !== null) {
            // Save edit
            setFaqs(faqs.map(f => f.id === editingFaqId ? { ...f, question: question.trim(), response: response.trim() } : f));
            setEditingFaqId(null);
            toast.success("FAQ updated successfully!");
        } else {
            setFaqs([...faqs, { id: Date.now(), question: question.trim(), response: response.trim() }]);
            toast.success("FAQ added successfully!");
        }
        setQuestion('');
        setResponse('');
    };

    const handleDeleteFaq = (id) => {
        setFaqs(faqs.filter(f => f.id !== id));
        if (expandedFaqId === id) setExpandedFaqId(null);
        if (editingFaqId === id) { setEditingFaqId(null); setQuestion(''); setResponse(''); }
        toast.success("FAQ deleted!");
    };

    const handleEditFaq = (faq) => {
        setEditingFaqId(faq.id);
        setQuestion(faq.question);
        setResponse(faq.response);
        setExpandedFaqId(null);
    };

    const handleResetFaq = () => {
        setQuestion('');
        setResponse('');
    };

    const handleSubmit = () => {
        toast.success("Offer submitted successfully!");
    };

    const handleReset = () => {
        setEditorText('');
        toast.success("Form reset successfully!");
    };

    return (
        <div className='w-full'>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/admin/content">Content</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/admin/content/offers">Offers</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Add New Offer</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className='flex flex-col md:flex-row w-full mt-3 gap-4'>

                {/* Left Column */}
                <Card className="rounded-md gap-3 p-4 h-fit w-full flex flex-col">

                    {/* Header */}
                    <div className="flex flex-row items-center w-full">
                        <CardHeading title="Add New Offer" bottomLine="false" />
                        <Button text="Cancel" variant='outline' className='ml-auto' size='sm' radius='sm' link="/admin/content/offers" />
                    </div>
                    <hr className='mb-1' />

                    {/* Card Details */}
                    <h3 className="text-sm font-semibold text-gray-800">Card Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4 w-full">
                        <div className="space-y-1">
                            <Label className="text-[13px] text-gray-600 font-medium">Offer Name</Label>
                            <Input placeholder="Enter Name" className="w-full text-sm shadow-sm" />
                        </div>
                        <div className="space-y-1">
                            <Label className="text-[13px] text-gray-600 font-medium">Upload Thumbnail</Label>
                            <input type="file" className="w-full text-sm border border-gray-200 rounded-md px-2 py-1.5 bg-white cursor-pointer" />
                        </div>
                        <div className="space-y-1">
                            <Label className="text-[13px] text-gray-600 font-medium">Brand Logo</Label>
                            <input type="file" className="w-full text-sm border border-gray-200 rounded-md px-2 py-1.5 bg-white cursor-pointer" />
                        </div>
                    </div>

                    {/* Offer Details */}
                    <h3 className="text-sm font-semibold text-gray-800 mt-2">Offer Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4 w-full">
                        <div className="space-y-1">
                            <Label className="text-[13px] text-gray-600 font-medium">Header Text</Label>
                            <Input placeholder="Enter Text" className="w-full text-sm shadow-sm" />
                        </div>
                        <div className="space-y-1">
                            <Label className="text-[13px] text-gray-600 font-medium">Banner</Label>
                            <input type="file" className="w-full text-sm border border-gray-200 rounded-md px-2 py-1.5 bg-white cursor-pointer" />
                        </div>
                        <div className="space-y-1">
                            <Label className="text-[13px] text-gray-600 font-medium">Additional Media</Label>
                            <input type="file" className="w-full text-sm border border-gray-200 rounded-md px-2 py-1.5 bg-white cursor-pointer" />
                        </div>
                    </div>

                    {/* Rich Text Editor */}
                    <div className="mt-2">
                        <Editor
                            value={editorText}
                            onTextChange={(e) => setEditorText(e.htmlValue)}
                            style={{ minHeight: '220px' }}
                        />
                    </div>

                    {/* Bottom buttons */}
                    <div className="flex flex-row justify-center gap-3 mt-2">
                        <Button text="RESET" variant='outline' size='sm' radius='sm' onClick={handleReset} />
                        <Button text="SUBMIT" size='sm' radius='sm' onClick={handleSubmit} />
                    </div>
                </Card>

                {/* Right Column — Manage FAQs */}
                <Card className="rounded-md gap-3 p-4 h-fit w-full md:w-[340px] shrink-0 flex flex-col">

                    {/* Header */}
                    <div className="flex flex-row items-center justify-between">
                        <CardHeading title="Manage FAQs" bottomLine="false" />
                    </div>

                    {/* Question textarea */}
                    <div className="space-y-1">
                        <Label className="text-[13px] text-gray-600 font-medium">Question</Label>
                        <textarea
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            placeholder="Enter Full Question"
                            rows={3}
                            className="w-full text-sm border border-gray-200 rounded-md px-3 py-2 resize-y focus:outline-none focus:ring-1 focus:ring-blue-400"
                        />
                    </div>

                    {/* Response textarea */}
                    <div className="space-y-1">
                        <Label className="text-[13px] text-gray-600 font-medium">Response</Label>
                        <textarea
                            value={response}
                            onChange={(e) => setResponse(e.target.value)}
                            placeholder="Enter Response"
                            rows={3}
                            className="w-full text-sm border border-gray-200 rounded-md px-3 py-2 resize-y focus:outline-none focus:ring-1 focus:ring-blue-400"
                        />
                    </div>

                    {/* FAQ action buttons */}
                    <div className="flex gap-2">
                        <button
                            onClick={handleResetFaq}
                            className="cursor-pointer flex-1 px-3 py-1.5 text-sm font-medium border border-gray-300 rounded-sm text-gray-700 bg-white hover:bg-gray-50 transition-all"
                        >
                            RESET
                        </button>
                        <button
                            onClick={handleAddFaq}
                            className="cursor-pointer flex-1 px-3 py-1.5 text-sm font-medium rounded-sm text-white bg-blue-900 hover:bg-blue-800 transition-all"
                        >
                            {editingFaqId !== null ? 'UPDATE' : 'ADD'}
                        </button>
                    </div>

                    {/* FAQ List */}
                    <div className="flex flex-col divide-y divide-gray-100 mt-1">
                        {faqs.map((faq) => {
                            const isOpen = expandedFaqId === faq.id;
                            return (
                                <div key={faq.id} className="py-2.5">
                                    {/* Row: question + toggle icon */}
                                    <div className="flex items-start justify-between gap-2">
                                        <p className="text-sm text-gray-700 leading-snug">{faq.question}</p>
                                        <button
                                            className="shrink-0 text-amber-600 hover:text-amber-700 cursor-pointer transition-all mt-0.5"
                                            onClick={() => setExpandedFaqId(isOpen ? null : faq.id)}
                                            title={isOpen ? "Collapse" : "Expand"}
                                        >
                                            {isOpen ? <GoX size={20} /> : <GoPlus size={20} />}
                                        </button>
                                    </div>

                                    {/* Expanded panel */}
                                    {isOpen && (
                                        <div className="mt-2 pl-1 flex flex-col gap-2">
                                            <p className="text-sm mb-2 text-gray-500 leading-snug">{faq.response}</p>
                                            <div className="flex justify-end gap-2">
                                                <button
                                                    onClick={() => handleEditFaq(faq)}
                                                    className="flex items-center cursor-pointer gap-1 px-2 py-0.5 text-xs font-medium rounded-sm border border-green-300 text-green-700 bg-green-50 hover:bg-green-100 transition-all"
                                                >
                                                    <MdOutlineEdit size={13} /> Edit
                                                </button>
                                                <button
                                                    onClick={() => handleDeleteFaq(faq.id)}
                                                    className="flex items-center cursor-pointer gap-1 px-2 py-0.5 text-xs font-medium rounded-sm border border-red-300 text-red-700 bg-red-50 hover:bg-red-100 transition-all"
                                                >
                                                    <MdOutlineDelete size={13} /> Delete
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                </Card>

            </div>
        </div>
    )
}

export default AddNewOffer
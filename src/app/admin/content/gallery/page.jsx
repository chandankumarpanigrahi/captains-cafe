"use client"
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Button from '@/components/common/button'
import React, { useState, useRef, useEffect } from 'react'
import toast from 'react-hot-toast';

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
import DragDropSortable from './draggable'

import image1 from '@/assets/images/cafe/img_1.jpg'
import image2 from '@/assets/images/cafe/img_2.jpg'
import image3 from '@/assets/images/cafe/img_3.jpg'
import image4 from '@/assets/images/cafe/img_4.jpg'
import image5 from '@/assets/images/cafe/img_5.jpg'
import image6 from '@/assets/images/cafe/img_6.jpg'
import image7 from '@/assets/images/cafe/img_7.jpg'
import image8 from '@/assets/images/cafe/img_8.jpg'
import image9 from '@/assets/images/cafe/img_9.jpg'

const initialItems = [
    { id: '1', image: image1, alt: 'Image 1', caption: "Caption 1" },
    { id: '2', image: image2, alt: 'Image 2', caption: "Caption 2" },
    { id: '3', image: image3, alt: 'Image 3', caption: "Caption 3" },
    { id: '4', image: image4, alt: 'Image 4', caption: "Caption 4" },
    { id: '5', image: image5, alt: 'Image 5', caption: "Caption 5" },
    { id: '6', image: image6, alt: 'Image 6', caption: "Caption 6" },
    { id: '7', image: image7, alt: 'Image 7', caption: "Caption 7" },
    { id: '8', image: image8, alt: 'Image 8', caption: "Caption 8" },
    { id: '9', image: image9, alt: 'Image 9', caption: "Caption 9" },
];

const AdminGallery = () => {
    const [items, setItems] = useState(initialItems);

    useEffect(() => {
        const savedItems = localStorage.getItem('galleryItems');
        if (savedItems) {
            const parsedItems = JSON.parse(savedItems);
            const rehydratedItems = parsedItems.map(item => {
                const initialItem = initialItems.find(i => i.id === item.id);
                return {
                    ...item,
                    image: initialItem ? initialItem.image : item.image
                };
            });
            setItems(rehydratedItems);
        }
    }, []);

    const handleSave = () => {
        const itemsToSave = items.map(({ id, alt, caption }) => ({ id, alt, caption }));
        localStorage.setItem('galleryItems', JSON.stringify(itemsToSave));
        toast.success("Gallery arrangement saved!");
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
                        <BreadcrumbPage>Gallery</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <div className='flex flex-col md:flex-row w-full mt-3'>
                <Card className="rounded-md gap-3 p-4 h-fit w-full md:w-[370px] mb-4">
                    <CardHeading title="Add" bottomLine="true" />
                    <form className="space-y-2 w-full max-h-[calc(100vh-240px)] overflow-y-auto">
                        <div className="w-full">
                            <Label className="text-[14px] text-gray-600 block font-medium mb-1">Upload Image</Label>
                            <Input
                                type="file"
                                placeholder="Upload File"
                                className="w-full px-3 py-0.5 text-sm"
                            />
                        </div>
                        <div className="w-full">
                            <Label className="text-[14px] text-gray-600 block font-medium">
                                Image Caption
                            </Label>
                            <textarea
                                placeholder="Enter text"
                                className="w-full min-h-[80px] p-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent resize-none placeholder-gray-400"
                            />
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
                        />
                        <Button
                            text="Submit"
                            type="submit"
                            radius='md'
                            className="flex-1"
                            size='sm'
                        />
                    </div>
                </Card>
                <Card className="rounded-md gap-1.5 p-4 w-full h-fit ml-0 md:ml-3">
                    <div className="flex">
                        <CardHeading title="View" bottomLine="false" />
                        <Button
                            text="Save"
                            className='ml-auto'
                            size='sm'
                            radius='sm'
                            onClick={handleSave}
                        />
                    </div>
                    <hr />
                    <div className="flex flex-col flex-wrap gap-y-2 py-2">
                        <DragDropSortable items={items} setItems={setItems} />
                    </div>

                </Card>
            </div>
        </>
    )
}

export default AdminGallery
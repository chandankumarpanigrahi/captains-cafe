import React, { useState } from 'react';
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    DragOverlay,
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    rectSortingStrategy,
} from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { BsArrowsMove } from "react-icons/bs";
import { FiEdit, FiTrash } from "react-icons/fi";

// Images
// Images
import Image from 'next/image';

function SortableItem({ id, children }) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            className={`relative rounded-lg overflow-hidden group shadow-lg cursor-move bg-gray-200 transition-all duration-200 hover:scale-[1.02] hover:shadow-lg ${isDragging ? 'opacity-30' : 'opacity-100'
                }`}
        >
            {children}
        </div>
    );
}

// Drag Overlay Item
function DragOverlayItem({ image, alt }) {
    return (
        <div
            className="relative rounded-lg overflow-hidden shadow-lg cursor-grabbing bg-gray-200"
        >
            <Image
                src={image}
                alt={alt}
                className='w-full h-full object-cover'
            />
            <div className='absolute inset-0 flex items-center justify-center bg-black/50'>
                <BsArrowsMove size={36} className='text-white ' />
            </div>
        </div>
    );
}

// Main Component
export default function LightDragDropGallery({ items, setItems }) {
    const [activeId, setActiveId] = useState(null);
    const activeItem = items.find(item => item.id === activeId);

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 5,
            },
        }),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    function handleDragStart(event) {
        setActiveId(event.active.id);
    }

    function handleDragEnd(event) {
        const { active, over } = event;
        setActiveId(null);

        if (active.id !== over.id) {
            setItems((items) => {
                const oldIndex = items.findIndex((item) => item.id === active.id);
                const newIndex = items.findIndex((item) => item.id === over.id);
                return arrayMove(items, oldIndex, newIndex);
            });
        }
    }

    return (
        <div className="">
            <div className="">

                <DndContext
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                >
                    <SortableContext
                        items={items.map(item => item.id)}
                        strategy={rectSortingStrategy}
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-3">
                            {items.map((item) => (
                                <SortableItem
                                    key={item.id}
                                    id={item.id}
                                    className='relative'
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.alt}
                                        className='w-full h-full object-cover'
                                    />
                                    <div className='absolute inset-0 flex flex-col items-center justify-center bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
                                        <div className='absolute top-2 right-2 flex gap-2'>
                                            <button
                                                className='p-1.5 bg-white rounded-full text-black hover:bg-gray-100 transition-colors'
                                                onPointerDown={(e) => e.stopPropagation()}
                                                onClick={() => console.log('Edit', item.id)}
                                            >
                                                <FiEdit size={14} />
                                            </button>
                                            <button
                                                className='p-1.5 bg-white rounded-full text-red-500 hover:bg-red-50 transition-colors'
                                                onPointerDown={(e) => e.stopPropagation()}
                                                onClick={() => console.log('Delete', item.id)}
                                            >
                                                <FiTrash size={14} />
                                            </button>
                                        </div>
                                        <BsArrowsMove size={36} className='text-white mb-5' />
                                    </div>
                                    <p className='absolute bottom-0 w-full flex flex-col items-center justify-end p-2 bg-black/70 text-white mt-6'>{item.caption}</p>
                                </SortableItem>
                            ))}
                        </div>
                    </SortableContext>

                    <DragOverlay>
                        {activeId ? (
                            <DragOverlayItem
                                image={activeItem.image}
                                alt={activeItem.alt}
                            />
                        ) : null}
                    </DragOverlay>
                </DndContext>

            </div>
        </div>
    );
}
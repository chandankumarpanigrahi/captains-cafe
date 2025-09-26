"use client";
import React from "react";
import { useDropzone } from "react-dropzone";
import { Card } from "@/components/ui/card";

export default function Dropzone({ onFiles }) {
    const { getRootProps, getInputProps, acceptedFiles, isDragActive } =
        useDropzone({
            accept: { "image/*": [] }, // accepts images only; adjust as needed
            onDrop: (files) => {
                if (onFiles) onFiles(files); // callback
            },
        });

    return (
        <Card
            {...getRootProps()}
            className={`w-full p-6 border-2 border-dashed rounded-2xl cursor-pointer transition-colors 
        ${isDragActive
                    ? "border-gray-500 bg-gray-50"
                    : "border-gray-300 hover:border-gray-400"
                }`}
        >
            <input {...getInputProps()} />
            <div className="flex flex-col items-center justify-center gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16V4m0 0l-4 4m4-4l4 4M17 8v12m0 0l-4-4m4 4l4-4"
                    />
                </svg>
                <p className="text-center text-sm text-gray-500">
                    {isDragActive
                        ? "Drop files here..."
                        : "Drag & drop files here, or click to select"}
                </p>
            </div>

            {acceptedFiles.length > 0 && (
                <div className="mt-4 flex flex-col items-center gap-2">
                    <h4 className="text-sm font-medium text-gray-700">Selected files:</h4>
                    <ul className="text-sm text-gray-500 list-disc list-inside">
                        {acceptedFiles.map((file) => (
                            <li key={file.path || file.name}>
                                {file.name} – {Math.round(file.size / 1024)} KB
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </Card>
    );
}

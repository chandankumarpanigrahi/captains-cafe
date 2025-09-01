"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function MenuPage() {
    const params = useParams();
    console.log("params (client):", params);

    return (
        <div className="h-screen container mx-auto">
            <div className="flex flex-row w-full">
                <h2 className="text-xl font-bold">Menu: {params.menu}</h2>
                <Link className="ml-auto text-blue-600 underline" href="/test">
                    Back
                </Link>
            </div>
            <p className="mt-4">You selected {params.menu}</p>
        </div>
    );
}

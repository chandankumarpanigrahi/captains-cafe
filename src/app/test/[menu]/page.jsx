"use client";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";

export default function MenuPage() {
    const params = useParams(); // from [menu] folder → e.g. "menu1"
    const searchParams = useSearchParams(); // query string
    const menuName = searchParams.get("name"); // "Regular Menu"

    return (
        <div className="h-screen container mx-auto">
            <div className="flex flex-row w-full">
                <h2 className="text-xl font-bold">Menu: {params.menu}</h2>
                <Link className="ml-auto text-blue-600 underline" href="/test">
                    Back
                </Link>
            </div>
            <p className="mt-4">
                You selected: <span className="font-semibold">{menuName}</span>
            </p>
        </div>
    );
}

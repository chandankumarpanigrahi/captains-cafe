"use client";
import { useState } from "react";

export default function TestForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "", // ✅ include message in state
    });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Submitting...");

        try {
            const res = await fetch("https://sheetdb.io/api/v1/zj8ybabodwpc1", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization:
                        "Bearer 3wjadcyn70bj4utfvm0hp3sku98g2b2pa3yq4n7m",
                },
                body: JSON.stringify({
                    data: [formData],
                }),
            });

            if (res.ok) {
                setStatus("✅ Data submitted successfully!");
                setFormData({ name: "", email: "", message: "" }); // ✅ reset all fields
            } else {
                const errorData = await res.json();
                setStatus("❌ Error: " + (errorData?.error || res.statusText));
            }
        } catch (error) {
            setStatus("❌ Something went wrong. Please try again.");
        }
    };

    return (
        <div className="p-4 max-w-md mx-auto border rounded-lg shadow bg-white">
            <h2 className="text-xl font-bold mb-4">Submit Form</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border px-3 py-2 rounded"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border px-3 py-2 rounded"
                />
                <textarea
                    name="message" // ✅ important
                    placeholder="Enter Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full border px-3 py-2 rounded"
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Submit
                </button>
            </form>
            {status && <p className="mt-3 text-sm">{status}</p>}
        </div>
    );
}

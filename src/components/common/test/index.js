"use client";
import { useState } from "react";

export default function AdvancedForm() {
    const [formData, setFormData] = useState({
        fullName: "",
        username: "",
        email: "",
        password: "",
        phone: "",
        age: "",
        dob: "",
        time: "",
        color: "#000000",
        website: "",
        bio: "",
        gender: "",
        country: "",
        skills: [],
        newsletter: false,
        terms: false,
        satisfaction: 5,
        resume: null,
        profilePic: null,
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    // handle input change
    const handleChange = (e) => {
        const { name, type, value, checked, files } = e.target;

        if (type === "checkbox" && name === "skills") {
            setFormData((prev) => {
                if (checked) {
                    return { ...prev, skills: [...prev.skills, value] };
                } else {
                    return { ...prev, skills: prev.skills.filter((s) => s !== value) };
                }
            });
        } else if (type === "checkbox") {
            setFormData({ ...formData, [name]: checked });
        } else if (type === "file") {
            setFormData({ ...formData, [name]: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    // reset form
    const resetForm = () => {
        setFormData({
            fullName: "",
            username: "",
            email: "",
            password: "",
            phone: "",
            age: "",
            dob: "",
            time: "",
            color: "#000000",
            website: "",
            bio: "",
            gender: "",
            country: "",
            skills: [],
            newsletter: false,
            terms: false,
            satisfaction: 5,
            resume: null,
            profilePic: null,
        });
    };

    // submit form to SheetDB
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(false);

        try {
            const res = await fetch("https://sheetdb.io/api/v1/zj8ybabodwpc1", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer 3wjadcyn70bj4utfvm0hp3sku98g2b2pa3yq4n7m",
                },
                body: JSON.stringify({ data: [formData] }),
            });

            if (res.ok) {
                setSuccess(true);
                setLoading(false);

                // Reset form after 3 seconds
                setTimeout(() => {
                    resetForm();
                    setSuccess(false);
                }, 3000);
            } else {
                setLoading(false);
                alert("❌ Error submitting form");
            }
        } catch (error) {
            console.error(error);
            setLoading(false);
            alert("⚠️ Something went wrong");
        }
    };

    return (
        <div className="w-full">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
                <form onSubmit={handleSubmit} className="p-8 space-y-8">
                    {/* --- FORM FIELDS --- */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Personal Information Section */}
                        <div className="md:col-span-2">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Personal Information</h3>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                            <input
                                type="text"
                                name="fullName"
                                required
                                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                value={formData.fullName}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Username *</label>
                            <input
                                type="text"
                                name="username"
                                required
                                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                value={formData.username}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                            <input
                                type="email"
                                name="email"
                                required
                                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password *</label>
                            <input
                                type="password"
                                name="password"
                                required
                                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                            <input
                                type="number"
                                name="age"
                                min="1"
                                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                value={formData.age}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                            <input
                                type="date"
                                name="dob"
                                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                value={formData.dob}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                            <input
                                type="time"
                                name="time"
                                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                value={formData.time}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Favorite Color</label>
                            <div className="flex items-center">
                                <input
                                    type="color"
                                    name="color"
                                    className="w-10 h-10 rounded border border-gray-300 cursor-pointer"
                                    value={formData.color}
                                    onChange={handleChange}
                                />
                                <span className="ml-3 text-gray-600">{formData.color}</span>
                            </div>
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
                            <input
                                type="url"
                                name="website"
                                placeholder="https://example.com"
                                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                value={formData.website}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                            <textarea
                                name="bio"
                                rows="3"
                                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                value={formData.bio}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        {/* Additional Details Section */}
                        <div className="md:col-span-2 mt-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Additional Details</h3>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                            <div className="space-y-2">
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Male"
                                        checked={formData.gender === "Male"}
                                        onChange={handleChange}
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                                    />
                                    <span className="ml-2 text-gray-700">Male</span>
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Female"
                                        checked={formData.gender === "Female"}
                                        onChange={handleChange}
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                                    />
                                    <span className="ml-2 text-gray-700">Female</span>
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Other"
                                        checked={formData.gender === "Other"}
                                        onChange={handleChange}
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                                    />
                                    <span className="ml-2 text-gray-700">Other</span>
                                </label>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                            <select
                                name="country"
                                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                value={formData.country}
                                onChange={handleChange}
                            >
                                <option value="">Select Country</option>
                                <option value="India">India</option>
                                <option value="USA">USA</option>
                                <option value="Netherlands">Netherlands</option>
                            </select>
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Skills</label>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                                <label className="flex items-center bg-gray-50 p-3 rounded-lg">
                                    <input
                                        type="checkbox"
                                        name="skills"
                                        value="HTML"
                                        checked={formData.skills.includes("HTML")}
                                        onChange={handleChange}
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                                    />
                                    <span className="ml-2 text-gray-700">HTML</span>
                                </label>
                                <label className="flex items-center bg-gray-50 p-3 rounded-lg">
                                    <input
                                        type="checkbox"
                                        name="skills"
                                        value="CSS"
                                        checked={formData.skills.includes("CSS")}
                                        onChange={handleChange}
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                                    />
                                    <span className="ml-2 text-gray-700">CSS</span>
                                </label>
                                <label className="flex items-center bg-gray-50 p-3 rounded-lg">
                                    <input
                                        type="checkbox"
                                        name="skills"
                                        value="JS"
                                        checked={formData.skills.includes("JS")}
                                        onChange={handleChange}
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                                    />
                                    <span className="ml-2 text-gray-700">JavaScript</span>
                                </label>
                            </div>
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Satisfaction Level</label>
                            <div className="space-y-2">
                                <input
                                    type="range"
                                    min="1"
                                    max="10"
                                    name="satisfaction"
                                    value={formData.satisfaction}
                                    onChange={handleChange}
                                    className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer"
                                />
                                <div className="flex justify-between text-sm text-gray-500">
                                    <span>1 (Low)</span>
                                    <span className="font-medium text-blue-600">{formData.satisfaction}</span>
                                    <span>10 (High)</span>
                                </div>
                            </div>
                        </div>
                        <div className="md:col-span-2">
                            <label className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input
                                        type="checkbox"
                                        name="terms"
                                        required
                                        checked={formData.terms}
                                        onChange={handleChange}
                                        className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                    />
                                </div>
                                <span className="ml-2 text-sm text-gray-700">
                                    I accept the{" "}
                                    <a href="#" className="text-blue-600 hover:text-blue-500">
                                        Terms and Conditions
                                    </a>
                                </span>
                            </label>
                        </div>
                    </div>

                    <div className="pt-4">
                        {loading ? (
                            <div className="w-full flex justify-center">
                                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-600"></div>
                            </div>
                        ) : success ? (
                            <div className="w-full text-center bg-green-100 text-green-700 py-3.5 px-4 rounded-lg font-medium shadow-md">
                                ✅ Form submitted successfully!
                            </div>
                        ) : (
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3.5 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition shadow-md hover:shadow-lg"
                            >
                                Submit Form
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}

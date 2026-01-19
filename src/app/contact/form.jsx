"use client";
import { useState, useEffect } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        country: '',
        company: '',
        service: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');
    const [showMessage, setShowMessage] = useState(false);

    // Auto-hide message after 5 seconds
    useEffect(() => {
        if (showMessage) {
            const timer = setTimeout(() => {
                setShowMessage(false);
                setSubmitMessage('');
            }, 3000); // Hide after 3 seconds

            return () => clearTimeout(timer);
        }
    }, [showMessage]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage('');
        setShowMessage(false);

        if (!formData.name || !formData.email) {
            setSubmitMessage('Please fill in required fields (Name and Email)');
            setShowMessage(true);
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await fetch('/api/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (result.success) {
                setSubmitMessage('✅ Form submitted successfully!');
                setShowMessage(true);
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    country: '',
                    company: '',
                    service: '',
                    message: ''
                });
            } else {
                setSubmitMessage('❌ Error: ' + (result.error || 'Failed to submit'));
                setShowMessage(true);
            }
        } catch (error) {
            setSubmitMessage('❌ Network error. Please try again.');
            setShowMessage(true);
            console.error('Submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    // Close message manually
    const closeMessage = () => {
        setShowMessage(false);
        setSubmitMessage('');
    };

    return (
        <form onSubmit={handleSubmit} className="w-full lg:w-1/2 flex flex-wrap gap-y-6 text-white">
            {/* Name Field */}
            <div className="w-full md:w-1/2 p-0 md:pr-3">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-amber-50 py-2 focus:outline-none"
                />
            </div>

            {/* Email Field */}
            <div className="w-full md:w-1/2 p-0 md:pl-3">
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-amber-50 py-2 focus:outline-none"
                />
            </div>

            {/* Phone Field */}
            <div className="w-full md:w-1/2 p-0 md:pr-3">
                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-amber-50 py-2 focus:outline-none"
                />
            </div>

            {/* Country Field */}
            <div className="w-full md:w-1/2 p-0 md:pl-3">
                <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-amber-50 py-2 focus:outline-none"
                >
                    <option className='text-gray-700' value="">Country</option>
                    <option className='text-gray-700' value="India">India</option>
                    <option className='text-gray-700' value="USA">USA</option>
                    <option className='text-gray-700' value="UK">UK</option>
                </select>
            </div>

            {/* Company Field */}
            <div className="w-full md:w-1/2 p-0 md:pr-3">
                <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-amber-50 py-2 focus:outline-none"
                />
            </div>

            {/* Service Field */}
            <div className="w-full md:w-1/2 p-0 md:pl-3">
                <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-amber-50 py-2 focus:outline-none"
                >
                    <option className='text-gray-700' value="">Interested in</option>
                    <option className='text-gray-700' value="Cafe">Cafe</option>
                    <option className='text-gray-700' value="Catering">Catering</option>
                    <option className='text-gray-700' value="Bakery">Bakery</option>
                    <option className='text-gray-700' value="Other">Other</option>
                </select>
            </div>

            {/* Message Field */}
            <div className="w-full">
                <textarea
                    name="message"
                    placeholder="Message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-amber-50 py-2 focus:outline-none"
                ></textarea>
            </div>

            {/* Submit Message Display */}
            {submitMessage && (
                <div className="w-full">
                    <div className={`text-center p-3 rounded-lg ${submitMessage.includes('✅')
                        ? 'bg-green-900/40 text-green-300 border border-green-700/50'
                        : 'bg-red-900/40 text-red-300 border border-red-700/50'
                        }`}>
                        {submitMessage}
                    </div>
                </div>
            )}

            {/* Submit Button */}
            <div className="w-full mt-4 flex items-end">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-fit bg-white text-black px-6 py-3 rounded font-medium transition-all ${isSubmitting
                        ? 'opacity-70 cursor-not-allowed'
                        : 'hover:bg-amber-50 hover:scale-[1.02] active:scale-[0.98]'
                        }`}
                >
                    {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            SUBMITTING...
                        </span>
                    ) : (
                        'SUBMIT'
                    )}
                </button>
                <p className="text-sm leading-none text-amber-100/70 mb-1 ms-auto text-center">
                    * Required fields
                </p>
            </div>

            {/* Add this to your global CSS or Tailwind config */}
            <style jsx>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.3s ease-out;
                }
            `}</style>
        </form>
    );
}
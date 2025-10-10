// components/NewsletterForm.jsx
// epicvarahamihira3@getsafesurfer.com
// Epicvarahamihira3@


'use client'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { useState } from 'react'
import { FiX } from 'react-icons/fi'

export default function NewsletterForm() {
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState('')
    const [loading, setLoading] = useState(false)

    const FORM_ID = '8650190'
    const API_KEY = 'GBLgARQuDVXfgPT_KCRYCQ'

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setStatus('')

        try {
            const response = await fetch(`https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    api_key: API_KEY,
                    email: email,
                }),
            })

            const data = await response.json()

            if (response.ok) {
                setStatus('success')
                setEmail('')
            } else {
                setStatus('error')
                console.error('ConvertKit error:', data)
            }
        } catch (error) {
            setStatus('error')
            console.error('Network error:', error)
        } finally {
            setLoading(false)
        }
    }

    const closeToast = () => {
        setStatus('')
    }

    return (
        <div className="w-full max-w-md mx-auto lg:w-9/10 p-6">
            <h2 className='text-[#0B3F71] dark:text-gray-100 text-center text-xl mb-4'>Subscribe to learn about new Posts, the latest in Blogs, solutions, and updates.</h2>

            <form onSubmit={handleSubmit} className="space-y-3 mb-3 lg:mb-1">
                <div className="flex flex-col sm:flex-row gap-2">
                    <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="bg-white flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                        disabled={loading}
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className="flex items-center justify-center gap-2 mx-auto w-fit uppercase transition-colors  px-3 py-1.5 text-sm bg-primary-dark text-white rounded-md cursor-pointer">
                        {loading ? 'Subscribing...' : 'Subscribe'}
                    </button>
                </div>
            </form>

            {/* Updated Success Message - No Confirmation Required */}
            {status === 'success' && (
                <div className="mt-3 p-4 bg-green-50 border-l-4 border-green-400 rounded-lg relative shadow-sm">
                    <button
                        onClick={closeToast}
                        className="absolute top-3 right-3 text-green-500 hover:text-green-700 transition-colors"
                    >
                        <FiX size={16} />
                    </button>
                    <div className="flex items-start">
                        <div className="flex-shrink-0">
                            <div className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center">
                                <span className="text-white text-xs">✓</span>
                            </div>
                        </div>
                        <div className="ml-3">
                            <p className="text-green-800 text-sm font-medium">
                                Successfully Subscribed!
                            </p>
                            <p className="text-green-700 text-xs mt-1">
                                Welcome to our newsletter! You're all set. 🎉
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {status === 'error' && (
                <div className="mt-3 p-4 bg-red-50 border-l-4 border-red-400 rounded-lg relative shadow-sm">
                    <button
                        onClick={closeToast}
                        className="absolute top-3 right-3 text-red-500 hover:text-red-700 transition-colors"
                    >
                        <FiX size={16} />
                    </button>
                    <div className="flex items-start">
                        <div className="flex-shrink-0">
                            <div className="w-5 h-5 bg-red-400 rounded-full flex items-center justify-center">
                                <span className="text-white text-xs">!</span>
                            </div>
                        </div>
                        <div className="ml-3">
                            <p className="text-red-800 text-sm font-medium">
                                Subscription failed
                            </p>
                            <p className="text-red-700 text-xs mt-1">
                                Please try again or contact support if the problem persists.
                            </p>
                        </div>
                    </div>
                </div>
            )}
            <p className='text-[12px] text-gray-500 dark:text-gray-300 text-center md:text-left font-light'>We care about your data in our <Link href="/privacy-policy" className='underline text-blue-600 dark:text-blue-500 decoration-blue-400 decoration-1 underline-offset-1'>privacy policy</Link></p>
        </div>
    )
}
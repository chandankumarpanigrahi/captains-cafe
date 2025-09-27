// components/ThemeToggle.js
'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { SunIcon, MoonIcon } from 'lucide-react' // or any icon library you like

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null // to avoid hydration mismatch

    return (
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Toggle Dark Mode"
        >
            {theme === 'dark' ? (
                <SunIcon className="w-5 h-5 text-yellow-500" />
            ) : (
                <MoonIcon className="w-5 h-5 text-gray-800" />
            )}
        </button>
    )
}

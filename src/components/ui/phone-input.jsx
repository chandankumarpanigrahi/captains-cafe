// components/ui/phone-input.jsx
import { Input } from './input'

export const PhoneInput = ({ value, onChange, placeholder, className }) => {
    const handleChange = (e) => {
        const input = e.target.value
        // Allow only digits
        const digitsOnly = input.replace(/\D/g, '')
        // Limit to 10 digits
        const truncated = digitsOnly.slice(0, 10)
        onChange(truncated)
    }

    return (
        <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center">
                <span className="text-gray-600">+91</span>
                <div className="w-px h-4 bg-gray-300 mx-2"></div>
            </div>
            <Input
                value={value}
                onChange={handleChange}
                placeholder={placeholder || "Enter 10-digit mobile number"}
                className={`pl-16 ${className}`}
                type="tel"
            />
        </div>
    )
}
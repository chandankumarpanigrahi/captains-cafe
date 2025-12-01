// components/ui/time-picker.jsx
import { Input } from './input'

export const TimePicker = ({ value, onChange, placeholder, className }) => {
    const handleChange = (e) => {
        const time = e.target.value
        onChange(time)
    }

    return (
        <Input
            type="time"
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            className={className}
        />
    )
}
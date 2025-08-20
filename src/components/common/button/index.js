"use client"
import styles from "./style.module.css"
export default function Button({
    text = null,          // Default: No text
    icon = null,          // Default: No icon
    iconPosition = "right", // "left" | "right" | "none"
    radius = "full",      // "none" | "sm" | "md" | "lg" | "full"
    radiusSide = "all",   // "all" | "t" | "r" | "b" | "l" | "tl" | "tr" | "br" | "bl"
    size = "md",          // "sm" | "md" | "lg"
    bgColor = "bg-primary-dark",
    textColor = "text-white",
    className = "",
    ...props
}) {
    // Radius classes
    const radiusMap = {
        none: "",
        sm: "rounded",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full"
    };

    // Side-specific radius
    const sideRadiusMap = {
        t: "rounded-t",
        r: "rounded-r",
        b: "rounded-b",
        l: "rounded-l",
        tl: "rounded-tl",
        tr: "rounded-tr",
        br: "rounded-br",
        bl: "rounded-bl"
    };

    // Size classes
    const sizeMap = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg"
    };

    // Determine radius class
    const radiusClass = radiusSide === "all"
        ? radiusMap[radius]
        : sideRadiusMap[radiusSide];

    return (
        <button
            className={`flex items-center justify-center gap-2 w-fit uppercase transition-colors 
        ${styles.main_btn}
        ${sizeMap[size]}
        ${bgColor}
        ${textColor}
        ${radiusClass}
        ${className}
      `}
            {...props}
        >
            {iconPosition === "left" && icon}
            {text}
            {iconPosition === "right" && icon}
        </button>
    );
}
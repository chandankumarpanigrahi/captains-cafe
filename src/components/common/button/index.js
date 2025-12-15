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
    link = "#",

    // New props
    variant = "primary",    // "primary" | "secondary" | "outline" | "ghost" | "danger" | "none"
    type = "button",        // "button" | "submit" | "reset"
    disabled = false,
    loading = false,
    loadingText = "Loading...",
    tooltip = "",
    ariaLabel = "",
    onClick = () => { },
    target = "_self",       // "_self" | "_blank"
    rel = "noopener noreferrer",

    ...props
}) {
    // Radius classes (existing)
    const radiusMap = {
        none: "",
        sm: "rounded",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full"
    };

    // Side-specific radius (existing)
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

    // Size classes (existing)
    const sizeMap = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg"
    };

    // New: Variant classes (override bgColor and textColor when variant is used)
    const variantMap = {
        primary: `${bgColor === 'bg-primary-dark' ? 'bg-primary-dark' : bgColor} ${textColor === 'text-white' ? 'text-white' : textColor} hover:opacity-90`,
        secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-2 focus:ring-gray-400",
        outline: "border-2 border-primary-dark text-primary-dark bg-transparent hover:bg-primary-dark",
        ghost: "text-primary-dark bg-transparent hover:bg-primary-light hover:text-primary-darker",
        danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-2 focus:ring-red-400",
        none: "bg-transparent text-primary-dark"
    };

    // New: Disabled state
    const disabledClasses = "opacity-50 cursor-not-allowed pointer-events-none";

    // New: Loading state
    const LoadingSpinner = () => (
        <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
    );

    // Determine radius class (existing)
    const radiusClass = radiusSide === "all"
        ? radiusMap[radius]
        : sideRadiusMap[radiusSide];

    // Base classes with new features
    const baseClasses = `
        flex items-center justify-center gap-2 uppercase transition-all duration-200
        font-medium focus:outline-none focus:ring-offset-2
        ${styles.main_btn}
        ${sizeMap[size]}
        ${radiusClass}
        ${disabled || loading ? disabledClasses : ''}
        ${!disabled && !loading ? (variant !== 'primary' ? variantMap[variant] : `${bgColor} ${textColor} hover:opacity-90`) : ''}
        ${className}
    `.trim();

    // Handle content rendering
    const renderContent = () => {
        if (loading) {
            return (
                <>
                    <LoadingSpinner />
                    {loadingText}
                </>
            );
        }

        return (
            <>
                {iconPosition === "left" && icon}
                {text}
                {iconPosition === "right" && icon}
            </>
        );
    };

    // Choose between button and anchor tag
    const isAnchor = link && link !== "#" && !disabled;

    if (isAnchor) {
        return (
            <a
                href={disabled ? undefined : link}
                className={baseClasses}
                title={tooltip}
                aria-label={ariaLabel || text}
                target={target}
                rel={rel}
                onClick={onClick}
                {...props}
            >
                {renderContent()}
            </a>
        );
    }

    return (
        <button
            type={type}
            className={baseClasses}
            disabled={disabled || loading}
            title={tooltip}
            aria-label={ariaLabel || text}
            onClick={onClick}
            {...props}
        >
            {renderContent()}
        </button>
    );
}

// New: Pre-styled button variants for quick usage
export const PrimaryButton = (props) => <Button variant="primary" {...props} />;
export const SecondaryButton = (props) => <Button variant="secondary" {...props} />;
export const OutlineButton = (props) => <Button variant="outline" {...props} />;
export const GhostButton = (props) => <Button variant="ghost" {...props} />;
export const DangerButton = (props) => <Button variant="danger" {...props} />;

// New: Size-specific buttons
export const SmallButton = (props) => <Button size="sm" {...props} />;
export const LargeButton = (props) => <Button size="lg" {...props} />;

// New: Icon buttons
export const IconButton = ({ icon, ...props }) => (
    <Button icon={icon} iconPosition="none" text={null} {...props} />
);

// New: Link button specifically for navigation
export const LinkButton = ({ href, ...props }) => (
    <Button link={href} {...props} />
);
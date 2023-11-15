import React, { useState } from "react";
interface ButtonProps {
    label?: React.ReactNode;
    className?: string;
    onClick?: () => void
}

export const ButtonProps: React.FC<ButtonProps> = ({
    label,
    className,
    onClick,
   
}) => {
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true)
    }
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`text-white text-[16px] shrink-0 border-none cursor-pointer font-medium ${isHovered ? 'hover:text-[#4f46e5]' : ''} ${className}`}>
            {label}
        </button>
    )
}
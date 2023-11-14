import React from "react";

interface SelectProps {
    icon?: React.ReactNode
    label?: string;
    value?: string;
    className?: string;
    option?: { value: string; label: string }[];
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export const SelectProps: React.FC<SelectProps> = ({
    label, value, option, className, onChange, icon
}) => {

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(e)
    }

    return (
        <div className="mb-[15px]">
            <label className="mb-[15px]">{label}</label>
            <select
                value={value}
                className={`${className} leading-normal bg-[#f3f4f6] w-[130px] h-[50px] shrink-0 text-[#717171] font-normal text-[16px]`}
                onChange={handleChange}
            >
                {option?.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
                {icon}
            </select>
        </div>
    )
}

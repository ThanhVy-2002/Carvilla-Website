import React, { useState } from "react";
import { SelectProps } from "../Select/SelectProps";
import { DropDownIcon } from "../Icon/DropDown";
import {
    optionsPrice,
    optionsYear,
    optionsStyle,
    optionsMake,
    optionsCondition,
    optionsModel
} from "../Select/data";

import { ButtonProps } from "../Button/ButtonProps";
import './data'
import { data } from "./data";

export const Service: React.FC = () => {

    const [selectedYear, setSelectedYear] = useState(optionsYear[0].value)
    const [selectedStyle, setSelectedStyle] = useState(optionsStyle[0].value)
    const [selectedMake, setSelectedMake] = useState(optionsMake[0].value)
    const [selectedCondition, setSelectedCondition] = useState(optionsCondition[0].value)
    const [selectedModel, setSelectedModel] = useState(optionsModel[0].value)
    const [selectedPrice, setSelectedPrice] = useState(optionsPrice[0].value)

    return (
        <>
            <div className="w-[800px] h-[220px] shrink-0 rounded-[5px] bg-white shadow-lg flex flex-row space-x-[20px] -translate-y-[120px] translate-x-[250px]">
                <div className="flex flex-col translate-x-[30px] translate-y-[25px]">
                    <SelectProps label="Select year"
                        value={selectedYear}
                        option={optionsYear}
                        onChange={(e) => setSelectedYear(e.target.value)}
                        icon={<DropDownIcon />}
                    />

                    <SelectProps label="Body Style"
                        value={selectedStyle}
                        option={optionsStyle}
                        onChange={(e) => setSelectedStyle(e.target.value)}
                        icon={<DropDownIcon />}
                    />
                </div>
                <div className="flex flex-col translate-x-[30px] translate-y-[25px]">
                    <SelectProps label="Select Make"
                        value={selectedMake}
                        option={optionsMake}
                        onChange={(e) => setSelectedMake(e.target.value)}
                        icon={<DropDownIcon />}
                    />

                    <SelectProps label="Car Condition"
                        value={selectedCondition}
                        option={optionsCondition}
                        onChange={(e) => setSelectedCondition(e.target.value)}
                        icon={<DropDownIcon />}
                    />
                </div>
                <div className="flex flex-col translate-x-[30px] translate-y-[25px]">
                    <SelectProps label="Select Model"
                        value={selectedModel}
                        option={optionsModel}
                        onChange={(e) => setSelectedModel(e.target.value)}
                        icon={<DropDownIcon />}
                    />

                    <SelectProps label="Select Price"
                        value={selectedPrice}
                        option={optionsPrice}
                        onChange={(e) => setSelectedPrice(e.target.value)}
                        icon={<DropDownIcon />}
                    />
                </div>
                <ButtonProps label='Search' className="-translate-x-6 translate-y-[80px] rounded w-[150px] h-[60px] shrink-0 bg-[#4f46e5] hover:bg-[#0000ff] hover:text-white" />
            </div>
            {data.map((item, index) => (
                <div key={index} className="border w-[230px] h-[200px] shrink-0 rounded-[5px] bg-white shadow-lg flex flex-col">
                    {item.icon}
                    <h1 className="font-medium text-[24px] text-center">{item.title}</h1>
                    <p className="font-normal text-[16px] text-center">{item.content}</p>
                </div>
            ))}
        </>
    )
}
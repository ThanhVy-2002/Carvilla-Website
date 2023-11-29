import React from "react";
import { ButtonProps } from "../Button/ButtonProps";

export const Home: React.FC = () => {
    return (
        <div className="-translate-y-[450px]">
            <h1 className="font-medium text-[29px] text-center my-[20px] text-white">
                GET YOUR DESIRED CAR IN RESONABLE PRICE
            </h1>
            <p className="font-medium text-[19px] text-center text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod
            </p>
            <p className="font-medium text-[19px] text-center text-white">tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="flex justify-center ">
                <ButtonProps label='Contact Us' className="my-[20px] rounded w-[200px] h-[50px] shrink-0 bg-[#4f46e5] hover:bg-[#0000ff] hover:text-white" />
            </div>
        </div>
    )
}
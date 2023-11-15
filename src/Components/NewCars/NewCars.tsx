import React from "react";
import { Pagination } from "./Pagination";

export const NewCars: React.FC = () => {
    return (
        <>
        <div className="flex flex-col items-center justify-center space-x-4">
            <p className="text-[16px]">Checkout the Latest Cars</p>
            <h1 className="text-[40px] font-medium text-[#585858]">Newest Cars</h1>
            <div className="w-[80px] h-[2px] bg-[#4f46e5]">
            </div>
        </div>
        <Pagination/>
        </>
    )
}
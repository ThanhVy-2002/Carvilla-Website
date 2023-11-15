import React from "react";
import { data } from "./data";

export const FeaturedCars: React.FC = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center space-x-4 ">
                <p className="text-[16px]">Checkout the Featured Cars</p>
                <h1 className="text-[40px] font-medium text-[#585858]">Featured Cars</h1>
                <div className="w-[80px] h-[2px] bg-[#4f46e5]">
                </div>
            </div>
            <div className="grid grid-rows-3 grid-flow-col items-center justify-center space-x-4 translate-y-6">
                {data.map((item) => (
                    <div className="h-[350px] ">
                        <div className="flex flex-col items-center divide-y divide-slate-300 border w-[300px] h-[180px] shrink-0 rounded-[5px] bg-white border-slate-300">
                            <span className="translate-y-3 ">{item.img}</span>
                            <p className="translate-y-7">{item.mode}</p>
                        </div>
                        <h2 className="font-medium text-[#585858] text-[16px] w-[200px]">{item.title}</h2>
                        <p className="font-medium text-[#585858] text-[12px] w-[50px]">{item.price}</p>
                        <p className="font-normal text-[16px] w-[250px] h-[40px] text-slate-400 text-justify">{item.content}</p>
                    </div>
                ))}
            </div>
        </>
    )
}
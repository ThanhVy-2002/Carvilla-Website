import { FC } from "react";
import { data } from "./data";

export const Clients: FC = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center space-x-4 ">
                <h1 className="text-[40px] font-medium text-[#585858]">What Our Clients Say</h1>
                <div className="w-[80px] h-[2px] bg-[#4f46e5]"></div>
            </div>
            <div className="flex items-center justify-center space-x-[20px]">
                {data.map((item: any) => (
                    <div className="translate-y-[40px] border w-[300px] h-[350px] shrink-0 rounded-[5px] bg-white shadow-lg hover:bg-[#4f46e5] hover:text-white">
                        <span className="flex items-center justify-center translate-y-[10px]">{item.avatar}</span>
                        <p className="font-normal text-[16px] text-center  translate-y-[20px]">{item.content}</p>
                        <p className="text-[16px] text-center font-medium  translate-y-[30px]">{item.name}</p>
                        <p className="text-[16px] text-center font-medium  translate-y-[40px]">{item.address}</p>
                    </div>
                ))}
            </div>
        </>
    )
}
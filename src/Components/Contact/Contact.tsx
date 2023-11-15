import React from "react";
import { data1, data2 } from "./data";

export const Contact: React.FC = () => {
    return (
        <div className="bg-[#2A2452] text-white h-[300px] flex flex-row">
            <div className="">
                {data1.map((item) => (
                    <div>
                        <h1 className="text-[24px]">{item.title}</h1>
                        <p className="w-[250px] h-[40px]">{item.content}</p>
                        <p className="translate-y-[50px] ">{item.email}</p>
                        <p className="translate-y-[50px] ">{item.phone}</p>
                    </div>
                ))}
            </div>

            <div className="translate-x-[600px] w-[200px]">
                {data2.map((item) => (
                    <div className="">
                        <h1>{item.title}</h1>
                        <p>{item.content}</p>
                        <span>{item.input}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
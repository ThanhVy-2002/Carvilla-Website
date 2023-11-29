import React from "react";
import { data1, data2, aboutDevloon, topBrands } from "./data";
import { ButtonProps } from "../Button/ButtonProps";
import { Facebook } from "../Icon/Facebook";
import { Instagram } from "../Icon/Instagram";
import { Linkedin } from "../Icon/Linkedin";
import { Pinterest } from "../Icon/Pinterest";


export const Contact: React.FC = () => {
    return (
        <div className="h-[400px] bg-[#2A2452] text-white">
            <div className=" flex flex-row items-center space-y-[35px]">
                {data1.map((item) => (
                    <div className="flex flex-col space-y-4 translate-x-[30px] h-[250px]">
                        <h1 className="font-['Cambo'] text-[30px]">{item.title}</h1>
                        <p className="w-[250px] h-[40px]">{item.content}</p>
                        <p className="translate-y-[50px] ">{item.email}</p>
                        <p className="translate-y-[50px] ">{item.phone}</p>
                    </div>
                ))}

                {aboutDevloon.map((item) => (
                    <div className="flex flex-col translate-x-[50px] -translate-y-7 space-y-4">
                        <h1 className="font-medium">ABOUT DEVLOON</h1>
                        {[item.label1, item.label2, item.label3, item.label4].map((label, i) => (
                            <ButtonProps key={i} label={label} className="text-left hover:translate-x-[10px] font-normal transition delay-100" />
                        ))}
                    </div>
                ))}

                {topBrands.map((item, index) => (
                    <div className="flex flex-row space-x-4 translate-x-[100px] -translate-y-2" key={index}>
                        <div className="flex flex-col space-y-4">
                            <h1 className="font-medium text-[18px]">{item.title}</h1>
                            {[item.label1, item.label2, item.label3, item.label4, item.label6].map((label, i) => (
                                <ButtonProps key={i} label={label} className="text-left hover:translate-x-[10px] font-normal transition delay-100" />
                            ))}
                        </div>

                        <div className="flex flex-col space-y-4" key={index}>
                            {[item.label7, item.label8, item.label9, item.label10, item.label11, item.label12].map((label, i) => (
                                <ButtonProps key={i} label={label} className="text-left hover:translate-x-[10px] font-normal translate-y-[37px] transition delay-100" />
                            ))}
                        </div>
                    </div>
                ))}

                {data2.map((item) => (
                    <div className="translate-x-[250px] w-[250px] -translate-y-[55px] flex flex-col space-y-4">
                        <h1 className="text-[18px] font-medium">{item.title}</h1>
                        <p>{item.content}</p>
                        <span>{item.input}</span>
                    </div>
                ))}
            </div >

            <div className="w-[1254px] h-[2px] bg-[#777799] translate-y-16 "></div>

            <div className="flex flex-row translate-y-20 space-x-[470px]">
                <p className="translate-x-[30px]">© Copyright. Designed And Developed By Themesine.</p>
                <div className="flex flex-row space-x-4 translate-x-[18px]">
                    <Facebook/>
                    <Instagram/>
                    <Linkedin/>
                    <Pinterest/>
                    
                </div>
            </div>
        </div>
    )
}
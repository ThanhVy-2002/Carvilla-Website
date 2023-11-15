import React, { useState } from "react";
import { data } from "./data";


export const Pagination: React.FC = () => {
    const intemsPerPage = 1
    const [currentPage, setCurrentPage] = useState(1);
    const currentData = data ? data.slice((currentPage - 1) * intemsPerPage, currentPage * intemsPerPage) : [];

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber)
    }

    const pageNumers = Array.from({ length: Math.ceil(data.length) / intemsPerPage }, ((_, i) => i + 1))
    return (
        <div>
            {currentData.map((item) => (
                <div key={item.title} className="flex flex-row space-x-[30px]">
                    <div>
                        {item.image}
                    </div>
                    <div className="flex flex-col flex items-start self-stretch gap-[9px] w-[300px]">
                        <h1 className="text-[24px] font-medium text-[#585858]">{item.title}</h1>
                        <p className="text-left text-gray-400 text-[16px]">{item.content1}</p>
                        <p className="text-left text-gray-400 text-[16px] =">{item.content2}</p>
                        {item.button}
                    </div>
                </div>
            ))}
            <ul className="flex items-center justify-center space-x-4 translate-y-6">
                {pageNumers.map((pageNumer) => (
                    <button onClick={() => handlePageChange(pageNumer)} >
                        <li key={pageNumer}>
                            {pageNumer}
                        </li>
                    </button>
                ))}
            </ul>
        </div>
    )

}
import React, { useState } from "react";
import { data } from "./data";

export const Brands: React.FC = () => {
    const [position, setPosition] = useState({x:0, y:0})
    const [isDragging, setIsDradding] = useState(false)

    const  handleMouseDown = (e: React.MouseEvent<HTMLImageElement>) => {
        setIsDradding(false)
    }
    
    const hadleMouseMove = (e:React.MouseEvent<HTMLImageElement>)=> {
        if(isDragging) {
            const {clientX} = e
            setPosition((prevPosition)=> ({
                ...prevPosition,
                x: clientX
            }))
        }
    }

    const hadleMouseUp = (e: React.MouseEvent<HTMLImageElement>)=>{
        setIsDradding(false)
    }
    return (
        <>
        {data.map((item)=>(
            <div>
                {item.br1}
                {item.br2}
                {item.br3}
                {item.br4}
                {item.br5}
                {item.br6}
            </div>
        ))}
        </>
    )
}
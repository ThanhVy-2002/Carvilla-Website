import { FC, useRef } from "react";
import { ButtonProps } from "../Button/ButtonProps";
import welcomeBanner from '../../Assets/welcome-banner.jpg'
import { Home } from "../Home/Home";
import { Service } from "../Service/Service";

export const Header: FC = () => {
    const refHome = useRef<HTMLDivElement>(null)

    const handleClickHome = () => {
        refHome.current?.scrollIntoView({ behavior: 'smooth' })
    }

    const refService = useRef<HTMLDivElement>(null)

    const handleClickService = () => {
        refService.current?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>
            <div className="flex flex-row space-x-[100px] bg-[black] ">
                <div className="font-['Cambo'] text-[30px] translate-x-[35px] text-white">CARVILLA</div>
                <div className="flex space-x-[20px] justify-center">
                    <ButtonProps label='HOME' onClick={handleClickHome} />
                    <ButtonProps label='SERVICE' onClick={handleClickService}/>
                    <ButtonProps label='FEATURED CARS' />
                    <ButtonProps label='NEW CARS' />
                    <ButtonProps label='BRANDS' />
                    <ButtonProps label='CONTACT' />
                </div>
            </div>
            <div className="relative">
                <img src={welcomeBanner} className="opacity-1" />
                <div ref={refHome} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" >
                    <Home />
                </div>
                <div ref={refService}>
                    <Service/>
                </div>
            </div>
        </>

    )
}
import { FC, useRef } from "react";
import { ButtonProps } from "../Button/ButtonProps";
import welcomeBanner from '../../Assets/welcome-banner.jpg'
import { Home } from "../Home/Home";
import { Service } from "../Service/Service";
import { NewCars } from "../NewCars/NewCars";
import { FeaturedCars } from "../FeaturedCars/FeaturedCars";
import { Clients } from "../Clients/Clients";

export const Header: FC = () => {
    const refHome = useRef<HTMLDivElement>(null)

    const handleClickHome = () => {
        refHome.current?.scrollIntoView({ behavior: 'smooth' })
    }

    const refService = useRef<HTMLDivElement>(null)

    const handleClickService = () => {
        refService.current?.scrollIntoView({ behavior: 'smooth' })
    }

    const refNewCars = useRef<HTMLDivElement>(null)

    const handleClickNewCars = () => {
        refNewCars.current?.scrollIntoView({ behavior: 'smooth' })
    }

    const refFeaturedCars = useRef<HTMLDivElement>(null)

    const handleClickFeaturedCars = () => {
        refFeaturedCars.current?.scrollIntoView({ behavior: 'smooth' })
    }


    return (
        <>
            <div className="flex flex-row space-x-[100px] bg-[black]">
                <div className="font-['Cambo'] text-[30px] translate-x-[35px] text-white">CARVILLA</div>
                <div className="flex space-x-[20px] justify-center">
                    <ButtonProps label='HOME' onClick={handleClickHome} />
                    <ButtonProps label='SERVICE' onClick={handleClickService} />
                    <ButtonProps label='FEATURED CARS' onClick={handleClickFeaturedCars} />
                    <ButtonProps label='NEW CARS' onClick={handleClickNewCars} />
                    <ButtonProps label='BRANDS' />
                    <ButtonProps label='CONTACT' />
                </div>
            </div>
            <img src={welcomeBanner} className="opacity-1" />
            <div ref={refHome}>
                <Home />
            </div>
            <div ref={refService}>
                <Service />
            </div>

            <div ref={refNewCars}>
                <NewCars />
            </div>

            <div ref={refFeaturedCars}>
                <FeaturedCars />
            </div>

            <div>
                <Clients/>
            </div>
        </>

    )
}
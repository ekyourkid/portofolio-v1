import React from "react";
import ParticlesComponent from "./particle-component/particle";


const HeroPage = () => {
    return (
        <div className="w-screen h-screen flex justify-center items-center gradient-bg">
            <ParticlesComponent id="tsparticles"/>
            <div className=" text-5xl text-center absolute">
                <h1 className="">
                    HEY THERE, I’M
                </h1>
                <h1 className="font-bold">
                    RIZKY SYAHPUTRA
                </h1>
                <p className="text-lg pt-3">
                    a frontend web developer passionate about <br /> crafting visually appealing and user-friendly <br /> interfaces.
                </p>
            </div>
        </div>
    );
};

export default HeroPage;

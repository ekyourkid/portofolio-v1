import React from "react";
import ParticlesComponent from "./particle-component/particle";

const HeroPage = () => {
    return (
        <div>
            {/* Media Screen For LG - XL */}
            <div className="hidden w-screen h-[600px] lg:flex justify-center items-center gradient-bg">
                <ParticlesComponent id="tsparticles" />
                <div className="text-center absolute">
                    <h1 className="tourney text-5xl font-light">
                        HEY THERE, IM
                    </h1>
                    <h1 className="font-black tourney text-5xl">
                        RIZKY SYAHPUTRA
                    </h1>
                    <p className="text-xl pt-3 lg:font-light">
                        a <span className="font-bold">frontend</span> web
                        developer passionate about <br /> crafting visually
                        appealing and user-friendly <br /> interfaces.
                    </p>
                </div>
            </div>

            {/* Media Screen For XS - MD */}
            <div>
                <div className="lg:hidden w-screen h-[600px] xs:flex justify-center items-center">
                    <ParticlesComponent id="tsparticles" />
                    <div className="text-center absolute">
                        <h1 className="tourney xs:text-xl sm:text-2xl md:text-3xl">
                            HEY THERE, IM
                        </h1>
                        <h1 className="font-black tourney xs:text-xl sm:text-2xl md:text-3xl">
                            RIZKY SYAHPUTRA
                        </h1>
                        <p className="text-sm md:text-base font-extralight">
                            a <span className="font-bold">frontend</span> web
                            developer passionate about <br /> crafting visually
                            appealing and user-friendly <br /> interfaces.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroPage;

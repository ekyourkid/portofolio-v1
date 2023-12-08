import React from "react";
import ParticlesComponent from "./particle-component/particle";

const HeroPage = () => {
    return (
        <div>
            {/* Media Screen For LG - XL */}
            <div className="w-screen h-[600px] flex justify-center items-center gradient-bg">
                <ParticlesComponent id="tsparticles" />
                <div className=" text-5xl text-center absolute">
                    <h1 className="tourney">HEY THERE, IM</h1>
                    <h1 className="font-black tourney">RIZKY SYAHPUTRA</h1>
                    <p className="text-lg pt-3">
                        a frontend web developer passionate about <br />{" "}
                        crafting visually appealing and user-friendly <br />{" "}
                        interfaces.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HeroPage;

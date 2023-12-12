import React from "react";
import GlassmorpWarpper from "./glassmorp-warper";

const TechSection = () => {
    return (
        <div className="w-full  flex flex-col items-center space-y-5">
            <GlassmorpWarpper className="h-auto w-full xs:p-5 lg:p-12">
                <p className="xs:text-xs md:text-lg lg:text-xl xl:text-lg font-normal">
                    Hi there! Im Rizky Syahputra, a frontend web developer
                    passionate about crafting visually appealing and
                    user-friendly interfaces. With expertise in HTML, CSS, and
                    JavaScript, I specialize in creating engaging web
                    experiences that are both responsive and functional. <br />
                    Im adept at utilizing technologies like ReactJS, VueJS, and
                    other modern frameworks to ensure seamless user experiences.
                    Collaborating effectively with teams to integrate designs
                    with necessary functionalities is one of my strengths.
                    <br /> <br /> Rizky Syahputra
                </p>
            </GlassmorpWarpper>
        </div>
    );
};

export default TechSection;

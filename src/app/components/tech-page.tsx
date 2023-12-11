import React from "react";
import GlassmorpWarpper from "./glassmorp-warper";

const TechSection = () => {
    return (
        <div className="xs:w-72 sm:w-5/6 lg:w-9/12 xl:w-11/12 flex flex-col items-center space-y-5">
            {/* Media Screen For LG - XL */}
            <GlassmorpWarpper className="h-80 w-full xs:p-8 lg:p-12 lg:h-96">
                <p className="xs:text-xs md:text-lg lg:text-xl xl:text-2xl font-normal">
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
            <GlassmorpWarpper className=" h-20 flex flex-row w-full overflow-hidden">
                <div></div>
            </GlassmorpWarpper>
        </div>
    );
};

export default TechSection;

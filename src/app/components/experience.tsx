import React from "react";
import Image from "next/image";
import GlassmorpWarpper from "./glassmorp-warper";

const Experience = () => {
    const LIST = [
        {
            id: 0,
            img: "/images/fl-logo.png",
            title: "Intern Frontend Engineer",
            company: "PT Feedloop Global Teknologi",
            since: "2022 - 2023",
            label:
            "Im adept at utilizing technologies like ReactJS, VueJS, and other modern frameworks to ensure seamless user experiences. Collaborating effectively with teams to integrate designs with necessary functionalities is one of my strengths.",
        },
        {
            id: 1,
            img: "/images/fl-logo.png",
            title: "Intern Frontend Engineer",
            company: "PT Feedloop Global Teknologi",
            since: "2022 - 2023",
            label:
            "Im adept at utilizing technologies like ReactJS, VueJS, and other modern frameworks to ensure seamless user experiences. Collaborating effectively with teams to integrate designs with necessary functionalities is one of my strengths.",
        },
    ];
    return (
        <div className="space-y-5">
            <div className=" flex justify-start items-center space-x-10">
                <section>
                    <h1 className="tourney uppercase italic text-4xl">
                        e<span>x</span>perience
                    </h1>
                </section>
                <hr className="h-[2px]" />
            </div>
            {LIST.map((input, index) => (
                <GlassmorpWarpper
                key={index}
                className="w-full h-72 flex flex-row pt-7"
                >
                    <div className="basis-32 flex flex-col items-center justify-start pt-1">
                        <Image
                            src={input.img}
                            alt="feedloop logo"
                            width={60}
                            height={53}
                            className=""
                            />
                    </div>
                    <div className="basis-5/6 flex flex-col space-y-12">
                        <div>
                            <h1 className="saira text-xl font-semibold">
                                {input.title}
                            </h1>
                            <h2 className="saira text-base font-light">
                                {input.company}
                            </h2>
                            <h2 className="saira text-base font-light">
                                {input.since}
                            </h2>
                        </div>
                        <div className="space-y-3">
                            <section className="flex space-x-7 saira">
                                <h1 className="saira text-base font-normal">Responsibilities</h1>
                                <h1 className="text-gray-500 saira text-base font-normal">Acheivement</h1>
                            </section>
                            <section>
                                <hr />
                            </section>
                            <section>
                                <p className="saira text-sm font-normal">{input.label}</p>
                            </section>
                        </div>
                    </div>
                </GlassmorpWarpper>
            ))}
        </div>
    );
};

export default Experience;

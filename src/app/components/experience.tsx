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
        <div className="space-y-5 w-full">
            <div className="flex justify-start items-center space-x-1 ">
                <section>
                    <h1 className="tourney uppercase italic text-4xl">
                        experience
                    </h1>
                </section>
                <hr className="h-[2px]" />
            </div>

            {/* Media Screen For LG - XL */}
            {LIST.map((input, index) => (
                <GlassmorpWarpper
                    key={index}
                    className="hidden w-full lg:h-80 lg:flex flex-row pt-7 lg:p-7"
                >
                    <div className="basis-32 flex flex-col items-center justify-start">
                        <Image
                            src={input.img}
                            alt="feedloop logo"
                            width={80}
                            height={53}
                            className=""
                        />
                    </div>
                    <div className="basis-5/6 flex flex-col space-y-8">
                        <div>
                            <h1 className="saira lg:text-3xl xl:text-4xl font-semibold">
                                {input.title}
                            </h1>
                            <h2 className="saira lg:text-xl font-light">
                                {input.company}
                            </h2>
                            <h2 className="saira lg:text-lg font-light">
                                {input.since}
                            </h2>
                        </div>
                        <div className="space-y-3">
                            <section className="flex space-x-7 saira">
                                <h1 className="saira text-lg xl:text-xl font-normal">
                                    Responsibilities
                                </h1>
                                <h1 className="text-gray-500 saira text-lg xl:text-xl font-normal">
                                    Acheivement
                                </h1>
                            </section>
                            <section>
                                <hr />
                            </section>
                            <section>
                                <p className="saira text-base xl:text-lg font-normal">
                                    {input.label}
                                </p>
                            </section>
                        </div>
                    </div>
                </GlassmorpWarpper>
            ))}

            {/* Media Screen For XS - MD */}
            {LIST.map((input, index) => (
                <GlassmorpWarpper
                    key={index}
                    className="w-full h-72 lg:hidden xs:flex flex-row xs:p-3 md:p-7 xs:pt-3 xs:space-x-3 md:space-x-7"
                >
                    <div className="xs:w-10 sm:w-20 flex flex-col items-center justify-start pt-1">
                        <Image
                            src={input.img}
                            alt="feedloop logo"
                            width={50}
                            height={53}
                            className="xs:w-52"
                        />
                    </div>
                    <div className="xs:w-56 sm:w-5/6 flex flex-col space-y-5">
                        <div>
                            <h1 className="saira xs:text-base sm:text-2xl font-semibold">
                                {input.title}
                            </h1>
                            <h2 className="saira xs:text-xs sm:text-lg font-light">
                                {input.company}
                            </h2>
                            <h2 className="saira xs:text-xs sm:text-base font-light">
                                {input.since}
                            </h2>
                        </div>
                        <div className="space-y-2 xs:pt-7">
                            <section className="flex space-x-7 xs:space-x-3 saira">
                                <h1 className="saira xs:text-xs sm:text-base font-normal">
                                    Responsibilities
                                </h1>
                                <h1 className="text-gray-500 saira xs:text-xs sm:text-base font-normal">
                                    Acheivement
                                </h1>
                            </section>
                            <section>
                                <hr />
                            </section>
                            <section>
                                <p className="saira text-base xs:text-xs sm:text-sm font-normal">
                                    {input.label}
                                </p>
                            </section>
                        </div>
                    </div>
                </GlassmorpWarpper>
            ))}
        </div>
    );
};

export default Experience;

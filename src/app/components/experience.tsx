"use client";
import React from "react";
import Image from "next/image";
import GlassmorpWarpper from "./glassmorp-warper";
import { Tabs, Tab } from "@nextui-org/react";

const Experience = () => {
    const LIST = [
        {
            id: 0,
            img: "/images/fl.jpg",
            title: "Intern Frontend Engineer",
            company: "PT Feedloop Global Teknologi",
            since: "2022 - 2023",
            overview:
                "Asigned as intern engineer on projects Asset Management and Barber Aplication ",
            responsibility: `<ul><li>Create responsive desktop and mobile interfaces</li><li>Creating application functions</li><li>fetching application data</li><li>Create a project workflow</li><li>Custom component functions</li></ul>`,
        },
        {
            id: 1,
            img: "/images/freelance.jpg",
            title: "Freelance Frontend Engineer",
            company: "Freelance",
            since: "2022 - 2023",
            overview:
                "Developing projects Plagams Store (Online Store) and Tricora (Organization Official Website) using NextJs.",
            responsibility: `<ul><li>Creating reusable components</li><li>Slicing page and layout</li><li>Routing between page</li><li>Data fetching from server</li><li>&nbsp;Maintaining and bug fixing aplication</li></ul>`,
        },
    ];
    return (
        <div id="Experience" className="space-y-5 w-full">
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
                    className="hidden w-full lg:h-auto lg:flex flex-row pt-7 lg:p-7"
                >
                    <div className="basis-32 flex flex-col items-center justify-start">
                        <Image
                            src={input.img}
                            alt="feedloop logo"
                            width={80}
                            height={53}
                            className="rounded w-auto"
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
                            <Tabs
                                aria-label="Options"
                                color="primary"
                                variant="underlined"
                            >
                                <Tab key="overview" title="Overview">
                                    {input.overview}
                                </Tab>
                                <Tab
                                    key="Responsibilities"
                                    title="Responsibilities"
                                >
                                    <div>
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: input.responsibility,
                                            }}
                                        />
                                    </div>
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </GlassmorpWarpper>
            ))}

            {/* Media Screen For XS - MD */}
            {LIST.map((input, index) => (
                <GlassmorpWarpper
                    key={index}
                    className="w-full h-auto lg:hidden xs:flex flex-row xs:p-3 md:p-7 xs:pt-3 xs:space-x-3 md:space-x-7"
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
                    <div className="xs:w-56 sm:w-5/6 flex flex-col space-y-0 ">
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
                            <div className="space-y-3">
                                <Tabs
                                    aria-label="Options"
                                    color="primary"
                                    variant="underlined"
                                >
                                    <Tab key="overview" title="Overview">
                                        {input.overview}
                                    </Tab>
                                    <Tab
                                        key="Responsibilities"
                                        title="Responsibilities"
                                    >
                                        <div>
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html:
                                                        input.responsibility,
                                                }}
                                            />
                                        </div>
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </GlassmorpWarpper>
            ))}
        </div>
    );
};

export default Experience;

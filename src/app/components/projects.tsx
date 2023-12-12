import React from "react";
import Image from "next/image";
import GlassmorpWarpper from "./glassmorp-warper";

const Projects = () => {
    const LIST = [
        {
            id: 0,
            title: "Tricora Official Website",
            label: "Tricora Universitas Trilogi",
            imageSrc: "/images/tcr-trailblaze.jpeg",
        },
        {
            id: 1,
            title: "Booking App",
            label: "PT Feedloop Global Teknologi",
            imageSrc: "/images/barber.jpg",
        },
        {
            id: 2,
            title: "Asset Management",
            label: "PT Feedloop Global Teknologi",
            imageSrc: "/images/asset.jpg",
        },
        {
            id: 3,
            title: "Plagams Store",
            label: "Freelance",
            imageSrc: "/images/plg.jpeg",
        },
    ];
    return (
        <div id="Projects" className="relative w-full space-y-5">
            <Image
                src={"/assets/shape-box.svg"}
                alt=""
                width={120}
                height={120}
                className="absolute right-0 top-0"
            />
            <div className=" flex justify-start items-center space-x-10">
                <section>
                    <h1 className="tourney uppercase italic text-4xl">
                        projects*
                    </h1>
                </section>
                <hr className="h-[2px]" />
            </div>

            {/* Media Screen For LG - XL */}
            <div className="hidden lg:grid grid-cols-1 lg:grid-cols-4 gap-5 justify-around ">
                {LIST.map((input, index) => (
                    <GlassmorpWarpper
                        key={index}
                        className="flex flex-col gri justify-center w-auto h-auto overflow-hidden border-solid border-2 border-white rounded-3xl"
                    >
                        <div className="flex justify-center items-start w-full h-5/6">
                            <Image
                                src={input.imageSrc}
                                alt=""
                                height={300}
                                width={300}
                                className="w-full h-56 bg-white object-cover"
                            />
                        </div>
                        <div className=" w-full h-20 px-7">
                            <h1 className="saira text-lg font-semibold">
                                {input.title}
                            </h1>
                            <p className="saira text-sm font-light">
                                {input.label}
                            </p>
                        </div>
                    </GlassmorpWarpper>
                ))}
            </div>

            {/* Media Screen For XS - MD */}
            <div className="xs:flex flex-col justify-around space-y-5 lg:hidden ">
                {LIST.map((input, index) => (
                    <GlassmorpWarpper
                        key={index}
                        className="flex flex-col justify-center w-full h-auto overflow-hidden border-solid border-2 border-white rounded-3xl"
                    >
                        <div className="flex justify-center items-start w-full h-5/6">
                            <Image
                                src={input.imageSrc}
                                alt=""
                                height={300}
                                width={300}
                                className="w-full h-56 bg-white object-cover"
                            />
                        </div>
                        <div className=" w-full h-20 px-7 pt-3">
                            <h1 className="saira text-lg font-semibold">
                                {input.title}
                            </h1>
                            <p className="saira text-sm font-light">
                                {input.label}
                            </p>
                        </div>
                    </GlassmorpWarpper>
                ))}
            </div>
        </div>
    );
};

export default Projects;

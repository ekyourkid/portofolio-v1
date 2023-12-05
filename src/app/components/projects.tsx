import React from "react";
import Image from "next/image";
import GlassmorpWarpper from "./glassmorp-warper";

const Projects = () => {
    const LIST = [
        {
            id: 0,
            title: "PROJECT X",
            label: "PT Feedloop Global Teknologi",
            imageSrc: "/images/project.jpg",
        },
        {
            id: 0,
            title: "PROJECT X",
            label: "PT Feedloop Global Teknologi",
            imageSrc: "/images/project.jpg",
        },
        {
            id: 0,
            title: "PROJECT X",
            label: "PT Feedloop Global Teknologi",
            imageSrc: "/images/project.jpg",
        },
    ];
    return (
        <div className=" relative w-full space-y-5" >
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

            <div className="flex justify-around space-x-5">
                {LIST.map((input, index) => (
                    <GlassmorpWarpper
                        key={index}
                        className="flex flex-col justify-center w-96 h-auto overflow-hidden border-solid border-2 border-white rounded-3xl"
                    >
                        <div className="flex justify-center items-start w-full h-5/6">
                            <Image
                                src={input.imageSrc}
                                alt=""
                                height={300}
                                width={300}
                                className="object-contain  w-full h-56 bg-white object-cover"
                            />
                        </div>
                        <div className=" w-full h-20 px-7">
                            <h1 className="saira text-lg font-semibold">{input.title}</h1>
                            <p className="saira text-sm font-light">{input.label}</p>
                        </div>
                    </GlassmorpWarpper>
                ))}
            </div>
        </div>
    );
};

export default Projects;

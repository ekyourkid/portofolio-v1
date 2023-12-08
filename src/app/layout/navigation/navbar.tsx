"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import useModalDisclosure from "@/app/helpers/hooks/useModalDisclosure";
import DrawerComponent from "./drawer";
import Link from "next/link";

const Navbar = () => {
    const { isOpen, open, close } = useModalDisclosure();

    const [currentSection, setCurrentSection] = useState<string>("/");
    console.log(currentSection, isOpen);

    // #ini untuk handle click outside (diluar wrapper drawer) biar ke close nge
    const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (!target.closest("#drawer-navigation")) {
            close();
        }
    };
    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, []);

    return (
        <header className=" w-full">
            {/* Media Screen For LG - XL */}
            <div className=" hidden lg:flex flex-row p-5 lg:px-10 xl:px-14 ">
                <DrawerComponent
                    isOpen={isOpen}
                    close={close}
                    active={""}
                    setCurrentSection={setCurrentSection}
                />
                <div className="basis-11/12 flex items-center">
                    <h1 className="w-min tourney text-4xl cursor-pointer hover:text-purple-400">
                        #<span className="font-black">8</span>KY
                    </h1>
                </div>
                <div className="basis-60 flex items-center justify-around">
                    <Link
                        href={"/assets/cv.pdf"}
                        target="_blank"
                        className="saira uppercase text-xl hover:text-purple-400 "
                    >
                        _resume
                    </Link>
                    <Image
                        src={"/images/drawer.svg"}
                        alt="drawer-logo"
                        width={55}
                        height={55}
                        onClick={() => open()}
                        className="cursor-pointer hover:w-14"
                    />
                </div>
            </div>

            {/* Media Screen For XS - MD */}
            <div className="lg:hidden flex sm:p-5 sm:px-7 md:px-7 ">
                <DrawerComponent
                    isOpen={isOpen}
                    close={close}
                    active={""}
                    setCurrentSection={setCurrentSection}
                />
                <div className="basis-11/12 flex items-center ">
                    <h1 className="w-min tourney text-4xl cursor-pointer hover:text-purple-400 :">
                        #<span className="font-black">8</span>KY
                    </h1>
                </div>
                <div className="basis-60 flex items-center justify-around ">
                    <Link
                        href={"/assets/cv.pdf"}
                        target="_blank"
                        className="saira uppercase text-xl hover:text-purple-400 "
                    >
                        _resume
                    </Link>
                    <Image
                        src={"/images/drawer.svg"}
                        alt="drawer-logo"
                        width={55}
                        height={55}
                        onClick={() => open()}
                        className="cursor-pointer hover:w-14"
                    />
                </div>
            </div>
        </header>
    );
};

export default Navbar;

import React from "react";
import Image from "next/image";

const Navbar = () => {
    return (
        <div className="flex flex-row p-16">
            <div className="basis-11/12 ">
                <h1 className="tourney text-4xl">#<span className="font-black">8</span>KY</h1>
            </div>
            <div className="basis-60 flex justify-around">
                <button className="saira uppercase text-xl hover:text-gray-400">_resume</button>
                <Image src={'/images/drawer.svg'} alt="drawer-logo" width={55} height={55}/>

            </div>


        </div>
    )
}

export default Navbar
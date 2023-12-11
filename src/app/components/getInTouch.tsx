import React from "react";
import Image from "next/image";
import Link from "next/link";

const GetInTouch = () => {
    return (
        <div>
            {/* Media Screen For LG - XL */}
            <div className="pt-14 space-y-5 hidden lg:flex flex-col bg-red-300">
                <div className=" flex justify-start items-center space-x-5">
                    <section className=" w-72 h-9">
                        <h1 className="tourney uppercase italic text-4xl">
                            get_in_touch
                        </h1>
                    </section>
                    <hr className="h-[2px]" />
                </div>
                <div className="flex flex-row">
                    <div className="basis-1/2 pt-3 space-y-12">
                        <section>
                            <h1 className="saira text-2xl font-semibold">
                                Lets Connect
                            </h1>
                            <p className="saira text-base font-light w-5/6">
                                Im currently looking for new opportunities, my
                                inbox is always open. Whether you have a
                                question or just want to say hi, Ill try my best
                                to get back to you!
                            </p>
                        </section>

                        <section className="flex space-x-3 py-5">
                            <Image
                                src={"/images/git-logo.png"}
                                alt=""
                                width={48}
                                height={48}
                            />
                            <Image
                                src={"/images/link-logo.png"}
                                alt=""
                                width={48}
                                height={48}
                            />
                        </section>

                        <Link
                            href={"/assets/cv.pdf"}
                            target="_blank"
                            download
                            className="w-20 overflow-hidden mt-10 bg-red-100"
                        >
                            <h1 className="saira">
                                Download my{" "}
                                <span className="font-semibold underline py-10">
                                    resume
                                </span>
                            </h1>
                        </Link>
                    </div>
                    <div className="basis-1/2">
                        <div className="flex flex-col items-end space-y-3">
                            <input
                                type="text"
                                placeholder="Email"
                                className="w-96 p-2 h-12 rounded-xl saira bg-gray-500"
                            />
                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-96 p-2 h-12 rounded-xl saira bg-gray-500"
                            />
                            <textarea
                                placeholder="Message..."
                                name="postContent"
                                rows={5}
                                cols={50}
                                className="w-96 p-2 h-32 rounded-xl saira bg-gray-500"
                            />
                            <button className="w-28 h-9 bg-gradient-to-br saira from-purple-600 rounded">
                                send
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Media Screen For XS - MD */}
            <div className="lg:hidden pt-14 space-y-5 flex flex-col xs:w-72 sm:w-5/6 lg:w-8/12 xl:w-9/12">
                <div className="flex justify-start items-center space-x-5">
                    <section className=" w-72 h-9">
                        <h1 className="tourney uppercase italic text-3xl">
                            get_in_touch
                        </h1>
                    </section>
                    <hr className="h-[2px]" />
                </div>
                <div className="flex flex-col">
                    <div className="w-full space-y-5">
                        <section className="">
                            <h1 className="saira text-xl font-semibold">
                                Lets Connect
                            </h1>
                            <p className="saira text-sm font-light w-5/6">
                                Im currently looking for new opportunities, my
                                inbox is always open. Whether you have a
                                question or just want to say hi, Ill try my best
                                to get back to you!
                            </p>
                        </section>

                        <section className="flex space-x-3 py-5">
                            <Image
                                src={"/images/git-logo.png"}
                                alt=""
                                width={40}
                                height={30}
                            />
                            <Image
                                src={"/images/link-logo.png"}
                                alt=""
                                width={40}
                                height={30}
                            />
                        </section>

                        <Link
                            href={"/assets/cv.pdf"}
                            target="_blank"
                            download
                            className="w-20 overflow-hidden mt-10"
                        >
                            <h1 className="saira">
                                Download my{" "}
                                <span className="font-semibold underline py-10">
                                    resume
                                </span>
                            </h1>
                        </Link>
                    </div>
                    <div className="w-full pt-10">
                        <div className="flex flex-col items-end space-y-3">
                            <input
                                type="text"
                                placeholder="Email"
                                className="w-72 p-2 h-10 rounded-xl saira bg-gray-500"
                            />
                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-72 p-2 h-10 rounded-xl saira bg-gray-500"
                            />
                            <textarea
                                placeholder="Message..."
                                name="postContent"
                                rows={5}
                                cols={29}
                                className="p-2 h-32 rounded-xl saira bg-gray-500"
                            />
                            <button className="w-28 h-9 bg-gradient-to-br saira from-purple-600 rounded">
                                send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetInTouch;

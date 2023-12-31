import HeroPage from "./components/hero";
import Image from "next/image";
import TechSection from "./components/tech-page";
import Projects from "./components/projects";
import Experience from "./components/experience";
import GetInTouch from "./components/getInTouch";

export default function Home() {
    return (
        <main className="w-screen min-h-screen flex flex-col items-center">
            <HeroPage />
            <div className="relative w-full h-auto flex flex-col items-center space-y-5">
                <Image
                    src={"/assets/shape-combine.svg"}
                    alt="shape-combined"
                    width={600}
                    height={600}
                    className="absolute left-0 -top-28"
                />
                <Image
                    src={"/assets/shape-ball.svg"}
                    alt="shape-combined"
                    width={600}
                    height={600}
                    className="absolute -left-80 bottom-20"
                />
                <Image
                    src={"/assets/shape-box.svg"}
                    alt=""
                    width={600}
                    height={600}
                    className="absolute right-0 bottom-1/3"
                />

                <Image
                    src={"/assets/shape-mix.svg"}
                    alt=""
                    width={600}
                    height={600}
                    className="absolute right-0 bottom-20 z-0"
                />
                <div className="flex flex-col items-center space-y-24 z-10 xs:w-full xs:px-5 sm:w-5/6 lg:w-8/12">
                    <TechSection />
                    <Projects />
                    <Experience />
                    <GetInTouch />
                </div>
            </div>
        </main>
    );
}

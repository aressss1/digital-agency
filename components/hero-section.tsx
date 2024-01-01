import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
    const heroContent = [
        {
            number: "170+",
            label: "Happy  Client"
        },
        {
            number: "20+",
            label: "Creative People"
        },
        {
            number: "200+",
            label: "Project Done"
        },
        {
            number: "15+",
            label: "Year Experience"
        },
    ]


    return (
        <div className="flex flex-col lg:px-20 md:px-14 px-4 py-5 bg-stone-50 " >
            <div className="flex flex-col gap-5" >
                <div className="justify-start text-gray-900 lg:text-8xl md:text-6xl font-medium lg:leading-[7.5rem] ">
                    Powerful Digital <br /> Branding Agency
                </div>
                <div className="lg:w-[55rem] md:w-[35rem]  text-gray-900 lg:text-2xl md:text-xl font-light leading-9">
                    Eu scelerisque amet amet malesuada id ultrices morbi. Vitae purus mauris hac nisi habitasse donec. Vitae integer massa in blandit.
                </div>
            </div>

            <div className="flex gap-4 pt-12 flex-wrap " >

                <div className="bg-orange rounded-[2.5rem] w-[29rem] h-[9rem] grid grid-cols-2 md:px-12 gap-5 py-3 grow  " >
                    {heroContent.map((content) => (
                        <div key={content.label} className="flex gap-4 items-center ">
                            <div className=" h-11 text-stone-50 text-4xl font-bold">
                                {content.number}
                            </div>
                            <div className=" text-stone-50 text-base font-normal leading-snug">
                                {content.label}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-emerald rounded-[2.5rem] w-[18rem] h-[9rem] overflow-hidden " >
                    <Image
                        src="hero-1.png"
                        alt="hero-1"
                        className="object-contain pl-9"
                    />
                </div>

                <div className="flex flex-col gap-4" >
                    <div className="bg-orange flex justify-around items-center gap-4 rounded-[2.5rem] w-[13rem] h-[4rem] p-3 " >
                        <Image
                            src="Loading.png"
                            alt="loading"
                            className="h-[53px] lg:h-auto"
                        />
                        <Image
                            src="emoji.png"
                            alt="emoji"
                            className="h-[53px] lg:h-auto"
                        />
                    </div>
                    <Button className="bg-amber text-black flex items-center justify-center gap-4 rounded-[2.5rem] w-[13rem] h-[4rem]  " >
                        Know More
                        <ArrowRight className="h-5" />
                    </Button>
                </div>

                <div className="bg-pink  rounded-[2.5rem] w-[11rem] h-[9rem] overflow-hidden pl-3 pt-[.875rem]" >
                    <Image
                        src="hero-2.png"
                        alt="hero-2"
                        className="rounded-tl-[2.5rem]"
                    />
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
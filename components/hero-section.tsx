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
        <div className="flex flex-col lg:px-20 md:px-1 px-4 py-5 bg-stone-50 " >
            <div className="flex flex-col gap-5" >
                <div className="justify-start text-gray-900 text-8xl font-medium lg:leading-[7.5rem] ">
                    Powerful Digital <br /> Branding Agency
                </div>
                <div className="w-[55rem] text-gray-900 text-2xl font-light leading-9">
                    Eu scelerisque amet amet malesuada id ultrices morbi. Vitae purus mauris hac nisi habitasse donec. Vitae integer massa in blandit.
                </div>
            </div>

            <div className="flex gap-2 pt-12 " >
                <div className="bg-orange rounded-[2.5rem] w-[32rem] h-[9rem] flex justify-center items-center gap-5 flex-wrap py-3 " >
                    {heroContent.map((content) => (
                        <div key={content.label} className="flex gap-4 w-[11rem]">
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
                        className="object-contain pl-8"
                    />
                </div>

                <div className="flex flex-col gap-4" >
                    <div className="bg-orange flex gap-4 rounded-[2.5rem] w-[14rem] h-[4rem] p-3 " >
                        <Image 
                            src="Loading.png"
                            alt="loading"
                        />
                        <Image 
                            src="emoji.png"
                            alt="emoji"
                        />
                    </div>
                    <Button className="bg-orange flex items-center justify-center gap-4 rounded-[2.5rem] w-[14rem] h-[4rem]  " >
                       Know More
                       <ArrowRight />
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
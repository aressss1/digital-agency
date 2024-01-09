import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

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
        <div className="flex flex-col lg:px-20 md:px-14 px-4 py-5 bg-stone-50 gap-6 " >

            <motion.div
                className="flex flex-col md:gap-7 gap-5"
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 0.75
                }}
            >
                <div className="justify-start text-gray-900 lg:text-8xl md:text-6xl text-3xl font-medium lg:leading-[7.5rem] ">
                    Powerful Digital <br /> Branding Agency
                </div>
                <div className="lg:w-[55rem] md:w-[35rem] w-[14rem] text-gray-900 lg:text-2xl md:text-xl text-base md:font-light font-normal md:leading-9 leading-[1.75rem] ">
                    Eu scelerisque amet amet malesuada id ultrices morbi. Vitae purus mauris hac nisi habitasse donec. Vitae integer massa in blandit.
                </div>
            </motion.div>

            <motion.div 
                className="flex gap-4 pt-12 flex-wrap"
                initial={{opacity: 0 , y: 200 }}
                animate={{ opacity:1 , y:0 }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 1.05,
                }}
            >

                <div className="bg-orange md:rounded-[2.5rem] rounded-[1.5rem] w-[29rem] h-[9rem] grid grid-cols-2 md:px-12 px-8 gap-5 py-3 grow" >
                    {heroContent.map((content) => (
                        <div key={content.label} className="flex md:gap-4 gap-3 items-center ">
                            <div className=" h-11 text-stone-50 md:text-4xl text-2xl font-bold">
                                {content.number}
                            </div>
                            <div className=" text-stone-50 md:text-base text-sm font-normal leading-snug">
                                {content.label}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-emerald md:rounded-[2.5rem] rounded-[1.5rem] md:w-[18rem] w-[14rem] md:h-[9rem] h-[7rem] overflow-hidden " >
                    <Image
                        src="hero-1.png"
                        alt="hero-1"
                        className="object-contain pl-9 h-[111px] md:h-auto"
                    />
                </div>

                <div className="flex flex-col gap-4" >
                    <div className="bg-orange flex justify-around items-center gap-4 md:rounded-[2.5rem] rounded-[1.5rem] md:w-[13rem] w-[9rem] md:h-[4rem] h-[3rem] p-3 " >
                        <Image
                            src="Loading.png"
                            alt="loading"
                            className="h-[40px]  md:h-[53px] lg:h-auto"
                        />
                        <Image
                            src="emoji.png"
                            alt="emoji"
                            className="h-[40px]  md:h-[53px] lg:h-auto"
                        />
                    </div>
                    <Button className="bg-amber text-black flex items-center justify-center gap-4 md:rounded-[2.5rem] rounded-[1.5rem] md:w-[13rem] w-[9rem] md:h-[4rem] h-[3rem] hover:text-stone-50 " >
                        Know More
                        <ArrowRight className="h-5 hover:text-gray-50 " />
                    </Button>
                </div>

                <div className="bg-pink md:rounded-[2.5rem] rounded-[1.5rem] md:w-[11rem] w-[9rem] md:h-[9rem] h-[7rem] overflow-hidden pl-3 pt-[.875rem]" >
                    <Image
                        src="hero-2.png"
                        alt="hero-2"
                        className="md:rounded-tl-[2.5rem] rounded-tl-[1.5rem] h-[105px] md:h-auto "
                    />
                </div>
            </motion.div>
        </div>
    );
}

export default HeroSection;
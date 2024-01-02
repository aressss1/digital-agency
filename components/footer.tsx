import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import Image from "next/image";

const Footer = () => {
    return (
        <div className=" bg-dark_blue" >
            <div className=" lg:px-20 md:px-14 px-4 lg:py-16 py-10 " >
                <div className="bg-orange p-20 flex flex-col justify-between gap-9 rounded-[2rem] " >

                <div className="flex justify-between md:flex-row flex-col md:gap-0 gap-1" >
                    <div className="lg:w-[47rem] md:w-[40rem] text-stone-50 lg:text-7xl md:text-5xl text-3xl  font-medium lg:leading-[5rem] md:leading-[3.5rem] leading-[2.5rem] ">
                        Have an Awesome Project?
                    </div>
                    <Button className="bg-orange text-white border border-stone-50 flex items-center gap-4 rounded-[2rem] lg:w-[13rem] md:w-[9rem]  lg:h-[5rem] md:h-[3rem]  justify-center md:self-center self-end " >
                        Know More
                        <ArrowRight className="h-5" />
                    </Button>
                </div>

                <Separator />

                <div className="flex flex-col  gap-4 self-start" >
                    <div className="flex items-center gap-4" >
                        <Image 
                            src="logo-1.svg"
                            alt="Logo"
                            className="h-9"
                        />
                        <div className="text-stone-50 text-2xl font-medium" >
                            Branding Agency
                        </div>
                    </div>
                    <div className=" text-stone-50 text-2xl font-light w-[40rem]">
                        Eu scelerisque amet amet malesuada id ultrices morbi. Vitae purus mauris hac nisi habitasse donec. Vitae integer massa in blandit.
                    </div>
                </div>

                </div>
            </div>
        </div>
    );
}

export default Footer;
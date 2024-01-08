import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import Image from "next/image";

const Footer = () => {
    return (
        <div className=" bg-dark_blue" >
            <div className=" lg:px-20 md:px-14 px-4 lg:py-16 py-10 " >
                <div className="bg-orange lg:p-20 md:p-12 p-8 flex flex-col justify-between gap-9 rounded-[2rem] " >

                    <div className="flex justify-between md:flex-row flex-col md:gap-0 gap-5" >
                        <div className="lg:w-[47rem] md:w-[29rem] text-stone-50 lg:text-7xl md:text-4xl text-xl  font-medium lg:leading-[5rem] md:leading-[3.5rem] ">
                            Have an Awesome Project?
                        </div>
                        <Button className="bg-orange text-white border border-stone-50 flex items-center gap-4 rounded-[2rem] lg:w-[13rem] md:w-[9rem]  lg:h-[5rem] md:h-[3rem]  justify-center md:self-center self-end " >
                            Explore More
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
                            <div className="text-stone-50 md:text-2xl text-lg font-medium" >
                                Branding Agency
                            </div>
                        </div>
                        <div className=" text-stone-50 lg:text-2xl md:text-xl text-base font-light lg:w-[40rem] md:w-[27rem] ">
                            Eu scelerisque amet amet malesuada id ultrices morbi. Vitae purus mauris hac nisi habitasse donec. Vitae integer massa in blandit.
                        </div>
                    </div>

                </div>
            </div>

            <div className="py-6 flex md:flex-row flex-col gap-2 md:gap-0" >
                <div className="text-stone-50 lg:text-xl md:text-base text-sm font-extralight flex  items-center justify-center ">
                    Designed by
                    <Button variant="link" className="text-stone-50 lg:text-xl md:text-base text-sm font-normal px-2">
                        Sakila Pokharel
                    </Button>
                </div>
                <div className="text-stone-50 lg:text-xl md:text-base text-sm font-extralight flex  items-center justify-center" >
                    Developed by
                    <Button variant="link" className="text-stone-50 lg:text-xl md:text-base text-sm font-normal px-2">
                        Faizan Asghar
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Footer;
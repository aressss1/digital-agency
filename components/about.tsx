import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const About = () => {
    return (
        <div className="lg:px-20 md:px-14 px-4 py-5 bg-stone-50  " >
            <div className="bg-dark_blue flex flex-col gap-5 lg:px-12 md:px-8 px-4 rounded-2xl lg:py-12 md:py-8 py-4 " >
                <div className="text-stone-50 lg:text-lg md:text-base text-sm font-light ">
                    01 / About
                </div>
                <div className="lg:w-[49rem] md:w-[22rem] text-stone-50 lg:text-6xl md:text-2xl text-xl font-medium ">
                    Provide the best service, with ideas that are out of the box
                </div>
                <div className="flex md:flex-row flex-col gap-2 md:gap-0 justify-between" >
                    <div className="lg:w-[46rem] md:w-[25rem] text-stone-50 lg:text-xl md:text-sm text-sm font-normal lg:leading-10 md:leading-5">
                        Sed duis leo hendrerit tincidunt nisl. At eu ut sagittis sollicitudin quisque nisl. Lacinia convallis pulvinar lacinia pharetra nulla fringilla consectetur. Id facilisis ac pharetra vitae. Sed etiam orci lacus aliquam. Feugiat quam fringilla odio ornare dui sapien. Et consectetur nam ipsum eleifend.
                    </div>
                    <Button className="bg-amber text-black flex items-center gap-4 rounded-[2rem] lg:w-[13rem] md:w-[9rem]  lg:h-[5rem] md:h-[3rem]  justify-center self-end" >
                        Know More
                        <ArrowRight className="h-5" />
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default About;
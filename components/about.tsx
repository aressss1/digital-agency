import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const About = () => {
    return (
        <div className="lg:px-20 md:px-14 px-4 py-5 bg-stone-50  " >
            <div className="bg-dark_blue flex flex-col gap-5 px-5 rounded-2xl py-20 " >
                <div className="text-stone-50 text-lg font-normal ">
                    01 / About
                </div>
                <div className=" text-stone-50 text-6xl font-medium ">
                    Provide the best service, with ideas that are out of the box
                </div>
                <div className="flex justify-between" >
                    <div className=" text-stone-50 text-xl font-normal leading-10">
                        Sed duis leo hendrerit tincidunt nisl. At eu ut sagittis sollicitudin quisque nisl. Lacinia convallis pulvinar lacinia pharetra nulla fringilla consectetur. Id facilisis ac pharetra vitae. Sed etiam orci lacus aliquam. Feugiat quam fringilla odio ornare dui sapien. Et consectetur nam ipsum eleifend.
                    </div>
                    <Button className="bg-amber text-black flex items-center gap-4 rounded-[2.5rem] w-[13rem] h-[6rem]  justify-end" >
                        Know More
                        <ArrowRight className="h-5" />
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default About;
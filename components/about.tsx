import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const About = () => {
    const parentVaraiant = {
        visible: {
            opacity: 1,
            y: 0,
        },
        hidden: { opacity: 0, y: 200 },
    }

    return (
        <motion.div
            className="lg:px-20 md:px-14 px-4 py-12 bg-stone-50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
                duration: 0.6,
                ease: "easeInOut"
            }}
            variants={parentVaraiant}
        >
            <div
                className="bg-dark_blue flex flex-col gap-5 lg:px-12 md:px-8 px-4 rounded-2xl lg:py-12 md:py-8 py-4 "
            >
                <div className="text-stone-50 lg:text-lg md:text-base text-sm font-light ">
                    01 / About
                </div>
                <div className="lg:w-[49rem] md:w-[22rem] text-stone-50 lg:text-6xl md:text-2xl text-xl font-medium ">
                    Provide the best service, with ideas that are out of the box
                </div>
                <div className="flex md:flex-row flex-col gap-2 md:gap-0 justify-between" >
                    <div className="lg:w-[46rem] md:w-[25rem] text-stone-50 lg:text-xl md:text-sm text-sm font-normal lg:leading-10 leading-6  ">
                    We're the embodiment of exceptional service and unconventional creativity. At Powerful Digital Branding Agency, our passion lies in redefining norms and elevating brands beyond the ordinary. With a commitment to innovative thinking, we craft solutions that transcend expectations, pushing the boundaries of digital excellence. 
                    </div>
                    <Button className="bg-amber hover:bg-stone-50 text-black flex items-center gap-4 rounded-[2rem] lg:w-[13rem] md:w-[9rem]  lg:h-[5rem] md:h-[3rem]  justify-center self-end" >
                        Know More
                        <ArrowRight className="h-5" />
                    </Button>
                </div>
            </div>
        </motion.div>
    );
}

export default About;
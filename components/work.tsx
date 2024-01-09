import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import { Element } from "react-scroll";


const Work = () => {
    const projectsContent = [
        {
            id: 1,
            imgSrc: "/project/project-1.svg",
            title: "Project HighUp",
            description: "Engaged in a comprehensive branding overhaul, refreshed web design, and SEO optimization, resulting in a 40% increase in web traffic within three months."
        },
        {
            id: 2,
            imgSrc: "/project/project-2.svg",
            title: "Skyline Solutions",
            description: "Collaborated with Skyline Solutions to revitalize their advertising strategy yielding a 50% rise in click-through rates and a notable boost in brand recognition."
        },
        {
            id: 3,
            imgSrc: "/project/project-3.svg",
            title: "TechWave Innovations",
            description: "Partnered with TechWave Innovations to create an immersive digital  leading to a 60% increase in user engagement and a 35% rise in conversion rates."
        },
        {
            id: 4,
            imgSrc: "/project/project-4.svg",
            title: "Nature's Bounty Co.",
            description: "Assisted Nature's Bounty Co. in market research and analysis resulting in a 30% growth in market share within the targeted regions."
        },
    ]

    const getBgColorClass = (id: number) => {
        switch (id) {
            case 1:
                return 'bg-orange';
            case 2:
                return 'bg-emerald';
            case 3:
                return 'bg-amber';
            case 4:
                return 'bg-pink';
            default:
                return 'bg-orange';
        }
    };

    const variant1 = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -50 },
    }

    const variant2 = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -50 },
    }

    const variant3 = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: 50 },
    }

    const variant4 = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
    }

    return (
        <Element name="work">
            <div
                className="flex flex-col md:gap-8 gap-4  lg:px-20 md:px-14 px-4 lg:py-16 py-10 bg-stone-50 "
            >

                <div
                    className="flex flex-col md:gap-8 gap-4"
                >
                    <motion.div
                        className="text-dark_blue lg:text-lg md:text-base text-sm font-normal "
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.6,
                            ease: "easeInOut"
                        }}
                        variants={variant1}

                    >
                        03 / Work
                    </motion.div>

                    <div className="flex justify-between md:flex-row flex-col md:gap-0 gap-1" >
                        <motion.div
                            className="lg:w-[56rem] md:w-[40rem] text-dark_blue lg:text-7xl md:text-5xl text-3xl  md:font-medium font-semibold lg:leading-[5rem] md:leading-[3.5rem] leading-[2.5rem] "
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                ease: "easeInOut",
                            }}
                            variants={variant2}
                        >
                            The projects we have done
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                ease: "easeInOut",
                            }}
                            variants={variant3}
                        >
                            <Button className="bg-amber hover:text-stone-50 text-black flex items-center gap-4 rounded-[2rem] lg:w-[13rem] md:w-[9rem]  lg:h-[5rem] md:h-[3rem]  justify-center md:self-center self-end " >
                                Know More
                                <ArrowRight className="h-5 hover:text-stone-50 " />
                            </Button>
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    className="grid lg:grid-cols-4 md:grid-cols-2 custom-grid-cols overflow-x-auto no-scrollbar gap-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                    }}
                    variants={variant4}
                >
                    {projectsContent.map((project) => (
                        <Card key={project.id} className={` rounded-[2rem] ${getBgColorClass(project.id)} hover:scale-105 cursor-pointer `} >
                            <CardHeader className="lg:p-6 md:p-5 p-4" >
                                <Image
                                    src={project.imgSrc}
                                    alt="image"
                                    className="lg:h-[54px] md:h-[45px] h-[38px] self-start"
                                />
                                <CardTitle className=" text-stone-50 md:text-2xl text-lg font-semibold" >
                                    {project.title}
                                </CardTitle>
                            </CardHeader>
                            <CardDescription className=" text-stone-50 md:text-xl text-base font-normal lg:leading-9 md:leading-8 lg:px-6 md:px-5 px-4 lg:pb-6 md:pb-5 pb-4 " >
                                {project.description}
                            </CardDescription>
                        </Card>
                    ))}
                </motion.div>
            </div>
        </Element>
    );
}

export default Work;
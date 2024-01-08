import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { motion } from "framer-motion";


const Work = () => {
    const projectsContent = [
        {
            id: 1,
            imgSrc: "/work/calendar.svg",
            title: "Sed pellent",
            description: "Eu scelerisque amet amet malesuada id ultrices morbi. Vitae purus mauris hac nisi habitasse donec. Vitae integer massa in blandit."
        },
        {
            id: 2,
            imgSrc: "/work/dashboard.svg",
            title: "Auctor nulla",
            description: "Eu scelerisque amet amet malesuada id ultrices morbi. Vitae purus mauris hac nisi habitasse donec. Vitae integer massa in blandit."
        },
        {
            id: 3,
            imgSrc: "/work/Loading.svg",
            title: "Elit arcu",
            description: "Eu scelerisque amet amet malesuada id ultrices morbi. Vitae purus mauris hac nisi habitasse donec. Vitae integer massa in blandit."
        },
        {
            id: 4,
            imgSrc: "/work/emoji.svg",
            title: "Ptesque inter",
            description: "Eu scelerisque amet amet malesuada id ultrices morbi. Vitae purus mauris hac nisi habitasse donec. Vitae integer massa in blandit."
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

    const parentVaraiant = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 200 },
    }

    const childVariant = {
        visible: { opacity: 1, x: -1 },
        hidden: { opacity: 0, x: 400 },
    }

    return (
        <div className="flex flex-col md:gap-8 gap-4  lg:px-20 md:px-14 px-4 lg:py-16 py-10 bg-stone-50 " >

            <motion.div
                className="flex flex-col md:gap-8 gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                    duration: 0.6,
                    ease: "easeInOut"
                }}
                variants={parentVaraiant}
            >
                <div className="text-dark_blue lg:text-lg md:text-base text-sm font-normal ">
                    03 / Work
                </div>

                <div className="flex justify-between md:flex-row flex-col md:gap-0 gap-1" >
                    <div className="lg:w-[56rem] md:w-[40rem] text-dark_blue lg:text-7xl md:text-5xl text-3xl  md:font-medium font-semibold lg:leading-[5rem] md:leading-[3.5rem] leading-[2.5rem] ">
                        The projects we have done
                    </div>
                    <Button className="bg-amber text-black flex items-center gap-4 rounded-[2rem] lg:w-[13rem] md:w-[9rem]  lg:h-[5rem] md:h-[3rem]  justify-center md:self-center self-end " >
                        Know More
                        <ArrowRight className="h-5" />
                    </Button>
                </div>
            </motion.div>

            <div
                className="grid lg:grid-cols-4 md:grid-cols-2 custom-grid-cols overflow-x-auto no-scrollbar gap-4"
            >
                {projectsContent.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                            delay: 0.3 + index * 0.1
                        }}
                        variants={childVariant}
                    >
                        <Card  className={` rounded-[2rem] ${getBgColorClass(project.id)} `} >
                            <CardHeader className="lg:p-6 md:p-5 p-4" >
                                <Image
                                    src={project.imgSrc}
                                    alt="image"
                                    className="lg:h-[72px] md:h-[45px] h-[38px] self-start"
                                />
                                <CardTitle className=" text-stone-50 md:text-2xl text-lg font-semibold" >
                                    {project.title}
                                </CardTitle>
                            </CardHeader>
                            <CardDescription className=" text-stone-50 md:text-xl text-base font-normal lg:leading-9 md:leading-8 lg:px-6 md:px-5 px-4 lg:pb-6 md:pb-5 pb-4 " >
                                {project.description}
                            </CardDescription>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Work;
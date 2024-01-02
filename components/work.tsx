import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";

const Work = () => {
    const projectsContent = [
        {
            id: 1,
            imgSrc: "/work/calendar.svg",
            title: "Sed pellent",
            description: "Eu scelerisque amet amet malesuada id ultrices morbi. Vitae purus mauris hac nisi habitasse donec. Vitae integer massa in blandit."
        },
        {
            id:2,
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

    return (
        <div className="flex flex-col md:gap-8 gap-6  lg:px-20 md:px-14 px-4 lg:py-16 py-10 bg-stone-50 " >
            <div className="text-dark_blue lg:text-lg md:text-base text-sm font-light ">
                03 / Work
            </div>

            <div className="flex justify-between" >
                <div className="lg:w-[56rem] md:w-[40rem] text-dark_blue lg:text-7xl md:text-5xl text-3xl  font-medium lg:leading-[5rem] md:leading-[3.5rem] leading-[2.5rem] ">
                    The projects we have done
                </div>
                <Button className="bg-amber text-black flex items-center gap-4 rounded-[2rem] lg:w-[13rem] md:w-[9rem]  lg:h-[5rem] md:h-[3rem]  justify-center self-center" >
                    Know More
                    <ArrowRight className="h-5" />
                </Button>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-col-4 overflow-x-auto no-scrollbar gap-4" >
                {projectsContent.map((project) => (
                    <Card key={project.id} className={` rounded-[2rem] ${getBgColorClass(project.id)} `} >
                        <CardHeader>
                            <Image 
                                src={project.imgSrc}
                                alt="image"
                                className="h-[72px] self-start"
                            />
                            <CardTitle className=" text-stone-50 text-2xl font-semibold" >
                                {project.title}
                            </CardTitle>
                        </CardHeader>
                        <CardDescription className=" text-stone-50 text-xl font-normal leading-9 px-6 pb-6  " >
                            {project.description}
                        </CardDescription>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Work;
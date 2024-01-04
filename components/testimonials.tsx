'use client'

import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import { Quote } from 'lucide-react';

const Testimonails = () => {
    const testimonialsContent = [
        {
            id: 1,
            content: " Working with this team was fantastic - great communication and swift execution. Looking forward to collaborating again soon! ",
            authorName: "Ryan Hoofman",
            authorRole: "CEO at HighUP",
            authorImg: "/clients/client-1.jpg"
        },
        {
            id: 2,
            content: " This Teams's efficiency and clear communication made working together a pleasure. Excited for the opportunity to collaborate again soon! ",
            authorName: "Austin Distel",
            authorRole: "Founder at GrowTogether",
            authorImg: "/clients/client-2.jpg"
        },
        {
            id: 3,
            content: " Collaborating with this team was smooth thanks to your their communication and efficiency. Looking forward to the next project together!  ",
            authorName: "Mark Howard",
            authorRole: "Founders at Builders",
            authorImg: "/clients/client-3.jpg"
        },
        {
            id: 4,
            content: " I really appreciated this team's quick and effective communication. Can't wait to work together again! ",
            authorName: "Aatik Tasneem",
            authorRole: "CEO at BigSpook",
            authorImg: "/clients/client-4.jpg"
        },
    ]

    return (
        <div className="bg-dark_blue" >
            <div className="lg:px-28 md:px-14 px-4 lg:py-16 py-10" >
                <Carousel
                    // plugins={[
                    //     Autoplay({
                    //         delay: 4000,
                    //       }),
                    // ]}
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                >
                    <CarouselContent>
                        {testimonialsContent.map((testimonial) => (
                            <CarouselItem key={testimonial.id} >
                                <div className="flex flex-col gap-12" >

                                    <div className="lg:w-[58rem] md:w-[32rem] flex gap-4 text-stone-50 lg:text-6xl md:text-4xl text-2xl lg:leading-[4rem] md:leading-[3rem] font-medium " >
                                        <Quote className="rotate-180 h-12 w-48 "  />
                                        {testimonial.content}
                                         <Quote className="h-12 w-48 "  />
                                    </div>


                                    <div className="flex md:gap-8 gap-4 items-center " >
                                        <Image
                                            src={testimonial.authorImg}
                                            alt={testimonial.authorName}
                                            className="lg:h-28 lg:w-28 md:w-20 md:h-20 w-16 h-16 rounded-full object-cover "
                                        />
                                        <div className="flex flex-col justify-center" >
                                            <div className=" text-stone-50 lg:text-4xl md:text-2xl text-lg font-medium" >
                                                {testimonial.authorName}
                                            </div>
                                            <div className=" text-stone-50  self-baseline lg:text-2xl md:text-xl text-base lg:font-normal md:font-light" >
                                                {testimonial.authorRole}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <CarouselNext className="bg-amber text-white border-0 " />
                    <CarouselPrevious className="bg-orange text-white border-0 " />
                </Carousel>
            </div>
        </div>
    );
}

export default Testimonails;
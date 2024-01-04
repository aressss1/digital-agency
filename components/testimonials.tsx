'use client'

import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay"

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
            <div className="lg:px-24 md:px-14 px-4 lg:py-16 py-10" >
                <Carousel
                    plugins={[
                        Autoplay({
                            delay: 4000,
                          }),
                    ]}
                    opts={{
                        align: "start",
                        loop: true,
                      }}
                >
                    <CarouselContent>
                        {testimonialsContent.map((testimonial) => (
                            <CarouselItem key={testimonial.id} >
                                <div className="flex flex-col gap-12" >

                                    <div className="w-[56rem] text-stone-50 text-6xl font-medium " >
                                        {testimonial.content  }
                                    </div>


                                    <div className="flex gap-8 items-center " >
                                        <Image
                                            src={testimonial.authorImg}
                                            alt={testimonial.authorName}
                                            className="h-28 w-28 rounded-full object-cover "
                                        />
                                        <div className="flex flex-col gap-3 justify-center" >
                                            <div className=" text-stone-50 text-4xl font-medium" >
                                                {testimonial.authorName}
                                            </div>
                                            <div className=" text-stone-50  self-baseline text-2xl font-normal" >
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
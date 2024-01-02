import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

const Testimonails = () => {
    const testimonialsContent = [
        {
            id: 1,
            content: "‘I really enjoyed working with you guys, you guys are ver communicative and quick to do the job. I can’t wait to work with you again!!’",
            authorName: "John Doe",
            authorRole: "CEO at BigSpook",
            authorImg: "/clients/client-1.png"
        },
        {
            id: 2,
            content: "‘I really enjoyed working with you guys, you guys are ver communicative and quick to do the job. I can’t wait to work with you again!!’",
            authorName: "John Doe",
            authorRole: "CEO at BigSpook",
            authorImg: "/clients/client-1.png"
        },
        {
            id: 3,
            content: "‘I really enjoyed working with you guys, you guys are ver communicative and quick to do the job. I can’t wait to work with you again!!’",
            authorName: "John Doe",
            authorRole: "CEO at BigSpook",
            authorImg: "/clients/client-1.png"
        },
    ]

    return (
        <div className="bg-dark_blue" >
            <div className="lg:px-20 md:px-14 px-4 lg:py-16 py-10" >
                <Carousel>
                    <CarouselContent>
                        {testimonialsContent.map((testimonial) => (
                            <div className="flex flex-col gap-4" key={testimonial.id} >
                                <CarouselItem >
                                    <div className=" text-stone-50 text-7xl font-medium " >
                                        {testimonial.content}
                                    </div>
                                </CarouselItem>
                                <div className="flex justify-between" >
                                    <div className="flex gap-2" >
                                        <Image 
                                            src={testimonial.authorImg}
                                            alt={testimonial.authorName}
                                        />
                                        <div className="flex flex-col gap-3 items-center justify-center" >
                                            <div className=" text-stone-50 text-4xl font-medium" >
                                                {testimonial.authorName}
                                            </div>
                                            <div className=" text-stone-50 text-2xl font-normal" >
                                                {testimonial.authorRole}
                                            </div>
                                        </div>
                                    </div>

                                    <CarouselNext  className="bg-amber text-white" />
                                    <CarouselPrevious  className="bg-orange text-white" />
                                </div>
                            </div>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    );
}

export default Testimonails;
import Image from "next/image";

const Services = () => {
    const servicesContent = [
        {
            number: "01",
            serviceName: "Advertising",
            serviceDescription: "Eu scelerisque amet amet malesuada id ultrices morbi. Vitae purus mauris hac nisi habitasse donec. Vitae integer massa in blandit."
        },
        {
            number: "02",
            serviceName: "Research",
            serviceDescription: "Eu scelerisque amet amet malesuada id ultrices morbi. Vitae purus mauris hac nisi habitasse donec. Vitae integer massa in blandit."
        },
        {
            number: "03",
            serviceName: "Social Media Marketing",
            serviceDescription: "Eu scelerisque amet amet malesuada id ultrices morbi. Vitae purus mauris hac nisi habitasse donec. Vitae integer massa in blandit."
        },
        {
            number: "04",
            serviceName: "Search Engine Optimization",
            serviceDescription: "Eu scelerisque amet amet malesuada id ultrices morbi. Vitae purus mauris hac nisi habitasse donec. Vitae integer massa in blandit."
        },
        {
            number: "05",
            serviceName: "Web Design",
            serviceDescription: "Eu scelerisque amet amet malesuada id ultrices morbi. Vitae purus mauris hac nisi habitasse donec. Vitae integer massa in blandit."
        },
    ]


    return (
        <div className="flex flex-col gap-6  lg:px-20 md:px-14 px-4 py-5 bg-stone-50 " >
            <div className="text-stone-50 lg:text-lg md:text-base text-sm font-light ">
                02 / Services
            </div>
            <div className=" text-gray-900 text-7xl font-medium ">
                We offer several services for you
            </div>
            <div className="flex justify-between" >
                <Image
                    src="/servies_banner.png"
                    alt="servies_banner"
                />
                <div className="flex flex-col gap-2" >
                    {servicesContent.map((service) => (
                        <div className="flex items-start" >
                            <div className="" >
                                {service.number}
                            </div>
                            <div className="flex gap-4" >
                                <div className="text-dark_blue text-3xl font-semibold" >
                                    {service.serviceName}
                                </div>
                                <div className=" text-gray-900 text-2xl font-normal leading-10">
                                    Eu scelerisque amet amet malesuada id ultrices morbi. Vitae purus mauris hac nisi habitasse donec. Vitae integer massa in blandit.
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Services;
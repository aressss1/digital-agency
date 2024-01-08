import Image from "next/image";
import { motion } from "framer-motion";

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

    const parentVaraiant = {
        visible: {opacity: 1, y: 0},
        hidden: { opacity: 0, y: 200 },
    }

    const childVariant1 = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -200 },   
    }

    const childVariant2 = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -200 },   
    }

    return (
        <div
            className="flex flex-col md:gap-8 gap-4  lg:px-20 md:px-14 px-4 lg:py-16 py-10 bg-stone-50 "
        >
            <motion.div
             className="flex flex-col md:gap-6 gap-4" 
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
                    02 / Services
                </div>
                <div className="lg:w-[56rem] md:w-[40rem] text-dark_blue lg:text-7xl md:text-5xl text-3xl  md:font-medium font-semibold lg:leading-[5rem] md:leading-[3.5rem] leading-[2.5rem] ">
                    We offer several services for you
                </div>
            </motion.div>

            <div className="flex lg:flex-row flex-col gap-10  justify-between" >
                <motion.div
                    variants={childVariant1}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.6,
                        ease: "easeInOut",
                        delay: 0.4
                    }}
                >
                    <Image
                        src="services_banner.png"
                        alt="services_banner"
                        className="lg:h-auto lg:w-[46rem] md:h-[27rem] md:w-[24rem] w-[18rem] h-[22rem] "
                    />
                </motion.div>

                <motion.div
                    className="flex flex-col md:w-[39rem] lg:w-auto lg:gap-2 gap-4 lg:ml-[80px]"
                    variants={childVariant2}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.6,
                        ease: "easeInOut",
                        delay: 0.4
                    }}
                >
                    {servicesContent.map((service) => (
                        <div key={service.number} className="group  flex items-baseline gap-5  font-semibold " >
                            <div className="md:text-xl text-lg text-orange md:text-dark_blue group-hover:text-orange" >
                                {service.number}
                            </div>
                            <div className="flex flex-col gap-4" >
                                <div className="text-dark_blue lg:text-2xl md:text-xl text-lg font-semibold group-hover:text-orange" >
                                    {service.serviceName}
                                </div>
                                <div className=" text-gray-900 lg:text-xl  text-base font-normal lg:leading-8 leading-5 ">
                                    {service.serviceDescription}
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

export default Services;
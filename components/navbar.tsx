import Image from "next/image";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";


const Navbar = () => {
    const navLinks = [
        {
            label: 'About Us',
            link: "/#about"
        },
        {
            label: 'Our Services',
            link: "/#services"
        },
        {
            label: 'Our Work',
            link: "/#work"
        },
        {
            label: 'Our Clients',
            link: "/#clients"
        },
    ]

    return (
        <div
            className="flex bg-stone-50 lg:px-20 md:px-14 px-4 py-6 justify-between"
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut"
                }}
            >
                <Image
                    src="logo-1.svg"
                    alt="logo"
                    className="text-orange"
                />
            </motion.div>
            <div className="hidden lg:flex gap-5  items-center " >
                {navLinks.map((nav, index) => (
                    <motion.div
                        key={nav.label}
                        className="text-gray-900 text-base  font-normal ease-in-out duration-[0.3s]  "
                        initial={{ opacity: 0, y: -25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                            delay: 0.3 + index * 0.1
                        }}
                    >
                        <Link href={nav.link} >
                            <a>
                        {nav.label}
                            </a>
                        </Link>
                    </motion.div>
                ))}
            </div>
            <motion.div
                className="flex md:gap-4 ease-in-out duration-[0.3s]"
                initial={{ opacity: 0, y: -25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 0.6,
                }}
            >
                <Button className="bg-orange flex flex-col rounded-3xl text-stone-50 text-base font-medium " >
                    <p className="lg:mr-9 mr-5" >
                        Contact Us
                    </p>
                    <Separator className="pt-[2px]" />
                </Button>

                <Button className="lg:hidden flex h-10 items-center justify-center bg-stone-50 hover:bg-stone-50 hover:text-orange text-black  " >
                    <Menu />
                </Button>
            </motion.div>

        </div>
    );
}

export default Navbar;
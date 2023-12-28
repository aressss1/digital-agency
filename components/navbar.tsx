import Image from "next/image";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";

const Navbar = () => {
    const navLinks = [
        {
            label: 'About Us',
        },
        {
            label: 'Our Services',
        },
        {
            label: 'Our Clients',
        },
        {
            label: 'Our Works',
        },
        {
            label: 'Events',
        },
    ]

    return (
        <div className="flex bg-stone-50 lg:px-20 md:px-14 px-4 py-6 justify-between" >
            <Image
                src="logo.svg"
                alt="logo"
            />
            <div className="hidden md:flex lg:gap-5 md:gap-3 items-center  " >
                {navLinks.map((nav) => (
                    <div key={nav.label} className="text-gray-900 text-base font-normal" >
                        {nav.label}
                    </div>
                ))}
            </div>
            <Button className="bg-orange flex flex-col rounded-3xl text-stone-50 text-base font-medium " >
                <p className="mr-9" >
                    Contact Us
                </p>
                <Separator className="pt-[2px]" />
            </Button>

            {/* Responsive Navbar / Hamburger Menu */}
            <Sheet >
                <SheetTrigger asChild className="md:hidden" >
                    <Button variant="outline"  >
                        <Menu />
                    </Button>
                </SheetTrigger>
                <SheetDescription>
                    <div className="flex flex-col gap-5  justify-center items-center  " >
                        {navLinks.map((nav) => (
                            <div key={nav.label} className="text-gray-900 text-base font-normal" >
                                {nav.label}
                            </div>
                        ))}
                    </div>
                </SheetDescription>
            </Sheet>
        </div>
    );
}

export default Navbar;
import Image from "next/image";
import { Button } from "./ui/button";

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
            <div className="flex gap-5 items-center" >
                {navLinks.map((nav) => (
                    <div key={nav.label} className="text-gray-900 text-lg font-medium" >
                        {nav.label}
                    </div>
                ))}
            </div>
            <Button className="bg-orange rounded-3xl text-stone-50 text-lg font-medium underline " >
                Contact Us
            </Button>
        </div>
     );
}
 
export default Navbar;
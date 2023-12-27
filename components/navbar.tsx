import Image from "next/image";
import { Button } from "./ui/button";

const Navbar = () => {
    return ( 
        <div className=" bg-stone-950 text-white flex justify-between lg:px-20 py-10" >
            <Image 
                src="logo.svg"
                alt="logo"
            />
            <div className="flex gap-4 items-center fontcs " >
                <div className="text-white text-base font-normal font-['Clash Display']">About us</div>
                <div className="text-white text-base font-normal font-['Clash Display']">Store</div>
                <div className="text-white text-base font-normal font-['Clash Display']">Games</div>
                <Button className="text-base font-semibold font-['Clash Display']" >
                    Connect Wallet
                </Button>
            </div>
        </div>
     );
}
 
export default Navbar;
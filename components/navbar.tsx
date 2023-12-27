import Image from "next/image";
import { Button } from "./ui/button";

const Navbar = () => {
    return ( 
        <div className=" bg-stone-950 text-white flex justify-between lg:px-20 py-6" >
            <Image 
                src="logo.svg"
                alt="logo"
            />
            <div className="flex gap-12 items-center  " >
                <div className="md:flex hidden text-white text-base font-normal ">About us</div>
                <div className="text-white text-base font-normal md:flex hidden ">Store</div>
                <div className="text-white text-base font-normal md:flex hidden ">Games</div>
                <Button className="text-base bg-white text-black hover:bg-white hover:text-black/30 font-semibold " >
                    Connect Wallet
                </Button>
            </div>
        </div>
     );
}
 
export default Navbar;
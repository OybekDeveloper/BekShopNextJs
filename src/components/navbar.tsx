import Link from "next/link";
import React from "react";
import Image from "next/image";
import Logo from '@/../public/logo.png'
const Navbar=()=>{
    return(
        <header className="flex items-center px-4 md:px-12 py-2 justify-between fixed  top-0 w-full z-50
        shadow bg-cyan-800 ">
            <Link href={'/'} className="flex justify-center items-center">
                <Image src={Logo} alt={"logo"} width={40} height={40} style={{borderRadius:"10px"}}/>
                <h1 className="text-white font-medium px-3" style={{fontSize:"20px"}}>Bek shop</h1>
            </Link>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <Link href={'/'} className=" text-white mr-5 hover:text-blue-200">Home</Link>
                <Link href={'/products'} className="mr-5 text-white  hover:text-blue-200">All product</Link>
                <Link href={'/contact'} className="mr-5 text-white  hover:text-blue-200">Contact</Link>
            </nav>
            <div className="flex  items-center space-x-2.5 text-sm">
                <Link href={'/shopping-cart'}>
                    <button className="button bg-indigo-500 text-white border-transparent hover:border-blue-600
                 hover:bg-white hover:text-black">
                        My bag
                    </button>
                </Link>
            </div>
        </header>
    )
}

export default Navbar;
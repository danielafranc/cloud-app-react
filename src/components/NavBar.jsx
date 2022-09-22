import React, {useState} from 'react'
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'



export const NavBar = () => {
const [nav, setNav] = useState(false);
const handleClick = () => setNav(!nav);

    return (
        <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
           <div className="px-2 flex justify-between items-center w-full h-full m-auto">

                <div className="flex items-center">
                    <h1 className="text-3xl font-bold mr-4 sm:text-4xl ">BRAND.</h1>
                    <ul className="hidden md:flex">
                   <li><Link to="home" smooth={true} offset={500}>Home</Link></li>
                   <li><Link to="about" smooth={true} offset={200}>About</Link></li>   
                   <li><Link to="support" smooth={true} offset={50}>Support</Link></li>   
                   <li><Link to="platforms" smooth={true} offset={50}>Platforms</Link></li>   
                   <li><Link to="pricing" smooth={true} offset={50}>Pricing</Link></li>   

                    </ul>
                </div>
                <div className="hidden md:flex pr-4">
                      <button className="border-none bg-transparent text-black mr-4">Sing In</button>
                      <button className="px-8 py-3">Sing Up</button>
                </div>
                <div className="md:hidden mr-4" onClick={handleClick}>
                    {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5"/> }
                
                </div>
           </div> 

            <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
                
            <li className="border-b-2 border-zinc-300 w-full">Home</li>
            <li className="border-b-2 border-zinc-300 w-full">About</li>
            <li className="border-b-2 border-zinc-300 w-full">Support</li>
            <li className="border-b-2 border-zinc-300 w-full">Pricing</li>
            <div className="flex flex-col my-4">
                <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4 border-indigo-600">Sign in</button>
                <button className="px-8 py-3">Sign Up</button>

            </div>

            </ul>

            

        </div>
    )
}
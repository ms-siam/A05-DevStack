import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

import logo from "../assets/logo-text.png";

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="sticky top-0 z-50  bg-white border-b border-gray-100">
            <nav className="grid grid-cols-[1fr_auto_1fr] items-center p-4 container px-3 mx-auto mt-4">
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <IoMdClose className="scale-125" /> : <GiHamburgerMenu />}
            </button>
            <div className="">
                <img src={logo} alt="" />
            </div>
            <ul className="hidden md:flex justify-between items-center gap-4">
                <li className="text-pink-500 font-semibold hover:text-purple-700 cursor-text">Home</li>
                <li className="hover:text-pink-500 cursor-text">Technologies</li>
                <li className="hover:text-pink-500 cursor-text">Projects</li>
                <li className="hover:text-pink-500 cursor-text">About</li>
                <li className="hover:text-pink-500 cursor-text">Contact</li>
            </ul>
            <div className="flex justify-end items-center gap-5">
                <button className="border-0 bg-transparent p-0 hover:text-pink-500 cursor-pointer focus:outline-none">Sign In</button>
                <button className="btn btn-secondary rounded-full">Sign Up</button>
            </div>
            {menuOpen && (
                <div className="shadow-lg flex flex-col p-4 gap-4 md:hidden ">
                    <ul className="flex flex-col gap-4 font-medium text-slate-700">
                        <li>Home</li>
                        <li>Technologies</li>
                        <li>Projects</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
            )}
        </nav>
        </div>
    );
};

export default Nav;

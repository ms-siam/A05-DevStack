import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

import logo from "../assets/logo-text.png";

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="grid grid-cols-3 items-center container px-3 mx-auto mt-4 sticky">
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <IoMdClose className="scale-125" /> : <GiHamburgerMenu />}
            </button>
            <div className="">
                <img src={logo} alt="" />
            </div>
            <ul className="hidden md:flex justify-between items-center gap-4">
                <li>Home</li>
                <li>Technologies</li>
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="flex justify-end items-center gap-5">
                <button className="">Sign In</button>
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
    );
};

export default Nav;

import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";

import logo from '../assets/logo-text.png'

const Nav = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className='flex justify-between container mx-auto mt-4 sticky'>
            <button><GiHamburgerMenu/></button>
            <div>
                <img src={logo} alt="" />
            </div>
            <ul className='hidden md:flex justify-between items-center gap-4'>
                <li>Home</li>
                <li>Technologies</li>
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className='flex justify-end items-center gap-5'>
                <button className=''>Sign In</button>
                <button className="btn btn-secondary rounded-full">Sign Up</button>
            </div>
        </nav>
    );
};

export default Nav;
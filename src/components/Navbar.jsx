import React from 'react'
import { navLinks } from '../data'
import { headerLogo } from "../assets/images";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
    return (
        <header className="px-0 py-8 w-full absolute z-10">
            <nav className="flex justify-between items-center">
                <a href="">
                    <img src={headerLogo}
                        alt="logo"
                        className="m-0 w-[129px] h-[29px]" />
                </a>
                <ul className="flex-1 flex justify-center items-center max-lg:hidden gap-16">
                    {navLinks.map((i) => (
                        <li key={i.label}>
                            <a href="">
                                {i.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="flex gap-2 leading-normal font-medium font-mono max-lg:hidden">
                    <a href="">Sign In</a>
                    <span>/</span>
                    <a href="">Sign Up</a>
                </div>
                <div className="hidden max-lg:block">
                    <GiHamburgerMenu height={25} width={25} />
                </div>
            </nav>

        </header>
    )
}

export default Navbar

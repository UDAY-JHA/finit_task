import React, { useState } from 'react';
import { NavLink } from 'react-router';
import loogo from '../images/logo.jpg';
import { motion, useScroll, useTransform } from "motion/react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { scrollYProgress } = useScroll();

    const backgroundColor = useTransform(
        scrollYProgress,
        [0, 0.4],
        ['rgba(46,10,80,0)', 'rgba(0,0,0,1)']
    );
    const txtcolor = useTransform(
        scrollYProgress,
        [0, 0.4],
        ['black', 'white']
    );

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <motion.nav
            style={{ backgroundColor }}
            className="fixed w-full z-[999]  bg-[#2e0a50] py-2 px-4 flex items-center justify-between"
        >
            <img src={loogo} alt="FiNIT Logo" className="w-8 h-8 bg-amber-300" />

            {/* Hamburger icon - visible on small devices only */}
            <button
                onClick={toggleMenu}
                className="text-white text-2xl md:hidden"
            >
                <i className={`fa ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>

            {/* Menu items */}
            <motion.ul style={{ color: txtcolor }}
                className={`
                    ${menuOpen ? 'flex' : 'hidden'}
                    flex-col absolute top-full left-0 w-full bg-[#2e0a50] md:flex md:flex-row md:static md:w-auto md:bg-transparent md:items-center gap-4 md:gap-10 px-4 md:px-0
                `}
            >
                <li className="py-2 md:py-0">
                    <NavLink to="/" className="block hover:bg-[#9b51e0] p-2 rounded transition">Home</NavLink>
                </li>
                <li className="py-2 md:py-0">
                    <NavLink to="/aboutus" className={({isActive})=>isActive?'block hover:bg-black p-2':'block p-2'}>About Us</NavLink>
                </li>
                <li className="py-2 md:py-0">
                    <NavLink to="/teamevents" className="block hover:bg-[#9b51e0] p-2 rounded transition">Team Events</NavLink>
                </li>
                <li className="py-2 md:py-0">
                    <NavLink to="/contactus" className="block hover:bg-[#9b51e0] p-2 rounded transition">Contact Us</NavLink>
                </li>
            </motion.ul>
        </motion.nav>
    );
}

export default Navbar;

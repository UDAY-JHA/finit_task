import React, { useState } from 'react'
import { NavLink } from 'react-router'
import loogo from '../images/logo.jpg'
function Navbar() {
    const [hide, sethide]=useState(false);
    const [logo, setlogo]=useState(false);
    let logovar;
    if(logo){
        logovar="fa-times"
    }
    else{
        logovar="fa-bars"
    }
  return (
    <div>
        <nav className=' fixed w-screen sm:flex sm:flex-col sm:justify-between py-1 backdrop-blur-2xl text-[#2e0a50] md:flex md:flex-row'>
            <img src={loogo} alt="FiNIT Logo" className="w-4 h-4 bg-amber-300  mx-5" />
            <div>
            <i
                className={`fa ${logovar} ${"hidden"} block text-white text-2xl cursor-pointer `}
                onClick={() => {
                    sethide(!hide);
                    setlogo(!logo);
                }}
            ></i>

            <ul className={`text-bold w-full md:flex md:flex-row md:gap-10 md:justify-end md:mx-auto ${hide==0?"hidden":"flex"} flex-col`} >
                <li className=' w-auto md:float-left md:w-auto mx-3 font-medium text-left hover:bg-[#9b51e0] p-4 transition duration-300 text-xl'><NavLink className="" to="/">Home</NavLink></li>
                <li className=' w-auto md:float-left md:w-auto mx-3 font-medium text-left hover:bg-[#9b51e0] p-4 transition duration-300 text-xl'><NavLink className="" to="/aboutus">About Us</NavLink></li>
                <li className=' w-auto md:float-left md:w-auto mx-3 font-medium text-left hover:bg-[#9b51e0] p-4 transition duration-300 text-xl'><NavLink className="" to="/teamevents">Team Events</NavLink></li>
                <li className=' w-auto md:float-left md:w-auto mx-3 font-medium text-left hover:bg-[#9b51e0] p-4 transition duration-300 text-xl'><NavLink className="" to="/contactus">Contact Us</NavLink></li>
            </ul>
            </div>
            
        </nav>
    </div>
  )
}

export default Navbar
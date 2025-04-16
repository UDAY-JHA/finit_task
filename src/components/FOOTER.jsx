import React from 'react'
import logo from '../images/logo.jpg'
function FOOTER() {
  return (
    <div>
      <footer className="bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600  px-6 py-8 backdrop-blur-2xl text-white">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
    
    {/* Logo + Info */}
    <div className="flex flex-col items-start">
      <img src={logo} alt="FiNIT Logo" className="w-24 mb-2" />
      <p className="text-lg font-semibold mb-2">FiNIT – The Finance Society</p>
      <div className="flex gap-4 text-2xl">
        <a href="#"><i className="fab fa-youtube" /></a>
        <a href="#"><i className="fab fa-x-twitter" /></a>
        <a href="#"><i className="fab fa-linkedin" /></a>
        <a href="#"><i className="fab fa-instagram" /></a>
      </div>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="font-bold text-lg mb-2">Quick Links</h3>
      <ul className="space-y-1">
        <li><a href="#" className="hover:underline">Home</a></li>
        <li><a href="#" className="hover:underline">About</a></li>
        <li><a href="#" className="hover:underline">Events</a></li>
        <li><a href="#" className="hover:underline">Contact Us</a></li>
      </ul>
    </div>

    {/* Contact Us */}
    <div>
      <h3 className="font-bold text-lg mb-2">Contact Us</h3>
      <p>+91 79095 40155</p>
      <p>+91 6398 632 136</p>
    </div>

    {/* Location */}
    <div>
      <h3 className="font-bold text-lg mb-2">Locate Us</h3>
      <p>Maulana Azad National Institute of Technology, Bhopal</p>
      <p>MANIT Square, Near Mata Mandir</p>
      <p>PIN: 462003</p>
    </div>
  </div>

  {/* Divider & Bottom Note */}
  <div className="border-t border-cyan-300 mt-6 pt-4 text-center text-sm">
    © 2025 FiNIT – All Rights Reserved.
  </div>
</footer>

    </div>
  )
}

export default FOOTER
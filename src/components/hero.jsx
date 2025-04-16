import React from 'react'
import heroimg from '../images/heroimg.webp';
import { Button, HStack } from "@chakra-ui/react"

function Hero() {
  return (
    <section className="py-20 px-6 flex flex-col md:flex-row justify-center items-center gap-10 bg-[linear-gradient(240deg,_#f3f3f5,_#E90B8B,_#352384,_#333447)] text-white h-9/10">
      
      {/* Text Section */}
      <div className="text-center md:text-left max-w-2xl flex flex-col gap-4">
        <h1 className="text-6xl md:text-9xl font-inter leading-tight">
          <span className="block text-6xl">FiNIT</span>
        
        </h1>

        <p className="text-xl md:text-2xl mt-4">
          where innovation meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">financial literacy.</span>
        </p>

        <p className="text-2xl md:text-3xl mt-6">THE FINANCE SOCIETY</p>
        <p className="text-2xl md:text-3xl">NIT BHOPAL</p>
      <Button className='bg-teal-300 w-max p-2 cursor-pointer sm:self-center md:self-start'>Brochure</Button>

        <div className="flex justify-center md:justify-start gap-4 pt-6 text-2xl">
          <a href="#"><i className="fab fa-youtube hover:text-white transition" /></a>
          <a href="#"><i className="fab fa-x-twitter hover:text-white transition" /></a>
          <a href="#"><i className="fab fa-linkedin hover:text-white transition" /></a>
          <a href="#"><i className="fab fa-instagram hover:text-white transition" /></a>
        </div>
      </div>

      {/* Image - Hidden on small screens */}
      <img 
        src={heroimg} 
        alt="Hero" 
        className="hidden md:block w-96 h-auto object-contain" 
      />
    </section>
  );
}

export default Hero;

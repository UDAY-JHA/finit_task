import React from 'react'
import { motion } from "motion/react"
import heroimg from '../images/heroimg.webp';
import back from '../images/10651327.jpg';

import { Button, HStack } from "@chakra-ui/react"
import { easeIn } from 'motion';


function Hero() {
  return (
    <section className="py-40 px-6 flex flex-col md:flex-row justify-start items-center gap-10  h-9/10 bg-no-repeat bg-cover "
    style={{
      backgroundImage: `url(${back})`
    }}
>    

      {/* Text Section */}
      <div className="text-center md:text-left max-w-2xl flex flex-col gap-4 md:relative md:left-50">
        <p className="text-6xl md:text-9xl font-bold leading-tight">
          <motion.span
            className="block text-6xl font-js"
            initial={{ y: 500 }}
            animate={{ y: 0, opacity: [0, 0.2, 0.4, 0.6, 0.8, 1] }}
            transition={{ duration: 1 }}
          >FiNIT</motion.span>

        </p>

        <motion.p className="text-xl md:text-2xl mt-4"
          initial={{ y: 500, opacity: 0 }}
          animate={{ y: 0, opacity: [0, 0.2, 0.4, 0.6, 0.8, 1] }}
          transition={{ duration: 1, delay: 0.1, type: easeIn }}>
          where innovation meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 font-semibold">financial literacy.</span>
        </motion.p>

        <motion.p className="text-2xl md:text-3xl mt-6 font-semibold "
          initial={{ y: 500, opacity: 0 }}
          animate={{ y: 0, opacity: [0, 0.2, 0.4, 0.6, 0.8, 1] }}
          transition={{ duration: 1, delay: 0.2 }}>THE FINANCE SOCIETY</motion.p>
        <motion.p className="text-2xl md:text-3xl font-semibold"
          initial={{ y: 500, opacity: 0 }}
          animate={{ y: 0, opacity: [0, 0.2, 0.4, 0.6, 0.8, 1] }}
          transition={{ duration: 1, delay: 0.3 }}>NIT BHOPAL
        </motion.p>
<button className='mybutton'>
  <span className='myspan'>Button</span>
</button>



      </div>






      {/* Image - Hidden on small screens */}
     
    </section>
  );
}

export default Hero;

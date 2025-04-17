import React from 'react'
import heroimg from '../images/heroimg.webp';

import Hero from '../components/hero'
import { CloseButton } from "@chakra-ui/react"
import Card from '../components/CARD';
import Card2 from '../components/CARD2';
import BENTO from '../components/BENTO';
import Loader from '../components/LOADER';

function HOME() {
  return (
    <div>
      
      <Hero/>
      <Card/>
      <Card2/>
      <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold my-10 text-center mx-auto">
  IMAGE GALLERY
</p>

      <BENTO/>
    </div>
  )
}

export default HOME
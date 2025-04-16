import React from 'react'
import heroimg from '../images/heroimg.webp';

import Hero from '../components/hero'
import { CloseButton } from "@chakra-ui/react"
import Card from '../components/CARD';
import Card2 from '../components/CARD2';

function HOME() {
  return (
    <div>
      <Hero/>
      <Card/>
      <Card2/>
    </div>
  )
}

export default HOME
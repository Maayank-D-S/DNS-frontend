import React from 'react'
import { useEffect } from 'react'
import Header from '../components/Header'

import HeroSection from '../components/HeroSection'

import Footer from '../components/Footer'

import OurStory from '../components/OurStory'

const ImpactPage = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
  return (
    <div className='left-0'>
    <Header />
    
    
    <HeroSection path={"/p1.png"}/>
    
    <OurStory/>
    <Footer />
  </div>
  )
}

export default ImpactPage


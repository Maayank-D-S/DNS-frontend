import React from 'react'
import Header from '../components/Header'

import HeroSection from '../components/HeroSection'

import Footer from '../components/Footer'

import OurStory from '../components/OurStory'

const ImpactPage = () => {
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


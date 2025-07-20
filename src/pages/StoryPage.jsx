import React from 'react'
import Header from '../components/Header'

import HeroSection from '../components/HeroSection'

import Footer from '../components/Footer'

import AboutLodha from '../components/About'

import Founders from '../components/Founders'

const StoryPage = () => {
  return (
    <div className='left-0 right-0'>
    <Header />
    
    
    <HeroSection path={"/p2.png"}/>
    <AboutLodha/>
    <Founders/>
    
    
    <Footer />
  </div>
  )
}

export default StoryPage
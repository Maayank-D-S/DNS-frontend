import React from 'react'
import UnBrokerHero from '../components/UnbrokerHero'
import FeatureWithImage from '../components/FeatureWithImage'
import UbSecond from '../components/UbSecond'
import UbThree from '../components/UbThree'
import Footer from '../components/Footer'
import { useEffect } from 'react'
import UbHeader from '../components/UbHeader'

const UbPage = () => {
  useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
  return (
    <div>
      <UbHeader/>
      <UnBrokerHero/>
      <UbSecond/>
      <UbThree/>
      <FeatureWithImage/>
      <Footer/>
    </div>
  )
}

export default UbPage
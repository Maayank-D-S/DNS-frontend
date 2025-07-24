import React from 'react'
import UnBrokerHero from '../components/UnbrokerHero'
import FeatureWithImage from '../components/FeatureWithImage'
import UbSecond from '../components/UbSecond'
import UbThree from '../components/UbThree'
import Footer from '../components/Footer'
import { useEffect } from 'react'

const UbPage = () => {
  useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
  return (
    <div>
      <UnBrokerHero/>
      <UbSecond/>
      <UbThree/>
      <FeatureWithImage/>
      <Footer/>
    </div>
  )
}

export default UbPage
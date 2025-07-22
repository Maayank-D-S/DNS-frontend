import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactUs from '../components/Contact'
import { useEffect } from 'react'

export const ContactPage = () => {
  
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
  return (
    <div>
    <Header/>
    <ContactUs/>
    <Footer/>
    </div>
  )
}

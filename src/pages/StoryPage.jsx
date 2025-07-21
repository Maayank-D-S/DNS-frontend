import React, { useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutLodha from '../components/About';
import Founders from '../components/Founders';
import Footer from '../components/Footer';

const StoryPage = () => {
  // Scroll to top whenever this page is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="left-0 right-0">
      <Header />
      <HeroSection path="/p2.png" />
      <AboutLodha />
      <Founders />
      <Footer />
    </div>
  );
};

export default StoryPage;

// src/pages/CSitePage.jsx
import React from "react";
import FeatureCarousel from "../components/FeatureCarousel";
import HeroWithScrollIndicator from "../components/HeroWithScrollIndicator";
import PhoneFeatureSection from "../components/PhoneFeatureSection";
import ConnectedRoles from "../components/ConnectedRoles";
import { motion } from 'framer-motion';
import CsiteHero from "../components/CsiteHero";
import { useEffect } from "react";
import WhyChooseUs from "../components/WhyChooseUs";
import CsiteHeader from "../components/CsiteHeader";
import Footer from "../components/Footer";

export default function CSitePage() {
  useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return(
    <div className="bg-black">
    <CsiteHeader/>
    <CsiteHero/>
    <FeatureCarousel/>
    <HeroWithScrollIndicator/>
    <PhoneFeatureSection/>
    {/* <ConnectedRoles/> */}
    <Footer/>
    </div>
  );
}

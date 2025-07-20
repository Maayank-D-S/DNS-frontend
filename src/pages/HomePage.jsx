import React from "react";
import Header from "../components/Header";

import PromiseSection from "../components/PromiseSection";
import PurposeSection from "../components/PurposeSection";
import IconicProperties from "../components/IconicProperties";
import Footer from "../components/Footer";

import ExpSection from "../components/ExpSection";
import VideoBackground from "../components/VideoBackground";

const HomePage = () => {
  return (
    <div className="left-0">
      <Header />
      <VideoBackground/>

      <PromiseSection />
      
      <PurposeSection />
      <IconicProperties />
      <ExpSection />
      

      <Footer />
    </div>
  );
};

export default HomePage;

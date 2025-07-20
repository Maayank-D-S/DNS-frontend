import React from "react";

const HeroSection = ({path}) => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image (replace with video in real site) */}
      <img
        src={path} // ← use actual background image here
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text Content (optional) */}
      
    </section>
  );
};

export default HeroSection;

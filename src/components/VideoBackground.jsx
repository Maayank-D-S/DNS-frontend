// src/components/VideoBackground.jsx
import React from 'react';

const VideoBackground = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlayed text in bottom-right */}
      <div className="absolute inset-0 flex items-end justify-end p-6 md:p-12 pointer-events-none">
        <h1 className="text-white text-4xl sm:text-4xl md:text-6xl lg:text-7xl drop-shadow-lg font-rajdhani text-right">
          Life at it&#39;s Best
        </h1>
      </div>
    </section>
  );
};

export default VideoBackground;

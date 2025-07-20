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

      {/* Overlayed text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-white text-5xl md:text-7xl font-bold drop-shadow-lg font-rajdhani">
          Life at it&#39;s Best
        </h1>
      </div>
    </section>
  );
};

export default VideoBackground;

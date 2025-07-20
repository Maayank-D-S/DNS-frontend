import React from "react";

const ImageCollage = ({ leftImage, topRightImage, bottomRightImage }) => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Left Large Image */}
        <div className="md:col-span-2">
          <img
            src="/i3.jpg"
            alt="Left Image"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Right Two Stacked Images */}
        <div className="flex flex-col gap-4">
          <img
            src="/i3.jpg"
            alt="Top Right Image"
            className="w-full h-1/2 object-cover rounded-lg"
          />
          <img
            src="/i3.jpg"
            alt="Bottom Right Image"
            className="w-full h-1/2 object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ImageCollage;

import React from "react";

const LeadershipAndValuesSection = () => {
  return (
    <section className="bg-white px-6 md:px-20 py-20 text-gray-800">
      {/* WHO WE ARE */}
      <div className="text-center mb-16">
        <p className="uppercase text-sm text-yellow-800 font-semibold tracking-wider mb-2">Who we are</p>
        <h2 className="text-3xl md:text-4xl font-medium font-serif">Guided by visionary leadership</h2>
      </div>

      {/* Leadership Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-24">
        {/* Card 1 */}
        <div className="bg-[#fffbef] p-10 text-center shadow-sm">
          <h3 className="text-xl font-serif mb-3">Board of Directors</h3>
          <p className="mb-6 text-gray-600">
            Experienced industry leaders ensure we are growing our positive impact as we grow our business.
          </p>
          <button className="border border-yellow-800 px-8 py-2 text-sm hover:bg-yellow-800 hover:text-white transition">
            View
          </button>
        </div>
        {/* Card 2 */}
        <div className="bg-[#fffbef] p-10 text-center shadow-sm">
          <h3 className="text-xl font-serif mb-3">Leadership Team</h3>
          <p className="mb-6 text-gray-600">
            A motivated and passionate team with an unwavering commitment to excellence.
          </p>
          <button className="border border-yellow-800 px-8 py-2 text-sm hover:bg-yellow-800 hover:text-white transition">
            View
          </button>
        </div>
      </div>

      {/* OUR VALUES */}
      <div className="text-center mb-12">
        <p className="uppercase text-sm text-yellow-800 font-semibold tracking-wider mb-2">Our Values</p>
        <h2 className="text-2xl md:text-3xl font-serif">
          Shared principles that empower us to fulfill our purpose
        </h2>
      </div>

      {/* Values List */}
      <div className="grid md:grid-cols-3 gap-12 mt-8 text-center md:text-left">
        {/* Value 1 */}
        <div className="flex items-start gap-4">
          <div className="mt-1">
            <div className="space-y-1">
              <div className="w-16 h-2 bg-gray-300"></div>
              <div className="w-16 h-2 bg-gray-300"></div>
              <div className="w-16 h-2 bg-gray-700"></div>
              <div className="w-16 h-2 bg-gray-300"></div>
              <div className="w-16 h-2 bg-gray-300"></div>
            </div>
          </div>
          <p className="text-sm text-gray-700">
            We exist to exceed the expectations of our customers through innovative, world-class solutions
          </p>
        </div>
        {/* Value 2 */}
        <p className="text-sm text-yellow-900 leading-relaxed">
          We go that last mile to do things right and deliver excellence in all that we undertake
        </p>
        {/* Value 3 */}
        <p className="text-sm text-yellow-900 leading-relaxed">
          We work with the best people, treat them well, expect a lot and the rest will follow
        </p>
      </div>
    </section>
  );
};

export default LeadershipAndValuesSection;

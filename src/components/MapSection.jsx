const MapSection = () => {
  return (
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-stretch border border-gray-200">
        {/* Left Side: Location Text */}
        <div className="flex items-center justify-center p-10 bg-white">
          <h2 className="text-2xl md:text-3xl font-serif text-gray-800 text-center">
            Lodha Villa Imperio at Palava
          </h2>
        </div>

        {/* Right Side: Embedded Google Map */}
        <div className="w-full h-[400px]">
          <iframe
            title="Lodha Villa Imperio Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.400173490054!2d73.10472897520684!3d19.088972752096874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e8e8dd5a10ed%3A0xfdd31e03890c1961!2sLodha%20Villa%20Imperio%2C%20Palava!5e0!3m2!1sen!2sin!4v1721281618002!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapSection;

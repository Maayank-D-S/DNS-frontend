import React from "react";

const experiences = [
  {
    label: "Green & Serene Spaces",
    image: "/green-wall.jpg",
  },
  {
    label: "Café & Social Life",
    image: "/cafe.jpg",
  },
  {
    label: "Fitness & Wellness",
    image: "/gym.jpg",
  },
];

const ExperienceSection = () => {
  return (
    <section className="px-6 md:px-16 py-16 bg-[#f8f9fa]">
      <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
        A Lifestyle Experience
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {experiences.map((item, index) => (
          <div key={index} className="relative h-96 overflow-hidden rounded-md shadow-md">
            <img
              src={item.image}
              alt={item.label}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 flex items-end p-4">
              <p className="text-white text-lg font-medium">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;

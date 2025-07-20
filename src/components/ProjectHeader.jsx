import React, { useEffect, useState } from "react";

const ProjectsPageHeader = () => {
  const [showProjectHeader, setShowProjectHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowProjectHeader(window.scrollY > 3000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[60] transition-transform duration-300 ease-in-out
        ${showProjectHeader ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
        bg-white text-black shadow-md`}
    >
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <nav className="flex gap-6 text-sm font-light">
          <a href="#about" className="hover:text-yellow-600">About</a>
          <a href="#amenities" className="hover:text-yellow-600">Amenities</a>
          <a href="#location" className="hover:text-yellow-600">Location</a>
          <a href="#prices" className="hover:text-yellow-600">Prices</a>
          <a href="#gallery" className="hover:text-yellow-600">Gallery</a>
        </nav>
        <div className="flex gap-4 text-sm">
          <a href="#" className="hover:text-yellow-600">Enquire</a>
          <a href="#" className="hover:text-yellow-600">Chat</a>
        </div>
      </div>
    </header>
  );
};

export default ProjectsPageHeader;

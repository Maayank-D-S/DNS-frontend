import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const ProjectNav = ({ sentinelRef }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    if (!sentinelRef?.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(sentinelRef.current);

    return () => {
      observer.disconnect();
    };
  }, [sentinelRef]);

  const navLinkClass = ({ isActive }) =>
    `transition-all duration-200 hover:text-blue-600 ${
      isActive ? "text-blue-700 font-semibold" : ""
    }`;

  return (
    <div
      className={`w-full transition-all duration-300 z-60 ${
        isSticky ? "fixed top-0 bg-white shadow" : "relative"
      }`}
    >
      <div className="flex justify-between items-center px-10 py-4 text-sm text-black">
        <div className="flex gap-6">
          <NavLink to="/project/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/project/location" className={navLinkClass}>
            Location
          </NavLink>
          <NavLink to="/project/prices" className={navLinkClass}>
            Prices
          </NavLink>
          <NavLink to="/project/gallery" className={navLinkClass}>
            Gallery
          </NavLink>
        </div>
        <div className="flex gap-4">
          <NavLink to="/project/enquire" className={navLinkClass}>
            Enquire
          </NavLink>
          <NavLink to="/project/chat" className={navLinkClass}>
            Chat
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProjectNav;

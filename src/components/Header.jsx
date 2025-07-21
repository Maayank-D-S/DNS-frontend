import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import EnquiryModal from "./EnquireModal";

const Header = () => {
  const [showProjects, setShowProjects] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [showCSite, setShowCSite] = useState(false);
  const [showUnBroker, setShowUnBroker] = useState(false);
  const [showCivil, setShowCivil] = useState(false);

  const lastScrollY = useRef(0);
  const navigate = useNavigate();
  const handleMenu = () => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    } else {
      setMobileMenuOpen(true);
    }
  };
  // Hide / show on scroll
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setShowHeader(!(y > lastScrollY.current && y > 100));
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    const unlisten = navigate(() => {
      setShowProjects(false);
      setShowSearch(false);
      setMobileMenuOpen(false);
    });
    return unlisten;
  }, [navigate]);

  return (
    <>
      {/* ─── TOP BAR ──────────────────────────────────────────── */}
      <header
        className={`fixed inset-x-0 top-0 z-40 flex justify-between items-center
                    px-6 bg-black/80 text-white backdrop-blur-md
                    transition-transform duration-500
                    ${showHeader ? "translate-y-0" : "-translate-y-full"}`}
      >
        <a href="/">
          <img
            src="/logo.svg" // update path accordingly
            alt="LODHA Logo"
            className="h-16 w-auto object-contain"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 text-sm font-light">
          <Link to="/story" className="hover:text-yellow-400 transition">
            ABOUT US
          </Link>
          <Link to="/impact" className="hover:text-yellow-400 transition">
            OUR MISSION
          </Link>
          <button
            onClick={() => setShowProjects((p) => !p)}
            className="hover:text-yellow-400 transition flex items-center gap-1"
          >
            OUR PRODUCTS
            <ChevronDown className="w-4 h-4" />
          </button>
          <Link to="/blogs" className="hover:text-yellow-400 transition">
            BLOG
          </Link>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4 text-sm">
          <button
            onClick={() => setShowEnquiryModal(true)}
            className="hidden md:inline hover:text-yellow-400 transition"
          >
            ENQUIRE
          </button>

          <button
            onClick={handleMenu}
            className="md:hidden hover:text-yellow-400 transition focus:outline-none"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* ─── MOBILE MENU OVERLAY ───────────────────────────────── */}
      {/* ─── MOBILE MENU OVERLAY ───────────────────────────────── */}
      <div
        className={`
    fixed inset-0 z-30 bg-black/90 text-white
    transform transition-transform duration-300
    ${
      mobileMenuOpen
        ? "translate-x-0 pointer-events-auto"
        : "translate-x-full pointer-events-none"
    }
  `}
      >
        {/* ── PUSH DOWN BELOW THE FIXED HEADER ────────────── */}
        {/* <div className="h-16" /> */}

        {/* ── SCROLLABLE LINKS AREA ─────────────────────── */}
        <div className="
    absolute 
    top-16    
    bottom-0 
    inset-x-0 
    overflow-y-auto 
    pb-28    
    divide-y divide-white/20 
    px-4
  ">
          {/* About Us */}
          <Link
            to="/story"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-4 hover:text-yellow-400 transition"
          >
            About Us
          </Link>

          {/* Our Mission */}
          <Link
            to="/impact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-4 hover:text-yellow-400 transition"
          >
            Our Mission
          </Link>

          {/* Our Products Accordion */}
          <div className="py-4">
            <button
              type="button"
              onClick={() => setShowProducts((v) => !v)}
              className="w-full flex justify-between items-center text-left hover:text-yellow-400 transition"
            >
              Our Products
              <ChevronDown
                className={`w-4 h-4 transition-transform
                     ${showProducts ? "rotate-180" : "rotate-0"}`}
              />
            </button>

            {showProducts && (
              <div className="mt-4 pl-4 space-y-6">
                {/* CSite */}
                <div>
                  <button
                    type="button"
                    onClick={() => setShowCSite((v) => !v)}
                    className="w-full flex justify-between items-center hover:text-yellow-400 transition"
                  >
                    CSite
                    <ChevronDown
                      className={`w-3 h-3 transition-transform
                           ${showCSite ? "rotate-180" : "rotate-0"}`}
                    />
                  </button>
                  {showCSite && (
                    <ul className="mt-2 pl-4 space-y-1 text-sm text-white/80">
                      <li>Project Planning</li>
                      <li>Scheduling</li>
                      <li>Execution tracking</li>
                    </ul>
                  )}
                </div>

                {/* UnBroker */}
                <div>
                  <button
                    type="button"
                    onClick={() => setShowUnBroker((v) => !v)}
                    className="w-full flex justify-between items-center hover:text-yellow-400 transition"
                  >
                    UnBroker
                    <ChevronDown
                      className={`w-3 h-3 transition-transform
                           ${showUnBroker ? "rotate-180" : "rotate-0"}`}
                    />
                  </button>
                  {showUnBroker && (
                    <ul className="mt-2 pl-4 space-y-1 text-sm text-white/80">
                      <li>Channel Partner Management</li>
                      <li>Digital Sales Tools</li>
                    </ul>
                  )}
                </div>

                {/* Civil Consultancy Services */}
                <div>
                  <button
                    type="button"
                    onClick={() => setShowCivil((v) => !v)}
                    className="w-full flex justify-between items-center hover:text-yellow-400 transition"
                  >
                    Civil Consultancy Services
                    <ChevronDown
                      className={`w-3 h-3 transition-transform
                           ${showCivil ? "rotate-180" : "rotate-0"}`}
                    />
                  </button>
                  {showCivil && (
                    <ul className="mt-2 pl-4 space-y-1 text-sm text-white/80">
                      <li>Building Information Modeling (BIM)</li>
                      <li>Feasibility Research</li>
                      <li>Geotechnical Engineering</li>
                      <li>Energy Efficiency Design</li>
                      <li>MEP Design</li>
                      <li>Project Management</li>
                      <li>Structural Design</li>
                    </ul>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Blog */}
          <Link
            to="/blogs"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-4 hover:text-yellow-400 transition"
          >
            Blog
          </Link>
        </div>

        {/* ─── PINNED ENQUIRE BUTTON ─────────────────────────────── */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/90 px-4 py-6">
          <button
            onClick={() => {
              setShowEnquiryModal(true);
              setMobileMenuOpen(false);
            }}
            className="w-full border border-yellow-400 text-yellow-400 py-3 rounded hover:bg-yellow-400 hover:text-black transition"
          >
            Enquire
          </button>
        </div>
      </div>

      {/* ─── ENQUIRY MODAL ─────────────────────────────────────── */}
      <EnquiryModal
        isOpen={showEnquiryModal}
        onClose={() => setShowEnquiryModal(false)}
      />

      {/* ─── OUR PRODUCTS DROPDOWN ─────────────────────────────── */}
      <div
        className={`
          fixed top-0 left-0 w-full h-[75vh] bg-black/90 text-white z-50
          transition-transform duration-500 ease-in-out
          ${
            showProjects
              ? "translate-y-0 opacity-100 pointer-events-auto"
              : "-translate-y-full opacity-0 pointer-events-none"
          }
        `}
      >
        <button
          onClick={() => setShowProjects(false)}
          className="absolute top-4 right-4 p-2 text-white"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="flex flex-col items-center justify-center h-full">
          <h2 className="text-3xl font-semibold mb-6">OUR PRODUCTS</h2>
          {/* …your product list here… */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
            {/* Column 1: Residential */}
            <div>
              <h3 className="font-bold text-lg mb-4">CSite</h3>
              <ul className="space-y-2 text-white/90">
                <li>
                  <span className="block font-medium">Project Planning</span>
                </li>
                <li>
                  <span className="block font-medium">Scheduling</span>
                </li>
                <li>
                  <span className="block font-medium">Execution tracking</span>
                </li>
              </ul>
            </div>

            {/* Column 2: Commercial */}
            <div>
              <h3 className="font-bold text-lg mb-4">UnBroker</h3>
              <ul className="space-y-2 text-white/90">
                <li>
                  <span className="block font-medium">
                    Channel Partner Management
                  </span>
                </li>
                <li>
                  <span className="block font-medium">Digital Sales Tools</span>
                </li>
              </ul>
            </div>

            {/* Column 3: Civil Consultancy Services */}
            <div>
              <h3 className="font-bold text-lg mb-4">
                Civil Consultancy Services
              </h3>
              <ul className="space-y-2 text-white/90">
                <li>Building Information Modeling (BIM)</li>
                <li>Feasibility research</li>
                <li>Geotechnical engineering</li>
                <li>Green Building & Energy Efficiency Design</li>
                <li>MEP Design</li>
                <li>Project Management Consultancy</li>
                <li>Structural design</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ─── SEARCH OVERLAY ───────────────────────────────────── */}
      <div
        className={`
          fixed inset-0 bg-black/90 text-white z-[60]
          transition-transform duration-500 ease-in-out
          ${
            showSearch
              ? "translate-y-0 opacity-100 pointer-events-auto"
              : "-translate-y-full opacity-0 pointer-events-none"
          }
        `}
      >
        <div className="max-w-4xl mx-auto pt-40 px-6">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-full text-xl bg-transparent border-b border-gray-400
                      focus:outline-none pb-2 placeholder-gray-300"
          />
          <div className="mt-10">
            <h3 className="font-bold text-sm uppercase mb-2">Quick Links</h3>
            <div className="flex gap-6 text-sm text-gray-300 flex-wrap">
              <span className="cursor-pointer hover:text-yellow-400">
                About Us
              </span>
              <span className="cursor-pointer hover:text-yellow-400">
                Careers
              </span>
              <span className="cursor-pointer hover:text-yellow-400">
                Products
              </span>
              <span className="cursor-pointer hover:text-yellow-400">
                Investor Relations
              </span>
              <span className="cursor-pointer hover:text-yellow-400">
                Blogs
              </span>
            </div>
          </div>
        </div>
        <button
          onClick={() => setShowSearch(false)}
          className="absolute top-6 right-6 text-white text-2xl"
        >
          ✕
        </button>
      </div>
    </>
  );
};

export default Header;

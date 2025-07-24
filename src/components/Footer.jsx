import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#161717] text-black text-sm">
      <div className="container mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 text-white">
          {/* Left: Link Groups */}
          <div className="flex flex-wrap gap-16">
            <ul className="space-y-2">
              <li className="hover:underline cursor-pointer ">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:underline cursor-pointer">
                <Link to="/story">About Us</Link>
              </li>
              <li className="hover:underline cursor-pointer">
                <Link to="/impact">Our Mission</Link>
              </li>
              <li className="hover:underline cursor-pointer">
              <HashLink smooth to="/#products">Our Products</HashLink>
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="hover:underline cursor-pointer">
                <Link to="/blogs">Blog</Link>
              </li>
              <li className="hover:underline cursor-pointer">
                <Link to="/contact">Contact Us</Link>
              </li>
              <li className="hover:underline cursor-pointer">
                <Link to="/terms">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          {/* Right: Logo + Socials */}
          <div className="flex flex-col items-center gap-6 w-full md:w-auto">
            <div className="flex items-center gap-2 text-xl font-bold tracking-widest text-yellow-800">
              <Link to="/">
                <img
                  src="/logo.svg"
                  alt="Logo"
                  className="h-16 w-auto object-contain"
                />
              </Link>
            </div>
            <div className="flex gap-4 text-yellow-800 text-lg">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-300" />

        {/* Copyright */}
        <p className="text-center text-xs text-white">
          &copy; Dobliyal & Shah International Pvt Ltd 2025 All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

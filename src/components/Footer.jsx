import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { Menu } from "lucide-react";

const linksLeft = ["About Us", "Our Mission", "Careers", "All Products"];

const linksRight = ["Blogs", "Contact Us", "Terms & Conditions"];

const Footer = () => {
  return (
    <footer className="bg-[#fefae0] text-black text-sm">
      <div className="container mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Left: Link Groups */}
          <div className="flex flex-wrap gap-16">
            <ul className="space-y-2">
              <li key="4" className="hover:underline cursor-pointer">
                <a href="/">Home</a>
              </li>
              <li key="1" className="hover:underline cursor-pointer">
                <a href="/story">About Us</a>
              </li>
              <li key="2" className="hover:underline cursor-pointer">
                <a href="/impact">Our Mission</a>
              </li>
              <li key="3" className="hover:underline cursor-pointer">
                <a>Our Products</a>
              </li>
            </ul>
            <ul className="space-y-2">
              
            <li key="5" className="hover:underline cursor-pointer">
                <a href="/blogs">
                  Blog
                  </a>
                </li>
                <li key="6" className="hover:underline cursor-pointer">
                <a href="/">
                  Contact Us
                  </a>
                </li>
                <li key="7" className="hover:underline cursor-pointer">
                <a href="/">
                  Terms and Conditions
                  </a>
                </li>
              
            </ul>
          </div>

          {/* Right: Logo + Socials */}
          <div className="flex flex-col items-center gap-6 w-full md:w-auto">
            <div className="flex items-center gap-2 text-xl font-bold tracking-widest text-yellow-800">
              <img
                src="/logo.svg" // update path accordingly
                alt="Logo"
                className="h-16 w-auto object-contain"
              />
            </div>
            <div className="flex gap-4 text-yellow-800 text-lg">
              <FaFacebookF />
              <FaInstagram />
              <FaLinkedinIn />
              <FaYoutube />
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-300" />

        {/* Copyright */}
        <p className="text-center text-xs text-gray-600">
          &copy; Dobliyal & Shah International Pvt Ltd 2025 All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

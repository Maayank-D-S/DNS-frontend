// src/components/Header.jsx
import React from 'react';
import Link from 'next/link'; // or 'react-router-dom'
import { CsiteLogo } from '@/components/icons';

export default function CsiteHeader() {
  return (
    <header className="
      absolute inset-x-0 top-0 z-50
      flex items-center justify-between
      px-6 py-4 md:px-12 lg:px-24
      bg-transparent   /* make it transparent */
    ">
      {/* left: logo + text */}
      <Link href="/" className="flex items-center gap-3">
        <CsiteLogo className="w-10 h-10 text-yellow-400" />
        <span className="text-2xl font-bold text-white">CSite</span>
      </Link>

      {/* right: nav + login (desktop) */}
      <nav className="hidden md:flex items-center gap-8">
        <Link href="/" className="text-white hover:text-yellow-400 transition">
          Home
        </Link>
        <Link href="/explore" className="text-white hover:text-yellow-400 transition">
          Explore
        </Link>
        <Link
          href="/login"
          className="bg-yellow-400 text-black font-medium px-4 py-2 rounded-lg hover:bg-yellow-500 transition"
        >
          Login
        </Link>
      </nav>

      {/* mobile menu button */}
      <button className="md:hidden text-white focus:outline-none">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </header>
  );
}

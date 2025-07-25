// src/components/Header.jsx
import React from 'react';
import {Link} from 'react-router-dom'; // or 'react-router-dom'


export default function UbHeader() {
  return (
    <header className="
      absolute inset-x-0 top-0 z-50
      flex items-center justify-between
      px-6 py-4 md:px-12 lg:px-24
      bg-transparent   /* make it transparent */
    ">
      {/* left: logo + text */}
      <Link to="/" className="flex items-center gap-3">
        <img src="/ubc.png" alt="ub" className="h-8 w-auto md:h-10 lg:h-12" />
        <span className="text-2xl font-bold">
    <span className="text-red-500">Un</span>
    <span className="text-white">Broker</span>
  </span>
        
      </Link>

      {/* right: nav + login (desktop) */}
      

      {/* mobile menu button */}
      
    </header>
  );
}

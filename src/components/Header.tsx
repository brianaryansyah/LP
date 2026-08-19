"use client";
import React, { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full z-50 pt-6 pb-4 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer">
            <div className="bg-orange-400 p-2 rounded-xl">
              <span className="text-2xl text-white block leading-none">🍜</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-amber-950 font-poppins leading-tight">
                Semangkok
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10 font-inter">
            <a href="#home" className="text-amber-950 font-medium hover:text-orange-500 transition">
              Home
            </a>
            <a href="#menu" className="text-amber-950 font-medium hover:text-orange-500 transition">
              Menu
            </a>
            <a href="#unggulan" className="text-amber-950 font-medium hover:text-orange-500 transition">
              Keunggulan
            </a>
            <a href="#location" className="text-amber-950 font-medium hover:text-orange-500 transition">
              Lokasi
            </a>
          </nav>

          {/* Button */}
          <div className="hidden md:block">
            <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition shadow-lg shadow-orange-500/30">
              Pesan Sekarang
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-amber-950 hover:text-orange-500 focus:outline-none p-2"
            >
              <i className={`fas ${isMobileMenuOpen ? "fa-times" : "fa-bars"} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#fdf6e9] border-t border-orange-200 absolute w-full left-0 mt-4 shadow-xl z-50">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a
              href="#home"
              className="block px-3 py-2 text-base font-medium text-amber-950 hover:text-orange-500 rounded-md"
            >
              Home
            </a>
            <a
              href="#menu"
              className="block px-3 py-2 text-base font-medium text-amber-950 hover:text-orange-500 rounded-md"
            >
              Menu
            </a>
            <a
              href="#unggulan"
              className="block px-3 py-2 text-base font-medium text-amber-950 hover:text-orange-500 rounded-md"
            >
              Keunggulan
            </a>
            <a
              href="#location"
              className="block px-3 py-2 text-base font-medium text-amber-950 hover:text-orange-500 rounded-md"
            >
              Lokasi
            </a>
            <button className="w-full mt-4 bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition shadow-lg shadow-orange-500/30">
              Pesan Sekarang
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

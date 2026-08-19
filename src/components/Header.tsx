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
            <div className="bg-[#f5b041] p-2 rounded-xl">
              <span className="text-2xl text-white block leading-none">🍜</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#2c231b] font-poppins leading-tight">
                Semangkok
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10 font-inter">
            <a href="#home" className="text-[#2c231b] font-medium hover:text-[#f5b041] transition">
              Home
            </a>
            <a href="#menu" className="text-[#2c231b] font-medium hover:text-[#f5b041] transition">
              Menu
            </a>
            <a href="#unggulan" className="text-[#2c231b] font-medium hover:text-[#f5b041] transition">
              Keunggulan
            </a>
            <a href="#location" className="text-[#2c231b] font-medium hover:text-[#f5b041] transition">
              Lokasi
            </a>
          </nav>

          {/* Button */}
          <div className="hidden md:block">
            <button className="bg-[#2c231b] text-white px-8 py-3 rounded-full font-semibold hover:bg-black transition shadow-lg flex items-center gap-2">
              Pesan Sekarang <i className="fas fa-arrow-right text-sm"></i>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#2c231b] hover:text-[#f5b041] focus:outline-none p-2"
            >
              <i className={`fas ${isMobileMenuOpen ? "fa-times" : "fa-bars"} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#fdf8f5] border-t border-[#f5b041]/20 absolute w-full left-0 mt-4 shadow-xl z-50">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a
              href="#home"
              className="block px-3 py-2 text-base font-medium text-[#2c231b] hover:text-[#f5b041] rounded-md"
            >
              Home
            </a>
            <a
              href="#menu"
              className="block px-3 py-2 text-base font-medium text-[#2c231b] hover:text-[#f5b041] rounded-md"
            >
              Menu
            </a>
            <a
              href="#unggulan"
              className="block px-3 py-2 text-base font-medium text-[#2c231b] hover:text-[#f5b041] rounded-md"
            >
              Keunggulan
            </a>
            <a
              href="#location"
              className="block px-3 py-2 text-base font-medium text-[#2c231b] hover:text-[#f5b041] rounded-md"
            >
              Lokasi
            </a>
            <button className="w-full mt-4 bg-[#2c231b] text-white px-6 py-3 rounded-full font-semibold hover:bg-black transition shadow-lg flex items-center justify-center gap-2">
              Pesan Sekarang <i className="fas fa-arrow-right text-sm"></i>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

"use client";
import React, { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full z-50 pt-6 pb-4 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 bg-[#e09132] rounded-full flex items-center justify-center border-2 border-[#2c231b]">
              <span className="text-xl text-white block leading-none">🍜</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[#2c231b] font-poppins tracking-tight">
                Semangkok
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10 font-inter">
            <a href="#home" className="text-[#2c231b] font-medium hover:text-[#e09132] transition">
              Home
            </a>
            <a href="#unggulan" className="text-[#2c231b] font-medium hover:text-[#e09132] transition">
              About Us
            </a>
            <a href="#location" className="text-[#2c231b] font-medium hover:text-[#e09132] transition">
              Services
            </a>
            <a href="#menu" className="text-[#2c231b] font-medium hover:text-[#e09132] transition">
              Menu <i className="fas fa-chevron-down text-xs ml-1 opacity-50"></i>
            </a>
            <a href="#contact" className="text-[#2c231b] font-medium hover:text-[#e09132] transition">
              Contact Us
            </a>
          </nav>

          {/* Button */}
          <div className="hidden md:block">
            <button className="bg-[#2c231b] text-white pl-6 pr-2 py-2.5 rounded-full font-semibold hover:bg-black transition flex items-center gap-3">
              <span className="text-sm">Pesan Sekarang</span> 
              <div className="w-8 h-8 rounded-full bg-[#3b3128] flex items-center justify-center">
                <i className="fas fa-arrow-right text-xs"></i>
              </div>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#2c231b] hover:text-[#e09132] focus:outline-none p-2"
            >
              <i className={`fas ${isMobileMenuOpen ? "fa-times" : "fa-bars"} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#fdf8f5] border-t border-[#e09132]/20 absolute w-full left-0 mt-4 shadow-xl z-50">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a href="#home" className="block px-3 py-2 text-base font-medium text-[#2c231b] hover:text-[#e09132]">Home</a>
            <a href="#unggulan" className="block px-3 py-2 text-base font-medium text-[#2c231b] hover:text-[#e09132]">About Us</a>
            <a href="#location" className="block px-3 py-2 text-base font-medium text-[#2c231b] hover:text-[#e09132]">Services</a>
            <a href="#menu" className="block px-3 py-2 text-base font-medium text-[#2c231b] hover:text-[#e09132]">Menu</a>
            <button className="w-full mt-4 bg-[#2c231b] text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2">
              Pesan Sekarang <i className="fas fa-arrow-right text-sm"></i>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

"use client";
import React, { useState, useEffect } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#f5b041] rounded-full flex items-center justify-center border-2 border-transparent group-hover:border-[#2c231b] transition-all duration-300 shadow-md group-hover:rotate-12">
              <i className="fas fa-bowl-food text-white text-sm sm:text-base"></i>
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-[#2c231b] font-poppins tracking-tight">
                Semangkok
              </h1>
              <span className="text-[10px] sm:text-xs text-[#2c231b]/60 font-medium tracking-widest uppercase hidden sm:block">Mie Ayam Premium</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center bg-white/50 backdrop-blur-sm px-8 py-3 rounded-full border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)]">
            <a href="#home" className="text-[#2c231b] font-semibold hover:text-[#f5b041] transition-colors text-sm">Beranda</a>
            <a href="#unggulan" className="text-[#2c231b] font-semibold hover:text-[#f5b041] transition-colors text-sm">Keunggulan</a>
            <a href="#menu" className="text-[#2c231b] font-semibold hover:text-[#f5b041] transition-colors text-sm">Menu</a>
            <a href="#location" className="text-[#2c231b] font-semibold hover:text-[#f5b041] transition-colors text-sm">Lokasi</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="#menu" className="bg-[#2c231b] text-white px-6 py-3 rounded-full font-bold hover:bg-[#f5b041] transition-colors duration-300 shadow-lg hover:-translate-y-1 transform text-sm flex items-center gap-2">
              <i className="fas fa-shopping-bag"></i> Pesan Sekarang
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#2c231b] hover:text-[#f5b041] focus:outline-none p-2 rounded-lg bg-white/50 backdrop-blur-sm shadow-sm"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl shadow-xl border-t border-gray-100">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <a href="#home" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-xl text-base font-bold text-[#2c231b] hover:bg-[#f5b041]/10 hover:text-[#f5b041] transition">Beranda</a>
            <a href="#unggulan" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-xl text-base font-bold text-[#2c231b] hover:bg-[#f5b041]/10 hover:text-[#f5b041] transition">Keunggulan</a>
            <a href="#menu" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-xl text-base font-bold text-[#2c231b] hover:bg-[#f5b041]/10 hover:text-[#f5b041] transition">Menu</a>
            <a href="#location" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-xl text-base font-bold text-[#2c231b] hover:bg-[#f5b041]/10 hover:text-[#f5b041] transition">Lokasi</a>
            <a href="#menu" onClick={() => setIsOpen(false)} className="block px-4 py-3 mt-4 rounded-xl text-center text-base font-bold bg-[#f5b041] text-[#2c231b] shadow-md">Pesan Sekarang</a>
          </div>
        </div>
      )}
    </header>
  );
}

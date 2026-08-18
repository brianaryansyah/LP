"use client";
import React, { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer">
            <span className="text-3xl">🍜</span>
            <div>
              <h1 className="text-xl font-bold text-gray-900 font-poppins">
                Mie Ayam Semangkok
              </h1>
              <p className="text-xs text-gray-500 font-inter hidden sm:block">
                Rasa Autentik Sejak 1990
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 font-inter">
            <a href="#home" className="text-gray-700 hover:text-orange-500 transition">
              Home
            </a>
            <a href="#menu" className="text-gray-700 hover:text-orange-500 transition">
              Menu
            </a>
            <a href="#unggulan" className="text-gray-700 hover:text-orange-500 transition">
              Keunggulan
            </a>
            <a href="#location" className="text-gray-700 hover:text-orange-500 transition">
              Lokasi
            </a>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-full font-medium hover:bg-orange-600 transition shadow-lg hover:shadow-orange-500/30">
              Pesan Sekarang
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-orange-500 focus:outline-none p-2"
            >
              <i className={`fas ${isMobileMenuOpen ? "fa-times" : "fa-bars"} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#home"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-gray-50 rounded-md"
            >
              Home
            </a>
            <a
              href="#menu"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-gray-50 rounded-md"
            >
              Menu
            </a>
            <a
              href="#unggulan"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-gray-50 rounded-md"
            >
              Keunggulan
            </a>
            <a
              href="#location"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-gray-50 rounded-md"
            >
              Lokasi
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

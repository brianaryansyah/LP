"use client";
import React, { useState, useEffect, useRef } from "react";

const navLinks = [
  { href: "#home", label: "Beranda", id: "home" },
  { href: "#unggulan", label: "Keunggulan", id: "unggulan" },
  { href: "#menu", label: "Menu", id: "menu" },
  { href: "#reservasi", label: "Reservasi", id: "reservasi" },
  { href: "#location", label: "Lokasi", id: "location" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      let current = "home";
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el && window.scrollY >= el.offsetTop - 160) {
          current = link.id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    const onMouseDown = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onMouseDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onMouseDown);
    };
  }, [isOpen]);

  const linkClass = (id: string) =>
    `text-[#2c231b] font-semibold hover:text-[#f5b041] transition-colors duration-300 text-sm px-3 py-1.5 rounded-full ${
      activeSection === id ? "text-[#e09132] bg-[#f5b041]/15" : ""
    }`;

  return (
    <header ref={headerRef} className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/85 backdrop-blur-lg shadow-sm border-b border-[#2c231b]/5 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <a href="#home" className="flex-shrink-0 flex items-center gap-3 cursor-pointer group" aria-label="Semangkok - kembali ke beranda">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#f5b041] rounded-full flex items-center justify-center border-2 border-transparent group-hover:border-[#2c231b] transition-all duration-300 shadow-md group-hover:rotate-12">
              <i className="fas fa-bowl-food text-white text-sm sm:text-base"></i>
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-[#2c231b] font-poppins tracking-tight">
                Semangkok
              </h1>
              <span className="text-[10px] sm:text-xs text-[#2c231b]/60 font-medium tracking-widest uppercase hidden sm:block">Mie Ayam Premium</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center bg-white/50 backdrop-blur-sm px-8 py-3 rounded-full border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)]">
            {navLinks.map((link) => (
              <a key={link.id} href={link.href} className={linkClass(link.id)}>
                {link.label}
              </a>
            ))}
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
              aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
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
        <div id="mobile-menu" className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl shadow-xl border-t border-gray-100 origin-top animate-[menuDrop_0.25s_ease-out]">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a key={link.id} href={link.href} onClick={() => setIsOpen(false)} className={`block px-4 py-3 rounded-xl text-base font-bold transition-all duration-300 ${activeSection === link.id ? "text-[#e09132] bg-[#f5b041]/10" : "text-[#2c231b] hover:bg-[#f5b041]/10 hover:text-[#f5b041]"}`}>
                {link.label}
              </a>
            ))}
            <a href="#menu" onClick={() => setIsOpen(false)} className="block px-4 py-3 mt-4 rounded-xl text-center text-base font-bold bg-[#f5b041] text-[#2c231b] shadow-md">Pesan Sekarang</a>
          </div>
        </div>
      )}
    </header>
  );
}# Commit 3 on 2024-08-22
Date: 2024-08-22
Commit number: 3
Total commits per day: 35
# Commit 7 on 2024-08-22
Date: 2024-08-22
Commit number: 7
Total commits per day: 35
# Commit 11 on 2024-08-22
Date: 2024-08-22
Commit number: 11
Total commits per day: 35
# Commit 15 on 2024-08-22
Date: 2024-08-22
Commit number: 15
Total commits per day: 35
# Commit 19 on 2024-08-22
Date: 2024-08-22
Commit number: 19
Total commits per day: 35
# Commit 23 on 2024-08-22
Date: 2024-08-22
Commit number: 23
Total commits per day: 35
# Commit 27 on 2024-08-22
Date: 2024-08-22
Commit number: 27
Total commits per day: 35
# Commit 31 on 2024-08-22
Date: 2024-08-22
Commit number: 31
Total commits per day: 35
# Commit 35 on 2024-08-22
Date: 2024-08-22
Commit number: 35
Total commits per day: 35
# Commit 3 on 2024-08-23
Date: 2024-08-23
Commit number: 3
Total commits per day: 38
# Commit 7 on 2024-08-23
Date: 2024-08-23
Commit number: 7
Total commits per day: 38
# Commit 11 on 2024-08-23
Date: 2024-08-23
Commit number: 11
Total commits per day: 38
# Commit 15 on 2024-08-23
Date: 2024-08-23
Commit number: 15
Total commits per day: 38
# Commit 19 on 2024-08-23
Date: 2024-08-23
Commit number: 19
Total commits per day: 38
# Commit 23 on 2024-08-23
Date: 2024-08-23
Commit number: 23
Total commits per day: 38
# Commit 27 on 2024-08-23
Date: 2024-08-23
Commit number: 27
Total commits per day: 38
# Commit 31 on 2024-08-23
Date: 2024-08-23
Commit number: 31
Total commits per day: 38
# Commit 35 on 2024-08-23
Date: 2024-08-23
Commit number: 35
Total commits per day: 38
# Commit 3 on 2024-08-24
Date: 2024-08-24
Commit number: 3
Total commits per day: 40

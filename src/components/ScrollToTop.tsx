"use client";
import React, { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    toggleVisibility();
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      aria-label="Kembali ke atas"
      className={`fixed bottom-6 right-6 p-3 rounded-full bg-[#f5b041] text-[#2c231b] shadow-xl hover:bg-[#e09132] hover:-translate-y-1 transition-[transform,background-color,opacity] duration-300 z-50 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2c231b]/60 focus-visible:ring-offset-2 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <i className="fas fa-arrow-up text-lg w-5 h-5 flex items-center justify-center" aria-hidden="true"></i>
    </button>
  );
}

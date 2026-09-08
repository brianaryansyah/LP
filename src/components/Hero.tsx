"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import WaveDivider from "@/components/WaveDivider";

export default function Hero() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setPos({ x, y });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return (
    <section id="home" className="relative h-[100vh] min-h-[680px] max-h-[960px] flex items-center justify-center overflow-hidden pb-8">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 will-change-transform transition-transform duration-700 ease-out"
          style={{ transform: `translate3d(${pos.x * -12}px, ${pos.y * -8}px, 0) scale(1.06)` }}
        >
          <Image
            src="/img/mi-ayam-bakso.jpg"
            alt="Mangkok mie ayam bakso dengan topping melimpah"
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            quality={80}
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/65" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#2c231b]/20 via-transparent to-[#f5b041]/10" aria-hidden="true" />
        <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} aria-hidden="true" />
        <div
          className="pointer-events-none absolute h-64 w-64 rounded-full bg-[#f5b041]/15 blur-[50px] will-change-transform transition-transform duration-700 ease-out"
          style={{ transform: `translate3d(${pos.x * 18}px, ${pos.y * 14}px, 0)` }}
          aria-hidden="true"
        />
      </div>

      <div
        className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 will-change-transform transition-transform duration-700 ease-out"
        style={{ transform: `translate3d(${pos.x * 8}px, ${pos.y * 6}px, 0)` }}
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 text-xs font-semibold tracking-wider text-white animate-fadeUp" style={{ animationDelay: "60ms" }}>
          <span className="h-2 w-2 rounded-full bg-[#f5b041] animate-pulse" aria-hidden="true" />
          Dapur Karimata • Buka 10.00-22.00
        </div>

        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-[5.2rem] font-extrabold text-white font-poppins leading-[0.95] tracking-tight animate-fadeUp text-balance" style={{ animationDelay: "140ms" }}>
          Kelezatan <span className="text-[#f5b041] relative whitespace-nowrap">Mie Ayam
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#f5b041]/60" viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" className="hero-underline" />
            </svg>
          </span>
          <br />Dalam Setiap Suapan
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg lg:text-xl text-white/85 font-inter leading-relaxed animate-fadeUp" style={{ animationDelay: "260ms" }}>
          Mie kenyal, kuah kaldu ayam gurih, topping ayam kecap melimpah. Resep keluarga yang dijaga, dimasak harian dan rasa selalu sama.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-fadeUp" style={{ animationDelay: "380ms" }}>
          <a href="#menu" className="group relative inline-flex items-center gap-2 bg-[#f5b041] text-[#2c231b] px-7 py-3.5 rounded-full font-extrabold text-sm overflow-hidden hover:bg-white hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(0,0,0,0.22)] transition-[transform,background-color,box-shadow] duration-300 shadow-[0_10px_28px_rgba(0,0,0,0.22)]">
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" aria-hidden="true" />
            <span className="relative flex items-center gap-2">Pesan Sekarang <i className="fas fa-arrow-right text-xs" aria-hidden="true"></i></span>
          </a>
          <a href="#fasilitas" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/25 text-white px-7 py-3.5 rounded-full font-bold text-sm hover:bg-white hover:text-[#2c231b] hover:-translate-y-0.5 transition-[transform,background-color,color] duration-300">
            Lihat Tempat <i className="fas fa-store text-xs" aria-hidden="true"></i>
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm animate-fadeUp" style={{ animationDelay: "500ms" }}>
          <span className="rounded-full bg-white text-[#2c231b] px-4 py-1.5 font-bold shadow-sm">Dibuat Harian</span>
          <span className="rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 font-medium">Karimata • Ditarik pagi • Kaldu 8 jam</span>
          <span className="rounded-full bg-[#2c231b] text-white px-4 py-1.5 font-bold border border-white/10">4.8/5 Ulasan</span>
        </div>
      </div>

      <WaveDivider fill="#ffffff" position="bottom" />
    </section>
  );
}

"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="bg-[#2c231b] text-[#fdf8f5] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-[#fdf8f5]/10 pb-12 mb-8">
          {/* Logo & Social - original */}
          <div>
            <div className="flex items-center gap-3 mb-6 cursor-pointer group">
              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-white border border-[#fdf8f5]/20 group-hover:border-[#f5b041] transition-colors duration-300 shrink-0 p-0.5" title="Logo Semangkok di public/img/LOGO-README.md">
                <Image src="/img/logo-semangkok.svg" alt="Mie Ayam & Bakso Semangkok" width={40} height={40} className="w-full h-full object-contain" loading="lazy" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-poppins text-[#fdf8f5] leading-none tracking-tight">Semangkok</h3>
                <span className="text-[11px] text-[#fdf8f5]/50 font-medium tracking-[0.15em] uppercase">Mie Ayam & Bakso • Sejak 1990</span>
              </div>
            </div>
            <p className="text-[#fdf8f5]/60 font-inter mb-8 text-sm leading-relaxed pr-4">
              Warung mie ayam di Pemalang sejak 1990. Makan di tempat atau pesan antar, tiap hari buka.
            </p>
            <div className="flex gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Ikuti kami di Instagram" className="w-10 h-10 rounded-full bg-[#f5b041] text-[#2c231b] flex items-center justify-center hover:bg-white hover:-translate-y-1 hover:shadow-md transition-[transform,background-color,box-shadow] duration-300 ring-1 ring-black/5">
                <i className="fab fa-instagram" aria-hidden="true"></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Ikuti kami di Facebook" className="w-10 h-10 rounded-full bg-[#f5b041] text-[#2c231b] flex items-center justify-center hover:bg-white hover:-translate-y-1 hover:shadow-md transition-[transform,background-color,box-shadow] duration-300 ring-1 ring-black/5">
                <i className="fab fa-facebook-f" aria-hidden="true"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Ikuti kami di X" className="w-10 h-10 rounded-full bg-[#f5b041] text-[#2c231b] flex items-center justify-center hover:bg-white hover:-translate-y-1 hover:shadow-md transition-[transform,background-color,box-shadow] duration-300 ring-1 ring-black/5">
                <i className="fab fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="Tonton kami di YouTube" className="w-10 h-10 rounded-full bg-[#f5b041] text-[#2c231b] flex items-center justify-center hover:bg-white hover:-translate-y-1 hover:shadow-md transition-[transform,background-color,box-shadow] duration-300 ring-1 ring-black/5">
                <i className="fab fa-youtube" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-poppins text-[#f5b041]">Tautan</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/" className="text-[#fdf8f5]/70 hover:text-[#f5b041] transition-colors">Beranda</Link></li>
              <li><Link href="/tentang/keunggulan" className="text-[#fdf8f5]/70 hover:text-[#f5b041] transition-colors">Keunggulan</Link></li>
              <li><Link href="/#testimoni" className="text-[#fdf8f5]/70 hover:text-[#f5b041] transition-colors">Testimoni</Link></li>
              <li><Link href="/katalog/mie-ayam" className="text-[#fdf8f5]/70 hover:text-[#f5b041] transition-colors">Menu Kami</Link></li>
              <li><Link href="/#reservasi" className="text-[#fdf8f5]/70 hover:text-[#f5b041] transition-colors">Reservasi</Link></li>
              <li><Link href="/bantuan/kontak" className="text-[#fdf8f5]/70 hover:text-[#f5b041] transition-colors">Lokasi</Link></li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-poppins text-[#f5b041]">Jam Buka</h4>
            <ul className="space-y-4 text-sm text-[#fdf8f5]/70">
              <li className="flex items-center gap-3">
                <i className="fas fa-clock text-[#f5b041] w-4" aria-hidden="true"></i>
                Setiap Hari, 10.00 - 22.00 WIB
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt text-[#f5b041] w-4 mt-0.5" aria-hidden="true"></i>
                Jl. Karimata No.40, Mulyoharjo, Pemalang
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-phone-alt text-[#f5b041] w-4" aria-hidden="true"></i>
                0856-4073-4972
              </li>
            </ul>
            <a href="https://wa.me/6285640734972" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-6 bg-[#f5b041] text-[#2c231b] px-5 py-2.5 rounded-full font-bold text-sm hover:bg-white transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70">
              <i className="fab fa-whatsapp" aria-hidden="true"></i> Chat Kami
            </a>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-poppins text-[#f5b041]">Newsletter</h4>
            <p className="text-[#fdf8f5]/60 text-sm mb-6">
              Promo sebulan sekali, bukan spam. Cukup email saja.
            </p>
            <form onSubmit={handleSubscribe} className="relative">
              <input
                type="email"
                required
                name="email"
                autoComplete="email"
                spellCheck={false}
                inputMode="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Contoh: nama@email.com…"
                aria-label="Alamat email untuk newsletter"
                className="w-full bg-[#3b3128] text-[#fdf8f5] px-6 py-4 rounded-full border border-[#fdf8f5]/10 focus:outline-none focus:border-[#f5b041] focus:ring-2 focus:ring-[#f5b041]/30 transition-[border-color,box-shadow] duration-300 text-sm"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 bottom-2 bg-[#f5b041] text-[#2c231b] px-6 rounded-full font-bold text-sm hover:bg-white transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                Berlangganan
              </button>
            </form>
            {subscribed && (
              <p role="status" aria-live="polite" className="text-[#f5b041] text-xs mt-3 font-medium">
                Terima kasih! Anda telah berlangganan.
              </p>
            )}
          </div>
        </div>

        <div className="text-center text-[#fdf8f5]/40 font-inter text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Mie Ayam Semangkok. Hak cipta dilindungi.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#f5b041] transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-[#f5b041] transition-colors">Syarat Layanan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

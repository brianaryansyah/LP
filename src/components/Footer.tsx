"use client";
import React, { useState } from "react";

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
          {/* Logo & Social */}
          <div>
            <div className="flex items-center gap-3 mb-6 cursor-pointer group">
              <div className="bg-[#f5b041] w-10 h-10 rounded-full flex items-center justify-center border border-[#fdf8f5]/20 group-hover:bg-[#fdf8f5] transition-colors duration-300">
                <i className="fas fa-bowl-food text-[#2c231b] text-sm"></i>
              </div>
              <h3 className="text-2xl font-bold font-poppins text-[#fdf8f5]">Semangkok</h3>
            </div>
            <p className="text-[#fdf8f5]/60 font-inter mb-8 text-sm leading-relaxed pr-4">
              Pilihan utama pecinta mie ayam. Rasakan kelezatan resep autentik yang telah dipercaya sejak 1990.
            </p>
            <div className="flex gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Ikuti kami di Instagram" className="w-10 h-10 rounded-full bg-[#f5b041] text-[#2c231b] flex items-center justify-center hover:bg-white hover:-translate-y-1 transition-all duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Ikuti kami di Facebook" className="w-10 h-10 rounded-full bg-[#f5b041] text-[#2c231b] flex items-center justify-center hover:bg-white hover:-translate-y-1 transition-all duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Ikuti kami di X" className="w-10 h-10 rounded-full bg-[#f5b041] text-[#2c231b] flex items-center justify-center hover:bg-white hover:-translate-y-1 transition-all duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="Tonton kami di YouTube" className="w-10 h-10 rounded-full bg-[#f5b041] text-[#2c231b] flex items-center justify-center hover:bg-white hover:-translate-y-1 transition-all duration-300">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-poppins text-[#f5b041]">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#home" className="text-[#fdf8f5]/70 hover:text-[#f5b041] transition">Beranda</a></li>
              <li><a href="#unggulan" className="text-[#fdf8f5]/70 hover:text-[#f5b041] transition">Keunggulan</a></li>
              <li><a href="#menu" className="text-[#fdf8f5]/70 hover:text-[#f5b041] transition">Menu Kami</a></li>
              <li><a href="#reservasi" className="text-[#fdf8f5]/70 hover:text-[#f5b041] transition">Reservasi</a></li>
              <li><a href="#location" className="text-[#fdf8f5]/70 hover:text-[#f5b041] transition">Lokasi</a></li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-poppins text-[#f5b041]">Jam Buka</h4>
            <ul className="space-y-4 text-sm text-[#fdf8f5]/70">
              <li className="flex items-center gap-3">
                <i className="fas fa-clock text-[#f5b041] w-4"></i>
                Setiap Hari, 10.00 - 22.00 WIB
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt text-[#f5b041] w-4 mt-0.5"></i>
                Jl. Karimata No.40, Mulyoharjo, Pemalang
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-phone-alt text-[#f5b041] w-4"></i>
                0856-4073-4972
              </li>
            </ul>
            <a href="https://wa.me/6285640734972" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-6 bg-[#f5b041] text-[#2c231b] px-5 py-2.5 rounded-full font-bold text-sm hover:bg-white transition duration-300">
              <i className="fab fa-whatsapp"></i> Chat Kami
            </a>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-poppins text-[#f5b041]">Newsletter</h4>
            <p className="text-[#fdf8f5]/60 text-sm mb-6">
              Dapatkan info promo dan menu baru langsung ke email Anda.
            </p>
            <form onSubmit={handleSubscribe} className="relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Anda"
                aria-label="Alamat email untuk newsletter"
                className="w-full bg-[#3b3128] text-[#fdf8f5] px-6 py-4 rounded-full border border-[#fdf8f5]/10 focus:outline-none focus:border-[#f5b041] focus:ring-2 focus:ring-[#f5b041]/30 transition-all duration-300 text-sm"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 bottom-2 bg-[#f5b041] text-[#2c231b] px-6 rounded-full font-bold text-sm hover:bg-white transition"
              >
                Subscribe
              </button>
            </form>
            {subscribed && (
              <p className="text-[#f5b041] text-xs mt-3 font-medium">
                Terima kasih! Anda telah berlangganan.
              </p>
            )}
          </div>
        </div>

        <div className="text-center text-[#fdf8f5]/40 font-inter text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Mie Ayam Semangkok. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#f5b041] transition">Privacy Policy</a>
            <a href="#" className="hover:text-[#f5b041] transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}# Commit 4 on 2024-08-22
Date: 2024-08-22
Commit number: 4
Total commits per day: 35
# Commit 8 on 2024-08-22
Date: 2024-08-22
Commit number: 8
Total commits per day: 35
# Commit 12 on 2024-08-22
Date: 2024-08-22
Commit number: 12
Total commits per day: 35
# Commit 16 on 2024-08-22
Date: 2024-08-22
Commit number: 16
Total commits per day: 35
# Commit 20 on 2024-08-22
Date: 2024-08-22
Commit number: 20
Total commits per day: 35
# Commit 24 on 2024-08-22
Date: 2024-08-22
Commit number: 24
Total commits per day: 35
# Commit 28 on 2024-08-22
Date: 2024-08-22
Commit number: 28
Total commits per day: 35
# Commit 32 on 2024-08-22
Date: 2024-08-22
Commit number: 32
Total commits per day: 35
# Commit 4 on 2024-08-23
Date: 2024-08-23
Commit number: 4
Total commits per day: 38
# Commit 8 on 2024-08-23
Date: 2024-08-23
Commit number: 8
Total commits per day: 38

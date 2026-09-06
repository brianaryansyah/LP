"use client";
import { useState } from "react";
import Reveal from "@/components/Reveal";
import WaveDivider from "@/components/WaveDivider";

export default function Location() {
  const [mapActive, setMapActive] = useState(false);
  const services = [
    { icon: <i className="fas fa-motorcycle text-[#f5b041]" aria-hidden="true"></i>, title: "Pesan Antar", desc: "Mager keluar? Kami antar, masih hangat." },
    { icon: <i className="fas fa-store text-[#f5b041]" aria-hidden="true"></i>, title: "Makan di Tempat", desc: "Meja luas, cocok buat keluarga." },
    { icon: <i className="fas fa-glass-cheers text-[#f5b041]" aria-hidden="true"></i>, title: "Acara Spesial", desc: "Arisan, ulang tahun, pesan saja." },
    { icon: <i className="fas fa-calendar-alt text-[#f5b041]" aria-hidden="true"></i>, title: "Reservasi Meja", desc: "Booking dulu biar nggak ngantri." }
  ];

  const info = [
    { icon: "fas fa-map-marker-alt", title: "Alamat", value: "Jl. Karimata No.40, Mulyoharjo, Pemalang" },
    { icon: "fas fa-clock", title: "Jam Buka", value: "Setiap Hari, 10.00 - 22.00 WIB" },
    { icon: "fas fa-phone-alt", title: "Kontak", value: "0856-4073-4972" },
  ];

  return (
    <section id="location" className="relative min-h-screen flex flex-col justify-center pt-12 lg:pt-16 pb-32 lg:pb-40 bg-[#fdf8f5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center mb-10 md:mb-16">
          <Reveal>
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#f5b041]/20 text-[#2c231b] font-bold text-xs mb-4 uppercase tracking-wider border border-[#f5b041]/30">
            Layanan Kami
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2c231b] font-poppins mb-8 md:mb-12">
            Layanan Pengiriman & Reservasi
          </h2>
          </Reveal>
          
          <Reveal delay={100}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 md:mb-14">
            {services.map((svc) => (
              <div key={svc.title} className="bg-white p-4 rounded-xl text-left border border-[#2c231b]/10 flex flex-col items-start">
                <div className="text-xl mb-3">{svc.icon}</div>
                <h4 className="text-sm font-bold text-[#2c231b] font-poppins">{svc.title}</h4>
                <p className="text-[#2c231b]/60 font-inter text-xs mt-1 leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
          </Reveal>

          <Reveal delay={200}>
          <div className="relative w-full h-[280px] sm:h-[340px] lg:h-[420px] rounded-xl overflow-hidden border border-[#2c231b]/10">
            <iframe 
              title="Peta lokasi Semangkok"
              src="https://maps.google.com/maps?q=Jl.%20Karimata%20No.40,%20Mulyoharjo,%20Kec.%20Pemalang,%20Kabupaten%20Pemalang,%20Jawa%20Tengah%2052313&t=&z=16&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className={`${mapActive ? "" : "pointer-events-none"}`}
            ></iframe>
            
            {!mapActive && (
              <button type="button" onClick={() => setMapActive(true)} aria-label="Aktifkan peta interaktif" className="absolute inset-0 flex items-center justify-center bg-black/5">
                <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[#2c231b] border border-[#2c231b]/10">Ketuk untuk geser peta</span>
              </button>
            )}
          </div>
          </Reveal>

          <Reveal delay={250}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {info.map((item) => (
              <div key={item.title} className="bg-white p-4 rounded-xl border border-[#2c231b]/10 text-left flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#fdf8f5] border border-[#2c231b]/10 flex items-center justify-center shrink-0 text-[#2c231b]" aria-hidden="true">
                  <i className={`${item.icon} text-sm`} aria-hidden="true"></i>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#2c231b] font-poppins">{item.title}</h4>
                  <p className="text-xs text-[#2c231b]/60 font-inter mt-1 leading-relaxed">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
          </Reveal>
          
          <Reveal delay={300}>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <a href="https://maps.app.goo.gl/NvCxPom7GSdYFj7Z9" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-[#2c231b] underline underline-offset-4">
              Lokasi di Google Maps
            </a>
            <a href="https://wa.me/6285640734972?text=Halo%20Semangkok%2C%20saya%20ingin%20memesan" target="_blank" rel="noopener noreferrer" className="bg-[#2c231b] text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-black transition-colors">
              Hubungi via WhatsApp
            </a>
          </div>
          </Reveal>
        </div>
      </div>
      
      <WaveDivider fill="#2c231b" position="bottom" />
    </section>
  );
}

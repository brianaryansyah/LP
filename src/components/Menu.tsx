"use client";
import React from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import WaveDivider from "@/components/WaveDivider";

const menuItems = [
  {
    id: 1,
    name: "Mie Ayam Original",
    price: "Rp 15.000",
    desc: "Mie klasik, ayam kecap manis, kuah gurih",
    img: "/img/mi-ayam.jpg",
  },
  {
    id: 2,
    name: "Mie Ayam Bakso",
    price: "Rp 20.000",
    desc: "Mie ayam plus bakso sapi, kenyal",
    img: "/img/mi-ayam-bakso.jpg",
  },
  {
    id: 3,
    name: "Hotplate Seafood",
    price: "Rp 35.000",
    desc: "Bakmi hotplate, udang cumi kerang",
    img: "/img/seafood-hot-plate.jpg",
  },
];

export default function Menu() {
  const orderLink = (name: string, price: string) => {
    const text = encodeURIComponent(`Halo Semangkok, saya ingin memesan ${name} (${price}).`);
    return `https://wa.me/6285640734972?text=${text}`;
  };

  return (
    <section id="menu" className="relative flex flex-col justify-center pt-16 pb-24 bg-[#fdf8f5] overflow-hidden">
      <div className="pointer-events-none absolute -top-24 right-10 h-64 w-64 rounded-full bg-[#f5b041]/12 blur-[60px]" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-10 left-10 h-72 w-72 rounded-full bg-white/80 blur-[50px]" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header */}
        <Reveal>
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-white text-[#2c231b] font-bold text-[11px] mb-4 uppercase tracking-wider border border-[#2c231b]/10">
            Menu
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2c231b] font-poppins mb-4 tracking-tight text-balance">
            Paling sering dipesan
          </h2>
        </div>
        </Reveal>

        {/* Menu redesigned: 3 equal cards smooth hover */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, idx) => (
            <Reveal key={item.name} delay={idx * 90}>
              <div className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-[#2c231b]/10 shadow-[0_8px_24px_rgba(44,35,27,0.06)] hover:shadow-[0_16px_40px_rgba(44,35,27,0.12)] hover:-translate-y-1.5 transition-[transform,box-shadow] duration-500">
                <div className="relative h-52 sm:h-56 w-full overflow-hidden">
                  <Image src={item.img} alt={item.name} fill sizes="(max-width: 640px) 90vw, 360px" className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]" />
                  {idx === 0 && (
                    <span className="absolute left-3 top-3 rounded-full bg-[#f5b041] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#2c231b] shadow-sm">Paling laku</span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-[15px] font-bold text-[#2c231b] font-poppins">{item.name}</h3>
                  <p className="text-xs text-[#2c231b]/60 mt-1 leading-relaxed flex-1">{item.desc}</p>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#2c231b]/10">
                    <span className="text-sm font-extrabold text-[#2c231b]">{item.price}</span>
                    <a href={orderLink(item.name, item.price)} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#2c231b] px-5 py-2 text-xs font-bold text-white hover:bg-black hover:scale-[1.03] transition-[transform,background-color] duration-300">Pesan</a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={260}>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl bg-[#2c231b] p-5 sm:p-6 text-[#fdf8f5] border border-white/5 shadow-[0_12px_32px_rgba(44,35,27,0.18)]">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#f5b041]">Catatan dapur</p>
              <h3 className="text-base font-bold font-poppins mt-1">Sambal terpisah, tuang sendiri</h3>
              <p className="text-sm text-[#fdf8f5]/70 mt-1 leading-relaxed max-w-xl">Semua mie disajikan tidak pedas. Sambal di mangkuk kecil, aman buat anak, bebas tambah buat yang suka pedas.</p>
            </div>
            <a href="#reservasi" className="shrink-0 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#2c231b] hover:bg-[#f5b041] transition-colors duration-300 self-stretch sm:self-auto justify-center">Reservasi meja</a>
          </div>
        </Reveal>
      </div>

      <WaveDivider fill="#ffffff" position="bottom" />
    </section>
  );
}
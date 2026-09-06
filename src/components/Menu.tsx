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

        {/* Menu — varied: list + card, not 3 identical boxes */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2">
            <Reveal>
              <div className="bg-white rounded-xl border border-[#2c231b]/10 p-4 flex gap-4">
                <div className="relative w-36 sm:w-48 h-36 sm:h-40 rounded-lg overflow-hidden shrink-0 border border-[#2c231b]/5">
                  <Image src={menuItems[0].img} alt={menuItems[0].name} fill sizes="200px" className="object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#f5b041]">Paling sering dipesan</p>
                  <h3 className="text-lg font-bold text-[#2c231b] font-poppins mt-1">{menuItems[0].name}</h3>
                  <p className="text-sm text-[#2c231b]/60 mt-1 leading-relaxed">{menuItems[0].desc}</p>
                  <div className="flex items-center gap-3 mt-3">
                    <span className="text-sm font-bold text-[#2c231b]">{menuItems[0].price}</span>
                    <a href={orderLink(menuItems[0].name, menuItems[0].price)} target="_blank" rel="noopener noreferrer" className="ml-auto rounded-full bg-[#2c231b] px-4 py-2 text-xs font-bold text-white">Pesan</a>
                  </div>
                </div>
              </div>
            </Reveal>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {menuItems.slice(1).map((item, idx) => (
                <Reveal key={item.name} delay={idx * 80}>
                  <div className={idx === 0 ? "bg-[#fdf8f5] rounded-xl border border-[#2c231b]/10 p-3 flex flex-col" : "bg-white rounded-xl border border-[#2c231b]/10 p-3 flex flex-col"}>
                    <div className="relative w-full h-40 rounded-lg overflow-hidden border border-[#2c231b]/5">
                      <Image src={item.img} alt={item.name} fill sizes="300px" className="object-cover" />
                    </div>
                    <h3 className="text-sm font-bold text-[#2c231b] font-poppins mt-3">{item.name}</h3>
                    <p className="text-xs text-[#2c231b]/60 mt-1 flex-1">{item.desc}</p>
                    <div className="flex justify-between items-center mt-3 pt-3 border-t border-[#2c231b]/10">
                      <span className="text-sm font-bold text-[#2c231b]">{item.price}</span>
                      <a href={orderLink(item.name, item.price)} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-[#2c231b] underline underline-offset-4">Pesan</a>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={120} className="lg:col-span-1">
            <div className="bg-[#2c231b] rounded-xl p-6 text-[#fdf8f5] h-full flex flex-col">
              <p className="text-xs font-bold uppercase tracking-wider text-[#f5b041]">Catatan dapur</p>
              <h3 className="text-lg font-bold font-poppins mt-2">Sambal terpisah</h3>
              <p className="text-sm text-[#fdf8f5]/70 mt-2 leading-relaxed">Semua mie disajikan tidak pedas. Sambal ditaruh terpisah, tuang sesuai selera. Anak aman, yang suka pedas bebas tambah.</p>
              <a href="#reservasi" className="mt-auto inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-[#2c231b] self-start">Reservasi meja</a>
            </div>
          </Reveal>
        </div>
      </div>

      <WaveDivider fill="#ffffff" position="bottom" />
    </section>
  );
}
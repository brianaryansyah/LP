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
    <section id="menu" className="relative flex flex-col justify-center pt-16 pb-24 bg-[#fdf8f5] border-y border-[#2c231b]/5 overflow-hidden">
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

        {/* Menu Grid — flat paper */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {menuItems.map((item, idx) => (
            <Reveal key={item.id} delay={idx * 80}>
            <div className="h-full bg-white rounded-xl p-3 flex flex-col border border-[#2c231b]/10">
              <div className="w-full h-48 sm:h-52 rounded-xl overflow-hidden mb-4 relative border border-[#2c231b]/5">
                <Image src={item.img} alt={item.name} fill sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw" className="object-cover" />
              </div>
              <div className="px-1 flex-grow flex flex-col">
                <h3 className="text-base font-bold text-[#2c231b] font-poppins">{item.name}</h3>
                <p className="text-[#2c231b]/60 font-inter text-sm mb-4 flex-grow leading-relaxed">{item.desc}</p>
                <div className="flex justify-between items-center mt-auto pt-3 border-t border-[#2c231b]/10">
                  <span className="font-bold text-[#2c231b] text-sm">{item.price}</span>
                  <a href={orderLink(item.name, item.price)} target="_blank" rel="noopener noreferrer" aria-label={`Pesan ${item.name} via WhatsApp`} className="inline-flex items-center gap-1.5 rounded-full bg-[#2c231b] px-4 py-2 text-xs font-bold text-white hover:bg-black transition-colors">
                    Pesan <i className="fas fa-arrow-right text-[10px]" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
            </Reveal>
          ))}
        </div>
      </div>

      <WaveDivider fill="#ffffff" position="bottom" />
    </section>
  );
}
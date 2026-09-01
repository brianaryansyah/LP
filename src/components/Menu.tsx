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
    img: "/img/seafood-hot-plate.jpg",
  },
];

export default function Menu() {
  return (
    <section id="menu" className="relative min-h-screen flex flex-col justify-center pt-16 pb-32 bg-[#2c231b] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header */}
        <Reveal>
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#f5b041] text-[#2c231b] font-bold text-xs mb-4 uppercase tracking-wider shadow-sm">
            Menu Pilihan
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#fdf8f5] font-poppins mb-4 sm:mb-6 tracking-tight text-balance">
            Paling Sering Dipesan
          </h2>
        </div>
        </Reveal>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {menuItems.map((item, idx) => (
            <Reveal key={item.id} delay={idx * 100}>
            <div className="h-full bg-[#3b3128] rounded-[2rem] p-4 flex flex-col group hover:-translate-y-2 transition-all duration-500 shadow-2xl hover:shadow-[#f5b041]/15 border border-transparent hover:border-[#f5b041]/20 relative overflow-hidden">
              
              {/* Decorative corner glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#f5b041]/10 rounded-full blur-3xl group-hover:bg-[#f5b041]/20 transition-all duration-500"></div>

              {/* Image */}
              <div className="w-full h-48 sm:h-60 rounded-3xl overflow-hidden mb-6 relative shadow-inner">
                <Image 
                  src={item.img} 
                  alt={item.name} 
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                  className="object-cover group-hover:scale-[1.03] transition duration-700 ease-in-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3b3128] via-transparent to-transparent opacity-60"></div>
              </div>
              
              {/* Content */}
              <div className="px-2 flex-grow flex flex-col relative z-10">
                <h3 className="text-lg sm:text-2xl font-bold text-[#fdf8f5] font-poppins mb-2 group-hover:text-[#f5b041] transition-colors">{item.name}</h3>
                <p className="text-[#fdf8f5]/60 font-inter text-xs sm:text-sm mb-6 flex-grow leading-relaxed">{item.desc}</p>
                
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-white/5">
                  <div className="bg-[#f5b041]/10 text-[#f5b041] font-bold px-4 py-2 rounded-xl text-sm sm:text-base border border-[#f5b041]/20">
                    {item.price}
                  </div>
                  <button aria-label={`Tambah ${item.name} ke pesanan`} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#fdf8f5] text-[#2c231b] flex items-center justify-center hover:bg-[#f5b041] hover:text-white hover:rotate-90 active:scale-95 transition-all duration-300 shadow-md group-hover:scale-105">
                    <i className="fas fa-plus text-sm" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>
            </Reveal>
          ))}
        </div>
      </div>

      <WaveDivider fill="#fdf8f5" position="bottom" />
    </section>
  );
}
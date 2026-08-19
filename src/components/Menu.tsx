"use client";
import React from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";

const menuItems = [
  {
    id: 1,
    name: "Mie Ayam Original",
    price: "Rp 15.000",
    desc: "Mie ayam klasik dengan ayam kecap manis gurih",
    img: "/img/mi-ayam.jpg",
  },
  {
    id: 2,
    name: "Mie Ayam Bakso",
    price: "Rp 20.000",
    desc: "Mie ayam ditambah bakso sapi asli",
    img: "/img/mi-ayam-bakso.jpg",
  },
  {
    id: 3,
    name: "Hotplate Seafood",
    price: "Rp 35.000",
    desc: "Bakmi hotplate dengan udang, cumi, dan kerang",
    img: "/img/seafood-hot-plate.jpg",
  },
];

export default function Menu() {
  return (
    <section id="menu" className="relative min-h-screen flex flex-col justify-center pt-16 pb-32 bg-[#2c231b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header */}
        <Reveal>
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#f5b041] text-[#2c231b] font-bold text-xs mb-4 uppercase tracking-wider shadow-md">
            Menu Pilihan
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#fdf8f5] font-poppins mb-4 sm:mb-6">
            Produk Terbaik Kami
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#fdf8f5]/70 font-inter max-w-2xl mx-auto px-2">
            Dibuat dengan bahan pilihan terbaik dan resep warisan keluarga untuk menghadirkan rasa yang autentik di setiap suapan.
          </p>
        </div>
        </Reveal>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {menuItems.map((item, idx) => (
            <Reveal key={item.id} delay={idx * 100}>
            <div className="h-full bg-[#3b3128] rounded-[2rem] p-4 flex flex-col group hover:-translate-y-3 transition-all duration-500 shadow-2xl hover:shadow-[#f5b041]/20 border border-transparent hover:border-[#f5b041]/30 relative overflow-hidden">
              
              {/* Decorative corner glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#f5b041]/10 rounded-full blur-3xl group-hover:bg-[#f5b041]/20 transition-all duration-500"></div>

              {/* Image */}
              <div className="w-full h-48 sm:h-60 rounded-3xl overflow-hidden mb-6 relative shadow-inner">
                <Image 
                  src={item.img} 
                  alt={item.name} 
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                  className="object-cover group-hover:scale-110 transition duration-700 ease-in-out" 
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
                  <button aria-label={`Tambah ${item.name} ke pesanan`} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#fdf8f5] text-[#2c231b] flex items-center justify-center hover:bg-[#f5b041] hover:text-white transition-all duration-300 hover:rotate-12 transform shadow-md group-hover:scale-110">
                    <i className="fas fa-plus text-sm"></i>
                  </button>
                </div>
              </div>
            </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Bottom Wave Divider matching the background of the next section */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 translate-y-[2px]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 sm:h-16 md:h-24 lg:h-32 text-[#fdf8f5] fill-current">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.45,130.34,124.63,195.4,108.27c44.87-11.28,87.65-29.67,126-51.83Z"></path>
        </svg>
      </div>
    </section>
  );
}

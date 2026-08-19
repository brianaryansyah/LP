"use client";
import React from "react";

const menuItems = [
  {
    id: 1,
    name: "Mie Ayam Original",
    price: "Rp 15.000",
    desc: "Mie ayam klasik dengan ayam kecap manis gurih",
    img: "/img/mi ayam.jpg",
  },
  {
    id: 2,
    name: "Mie Ayam Bakso",
    price: "Rp 20.000",
    desc: "Mie ayam ditambah bakso sapi asli",
    img: "/img/mi ayam bakso.jpg",
  },
  {
    id: 3,
    name: "Hotplate Seafood",
    price: "Rp 35.000",
    desc: "Bakmi hotplate dengan udang, cumi, dan kerang",
    img: "/img/seafood hot plate.jpg",
  },
];

export default function Menu() {
  return (
    <section id="menu" className="relative pt-12 pb-32 bg-[#2c231b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#f5b041] text-[#2c231b] font-bold text-xs mb-4 uppercase tracking-wider">
            Menu Pilihan
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#fdf8f5] font-poppins mb-6">
            Produk Terbaik Kami
          </h2>
          <p className="text-lg text-[#fdf8f5]/60 font-inter max-w-2xl mx-auto">
            Dibuat dengan bahan pilihan terbaik dan resep warisan keluarga untuk menghadirkan rasa yang autentik di setiap suapan.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <div key={item.id} className="bg-[#3b3128] rounded-[2rem] p-4 flex flex-col group hover:-translate-y-2 transition duration-300">
              {/* Image */}
              <div className="w-full h-56 rounded-3xl overflow-hidden mb-6 relative">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500" 
                />
              </div>
              
              {/* Content */}
              <div className="px-2 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-[#fdf8f5] font-poppins mb-2">{item.name}</h3>
                <p className="text-[#fdf8f5]/60 font-inter text-sm mb-6 flex-grow">{item.desc}</p>
                
                <div className="flex justify-between items-center mt-auto">
                  <div className="bg-[#f5b041]/20 text-[#f5b041] font-bold px-4 py-2 rounded-lg">
                    {item.price}
                  </div>
                  <button className="w-12 h-12 rounded-full bg-[#f5b041] text-[#2c231b] flex items-center justify-center hover:bg-white transition hover:-rotate-45 transform">
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Wave Divider matching the background of the next section */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 translate-y-[2px]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24 lg:h-32 text-[#fdf8f5] fill-current">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.45,130.34,124.63,195.4,108.27c44.87-11.28,87.65-29.67,126-51.83Z"></path>
        </svg>
      </div>
    </section>
  );
}

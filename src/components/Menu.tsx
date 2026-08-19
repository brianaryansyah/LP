"use client";
import React, { useState } from "react";

const menuItems = [
  {
    id: 1,
    category: "mie",
    name: "Mie Ayam Original",
    price: "Rp 15.000",
    desc: "Mie ayam klasik dengan ayam kecap manis gurih",
    img: "https://images.unsplash.com/photo-1612927601601-6638404737ce?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    category: "mie",
    name: "Mie Ayam Bakso",
    price: "Rp 20.000",
    desc: "Mie ayam ditambah bakso sapi asli",
    img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    category: "seafood",
    name: "Hotplate Seafood",
    price: "Rp 35.000",
    desc: "Bakmi hotplate dengan udang, cumi, dan kerang",
    img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&h=400&fit=crop",
  },
  {
    id: 4,
    category: "bakso",
    name: "Bakso Urat Jumbo",
    price: "Rp 25.000",
    desc: "Bakso urat sapi ukuran besar dengan kuah kaldu sapi",
    img: "https://images.unsplash.com/photo-1612927601601-6638404737ce?w=400&h=400&fit=crop",
  },
];

export default function Menu() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredMenu = activeTab === "all" ? menuItems : menuItems.filter((item) => item.category === activeTab);

  const tabs = [
    { id: "all", label: "Semua Menu" },
    { id: "mie", label: "Mie Ayam" },
    { id: "bakso", label: "Bakso Kuah" },
    { id: "seafood", label: "Seafood" },
  ];

  return (
    <section id="menu" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-950 font-poppins mb-6">Menu Pilihan</h2>
          <p className="text-lg text-amber-900/70 font-inter max-w-2xl mx-auto">
            Dibuat dengan bahan pilihan terbaik dan resep warisan keluarga untuk menghadirkan rasa yang autentik di setiap suapan.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-3 rounded-full font-semibold transition duration-300 text-sm ${
                activeTab === tab.id
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30"
                  : "bg-white text-amber-950 hover:bg-orange-50 border border-orange-500/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredMenu.map((item) => (
            <div key={item.id} className="bg-white rounded-[2rem] p-6 shadow-sm hover:shadow-xl transition duration-300 border border-orange-500/10 flex flex-col">
              <div className="relative w-40 h-40 mx-auto mb-8 mt-2">
                <div className="absolute inset-0 bg-orange-100 rounded-full blur-xl opacity-50 scale-110"></div>
                <img src={item.img} alt={item.name} className="relative z-10 w-full h-full object-cover rounded-full shadow-lg border-4 border-white" />
                <div className="absolute top-0 right-0 z-20 bg-orange-400 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Best
                </div>
              </div>
              
              <div className="text-left w-full mb-4">
                <div className="text-orange-500 font-bold text-2xl font-poppins">{item.price}</div>
                <div className="text-amber-900/50 text-xs font-medium uppercase tracking-wider">Harga Spesial</div>
              </div>
              
              <div className="text-left w-full flex-grow flex flex-col">
                <h3 className="text-lg font-bold text-amber-950 font-poppins mb-2">{item.name}</h3>
                <p className="text-amber-900/60 font-inter text-sm mb-6 flex-grow">{item.desc}</p>
                <button className="text-orange-500 font-bold text-sm border-2 border-orange-200 rounded-full px-6 py-3 hover:bg-orange-500 hover:text-white transition w-full">
                  Pesan Sekarang
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

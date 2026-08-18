"use client";
import React, { useState } from "react";

const menuItems = [
  {
    id: 1,
    category: "mie",
    name: "Mie Ayam Original",
    price: "Rp 15.000",
    desc: "Mie ayam klasik dengan ayam kecap manis gurih",
    img: "https://images.unsplash.com/photo-1612927601601-6638404737ce?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    category: "mie",
    name: "Mie Ayam Bakso",
    price: "Rp 20.000",
    desc: "Mie ayam ditambah bakso sapi asli",
    img: "/img/mi ayam bakso.jpg",
  },
  {
    id: 3,
    category: "seafood",
    name: "Hotplate Seafood",
    price: "Rp 35.000",
    desc: "Bakmi hotplate dengan udang, cumi, dan kerang",
    img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    category: "bakso",
    name: "Bakso Urat Jumbo",
    price: "Rp 25.000",
    desc: "Bakso urat sapi ukuran besar dengan kuah kaldu sapi",
    img: "/img/bakso urat.png",
  },
  {
    id: 5,
    category: "minuman",
    name: "Es Teh Manis",
    price: "Rp 5.000",
    desc: "Teh manis segar dengan es batu",
    img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop",
  },
  {
    id: 6,
    category: "minuman",
    name: "Es Jeruk",
    price: "Rp 8.000",
    desc: "Perasan jeruk asli yang menyegarkan",
    img: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&h=300&fit=crop",
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
    { id: "minuman", label: "Minuman" },
  ];

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-poppins mb-4">Menu Kami</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 font-inter">Pilihan terbaik untuk setiap selera</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-full font-medium transition duration-300 ${
                activeTab === tab.id
                  ? "bg-orange-500 text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMenu.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover hover:scale-110 transition duration-500" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-orange-600 shadow-sm">
                  {item.price}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 font-poppins mb-2">{item.name}</h3>
                <p className="text-gray-600 font-inter text-sm flex-grow mb-6">{item.desc}</p>
                <button className="w-full py-3 rounded-xl border-2 border-orange-500 text-orange-500 font-semibold hover:bg-orange-500 hover:text-white transition duration-300 flex items-center justify-center gap-2">
                  <i className="fas fa-cart-plus"></i> Tambah ke Keranjang
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

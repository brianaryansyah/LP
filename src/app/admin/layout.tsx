"use client";
import React from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: "fas fa-chart-pie" },
  { href: "/admin/orders", label: "Kelola Pesanan", icon: "fas fa-shopping-bag" },
  { href: "/admin/menu", label: "Kelola Menu", icon: "fas fa-utensils" },
];

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-[#fdf8f5]">
      {/* Sidebar */}
      <aside className="w-64 bg-[#2c231b] text-[#fdf8f5] flex flex-col fixed inset-y-0 left-0 z-40">
        <div className="p-6 flex items-center gap-3 border-b border-[#fdf8f5]/10">
          <div className="w-10 h-10 bg-[#f5b041] rounded-full flex items-center justify-center">
            <i className="fas fa-bowl-food text-[#2c231b]"></i>
          </div>
          <div>
            <h2 className="text-lg font-extrabold font-poppins text-[#fdf8f5]">Semangkok</h2>
            <span className="text-[10px] text-[#f5b041] font-semibold uppercase tracking-widest">Admin Panel</span>
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  active
                    ? "bg-[#f5b041] text-[#2c231b] shadow-lg"
                    : "text-[#fdf8f5]/70 hover:bg-[#fdf8f5]/10 hover:text-[#fdf8f5]"
                }`}
              >
                <i className={`${item.icon} w-5 text-center`}></i>
                {item.label}
              </a>
            );
          })}
        </nav>
        <div className="p-4 border-t border-[#fdf8f5]/10">
          <a
            href="/admin/login"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-[#fdf8f5]/70 hover:bg-red-500/20 hover:text-red-300 transition-colors"
          >
            <i className="fas fa-sign-out-alt w-5 text-center"></i>
            Logout
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8 overflow-y-auto">{children}</main>
    </div>
  );
}
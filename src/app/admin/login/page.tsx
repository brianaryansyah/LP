"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/admin");
  };

  return (
    <div className="min-h-screen bg-[#fdf8f5] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-[#f5b041] rounded-full flex items-center justify-center shadow-lg mb-4">
            <i className="fas fa-bowl-food text-[#2c231b] text-2xl"></i>
          </div>
          <h1 className="text-3xl font-extrabold text-[#2c231b] font-poppins">Semangkok Admin</h1>
          <p className="text-[#2c231b]/60 text-sm mt-2">Masuk untuk mengelola pesanan dan menu</p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl border border-[#2c231b]/5 p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-[#2c231b] mb-2">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="admin@semangkok.id"
                className="w-full px-4 py-3 rounded-xl border border-[#2c231b]/10 bg-[#fdf8f5] focus:border-[#f5b041] focus:ring-2 focus:ring-[#f5b041]/30 transition outline-none text-[#2c231b]"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-[#2c231b] mb-2">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                required
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl border border-[#2c231b]/10 bg-[#fdf8f5] focus:border-[#f5b041] focus:ring-2 focus:ring-[#f5b041]/30 transition outline-none text-[#2c231b]"
              />
            </div>
            <button type="submit" className="w-full bg-[#2c231b] text-white font-bold py-3 rounded-full hover:bg-[#f5b041] hover:text-[#2c231b] transition duration-300 shadow-lg">
              Masuk
            </button>
          </form>
          <p className="text-xs text-[#2c231b]/40 text-center mt-6">
            Area khusus pemilik. Hubungi pemilik untuk akses.
          </p>
        </div>
      </div>
    </div>
  );
}
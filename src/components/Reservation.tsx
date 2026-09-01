"use client";
import React, { useState } from "react";
import Reveal from "@/components/Reveal";
import WaveDivider from "@/components/WaveDivider";

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    notes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Halo, saya ingin reservasi meja.%0A%0ANama: ${formData.name}%0ATelepon: ${formData.phone}%0ATanggal: ${formData.date}%0AWaktu: ${formData.time}%0AJumlah Orang: ${formData.guests}%0ACatatan: ${formData.notes}`;
    window.open(`https://wa.me/6285640734972?text=${message}`, "_blank");
  };

  return (
    <section id="reservasi" className="relative py-16 lg:py-24 bg-[#fdf8f5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
        <div className="text-center mb-14">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#f5b041]/20 text-[#2c231b] font-bold text-xs mb-4 uppercase tracking-wider border border-[#f5b041]/30">
            Reservasi Meja
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2c231b] font-poppins mb-4 sm:mb-6">
            Pesan Tempat Anda
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#2c231b]/70 font-inter max-w-2xl mx-auto px-2">
            Mau makan bareng keluarga besar? Pesan meja dulu biar kebagian tempat.
          </p>
        </div>
        </Reveal>

        <Reveal delay={100}>
        <div className="bg-white rounded-[2rem] sm:rounded-[3rem] shadow-xl hover:shadow-2xl overflow-hidden border border-[#2c231b]/5 flex flex-col lg:flex-row transition-shadow duration-500">
          <div className="lg:w-2/5 bg-[#2c231b] p-8 sm:p-10 text-[#fdf8f5] flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#f5b041] opacity-10 rounded-full -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#f5b041] opacity-10 rounded-full translate-y-1/3 -translate-x-1/4"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6 font-poppins text-[#fdf8f5]">Mengapa Reservasi?</h3>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#f5b041] text-[#2c231b] flex items-center justify-center shrink-0">
                    <i className="fas fa-check text-xs"></i>
                  </div>
                  <span className="text-[#fdf8f5]/90">Tempat duduk terjamin</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#f5b041] text-[#2c231b] flex items-center justify-center shrink-0">
                    <i className="fas fa-check text-xs"></i>
                  </div>
                  <span className="text-[#fdf8f5]/90">Pelayanan lebih cepat</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#f5b041] text-[#2c231b] flex items-center justify-center shrink-0">
                    <i className="fas fa-check text-xs"></i>
                  </div>
                  <span className="text-[#fdf8f5]/90">Meja untuk grup besar</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/[0.06] p-4 rounded-2xl border border-[#fdf8f5]/15 relative z-10 backdrop-blur-sm">
              <p className="text-sm font-medium text-[#fdf8f5]/70 flex items-start gap-2">
                <i className="fas fa-info-circle mt-1 text-[#f5b041]"></i>
                Untuk acara khusus atau grup lebih dari 10 orang, harap reservasi minimal 1 hari sebelumnya.
              </p>
            </div>
          </div>

          <div className="lg:w-3/5 p-8 sm:p-10">
            <h3 className="text-2xl font-bold text-[#2c231b] mb-6 font-poppins">
              <i className="fas fa-edit text-[#f5b041] mr-2"></i> Form Reservasi
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#2c231b] mb-2">Nama Lengkap</label>
                  <input id="name" required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-[#2c231b]/10 bg-white focus:border-[#f5b041] focus:ring-2 focus:ring-[#f5b041]/40 focus:ring-offset-2 focus:ring-offset-white transition-all duration-300 outline-none text-[#2c231b] hover:border-[#2c231b]/20" placeholder="Budi Santoso" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-[#2c231b] mb-2">Nomor Telepon</label>
                  <input id="phone" required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-[#2c231b]/10 bg-white focus:border-[#f5b041] focus:ring-2 focus:ring-[#f5b041]/40 focus:ring-offset-2 focus:ring-offset-white transition-all duration-300 outline-none text-[#2c231b] hover:border-[#2c231b]/20" placeholder="081234567890" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-semibold text-[#2c231b] mb-2">Tanggal</label>
                  <input id="date" required type="date" name="date" value={formData.date} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-[#2c231b]/10 bg-white focus:border-[#f5b041] focus:ring-2 focus:ring-[#f5b041]/40 focus:ring-offset-2 focus:ring-offset-white transition-all duration-300 outline-none text-[#2c231b] hover:border-[#2c231b]/20" />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-semibold text-[#2c231b] mb-2">Waktu</label>
                  <select id="time" required name="time" value={formData.time} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-[#2c231b]/10 bg-white focus:border-[#f5b041] focus:ring-2 focus:ring-[#f5b041]/40 focus:ring-offset-2 focus:ring-offset-white transition-all duration-300 outline-none text-[#2c231b] hover:border-[#2c231b]/20">
                    <option value="">Pilih Waktu</option>
                    <option value="12:00">12:00 WIB</option>
                    <option value="13:00">13:00 WIB</option>
                    <option value="18:00">18:00 WIB</option>
                    <option value="19:00">19:00 WIB</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="guests" className="block text-sm font-semibold text-[#2c231b] mb-2">Jumlah Orang</label>
                  <select id="guests" required name="guests" value={formData.guests} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-[#2c231b]/10 bg-white focus:border-[#f5b041] focus:ring-2 focus:ring-[#f5b041]/40 focus:ring-offset-2 focus:ring-offset-white transition-all duration-300 outline-none text-[#2c231b] hover:border-[#2c231b]/20">
                    <option value="">Pilih Jumlah</option>
                    <option value="1-2">1-2 Orang</option>
                    <option value="3-4">3-4 Orang</option>
                    <option value="5-6">5-6 Orang</option>
                    <option value="10+">Lebih dari 10 Orang</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="notes" className="block text-sm font-semibold text-[#2c231b] mb-2">Catatan Khusus (Opsional)</label>
                <textarea id="notes" name="notes" value={formData.notes} onChange={handleChange} rows={3} className="w-full px-4 py-3 rounded-xl border border-[#2c231b]/10 bg-white focus:border-[#f5b041] focus:ring-2 focus:ring-[#f5b041]/40 focus:ring-offset-2 focus:ring-offset-white transition-all duration-300 outline-none resize-none text-[#2c231b] hover:border-[#2c231b]/20" placeholder="Contoh: Meja dekat jendela, ada anak kecil, dll."></textarea>
              </div>

              <button type="submit" className="w-full bg-[#2c231b] text-[#fdf8f5] font-bold py-4 rounded-full hover:bg-[#f5b041] hover:text-[#2c231b] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0">
                <i className="fab fa-whatsapp text-xl text-[#25D366]"></i> Kirim Reservasi via WhatsApp
              </button>
            </form>
          </div>
        </div>
        </Reveal>
      </div>
      <WaveDivider fill="#fdf8f5" position="bottom" height="h-8 sm:h-12 md:h-16" />
    </section>
  );
}
"use client";
import React, { useState } from "react";
import Reveal from "@/components/Reveal";
import WaveDivider from "@/components/WaveDivider";

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-[#2c231b]/10 bg-white text-[#2c231b] [color-scheme:light] focus:border-[#f5b041] focus:ring-2 focus:ring-[#f5b041]/40 focus:ring-offset-2 focus:ring-offset-white transition-[border-color,box-shadow] duration-300 outline-none hover:border-[#2c231b]/20";

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    notes: "",
  });

  const now = new Date();
  const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(
    now.getDate()
  ).padStart(2, "0")}`;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      "Halo, saya ingin reservasi meja.",
      "",
      `Nama: ${formData.name}`,
      `Telepon: ${formData.phone}`,
      `Tanggal: ${formData.date}`,
      `Waktu: ${formData.time}`,
      `Jumlah Orang: ${formData.guests}`,
      `Catatan: ${formData.notes.trim() || "Tidak ada"}`,
    ];
    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/6285640734972?text=${text}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="reservasi"
      className="relative min-h-screen flex flex-col justify-center py-16 lg:py-24 bg-[#fdf8f5] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <Reveal>
          <div className="text-center mb-10 lg:mb-14">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#f5b041]/20 text-[#2c231b] font-bold text-xs mb-4 uppercase tracking-wider border border-[#f5b041]/30">
              Reservasi Meja
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2c231b] font-poppins mb-4 sm:mb-6 text-balance">
              Pesan Tempat Anda
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-[#2c231b]/70 font-inter max-w-2xl mx-auto px-2 leading-relaxed">
              Mau makan bareng keluarga besar? Pesan meja dulu biar kebagian tempat.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="grid lg:grid-cols-5 gap-6">
            <div className="lg:col-span-2 bg-[#2c231b] p-7 sm:p-8 rounded-xl border border-[#2c231b] flex flex-col justify-between">

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 font-poppins text-[#fdf8f5]">
                  Mengapa Reservasi?
                </h3>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#f5b041] text-[#2c231b] flex items-center justify-center shrink-0">
                      <i className="fas fa-check text-xs" aria-hidden="true"></i>
                    </div>
                    <span className="text-[#fdf8f5]/90">Tempat duduk terjamin</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#f5b041] text-[#2c231b] flex items-center justify-center shrink-0">
                      <i className="fas fa-check text-xs" aria-hidden="true"></i>
                    </div>
                    <span className="text-[#fdf8f5]/90">Pelayanan lebih cepat</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#f5b041] text-[#2c231b] flex items-center justify-center shrink-0">
                      <i className="fas fa-check text-xs" aria-hidden="true"></i>
                    </div>
                    <span className="text-[#fdf8f5]/90">Meja untuk grup besar</span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-white/10 pt-4 relative z-10">
                <p className="text-sm text-[#fdf8f5]/70 leading-relaxed">
                  Untuk grup lebih dari 10 orang, reservasi sehari sebelumnya.
                </p>
              </div>
            </div>

            <div className="lg:col-span-3 bg-white p-7 sm:p-8 rounded-xl border border-[#2c231b]/10">
              <h3 className="text-xl font-bold text-[#2c231b] mb-6 font-poppins">Form Reservasi</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-[#2c231b] mb-2"
                    >
                      Nama Lengkap
                    </label>
                    <input
                      id="name"
                      required
                      autoComplete="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Contoh: Budi Santoso…"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-[#2c231b] mb-2"
                    >
                      Nomor Telepon
                    </label>
                    <input
                      id="phone"
                      required
                      autoComplete="tel"
                      inputMode="tel"
                      type="tel"
                      name="phone"
                      minLength={9}
                      maxLength={16}
                      pattern="[0-9+ ]{9,16}"
                      title="Gunakan 9 sampai 16 digit angka"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Contoh: 081234567890…"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label
                      htmlFor="date"
                      className="block text-sm font-semibold text-[#2c231b] mb-2"
                    >
                      Tanggal
                    </label>
                    <input
                      id="date"
                      required
                      type="date"
                      name="date"
                      min={today}
                      value={formData.date}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="time"
                      className="block text-sm font-semibold text-[#2c231b] mb-2"
                    >
                      Waktu
                    </label>
                    <select
                      id="time"
                      required
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Pilih Waktu</option>
                      <option value="12:00">12:00 WIB</option>
                      <option value="13:00">13:00 WIB</option>
                      <option value="18:00">18:00 WIB</option>
                      <option value="19:00">19:00 WIB</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="guests"
                      className="block text-sm font-semibold text-[#2c231b] mb-2"
                    >
                      Jumlah Orang
                    </label>
                    <select
                      id="guests"
                      required
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Pilih Jumlah</option>
                      <option value="1-2">1-2 Orang</option>
                      <option value="3-4">3-4 Orang</option>
                      <option value="5-6">5-6 Orang</option>
                      <option value="10+">Lebih dari 10 Orang</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="notes"
                    className="block text-sm font-semibold text-[#2c231b] mb-2"
                  >
                    Catatan Khusus (Opsional)
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    autoComplete="off"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={3}
                    className={`${inputClass} resize-none`}
                    placeholder="Contoh: Meja dekat jendela, ada anak kecil…"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#2c231b] text-white font-bold py-3.5 rounded-full hover:bg-black transition-colors flex items-center justify-center gap-2"
                >
                  <i className="fab fa-whatsapp" aria-hidden="true"></i>
                  Kirim via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
      <WaveDivider fill="#fdf8f5" position="bottom" />
    </section>
  );
}

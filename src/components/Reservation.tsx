"use client";
import React, { useState } from "react";
import Reveal from "@/components/Reveal";

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-[#2c231b]/10 bg-white focus:border-[#f5b041] focus:ring-2 focus:ring-[#f5b041]/40 focus:ring-offset-2 focus:ring-offset-white transition-[border-color,box-shadow] duration-300 outline-none text-[#2c231b] hover:border-[#2c231b]/20";

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    notes: "",
  });

  const today = new Date().toISOString().split("T")[0];

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
      `Catatan: ${formData.notes || "-"}`,
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
          <div className="bg-white rounded-[2rem] sm:rounded-[3rem] shadow-xl hover:shadow-2xl overflow-hidden border border-[#2c231b]/5 flex flex-col lg:flex-row transition-[transform,box-shadow,border-color] duration-500 ring-1 ring-black/5">
            <div className="lg:w-2/5 bg-[#2c231b] p-8 sm:p-10 text-[#fdf8f5] flex flex-col justify-between relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-64 h-64 bg-[#f5b041] opacity-10 rounded-full -translate-y-1/2 translate-x-1/3"
                aria-hidden="true"
              ></div>
              <div
                className="absolute bottom-0 left-0 w-48 h-48 bg-[#f5b041] opacity-10 rounded-full translate-y-1/3 -translate-x-1/4"
                aria-hidden="true"
              ></div>

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

              <div className="bg-white/[0.06] p-4 rounded-2xl border border-[#fdf8f5]/15 relative z-10 backdrop-blur-sm">
                <p className="text-sm font-medium text-[#fdf8f5]/70 flex items-start gap-2 leading-relaxed">
                  <i className="fas fa-info-circle mt-1 text-[#f5b041]" aria-hidden="true"></i>
                  Untuk acara khusus atau grup lebih dari 10 orang, harap reservasi minimal 1 hari
                  sebelumnya.
                </p>
              </div>
            </div>

            <div className="lg:w-3/5 p-8 sm:p-10">
              <h3 className="text-2xl font-bold text-[#2c231b] mb-6 font-poppins">
                <i className="fas fa-edit text-[#f5b041] mr-2" aria-hidden="true"></i> Form
                Reservasi
              </h3>
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
                  className="w-full bg-[#2c231b] text-[#fdf8f5] font-bold py-4 rounded-full hover:bg-[#f5b041] hover:text-[#2c231b] transition-[transform,background-color,color,box-shadow] duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-2 focus-visible:ring-[#f5b041]/60 focus-visible:ring-offset-2"
                >
                  <i className="fab fa-whatsapp text-xl text-[#25D366]" aria-hidden="true"></i>
                  Kirim Reservasi via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="flex justify-center mt-10 lg:mt-12">
            <a
              href="#location"
              aria-label="Lanjut ke bagian Layanan Kami"
              className="group inline-flex items-center gap-3 text-sm font-bold text-[#2c231b]/60 hover:text-[#2c231b] transition-colors duration-300 px-6 py-3 rounded-full border border-[#2c231b]/10 hover:border-[#f5b041]/40 bg-white/60 hover:bg-white"
            >
              Lanjut ke Layanan Kami
              <span className="w-8 h-8 rounded-full bg-[#f5b041] text-[#2c231b] flex items-center justify-center transition-transform duration-300 group-hover:translate-y-0.5">
                <i className="fas fa-arrow-down text-xs" aria-hidden="true"></i>
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

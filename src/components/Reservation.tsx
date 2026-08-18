"use client";
import React, { useState } from "react";

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
    // Simulate sending to WhatsApp
    const message = `Halo, saya ingin reservasi meja.%0A%0ANama: ${formData.name}%0ATelepon: ${formData.phone}%0ATanggal: ${formData.date}%0AWaktu: ${formData.time}%0AJumlah Orang: ${formData.guests}%0ACatatan: ${formData.notes}`;
    window.open(`https://wa.me/6285640734972?text=${message}`, "_blank");
  };

  return (
    <section id="reservasi" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-poppins mb-4">Reservasi Tempat</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 font-inter">Booking tempat untuk pengalaman makan yang lebih nyaman</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row">
          <div className="lg:w-2/5 bg-orange-500 p-10 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full translate-y-1/3 -translate-x-1/4"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6 font-poppins">Mengapa Reservasi?</h3>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <i className="fas fa-check"></i>
                  </div>
                  <span>Tempat duduk terjamin</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <i className="fas fa-check"></i>
                  </div>
                  <span>Pelayanan lebih cepat</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <i className="fas fa-check"></i>
                  </div>
                  <span>Meja untuk grup besar</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-black/10 p-4 rounded-xl border border-white/10 relative z-10 backdrop-blur-sm">
              <p className="text-sm font-medium flex items-start gap-2">
                <i className="fas fa-info-circle mt-1"></i>
                Untuk acara khusus atau grup lebih dari 10 orang, harap reservasi minimal 1 hari sebelumnya.
              </p>
            </div>
          </div>

          <div className="lg:w-3/5 p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-poppins"><i className="fas fa-edit text-orange-500 mr-2"></i> Form Reservasi</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                  <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition outline-none" placeholder="Budi Santoso" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nomor Telepon</label>
                  <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition outline-none" placeholder="081234567890" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tanggal</label>
                  <input required type="date" name="date" value={formData.date} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Waktu</label>
                  <select required name="time" value={formData.time} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition outline-none bg-white">
                    <option value="">Pilih Waktu</option>
                    <option value="12:00">12:00 WIB</option>
                    <option value="13:00">13:00 WIB</option>
                    <option value="18:00">18:00 WIB</option>
                    <option value="19:00">19:00 WIB</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Jumlah Orang</label>
                  <select required name="guests" value={formData.guests} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition outline-none bg-white">
                    <option value="">Pilih Jumlah</option>
                    <option value="1-2">1-2 Orang</option>
                    <option value="3-4">3-4 Orang</option>
                    <option value="5-6">5-6 Orang</option>
                    <option value="10+">Lebih dari 10 Orang</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Catatan Khusus (Opsional)</label>
                <textarea name="notes" value={formData.notes} onChange={handleChange} rows={3} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition outline-none resize-none" placeholder="Contoh: Meja dekat jendela, ada anak kecil, dll."></textarea>
              </div>

              <button type="submit" className="w-full bg-gray-900 text-white font-bold py-4 rounded-xl hover:bg-orange-500 transition duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-orange-500/30">
                <i className="fab fa-whatsapp text-xl"></i> Kirim Reservasi via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

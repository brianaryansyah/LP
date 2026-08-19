export default function Location() {
  const services = [
    { icon: "🛵", title: "Pesan Antar", desc: "Nikmati mie ayam favorit Anda tanpa keluar rumah." },
    { icon: "🏪", title: "Makan di Tempat", desc: "Suasana nyaman untuk bersantap bersama keluarga." },
    { icon: "🎉", title: "Acara Spesial", desc: "Kami melayani pesanan untuk berbagai acara Anda." },
    { icon: "📅", title: "Reservasi Meja", desc: "Pesan meja Anda lebih awal untuk momen spesial." }
  ];

  return (
    <section id="location" className="relative py-24 bg-[#fdf8f5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#f5b041] text-[#2c231b] font-bold text-xs mb-4 uppercase tracking-wider">
            Layanan Kami
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2c231b] font-poppins mb-12">
            Layanan Pengiriman & Reservasi
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {services.map((svc, idx) => (
              <div key={idx} className="bg-[#f5b041]/10 p-6 rounded-3xl text-left border border-[#f5b041]/20 hover:bg-[#f5b041]/20 transition cursor-pointer">
                <div className="text-3xl mb-4">{svc.icon}</div>
                <h4 className="text-lg font-bold text-[#2c231b] font-poppins mb-2">{svc.title}</h4>
                <p className="text-[#2c231b]/60 font-inter text-sm">{svc.desc}</p>
              </div>
            ))}
          </div>

          <div className="relative w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden shadow-2xl">
            <img src="/img/mi ayam bakso.jpg" alt="Suasana Restoran" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <button className="w-20 h-20 bg-[#f5b041] rounded-full flex items-center justify-center text-[#2c231b] text-2xl hover:scale-110 transition shadow-xl">
                <i className="fas fa-play ml-1"></i>
              </button>
            </div>
          </div>
          
          <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 px-4">
            <div className="text-[#f5b041] font-bold underline cursor-pointer hover:text-[#2c231b] transition">
              Lokasi Cabang Kami
            </div>
            <div className="text-[#2c231b]/60 font-bold cursor-pointer hover:text-[#2c231b] transition">
              Hubungi via WhatsApp <i className="fas fa-arrow-right ml-2"></i>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wavy bottom shape divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 translate-y-[2px]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24 lg:h-32 text-[#2c231b] fill-current">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.45,130.34,124.63,195.4,108.27c44.87-11.28,87.65-29.67,126-51.83Z"></path>
        </svg>
      </div>
    </section>
  );
}

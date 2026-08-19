export default function Location() {
  const services = [
    { icon: <i className="fas fa-motorcycle text-[#f5b041]"></i>, title: "Pesan Antar", desc: "Nikmati mie ayam favorit Anda tanpa keluar rumah." },
    { icon: <i className="fas fa-store text-[#f5b041]"></i>, title: "Makan di Tempat", desc: "Suasana nyaman untuk bersantap bersama keluarga." },
    { icon: <i className="fas fa-glass-cheers text-[#f5b041]"></i>, title: "Acara Spesial", desc: "Kami melayani pesanan untuk berbagai acara Anda." },
    { icon: <i className="fas fa-calendar-alt text-[#f5b041]"></i>, title: "Reservasi Meja", desc: "Pesan meja Anda lebih awal untuk momen spesial." }
  ];

  return (
    <section id="location" className="relative min-h-screen flex flex-col justify-center py-16 lg:py-24 bg-[#fdf8f5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#f5b041]/20 text-[#2c231b] font-bold text-xs mb-4 uppercase tracking-wider border border-[#f5b041]/30">
            Layanan Kami
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2c231b] font-poppins mb-8 md:mb-12">
            Layanan Pengiriman & Reservasi
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 md:mb-16">
            {services.map((svc, idx) => (
              <div key={idx} className="bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl text-left border border-[#2c231b]/5 hover:border-[#f5b041]/20 transition-all duration-500 cursor-default flex flex-col items-start hover:-translate-y-1 shadow-sm hover:shadow-md group">
                <div className="text-2xl sm:text-3xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-500">{svc.icon}</div>
                <h4 className="text-base sm:text-lg font-bold text-[#2c231b] font-poppins mb-1 sm:mb-2">{svc.title}</h4>
                <p className="text-[#2c231b]/70 font-inter text-xs sm:text-sm">{svc.desc}</p>
              </div>
            ))}
          </div>

          <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-xl group border-[4px] sm:border-[8px] border-white">
            <img src="/img/mi ayam bakso.jpg" alt="Suasana Restoran" className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500 flex items-center justify-center">
              <button className="w-16 h-16 sm:w-20 sm:h-20 bg-[#fdf8f5]/90 backdrop-blur-sm rounded-full flex items-center justify-center text-[#f5b041] text-xl sm:text-2xl hover:scale-110 transition-transform duration-300 shadow-lg">
                <i className="fas fa-play ml-1 sm:ml-2"></i>
              </button>
            </div>
          </div>
          
          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 px-4">
            <div className="text-[#f5b041] font-bold underline cursor-pointer hover:text-[#e09132] transition text-sm sm:text-base hover:scale-105 transform">
              Lokasi Cabang Kami
            </div>
            <div className="bg-[#2c231b] text-white px-6 py-3 rounded-full font-bold cursor-pointer hover:bg-black transition text-sm sm:text-base flex items-center shadow-lg hover:-translate-y-1 transform duration-300">
              Hubungi via WhatsApp <i className="fas fa-arrow-right ml-3 text-xs"></i>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wavy bottom shape divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 translate-y-[2px]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 sm:h-16 md:h-24 lg:h-32 text-[#2c231b] fill-current">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.45,130.34,124.63,195.4,108.27c44.87-11.28,87.65-29.67,126-51.83Z"></path>
        </svg>
      </div>
    </section>
  );
}

import Reveal from "@/components/Reveal";
import WaveDivider from "@/components/WaveDivider";

export default function Location() {
  const services = [
    { icon: <i className="fas fa-motorcycle text-[#f5b041]" aria-hidden="true"></i>, title: "Pesan Antar", desc: "Nikmati mie ayam favorit Anda tanpa keluar rumah." },
    { icon: <i className="fas fa-store text-[#f5b041]" aria-hidden="true"></i>, title: "Makan di Tempat", desc: "Suasana nyaman untuk bersantap bersama keluarga." },
    { icon: <i className="fas fa-glass-cheers text-[#f5b041]" aria-hidden="true"></i>, title: "Acara Spesial", desc: "Kami melayani pesanan untuk berbagai acara Anda." },
    { icon: <i className="fas fa-calendar-alt text-[#f5b041]" aria-hidden="true"></i>, title: "Reservasi Meja", desc: "Pesan meja Anda lebih awal untuk momen spesial." }
  ];

  const info = [
    { icon: "fas fa-map-marker-alt", title: "Alamat", value: "Jl. Karimata No.40, Mulyoharjo, Pemalang" },
    { icon: "fas fa-clock", title: "Jam Buka", value: "Setiap Hari, 10.00 - 22.00 WIB" },
    { icon: "fas fa-phone-alt", title: "Kontak", value: "0856-4073-4972" },
  ];

  return (
    <section id="location" className="relative min-h-screen flex flex-col justify-center py-16 lg:py-24 bg-[#fdf8f5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center mb-10 md:mb-16">
          <Reveal>
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#f5b041]/20 text-[#2c231b] font-bold text-xs mb-4 uppercase tracking-wider border border-[#f5b041]/30">
            Layanan Kami
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2c231b] font-poppins mb-8 md:mb-12">
            Layanan Pengiriman & Reservasi
          </h2>
          </Reveal>
          
          <Reveal delay={100}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 md:mb-16">
            {services.map((svc, idx) => (
              <div key={idx} className="bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl text-left border border-[#2c231b]/5 hover:border-[#f5b041]/20 transition-all duration-500 cursor-default flex flex-col items-start hover:-translate-y-1 shadow-sm hover:shadow-md group">
                <div className="text-2xl sm:text-3xl mb-3 sm:mb-4 group-hover:scale-105 transition-transform duration-500">{svc.icon}</div>
                <h4 className="text-base sm:text-lg font-bold text-[#2c231b] font-poppins mb-1 sm:mb-2">{svc.title}</h4>
                <p className="text-[#2c231b]/70 font-inter text-xs sm:text-sm">{svc.desc}</p>
              </div>
            ))}
          </div>
          </Reveal>

          <Reveal delay={200}>
          <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-xl group border-[4px] sm:border-[8px] border-white">
            <iframe 
              title="Peta lokasi Semangkok"
              src="https://maps.google.com/maps?q=Jl.%20Karimata%20No.40,%20Mulyoharjo,%20Kec.%20Pemalang,%20Kabupaten%20Pemalang,%20Jawa%20Tengah%2052313&t=&z=16&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[20%] contrast-[110%] group-hover:grayscale-0 transition-all duration-700"
            ></iframe>
            
            {/* Map Overlay Button */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/5">
              <a href="https://maps.app.goo.gl/NvCxPom7GSdYFj7Z9" target="_blank" rel="noopener noreferrer" aria-label="Buka lokasi di Google Maps" className="pointer-events-auto w-16 h-16 sm:w-20 sm:h-20 bg-[#fdf8f5]/90 backdrop-blur-sm rounded-full flex items-center justify-center text-[#f5b041] text-xl sm:text-2xl hover:scale-105 transition-transform duration-300 shadow-lg">
                <i className="fas fa-external-link-alt ml-1"></i>
              </a>
            </div>
          </div>
          </Reveal>

          <Reveal delay={250}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
            {info.map((item) => (
              <div key={item.title} className="bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-[#2c231b]/5 text-left flex items-start gap-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-500">
                <div className="w-12 h-12 rounded-full bg-[#f5b041]/20 text-[#f5b041] flex items-center justify-center shrink-0" aria-hidden="true">
                  <i className={`${item.icon} text-xl`} aria-hidden="true"></i>
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#2c231b] font-poppins">{item.title}</h4>
                  <p className="text-sm text-[#2c231b]/70 font-inter mt-1">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
          </Reveal>
          
          <Reveal delay={300}>
          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 px-4">
            <a href="https://maps.app.goo.gl/NvCxPom7GSdYFj7Z9" target="_blank" rel="noopener noreferrer" className="text-[#f5b041] font-bold underline hover:text-[#e09132] transition text-sm sm:text-base hover:scale-105 transform">
              Lokasi Cabang Kami
            </a>
            <a href="https://wa.me/6285640734972?text=Halo%20Semangkok%2C%20saya%20ingin%20memesan" target="_blank" rel="noopener noreferrer" className="bg-[#2c231b] text-white px-6 py-3 rounded-full font-bold hover:bg-[#f5b041] hover:text-[#2c231b] transition-all duration-300 text-sm sm:text-base flex items-center shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Hubungi via WhatsApp <i className="fas fa-arrow-right ml-3 text-xs"></i>
            </a>
          </div>
          </Reveal>
        </div>
      </div>
      
      <WaveDivider fill="#2c231b" position="bottom" />
    </section>
  );
}

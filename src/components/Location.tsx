export default function Location() {
  return (
    <section id="location" className="py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Side: Text and Socials */}
          <div className="flex-1 text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-950 font-poppins leading-tight mb-8">
              Kunjungi <br/>
              Lokasi Kami
            </h2>
            <p className="text-lg text-amber-900/80 font-inter mb-4 leading-relaxed max-w-md">
              Jl. Raya Makan Enak No. 123, Jakarta Pusat 10110. Datang dan rasakan langsung kenikmatan mie ayam autentik kami.
            </p>
            <p className="text-lg text-amber-900/80 font-inter mb-10 leading-relaxed max-w-md">
              Buka Senin - Sabtu (12:00 - 20:00 WIB).<br/>
              Pesan antar tersedia via WhatsApp.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4 items-center">
              <a href="#" className="w-10 h-10 rounded-full border border-amber-950/20 flex items-center justify-center text-amber-950 hover:bg-amber-950 hover:text-white transition">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-amber-950/20 flex items-center justify-center text-amber-950 hover:bg-amber-950 hover:text-white transition">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-amber-950/20 flex items-center justify-center text-amber-950 hover:bg-amber-950 hover:text-white transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-amber-950/20 flex items-center justify-center text-amber-950 hover:bg-amber-950 hover:text-white transition">
                <i className="fab fa-tiktok"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-amber-950/20 flex items-center justify-center text-amber-950 hover:bg-amber-950 hover:text-white transition">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Right Side: Yellow Card */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none">
            <div className="bg-[#f5b041] rounded-[3rem] p-8 md:p-12 relative shadow-2xl">
              <h3 className="text-white font-poppins font-bold text-2xl md:text-3xl mb-8 flex items-center gap-2">
                <span className="text-orange-200">🍜</span> Menu Spesial
              </h3>
              
              <div className="relative w-full aspect-square max-w-[400px] mx-auto">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl scale-90"></div>
                <img 
                  src="https://images.unsplash.com/photo-1612927601601-6638404737ce?w=800&h=800&fit=crop&auto=format" 
                  alt="Special Menu" 
                  className="relative z-10 w-full h-full object-cover rounded-full shadow-2xl border-[10px] border-white/90"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-10 right-10 text-white/50 animate-bounce">✨</div>
              <div className="absolute bottom-20 left-10 text-white/50 animate-pulse">🌟</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

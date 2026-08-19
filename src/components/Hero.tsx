export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Text */}
          <div className="flex-1 text-left animate__animated animate__fadeInLeft">
            <h2 className="text-5xl md:text-7xl font-bold text-amber-950 font-poppins leading-[1.1] mb-6">
              Mie Ayam <br/>
              Original
            </h2>
            <p className="text-lg text-amber-900/80 mb-8 font-inter max-w-lg leading-relaxed">
              Rasakan kenikmatan autentik dengan resep warisan keluarga sejak 1990. Dibuat dengan bahan pilihan terbaik untuk setiap suapan.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-600 transition flex items-center justify-center gap-2 shadow-xl shadow-orange-500/30">
                Pesan
              </button>
              <a
                href="#menu"
                className="bg-white text-amber-950 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition flex items-center justify-center gap-2 shadow-sm"
              >
                Lihat Menu
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 relative animate__animated animate__fadeInRight w-full flex justify-center">
            {/* Soft backdrop blur for depth */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-white rounded-full blur-3xl opacity-50 z-0"></div>
            
            <img
              src="https://images.unsplash.com/photo-1612927601601-6638404737ce?w=800&h=800&fit=crop&auto=format"
              alt="Mie Ayam Premium"
              className="relative z-10 w-full max-w-[500px] h-auto object-cover aspect-square rounded-full shadow-2xl border-[12px] border-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

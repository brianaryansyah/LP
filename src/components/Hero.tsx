export default function Hero() {
  return (
    <section id="home" className="relative pt-20 pb-32 flex items-center min-h-screen">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1612927601601-6638404737ce?w=1600&h=900&fit=crop&auto=format"
          alt="Mie Ayam Premium"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl text-left animate__animated animate__fadeInUp">
          <div className="inline-block px-4 py-1.5 rounded-full bg-orange-500/20 text-orange-400 font-semibold text-sm mb-6 border border-orange-500/30 backdrop-blur-sm">
            🔥 Best Seller in Town
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white font-poppins leading-tight mb-6">
            Mie Ayam <span className="text-orange-500">Original</span>
          </h2>
          <p className="text-xl text-gray-200 mb-10 font-inter max-w-xl leading-relaxed">
            Rasakan kenikmatan autentik dengan resep warisan keluarga sejak 1990. Dibuat dengan bahan pilihan terbaik untuk setiap suapan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition flex items-center justify-center gap-2 shadow-xl hover:shadow-orange-500/40">
              <i className="fas fa-utensils"></i> Pesan Sekarang
            </button>
            <a
              href="#menu"
              className="bg-white/10 text-white backdrop-blur-sm border border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition flex items-center justify-center gap-2"
            >
              Lihat Menu
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#unggulan" className="text-white/70 hover:text-white">
          <i className="fas fa-chevron-down text-2xl"></i>
        </a>
      </div>
    </section>
  );
}

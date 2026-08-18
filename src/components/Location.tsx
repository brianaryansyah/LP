export default function Location() {
  return (
    <section id="location" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-poppins mb-4">Lokasi Kami</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 font-inter">Datang langsung atau pesan antar</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Info Card */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
            <div className="w-16 h-16 bg-orange-100 text-orange-500 rounded-2xl flex items-center justify-center text-3xl mb-6">
              <i className="fas fa-store"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-poppins">Mie Ayam Semangkok</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <i className="fas fa-map-marker-alt text-orange-500 text-xl mt-1"></i>
                <div>
                  <h4 className="font-semibold text-gray-900">Alamat</h4>
                  <p className="text-gray-600">Jl. Raya Makan Enak No. 123, Jakarta Pusat 10110</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <i className="fas fa-clock text-orange-500 text-xl mt-1"></i>
                <div>
                  <h4 className="font-semibold text-gray-900">Jam Buka</h4>
                  <p className="text-gray-600">Senin - Sabtu: 12:00 - 20:00 WIB<br/><span className="text-sm text-gray-400">Minggu: Libur</span></p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <i className="fas fa-phone text-orange-500 text-xl mt-1"></i>
                <div>
                  <h4 className="font-semibold text-gray-900">Telepon / WhatsApp</h4>
                  <p className="text-gray-600">0856-4073-4972</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100 flex flex-wrap gap-4">
              <div className="bg-gray-50 px-4 py-2 rounded-lg flex items-center gap-2 text-sm text-gray-700 font-medium border border-gray-200">
                <i className="fas fa-car text-orange-500"></i> Parkir Luas
              </div>
              <div className="bg-gray-50 px-4 py-2 rounded-lg flex items-center gap-2 text-sm text-gray-700 font-medium border border-gray-200">
                <i className="fas fa-wifi text-orange-500"></i> WiFi Gratis
              </div>
            </div>
          </div>

          {/* Map & Delivery */}
          <div className="space-y-8">
            <div className="bg-white p-2 rounded-3xl shadow-lg border border-gray-100 overflow-hidden h-[300px] relative group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613506864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sJl.%20Menteng%20Raya%2C%20Jakarta%20Pusat!5e0!3m2!1sen!2sid!4v1621234567890!5m2!1sen!2sid"
                className="w-full h-full rounded-2xl"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center rounded-2xl">
                <a href="https://goo.gl/maps/v8dnwhChcs6mZC3Za" target="_blank" rel="noreferrer" className="bg-white text-gray-900 px-6 py-3 rounded-full font-bold shadow-xl hover:scale-105 transition transform">
                  Buka di Google Maps
                </a>
              </div>
            </div>

            <div className="bg-orange-500 rounded-3xl p-8 text-white shadow-lg relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 opacity-10">
                <i className="fas fa-motorcycle text-9xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">Layanan Pengiriman</h3>
              <p className="mb-6 relative z-10 text-orange-100">Pesan melalui aplikasi kesayangan Anda atau gunakan layanan kurir internal kami.</p>
              <div className="flex gap-4 relative z-10">
                <button className="bg-white text-orange-500 px-6 py-2 rounded-full font-bold text-sm hover:bg-orange-50 transition shadow-md">
                  GoFood
                </button>
                <button className="bg-white text-orange-500 px-6 py-2 rounded-full font-bold text-sm hover:bg-orange-50 transition shadow-md">
                  GrabFood
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

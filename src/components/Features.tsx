export default function Features() {
  const features = [
    {
      icon: "fa-award",
      title: "Premium Quality",
      desc: "Enak & Kualitas Terjamin",
      sub: "Bahan pilihan sejak 1990an",
      color: "text-yellow-500",
      bg: "bg-yellow-50",
    },
    {
      icon: "fa-truck",
      title: "Gratis Ongkir",
      desc: "Min. pembelian Rp 50.000",
      sub: "Area 5km dari lokasi kami",
      color: "text-green-500",
      bg: "bg-green-50",
    },
    {
      icon: "fa-bolt",
      title: "Pesan Cepat",
      desc: "Siap dalam 15 menit",
      sub: "Order via WA langsung diproses",
      color: "text-blue-500",
      bg: "bg-blue-50",
    },
  ];

  return (
    <section id="unggulan" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-poppins mb-4">
            Keunggulan Kami
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 font-inter">
            Mengapa pelanggan memilih kami
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition duration-300 transform hover:-translate-y-1 text-center group border border-gray-100"
            >
              <div
                className={`w-20 h-20 mx-auto rounded-full ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300`}
              >
                <i className={`fas ${feature.icon} text-3xl ${feature.color}`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 font-poppins mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-700 font-medium mb-1">{feature.desc}</p>
              <p className="text-sm text-gray-500">{feature.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

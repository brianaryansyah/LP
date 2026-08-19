export default function Features() {
  const features = [
    {
      img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=100&h=100&fit=crop",
      title: "Premium Quality",
      desc: "Bahan pilihan terbaik",
    },
    {
      img: "https://images.unsplash.com/photo-1556910103-1c02745a872e?w=100&h=100&fit=crop",
      title: "Fresh Ingredients",
      desc: "Sayuran segar tiap hari",
    },
    {
      img: "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?w=100&h=100&fit=crop",
      title: "Fast Delivery",
      desc: "Pesanan cepat sampai",
    },
    {
      img: "https://images.unsplash.com/photo-1580828369066-df300a3dbfcd?w=100&h=100&fit=crop",
      title: "Easy Payment",
      desc: "Berbagai metode bayar",
    },
  ];

  return (
    <section className="py-10 border-t border-b border-orange-500/10 bg-gradient-to-r from-transparent via-orange-50/30 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-4 group cursor-pointer">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md group-hover:scale-110 transition duration-300">
                <img src={feature.img} alt={feature.title} className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-amber-950 font-bold font-poppins text-sm md:text-base leading-tight">
                  {feature.title}
                </h4>
                <p className="text-amber-900/60 text-xs md:text-sm font-inter mt-1">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";
import {
  Smartphone,
  Laptop,
  Headphones,
  Watch,
  Tablet,
  Camera,
  Gamepad2,
  Tv,
} from "lucide-react";

const Categories = () => {
  const categories = [
    {
      id: "smartphones",
      name: "Akıllı Telefonlar",
      icon: Smartphone,
      count: "150+ Ürün",
      description: "iPhone, Samsung, Xiaomi ve daha fazlası",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      id: "laptops",
      name: "Laptop & Bilgisayar",
      icon: Laptop,
      count: "80+ Ürün",
      description: "MacBook, Windows laptop ve masaüstü PC",
      gradient: "from-green-500 to-teal-600",
    },
    {
      id: "headphones",
      name: "Ses & Müzik",
      icon: Headphones,
      count: "120+ Ürün",
      description: "Kulaklık, hoparlör ve ses sistemleri",
      gradient: "from-orange-500 to-red-600",
    },
    {
      id: "watches",
      name: "Giyilebilir Teknoloji",
      icon: Watch,
      count: "45+ Ürün",
      description: "Apple Watch, fitness tracker ve akıllı saatler",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      id: "tablets",
      name: "Tablet & iPad",
      icon: Tablet,
      count: "60+ Ürün",
      description: "iPad, Android tablet ve e-kitap okuyucular",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      id: "cameras",
      name: "Fotoğraf & Video",
      icon: Camera,
      count: "35+ Ürün",
      description: "Dijital kamera, drone ve aksiyon kameraları",
      gradient: "from-yellow-500 to-orange-600",
    },
    {
      id: "gaming",
      name: "Oyun & Eğlence",
      icon: Gamepad2,
      count: "75+ Ürün",
      description: "PlayStation, Xbox, Nintendo ve PC gaming",
      gradient: "from-indigo-500 to-purple-600",
    },
    {
      id: "tv",
      name: "TV & Ev Eğlence",
      icon: Tv,
      count: "40+ Ürün",
      description: "Akıllı TV, projeksiyon ve ses sistemleri",
      gradient: "from-red-500 to-pink-600",
    },
  ];

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Kategoriler</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Aradığınız teknoloji ürününü kolayca bulun. Her kategori için özenle
            seçilmiş kaliteli ürünler.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/kategori/${category.id}`}
              className="glass-card p-6 group hover:scale-105 transition-all duration-300"
            >
              <div className="text-center">
                {/* Icon */}
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center`}
                >
                  <category.icon className="text-white" size={32} />
                </div>

                {/* Category Info */}
                <h3 className="text-white font-semibold text-lg mb-2">
                  {category.name}
                </h3>
                <p className="text-tech-cyan text-sm mb-2">{category.count}</p>
                <p className="text-gray-300 text-sm">{category.description}</p>

                {/* Hover Effect */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-tech-blue text-sm font-semibold">
                    Kategoriye Git →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Popular Categories */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Popüler Kategoriler
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Featured Category 1 */}
            <div className="glass-card p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-tech-blue/20 to-tech-purple/20"></div>
              <div className="relative z-10">
                <Smartphone className="text-tech-blue mb-4" size={48} />
                <h3 className="text-white font-bold text-xl mb-2">
                  Akıllı Telefonlar
                </h3>
                <p className="text-gray-300 mb-4">
                  En son iPhone ve Android modellerini keşfedin. Özel
                  kampanyalar ve taksit imkanları.
                </p>
                <Link
                  to="/kategori/smartphones"
                  className="tech-button inline-block"
                >
                  İncele
                </Link>
              </div>
            </div>

            {/* Featured Category 2 */}
            <div className="glass-card p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-tech-cyan/20 to-tech-blue/20"></div>
              <div className="relative z-10">
                <Laptop className="text-tech-cyan mb-4" size={48} />
                <h3 className="text-white font-bold text-xl mb-2">
                  Laptop & PC
                </h3>
                <p className="text-gray-300 mb-4">
                  İş, oyun ve eğitim için en uygun laptop ve bilgisayarları
                  bulun. Uzman önerileri ile.
                </p>
                <Link
                  to="/kategori/laptops"
                  className="tech-button inline-block"
                >
                  İncele
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16 text-center">
          <div className="glass-card p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Aradığınızı Bulamadınız mı?
            </h2>
            <p className="text-gray-300 mb-6">
              Müşteri hizmetlerimiz size yardımcı olmaktan mutluluk duyar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/iletisim" className="tech-button px-6 py-3">
                İletişime Geçin
              </Link>
              <Link
                to="/urunler"
                className="glass-card px-6 py-3 text-white hover:bg-white/10 transition-all"
              >
                Tüm Ürünleri Görüntüle
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Categories;

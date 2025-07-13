import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="glass border-t border-white/10 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 tech-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="text-xl font-bold text-white">TechMağaza</span>
            </div>
            <p className="text-gray-300 text-sm">
              Türkiye'nin en yeni teknoloji ürünlerini sunan güvenilir e-ticaret
              platformu. En kaliteli elektronik ürünleri uygun fiyatlarla!
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-tech-blue transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-tech-blue transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-tech-blue transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-tech-blue transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-tech-cyan transition-colors text-sm"
                >
                  Anasayfa
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-tech-cyan transition-colors text-sm"
                >
                  Ürünler
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-tech-cyan transition-colors text-sm"
                >
                  Kategoriler
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-tech-cyan transition-colors text-sm"
                >
                  Kampanyalar
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-tech-cyan transition-colors text-sm"
                >
                  Yeni Ürünler
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">
              Müşteri Hizmetleri
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-tech-cyan transition-colors text-sm"
                >
                  Yardım Merkezi
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-tech-cyan transition-colors text-sm"
                >
                  İade ve Değişim
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-tech-cyan transition-colors text-sm"
                >
                  Kargo Takibi
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-tech-cyan transition-colors text-sm"
                >
                  Güvenli Alışveriş
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-tech-cyan transition-colors text-sm"
                >
                  SSS
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">İletişim</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-tech-blue" />
                <span className="text-gray-300 text-sm">
                  +90 (212) 123 45 67
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-tech-blue" />
                <span className="text-gray-300 text-sm">
                  info@techmagaza.com
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="text-tech-blue mt-0.5" />
                <span className="text-gray-300 text-sm">
                  Maslak Mahallesi, Teknoloji Cd. No:123
                  <br />
                  Şişli/İstanbul
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 TechMağaza. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-300 hover:text-tech-cyan transition-colors text-sm"
              >
                Gizlilik Politikası
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-tech-cyan transition-colors text-sm"
              >
                Kullanım Koşulları
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-tech-cyan transition-colors text-sm"
              >
                Çerez Politikası
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

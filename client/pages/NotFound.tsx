import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="text-center max-w-lg">
        <div className="glass-card p-8">
          {/* 404 Icon/Number */}
          <div className="mb-6">
            <h1 className="text-8xl font-bold text-transparent bg-gradient-to-br from-tech-blue to-tech-purple bg-clip-text">
              404
            </h1>
          </div>

          {/* Error Message */}
          <h2 className="text-3xl font-bold text-white mb-4">
            Sayfa Bulunamadı
          </h2>
          <p className="text-gray-300 mb-8">
            Aradığınız sayfa mevcut değil veya taşınmış olabilir. Ana sayfaya
            dönerek tekrar deneyebilirsiniz.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="tech-button flex items-center justify-center space-x-2 px-6 py-3"
            >
              <Home size={20} />
              <span>Ana Sayfaya Dön</span>
            </Link>
            <button
              onClick={() => window.history.back()}
              className="glass-card px-6 py-3 text-white hover:bg-white/10 transition-all flex items-center justify-center space-x-2"
            >
              <ArrowLeft size={20} />
              <span>Geri Dön</span>
            </button>
          </div>

          {/* Additional Help */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-gray-300 text-sm mb-4">
              Yardıma mı ihtiyacınız var?
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center text-sm">
              <Link
                to="/iletisim"
                className="text-tech-blue hover:text-tech-cyan transition-colors"
              >
                İletişime Geçin
              </Link>
              <span className="hidden sm:inline text-gray-500">•</span>
              <Link
                to="/urunler"
                className="text-tech-blue hover:text-tech-cyan transition-colors"
              >
                Ürünleri İnceleyin
              </Link>
              <span className="hidden sm:inline text-gray-500">•</span>
              <Link
                to="/kategoriler"
                className="text-tech-blue hover:text-tech-cyan transition-colors"
              >
                Kategorilere Göz Atın
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

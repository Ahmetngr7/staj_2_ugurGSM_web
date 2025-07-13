import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Contact form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">İletişim</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Size nasıl yardımcı olabiliriz? Sorularınız için bizimle iletişime
            geçin.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-card p-6">
              <h2 className="text-2xl font-bold text-white mb-6">
                İletişim Bilgileri
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 tech-gradient rounded-lg flex items-center justify-center">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Telefon</h3>
                    <p className="text-gray-300">+90 (212) 123 45 67</p>
                    <p className="text-gray-300">+90 (212) 123 45 68</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 tech-gradient rounded-lg flex items-center justify-center">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">E-posta</h3>
                    <p className="text-gray-300">info@techmagaza.com</p>
                    <p className="text-gray-300">destek@techmagaza.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 tech-gradient rounded-lg flex items-center justify-center">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Adres</h3>
                    <p className="text-gray-300">
                      Maslak Mahallesi, Teknoloji Cd. No:123
                      <br />
                      Şişli/İstanbul, 34485
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 tech-gradient rounded-lg flex items-center justify-center">
                    <Clock className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      Çalışma Saatleri
                    </h3>
                    <p className="text-gray-300">
                      Pazartesi - Cuma: 09:00 - 18:00
                      <br />
                      Cumartesi: 10:00 - 16:00
                      <br />
                      Pazar: Kapalı
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Help */}
            <div className="glass-card p-6">
              <h2 className="text-xl font-bold text-white mb-4">
                Hızlı Yardım
              </h2>
              <div className="space-y-3">
                <a
                  href="#"
                  className="block p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all text-white"
                >
                  🚚 Kargo Takibi
                </a>
                <a
                  href="#"
                  className="block p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all text-white"
                >
                  🔄 İade & Değişim
                </a>
                <a
                  href="#"
                  className="block p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all text-white"
                >
                  💳 Ödeme Seçenekleri
                </a>
                <a
                  href="#"
                  className="block p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all text-white"
                >
                  ❓ Sık Sorulan Sorular
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-6">
            <h2 className="text-2xl font-bold text-white mb-6">
              Bize Mesaj Gönderin
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Adınız Soyadınız
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-tech-blue focus:bg-white/10 transition-all"
                  placeholder="Adınızı ve soyadınızı girin"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white mb-2"
                >
                  E-posta Adresi
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-tech-blue focus:bg-white/10 transition-all"
                  placeholder="ornek@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Konu
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-tech-blue focus:bg-white/10 transition-all"
                  placeholder="Mesajınızın konusu"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-tech-blue focus:bg-white/10 transition-all resize-none"
                  placeholder="Mesajınızı buraya yazın..."
                />
              </div>

              <button
                type="submit"
                className="w-full tech-button py-3 text-lg font-semibold flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Mesaj Gönder</span>
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 glass-card p-6">
          <h2 className="text-2xl font-bold text-white mb-6">Konumumuz</h2>
          <div className="w-full h-64 bg-gray-700 rounded-lg flex items-center justify-center">
            <p className="text-gray-300">Harita burada görüntülenecek</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

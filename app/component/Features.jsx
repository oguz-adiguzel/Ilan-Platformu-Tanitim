'use client'
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Features = () => {
  const categories = [
    { id: "all", name: "Tüm Özellikler" },
    { id: "auth", name: "Güvenlik & Oturum" },
    { id: "core", name: "İlan & Filtreleme" },
    { id: "realtime", name: "Real-time & Otomasyon" },
    { id: "admin", name: "Admin Kontrol" },
  ];

  const [activeTab, setActiveTab] = useState("all");

  const allFeatures = [
    {
      title: "JWT Tabanlı Login Sistemi",
      category: "auth",
      desc: "Kullanıcı oturumları ve API güvenliği için endüstri standardı JWT mimarisi. Güvenli token yönetimiyle hızlı, sorunsuz ve yüksek korumalı kimlik doğrulama altyapısı."
    },
    {
      title: "Kullanıcı Tipi Ayrımı",
      category: "auth",
      desc: "Bireysel satıcılar ve galeriler için özelleştirilmiş iki farklı üyelik modeli. Gelişmiş rol (role-based) yönetimiyle, kullanıcı tipine göre değişen ilan limitleri ve dinamik yetkilendirme altyapısı."
    },
    {
      title: "Advanced Token Management (Access & Refresh)",
      category: "auth",
      desc: "Kullanıcıları sürekli log-in olma zahmetinden kurtaran kesintisiz oturum yönetimi. HTTP-only cookie'ler ile korunan ve güvenliği en üst düzeye çıkaran token yenileme mekanizması."
    },
    {
      title: "Favori İlan Listesi",
      category: "core",
      desc: "İlanları tek tıkla kaydedip takibe almayı sağlayan dinamik favori listesi modülü. Optimize edilmiş veri tabanı ilişkileriyle hızlı ve kesintisiz kullanıcı deneyimi."
    },
    {
      title: "Kurumsal Mağaza",
      category: "core",
      badge: "Kurumsal",
      desc: "Galerilere özel, logolarıyla özelleştirilebilen kurumsal mağaza ve vitrin altyapısı. Tüm ilanların tek bir adreste toplandığı profesyonel showroom deneyimi."
    },
    {
      title: "Dinamik İlan Ekleme ve Ekspertiz Modülü",
      category: "core",
      desc: "Boyalı/değişen parçaların interaktif olarak işaretlendiği gelişmiş ilan ekleme sihirbazı. Sektör standartlarında tramer ve kaporta geçmişi kayıt altyapısı."
    },
    {
      title: "Hızlı ve Dinamik Araç Filtreleme Altyapısı",
      category: "core",
      desc: "Marka, model, yıl, fiyat ve konum gibi onlarca araç varyasyonunu milisaniyeler içinde süzen arama motoru. Veri tabanı tarafında optimize edilmiş indeksleme mimarisiyle."
    },
    {
      title: "İlan No ve Galeri Odaklı Hızlı Arama",
      category: "core",
      desc: "İlan numarası veya galeri adıyla doğrudan eşleşme sağlayan akıllı arama girdisi. Esnek backend sorgularıyla kullanıcıyı saniyeler içinde doğru hedefe ulaştıran pratik modül."
    },
    {
      title: "Akıllı Piyasa Fiyat Endeksi Modülü",
      category: "core",
      desc: "Platformdaki ilan verilerini harmanlayarak aracın piyasa değerini hesaplayan akıllı değerleme motoru. Marka, model, yıl ve kilometre bazlı nokta atışı fiyat analizi."
    },
    {
      title: "Dinamik Vitrin ve İlan Doping Mekanizması",
      category: "core",
      desc: "İlanları ana sayfaya ve özel listelere taşıyan dinamik vitrin/doping sistemi. Öne çıkan araçlar için maksimum görünürlük sağlayan, sektörel standartlarda reklam altyapısı."
    },
    {
      title: "İlan Odaklı Canlı Sohbet Sistemi",
      category: "realtime",
      desc: "Socket.io altyapısıyla güçlendirilmiş, gecikmesiz real-time mesajlaşma sistemi. İlan detayından anlık sohbet başlatma ve geçmiş konuşmaları saklayan optimize veri tabanı entegrasyonu."
    },
    {
      title: "Akıllı Bildirim ve Dinamik Olay Takip Sistemi",
      category: "realtime",
      desc: "Fiyat düşüşü ve ilan süresi vb. uyarılarını anında ileten Socket.io tabanlı bildirim altyapısı. Sistem olaylarını asenkron işleyen ve geçmiş bildirimleri saklayan veri tabanı entegrasyonu."
    },
    {
      title: "Sifir Araç Kataloğu ve Liste Fiyatı Yönetimi",
      category: "core",
      desc: "Admin paneli üzerinden güncel sıfır araç liste fiyatlarının yönetildiği sıfır araç listeleme sayfası. Güvenli yetkilendirme (RBAC) altyapısı ve optimize edilmiş dinamik veri giriş ekranı."
    },
    {
      title: "Admin Denetimli İlan Raporlama",
      category: "admin",
      badge: "Moderatör",
      desc: "Şüpheli ilanların admin panelinden denetlendiği dinamik moderasyon sistemi. İlan sahibinden revizyon talep etme veya ilanı kalıcı olarak silme yeteneklerine sahip yönetim akışı."
    },
    {
      title: "Galeri Stok & Akıllı Finansal Yönetim Paneli",
      category: "realtime",
      badge: "Kurumsal",
      desc: "Galeriler için kar-zarar grafikleri ve masraf takibi sunan entegre mini ERP sistemi. Araç satıldığında bağlı ilanın otomatik silinmesini sağlayan akıllı stok otomasyonu."
    },
    {
      title: "Kurumsal Vitrin & Marka Öne Çıkarma Sistemi",
      category: "core",
      badge: "Kurumsal",
      desc: "Kurumsal üyelerin isim ve logolarını anasayfada öne çıkaran premium galeri vitrini. Tek tıkla ilgili galeri showroom sayfasına pürüzsüz ve hızlı yönlendirme sağlayan reklam altyapısı."
    },
    {
      title: "Otomatik İlan Süre Takibi & Güncelleme Motoru",
      category: "realtime",
      desc: "Her gün belirli saatte çalışarak süresi dolmuş ilanları otomatik olarak yayından kaldıran Cron Job mimarisi. Veri tabanı yükünü minimize eden, optimize edilmiş planlı arka plan görevleri."
    },
    {
      title: "Otomatik Vitrin Süre Takibi ve Doping Yönetimi",
      category: "realtime",
      desc: "Süresi dolan dopingli ilanları otomatik olarak normal statüye çeken planlı Cron Job altyapısı. Anasayfa vitrin yükünü optimize eden ve güncelliği koruyan arka plan otomasyonu."
    },
    {
      title: "Kullanıcı Dashboard'u & Profil Modülü",
      category: "core",
      desc: "Tüm ilan, mesaj, favori ve hesap ayarlarının tek ekrandan yönetildiği merkezi kontrol paneli. Pürüzsüz veri senkronizasyonu sunan modern ve kullanıcı odaklı dashboard mimarisi."
    },
    {
      title: "İlişkisel Marka-Model Veri Ağacı",
      category: "core",
      desc: "Marka, model ve paket ilişkilerini hiyerarşik parent-child yapısıyla çözen dinamik araç katalog motoru. İlan ekleme ve filtreleme süreçlerini besleyen, admin kontrollü merkezi veri altyapısı."
    },
    {
      title: "Optimize Veri Önbellekleme Altyapısı",
      category: "realtime",
      desc: "Ana sayfa sorgularını bellek içinde tutan yüksek performanslı Redis önbellekleme mimarisi. Veri tabanı yükünü minimize eden optimizasyon."
    },
    {
      title: "Bireysel & Kurumsal İlan Limit Yönetim Sistemi",
      category: "core",
      desc: "Kullanıcı rollerine göre ilan yayınlama limitlerini yöneten kota doğrulama sistemi. Bireysel üyelere 1, galerilere ise 20 aktif ilan hakkı sunan kararlı iş mantığı altyapısı."
    },
    {
      title: "B2B Ekip Tanımlama ve Temsilci Atama Katmanı",
      category: "core",
      badge: "Kurumsal",
      desc: "Galeri çalışanlarını sisteme kaydeden ve ilanlarla eşleştiren kurumsal ekip yönetim modülü. Aracı satan danışmanın isim ve iletişim bilgilerini dinamik olarak listeleyen B2B altyapısı."
    },
    {
      title: "Ayrıştırılmış Admin Kontrol Merkezi",
      category: "admin",
      badge: "Admin",
      desc: "Ana kullanıcı trafiğinden izole, tamamen bağımsız bir Next.js projesi olarak kurgulanmış admin paneli. Ayrıştırılmış (decoupled) frontend altyapısı."
    },
    {
      title: "Admin Denetimli Kurumsal Hesap Aktivasyon",
      category: "admin",
      badge: "Admin",
      desc: "Kurumsal galeri başvurularının vergi ve adres bilgiyle birlikte admin onayına düştüğü modül. Admin tarafından tek tıkla hesap aktifleştiren yönetim akışı."
    },
    {
      title: "Kritik Sistem Logları ve Hata İzleme Paneli",
      category: "admin",
      badge: "Admin",
      desc: "Kritik sistem olaylarından üretilen error ve success kayıtlarını listeleyen log yönetim paneli. Hataları ve operasyonel başarıları anlık izlemeyi sağlayan merkezi denetim altyapısı."
    },
    {
      title: "Aylık İlan ve Kullanıcı Akış",
      category: "admin",
      badge: "Admin",
      desc: "Kullanıcı kaydı ve ilan hareketliliğini zaman serisi grafiklerle sunan iş zekası paneli. Platformun büyüme ivmesini ve sirkülasyon metriklerini anlık izlemeyi sağlayan analitik arayüz."
    },
    {
      title: "Önbellek İzleme ve Canlı Cache Yönetim Paneli",
      category: "admin",
      badge: "Admin",
      desc: "Belleğe alınmış verileri ve Redis key yapılarını listeleyen cache takip paneli. İhtiyaç halinde önbelleği temizleme ve bellek durumunu optimize etme yeteneğine sahip yönetim arayüzü."
    },
    {
      title: "Admin Denetimli Bildirim ve Duyuru Yönetimi",
      category: "admin",
      badge: "Admin",
      desc: "Tüm veya filtrelenmiş belirli kullanıcılara admin panelinden anlık bildirim gönderen duyuru motoru. Socket.io tetiklemeleriyle çalışan sistem iletişim altyapısı."
    },
  ];

  const filteredFeatures = allFeatures.filter(
    (f) => activeTab === "all" || f.category === activeTab
  );

  return (
    <div id="özellikler" className="w-full py-20 bg-gray-950/20">

      <div className="container mx-auto flex flex-col items-center text-center px-4">
        <p className="text-xs px-5 py-1 border border-orange-300 text-orange-300 rounded-full select-none">
          Özellikler & Mimari
        </p>
        <h2 className="text-white text-5xl font-sans font-semibold mt-5 leading-tight">
          İlan platformunun ihtiyacı olan <span className="text-orange-300">her şey</span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl text-sm">
          Platformun sunduğu kurumsal yetenekleri, güvenlik katmanlarını ve arka plan otomasyonlarını kategorize edilmiş olarak inceleyin.
        </p>
      </div>

      <div className="container mx-auto flex flex-wrap justify-center items-center gap-3 mt-12 px-4 select-none">
        {categories.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${
              activeTab === tab.id ? "text-orange-400" : "text-gray-400 hover:text-white"
            }`}
          >
            {tab.name}
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeFeatureTab"
                className="absolute inset-0 border border-orange-400/30 bg-orange-400/5 rounded-xl -z-10"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      <motion.div 
        layout
        className="mt-12 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12"
      >
        <AnimatePresence mode="popLayout">
          {filteredFeatures.map((item, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              key={item.title}
              className="border border-gray-800/80 rounded-2xl p-6 bg-gray-900/40 backdrop-blur-sm relative flex flex-col justify-between hover:border-orange-400/40 hover:shadow-[0_0_20px_rgba(253,186,116,0.03)] duration-300 transition-all group overflow-hidden"
            >
              <div className="absolute -inset-px bg-gradient-to-br from-orange-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

              <div>
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-white font-semibold text-base tracking-wide group-hover:text-orange-300 duration-300">
                    {item.title}
                  </h3>
                  {item.badge && (
                    <span className="shrink-0 px-2.5 py-0.5 text-[10px] font-semibold rounded-full bg-orange-400/10 text-orange-400 border border-orange-400/20">
                      {item.badge}
                    </span>
                  )}
                </div>
                <p className="text-gray-400 text-sm mt-3 leading-relaxed font-sans font-light">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Features;
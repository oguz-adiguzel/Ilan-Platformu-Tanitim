"use client";
import React from "react";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";

const Users = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 60, damping: 14 },
    },
  };

  return (
    <div id="profiller" className="w-full py-20 bg-gray-950">
      <div className="container mx-auto flex flex-col items-center">
        <motion.div
          className="flex flex-col items-center text-center px-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs px-6 py-1 text-orange-300 border border-orange-300 rounded-full font-medium select-none">
            Rol Tabanlı Erişim Kontrolü (RBAC)
          </p>
          <h2 className="text-4xl text-white font-semibold mt-6 tracking-wide">
            Tek Platform,{" "}
            <span className="text-orange-300">Üç Farklı Deneyim</span>
          </h2>
          <p className="text-gray-400 text-sm mt-3 max-w-2xl font-light">
            Güvenli JWT yetkilendirme katmanıyla ayrıştırılmış, her kullanıcı
            tipine özel optimize edilmiş arayüz ve yetki ekosistemi.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-16 lg:px-24 mt-14 w-full items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div
            variants={cardVariants}
            className="border border-gray-800/80 rounded-2xl bg-gray-900/20 backdrop-blur-sm py-8 px-6 flex flex-col justify-between group hover:border-gray-700/80 hover:shadow-[0_0_30px_rgba(255,255,255,0.01)] transition-all duration-300"
          >
            <div>
              <div className="flex justify-between items-center">
                <h3 className="text-white text-2xl font-semibold tracking-wide">
                  Bireysel
                </h3>
                <span className="text-[10px] uppercase font-mono px-2.5 py-0.5 rounded bg-white/5 border border-white/10 text-gray-400">
                  ROLE_USER
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-2 font-light leading-relaxed">
                Hızlı araç satışı yapmak isteyen bireysel kullanıcılar için.
              </p>
              <div className="h-px bg-gradient-to-r from-gray-800 to-transparent my-6" />

              <div className="space-y-4">
                <div className="flex items-start space-x-3 group/item">
                  <div className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:border-orange-400/50 duration-300">
                    <FaCheck className="text-gray-400 group-hover/item:text-orange-300 text-[9px] duration-300" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-medium">
                      1 Aktif İlan Hakkı
                    </h4>
                    <p className="text-gray-400 text-xs mt-0.5 font-light">
                      Adil kullanım kotasıyla sınırlandırılmış ilan yayınlama
                      hakkı.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 group/item">
                  <div className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:border-orange-400/50 duration-300">
                    <FaCheck className="text-gray-400 group-hover/item:text-orange-300 text-[9px] duration-300" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-medium">
                      Gelişmiş İlan Sihirbazı
                    </h4>
                    <p className="text-gray-400 text-xs mt-0.5 font-light">
                      Adım adım, dinamik marka-model seçimi sunan akıcı ilan
                      ekleme süreci.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 group/item">
                  <div className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:border-orange-400/50 duration-300">
                    <FaCheck className="text-gray-400 group-hover/item:text-orange-300 text-[9px] duration-300" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-medium">
                      Favoriler ve Takip
                    </h4>
                    <p className="text-gray-400 text-xs mt-0.5 font-light">
                      Beğenilen araçları listeye ekleme ve anlık fiyat
                      değişimlerini izleme.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 group/item">
                  <div className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:border-orange-400/50 duration-300">
                    <FaCheck className="text-gray-400 group-hover/item:text-orange-300 text-[9px] duration-300" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-medium">
                      Gerçek Zamanlı Sohbet
                    </h4>
                    <p className="text-gray-400 text-xs mt-0.5 font-light">
                      İlan sahipleri veya galerilerle anlık, Socket.io tabanlı
                      mesajlaşma.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 group/item">
                  <div className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:border-orange-400/50 duration-300">
                    <FaCheck className="text-gray-400 group-hover/item:text-orange-300 text-[9px] duration-300" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-medium">
                      Kişisel Kontrol Paneli
                    </h4>
                    <p className="text-gray-400 text-xs mt-0.5 font-light">
                      Aktif ilanları, gelen mesajları ve hesap ayarlarını
                      yönettiği merkezi dashboard.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="border-2 border-orange-400/40 rounded-2xl bg-gray-900/40 backdrop-blur-sm py-8 px-6 flex flex-col justify-between relative shadow-[0_0_40px_rgba(253,186,116,0.04)] md:-translate-y-2 group hover:border-orange-400 duration-300 transition-all"
          >
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 text-[10px] font-bold tracking-wider rounded-full bg-orange-400 text-black shadow-lg select-none">
              B2B / MAĞAZA
            </span>

            <div>
              <div className="flex justify-between items-center">
                <h3 className="text-white text-2xl font-semibold tracking-wide group-hover:text-orange-300 duration-300">
                  Kurumsal
                </h3>
                <span className="text-[10px] uppercase font-mono px-2.5 py-0.5 rounded bg-orange-400/10 text-orange-400 border border-orange-400/20">
                  ROLE_COMPANY
                </span>
              </div>
              <p className="text-xs text-orange-200/70 mt-2 font-light leading-relaxed">
                Dijitalleşmek isteyen otomotiv profesyonelleri için.
              </p>
              <div className="h-px bg-gradient-to-r from-orange-400/30 to-transparent my-6" />

              <div className="space-y-4">
                <div className="flex items-start space-x-3 group/item">
                  <div className="w-5 h-5 rounded-full bg-orange-400/10 border border-orange-400/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-orange-400 duration-300">
                    <FaCheck className="text-orange-400 group-hover:text-black text-[9px] duration-300" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-medium">
                      20 Aktif İlan Hakkı
                    </h4>
                    <p className="text-gray-400 text-xs mt-0.5 font-light">
                      Kurumsal kota ile yüksek hacimli araç listeleme desteği.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 group/item">
                  <div className="w-5 h-5 rounded-full bg-orange-400/10 border border-orange-400/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-orange-400 duration-300">
                    <FaCheck className="text-orange-400 group-hover:text-black text-[9px] duration-300" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-medium">
                      Mini ERP Ekranı
                    </h4>
                    <p className="text-gray-400 text-xs mt-0.5 font-light">
                      Stok, satış süreçleri ve kurumsal mağaza performansını
                      izleyen özel yönetim paneli.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 group/item">
                  <div className="w-5 h-5 rounded-full bg-orange-400/10 border border-orange-400/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-orange-400 duration-300">
                    <FaCheck className="text-orange-400 group-hover:text-black text-[9px] duration-300" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-medium">
                      Ekip Üyesi Tanımlama
                    </h4>
                    <p className="text-gray-400 text-xs mt-0.5 font-light">
                      Personel hesabı açma, satış danışmanı atama ve ilanlarla
                      ilişkilendirme altyapısı.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 group/item">
                  <div className="w-5 h-5 rounded-full bg-orange-400/10 border border-orange-400/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-orange-400 duration-300">
                    <FaCheck className="text-orange-400 group-hover:text-black text-[9px] duration-300" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-medium">
                      Kurumsal Profil Sayfası
                    </h4>
                    <p className="text-gray-400 text-xs mt-0.5 font-light">
                      Logolu, adres ve vergi bilgileri doğrulanmış, dışa açık
                      galeri vitrini.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 group/item">
                  <div className="w-5 h-5 rounded-full bg-orange-400/10 border border-orange-400/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-orange-400 duration-300">
                    <FaCheck className="text-orange-400 group-hover:text-black text-[9px] duration-300" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-medium">
                      Ön Onaylı Üyelik Akışı
                    </h4>
                    <p className="text-gray-400 text-xs mt-0.5 font-light">
                      Resmi ticari unvan ve evrak doğrulamasıyla (KYC) korunan
                      kurumsal hesap güvenliği.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="border border-gray-800/80 rounded-2xl bg-gray-900/20 backdrop-blur-sm py-8 px-6 flex flex-col justify-between group hover:border-gray-700/80 hover:shadow-[0_0_30px_rgba(255,255,255,0.01)] transition-all duration-300"
          >
            <div>
              <div className="flex justify-between items-center">
                <h3 className="text-white text-2xl font-semibold tracking-wide">
                  Admin
                </h3>
                <span className="text-[10px] uppercase font-mono px-2.5 py-0.5 rounded bg-red-400/10 text-red-400 border border-red-400/20">
                  ROLE_ADMIN
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-2 font-light leading-relaxed">
                Platformun yönetim kademesi için.
              </p>
              <div className="h-px bg-gradient-to-r from-gray-800 to-transparent my-6" />

              <div className="space-y-4">
                <div className="flex items-start space-x-3 group/item">
                  <div className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:border-red-400/50 duration-300">
                    <FaCheck className="text-gray-400 group-hover/item:text-red-400 text-[9px] duration-300" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-medium">
                      İzole Next.js Projesi
                    </h4>
                    <p className="text-gray-400 text-xs mt-0.5 font-light">
                      Ana kullanıcı trafiğinden tamamen bağımsız, izole mimari.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 group/item">
                  <div className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:border-red-400/50 duration-300">
                    <FaCheck className="text-gray-400 group-hover/item:text-red-400 text-[9px] duration-300" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-medium">
                      B2B Başvuru Onaylama
                    </h4>
                    <p className="text-gray-400 text-xs mt-0.5 font-light">
                      Yeni kayıt olan galerilerin yasal verilerini inceleme ve
                      tek tıkla aktivasyon workflow'u.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 group/item">
                  <div className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:border-red-400/50 duration-300">
                    <FaCheck className="text-gray-400 group-hover/item:text-red-400 text-[9px] duration-300" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-medium">
                      Canlı Log Yönetimi
                    </h4>
                    <p className="text-gray-400 text-xs mt-0.5 font-light">
                      Kritik endpoint'lerde oluşan error ve success günlüklerini
                      izleme paneli.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 group/item">
                  <div className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:border-red-400/50 duration-300">
                    <FaCheck className="text-gray-400 group-hover/item:text-red-400 text-[9px] duration-300" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-medium">
                      Redis Cache Takibi
                    </h4>
                    <p className="text-gray-400 text-xs mt-0.5 font-light">
                      Bellekte tutulan verileri anlık izleme ve gerektiğinde
                      manuel temizleme kontrolü.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 group/item">
                  <div className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:border-red-400/50 duration-300">
                    <FaCheck className="text-gray-400 group-hover/item:text-red-400 text-[9px] duration-300" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-medium">
                      Hedefli Bildirim Üretimi
                    </h4>
                    <p className="text-gray-400 text-xs mt-0.5 font-light">
                      Kullanıcı segmentlerine toplu sistem bildirimi gönderme
                      motoru.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Users;

'use client'
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { motion } from "framer-motion";

const Footer = () => {
  // Pürüzsüz Kaydırma Fonksiyonu
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full pt-24 pb-8 bg-gray-900 border-t border-gray-900/60 relative overflow-hidden">
      {/* Arka Plan Hafif Işık Süzmesi */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[150px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-16 lg:px-24">
        {/* ÜST GRUP: Logo, Açıklama ve Linkler */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-gray-900 pb-12">
          
          {/* Sol Blok: Logo ve Misyon */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <motion.img 
              className="w-56 h-auto cursor-pointer" 
              src="dostagider-logo.png" 
              alt="Dosta Gider Logo" 
              whileHover={{ opacity: 0.9, scale: 0.99 }}
              onClick={() => scrollToSection("top")}
            />
            <p className="text-sm text-gray-400 mt-4 leading-relaxed font-light max-w-sm">
              Otomobil ilan platformlarının dinamik ihtiyaçlarına en üst düzey mimari yaklaşımlarla uyum sağlamak üzere tasarlandı.
            </p>
            <p className="text-xs text-gray-200 mt-2 font-mono">
              ⚡ Sıfırdan tüm mimari detaylar düşünülerek kodlandı.
            </p>
          </div>

          {/* Sağ Blok: Link Kolonları (12'li grid sistemine göre hizalandı) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Kolon 1: Proje */}
            <div className="flex flex-col">
              <span className="text-white font-semibold text-xs tracking-widest uppercase font-mono">PROJE</span>
              <ul className="mt-4 space-y-2.5 text-sm text-gray-400 font-light">
                <li onClick={() => scrollToSection("top")} className="hover:text-orange-300 duration-300 cursor-pointer transition-colors w-fit">Anasayfa</li>
                <li onClick={() => scrollToSection("özellikler")} className="hover:text-orange-300 duration-300 cursor-pointer transition-colors w-fit">Özellikler</li>
                <li onClick={() => scrollToSection("özellikler")} className="hover:text-orange-300 duration-300 cursor-pointer transition-colors w-fit">Mobil Deneyim</li>
              </ul>
            </div>

            {/* Kolon 2: Mimari */}
            <div className="flex flex-col">
              <span className="text-white font-semibold text-xs tracking-widest uppercase font-mono">MİMARİ</span>
              <ul className="mt-4 space-y-2.5 text-sm text-gray-400 font-light">
                <li onClick={() => scrollToSection("teknik-sunum")} className="hover:text-orange-300 duration-300 cursor-pointer transition-colors w-fit">Platform Mimarisi</li>
                <li onClick={() => scrollToSection("profiller")} className="hover:text-orange-300 duration-300 cursor-pointer transition-colors w-fit">RBAC Yetkilendirme</li>
                <li onClick={() => scrollToSection("sss")} className="hover:text-orange-300 duration-300 cursor-pointer transition-colors w-fit">SSS</li>
              </ul>
            </div>

            {/* Kolon 3: Yasal & İletişim */}
            <div className="flex flex-col col-span-2 sm:col-span-1">
              <span className="text-white font-semibold text-xs tracking-widest uppercase font-mono">YASAL</span>
              <ul className="mt-4 space-y-2.5 text-sm text-gray-400 font-light">
                <li className="hover:text-orange-300 duration-300 cursor-pointer transition-colors w-fit">Gizlilik Sözleşmesi</li>
                <li className="hover:text-orange-300 duration-300 cursor-pointer transition-colors w-fit">Kullanım Koşulları</li>
                <li className="text-xs font-mono text-gray-300 pt-1 select-all break-all hover:text-gray-200 duration-300">
                  oguz_adiguzel@outlook.com
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* ALT GRUP: Telif ve Sosyal Medya İkonları */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs font-light text-center sm:text-left tracking-wide">
            © {new Date().getFullYear()} Oğuz Adıgüzel. Tüm hakları saklıdır.
          </p>
          
          {/* Sosyal Medya İkon Grubu */}
          <div className="flex items-center space-x-4">
            <motion.a 
              href="https://linkedin.com/in/oğuz-adıgüzel/" target="_blank" rel="noreferrer"
              className="p-2.5 rounded-xl bg-gray-900/40 border border-gray-850 text-gray-400 hover:text-white hover:border-orange-400/30 duration-300 transition-all flex items-center justify-center shadow-inner"
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin size={18} />
            </motion.a>

            <motion.a 
              href="mailto:oguz_adiguzel@outlook.com"
              className="p-2 rounded-xl bg-gray-900/40 border border-gray-850 text-gray-400 hover:text-white hover:border-orange-400/30 duration-300 transition-all flex items-center justify-center shadow-inner"
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <IoIosMail size={22} />
            </motion.a>

            <motion.a 
              href="https://github.com/oguz-adiguzel" target="_blank" rel="noreferrer"
              className="p-2.5 rounded-xl bg-gray-900/40 border border-gray-850 text-gray-400 hover:text-white hover:border-orange-400/30 duration-300 transition-all flex items-center justify-center shadow-inner"
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub size={18} />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
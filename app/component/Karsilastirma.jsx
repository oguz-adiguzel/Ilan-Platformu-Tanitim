"use client";
import React from "react";
import { BsEvStationFill } from "react-icons/bs";
import { FaSearch, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

const Karsilastirma = () => {
  const titleVariants = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        duration: 0.6,
      },
    },
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 180,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 12,
        duration: 0.8,
      },
    },
  };

  return (
    <div className="w-full py-16 overflow-hidden">
      <motion.div
        className="container mx-auto flex flex-col items-center text-center px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <p className="text-orange-300 border border-orange-300 px-6 py-1 rounded-full text-xs">
          Sektör Standartları ve En İyi Pratikler Baz Alınarak Geliştirildi
        </p>

        <motion.p
          className="text-white text-4xl font-sans mt-6 text-shadow-md text-shadow-orange-500"
          variants={titleVariants}
        >
          Büyük ilan platformlarında
        </motion.p>
        <motion.p
          className="text-5xl font-sans text-orange-300 text-shadow-md text-shadow-white my-1"
          variants={titleVariants}
        >
          ne varsa
        </motion.p>
        <motion.p
          className="text-white text-4xl font-sans text-shadow-md text-shadow-orange-500"
          variants={titleVariants}
        >
          bu projede eksiksiz şekilde mevcut.
        </motion.p>

        <p className="mt-6 text-gray-400 font-sans max-w-3xl">
          dostagider.com projesi; milyonlarca kullanıcısı olan dev otomobil
          platformlarının sunduğu tüm temel ve gelişmiş özellikleri kapsayacak
          şekilde mimari edildi.
        </p>
        <p className="text-gray-400 font-sans max-w-3xl mt-2">
          Ticari bir sistemin ihtiyaç duyduğu kurumsal üyelik modellerinden
          dinamik PDF raporlamaya kadar hiçbir detay atlanmadan, modern
          full-stack technologies'le lokal ortamda sıfırdan inşa edildi.
        </p>
      </motion.div>

      <motion.div
        className="container mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-40"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-20px" }}
        variants={gridVariants}
      >
        <motion.div
          className="py-6 px-6 border border-gray-800 rounded-2xl bg-gray-900/50 backdrop-blur-sm shadow-xl hover:border-orange-400/50 duration-300"
          variants={cardVariants}
        >
          <FaUsers size={32} color="orange" />
          <p className="text-white mt-3 font-semibold">
            Bireysel ve Kurumsal Üye Ayrımı
          </p>
          <p className="text-gray-400 text-sm mt-2 leading-relaxed">
            Tıpkı büyük otomotiv sitelerinde olduğu gibi; galeri sahipleri için
            kurumsal üyelik akışları, ilan limitleri ve sisteme entegre profil
            badge (rozet) hiyerarşisi eksiksiz olarak kurgulandı ve backend
            tarafında modellendi.
          </p>
        </motion.div>

        <motion.div
          className="py-6 px-6 border border-gray-800 rounded-2xl bg-gray-900/50 backdrop-blur-sm shadow-xl hover:border-orange-400/50 duration-300"
          variants={cardVariants}
        >
          <FaSearch size={32} color="orange" />
          <p className="text-white mt-3 font-semibold">
            Dinamik ve Derinlemesine Arama Motoru
          </p>
          <p className="text-gray-400 text-sm mt-2 leading-relaxed">
            Marka, model, yıl, kilometre ve hasar durumu gibi onlarca farklı
            araç varyasyonunu milisaniyeler içinde süzen, sektör standartlarında
            bir arama ve filtreleme altyapısı MongoDB indeksleme
            optimizasyonlarıyla birebir uygulandı.
          </p>
        </motion.div>

        <motion.div
          className="py-6 px-6 border border-gray-800 rounded-2xl bg-gray-900/50 backdrop-blur-sm shadow-xl hover:border-orange-400/50 duration-300"
          variants={cardVariants}
        >
          <BsEvStationFill size={32} color="orange" />
          <p className="text-white mt-3 font-semibold">
            Elektrikli Araçlarda Ayrıcalık
          </p>
          <p className="text-gray-400 text-sm mt-2 leading-relaxed">
            Günümüz platformlarında pek rastlanmayan bir yapı ile elektrikli
            araçlar için ayrı bir sayfa bulunuyor. Ayrıca kullanıcılar için
            elektrikli araç ilanlarında ilan haklarından düşmeyen sistem ile
            elektrikli araç ekosistemine katkıda bulunuyor.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Karsilastirma;

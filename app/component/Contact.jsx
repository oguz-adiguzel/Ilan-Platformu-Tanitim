"use client";
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  // Başlık ve alt metinler için süzülme varyantı
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Kartların grid kapsayıcısı için stagger (sıralı tetikleme) varyantı
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Her kart 0.2 saniye arayla soldan sağa açılır
      },
    },
  };

  // Kartların soldan sağa doğru tatlı bir ivmeyle tırmanma varyantı
  const cardVariants = {
    hidden: { opacity: 0, x: -30, y: 20 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 14,
      },
    },
  };

  // Butonların en son aşağıdan pürüzsüzce belirmesi için varyant
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: 0.7, // Kartlar açıldıktan hemen sonra tetiklenir
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div id="teknik-sunum" className="w-full py-20 bg-gray-900 overflow-hidden">
      {/* Üst Başlık Alanı */}
      <motion.div
        className="container mx-auto flex flex-col items-center text-center px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUpVariants}
      >
        <p className="text-xs text-orange-300 px-6 py-1 border border-orange-300 rounded-full select-none">
          Canlı Teknik Sunum
        </p>
        <p className="text-white text-3xl font-sans mt-7 font-semibold tracking-wide">
          Projeyi birlikte inceleyelim, detayları konuşalım
        </p>
        <p className="text-gray-400 font-sans max-w-3xl mt-4 leading-relaxed">
          dostagider.com projesinin kod mimarisini, veri tabanı tasarımını ve
          lokaldeki çalışma performansını merak ediyorsanız, benimle kısa bir
          kahve toplantısı organize edebilirsiniz.
        </p>
      </motion.div>

      {/* 3'lü Süreç Adımları (Grid) */}
      <motion.div
        className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-32 mt-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={gridVariants}
      >
        {/* Adım 01 */}
        <motion.div
          className="border border-gray-800 rounded-2xl px-6 py-5 bg-gray-950/40 backdrop-blur-sm shadow-xl shadow-orange-300/5 hover:border-orange-400/50 duration-300"
          variants={cardVariants}
        >
          <div className="flex items-center space-x-3">
            <p className="text-4xl text-orange-300 font-sans font-extrabold tracking-wider">
              01
            </p>
            <p className="text-white font-semibold">İletişime Geçin</p>
          </div>
          <p className="text-gray-400 text-sm mt-3 leading-relaxed">
            Bana LinkedIn üzerinden bir mesaj atarak veya doğrudan e-posta
            göndererek projeyi canlı bir toplantıda incelemek istediğinizi
            belirtin.
          </p>
        </motion.div>

        {/* Adım 02 */}
        <motion.div
          className="border border-gray-800 rounded-2xl px-6 py-5 bg-gray-950/40 backdrop-blur-sm shadow-xl shadow-orange-300/5 hover:border-orange-400/50 duration-300"
          variants={cardVariants}
        >
          <div className="flex items-center space-x-3">
            <p className="text-4xl text-orange-300 font-sans font-extrabold tracking-wider">
              02
            </p>
            <p className="text-white font-semibold">Toplantıyı Planlayalım</p>
          </div>
          <p className="text-gray-400 text-sm mt-3 leading-relaxed">
            Müsaitlik durumumuza göre Zoom veya Google Meet üzerinden kısa bir
            teknik demo/sunum tarihi belirleyelim.
          </p>
        </motion.div>

        {/* Adım 03 */}
        <motion.div
          className="border border-gray-800 rounded-2xl px-6 py-5 bg-gray-950/40 backdrop-blur-sm shadow-xl shadow-orange-300/5 hover:border-orange-400/50 duration-300"
          variants={cardVariants}
        >
          <div className="flex items-center space-x-3">
            <p className="text-4xl text-orange-300 font-sans font-extrabold tracking-wider">
              03
            </p>
            <p className="text-white font-semibold">Canlı Sunum & Soru-Cevap</p>
          </div>
          <p className="text-gray-400 text-sm mt-3 leading-relaxed">
            Toplantıda size platformun tüm backend ve frontend akışlarını, veri
            modellemesini ve lokalde çalışan canlı sistemin yeteneklerini bizzat
            aktarayım.
          </p>
        </motion.div>
      </motion.div>

      {/* Aksiyon Butonları */}
      <motion.div
        className="container mx-auto flex items-center justify-center space-x-6 md:space-x-10 mt-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={buttonVariants}
      >
        <a
          href="https://github.com/oguz-adiguzel"
          target="_blanck"
          className="w-60 h-12 flex items-center justify-center text-white bg-gray-950 border border-gray-800 rounded-2xl font-semibold cursor-pointer hover:bg-white hover:text-gray-950 duration-300 shadow-lg hover:shadow-white/10 transition-all"
        >
          <p>Linkedin</p>
        </a>
        <a
          href="mailto:oguz_adiguzel@outlook.com"
          className="w-60 h-12 flex items-center justify-center text-white bg-gray-950 border border-gray-800 rounded-2xl font-semibold cursor-pointer hover:bg-orange-400 hover:text-white hover:border-orange-400 duration-300 shadow-lg hover:shadow-orange-400/20 transition-all"
        >
          <p>Email</p>
        </a>
      </motion.div>
    </div>
  );
};

export default Contact;
